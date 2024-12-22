import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.BDpxaoFp.js","_app/immutable/chunks/scheduler.B2r9yBIf.js","_app/immutable/chunks/index.hWTjKFm_.js","_app/immutable/chunks/entry.Cw-EpytZ.js","_app/immutable/chunks/index.CrHfgNqt.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/index.esm.CRLFUBjr.js","_app/immutable/chunks/index-e3d5d3f4.hAq-HhCS.js","_app/immutable/chunks/stores.Dv4S1zKu.js","_app/immutable/chunks/index.esm2017.Bf3Z9SmG.js"];
export const stylesheets = ["_app/immutable/assets/0.BtJ9zgt4.css"];
export const fonts = [];
