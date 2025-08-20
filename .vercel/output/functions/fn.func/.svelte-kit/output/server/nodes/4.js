import * as server from '../entries/pages/finalize/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/finalize/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/finalize/+page.server.js";
export const imports = ["_app/immutable/nodes/4.BBCgQpA-.js","_app/immutable/chunks/scheduler.B2r9yBIf.js","_app/immutable/chunks/index.hWTjKFm_.js","_app/immutable/chunks/globals.D0QH3NT1.js"];
export const stylesheets = ["_app/immutable/assets/4.B7CjF7zB.css"];
export const fonts = [];
