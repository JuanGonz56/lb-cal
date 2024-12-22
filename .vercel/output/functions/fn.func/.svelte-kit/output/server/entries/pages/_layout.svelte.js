import { c as create_ssr_component, v as validate_store, a as subscribe, f as setContext, g as getContext, h as validate_component, d as add_attribute } from "../../chunks/ssr.js";
import { i as invalidateAll } from "../../chunks/client.js";
import { r as readable, w as writable } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import { initializeApp } from "firebase/app";
import { a as PUBLIC_FIREBASE_API_KEY, b as PUBLIC_FIREBASE_AUTH_DOMAIN, P as PUBLIC_FIREBASE_PROJECT_ID, c as PUBLIC_FIREBASE_STORAGE_BUCKET, d as PUBLIC_FIREBASE_MESSAGING_SENDER_ID, e as PUBLIC_FIREBASE_APP_ID } from "../../chunks/public.js";
function createAuth() {
  let auth2;
  const { subscribe: subscribe2 } = readable(void 0, (set) => {
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
    const { signOut: signOut2 } = await import("firebase/auth");
    await signOut2(auth2);
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
    subscribe: subscribe2,
    sign_in,
    sign_out
  };
}
const auth = createAuth();
const PageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $auth, $$unsubscribe_auth;
  validate_store(auth, "auth");
  $$unsubscribe_auth = subscribe(auth, (value) => $auth = value);
  $$unsubscribe_auth();
  return `<main><header class="space-y-4"><nav class="flex gap-4">${$auth === void 0 ? `<p data-svelte-h="svelte-qdsr2u">Loading...</p>` : `${$auth === null ? `<button class="hover:underline" data-svelte-h="svelte-16rgzcb">Sign In</button> ` : `<button class="hover:underline" data-svelte-h="svelte-1ovs07o">Sign Out</button>`}`}</nav></header></main>`;
});
const PageFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
function userStore(auth2, startWith = null) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe3 } = writable(startWith);
    return {
      subscribe: subscribe3
    };
  }
  if (!auth2) {
    console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe3 } = writable(null);
    return {
      subscribe: subscribe3
    };
  }
  const { subscribe: subscribe2 } = writable(auth2?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth2, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2
  };
}
const contextKey = "firebase";
function setFirebaseContext(sdks) {
  setContext(contextKey, sdks);
}
function getFirebaseContext() {
  return getContext(contextKey);
}
const FirebaseApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firestore = void 0 } = $$props;
  let { rtdb = void 0 } = $$props;
  let { auth: auth2 = void 0 } = $$props;
  let { storage = void 0 } = $$props;
  let { analytics = void 0 } = $$props;
  setFirebaseContext({
    firestore,
    rtdb,
    auth: auth2,
    storage,
    analytics
  });
  if ($$props.firestore === void 0 && $$bindings.firestore && firestore !== void 0) $$bindings.firestore(firestore);
  if ($$props.rtdb === void 0 && $$bindings.rtdb && rtdb !== void 0) $$bindings.rtdb(rtdb);
  if ($$props.auth === void 0 && $$bindings.auth && auth2 !== void 0) $$bindings.auth(auth2);
  if ($$props.storage === void 0 && $$bindings.storage && storage !== void 0) $$bindings.storage(storage);
  if ($$props.analytics === void 0 && $$bindings.analytics && analytics !== void 0) $$bindings.analytics(analytics);
  return `${slots.default ? slots.default({}) : ``}`;
});
const SignedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const auth2 = getFirebaseContext().auth;
  const user = userStore(auth2);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({
    user: $user,
    auth: auth2,
    signOut: () => signOut(auth2)
  }) : ``}` : ``}`;
});
const SignedOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const auth2 = getFirebaseContext().auth;
  const user = userStore(auth2);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${!$user ? `${slots.default ? slots.default({ auth: auth2 }) : ``}` : ``}`;
});
const css = {
  code: ".logo-container.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{display:flex;justify-content:center;align-items:center;padding:1rem 0;background-color:black}.logo-container.s-7IPF32Wcq3s8 img.s-7IPF32Wcq3s8{max-width:200px;height:auto;cursor:pointer;transition:transform 0.3s ease}.logo-container.s-7IPF32Wcq3s8 img.s-7IPF32Wcq3s8:hover{transform:scale(1.3)}.cta.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{margin-top:1.5rem;display:flex;justify-content:center;gap:1rem}.cta.s-7IPF32Wcq3s8 a.s-7IPF32Wcq3s8{padding:1rem 2rem;background-color:#52c4f5;color:black;text-decoration:none;border-radius:4px;font-weight:bold;transition:background-color 0.3s ease}.cta.s-7IPF32Wcq3s8 a.s-7IPF32Wcq3s8:hover{background-color:black;color:#66CCFF;border:1.5px solid #52c4f5}.footer.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{text-align:center;padding:1rem 0;background-color:black;color:white}.footer.s-7IPF32Wcq3s8 .social-btns.s-7IPF32Wcq3s8{display:flex;justify-content:center;gap:1rem;margin-top:1rem}.footer.s-7IPF32Wcq3s8 .social-btn.s-7IPF32Wcq3s8{width:60px;height:60px;background-color:#52c4f5;color:black;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;transition:background-color 0.3s ease, transform 0.3s ease}.footer.s-7IPF32Wcq3s8 .social-btn.s-7IPF32Wcq3s8:hover{background-color:black;color:#52c4f5;transform:rotate(360deg);border:1.5px solid #52c4f5}.scroll-top-btn.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{position:fixed;bottom:20px;right:20px;width:50px;height:50px;background-color:#52c4f5;color:black;border-radius:50%;border:none;cursor:pointer;display:none;justify-content:center;align-items:center;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);transition:background-color 0.3s ease, transform 0.3s ease}.scroll-top-btn.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8:hover{background-color:black;color:#52c4f5;transform:scale(1.2);border:1.5px solid #52c4f5}.scroll-top-btn.s-7IPF32Wcq3s8 svg.s-7IPF32Wcq3s8{width:24px;height:24px;transform:translateX(-2.5px)}.forbidden-container.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100vh;background-color:#000000;color:#f5f5f5}.forbidden-container.s-7IPF32Wcq3s8 img.s-7IPF32Wcq3s8{max-width:200px;height:auto;margin-bottom:20px}.forbidden-message.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{font-size:24px;font-weight:bold;color:#52c4f5;margin:0;padding:0 20px}.logo-button.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{max-width:200px;height:auto;cursor:pointer;transition:transform 0.3s ease;margin-bottom:15px}.logo-button.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8:hover{transform:scale(1.3)}.forbidden-message.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{font-size:20px;font-weight:bold;margin-bottom:10px;color:#52c4f5}.redirect-message.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{font-size:16px;color:#66ccff;margin-top:5px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPath;
  let isPublicRoute;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const firebaseConfig = {
    apiKey: PUBLIC_FIREBASE_API_KEY,
    authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: PUBLIC_FIREBASE_APP_ID
  };
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth2 = getAuth(app);
  let logoSrc = "/images/lb-caliper-logo-2.png";
  $$result.css.add(css);
  currentPath = $page?.url?.pathname ?? "";
  isPublicRoute = currentPath.startsWith("/public");
  $$unsubscribe_page();
  return `${validate_component(FirebaseApp, "FirebaseApp").$$render($$result, { auth: auth2, firestore }, {}, {
    default: () => {
      return `${validate_component(PageHeader, "PageHeader").$$render($$result, { auth: auth2 }, {}, {})}  ${isPublicRoute ? ` <div class="logo-container s-7IPF32Wcq3s8"><a href="/public"><img${add_attribute("src", logoSrc, 0)} alt="LB Calipers Logo" class="s-7IPF32Wcq3s8"></a></div>  <div class="cta s-7IPF32Wcq3s8"><a href="/public" class="btn s-7IPF32Wcq3s8" data-svelte-h="svelte-1frabx2">Home</a> <a href="/public/gallery" class="btn s-7IPF32Wcq3s8" data-svelte-h="svelte-1wvgpng">Gallery</a> <a href="/public/bookings" class="btn s-7IPF32Wcq3s8" data-svelte-h="svelte-1xkv5o3">Booking</a> <a href="/inquiries" class="btn s-7IPF32Wcq3s8" data-svelte-h="svelte-jqw0a8">Inquiries</a></div>  <button id="scrollTopBtn" class="scroll-top-btn s-7IPF32Wcq3s8"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-7IPF32Wcq3s8"><path d="M12 19V7M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>` : ``}  ${currentPath === "/inquiries" || currentPath === "/finalizeBook" ? `${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
        default: ({ user }) => {
          return ` ${slots.default ? slots.default({}) : ``}`;
        }
      })} ${validate_component(SignedOut, "SignedOut").$$render($$result, {}, {}, {
        default: () => {
          return ` <div class="forbidden-container s-7IPF32Wcq3s8"> <a href="/public"><img src="/images/lb-caliper-logo-2.png" alt="LB Calipers Logo" class="logo-button s-7IPF32Wcq3s8"></a>  <p class="forbidden-message s-7IPF32Wcq3s8" data-svelte-h="svelte-1xb46u2">This page is for authorized users only!</p> <p class="redirect-message s-7IPF32Wcq3s8" data-svelte-h="svelte-1cujd0k">Please Click the Logo to go back :)</p></div>`;
        }
      })}` : ` ${slots.default ? slots.default({}) : ``}`}  ${isPublicRoute ? `<div class="footer s-7IPF32Wcq3s8"><p data-svelte-h="svelte-1fik92y">Follow us on social media and view our location:</p> <div class="social-btns s-7IPF32Wcq3s8"><a href="https://www.instagram.com/lbcalipers/" target="_blank" class="social-btn s-7IPF32Wcq3s8"><i class="fab fa-instagram"></i> </a> <a href="https://www.google.com/maps/place/1501+Daisy+Ave,+Long+Beach,+CA+90813/@33.786101,-118.2023105,17z/data=!3m1!4b1!4m6!3m5!1s0x80dd315154230e05:0x1c21619d9c1c2ef8!8m2!3d33.786101!4d-118.1997356!16s%2Fg%2F11c25dcq9r?entry=ttu&amp;g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="social-btn s-7IPF32Wcq3s8"><i class="fas fa-map-marker-alt"></i> </a></div></div>` : ``} ${validate_component(PageFooter, "PageFooter").$$render($$result, { auth: auth2 }, {}, {})}`;
    }
  })}`;
});
export {
  Layout as default
};
