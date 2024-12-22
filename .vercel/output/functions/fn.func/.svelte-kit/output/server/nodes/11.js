

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/public/gallery/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.B0sw2-oR.js","_app/immutable/chunks/scheduler.B2r9yBIf.js","_app/immutable/chunks/index.hWTjKFm_.js"];
export const stylesheets = ["_app/immutable/assets/11.BGi1Tb1v.css"];
export const fonts = [];
