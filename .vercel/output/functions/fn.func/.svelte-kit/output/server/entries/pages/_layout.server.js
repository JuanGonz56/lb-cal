import { r as roles_from_user } from "../../chunks/roles_from_user.js";
import { S as SUPERUSER_ROLE } from "../../chunks/private.js";
import { getAuth } from "firebase-admin/auth";
import { f as firebaseServerApp } from "../../chunks/firebaseServerApp.js";
import { s as sanitized } from "../../chunks/sanitized_user_record.js";
import { r as redirect } from "../../chunks/index.js";
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
