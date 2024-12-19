import * as server from '../entries/pages/finalize/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/finalize/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/finalize/+page.server.js";
export const imports = ["_app/immutable/nodes/4.Dx5IIPAP.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.Di6lNc-9.js","_app/immutable/chunks/globals.D0QH3NT1.js"];
export const stylesheets = ["_app/immutable/assets/4.B7CjF7zB.css"];
export const fonts = [];
