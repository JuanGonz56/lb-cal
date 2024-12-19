import * as server from '../entries/pages/login/inquiries/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/inquiries/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/inquiries/+page.server.js";
export const imports = ["_app/immutable/nodes/7.D1Angj_O.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.Di6lNc-9.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/index.esm.qyjGjv3t.js","_app/immutable/chunks/index.esm2017.BCdX2qNA.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.esm.BoLtTinx.js","_app/immutable/chunks/public.Bl44MN_2.js"];
export const stylesheets = ["_app/immutable/assets/7.Cd5rGmju.css"];
export const fonts = [];
