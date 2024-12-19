import { s as sql } from "./database.js";
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
const uid_for_userid = async (userid) => {
  if (!userid) {
    {
      console.log(`uid_for_userid: NULL userid NO Firebase UID`);
    }
    return null;
  }
  const rows = await sql`
    SELECT
        firebase_uid
    FROM
        users
    WHERE
        userid = ${userid}`;
  if (!rows.length) {
    {
      console.log(`uid_for_userid: User ${userid} has NO Firebase UID`);
    }
    return null;
  }
  const firebase_id = rows[0].firebase_uid;
  {
    console.log(`uid_for_userid: User ${userid} has Firebase UID ${firebase_id}`);
  }
  return firebase_id;
};
const userid_for_email = async (email) => {
  if (!email) {
    {
      console.log(`userid_for_email: NO userid`);
    }
    return null;
  }
  const rows = await sql`
    SELECT
        userid
    FROM
        users
    WHERE
        email_address = ${email}`;
  if (!rows.length) {
    {
      console.log(`userid_for_email: Email ${email} has NO userid`);
    }
    return null;
  }
  const userid = parseInt(rows[0].userid);
  {
    console.log(`userid_for_email: Email ${email} has userid ${userid}`);
  }
  return userid;
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
export {
  userid_for_email as a,
  create_local_user_record as c,
  is_uid_present as i,
  number_of_users as n,
  uid_for_userid as u
};
