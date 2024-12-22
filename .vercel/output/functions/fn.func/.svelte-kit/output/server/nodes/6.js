import * as server from '../entries/pages/inquiries/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/inquiries/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/inquiries/+page.server.js";
export const imports = ["_app/immutable/nodes/6.CCZcjwpq.js","_app/immutable/chunks/scheduler.B2r9yBIf.js","_app/immutable/chunks/index.hWTjKFm_.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/index-e3d5d3f4.hAq-HhCS.js","_app/immutable/chunks/index.esm2017.Bf3Z9SmG.js","_app/immutable/chunks/index.CrHfgNqt.js"];
export const stylesheets = ["_app/immutable/assets/6.CKW_dHLT.css"];
export const fonts = [];
