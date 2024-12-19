import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "main.s-w6xmwMmQddDY{background-color:#ee90c7}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="s-w6xmwMmQddDY"><h1 data-svelte-h="svelte-2bs4sa">This page should viewable by logged-in users only</h1> </main>`;
});
export {
  Page as default
};
