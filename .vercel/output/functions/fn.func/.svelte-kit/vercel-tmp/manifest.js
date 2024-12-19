export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","images/bmw-glossblack-wheels.jpg","images/booking-pic-home.jpg","images/calipers10.jpg","images/calipers11.jpg","images/calipers12.jpg","images/calipers13.jpg","images/calipers14.jpg","images/calipers15.jpg","images/calipers2.jpg","images/calipers3.jpg","images/calipers4.jpg","images/calipers5.jpg","images/calipers7.jpg","images/calipers8.jpg","images/calipers9.jpg","images/cyber-red.jpg","images/lambo-brakes-yellow.png","images/lb-caliper-logo-2.png","images/porsche-glossblack-wheels.jpg","images/porsche-green.jpg","images/porsche-gunmetal-wheels.png","images/services-pic-home.jpg","images/tint-service.jpg","images/wheel1.jpg","images/wheel10.jpg","images/wheel11.jpg","images/wheel12.jpg","images/wheel13.jpg","images/wheel3.jpg","images/wheel4.jpg","images/wheel6.jpg","images/wheel7.jpg","images/wheel8.jpg","images/wheel9.jpg","videos/cad-home-demo.mp4","videos/calipers-showcase-home.mp4","videos/Diablo_crazy_edit.mp4","videos/jailbreak-cinematic.mp4","videos/yellow-lambo-home-mp.mp4"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.6d2qcwND.js","app":"_app/immutable/entry/app.Bksq3Waw.js","imports":["_app/immutable/entry/start.6d2qcwND.js","_app/immutable/chunks/entry.D9zgFfnC.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.DHrKRX9J.js","_app/immutable/entry/app.Bksq3Waw.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.IfvzZrA9.js","_app/immutable/chunks/index.Di6lNc-9.js","_app/immutable/chunks/index.Bt-Xh7oU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/sessionLogin",
				pattern: /^\/api\/sessionLogin\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/sessionLogin/_server.js'))
			},
			{
				id: "/api/sessionLogout",
				pattern: /^\/api\/sessionLogout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/sessionLogout/_server.js'))
			},
			{
				id: "/finalizeBook",
				pattern: /^\/finalizeBook\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/finalize",
				pattern: /^\/finalize\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/inquiries",
				pattern: /^\/inquiries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login/inquiries",
				pattern: /^\/login\/inquiries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/product",
				pattern: /^\/product\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/public",
				pattern: /^\/public\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/public/bookings",
				pattern: /^\/public\/bookings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/public/gallery",
				pattern: /^\/public\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/useradmin",
				pattern: /^\/useradmin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/useradmin/listusers",
				pattern: /^\/useradmin\/listusers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/useradmin/manageUserRoles",
				pattern: /^\/useradmin\/manageUserRoles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/user/profile",
				pattern: /^\/user\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
