

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.CDhkAM7D.js","_app/immutable/chunks/scheduler.B2r9yBIf.js","_app/immutable/chunks/index.hWTjKFm_.js"];
export const stylesheets = ["_app/immutable/assets/12.BSlro8Dd.css"];
export const fonts = [];
