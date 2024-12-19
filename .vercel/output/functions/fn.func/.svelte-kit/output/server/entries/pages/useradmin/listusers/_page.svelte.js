import { c as create_ssr_component, e as escape, d as each, a as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { r as roles_from_user } from "../../../../chunks/roles_from_user.js";
const css = {
  code: ".section.s-Wm9nTHrUZepd{margin:1em 0;font-size:larger;font-weight:bold}.bad.s-Wm9nTHrUZepd{margin:1em 0;padding:1em;font-weight:bold;background-color:#f29d9d;border:1px solid #ccc}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<button data-svelte-h="svelte-11qe9jb">User Admin</button> <div class="section s-Wm9nTHrUZepd" data-svelte-h="svelte-1b42f4h">All Users</div> ${data && data.error ? `<div class="bad s-Wm9nTHrUZepd">${escape(data.error)}</div>` : ``} <div class="users"><table><tr><th data-svelte-h="svelte-1vl3vdr">App User Id</th> <th data-svelte-h="svelte-1jogv0j">Display Name</th> <th data-svelte-h="svelte-4smsns">Picture</th> <th data-svelte-h="svelte-1mpo9xu">Phone</th> <th data-svelte-h="svelte-1y73ygm">Email</th> <th data-svelte-h="svelte-1qrn2hp">Roles</th> <th data-svelte-h="svelte-rll4kl">Disabled?</th></tr> ${each(data.users, (u) => {
    return `<tr><td>${u.customClaims?.application_userid ? `${escape(u.customClaims.application_userid)}` : ``}</td> <td>${u.displayName ? `${escape(u.displayName)}` : ``}</td> <td>${u.photoURL ? `<div class="smallpic"><img${add_attribute("src", u.photoURL, 0)} alt="${"Picture of " + escape(u.displayName, true)}"> </div>` : ``}</td> <td>${u.phoneNumber ? `${escape(u.phoneNumber)}` : ``}</td> <td>${u.email ? `${escape(u.email)} ${u.emailVerified ? `✓` : ``}` : ``}</td> <td>${roles_from_user(u) ? `${each(roles_from_user(u), (r) => {
      return `${escape(r)} `;
    })}` : ``}</td> <td>${u.disabled ? `disabled` : ``}</td> </tr>`;
  })}</table> </div>`;
});
export {
  Page as default
};
