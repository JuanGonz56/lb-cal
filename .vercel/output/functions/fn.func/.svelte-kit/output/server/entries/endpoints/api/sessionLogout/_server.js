import { j as json } from "../../../../chunks/index.js";
import { f as firebaseServerApp } from "../../../../chunks/firebaseServerApp.js";
import { getAuth } from "firebase-admin/auth";
async function POST({ request, cookies }) {
  await request.json();
  const sessionCookie = cookies.get("session") || "";
  cookies.set("session", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0
  });
  if (!sessionCookie) {
    return json({ error: "no session cookie" }, 400);
  }
  const claims = await getAuth(firebaseServerApp).verifySessionCookie(
    sessionCookie,
    true
    /** checkRevoked */
  );
  await getAuth().revokeRefreshTokens(claims.sub);
  return json({ message: "success" });
}
export {
  POST
};
