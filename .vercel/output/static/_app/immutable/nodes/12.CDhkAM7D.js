import{s as S,a as f,n as P}from"../chunks/scheduler.B2r9yBIf.js";import{S as k,i as D,d as j,v as E,e as g,s as N,t as p,c as v,a as O,l as y,g as A,b as w,f as I,m as H,h as R,j as c,k as q}from"../chunks/index.hWTjKFm_.js";const b="C:/Users/chorr/OneDrive/Desktop/lb-cal/src/routes/user/profile/+page.svelte";function x(n){let e,o,l="This page should only be viewable by logged-in users",u,a,h="Including users with the Admin role",t,r=n[0].userid+"",m,_;const C={c:function(){e=g("main"),o=g("h1"),o.textContent=l,u=N(),a=g("h2"),a.textContent=h,t=p(`\r
\r
If I were connected to a database, I would show the data about user `),m=p(r),_=p(" because that's who is logged in."),this.h()},l:function(i){e=v(i,"MAIN",{class:!0});var s=O(e);o=v(s,"H1",{"data-svelte-h":!0}),y(o)!=="svelte-hvrlh"&&(o.textContent=l),u=A(s),a=v(s,"H2",{"data-svelte-h":!0}),y(a)!=="svelte-jiepb"&&(a.textContent=h),t=w(s,`\r
\r
If I were connected to a database, I would show the data about user `),m=w(s,r),_=w(s," because that's who is logged in."),s.forEach(I),this.h()},h:function(){f(o,b,4,2,50),f(a,b,5,0,113),H(e,"class","s-iLNSrsyc7gDk"),f(e,b,3,0,40)},m:function(i,s){R(i,e,s),c(e,o),c(e,u),c(e,a),c(e,t),c(e,m),c(e,_)},p:function(i,[s]){s&1&&r!==(r=i[0].userid+"")&&q(m,r)},i:P,o:P,d:function(i){i&&I(e)}};return j("SvelteRegisterBlock",{block:C,id:x.name,type:"component",source:"",ctx:n}),C}function B(n,e,o){let{$$slots:l={},$$scope:u}=e;E("Page",l,[]);let{data:a}=e;n.$$.on_mount.push(function(){a===void 0&&!("data"in e||n.$$.bound[n.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const h=["data"];return Object.keys(e).forEach(t=>{!~h.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Page> was created with unknown prop '${t}'`)}),n.$$set=t=>{"data"in t&&o(0,a=t.data)},n.$capture_state=()=>({data:a}),n.$inject_state=t=>{"data"in t&&o(0,a=t.data)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[a]}class T extends k{constructor(e){super(e),D(this,e,B,x,S,{data:0}),j("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:x.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{T as component};