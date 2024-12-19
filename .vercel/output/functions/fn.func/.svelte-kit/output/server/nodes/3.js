

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.jxI9WBWu.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.Di6lNc-9.js"];
export const stylesheets = ["_app/immutable/assets/3.CBZZUxh4.css"];
export const fonts = [];
