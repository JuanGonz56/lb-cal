import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { a as PUBLIC_FIREBASE_API_KEY, b as PUBLIC_FIREBASE_AUTH_DOMAIN, P as PUBLIC_FIREBASE_PROJECT_ID, c as PUBLIC_FIREBASE_STORAGE_BUCKET, d as PUBLIC_FIREBASE_MESSAGING_SENDER_ID, e as PUBLIC_FIREBASE_APP_ID } from "../../../../chunks/public.js";
const css = {
  code: "section.s-4Qn5G_2dBWjw{max-width:600px;margin:0 auto;padding:20px;background:#000;color:#fff;border-radius:8px;text-align:center}input.s-4Qn5G_2dBWjw{width:100%;padding:10px;margin:10px 0;border:1px solid #52c4f5;border-radius:4px;background:#454a4b;color:#fff}button.s-4Qn5G_2dBWjw{background-color:#52c4f5;color:#000;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;font-weight:bold}button.s-4Qn5G_2dBWjw:hover{background-color:#454a4b;color:#52c4f5}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const firebaseConfig = {
    apiKey: PUBLIC_FIREBASE_API_KEY,
    authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: PUBLIC_FIREBASE_APP_ID
  };
  const app = initializeApp(firebaseConfig);
  getAuth(app);
  let phoneNumber = "+1 714-555-9898";
  let feedbackMessage = "";
  $$result.css.add(css);
  return `<section class="s-4Qn5G_2dBWjw"><h1 data-svelte-h="svelte-15uhi7a">Login with Phone Number</h1> <div><label for="phone-number" data-svelte-h="svelte-92yajb">Phone Number:</label> <input type="tel" id="phone-number" placeholder="+1 555-555-5555" class="s-4Qn5G_2dBWjw"${add_attribute("value", phoneNumber, 0)}> <div id="recaptcha-container"></div> <button class="s-4Qn5G_2dBWjw" data-svelte-h="svelte-g1yroa">Send Verification Code</button></div> ${``} <p>${escape(feedbackMessage)}</p> </section>`;
});
export {
  Page as default
};
