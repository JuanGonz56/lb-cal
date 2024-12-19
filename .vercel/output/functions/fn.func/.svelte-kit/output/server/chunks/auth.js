import { i as invalidateAll } from "./client.js";
import { r as readable } from "./index2.js";
function createAuth() {
  let auth2;
  const { subscribe } = readable(void 0, (set) => {
    let unsubscribe = () => {
    };
    async function init() {
    }
    init();
    return unsubscribe;
  });
  async function sign_in() {
    const { signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
    await signInWithPopup(auth2, new GoogleAuthProvider());
    const csrfToken = "?";
    const idToken = await auth2.currentUser.getIdToken();
    await fetch("/api/sessionLogin", {
      body: JSON.stringify({ idToken, csrfToken }),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    auth2.currentUser.getIdToken(true);
    invalidateAll();
  }
  async function sign_out() {
    const csrfToken = "?";
    const { signOut } = await import("firebase/auth");
    await signOut(auth2);
    await fetch("/api/sessionLogout", {
      body: JSON.stringify({ csrfToken }),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    invalidateAll();
  }
  return {
    subscribe,
    sign_in,
    sign_out
  };
}
const auth = createAuth();
export {
  auth as a
};
