import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { F as FIREBASE_ADMIN_PRIVATE_KEY, a as FIREBASE_ADMIN_CLIENT_EMAIL } from "./private.js";
import { P as PUBLIC_FIREBASE_PROJECT_ID } from "./public.js";
function makeApp() {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0];
  }
  return initializeApp({
    credential: cert({
      privateKey: FIREBASE_ADMIN_PRIVATE_KEY,
      clientEmail: FIREBASE_ADMIN_CLIENT_EMAIL,
      projectId: PUBLIC_FIREBASE_PROJECT_ID
    }),
    databaseURL: `https://${PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}
const firebaseServerApp = makeApp();
const serverAuth = getAuth(firebaseServerApp);
export {
  firebaseServerApp as f,
  serverAuth as s
};
