import { f as firebaseServerApp, s as serverAuth } from "../../../../chunks/firebaseServerApp.js";
import { getAuth } from "firebase-admin/auth";
import { u as uid_for_userid, a as userid_for_email } from "../../../../chunks/user_functions.js";
import { f as fail } from "../../../../chunks/index.js";
const grant_role_to_user = async (userid, role) => {
  const uid = await uid_for_userid(userid);
  if (!uid) {
    return { error: "No such user" };
  }
  const claims_to_add = { ["approle_" + role]: true };
  const aUser = await getAuth(firebaseServerApp).getUser(uid);
  const claimsToSet = { ...aUser.customClaims, ...claims_to_add };
  ["aud", "auth_time", "exp", "iat", "iss", "sub", "firebase"].map((cl) => delete claimsToSet[cl]);
  {
    console.log(`grant_role_to_user: User ${userid}, Firebase UID ${uid}, granting ${role}`);
  }
  await serverAuth.setCustomUserClaims(uid, claimsToSet);
  return { status: "Success" };
};
const revoke_role_from_user = async (userid, role) => {
  const uid = await uid_for_userid(userid);
  if (!uid) {
    return { error: "No such user" };
  }
  const aUser = await getAuth(firebaseServerApp).getUser(uid);
  const claimsToSet = { ...aUser.customClaims };
  delete claimsToSet["approle_" + role];
  ["aud", "auth_time", "exp", "iat", "iss", "sub", "firebase"].map((cl) => delete claimsToSet[cl]);
  {
    console.log(`revoke_role_from_user: User ${userid}, Firebase UID ${uid}, revoking ${role}`);
  }
  await serverAuth.setCustomUserClaims(uid, claimsToSet);
  return { status: "Success" };
};
const user_roles = async (userid) => {
  const uid = await uid_for_userid(userid);
  if (!uid) {
    return null;
  }
  const aUser = await getAuth(firebaseServerApp).getUser(uid);
  const roles = Object.entries({ ...aUser.customClaims }).filter(([key, value]) => key.startsWith("approle_") && value).map(([key]) => key.replace("approle_", ""));
  {
    console.log(`user_roles: User ${userid}, Firebase UID ${uid}, has roles ${roles}`);
  }
  return roles;
};
const actions = {
  clearApplicationId: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    let aUser;
    try {
      aUser = await getAuth(firebaseServerApp).getUserByEmail(email);
    } catch (error) {
      return fail(422, { email, error: "No such user - " + error.message });
    }
    const existingClaims = { ...aUser.customClaims };
    delete existingClaims["application_userid"];
    await getAuth(firebaseServerApp).setCustomUserClaims(aUser.uid, existingClaims);
    return { email, message: `User ${email} de-registered from the application` };
  },
  deleteFirebaseAccount: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    let aUser;
    try {
      aUser = await getAuth(firebaseServerApp).getUserByEmail(email);
    } catch (error) {
      return fail(422, { email, error: "No such user" });
    }
    try {
      count = await getAuth().deleteUser(aUser.uid);
    } catch (error) {
      return fail(422, { email, error: `Error removing user: ${error}` });
    }
    return { email, message: `User ${email} removed from the application` };
  },
  listRoles: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const userid = await userid_for_email(email);
    if (!userid) {
      return fail(422, { email, error: "No such user" });
    }
    const roles = await user_roles(userid);
    if (roles === null) {
      return fail(422, { email, error: `Failed.` });
    }
    return { email, message: `User ${email} has roles: ${roles.join(", ")}` };
  },
  grantRole: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const role = data.get("role") ?? "";
    if (!role) {
      return fail(422, { email, error: "Role required" });
    }
    const result = await grant_role_to_user(await userid_for_email(email), role);
    if (result.error) {
      return fail(422, { email, role, error: result.error });
    }
    return { email, role, message: `User ${email} granted "${role}"` };
  },
  revokeRole: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const role = data.get("role") ?? "";
    if (!role) {
      return fail(422, { email, error: "Role required" });
    }
    const result = await revoke_role_from_user(await userid_for_email(email), role);
    if (result.error) {
      return fail(422, { email, role, error: result.error });
    }
    return { email, role, message: `Revoked "${role}" from user ${email}` };
  }
};
export {
  actions
};
