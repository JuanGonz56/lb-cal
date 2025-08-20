import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: "main.s-iLNSrsyc7gDk{background-color:lightgreen}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="s-iLNSrsyc7gDk"><h1 data-svelte-h="svelte-hvrlh">This page should only be viewable by logged-in users</h1> <h2 data-svelte-h="svelte-jiepb">Including users with the Admin role</h2>

If I were connected to a database, I would show the data about user ${escape(data.userid)} because that&#39;s who is logged in.

</main>`;
});
export {
  Page as default
};
