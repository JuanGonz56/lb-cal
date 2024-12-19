

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/product/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.BHty2Q7_.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.Di6lNc-9.js"];
export const stylesheets = ["_app/immutable/assets/8.z4_I5mt5.css"];
export const fonts = [];
