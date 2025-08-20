import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "main.s-7rWotIBe7yq4{background-color:lavender}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="s-7rWotIBe7yq4"><h1 data-svelte-h="svelte-4kwsca">This page should only be viewable by users with Admin role</h1> </main>`;
});
export {
  Page as default
};
