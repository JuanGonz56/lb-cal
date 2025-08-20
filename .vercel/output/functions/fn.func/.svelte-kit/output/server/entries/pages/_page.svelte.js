import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const css = {
  code: ".container.s-y_bCXRrkrYfP{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;background-color:#000000;color:#ffffff}h1.s-y_bCXRrkrYfP{font-size:2rem;margin-bottom:1.5rem}.logo-button.s-y_bCXRrkrYfP{background:none;border:none;cursor:pointer;outline:none;transition:transform 0.3s ease-in-out}.logo-button.s-y_bCXRrkrYfP:hover{transform:scale(1.2)}.logo.s-y_bCXRrkrYfP{width:200px;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container s-y_bCXRrkrYfP"> <h1 class="s-y_bCXRrkrYfP" data-svelte-h="svelte-os7znr">Welcome to LB Calipers!</h1>  <button class="logo-button s-y_bCXRrkrYfP" aria-label="Go to Home Page"><img src="/images/lb-caliper-logo-2.png" alt="LB Calipers Logo" class="logo s-y_bCXRrkrYfP"></button> <h1 class="s-y_bCXRrkrYfP" data-svelte-h="svelte-1bf25tf">Please click the logo to proceed.</h1></div>`;
});
export {
  Page as default
};
