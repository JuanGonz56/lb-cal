import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
const css = {
  code: ".section.s-4VJOfwZOodQ0{margin:1em 0}form.s-4VJOfwZOodQ0{display:grid;gap:1em}input[type='text'].s-4VJOfwZOodQ0{width:100%}button.s-4VJOfwZOodQ0{font-size:larger;font-weight:bold}.section.s-4VJOfwZOodQ0{font-size:larger;font-weight:bold}.bad.s-4VJOfwZOodQ0{margin:1em 0;padding:1em;font-weight:bold;background-color:#f29d9d;border:1px solid #ccc}.roleActions.s-4VJOfwZOodQ0{margin:1em 0;padding:1em;background-color:#d1eefb;border:1px solid #eee}.message.s-4VJOfwZOodQ0{margin:1em 0;padding:1em;background-color:#a5f699;border:1px solid #ccc}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  $$result.css.add(css);
  return `<button class="s-4VJOfwZOodQ0" data-svelte-h="svelte-14eslq5">User Admin</button> ${form?.message && !form?.error ? `<div class="message s-4VJOfwZOodQ0">${escape(form.message)}</div>` : ``} ${form?.error ? `<div class="bad s-4VJOfwZOodQ0">${escape(form.error)}</div>` : ``} <div class="section s-4VJOfwZOodQ0" data-svelte-h="svelte-8yvbs7">Enter a user&#39;s email, then grant or revoke roles from them.</div> <form action="?/execute" method="post" class="s-4VJOfwZOodQ0"><div><label for="email" data-svelte-h="svelte-1fomza1">User Email:</label> <input required type="email" name="email"${add_attribute("value", form?.email ?? "", 0)}></div> <div><button class="btn s-4VJOfwZOodQ0" formaction="?/listRoles" type="submit" data-svelte-h="svelte-w3d3jl">List Roles</button> <button class="btn s-4VJOfwZOodQ0" formaction="?/clearApplicationId" type="submit" data-svelte-h="svelte-ihqkbn">Remove their application_userid</button> <button class="btn s-4VJOfwZOodQ0" formaction="?/deleteFirebaseAccount" type="submit" data-svelte-h="svelte-paaeq6">Delete their app account</button></div> <div class="roleActions s-4VJOfwZOodQ0"><div><label for="role" data-svelte-h="svelte-lmbb4o">Role:</label> <input type="text" id="role" name="role"${add_attribute("value", form?.role ?? "", 0)} class="s-4VJOfwZOodQ0"></div> <div><button class="btn s-4VJOfwZOodQ0" formaction="?/grantRole" type="submit" data-svelte-h="svelte-sjenh2">Grant</button> <button class="btn s-4VJOfwZOodQ0" formaction="?/revokeRole" type="submit" data-svelte-h="svelte-7o5ql7">Revoke</button></div></div> </form>`;
});
export {
  Page as default
};
