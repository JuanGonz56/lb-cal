

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/product/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.C3Zzm0Mj.js","_app/immutable/chunks/scheduler.B2r9yBIf.js","_app/immutable/chunks/index.hWTjKFm_.js"];
export const stylesheets = ["_app/immutable/assets/8.z4_I5mt5.css"];
export const fonts = [];
