import{s as x,v as y,c as R,a as g,n as b}from"../chunks/scheduler.B2r9yBIf.js";import{S as q,i as B,d as O,v as H,e as E,t as w,s as N,c as $,a as k,b as S,f as d,g as P,h as u,j,k as C}from"../chunks/index.hWTjKFm_.js";import{p as _}from"../chunks/stores.Dv4S1zKu.js";const D="C:/Users/chorr/OneDrive/Desktop/lb-cal/node_modules/@sveltejs/kit/src/runtime/components/svelte-4/error.svelte";function f(r){var h;let e,c=r[0].status+"",o,l,n,i=((h=r[0].error)==null?void 0:h.message)+"",s;const v={c:function(){e=E("h1"),o=w(c),l=N(),n=E("p"),s=w(i),this.h()},l:function(t){e=$(t,"H1",{});var a=k(e);o=S(a,c),a.forEach(d),l=P(t),n=$(t,"P",{});var m=k(n);s=S(m,i),m.forEach(d),this.h()},h:function(){g(e,D,4,0,57),g(n,D,5,0,81)},m:function(t,a){u(t,e,a),j(e,o),u(t,l,a),u(t,n,a),j(n,s)},p:function(t,[a]){var m;a&1&&c!==(c=t[0].status+"")&&C(o,c),a&1&&i!==(i=((m=t[0].error)==null?void 0:m.message)+"")&&C(s,i)},i:b,o:b,d:function(t){t&&(d(e),d(l),d(n))}};return O("SvelteRegisterBlock",{block:v,id:f.name,type:"component",source:"",ctx:r}),v}function U(r,e,c){let o;y(_,"page"),R(r,_,s=>c(0,o=s));let{$$slots:l={},$$scope:n}=e;H("Error",l,[]);const i=[];return Object.keys(e).forEach(s=>{!~i.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Error> was created with unknown prop '${s}'`)}),r.$capture_state=()=>({page:_,$page:o}),[o]}class G extends q{constructor(e){super(e),B(this,e,U,f,x,{}),O("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}}export{G as component};