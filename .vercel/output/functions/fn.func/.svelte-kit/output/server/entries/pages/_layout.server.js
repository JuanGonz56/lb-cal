import { S as SUPERUSER_ROLE } from "../../chunks/private.js";
import { getAuth } from "firebase-admin/auth";
import { f as firebaseServerApp } from "../../chunks/firebaseServerApp.js";
import { r as redirect } from "../../chunks/index.js";
const roles_from_user = (userRec) => {
  if (!userRec || !userRec.customClaims) {
    return [];
  }
  const allRoles = Object.keys(userRec.customClaims);
  const appRoles = allRoles.filter((role) => role.startsWith("approle_"));
  const enabledRoles = appRoles.filter((role) => userRec.customClaims[role]);
  const roles = enabledRoles.map((role) => role.replace("approle_", ""));
  return roles;
};
const path_to_role_map = /* @__PURE__ */ new Map([
  [new RegExp(/^[/]admin([/]|$)/), SUPERUSER_ROLE],
  [new RegExp(/^[/]user([/]|$)/), "user"],
  [new RegExp(/^[/]product([/]|$)/), "user"],
  [new RegExp(/^[/]useradmin([/]|$)/), "useradmin"]
]);
const user_can_access_url = (user_record, url) => {
  let user_supplied = user_record && Object.keys(user_record).length !== 0;
  const roles = user_supplied ? roles_from_user(user_record) : [];
  if (roles.includes(SUPERUSER_ROLE)) {
    return true;
  }
  const [stem] = [...path_to_role_map.keys()].filter((aStem) => aStem.test(url.pathname));
  const result = !stem || user_supplied && roles.includes(path_to_role_map.get(stem));
  return result;
};
const sanitized = (userRec) => {
  if (!userRec) {
    return {};
  }
  const newRec = { ...userRec };
  "providerData,metadata,tenantId,tokensValidAfterTime,passwordHash,passwordSalt".split(",").map((key) => {
    delete newRec[key];
  });
  return newRec;
};
const user_data_from_session = async (sessionCookie) => {
  if (!sessionCookie) {
    return {};
  }
  let allClaims = {};
  if (sessionCookie) {
    try {
      allClaims = await getAuth(firebaseServerApp).verifySessionCookie(sessionCookie, true);
    } catch (error) {
      await console.error(`Error verifying session cookie: ${error}`);
      return null;
    }
  }
  const realUserRec = await getAuth(firebaseServerApp).getUser(allClaims.sub);
  const userRec = sanitized(realUserRec);
  return userRec;
};
const load = async ({ cookies, url }) => {
  const user_record = await user_data_from_session(cookies.get("session"));
  if (user_record === null) {
    redirect(302, "/");
  }
  const application_userid = user_record?.customClaims?.application_userid;
  return {
    user_record,
    userid: application_userid,
    roles: roles_from_user(user_record),
    grant_access: user_can_access_url(user_record, url)
  };
};
export {
  load
};
