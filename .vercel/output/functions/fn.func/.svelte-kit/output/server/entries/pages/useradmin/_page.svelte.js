import { c as create_ssr_component, a as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<main><h1 data-svelte-h="svelte-c41344">Admin Login</h1> <form><label data-svelte-h="svelte-40lqqw">Email</label> <input type="email" required${add_attribute("value", email, 0)}> <label data-svelte-h="svelte-a3t0mr">Password</label> <input type="password" required${add_attribute("value", password, 0)}> <button type="submit" data-svelte-h="svelte-1yamoz0">Login</button></form> </main>`;
});
export {
  Page as default
};
