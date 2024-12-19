import { j as json } from "../../../../chunks/index.js";
import { s as serverAuth } from "../../../../chunks/firebaseServerApp.js";
import { N as NEW_USER_ROLE, S as SUPERUSER_ROLE } from "../../../../chunks/private.js";
import { i as is_uid_present, c as create_local_user_record, n as number_of_users } from "../../../../chunks/user_functions.js";
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
