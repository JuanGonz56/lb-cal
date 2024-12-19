import * as server from '../entries/pages/finalizeBook/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/finalizeBook/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/finalizeBook/+page.server.js";
export const imports = ["_app/immutable/nodes/5.Dubv8kAi.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.Di6lNc-9.js","_app/immutable/chunks/globals.D0QH3NT1.js"];
export const stylesheets = ["_app/immutable/assets/5.BKd7XWUh.css"];
export const fonts = [];
