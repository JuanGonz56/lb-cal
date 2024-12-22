import{s as ae,o as W,a as C,n as Q,r as ne}from"../chunks/scheduler.B2r9yBIf.js";import{S as oe,i as se,d as F,v as re,e as g,s as y,t as le,c as b,a as D,l as V,g as R,f as k,b as ce,m as p,h as ie,j as r,w as L,n as x,k as fe}from"../chunks/index.hWTjKFm_.js";import{g as ue}from"../chunks/globals.D0QH3NT1.js";import{i as z,g as K,R as Y,s as q}from"../chunks/index-e3d5d3f4.hAq-HhCS.js";import{b as de}from"../chunks/index.Bt-Xh7oU.js";import{P as J,a as X,b as Z,c as $,d as ee,e as te}from"../chunks/index.esm.CRLFUBjr.js";const{console:he}=ue,P="C:/Users/chorr/OneDrive/Desktop/lb-cal/src/routes/login/inquiries/+page.svelte";function O(l){let e,t,w="Verification Code:",E,n,h,c,_="Verify Code",a,v;const f={c:function(){e=g("div"),t=g("label"),t.textContent=w,E=y(),n=g("input"),h=y(),c=g("button"),c.textContent=_,this.h()},l:function(o){e=b(o,"DIV",{});var u=D(e);t=b(u,"LABEL",{for:!0,"data-svelte-h":!0}),V(t)!=="svelte-xrff0d"&&(t.textContent=w),E=R(u),n=b(u,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),h=R(u),c=b(u,"BUTTON",{class:!0,"data-svelte-h":!0}),V(c)!=="svelte-4208hy"&&(c.textContent=_),u.forEach(k),this.h()},h:function(){p(t,"for","verification-code"),C(t,P,109,3,3203),p(n,"type","text"),p(n,"id","verification-code"),p(n,"placeholder","Enter code"),p(n,"class","s-4Qn5G_2dBWjw"),C(n,P,110,3,3265),p(c,"class","s-4Qn5G_2dBWjw"),C(c,P,111,3,3369),C(e,P,108,2,3193)},m:function(o,u){ie(o,e,u),r(e,t),r(e,E),r(e,n),L(n,l[1]),r(e,h),r(e,c),a||(v=[x(n,"input",l[7]),x(c,"click",l[5],!1,!1,!1,!1)],a=!0)},p:function(o,u){u&2&&n.value!==o[1]&&L(n,o[1])},d:function(o){o&&k(e),a=!1,ne(v)}};return F("SvelteRegisterBlock",{block:f,id:O.name,type:"if",source:"(108:1) {#if confirmationResult}",ctx:l}),f}function G(l){let e,t,w="Login with Phone Number",E,n,h,c="Phone Number:",_,a,v,f,s,o,u="Send Verification Code",U,S,B,N,T,i,d=l[2]&&O(l);const H={c:function(){e=g("section"),t=g("h1"),t.textContent=w,E=y(),n=g("div"),h=g("label"),h.textContent=c,_=y(),a=g("input"),v=y(),f=g("div"),s=y(),o=g("button"),o.textContent=u,U=y(),d&&d.c(),S=y(),B=g("p"),N=le(l[3]),this.h()},l:function(I){e=b(I,"SECTION",{class:!0});var m=D(e);t=b(m,"H1",{"data-svelte-h":!0}),V(t)!=="svelte-15uhi7a"&&(t.textContent=w),E=R(m),n=b(m,"DIV",{});var A=D(n);h=b(A,"LABEL",{for:!0,"data-svelte-h":!0}),V(h)!=="svelte-92yajb"&&(h.textContent=c),_=R(A),a=b(A,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),v=R(A),f=b(A,"DIV",{id:!0}),D(f).forEach(k),s=R(A),o=b(A,"BUTTON",{class:!0,"data-svelte-h":!0}),V(o)!=="svelte-g1yroa"&&(o.textContent=u),A.forEach(k),U=R(m),d&&d.l(m),S=R(m),B=b(m,"P",{});var M=D(B);N=ce(M,l[3]),M.forEach(k),m.forEach(k),this.h()},h:function(){C(t,P,97,1,2844),p(h,"for","phone-number"),C(h,P,99,2,2888),p(a,"type","tel"),p(a,"id","phone-number"),p(a,"placeholder","+1 555-555-5555"),p(a,"class","s-4Qn5G_2dBWjw"),C(a,P,100,2,2939),p(f,"id","recaptcha-container"),C(f,P,102,2,3038),p(o,"class","s-4Qn5G_2dBWjw"),C(o,P,104,2,3080),C(n,P,98,1,2879),C(B,P,115,1,3442),p(e,"class","s-4Qn5G_2dBWjw"),C(e,P,96,0,2832)},m:function(I,m){ie(I,e,m),r(e,t),r(e,E),r(e,n),r(n,h),r(n,_),r(n,a),L(a,l[0]),r(n,v),r(n,f),r(n,s),r(n,o),r(e,U),d&&d.m(e,null),r(e,S),r(e,B),r(B,N),T||(i=[x(a,"input",l[6]),x(o,"click",l[4],!1,!1,!1,!1)],T=!0)},p:function(I,[m]){m&1&&L(a,I[0]),I[2]?d?d.p(I,m):(d=O(I),d.c(),d.m(e,S)):d&&(d.d(1),d=null),m&8&&fe(N,I[3])},i:Q,o:Q,d:function(I){I&&k(e),d&&d.d(),T=!1,ne(i)}};return F("SvelteRegisterBlock",{block:H,id:G.name,type:"component",source:"",ctx:l}),H}function _e(l,e,t){let{$$slots:w={},$$scope:E}=e;re("Page",w,[]);const n={apiKey:J,authDomain:X,projectId:Z,storageBucket:$,messagingSenderId:ee,appId:te},h=z(n),c=K(h);let _="+1 714-555-9898",a="",v=null,f=null,s="",o=null;const u=()=>{f||(f=new Y("recaptcha-container",{size:"normal",callback:i=>{console.log("reCAPTCHA solved:",i),t(3,s="reCAPTCHA solved. You can now proceed.")},"expired-callback":()=>{console.log("reCAPTCHA expired. Please solve it again."),t(3,s="reCAPTCHA expired. Please solve it again.")}},c),f.render())},U=async()=>{if(!_){t(3,s="Please enter a valid phone number.");return}try{t(2,v=await q(c,_,f)),t(3,s="Verification code sent! Please check your phone.")}catch(i){console.error("Error sending verification code:",i),t(3,s="Failed to send verification code. Please try again.")}},S=async()=>{if(!a){t(3,s="Please enter the verification code.");return}try{o=(await v.confirm(a)).user,t(3,s="Phone number verified successfully! You are now logged in.")}catch(i){console.error("Error verifying code:",i),t(3,s="Invalid verification code. Please try again.")}};W(()=>{u()});const B=[];Object.keys(e).forEach(i=>{!~B.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&he.warn(`<Page> was created with unknown prop '${i}'`)});function N(){_=this.value,t(0,_)}function T(){a=this.value,t(1,a)}return l.$capture_state=()=>({onMount:W,RecaptchaVerifier:Y,signInWithPhoneNumber:q,browser:de,getAuth:K,initializeApp:z,PUBLIC_FIREBASE_API_KEY:J,PUBLIC_FIREBASE_AUTH_DOMAIN:X,PUBLIC_FIREBASE_PROJECT_ID:Z,PUBLIC_FIREBASE_STORAGE_BUCKET:$,PUBLIC_FIREBASE_MESSAGING_SENDER_ID:ee,PUBLIC_FIREBASE_APP_ID:te,firebaseConfig:n,app:h,auth:c,phoneNumber:_,verificationCode:a,confirmationResult:v,recaptchaVerifier:f,feedbackMessage:s,signedInUser:o,initializeRecaptcha:u,sendVerificationCode:U,verifyCode:S}),l.$inject_state=i=>{"phoneNumber"in i&&t(0,_=i.phoneNumber),"verificationCode"in i&&t(1,a=i.verificationCode),"confirmationResult"in i&&t(2,v=i.confirmationResult),"recaptchaVerifier"in i&&(f=i.recaptchaVerifier),"feedbackMessage"in i&&t(3,s=i.feedbackMessage),"signedInUser"in i&&(o=i.signedInUser)},e&&"$$inject"in e&&l.$inject_state(e.$$inject),[_,a,v,s,U,S,N,T]}class Pe extends oe{constructor(e){super(e),se(this,e,_e,G,ae,{}),F("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:G.name})}}export{Pe as component};