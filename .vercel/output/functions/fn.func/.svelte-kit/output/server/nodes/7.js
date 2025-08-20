import * as server from '../entries/pages/login/inquiries/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/inquiries/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/inquiries/+page.server.js";
export const imports = ["_app/immutable/nodes/7.3yw0shbl.js","_app/immutable/chunks/scheduler.B2r9yBIf.js","_app/immutable/chunks/index.hWTjKFm_.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/index-e3d5d3f4.hAq-HhCS.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.esm.CRLFUBjr.js"];
export const stylesheets = ["_app/immutable/assets/7.Cd5rGmju.css"];
export const fonts = [];
