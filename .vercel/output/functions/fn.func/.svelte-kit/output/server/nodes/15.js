import * as server from '../entries/pages/useradmin/manageUserRoles/_page.server.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/useradmin/manageUserRoles/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/useradmin/manageUserRoles/+page.server.js";
export const imports = ["_app/immutable/nodes/15.yPk2bYN0.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.Di6lNc-9.js","_app/immutable/chunks/entry.D9zgFfnC.js","_app/immutable/chunks/index.DHrKRX9J.js"];
export const stylesheets = ["_app/immutable/assets/15.CojhmXxt.css"];
export const fonts = [];
