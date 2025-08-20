import { j as json } from "../../../../chunks/index.js";
import { s as serverAuth } from "../../../../chunks/firebaseServerApp.js";
import { N as NEW_USER_ROLE, S as SUPERUSER_ROLE } from "../../../../chunks/private.js";
import { s as sql } from "../../../../chunks/database.js";
const is_uid_present = async (uid) => {
  const rows = await sql`
    SELECT
        COUNT(*) as matching_count
    FROM
        users
    WHERE
        firebase_uid = ${uid}`;
  const user_is_valid = rows[0].matching_count == 1;
  {
    console.log(`is_uid_present: User ${uid} ${user_is_valid ? "exists" : "does not exist"} in database`);
  }
  return user_is_valid;
};
const number_of_users = async () => {
  const rows = await sql`
    SELECT
        COUNT(*) as count
    FROM
        users`;
  const user_count = parseInt(rows[0].count);
  {
    console.log(`number_of_users: ${user_count} users in the database`);
  }
  return user_count;
};
const create_local_user_record = async (uid, email, user_name) => {
  {
    console.log(
      "create_local_user_record: about to create in the database",
      {
        firebase_uid: uid,
        email_address: email,
        name: user_name
      }
    );
    const rows = await sql`
    INSERT INTO
        users (firebase_uid, email_address, name)
    VALUES
        (${uid}, ${email}, ${user_name})
    RETURNING
        userid`;
    if (!rows.length) {
      {
        console.log(
          "create_local_user_record: failed to create in the database",
          {
            firebase_uid: uid,
            email_address: email,
            name: user_name
          }
        );
      }
      return null;
    }
    const userid = parseInt(rows[0].userid);
    {
      console.log(
        "create_local_user_record: created in the database",
        {
          firebase_uid: uid,
          email_address: email,
          name: user_name,
          userid
        }
      );
    }
    return userid;
  }
};
const handle_user_logging_in = async (claims) => {
  {
    console.log(`handle_user_logging_in: ${claims.email} ${claims.name} ${claims.uid}`);
  }
  if (await is_uid_present(claims.uid)) {
    return;
  }
  const application_userid = await create_local_user_record(claims.uid, claims.email, claims.name);
  if (!application_userid) {
    return;
  }
  const claims_to_add = { application_userid, ["approle_" + NEW_USER_ROLE]: true };
  {
    console.log(`Adding user ${application_userid}/${claims.email}/${claims.name} with role ${NEW_USER_ROLE}`);
  }
  if (number_of_users() === 1) {
    {
      console.log(`Adding ${SUPERUSER_ROLE} role to ${application_userid}/${claims.email} (since they are the first user)`);
    }
    claims_to_add["approle_" + SUPERUSER_ROLE] = true;
  }
  let claimsToSet = { ...claims, ...claims_to_add };
  ["aud", "auth_time", "exp", "iat", "iss", "sub", "firebase"].map((cl) => delete claimsToSet[cl]);
  await serverAuth.setCustomUserClaims(claims.uid, claimsToSet);
};
async function POST({ request, cookies }) {
  const { idToken, csrfToken } = await request.json();
  const claims = await serverAuth.verifyIdToken(idToken);
  await handle_user_logging_in(claims);
  const expiresIn = 60 * 60 * 24 * 5 * 1e3;
  const sessionCookie = await serverAuth.createSessionCookie(idToken, { expiresIn });
  const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: "/" };
  cookies.set("session", sessionCookie, options);
  return json({ message: "success" });
}
export {
  POST
};
