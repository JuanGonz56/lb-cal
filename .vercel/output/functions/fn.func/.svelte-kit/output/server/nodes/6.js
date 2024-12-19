import * as server from '../entries/pages/inquiries/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/inquiries/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/inquiries/+page.server.js";
export const imports = ["_app/immutable/nodes/6.BoZ3KFpI.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.Di6lNc-9.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/index.esm.qyjGjv3t.js","_app/immutable/chunks/index.esm2017.BCdX2qNA.js","_app/immutable/chunks/index.esm2017.BWKr7K9b.js","_app/immutable/chunks/index.DHrKRX9J.js"];
export const stylesheets = ["_app/immutable/assets/6.CKW_dHLT.css"];
export const fonts = [];
