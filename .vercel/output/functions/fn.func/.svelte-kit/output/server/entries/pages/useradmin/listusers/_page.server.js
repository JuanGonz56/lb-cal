import { f as firebaseServerApp } from "../../../../chunks/firebaseServerApp.js";
import { getAuth } from "firebase-admin/auth";
import { s as sanitized } from "../../../../chunks/sanitized_user_record.js";
const load = async () => {
  let users;
  try {
    const { users: userRecs } = await getAuth(firebaseServerApp).listUsers(1e3, void 0);
    users = userRecs.map((ur) => sanitized(ur));
  } catch (error) {
    return { error: "Cannot list users: " + error, users: [] };
  }
  return { users };
};
export {
  load
};
