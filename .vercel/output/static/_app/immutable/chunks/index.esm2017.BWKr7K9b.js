import{d as Bt,r as mt,S as ns,g as Qh,c as is}from"./index.esm2017.BCdX2qNA.js";import{f as Jh,B as Zh,s as bo,v as Po,c as Mo,h as Lo,u as xo,i as Fo,j as Uo}from"./scheduler.IfvzZrA9.js";import{S as Bo,i as Ho,d as he,v as $o,w as cn,h as Wo,D as Rt,F as jo,B as se,C as Vo,f as Go}from"./index.Di6lNc-9.js";import{onAuthStateChanged as tc,signOut as rr}from"./index.esm.qyjGjv3t.js";import{w as ri}from"./index.DHrKRX9J.js";function un(e,t=null){let n;if(!globalThis.window){const{subscribe:s}=ri(t);return{subscribe:s}}if(!e){console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:s}=ri(null);return{subscribe:s}}const{subscribe:i}=ri((e==null?void 0:e.currentUser)??null,s=>(n=tc(e,r=>{s(r)}),()=>n()));return{subscribe:i}}var or={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ec=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],l=e[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(a&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,l=o?e[s+1]:0,a=s+2<e.length,h=a?e[s+2]:0,c=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|h>>6,g=h&63;a||(g=64,o||(d=64)),i.push(n[c],n[u],n[d],n[g])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ec(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const u=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||h==null||u==null)throw new nc;const d=r<<2|l>>4;if(i.push(d),h!==64){const g=l<<4&240|h>>2;if(i.push(g),u!==64){const _=h<<6&192|u;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};let nc=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const ic=function(e){const t=qo(e);return Ko.encodeByteArray(t,!0)},lr=function(e){return ic(e).replace(/\./g,"")},sc=function(e){try{return Ko.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=()=>rc().__FIREBASE_DEFAULTS__,lc=()=>{if(typeof process>"u"||typeof or>"u")return;const e=or.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ac=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&sc(e[1]);return t&&JSON.parse(t)},hc=()=>{try{return oc()||lc()||ac()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},cc=e=>{var t,n;return(n=(t=hc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},uc=e=>{const t=cc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[lr(JSON.stringify(n)),lr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="FirebaseError";let zo=class Yo extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=fc,Object.setPrototypeOf(this,Yo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pc.prototype.create)}},pc=class{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?gc(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new zo(s,l,i)}};function gc(e,t){return e.replace(_c,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const _c=/\{\$([^}]+)}/g;let mc=class{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(I||(I={}));const yc={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},vc=I.INFO,Ec={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},Tc=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=Ec[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let wc=class{constructor(t){this.name=t,this._logLevel=vc,this._logHandler=Tc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in I))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...t),this._logHandler(this,I.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...t),this._logHandler(this,I.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,I.INFO,...t),this._logHandler(this,I.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,I.WARN,...t),this._logHandler(this,I.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...t),this._logHandler(this,I.ERROR,...t)}};var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,ss=ss||{},m=Cc||self;function bn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Pn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ic(e){return Object.prototype.hasOwnProperty.call(e,oi)&&e[oi]||(e[oi]=++Sc)}var oi="closure_uid_"+(1e9*Math.random()>>>0),Sc=0;function Ac(e,t,n){return e.call.apply(e.bind,arguments)}function Rc(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=Ac:Y=Rc,Y.apply(null,arguments)}function nn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function B(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[s].apply(i,o)}}function Ot(){this.s=this.s,this.o=this.o}var Nc=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nc!=0)&&Ic(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function rs(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function ar(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(bn(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var kc=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{m.addEventListener("test",()=>{},t),m.removeEventListener("test",()=>{},t)}catch{}return e}();function Oe(e){return/^[\s\xa0]*$/.test(e)}function Mn(){var e=m.navigator;return e&&(e=e.userAgent)?e:""}function ft(e){return Mn().indexOf(e)!=-1}function os(e){return os[" "](e),e}os[" "]=function(){};function Dc(e,t){var n=Iu;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Oc=ft("Opera"),be=ft("Trident")||ft("MSIE"),Qo=ft("Edge"),Ai=Qo||be,Jo=ft("Gecko")&&!(Mn().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),bc=Mn().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function Zo(){var e=m.document;return e?e.documentMode:void 0}t:{var hr="",li=function(){var e=Mn();if(Jo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Qo)return/Edge\/([\d\.]+)/.exec(e);if(be)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(bc)return/WebKit\/(\S+)/.exec(e);if(Oc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(li&&(hr=li?li[1]:""),be){var cr=Zo();if(cr!=null&&cr>parseFloat(hr))break t}}m.document&&be&&Zo();function Pe(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Jo){t:{try{os(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Pc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Pe.$.h.call(this)}}B(Pe,X);var Pc={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ln="closure_listenable_"+(1e6*Math.random()|0),Mc=0;function Lc(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Mc,this.fa=this.ia=!1}function xn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ls(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function xc(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function tl(e){const t={};for(const n in e)t[n]=e[n];return t}const ur="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function el(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<ur.length;r++)n=ur[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Fn(e){this.src=e,this.g={},this.h=0}Fn.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Ni(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Lc(t,this.src,r,!!i,s),t.ia=n,e.push(t)),t};function Ri(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=Xo(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(xn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ni(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}var as="closure_lm_"+(1e6*Math.random()|0),ai={};function nl(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)nl(e,t[r],n,i,s);return null}return n=rl(n),e&&e[Ln]?e.O(t,n,Pn(i)?!!i.capture:!!i,s):Fc(e,t,n,!1,i,s)}function Fc(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=Pn(s)?!!s.capture:!!s,l=cs(e);if(l||(e[as]=l=new Fn(e)),n=l.add(t,n,i,o,r),n.proxy)return n;if(i=Uc(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)kc||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(sl(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Uc(){function e(n){return t.call(e.src,e.listener,n)}const t=Bc;return e}function il(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)il(e,t[r],n,i,s);else i=Pn(i)?!!i.capture:!!i,n=rl(n),e&&e[Ln]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Ni(r,n,i,s),-1<n&&(xn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=cs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ni(t,n,i,s)),(n=-1<e?t[e]:null)&&hs(n))}function hs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ln])Ri(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(sl(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=cs(t))?(Ri(n,e),n.h==0&&(n.src=null,t[as]=null)):xn(e)}}}function sl(e){return e in ai?ai[e]:ai[e]="on"+e}function Bc(e,t){if(e.fa)e=!0;else{t=new Pe(t,this);var n=e.listener,i=e.la||e.src;e.ia&&hs(e),e=n.call(i,t)}return e}function cs(e){return e=e[as],e instanceof Fn?e:null}var hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function rl(e){return typeof e=="function"?e:(e[hi]||(e[hi]=function(t){return e.handleEvent(t)}),e[hi])}function U(){Ot.call(this),this.i=new Fn(this),this.S=this,this.J=null}B(U,Ot);U.prototype[Ln]=!0;U.prototype.removeEventListener=function(e,t,n,i){il(this,e,t,n,i)};function W(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var s=t;t=new X(i,e),el(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=sn(o,i,!0,t)&&s}if(o=t.g=e,s=sn(o,i,!0,t)&&s,s=sn(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=sn(o,i,!1,t)&&s}U.prototype.N=function(){if(U.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)xn(n[i]);delete e.g[t],e.h--}}this.J=null};U.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};U.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function sn(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Ri(e.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var us=m.JSON.stringify;class Hc{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function $c(){var e=ds;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wc{constructor(){this.h=this.g=null}add(t,n){const i=ol.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ol=new Hc(()=>new jc,e=>e.reset());class jc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Vc(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Gc(e){m.setTimeout(()=>{throw e},0)}let Me,Le=!1,ds=new Wc,ll=()=>{const e=m.Promise.resolve(void 0);Me=()=>{e.then(qc)}};var qc=()=>{for(var e;e=$c();){try{e.h.call(e.g)}catch(n){Gc(n)}var t=ol;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Le=!1};function Un(e,t){U.call(this),this.h=e||1,this.g=t||m,this.j=Y(this.qb,this),this.l=Date.now()}B(Un,U);p=Un.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(fs(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){Un.$.N.call(this),fs(this),delete this.g};function ps(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:m.setTimeout(e,t||0)}function al(e){e.g=ps(()=>{e.g=null,e.i&&(e.i=!1,al(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Kc extends Ot{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:al(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(e){Ot.call(this),this.h=e,this.g={}}B(xe,Ot);var dr=[];function hl(e,t,n,i){Array.isArray(n)||(n&&(dr[0]=n.toString()),n=dr);for(var s=0;s<n.length;s++){var r=nl(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function cl(e){ls(e.g,function(t,n){this.g.hasOwnProperty(n)&&hs(t)},e),e.g={}}xe.prototype.N=function(){xe.$.N.call(this),cl(this)};xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bn(){this.g=!0}Bn.prototype.Ea=function(){this.g=!1};function zc(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var h=l[a].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&u[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Yc(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Qt(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Qc(e,n)+(i?" "+i:"")})}function Xc(e,t){e.info(function(){return"TIMEOUT: "+t})}Bn.prototype.info=function(){};function Qc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return us(n)}catch{return t}}var ce={},fr=null;function gs(){return fr=fr||new U}ce.Ta="serverreachability";function ul(e){X.call(this,ce.Ta,e)}B(ul,X);function Fe(e){const t=gs();W(t,new ul(t))}ce.STAT_EVENT="statevent";function dl(e,t){X.call(this,ce.STAT_EVENT,e),this.stat=t}B(dl,X);function Q(e){const t=gs();W(t,new dl(t,e))}ce.Ua="timingevent";function fl(e,t){X.call(this,ce.Ua,e),this.size=t}B(fl,X);function je(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){e()},t)}var _s={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Jc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ms(){}ms.prototype.h=null;function pr(e){return e.h||(e.h=e.i())}function Zc(){}var Ve={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ys(){X.call(this,"d")}B(ys,X);function vs(){X.call(this,"c")}B(vs,X);var ki;function Hn(){}B(Hn,ms);Hn.prototype.g=function(){return new XMLHttpRequest};Hn.prototype.i=function(){return{}};ki=new Hn;function Ge(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new xe(this),this.P=tu,e=Ai?125:void 0,this.V=new Un(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var tu=45e3,Di={},dn={};p=Ge.prototype;p.setTimeout=function(e){this.P=e};function Oi(e,t,n){e.L=1,e.v=Wn(It(t)),e.s=n,e.S=!0,gl(e,null)}function gl(e,t){e.G=Date.now(),qe(e),e.A=It(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Cl(n.i,"t",i),e.C=0,n=e.l.J,e.h=new pl,e.g=Vl(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Kc(Y(e.Pa,e,e.g),e.O)),hl(e.U,e.g,"readystatechange",e.nb),t=e.I?tl(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Fe(),zc(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;const t=this.M;t&&pt(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{const c=pt(this.g);var t=this.g.Ia();const u=this.g.da();if(!(3>c)&&(c!=3||Ai||this.g&&(this.h.h||this.g.ja()||yr(this.g)))){this.J||c!=4||t==7||(t==8||0>=u?Fe(3):Fe(2)),$n(this);var n=this.g.da();this.ca=n;e:if(_l(this)){var i=yr(this.g);e="";var s=i.length,r=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Se(this);var o="";break e}this.h.i=new m.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Yc(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oe(l)){var h=l;break e}}h=null}if(n=h)Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bi(this,n);else{this.i=!1,this.o=3,Q(12),Mt(this),Se(this);break t}}this.S?(ml(this,c,o),Ai&&this.i&&c==3&&(hl(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),bi(this,o)),c==4&&Mt(this),this.i&&!this.J&&(c==4?Hl(this.l,this):(this.i=!1,qe(this)))}else Tu(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),Mt(this),Se(this)}}}catch{}finally{}};function _l(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ml(e,t,n){let i=!0,s;for(;!e.J&&e.C<n.length;)if(s=eu(e,n),s==dn){t==4&&(e.o=4,Q(14),i=!1),Qt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Di){e.o=4,Q(15),Qt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Qt(e.j,e.m,s,null),bi(e,s);_l(e)&&s!=dn&&s!=Di&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Q(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ss(t),t.M=!0,Q(11))):(Qt(e.j,e.m,n,"[Invalid Chunked Response]"),Mt(e),Se(e))}p.mb=function(){if(this.g){var e=pt(this.g),t=this.g.ja();this.C<t.length&&($n(this),ml(this,e,t),this.i&&e!=4&&qe(this))}};function eu(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?dn:(n=Number(t.substring(n,i)),isNaN(n)?Di:(i+=1,i+n>t.length?dn:(t=t.slice(i,i+n),e.C=i+n,t)))}p.cancel=function(){this.J=!0,Mt(this)};function qe(e){e.Y=Date.now()+e.P,yl(e,e.P)}function yl(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=je(Y(e.lb,e),t)}function $n(e){e.B&&(m.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Xc(this.j,this.A),this.L!=2&&(Fe(),Q(17)),Mt(this),this.o=2,Se(this)):yl(this,this.Y-e)};function Se(e){e.l.H==0||e.J||Hl(e.l,e)}function Mt(e){$n(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,fs(e.V),cl(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function bi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Pi(n.i,e))){if(!e.K&&Pi(n.i,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)gn(n),qn(n);else break t;Is(n),Q(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=je(Y(n.ib,n),6e3));if(1>=Al(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Lt(n,11)}else if((e.K||n.g==e)&&gn(n),!Oe(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const c=h[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const u=h[4];u!=null&&(n.Ga=u,n.l.info("SVER="+n.Ga));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=e.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=i.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Es(r,r.h),r.h=null))}if(i.F){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(i.Da=R,b(i.I,i.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=jl(i,i.J?i.pa:null,i.Y),o.K){Rl(i.i,o);var l=o,a=i.L;a&&l.setTimeout(a),l.B&&($n(l),qe(l)),i.g=o}else Ul(i);0<n.j.length&&Kn(n)}else h[0]!="stop"&&h[0]!="close"||Lt(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Lt(n,7):Cs(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}Fe(4)}catch{}}function nu(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(bn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function iu(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(bn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function vl(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(bn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=iu(e),i=nu(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var El=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function su(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,fn(this,e.j),this.s=e.s,this.g=e.g,pn(this,e.m),this.l=e.l;var t=e.i,n=new Ue;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),gr(this,n),this.o=e.o}else e&&(t=String(e).match(El))?(this.h=!1,fn(this,t[1]||"",!0),this.s=Ce(t[2]||""),this.g=Ce(t[3]||"",!0),pn(this,t[4]),this.l=Ce(t[5]||"",!0),gr(this,t[6]||"",!0),this.o=Ce(t[7]||"")):(this.h=!1,this.i=new Ue(null,this.h))}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ie(t,_r,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ie(t,_r,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ie(n,n.charAt(0)=="/"?lu:ou,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ie(n,hu)),e.join("")};function It(e){return new Ut(e)}function fn(e,t,n){e.j=n?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function pn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function gr(e,t,n){t instanceof Ue?(e.i=t,cu(e.i,e.h)):(n||(t=Ie(t,au)),e.i=new Ue(t,e.h))}function b(e,t,n){e.i.set(t,n)}function Wn(e){return b(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ie(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ru),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ru(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var _r=/[#\/\?@]/g,ou=/[#\?:]/g,lu=/[#\?]/g,au=/[#\?@]/g,hu=/#/g;function Ue(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&su(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=Ue.prototype;p.add=function(e,t){bt(this),this.i=null,e=ue(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Tl(e,t){bt(e),t=ue(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function wl(e,t){return bt(e),t=ue(e,t),e.g.has(t)}p.forEach=function(e,t){bt(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};p.ta=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};p.Z=function(e){bt(this);let t=[];if(typeof e=="string")wl(this,e)&&(t=t.concat(this.g.get(ue(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return bt(this),this.i=null,e=ue(this,e),wl(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Cl(e,t,n){Tl(e,t),0<n.length&&(e.i=null,e.g.set(ue(e,t),rs(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function ue(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function cu(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Tl(this,i),Cl(this,s,n))},e)),e.j=t}var uu=class{constructor(e,t){this.g=e,this.map=t}};function Il(e){this.l=e||du,m.PerformanceNavigationTiming?(e=m.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(m.g&&m.g.Ka&&m.g.Ka()&&m.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var du=10;function Sl(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Al(e){return e.h?1:e.g?e.g.size:0}function Pi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Es(e,t){e.g?e.g.add(t):e.h=t}function Rl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Il.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Nl(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return rs(e.i)}var fu=class{stringify(e){return m.JSON.stringify(e,void 0)}parse(e){return m.JSON.parse(e,void 0)}};function pu(){this.g=new fu}function gu(e,t,n){const i=n||"";try{vl(e,function(s,r){let o=s;Pn(s)&&(o=us(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function _u(e,t){const n=new Bn;if(m.Image){const i=new Image;i.onload=nn(rn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=nn(rn,n,i,"TestLoadImage: error",!1,t),i.onabort=nn(rn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=nn(rn,n,i,"TestLoadImage: timeout",!1,t),m.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function rn(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function jn(e){this.l=e.fc||null,this.j=e.ob||!1}B(jn,ms);jn.prototype.g=function(){return new Vn(this.l,this.j)};jn.prototype.i=function(e){return function(){return e}}({});function Vn(e,t){U.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ts,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}B(Vn,U);var Ts=0;p=Vn.prototype;p.open=function(e,t){if(this.readyState!=Ts)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Be(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||m).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=Ts};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kl(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function kl(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ke(this):Be(this),this.readyState==3&&kl(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,Ke(this))};p.Ya=function(e){this.g&&(this.response=e,Ke(this))};p.ka=function(){this.g&&Ke(this)};function Ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Be(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Be(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var mu=m.JSON.parse;function M(e){U.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dl,this.L=this.M=!1}B(M,U);var Dl="",yu=/^https?$/i,vu=["POST","PUT"];p=M.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ki.g(),this.C=this.u?pr(this.u):pr(ki),this.g.onreadystatechange=Y(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){mr(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=m.FormData&&e instanceof m.FormData,!(0<=Xo(vu,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pl(this),0<this.B&&((this.L=Eu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.ua,this)):this.A=ps(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){mr(this,r)}};function Eu(e){return be&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof ss<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function mr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ol(e),Gn(e)}function Ol(e){e.F||(e.F=!0,W(e,"complete"),W(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),Gn(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gn(this,!0)),M.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?bl(this):this.kb())};p.kb=function(){bl(this)};function bl(e){if(e.h&&typeof ss<"u"&&(!e.C[1]||pt(e)!=4||e.da()!=2)){if(e.v&&pt(e)==4)ps(e.La,0,e);else if(W(e,"readystatechange"),pt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var i;if(i=o===0){var s=String(e.I).match(El)[1]||null;!s&&m.self&&m.self.location&&(s=m.self.location.protocol.slice(0,-1)),i=!yu.test(s?s.toLowerCase():"")}n=i}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var r=2<pt(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",Ol(e)}}finally{Gn(e)}}}}function Gn(e,t){if(e.g){Pl(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=i}catch{}}}function Pl(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(m.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function pt(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),mu(t)}};function yr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Dl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Tu(e){const t={};e=(e.g&&2<=pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<e.length;i++){if(Oe(e[i]))continue;var n=Vc(e[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}xc(t,function(i){return i.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ml(e){let t="";return ls(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function ws(e,t,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ml(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):b(e,t,n))}function me(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ll(e){this.Ga=0,this.j=[],this.l=new Bn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=me("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=me("baseRetryDelayMs",5e3,e),this.hb=me("retryDelaySeedMs",1e4,e),this.eb=me("forwardChannelMaxRetries",2,e),this.xa=me("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Il(e&&e.concurrentRequestLimit),this.Ja=new pu,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=Ll.prototype;p.ra=8;p.H=1;function Cs(e){if(xl(e),e.H==3){var t=e.W++,n=It(e.I);if(b(n,"SID",e.K),b(n,"RID",t),b(n,"TYPE","terminate"),ze(e,n),t=new Ge(e,e.l,t),t.L=2,t.v=Wn(It(n)),n=!1,m.navigator&&m.navigator.sendBeacon)try{n=m.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&m.Image&&(new Image().src=t.v,n=!0),n||(t.g=Vl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),qe(t)}Wl(e)}function qn(e){e.g&&(Ss(e),e.g.cancel(),e.g=null)}function xl(e){qn(e),e.u&&(m.clearTimeout(e.u),e.u=null),gn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&m.clearTimeout(e.m),e.m=null)}function Kn(e){if(!Sl(e.i)&&!e.m){e.m=!0;var t=e.Na;Me||ll(),Le||(Me(),Le=!0),ds.add(t,e),e.C=0}}function wu(e,t){return Al(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=je(Y(e.Na,e,t),$l(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ge(this,this.l,e);let r=this.s;if(this.U&&(r?(r=tl(r),el(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Fl(this,s,t),n=It(this.I),b(n,"RID",e),b(n,"CVER",22),this.F&&b(n,"X-HTTP-Session-Id",this.F),ze(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(Ml(r)))+"&"+t:this.o&&ws(n,this.o,r)),Es(this.i,s),this.bb&&b(n,"TYPE","init"),this.P?(b(n,"$req",t),b(n,"SID","null"),s.aa=!0,Oi(s,n,null)):Oi(s,n,t),this.H=2}}else this.H==3&&(e?vr(this,e):this.j.length==0||Sl(this.i)||vr(this))};function vr(e,t){var n;t?n=t.m:n=e.W++;const i=It(e.I);b(i,"SID",e.K),b(i,"RID",n),b(i,"AID",e.V),ze(e,i),e.o&&e.s&&ws(i,e.o,e.s),n=new Ge(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Fl(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Es(e.i,n),Oi(n,i,t)}function ze(e,t){e.na&&ls(e.na,function(n,i){b(t,i,n)}),e.h&&vl({},function(n,i){b(t,i,n)})}function Fl(e,t,n){n=Math.min(e.j.length,n);var i=e.h?Y(e.h.Va,e.h,e):null;t:{var s=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let h=s[a].g;const c=s[a].map;if(h-=r,0>h)r=Math.max(0,s[a].g-100),l=!1;else try{gu(c,o,"req"+h+"_")}catch{i&&i(c)}}if(l){i=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,i}function Ul(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Me||ll(),Le||(Me(),Le=!0),ds.add(t,e),e.A=0}}function Is(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=je(Y(e.Ma,e),$l(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,Bl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=je(Y(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Q(10),qn(this),Bl(this))};function Ss(e){e.B!=null&&(m.clearTimeout(e.B),e.B=null)}function Bl(e){e.g=new Ge(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=It(e.wa);b(t,"RID","rpc"),b(t,"SID",e.K),b(t,"AID",e.V),b(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&b(t,"TO",e.qa),b(t,"TYPE","xmlhttp"),ze(e,t),e.o&&e.s&&ws(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Wn(It(t)),n.s=null,n.S=!0,gl(n,e)}p.ib=function(){this.v!=null&&(this.v=null,qn(this),Is(this),Q(19))};function gn(e){e.v!=null&&(m.clearTimeout(e.v),e.v=null)}function Hl(e,t){var n=null;if(e.g==t){gn(e),Ss(e),e.g=null;var i=2}else if(Pi(e.i,t))n=t.F,Rl(e.i,t),i=1;else return;if(e.H!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;i=gs(),W(i,new fl(i,n)),Kn(e)}else Ul(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(i==1&&wu(e,t)||i==2&&Is(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Lt(e,5);break;case 4:Lt(e,10);break;case 3:Lt(e,6);break;default:Lt(e,2)}}}function $l(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Lt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var i=Y(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||fn(n,"https"),Wn(n)),_u(n.toString(),i)}else Q(2);e.H=0,e.h&&e.h.za(t),Wl(e),xl(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Q(2)):(this.l.info("Failed to ping google.com"),Q(1))};function Wl(e){if(e.H=0,e.ma=[],e.h){const t=Nl(e.i);(t.length!=0||e.j.length!=0)&&(ar(e.ma,t),ar(e.ma,e.j),e.i.i.length=0,rs(e.j),e.j.length=0),e.h.ya()}}function jl(e,t,n){var i=n instanceof Ut?It(n):new Ut(n);if(i.g!="")t&&(i.g=t+"."+i.g),pn(i,i.m);else{var s=m.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Ut(null);i&&fn(r,i),t&&(r.g=t),s&&pn(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&b(i,n,t),b(i,"VER",e.ra),ze(e,i),i}function Vl(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new M(new jn({ob:!0})):new M(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function Gl(){}p=Gl.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function ot(e,t){U.call(this),this.g=new Ll(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Oe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Oe(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new de(this)}B(ot,U);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Q(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=jl(e,null,e.Y),Kn(e)};ot.prototype.close=function(){Cs(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=us(e),e=n);t.j.push(new uu(t.fb++,e)),t.H==3&&Kn(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,Cs(this.g),delete this.g,ot.$.N.call(this)};function ql(e){ys.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}B(ql,ys);function Kl(){vs.call(this),this.status=1}B(Kl,vs);function de(e){this.g=e}B(de,Gl);de.prototype.Ba=function(){W(this.g,"a")};de.prototype.Aa=function(e){W(this.g,new ql(e))};de.prototype.za=function(e){W(this.g,new Kl)};de.prototype.ya=function(){W(this.g,"b")};function Cu(){this.blockSize=-1}function yt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}B(yt,Cu);yt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ci(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(n^s))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^r)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~r))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}yt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=n;)ci(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){ci(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){ci(this,i),s=0;break}}this.h=s,this.i+=t};yt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function C(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=e[s]|0;i&&r==t||(n[s]=r,i=!1)}this.g=n}var Iu={};function As(e){return-128<=e&&128>e?Dc(e,function(t){return new C([t|0],0>t?-1:0)}):new C([e|0],0>e?-1:0)}function gt(e){if(isNaN(e)||!isFinite(e))return te;if(0>e)return H(gt(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Mi;return new C(t,0)}function zl(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(zl(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gt(Math.pow(t,8)),i=te,s=0;s<e.length;s+=8){var r=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+r),t);8>r?(r=gt(Math.pow(t,r)),i=i.R(r).add(gt(o))):(i=i.R(n),i=i.add(gt(o)))}return i}var Mi=4294967296,te=As(0),Li=As(1),Er=As(16777216);p=C.prototype;p.ea=function(){if(it(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Mi+i)*t,t*=Mi}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Tt(this))return"0";if(it(this))return"-"+H(this).toString(e);for(var t=gt(Math.pow(e,6)),n=this,i="";;){var s=mn(n,t).g;n=_n(n,s.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Tt(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Tt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function it(e){return e.h==-1}p.X=function(e){return e=_n(this,e),it(e)?-1:Tt(e)?0:1};function H(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new C(n,~e.h).add(Li)}p.abs=function(){return it(this)?H(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(e.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new C(n,n[n.length-1]&-2147483648?-1:0)};function _n(e,t){return e.add(H(t))}p.R=function(e){if(Tt(this)||Tt(e))return te;if(it(this))return it(e)?H(this).R(H(e)):H(H(this).R(e));if(it(e))return H(this.R(H(e)));if(0>this.X(Er)&&0>e.X(Er))return gt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,l=e.D(s)>>>16,a=e.D(s)&65535;n[2*i+2*s]+=o*a,on(n,2*i+2*s),n[2*i+2*s+1]+=r*a,on(n,2*i+2*s+1),n[2*i+2*s+1]+=o*l,on(n,2*i+2*s+1),n[2*i+2*s+2]+=r*l,on(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new C(n,0)};function on(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ye(e,t){this.g=e,this.h=t}function mn(e,t){if(Tt(t))throw Error("division by zero");if(Tt(e))return new ye(te,te);if(it(e))return t=mn(H(e),t),new ye(H(t.g),H(t.h));if(it(t))return t=mn(e,H(t)),new ye(H(t.g),t.h);if(30<e.g.length){if(it(e)||it(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Li,i=t;0>=i.X(e);)n=Tr(n),i=Tr(i);var s=Yt(n,1),r=Yt(i,1);for(i=Yt(i,2),n=Yt(n,2);!Tt(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=Yt(i,1),n=Yt(n,1)}return t=_n(e,s.R(t)),new ye(s,t)}for(s=te;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=gt(n),o=r.R(t);it(o)||0<o.X(e);)n-=i,r=gt(n),o=r.R(t);Tt(r)&&(r=Li),s=s.add(r),e=_n(e,o)}return new ye(s,e)}p.gb=function(e){return mn(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new C(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new C(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new C(n,this.h^e.h)};function Tr(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new C(n,e.h)}function Yt(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new C(s,e.h)}ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;_s.NO_ERROR=0;_s.TIMEOUT=8;_s.HTTP_ERROR=6;Jc.COMPLETE="complete";Zc.EventType=Ve;Ve.OPEN="a";Ve.CLOSE="b";Ve.ERROR="c";Ve.MESSAGE="d";U.prototype.listen=U.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;yt.prototype.digest=yt.prototype.l;yt.prototype.reset=yt.prototype.reset;yt.prototype.update=yt.prototype.j;C.prototype.add=C.prototype.add;C.prototype.multiply=C.prototype.R;C.prototype.modulo=C.prototype.gb;C.prototype.compare=C.prototype.X;C.prototype.toNumber=C.prototype.ea;C.prototype.toString=C.prototype.toString;C.prototype.getBits=C.prototype.D;C.fromNumber=gt;C.fromString=zl;var Su=C;const wr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}j.UNAUTHENTICATED=new j(null),j.GOOGLE_CREDENTIALS=new j("google-credentials-uid"),j.FIRST_PARTY=new j("first-party-uid"),j.MOCK_USER=new j("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new wc("@firebase/firestore");function et(e,...t){if(re.logLevel<=I.DEBUG){const n=t.map(Ns);re.debug(`Firestore (${Ye}): ${e}`,...n)}}function Rs(e,...t){if(re.logLevel<=I.ERROR){const n=t.map(Ns);re.error(`Firestore (${Ye}): ${e}`,...n)}}function Au(e,...t){if(re.logLevel<=I.WARN){const n=t.map(Ns);re.warn(`Firestore (${Ye}): ${e}`,...n)}}function Ns(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e="Unexpected state"){const t=`FIRESTORE (${Ye}) INTERNAL ASSERTION FAILED: `+e;throw Rs(t),new Error(t)}function xi(e,t){e||ks()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends zo{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ru{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(j.UNAUTHENTICATED))}shutdown(){}}class Nu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ku{constructor(t){this.t=t,this.currentUser=j.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ee,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;t.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{et("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(et("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ee)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(et("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xi(typeof i.accessToken=="string"),new Yl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return xi(t===null||typeof t=="string"),new j(t)}}class Du{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=j.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ou{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new Du(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(j.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pu{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=r=>{r.error!=null&&et("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,et("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{et("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):et("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(xi(typeof n.token=="string"),this.T=n.token,new bu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Mu(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function Xl(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,n,i,s,r,o,l,a,h){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=h}}class yn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr,v;(v=Cr||(Cr={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Su([4294967295,4294967295],0);function ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,n,i=1e3,s=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&et("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,l=new Ds(t,n,o,s,r);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uu(e,t){if(Rs("AsyncQueue",`${t}: ${e}`),Xl(e))return new K(q.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=j.UNAUTHENTICATED,this.clientId=Lu.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{et("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(et("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Uu(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Map;function Hu(e,t,n,i){if(t===!0&&i===!0)throw new K(q.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $u(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ks()}function Wu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new K(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$u(e);throw new K(q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new K(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new K(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ql((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,i}}class Jl{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new K(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ru;switch(n.type){case"firstParty":return new Ou(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ir.get(t);n&&(et("ComponentProvider","Removing Datastore"),Ir.delete(t),n.terminate())}(this),Promise.resolve()}}function ju(e,t,n,i={}){var s;const r=(e=Wu(e,Jl))._getSettings(),o=`${t}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Au("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,a;if(typeof i.mockUserToken=="string")l=i.mockUserToken,a=j.MOCK_USER;else{l=dc(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new K(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new j(h)}e._authCredentials=new Nu(new Yl(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Fu(this,"async_queue_retry"),this.Xc=()=>{const n=ui();n&&et("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=ui();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ee;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Xl(t))throw t;et("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Rs("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(t,n,i){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const s=Ds.createAndSchedule(this,t,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&ks()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class Gu extends Jl{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new Vu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qu(this),this._firestoreClient.terminate()}}function Um(e,t){const n=typeof e=="object"?e:Qh(),i=typeof e=="string"?e:t||"(default)",s=is(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=uc("firestore");r&&ju(s,...r)}return s}function qu(e){var t,n,i;const s=e._freezeSettings(),r=function(o,l,a,h){return new xu(o,l,a,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ql(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Bu(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){Ye=n})(ns),Bt(new mc("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Gu(new ku(n.getProvider("auth-internal")),new Pu(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new K(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(l.options.projectId,a)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),mt(wr,"3.13.0",e),mt(wr,"3.13.0","esm2017")})();const Zl="firebase";function Bm(e){Jh(Zl,e)}function vn(){return Zh(Zl)}const Ku=e=>({user:e&1}),Ar=e=>({user:e[0],auth:e[1],signOut:e[5]});function Fi(e){let t;const n=e[4].default,i=Lo(n,e,e[3],Ar),s={c:function(){i&&i.c()},l:function(o){i&&i.l(o)},m:function(o,l){i&&i.m(o,l),t=!0},p:function(o,l){i&&i.p&&(!t||l&9)&&xo(i,n,o,o[3],t?Uo(n,o[3],l,Ku):Fo(o[3]),Ar)},i:function(o){t||(Rt(i,o),t=!0)},o:function(o){se(i,o),t=!1},d:function(o){i&&i.d(o)}};return he("SvelteRegisterBlock",{block:s,id:Fi.name,type:"if",source:"(8:2) {#if $user}",ctx:e}),s}function Ui(e){let t,n,i=e[0]&&Fi(e);const s={c:function(){i&&i.c(),t=cn()},l:function(o){i&&i.l(o),t=cn()},m:function(o,l){i&&i.m(o,l),Wo(o,t,l),n=!0},p:function(o,[l]){o[0]?i?(i.p(o,l),l&1&&Rt(i,1)):(i=Fi(o),i.c(),Rt(i,1),i.m(t.parentNode,t)):i&&(jo(),se(i,1,1,()=>{i=null}),Vo())},i:function(o){n||(Rt(i),n=!0)},o:function(o){se(i),n=!1},d:function(o){o&&Go(t),i&&i.d(o)}};return he("SvelteRegisterBlock",{block:s,id:Ui.name,type:"component",source:"",ctx:e}),s}function zu(e,t,n){let i,{$$slots:s={},$$scope:r}=t;$o("SignedIn",s,["default"]);const o=vn().auth,l=un(o);Po(l,"user"),Mo(e,l,c=>n(0,i=c));const a=[];Object.keys(t).forEach(c=>{!~a.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<SignedIn> was created with unknown prop '${c}'`)});const h=()=>rr(o);return e.$$set=c=>{"$$scope"in c&&n(3,r=c.$$scope)},e.$capture_state=()=>({userStore:un,getFirebaseContext:vn,signOut:rr,auth:o,user:l,$user:i}),[i,o,l,r,s,h]}class Hm extends Bo{constructor(t){super(t),Ho(this,t,zu,Ui,bo,{}),he("SvelteRegisterComponent",{component:this,tagName:"SignedIn",options:t,id:Ui.name})}}const Yu=e=>({}),Rr=e=>({auth:e[1]});function Bi(e){let t;const n=e[4].default,i=Lo(n,e,e[3],Rr),s={c:function(){i&&i.c()},l:function(o){i&&i.l(o)},m:function(o,l){i&&i.m(o,l),t=!0},p:function(o,l){i&&i.p&&(!t||l&8)&&xo(i,n,o,o[3],t?Uo(n,o[3],l,Yu):Fo(o[3]),Rr)},i:function(o){t||(Rt(i,o),t=!0)},o:function(o){se(i,o),t=!1},d:function(o){i&&i.d(o)}};return he("SvelteRegisterBlock",{block:s,id:Bi.name,type:"if",source:"(7:2) {#if !$user}",ctx:e}),s}function Hi(e){let t,n,i=!e[0]&&Bi(e);const s={c:function(){i&&i.c(),t=cn()},l:function(o){i&&i.l(o),t=cn()},m:function(o,l){i&&i.m(o,l),Wo(o,t,l),n=!0},p:function(o,[l]){o[0]?i&&(jo(),se(i,1,1,()=>{i=null}),Vo()):i?(i.p(o,l),l&1&&Rt(i,1)):(i=Bi(o),i.c(),Rt(i,1),i.m(t.parentNode,t))},i:function(o){n||(Rt(i),n=!0)},o:function(o){se(i),n=!1},d:function(o){o&&Go(t),i&&i.d(o)}};return he("SvelteRegisterBlock",{block:s,id:Hi.name,type:"component",source:"",ctx:e}),s}function Xu(e,t,n){let i,{$$slots:s={},$$scope:r}=t;$o("SignedOut",s,["default"]);const o=vn().auth,l=un(o);Po(l,"user"),Mo(e,l,h=>n(0,i=h));const a=[];return Object.keys(t).forEach(h=>{!~a.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<SignedOut> was created with unknown prop '${h}'`)}),e.$$set=h=>{"$$scope"in h&&n(3,r=h.$$scope)},e.$capture_state=()=>({getFirebaseContext:vn,userStore:un,auth:o,user:l,$user:i}),[i,o,l,r,s]}class $m extends Bo{constructor(t){super(t),Ho(this,t,Xu,Hi,bo,{}),he("SvelteRegisterComponent",{component:this,tagName:"SignedOut",options:t,id:Hi.name})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="FirebaseError";let ta=class ea extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Qu,Object.setPrototypeOf(this,ea.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ju.prototype.create)}},Ju=class{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Zu(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ta(s,l,i)}};function Zu(e,t){return e.replace(td,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const td=/\{\$([^}]+)}/g;let ed=class{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="firebasestorage.googleapis.com",nd="storageBucket",id=2*60*1e3,sd=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ta{constructor(t,n,i=0){super(di(t),`Firebase Storage: ${n} (${di(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Et.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return di(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vt||(vt={}));function di(e){return"storage/"+e}function rd(){const e="An unknown error occurred, please check the error payload for server response.";return new Et(vt.UNKNOWN,e)}function od(){return new Et(vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ld(){return new Et(vt.CANCELED,"User canceled the upload/download.")}function ad(e){return new Et(vt.INVALID_URL,"Invalid URL '"+e+"'.")}function hd(e){return new Et(vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Nr(e){return new Et(vt.INVALID_ARGUMENT,e)}function ia(){return new Et(vt.APP_DELETED,"The Firebase app was deleted.")}function cd(e){return new Et(vt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=ht.makeFromUrl(t,n)}catch{return new ht(t,"")}if(i.path==="")return i;throw hd(t)}static makeFromUrl(t,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(tt){tt.path.charAt(tt.path.length-1)==="/"&&(tt.path_=tt.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function h(tt){tt.path_=decodeURIComponent(tt.path)}const c="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${c}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},R=n===na?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",At=new RegExp(`^https?://${R}/${s}/${N}`,"i"),dt=[{regex:l,indices:a,postModify:r},{regex:g,indices:_,postModify:h},{regex:At,indices:{bucket:1,path:2},postModify:h}];for(let tt=0;tt<dt.length;tt++){const en=dt[tt],ii=en.regex.exec(t);if(ii){const Xh=ii[en.indices.bucket];let si=ii[en.indices.path];si||(si=""),i=new ht(Xh,si),en.postModify(i);break}}if(i==null)throw ad(t);return i}}class ud{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(e,t,n){let i=1,s=null,r=null,o=!1,l=0;function a(){return l===2}let h=!1;function c(...N){h||(h=!0,t.apply(null,N))}function u(N){s=setTimeout(()=>{s=null,e(g,a())},N)}function d(){r&&clearTimeout(r)}function g(N,...At){if(h){d();return}if(N){d(),c.call(null,N,...At);return}if(a()||o){d(),c.call(null,N,...At);return}i<64&&(i*=2);let dt;l===1?(l=2,dt=0):dt=(i+Math.random())*1e3,u(dt)}let _=!1;function R(N){_||(_=!0,d(),!h&&(s!==null?(N||(l=2),clearTimeout(s),u(0)):N||(l=1)))}return u(0),r=setTimeout(()=>{o=!0,R(!0)},n),R}function fd(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(e){return e!==void 0}function kr(e,t,n,i){if(i<t)throw Nr(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw Nr(`Invalid value for '${e}'. Expected ${n} or less.`)}function gd(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const s=t(i)+"="+t(e[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(En||(En={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,n,i,s,r,o,l,a,h,c,u,d=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=h,this.progressCallback_=c,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const t=(i,s)=>{if(s){i(!1,new ln(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,h)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===En.NO_ERROR,a=r.getStatus();if(!l||_d(a,this.additionalRetryCodes_)&&this.retry){const c=r.getErrorCode()===En.ABORT;i(!1,new ln(!1,null,c));return}const h=this.successCodes_.indexOf(a)!==-1;i(!0,new ln(h,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());pd(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=rd();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?ia():ld();o(a)}else{const a=od();o(a)}};this.canceled_?n(!1,new ln(!1,null,!0)):this.backoffId_=dd(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&fd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ln{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function yd(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function vd(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ed(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Td(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function wd(e,t,n,i,s,r,o=!0){const l=gd(e.urlParams),a=e.url+l,h=Object.assign({},e.headers);return Ed(h,t),yd(h,n),vd(h,r),Td(h,i),new md(a,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Id(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n){this._service=t,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Tn(t,n)}get root(){const t=new ht(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Id(this._location.path)}get storage(){return this._service}get parent(){const t=Cd(this._location.path);if(t===null)return null;const n=new ht(this._location.bucket,t);return new Tn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw cd(t)}}function Dr(e,t){const n=t==null?void 0:t[nd];return n==null?null:ht.makeFromBucketSpec(n,e)}class Sd{constructor(t,n,i,s,r){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=na,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=id,this._maxUploadRetryTime=sd,this._requests=new Set,s!=null?this._bucket=ht.makeFromBucketSpec(s,this._host):this._bucket=Dr(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,t):this._bucket=Dr(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){kr("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){kr("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Tn(this,t)}_makeRequest(t,n,i,s,r=!0){if(this._deleted)return new ud(ia());{const o=wd(t,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,s).getPromise()}}const Or="@firebase/storage",br="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="storage";function Rd(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Sd(n,i,s,t,ns)}function Nd(){Bt(new ed(Ad,Rd,"PUBLIC").setMultipleInstances(!0)),mt(Or,br,""),mt(Or,br,"esm2017")}Nd();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const kd={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Dd=D.INFO,Od={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},bd=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=Od[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let Pd=class{constructor(t){this.name=t,this._logLevel=Dd,this._logHandler=bd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}};function Md(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ld(){try{return typeof indexedDB=="object"}catch{return!1}}function xd(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function Fd(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="FirebaseError";let sa=class ra extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Ud,Object.setPrototypeOf(this,ra.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oa.prototype.create)}},oa=class{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Bd(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new sa(s,l,i)}};function Bd(e,t){return e.replace(Hd,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Hd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=1e3,Wd=2,jd=4*60*60*1e3,Vd=.5;function Pr(e,t=$d,n=Wd){const i=t*Math.pow(n,e),s=Math.round(Vd*i*(Math.random()-.5)*2);return Math.min(jd,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(e){return e&&e._delegate?e._delegate:e}let Mr=class{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="FirebaseError";class zn extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=qd,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,la.prototype.create)}}class la{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Kd(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new zn(s,l,i)}}function Kd(e,t){return e.replace(zd,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const zd=/\{\$([^}]+)}/g;let Lr=class{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};const Yd=(e,t)=>t.some(n=>e instanceof n);let xr,Fr;function Xd(){return xr||(xr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qd(){return Fr||(Fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aa=new WeakMap,$i=new WeakMap,ha=new WeakMap,fi=new WeakMap,Os=new WeakMap;function Jd(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Nt(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&aa.set(n,e)}).catch(()=>{}),Os.set(t,e),t}function Zd(e){if($i.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});$i.set(e,t)}let Wi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $i.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ha.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function tf(e){Wi=e(Wi)}function ef(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(pi(this),t,...n);return ha.set(i,t.sort?t.sort():[t]),Nt(i)}:Qd().includes(e)?function(...t){return e.apply(pi(this),t),Nt(aa.get(this))}:function(...t){return Nt(e.apply(pi(this),t))}}function nf(e){return typeof e=="function"?ef(e):(e instanceof IDBTransaction&&Zd(e),Yd(e,Xd())?new Proxy(e,Wi):e)}function Nt(e){if(e instanceof IDBRequest)return Jd(e);if(fi.has(e))return fi.get(e);const t=nf(e);return t!==e&&(fi.set(e,t),Os.set(t,e)),t}const pi=e=>Os.get(e);function sf(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),l=Nt(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Nt(o.result),a.oldVersion,a.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const rf=["get","getKey","getAll","getAllKeys","count"],of=["put","add","delete","clear"],gi=new Map;function Ur(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(gi.get(t))return gi.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=of.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||rf.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let h=a.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&a.done]))[0]};return gi.set(t,r),r}tf(e=>({...e,get:(t,n,i)=>Ur(t,n)||e.get(t,n,i),has:(t,n)=>!!Ur(t,n)||e.has(t,n)}));const ca="@firebase/installations",bs="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=1e4,da=`w:${bs}`,fa="FIS_v2",lf="https://firebaseinstallations.googleapis.com/v1",af=60*60*1e3,hf="installations",cf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ht=new la(hf,cf,uf);function pa(e){return e instanceof zn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga({projectId:e}){return`${lf}/projects/${e}/installations`}function _a(e){return{token:e.token,requestStatus:2,expiresIn:ff(e.expiresIn),creationTime:Date.now()}}async function ma(e,t){const i=(await t.json()).error;return Ht.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ya({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function df(e,{refreshToken:t}){const n=ya(e);return n.append("Authorization",pf(t)),n}async function va(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ff(e){return Number(e.replace("s","000"))}function pf(e){return`${fa} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=ga(e),s=ya(e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:fa,appId:e.appId,sdkVersion:da},l={method:"POST",headers:s,body:JSON.stringify(o)},a=await va(()=>fetch(i,l));if(a.ok){const h=await a.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:_a(h.authToken)}}else throw await ma("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=/^[cdef][\w-]{21}$/,ji="";function yf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=vf(e);return mf.test(n)?n:ji}catch{return ji}}function vf(e){return _f(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Map;function wa(e,t){const n=Yn(e);Ca(n,t),Ef(n,t)}function Ca(e,t){const n=Ta.get(e);if(n)for(const i of n)i(t)}function Ef(e,t){const n=Tf();n&&n.postMessage({key:e,fid:t}),wf()}let xt=null;function Tf(){return!xt&&"BroadcastChannel"in self&&(xt=new BroadcastChannel("[Firebase] FID Change"),xt.onmessage=e=>{Ca(e.data.key,e.data.fid)}),xt}function wf(){Ta.size===0&&xt&&(xt.close(),xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="firebase-installations-database",If=1,$t="firebase-installations-store";let _i=null;function Ps(){return _i||(_i=sf(Cf,If,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($t)}}})),_i}async function wn(e,t){const n=Yn(e),s=(await Ps()).transaction($t,"readwrite"),r=s.objectStore($t),o=await r.get(n);return await r.put(t,n),await s.done,(!o||o.fid!==t.fid)&&wa(e,t.fid),t}async function Ia(e){const t=Yn(e),i=(await Ps()).transaction($t,"readwrite");await i.objectStore($t).delete(t),await i.done}async function Xn(e,t){const n=Yn(e),s=(await Ps()).transaction($t,"readwrite"),r=s.objectStore($t),o=await r.get(n),l=t(o);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&wa(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(e){let t;const n=await Xn(e.appConfig,i=>{const s=Sf(i),r=Af(e,s);return t=r.registrationPromise,r.installationEntry});return n.fid===ji?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Sf(e){const t=e||{fid:yf(),registrationStatus:0};return Sa(t)}function Af(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ht.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Rf(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Nf(e)}:{installationEntry:t}}async function Rf(e,t){try{const n=await gf(e,t);return wn(e.appConfig,n)}catch(n){throw pa(n)&&n.customData.serverCode===409?await Ia(e.appConfig):await wn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Nf(e){let t=await Br(e.appConfig);for(;t.registrationStatus===1;)await Ea(100),t=await Br(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Ms(e);return i||n}return t}function Br(e){return Xn(e,t=>{if(!t)throw Ht.create("installation-not-found");return Sa(t)})}function Sa(e){return kf(e)?{fid:e.fid,registrationStatus:0}:e}function kf(e){return e.registrationStatus===1&&e.registrationTime+ua<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df({appConfig:e,heartbeatServiceProvider:t},n){const i=Of(e,n),s=df(e,n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:da,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},a=await va(()=>fetch(i,l));if(a.ok){const h=await a.json();return _a(h)}else throw await ma("Generate Auth Token",a)}function Of(e,{fid:t}){return`${ga(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(e,t=!1){let n;const i=await Xn(e.appConfig,r=>{if(!Aa(r))throw Ht.create("not-registered");const o=r.authToken;if(!t&&Mf(o))return r;if(o.requestStatus===1)return n=bf(e,t),r;{if(!navigator.onLine)throw Ht.create("app-offline");const l=xf(r);return n=Pf(e,l),l}});return n?await n:i.authToken}async function bf(e,t){let n=await Hr(e.appConfig);for(;n.authToken.requestStatus===1;)await Ea(100),n=await Hr(e.appConfig);const i=n.authToken;return i.requestStatus===0?Ls(e,t):i}function Hr(e){return Xn(e,t=>{if(!Aa(t))throw Ht.create("not-registered");const n=t.authToken;return Ff(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Pf(e,t){try{const n=await Df(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await wn(e.appConfig,i),n}catch(n){if(pa(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ia(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await wn(e.appConfig,i)}throw n}}function Aa(e){return e!==void 0&&e.registrationStatus===2}function Mf(e){return e.requestStatus===2&&!Lf(e)}function Lf(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+af}function xf(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ff(e){return e.requestStatus===1&&e.requestTime+ua<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uf(e){const t=e,{installationEntry:n,registrationPromise:i}=await Ms(t);return i?i.catch(console.error):Ls(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(e,t=!1){const n=e;return await Hf(n),(await Ls(n,t)).token}async function Hf(e){const{registrationPromise:t}=await Ms(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e){if(!e||!e.options)throw mi("App Configuration");if(!e.name)throw mi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw mi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function mi(e){return Ht.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="installations",Wf="installations-internal",jf=e=>{const t=e.getProvider("app").getImmediate(),n=$f(t),i=is(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Vf=e=>{const t=e.getProvider("app").getImmediate(),n=is(t,Ra).getImmediate();return{getId:()=>Uf(n),getToken:s=>Bf(n,s)}};function Gf(){Bt(new Lr(Ra,jf,"PUBLIC")),Bt(new Lr(Wf,Vf,"PRIVATE"))}Gf();mt(ca,bs);mt(ca,bs,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="analytics",qf="firebase_id",Kf="origin",zf=60*1e3,Yf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xs="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new Pd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rt=new oa("analytics","Analytics",Xf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(e){if(!e.startsWith(xs)){const t=rt.create("invalid-gtag-resource",{gtagURL:e});return Z.warn(t.message),""}return e}function Na(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Jf(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Zf(e,t){const n=Jf("firebase-js-sdk-policy",{createScriptURL:Qf}),i=document.createElement("script"),s=`${xs}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function tp(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ep(e,t,n,i,s,r){const o=i[s];try{if(o)await t[o];else{const a=(await Na(n)).find(h=>h.measurementId===s);a&&await t[a.appId]}}catch(l){Z.error(l)}e("config",s,r)}async function np(e,t,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await Na(n);for(const a of o){const h=l.find(u=>u.measurementId===a),c=h&&t[h.appId];if(c)r.push(c);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",i,s||{})}catch(r){Z.error(r)}}function ip(e,t,n,i){async function s(r,...o){try{if(r==="event"){const[l,a]=o;await np(e,t,n,l,a)}else if(r==="config"){const[l,a]=o;await ep(e,t,n,i,l,a)}else if(r==="consent"){const[l]=o;e("consent","update",l)}else if(r==="get"){const[l,a,h]=o;e("get",l,a,h)}else if(r==="set"){const[l]=o;e("set",l)}else e(r,...o)}catch(l){Z.error(l)}}return s}function sp(e,t,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=ip(r,e,t,n),{gtagCore:r,wrappedGtag:window[s]}}function rp(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xs)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=30,lp=1e3;class ap{constructor(t={},n=lp){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ka=new ap;function hp(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function cp(e){var t;const{appId:n,apiKey:i}=e,s={method:"GET",headers:hp(i)},r=Yf.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function up(e,t=ka,n){const{appId:i,apiKey:s,measurementId:r}=e.options;if(!i)throw rt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw rt.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new pp;return setTimeout(async()=>{l.abort()},zf),Da({appId:i,apiKey:s,measurementId:r},o,l,t)}async function Da(e,{throttleEndTimeMillis:t,backoffCount:n},i,s=ka){var r;const{appId:o,measurementId:l}=e;try{await dp(i,t)}catch(a){if(l)return Z.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await cp(e);return s.deleteThrottleMetadata(o),a}catch(a){const h=a;if(!fp(h)){if(s.deleteThrottleMetadata(o),l)return Z.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:l};throw a}const c=Number((r=h==null?void 0:h.customData)===null||r===void 0?void 0:r.httpStatus)===503?Pr(n,s.intervalMillis,op):Pr(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(o,u),Z.debug(`Calling attemptFetch again in ${c} millis`),Da(e,u,i,s)}}function dp(e,t){return new Promise((n,i)=>{const s=Math.max(t-Date.now(),0),r=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(r),i(rt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function fp(e){if(!(e instanceof sa)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class pp{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function gp(e,t,n,i,s){if(s&&s.global){e("event",n,i);return}else{const r=await t,o=Object.assign(Object.assign({},i),{send_to:r});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(){if(Ld())try{await xd()}catch(e){return Z.warn(rt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Z.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mp(e,t,n,i,s,r,o){var l;const a=up(e);a.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Z.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Z.error(g)),t.push(a);const h=_p().then(g=>{if(g)return i.getId()}),[c,u]=await Promise.all([a,h]);rp(r)||Zf(r,c.measurementId),s("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[Kf]="firebase",d.update=!0,u!=null&&(d[qf]=u),s("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t){this.app=t}_delete(){return delete Ae[this.app.options.appId],Promise.resolve()}}let Ae={},Wr=[];const jr={};let yi="dataLayer",vp="gtag",Vr,Oa,Gr=!1;function Ep(){const e=[];if(Md()&&e.push("This is a browser extension environment."),Fd()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=rt.create("invalid-analytics-context",{errorInfo:t});Z.warn(n.message)}}function Tp(e,t,n){Ep();const i=e.options.appId;if(!i)throw rt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Z.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rt.create("no-api-key");if(Ae[i]!=null)throw rt.create("already-exists",{id:i});if(!Gr){tp(yi);const{wrappedGtag:r,gtagCore:o}=sp(Ae,Wr,jr,yi,vp);Oa=r,Vr=o,Gr=!0}return Ae[i]=mp(e,Wr,jr,t,Vr,yi,n),new yp(e)}function wp(e,t,n,i){e=Gd(e),gp(Oa,Ae[e.app.options.appId],t,n,i).catch(s=>Z.error(s))}const qr="@firebase/analytics",Kr="0.10.0";function Cp(){Bt(new Mr($r,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Tp(i,s,n)},"PUBLIC")),Bt(new Mr("analytics-internal",e,"PRIVATE")),mt(qr,Kr),mt(qr,Kr,"esm2017");function e(t){try{const n=t.getProvider($r).getImmediate();return{logEvent:(i,s,r)=>wp(n,i,s,r)}}catch(n){throw rt.create("interop-component-reg-failed",{reason:n})}}}Cp();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e,t){if(!e)throw fe(t)},fe=function(e){return new Error("Firebase Database ("+ba.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ip=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],l=e[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(a&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Fs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,l=o?e[s+1]:0,a=s+2<e.length,h=a?e[s+2]:0,c=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|h>>6,g=h&63;a||(g=64,o||(d=64)),i.push(n[c],n[u],n[d],n[g])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pa(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ip(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const u=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||h==null||u==null)throw new Sp;const d=r<<2|l>>4;if(i.push(d),h!==64){const g=l<<4&240|h>>2;if(i.push(g),u!==64){const _=h<<6&192|u;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Sp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ap=function(e){const t=Pa(e);return Fs.encodeByteArray(t,!0)},zr=function(e){try{return Fs.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(e){return Ma(void 0,e)}function Ma(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!Np(n)||(e[n]=Ma(e[n],t[n]));return e}function Np(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kp())}function Dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fa(){return ba.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return JSON.parse(e)}function $(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=He(zr(r[0])||""),n=He(zr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:s}},Op=function(e){const t=Ua(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bp=function(e){const t=Ua(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function oe(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Yr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Cn(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let u=0;u<16;u++)i[u]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],h,c;for(let u=0;u<80;u++){u<40?u<20?(h=l^r&(o^l),c=1518500249):(h=r^o^l,c=1859775393):u<60?(h=r&o|l&(r|o),c=2400959708):(h=r^o^l,c=3395469782);const d=(s<<5|s>>>27)+h+a+c+i[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<n;)if(r[o]=t.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=t[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)t[i]=this.chain_[s]>>r&255,++i;return t}}function Lp(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Qn=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(e){return e&&e._delegate?e._delegate:e}class Up{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const Bp={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},Hp=A.INFO,$p={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Wp=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=$p[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jp{constructor(t){this.name=t,this._logLevel=Hp,this._logHandler=Wp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}var Xr={};const Qr="@firebase/database",Jr="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba="";function Vp(e){Ba=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),$(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:He(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return St(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Gp(t)}}catch{}return new qp},Ft=Ha("localStorage"),Kp=Ha("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new jp("@firebase/database"),zp=function(){let e=1;return function(){return e++}}(),$a=function(e){const t=xp(e),n=new Mp;n.update(t);const i=n.digest();return Fs.encodeByteArray(i)},Xe=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=Xe.apply(null,i):typeof i=="object"?t+=$(i):t+=i,t+=" "}return t};let Re=null,Zr=!0;const Yp=function(e,t){f(!t,"Can't turn on custom loggers persistently."),ne.logLevel=A.VERBOSE,Re=ne.log.bind(ne)},V=function(...e){if(Zr===!0&&(Zr=!1,Re===null&&Kp.get("logging_enabled")===!0&&Yp()),Re){const t=Xe.apply(null,e);Re(t)}},Qe=function(e){return function(...t){V(e,...t)}},Vi=function(...e){const t="FIREBASE INTERNAL ERROR: "+Xe(...e);ne.error(t)},Wt=function(...e){const t=`FIREBASE FATAL ERROR: ${Xe(...e)}`;throw ne.error(t),new Error(t)},nt=function(...e){const t="FIREBASE WARNING: "+Xe(...e);ne.warn(t)},Xp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wa=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Qp=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},le="[MIN_NAME]",jt="[MAX_NAME]",pe=function(e,t){if(e===t)return 0;if(e===le||t===jt)return-1;if(t===le||e===jt)return 1;{const n=to(e),i=to(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},Jp=function(e,t){return e===t?0:e<t?-1:1},ve=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+$(t))},Us=function(e){if(typeof e!="object"||e===null)return $(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=$(t[i]),n+=":",n+=Us(e[t[i]]);return n+="}",n},ja=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function lt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Va=function(e){f(!Wa(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,l,a;e===0?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=l+i,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(a=n;a;a-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(a=t;a;a-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const c=h.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Zp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},eg=new RegExp("^-?(0*)\\d{1,10}$"),ng=-2147483648,ig=2147483647,to=function(e){if(eg.test(e)){const t=Number(e);if(t>=ng&&t<=ig)return t}return null},Je=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw nt("Exception was thrown by user callback.",n),t},Math.floor(0))}},sg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ne=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(V("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="5",Ga="v",qa="s",Ka="r",za="f",Ya=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xa="ls",Qa="p",Gi="ac",Ja="websocket",Za="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,n,i,s,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ft.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ft.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function ag(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function th(e,t,n){f(typeof t=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(t===Ja)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Za)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);ag(e)&&(n.ns=e.namespace);const s=[];return lt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.counters_={}}incrementCounter(t,n=1){St(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return Rp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi={},Ei={};function Hs(e){const t=e.toString();return vi[t]||(vi[t]=new hg),vi[t]}function cg(e,t){const n=e.toString();return Ei[n]||(Ei[n]=t()),Ei[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Je(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="start",dg="close",fg="pLPCommand",pg="pRTLPCB",eh="id",nh="pw",ih="ser",gg="cb",_g="seg",mg="ts",yg="d",vg="dframe",sh=1870,rh=30,Eg=sh-rh,Tg=25e3,wg=3e4;class Jt{constructor(t,n,i,s,r,o,l){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qe(t),this.stats_=Hs(n),this.urlFn=a=>(this.appCheckToken&&(a[Gi]=this.appCheckToken),th(n,Za,a))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ug(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wg)),Qp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $s((...r)=>{const[o,l,a,h,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===eo)this.id=l,this.password=a;else if(o===dg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[eo]="t",i[ih]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[gg]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ga]=Bs,this.transportSessionId&&(i[qa]=this.transportSessionId),this.lastSessionId&&(i[Xa]=this.lastSessionId),this.applicationId&&(i[Qa]=this.applicationId),this.appCheckToken&&(i[Gi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ya.test(location.hostname)&&(i[Ka]=za);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jt.forceAllow_=!0}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){return Jt.forceAllow_?!0:!Jt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zp()&&!tg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=$(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ap(n),s=ja(i,Eg);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[vg]="t",i[eh]=t,i[nh]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=$(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $s{constructor(t,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zp(),window[fg+this.uniqueCallbackIdentifier]=t,window[pg+this.uniqueCallbackIdentifier]=n,this.myIFrame=$s.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){V("frame writing exception"),l.stack&&V(l.stack),V(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||V("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[eh]=this.myID,t[nh]=this.myPW,t[ih]=this.currentSerial;let n=this.urlFn(t),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rh+i.length<=sh;){const o=this.pendingSegs.shift();i=i+"&"+_g+s+"="+o.seg+"&"+mg+s+"="+o.ts+"&"+yg+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Tg)),r=()=>{clearTimeout(s),i()};this.addTag(t,r)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{V("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=16384,Ig=45e3;let In=null;typeof MozWebSocket<"u"?In=MozWebSocket:typeof WebSocket<"u"&&(In=WebSocket);class at{constructor(t,n,i,s,r,o,l){this.connId=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qe(this.connId),this.stats_=Hs(n),this.connURL=at.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,s,r){const o={};return o[Ga]=Bs,typeof location<"u"&&location.hostname&&Ya.test(location.hostname)&&(o[Ka]=za),n&&(o[qa]=n),i&&(o[Xa]=i),s&&(o[Gi]=s),r&&(o[Qa]=r),th(t,Ja,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ft.set("previous_websocket_failure",!0);try{let i;Fa(),this.mySock=new In(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&In!==null&&!at.forceDisallow_}static previouslyFailed(){return Ft.isInMemoryStorage||Ft.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ft.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=He(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(f(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=$(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ja(n,Cg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ig))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Jt,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=at&&at.isAvailable();let i=n&&!at.previouslyFailed();if(t.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[at];else{const s=this.transports_=[];for(const r of $e.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);$e.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$e.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=6e4,Ag=5e3,Rg=10*1024,Ng=100*1024,Ti="t",no="d",kg="s",io="r",Dg="e",so="o",ro="a",oo="n",lo="p",Og="h";class bg{constructor(t,n,i,s,r,o,l,a,h,c){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=h,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qe("c:"+this.id+":"),this.transportManager_=new $e(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=t.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ne(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ng?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Ti in t){const n=t[Ti];n===ro?this.upgradeIfSecondaryHealthy_():n===io?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===so&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ve("t",t),i=ve("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ro,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ve("t",t),i=ve("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ve(Ti,t);if(no in t){const i=t[no];if(n===Og){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===oo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kg?this.onConnectionShutdown_(i):n===io?this.onReset_(i):n===Dg?Vi("Server Error: "+i):n===so?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vi("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,s=t.h;this.sessionId=t.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bs!==i&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ne(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Sg))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ne(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ag))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lo,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ft.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{put(t,n,i,s){}merge(t,n,i,s){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.allowedEvents_=t,this.listeners_={},f(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const s=this.getInitialEvent(t);s&&n.apply(i,s)}off(t,n,i){this.validateEventType_(t);const s=this.listeners_[t]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(t){f(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends lh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sn}getInitialEvent(t){return f(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=32,ho=768;class P{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function S(){return new P("")}function E(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Dt(e){return e.pieces_.length-e.pieceNum_}function O(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new P(e.pieces_,t)}function ah(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Pg(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function hh(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ch(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new P(t,0)}function F(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof P)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new P(n,0)}function y(e){return e.pieceNum_>=e.pieces_.length}function st(e,t){const n=E(e),i=E(t);if(n===null)return t;if(n===i)return st(O(e),O(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function uh(e,t){if(Dt(e)!==Dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function ct(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Dt(e)>Dt(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Mg{constructor(t,n){this.errorPrefix_=n,this.parts_=hh(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Qn(this.parts_[i]);dh(this)}}function Lg(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Qn(t),dh(e)}function xg(e){const t=e.parts_.pop();e.byteLength_-=Qn(t),e.parts_.length>0&&(e.byteLength_-=1)}function dh(e){if(e.byteLength_>ho)throw new Error(e.errorPrefix_+"has a key path longer than "+ho+" bytes ("+e.byteLength_+").");if(e.parts_.length>ao)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ao+") or object contains a cycle "+Pt(e))}function Pt(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends lh{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ws}getInitialEvent(t){return f(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=1e3,Fg=60*5*1e3,co=30*1e3,Ug=1.3,Bg=3e4,Hg="server_kill",uo=3;class Ct extends oh{constructor(t,n,i,s,r,o,l,a){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ct.nextPersistentConnectionId_++,this.log_=Qe("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ee,this.maxReconnectDelay_=Fg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Fa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ws.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Sn.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const s=++this.requestNumber_,r={r:s,a:t,b:n};this.log_($(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(t){this.initConnection_();const n=new La,s={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(t,n,i,s){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:t,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";t.tag&&(r.q=n._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,h=l.s;Ct.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===t&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(i,s),t.onComplete&&t.onComplete(h,a))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&St(t,"w")){const i=oe(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||bp(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=co)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=Op(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===t&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),s=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,t._queryObject,n)}sendUnlisten_(t,n,i,s){this.log_("Unlisten on "+t+" for "+n);const r={p:t},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(t,n,i,s){this.putInternal("p",t,n,i,s)}merge(t,n,i,s){this.putInternal("m",t,n,i,s)}putInternal(t,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:t,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,s=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Vi("Unrecognized action received from server: "+$(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ee,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ee,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Bg&&(this.reconnectDelay_=Ee),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ug)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},h=function(u){f(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:h};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?V("getToken() completed but was canceled"):(V("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new bg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,g=>{nt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Hg)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&nt(u),a())}}}interrupt(t){V("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){V("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Yr(this.interruptReasons_)&&(this.reconnectDelay_=Ee,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(r=>Us(r)).join("$"):i="default";const s=this.removeListen_(t,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(t,n){const i=new P(t).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(t,n){V("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uo&&(this.reconnectDelay_=co,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){V("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+Ba.replace(/\./g,"-")]=1,xa()?t["framework.cordova"]=1:Dp()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Sn.getInstance().currentlyOnline();return Yr(this.interruptReasons_)&&t}}Ct.nextPersistentConnectionId_=0;Ct.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new T(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new T(le,t),s=new T(le,n);return this.compare(i,s)!==0}minPost(){return T.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an;class fh extends Jn{static get __EMPTY_NODE(){return an}static set __EMPTY_NODE(t){an=t}compare(t,n){return pe(t.name,n.name)}isDefinedOn(t){throw fe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return T.MIN}maxPost(){return new T(jt,an)}makePost(t,n){return f(typeof t=="string","KeyIndex indexValue must always be a string."),new T(t,an)}toString(){return".key"}}const ie=new fh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,s&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class x{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??x.RED,this.left=s??J.EMPTY_NODE,this.right=r??J.EMPTY_NODE}copy(t,n,i,s,r){return new x(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return J.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,s;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return J.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}x.RED=!0;x.BLACK=!1;class $g{copy(t,n,i,s,r){return this}insert(t,n,i){return new x(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class J{constructor(t,n=J.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new J(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,x.BLACK,null,null))}remove(t){return new J(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,x.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new hn(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new hn(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new hn(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new hn(this.root_,null,this.comparator_,!0,t)}}J.EMPTY_NODE=new $g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(e,t){return pe(e.name,t.name)}function js(e,t){return pe(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;function jg(e){qi=e}const ph=function(e){return typeof e=="number"?"number:"+Va(e):"string:"+e},gh=function(e){if(e.isLeafNode()){const t=e.val();f(typeof t=="string"||typeof t=="number"||typeof t=="object"&&St(t,".sv"),"Priority must be a string or number.")}else f(e===qi||e.isEmpty(),"priority of unexpected type.");f(e===qi||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class L{constructor(t,n=L.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gh(this.priorityNode_)}static set __childrenNodeConstructor(t){fo=t}static get __childrenNodeConstructor(){return fo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new L(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return y(t)?this:E(t)===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:L.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=E(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||Dt(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,L.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+ph(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=Va(this.value_):t+=this.value_,this.lazyHash_=$a(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===L.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof L.__childrenNodeConstructor?-1:(f(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,s=L.VALUE_TYPE_ORDER.indexOf(n),r=L.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}L.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h,mh;function Vg(e){_h=e}function Gg(e){mh=e}class qg extends Jn{compare(t,n){const i=t.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?pe(t.name,n.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return T.MIN}maxPost(){return new T(jt,new L("[PRIORITY-POST]",mh))}makePost(t,n){const i=_h(t);return new T(n,new L("[PRIORITY-POST]",i))}toString(){return".priority"}}const z=new qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=Math.log(2);class zg{constructor(t){const n=r=>parseInt(Math.log(r)/Kg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const s=i(this.count);this.bits_=t+1&s}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const An=function(e,t,n,i){e.sort(t);const s=function(a,h){const c=h-a;let u,d;if(c===0)return null;if(c===1)return u=e[a],d=n?n(u):u,new x(d,u.node,x.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=s(a,g),R=s(g+1,h);return u=e[g],d=n?n(u):u,new x(d,u.node,x.BLACK,_,R)}},r=function(a){let h=null,c=null,u=e.length;const d=function(_,R){const N=u-_,At=u;u-=_;const zt=s(N+1,At),dt=e[N],tt=n?n(dt):dt;g(new x(tt,dt.node,R,null,zt))},g=function(_){h?(h.left=_,h=_):(c=_,h=_)};for(let _=0;_<a.count;++_){const R=a.nextBitIsOne(),N=Math.pow(2,a.count-(_+1));R?d(N,x.BLACK):(d(N,x.BLACK),d(N,x.RED))}return c},o=new zg(e.length),l=r(o);return new J(i||t,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;const Xt={};class wt{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return f(Xt&&z,"ChildrenNode.ts has not been loaded"),wi=wi||new wt({".priority":Xt},{".priority":z}),wi}get(t){const n=oe(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof J?n:null}hasIndex(t){return St(this.indexSet_,t.toString())}addIndex(t,n){f(t!==ie,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(T.Wrap);let o=r.getNext();for(;o;)s=s||t.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=An(i,t.getCompare()):l=Xt;const a=t.toString(),h=Object.assign({},this.indexSet_);h[a]=t;const c=Object.assign({},this.indexes_);return c[a]=l,new wt(c,h)}addToIndexes(t,n){const i=Cn(this.indexes_,(s,r)=>{const o=oe(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===Xt)if(o.isDefinedOn(t.node)){const l=[],a=n.getIterator(T.Wrap);let h=a.getNext();for(;h;)h.name!==t.name&&l.push(h),h=a.getNext();return l.push(t),An(l,o.getCompare())}else return Xt;else{const l=n.get(t.name);let a=s;return l&&(a=a.remove(new T(t.name,l))),a.insert(t,t.node)}});return new wt(i,this.indexSet_)}removeFromIndexes(t,n){const i=Cn(this.indexes_,s=>{if(s===Xt)return s;{const r=n.get(t.name);return r?s.remove(new T(t.name,r)):s}});return new wt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Te;class w{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&gh(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Te||(Te=new w(new J(js),null,wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Te}updatePriority(t){return this.children_.isEmpty()?this:new w(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Te:n}}getChild(t){const n=E(t);return n===null?this:this.getImmediateChild(n).getChild(O(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(f(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new T(t,n);let s,r;n.isEmpty()?(s=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(t,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Te:this.priorityNode_;return new w(s,o,r)}}updateChild(t,n){const i=E(t);if(i===null)return n;{f(E(t)!==".priority"||Dt(t)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(O(t),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(z,(o,l)=>{n[o]=l.val(t),i++,r&&w.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!t&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+ph(this.getPriority().val())+":"),this.forEachChild(z,(n,i)=>{const s=i.hash();s!==""&&(t+=":"+n+":"+s)}),this.lazyHash_=t===""?"":$a(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new T(t,n));return r?r.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new T(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new T(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,s=>s);{const s=this.children_.getIteratorFrom(t.name,T.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,t)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,s=>s);{const s=this.children_.getReverseIteratorFrom(t.name,T.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,t)>0;)s.getNext(),r=s.peek();return s}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ze?-1:0}withIndex(t){if(t===ie||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new w(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===ie||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(z),s=n.getIterator(z);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ie?null:this.indexMap_.get(t.toString())}}w.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yg extends w{constructor(){super(new J(js),w.EMPTY_NODE,wt.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return w.EMPTY_NODE}isEmpty(){return!1}}const Ze=new Yg;Object.defineProperties(T,{MIN:{value:new T(le,w.EMPTY_NODE)},MAX:{value:new T(jt,Ze)}});fh.__EMPTY_NODE=w.EMPTY_NODE;L.__childrenNodeConstructor=w;jg(Ze);Gg(Ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=!0;function G(e,t=null){if(e===null)return w.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),f(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new L(n,G(t))}if(!(e instanceof Array)&&Xg){const n=[];let i=!1;if(lt(e,(o,l)=>{if(o.substring(0,1)!=="."){const a=G(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new T(o,a)))}}),n.length===0)return w.EMPTY_NODE;const r=An(n,Wg,o=>o.name,js);if(i){const o=An(n,z.getCompare());return new w(r,G(t),new wt({".priority":o},{".priority":z}))}else return new w(r,G(t),wt.Default)}else{let n=w.EMPTY_NODE;return lt(e,(i,s)=>{if(St(e,i)&&i.substring(0,1)!=="."){const r=G(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(G(t))}}Vg(G);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Jn{constructor(t){super(),this.indexPath_=t,f(!y(t)&&E(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?pe(t.name,n.name):r}makePost(t,n){const i=G(t),s=w.EMPTY_NODE.updateChild(this.indexPath_,i);return new T(n,s)}maxPost(){const t=w.EMPTY_NODE.updateChild(this.indexPath_,Ze);return new T(jt,t)}toString(){return hh(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Jn{compare(t,n){const i=t.node.compareTo(n.node);return i===0?pe(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(t,n){const i=G(t);return new T(n,i)}toString(){return".value"}}const Zg=new Jg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(e){return{type:"value",snapshotNode:e}}function e_(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function n_(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function po(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function i_(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:le}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===z}copy(){const t=new Vs;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function go(e){const t={};if(e.isDefault())return t;let n;if(e.index_===z?n="$priority":e.index_===Zg?n="$value":e.index_===ie?n="$key":(f(e.index_ instanceof Qg,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=$(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=$(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+$(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=$(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+$(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function _o(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==z&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends oh{constructor(t,n,i,s){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Qe("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(f(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,s){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=Rn.getListenId_(t,i),l={};this.listens_[o]=l;const a=go(t._queryParams);this.restRequest_(r+".json",a,(h,c)=>{let u=c;if(h===404&&(u=null,h=null),h===null&&this.onDataUpdate_(r,u,!1,i),oe(this.listens_,o)===l){let d;h?h===401?d="permission_denied":d="rest_error:"+h:d="ok",s(d,null)}})}unlisten(t,n){const i=Rn.getListenId_(t,n);delete this.listens_[i]}get(t){const n=go(t._queryParams),i=t._path.toString(),s=new La;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Pp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=He(l.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.rootNode_=w.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return{value:null,children:new Map}}function yh(e,t,n){if(y(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=E(t);e.children.has(i)||e.children.set(i,Nn());const s=e.children.get(i);t=O(t),yh(s,t,n)}}function Ki(e,t,n){e.value!==null?n(t,e.value):r_(e,(i,s)=>{const r=new P(t.toString()+"/"+i);Ki(s,r,n)})}function r_(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&lt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=10*1e3,l_=30*1e3,a_=5*60*1e3;class h_{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new o_(t);const i=mo+(l_-mo)*Math.random();Ne(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;lt(t,(s,r)=>{r>0&&St(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ne(this.reportStats_.bind(this),Math.floor(Math.random()*2*a_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function vh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Th(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=_t.ACK_USER_WRITE,this.source=vh()}operationForChild(t){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new P(t));return new kn(S(),n,this.revert)}}else return f(E(this.path)===t,"operationForChild called for unrelated child."),new kn(O(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=_t.OVERWRITE}operationForChild(t){return y(this.path)?new Vt(this.source,S(),this.snap.getImmediateChild(t)):new Vt(this.source,O(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=_t.MERGE}operationForChild(t){if(y(this.path)){const n=this.children.subtree(new P(t));return n.isEmpty()?null:n.value?new Vt(this.source,S(),n.value):new We(this.source,S(),n)}else return f(E(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new We(this.source,O(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(y(t))return this.isFullyInitialized()&&!this.filtered_;const n=E(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function c_(e,t,n,i){const s=[],r=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(i_(o.childName,o.snapshotNode))}),we(e,s,"child_removed",t,i,n),we(e,s,"child_added",t,i,n),we(e,s,"child_moved",r,i,n),we(e,s,"child_changed",t,i,n),we(e,s,"value",t,i,n),s}function we(e,t,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>d_(e,l,a)),o.forEach(l=>{const a=u_(e,l,r);s.forEach(h=>{h.respondsTo(l.type)&&t.push(h.createEvent(a,e.query_))})})}function u_(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function d_(e,t,n){if(t.childName==null||n.childName==null)throw fe("Should only compare child_ events.");const i=new T(t.childName,t.snapshotNode),s=new T(n.childName,n.snapshotNode);return e.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(e,t){return{eventCache:e,serverCache:t}}function ke(e,t,n,i){return wh(new Gs(t,n,i),e.serverCache)}function Ch(e,t,n,i){return wh(e.eventCache,new Gs(t,n,i))}function zi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Gt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci;const f_=()=>(Ci||(Ci=new J(Jp)),Ci);class k{constructor(t,n=f_()){this.value=t,this.children=n}static fromObject(t){let n=new k(null);return lt(t,(i,s)=>{n=n.set(new P(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:S(),value:this.value};if(y(t))return null;{const i=E(t),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(O(t),n);return r!=null?{path:F(new P(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(y(t))return this;{const n=E(t),i=this.children.get(n);return i!==null?i.subtree(O(t)):new k(null)}}set(t,n){if(y(t))return new k(n,this.children);{const i=E(t),r=(this.children.get(i)||new k(null)).set(O(t),n),o=this.children.insert(i,r);return new k(this.value,o)}}remove(t){if(y(t))return this.children.isEmpty()?new k(null):new k(null,this.children);{const n=E(t),i=this.children.get(n);if(i){const s=i.remove(O(t));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new k(null):new k(this.value,r)}else return this}}get(t){if(y(t))return this.value;{const n=E(t),i=this.children.get(n);return i?i.get(O(t)):null}}setTree(t,n){if(y(t))return n;{const i=E(t),r=(this.children.get(i)||new k(null)).setTree(O(t),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new k(this.value,o)}}fold(t){return this.fold_(S(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(F(t,s),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,S(),n)}findOnPath_(t,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(y(t))return null;{const r=E(t),o=this.children.get(r);return o?o.findOnPath_(O(t),F(n,r),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,S(),n)}foreachOnPath_(t,n,i){if(y(t))return this;{this.value&&i(n,this.value);const s=E(t),r=this.children.get(s);return r?r.foreachOnPath_(O(t),F(n,s),i):new k(null)}}foreach(t){this.foreach_(S(),t)}foreach_(t,n){this.children.inorderTraversal((i,s)=>{s.foreach_(F(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.writeTree_=t}static empty(){return new ut(new k(null))}}function De(e,t,n){if(y(t))return new ut(new k(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const s=i.path;let r=i.value;const o=st(s,t);return r=r.updateChild(o,n),new ut(e.writeTree_.set(s,r))}else{const s=new k(n),r=e.writeTree_.setTree(t,s);return new ut(r)}}}function yo(e,t,n){let i=e;return lt(n,(s,r)=>{i=De(i,F(t,s),r)}),i}function vo(e,t){if(y(t))return ut.empty();{const n=e.writeTree_.setTree(t,new k(null));return new ut(n)}}function Yi(e,t){return qt(e,t)!=null}function qt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(st(n.path,t)):null}function Eo(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(z,(i,s)=>{t.push(new T(i,s))}):e.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&t.push(new T(i,s.value))}),t}function kt(e,t){if(y(t))return e;{const n=qt(e,t);return n!=null?new ut(new k(n)):new ut(e.writeTree_.subtree(t))}}function Xi(e){return e.writeTree_.isEmpty()}function ae(e,t){return Ih(S(),e.writeTree_,t)}function Ih(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Ih(F(e,s),r,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(F(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(e,t){return Dh(t,e)}function p_(e,t,n,i,s){f(i>e.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=De(e.visibleWrites,t,n)),e.lastWriteId=i}function g_(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function __(e,t){const n=e.allWrites.findIndex(l=>l.writeId===t);f(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const l=e.allWrites[o];l.visible&&(o>=n&&m_(l,i.path)?s=!1:ct(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return y_(e),!0;if(i.snap)e.visibleWrites=vo(e.visibleWrites,i.path);else{const l=i.children;lt(l,a=>{e.visibleWrites=vo(e.visibleWrites,F(i.path,a))})}return!0}else return!1}function m_(e,t){if(e.snap)return ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ct(F(e.path,n),t))return!0;return!1}function y_(e){e.visibleWrites=Ah(e.allWrites,v_,S()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function v_(e){return e.visible}function Ah(e,t,n){let i=ut.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const o=r.path;let l;if(r.snap)ct(n,o)?(l=st(n,o),i=De(i,l,r.snap)):ct(o,n)&&(l=st(o,n),i=De(i,S(),r.snap.getChild(l)));else if(r.children){if(ct(n,o))l=st(n,o),i=yo(i,l,r.children);else if(ct(o,n))if(l=st(o,n),y(l))i=yo(i,S(),r.children);else{const a=oe(r.children,E(l));if(a){const h=a.getChild(O(l));i=De(i,S(),h)}}}else throw fe("WriteRecord should have .snap or .children")}}return i}function Rh(e,t,n,i,s){if(!i&&!s){const r=qt(e.visibleWrites,t);if(r!=null)return r;{const o=kt(e.visibleWrites,t);if(Xi(o))return n;if(n==null&&!Yi(o,S()))return null;{const l=n||w.EMPTY_NODE;return ae(o,l)}}}else{const r=kt(e.visibleWrites,t);if(!s&&Xi(r))return n;if(!s&&n==null&&!Yi(r,S()))return null;{const o=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(ct(h.path,t)||ct(t,h.path))},l=Ah(e.allWrites,o,t),a=n||w.EMPTY_NODE;return ae(l,a)}}}function E_(e,t,n){let i=w.EMPTY_NODE;const s=qt(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(z,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=kt(e.visibleWrites,t);return n.forEachChild(z,(o,l)=>{const a=ae(kt(r,new P(o)),l);i=i.updateImmediateChild(o,a)}),Eo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=kt(e.visibleWrites,t);return Eo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function T_(e,t,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=F(t,n);if(Yi(e.visibleWrites,r))return null;{const o=kt(e.visibleWrites,r);return Xi(o)?s.getChild(n):ae(o,s.getChild(n))}}function w_(e,t,n,i){const s=F(t,n),r=qt(e.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=kt(e.visibleWrites,s);return ae(o,i.getNode().getImmediateChild(n))}else return null}function C_(e,t){return qt(e.visibleWrites,t)}function I_(e,t,n,i,s,r,o){let l;const a=kt(e.visibleWrites,t),h=qt(a,S());if(h!=null)l=h;else if(n!=null)l=ae(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let g=d.getNext();for(;g&&c.length<s;)u(g,i)!==0&&c.push(g),g=d.getNext();return c}else return[]}function S_(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Qi(e,t,n,i){return Rh(e.writeTree,e.treePath,t,n,i)}function Nh(e,t){return E_(e.writeTree,e.treePath,t)}function To(e,t,n,i){return T_(e.writeTree,e.treePath,t,n,i)}function Dn(e,t){return C_(e.writeTree,F(e.treePath,t))}function A_(e,t,n,i,s,r){return I_(e.writeTree,e.treePath,t,n,i,s,r)}function qs(e,t,n){return w_(e.writeTree,e.treePath,t,n)}function kh(e,t){return Dh(F(e.treePath,t),e.writeTree)}function Dh(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,po(i,t.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,n_(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,e_(i,t.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,po(i,t.snapshotNode,s.oldSnap));else throw fe("Illegal combination of changes: "+t+" occurred after "+s)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const Oh=new N_;class Ks{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new Gs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qs(this.writes_,t,i)}}getChildAfterChild(t,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gt(this.viewCache_),r=A_(this.writes_,s,n,1,i,t);return r.length===0?null:r[0]}}function k_(e,t){f(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),f(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function D_(e,t,n,i,s){const r=new R_;let o,l;if(n.type===_t.OVERWRITE){const h=n;h.source.fromUser?o=Ji(e,t,h.path,h.snap,i,s,r):(f(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered()&&!y(h.path),o=On(e,t,h.path,h.snap,i,s,l,r))}else if(n.type===_t.MERGE){const h=n;h.source.fromUser?o=b_(e,t,h.path,h.children,i,s,r):(f(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered(),o=Zi(e,t,h.path,h.children,i,s,l,r))}else if(n.type===_t.ACK_USER_WRITE){const h=n;h.revert?o=L_(e,t,h.path,i,s,r):o=P_(e,t,h.path,h.affectedTree,i,s,r)}else if(n.type===_t.LISTEN_COMPLETE)o=M_(e,t,n.path,i,r);else throw fe("Unknown operation type: "+n.type);const a=r.getChanges();return O_(t,o,a),{viewCache:o,changes:a}}function O_(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=zi(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(t_(zi(t)))}}function bh(e,t,n,i,s,r){const o=t.eventCache;if(Dn(i,n)!=null)return t;{let l,a;if(y(n))if(f(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const h=Gt(t),c=h instanceof w?h:w.EMPTY_NODE,u=Nh(i,c);l=e.filter.updateFullNode(t.eventCache.getNode(),u,r)}else{const h=Qi(i,Gt(t));l=e.filter.updateFullNode(t.eventCache.getNode(),h,r)}else{const h=E(n);if(h===".priority"){f(Dt(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=t.serverCache.getNode();const u=To(i,n,c,a);u!=null?l=e.filter.updatePriority(c,u):l=o.getNode()}else{const c=O(n);let u;if(o.isCompleteForChild(h)){a=t.serverCache.getNode();const d=To(i,n,o.getNode(),a);d!=null?u=o.getNode().getImmediateChild(h).updateChild(c,d):u=o.getNode().getImmediateChild(h)}else u=qs(i,h,t.serverCache);u!=null?l=e.filter.updateChild(o.getNode(),h,u,c,s,r):l=o.getNode()}}return ke(t,l,o.isFullyInitialized()||y(n),e.filter.filtersNodes())}}function On(e,t,n,i,s,r,o,l){const a=t.serverCache;let h;const c=o?e.filter:e.filter.getIndexedFilter();if(y(n))h=c.updateFullNode(a.getNode(),i,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,i);h=c.updateFullNode(a.getNode(),g,null)}else{const g=E(n);if(!a.isCompleteForPath(n)&&Dt(n)>1)return t;const _=O(n),N=a.getNode().getImmediateChild(g).updateChild(_,i);g===".priority"?h=c.updatePriority(a.getNode(),N):h=c.updateChild(a.getNode(),g,N,_,Oh,null)}const u=Ch(t,h,a.isFullyInitialized()||y(n),c.filtersNodes()),d=new Ks(s,u,r);return bh(e,u,n,s,d,l)}function Ji(e,t,n,i,s,r,o){const l=t.eventCache;let a,h;const c=new Ks(s,t,r);if(y(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=ke(t,h,!0,e.filter.filtersNodes());else{const u=E(n);if(u===".priority")h=e.filter.updatePriority(t.eventCache.getNode(),i),a=ke(t,h,l.isFullyInitialized(),l.isFiltered());else{const d=O(n),g=l.getNode().getImmediateChild(u);let _;if(y(d))_=i;else{const R=c.getCompleteChild(u);R!=null?ah(d)===".priority"&&R.getChild(ch(d)).isEmpty()?_=R:_=R.updateChild(d,i):_=w.EMPTY_NODE}if(g.equals(_))a=t;else{const R=e.filter.updateChild(l.getNode(),u,_,d,c,o);a=ke(t,R,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function wo(e,t){return e.eventCache.isCompleteForChild(t)}function b_(e,t,n,i,s,r,o){let l=t;return i.foreach((a,h)=>{const c=F(n,a);wo(t,E(c))&&(l=Ji(e,l,c,h,s,r,o))}),i.foreach((a,h)=>{const c=F(n,a);wo(t,E(c))||(l=Ji(e,l,c,h,s,r,o))}),l}function Co(e,t,n){return n.foreach((i,s)=>{t=t.updateChild(i,s)}),t}function Zi(e,t,n,i,s,r,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,h;y(n)?h=i:h=new k(null).setTree(n,i);const c=t.serverCache.getNode();return h.children.inorderTraversal((u,d)=>{if(c.hasChild(u)){const g=t.serverCache.getNode().getImmediateChild(u),_=Co(e,g,d);a=On(e,a,new P(u),_,s,r,o,l)}}),h.children.inorderTraversal((u,d)=>{const g=!t.serverCache.isCompleteForChild(u)&&d.value===null;if(!c.hasChild(u)&&!g){const _=t.serverCache.getNode().getImmediateChild(u),R=Co(e,_,d);a=On(e,a,new P(u),R,s,r,o,l)}}),a}function P_(e,t,n,i,s,r,o){if(Dn(s,n)!=null)return t;const l=t.serverCache.isFiltered(),a=t.serverCache;if(i.value!=null){if(y(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return On(e,t,n,a.getNode().getChild(n),s,r,l,o);if(y(n)){let h=new k(null);return a.getNode().forEachChild(ie,(c,u)=>{h=h.set(new P(c),u)}),Zi(e,t,n,h,s,r,l,o)}else return t}else{let h=new k(null);return i.foreach((c,u)=>{const d=F(n,c);a.isCompleteForPath(d)&&(h=h.set(c,a.getNode().getChild(d)))}),Zi(e,t,n,h,s,r,l,o)}}function M_(e,t,n,i,s){const r=t.serverCache,o=Ch(t,r.getNode(),r.isFullyInitialized()||y(n),r.isFiltered());return bh(e,o,n,i,Oh,s)}function L_(e,t,n,i,s,r){let o;if(Dn(i,n)!=null)return t;{const l=new Ks(i,t,s),a=t.eventCache.getNode();let h;if(y(n)||E(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Qi(i,Gt(t));else{const u=t.serverCache.getNode();f(u instanceof w,"serverChildren would be complete if leaf node"),c=Nh(i,u)}c=c,h=e.filter.updateFullNode(a,c,r)}else{const c=E(n);let u=qs(i,c,t.serverCache);u==null&&t.serverCache.isCompleteForChild(c)&&(u=a.getImmediateChild(c)),u!=null?h=e.filter.updateChild(a,c,u,O(n),l,r):t.eventCache.getNode().hasChild(c)?h=e.filter.updateChild(a,c,w.EMPTY_NODE,O(n),l,r):h=a,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Qi(i,Gt(t)),o.isLeafNode()&&(h=e.filter.updateFullNode(h,o,r)))}return o=t.serverCache.isFullyInitialized()||Dn(i,S())!=null,ke(t,h,o,e.filter.filtersNodes())}}function x_(e,t){const n=Gt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!y(t)&&!n.getImmediateChild(E(t)).isEmpty())?n.getChild(t):null}function Io(e,t,n,i){t.type===_t.MERGE&&t.source.queryId!==null&&(f(Gt(e.viewCache_),"We should always have a full cache before handling merges"),f(zi(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=D_(e.processor_,s,t,n,i);return k_(e.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,F_(e,r.changes,r.viewCache.eventCache.getNode())}function F_(e,t,n,i){const s=e.eventRegistrations_;return c_(e.eventGenerator_,t,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So;function U_(e){f(!So,"__referenceConstructor has already been defined"),So=e}function zs(e,t,n,i){const s=t.source.queryId;if(s!==null){const r=e.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),Io(r,t,n,i)}else{let r=[];for(const o of e.views.values())r=r.concat(Io(o,t,n,i));return r}}function Ys(e,t){let n=null;for(const i of e.views.values())n=n||x_(i,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;function B_(e){f(!Ao,"__referenceConstructor has already been defined"),Ao=e}class Ro{constructor(t){this.listenProvider_=t,this.syncPointTree_=new k(null),this.pendingWriteTree_=S_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function H_(e,t,n,i,s){return p_(e.pendingWriteTree_,t,n,i,s),s?ti(e,new Vt(vh(),t,n)):[]}function Zt(e,t,n=!1){const i=g_(e.pendingWriteTree_,t);if(__(e.pendingWriteTree_,t)){let r=new k(null);return i.snap!=null?r=r.set(S(),!0):lt(i.children,o=>{r=r.set(new P(o),!0)}),ti(e,new kn(i.path,r,n))}else return[]}function Zn(e,t,n){return ti(e,new Vt(Eh(),t,n))}function $_(e,t,n){const i=k.fromObject(n);return ti(e,new We(Eh(),t,i))}function W_(e,t,n,i){const s=xh(e,i);if(s!=null){const r=Fh(s),o=r.path,l=r.queryId,a=st(o,t),h=new Vt(Th(l),a,n);return Uh(e,o,h)}else return[]}function j_(e,t,n,i){const s=xh(e,i);if(s){const r=Fh(s),o=r.path,l=r.queryId,a=st(o,t),h=k.fromObject(n),c=new We(Th(l),a,h);return Uh(e,o,c)}else return[]}function Ph(e,t,n){const s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(o,l)=>{const a=st(o,t),h=Ys(l,a);if(h)return h});return Rh(s,t,r,n,!0)}function ti(e,t){return Mh(t,e.syncPointTree_,null,Sh(e.pendingWriteTree_,S()))}function Mh(e,t,n,i){if(y(e.path))return Lh(e,t,n,i);{const s=t.get(S());n==null&&s!=null&&(n=Ys(s,S()));let r=[];const o=E(e.path),l=e.operationForChild(o),a=t.children.get(o);if(a&&l){const h=n?n.getImmediateChild(o):null,c=kh(i,o);r=r.concat(Mh(l,a,h,c))}return s&&(r=r.concat(zs(s,e,i,n))),r}}function Lh(e,t,n,i){const s=t.get(S());n==null&&s!=null&&(n=Ys(s,S()));let r=[];return t.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,h=kh(i,o),c=e.operationForChild(o);c&&(r=r.concat(Lh(c,l,a,h)))}),s&&(r=r.concat(zs(s,e,i,n))),r}function xh(e,t){return e.tagToQueryMap.get(t)}function Fh(e){const t=e.indexOf("$");return f(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new P(e.substr(0,t))}}function Uh(e,t,n){const i=e.syncPointTree_.get(t);f(i,"Missing sync point for query tag that we're tracking");const s=Sh(e.pendingWriteTree_,t);return zs(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Xs(n)}node(){return this.node_}}class Qs{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=F(this.path_,t);return new Qs(this.syncTree_,n)}node(){return Ph(this.syncTree_,this.path_)}}const V_=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},No=function(e,t,n){if(!e||typeof e!="object")return e;if(f(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return G_(e[".sv"],t,n);if(typeof e[".sv"]=="object")return q_(e[".sv"],t);f(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},G_=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+e)}},q_=function(e,t,n){e.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=t.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},K_=function(e,t,n,i){return Js(t,new Qs(n,e),i)},z_=function(e,t,n){return Js(e,new Xs(t),n)};function Js(e,t,n){const i=e.getPriority().val(),s=No(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const o=e,l=No(o.getValue(),t,n);return l!==o.getValue()||s!==o.getPriority().val()?new L(l,G(s)):e}else{const o=e;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new L(s))),o.forEachChild(z,(l,a)=>{const h=Js(a,t.getImmediateChild(l),n);h!==a&&(r=r.updateImmediateChild(l,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function tr(e,t){let n=t instanceof P?t:new P(t),i=e,s=E(n);for(;s!==null;){const r=oe(i.node.children,s)||{children:{},childCount:0};i=new Zs(s,i,r),n=O(n),s=E(n)}return i}function ge(e){return e.node.value}function Bh(e,t){e.node.value=t,ts(e)}function Hh(e){return e.node.childCount>0}function Y_(e){return ge(e)===void 0&&!Hh(e)}function ei(e,t){lt(e.node.children,(n,i)=>{t(new Zs(n,e,i))})}function $h(e,t,n,i){n&&!i&&t(e),ei(e,s=>{$h(s,t,!0,i)}),n&&i&&t(e)}function X_(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function tn(e){return new P(e.parent===null?e.name:tn(e.parent)+"/"+e.name)}function ts(e){e.parent!==null&&Q_(e.parent,e.name,e)}function Q_(e,t,n){const i=Y_(n),s=St(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,ts(e)):!i&&!s&&(e.node.children[t]=n.node,e.node.childCount++,ts(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=/[\[\].#$\/\u0000-\u001F\u007F]/,Z_=/[\[\].#$\u0000-\u001F\u007F]/,Ii=10*1024*1024,Wh=function(e){return typeof e=="string"&&e.length!==0&&!J_.test(e)},tm=function(e){return typeof e=="string"&&e.length!==0&&!Z_.test(e)},em=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),tm(e)},jh=function(e,t,n){const i=n instanceof P?new Mg(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Pt(i));if(typeof t=="function")throw new Error(e+"contains a function "+Pt(i)+" with contents = "+t.toString());if(Wa(t))throw new Error(e+"contains "+t.toString()+" "+Pt(i));if(typeof t=="string"&&t.length>Ii/3&&Qn(t)>Ii)throw new Error(e+"contains a string greater than "+Ii+" utf8 bytes "+Pt(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let s=!1,r=!1;if(lt(t,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wh(o)))throw new Error(e+" contains an invalid key ("+o+") "+Pt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Lg(i,o),jh(e,l,i),xg(i)}),s&&r)throw new Error(e+' contains ".value" child '+Pt(i)+" in addition to actual children.")}},nm=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Wh(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!em(n))throw new Error(Lp(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sm(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();n!==null&&!uh(r,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Kt(e,t,n){sm(e,n),rm(e,i=>ct(i,t)||ct(t,i))}function rm(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(om(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function om(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Re&&V("event: "+n.toString()),Je(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="repo_interrupt",am=25;class hm{constructor(t,n,i,s){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new im,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nn(),this.transactionQueueTree_=new Zs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cm(e,t,n){if(e.stats_=Hs(e.repoInfo_),e.forceRestClient_||sg())e.server_=new Rn(e.repoInfo_,(i,s,r,o)=>{ko(e,i,s,r,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Do(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Ct(e.repoInfo_,t,(i,s,r,o)=>{ko(e,i,s,r,o)},i=>{Do(e,i)},i=>{dm(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=cg(e.repoInfo_,()=>new h_(e.stats_,e.server_)),e.infoData_=new s_,e.infoSyncTree_=new Ro({startListening:(i,s,r,o)=>{let l=[];const a=e.infoData_.getNode(i._path);return a.isEmpty()||(l=Zn(e.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),er(e,"connected",!1),e.serverSyncTree_=new Ro({startListening:(i,s,r,o)=>(e.server_.listen(i,r,s,(l,a)=>{const h=o(l,a);Kt(e.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{e.server_.unlisten(i,s)}})}function um(e){const n=e.infoData_.getNode(new P(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vh(e){return V_({timestamp:um(e)})}function ko(e,t,n,i,s){e.dataUpdateCount++;const r=new P(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const a=Cn(n,h=>G(h));o=j_(e.serverSyncTree_,r,a,s)}else{const a=G(n);o=W_(e.serverSyncTree_,r,a,s)}else if(i){const a=Cn(n,h=>G(h));o=$_(e.serverSyncTree_,r,a)}else{const a=G(n);o=Zn(e.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ir(e,r)),Kt(e.eventQueue_,l,o)}function Do(e,t){er(e,"connected",t),t===!1&&pm(e)}function dm(e,t){lt(t,(n,i)=>{er(e,n,i)})}function er(e,t,n){const i=new P("/.info/"+t),s=G(n);e.infoData_.updateSnapshot(i,s);const r=Zn(e.infoSyncTree_,i,s);Kt(e.eventQueue_,i,r)}function fm(e){return e.nextWriteId_++}function pm(e){Gh(e,"onDisconnectEvents");const t=Vh(e),n=Nn();Ki(e.onDisconnect_,S(),(s,r)=>{const o=K_(s,r,e.serverSyncTree_,t);yh(n,s,o)});let i=[];Ki(n,S(),(s,r)=>{i=i.concat(Zn(e.serverSyncTree_,s,r));const o=ym(e,s);ir(e,o)}),e.onDisconnect_=Nn(),Kt(e.eventQueue_,S(),i)}function gm(e){e.persistentConnection_&&e.persistentConnection_.interrupt(lm)}function Gh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),V(n,...t)}function qh(e,t,n){return Ph(e.serverSyncTree_,t,n)||w.EMPTY_NODE}function nr(e,t=e.transactionQueueTree_){if(t||ni(e,t),ge(t)){const n=zh(e,t);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&_m(e,tn(t),n)}else Hh(t)&&ei(t,n=>{nr(e,n)})}function _m(e,t,n){const i=n.map(h=>h.currentWriteId),s=qh(e,t,i);let r=s;const o=s.hash();for(let h=0;h<n.length;h++){const c=n[h];f(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const u=st(t,c.path);r=r.updateChild(u,c.currentOutputSnapshotRaw)}const l=r.val(!0),a=t;e.server_.put(a.toString(),l,h=>{Gh(e,"transaction put response",{path:a.toString(),status:h});let c=[];if(h==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Zt(e.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ni(e,tr(e.transactionQueueTree_,t)),nr(e,e.transactionQueueTree_),Kt(e.eventQueue_,t,c);for(let d=0;d<u.length;d++)Je(u[d])}else{if(h==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{nt("transaction at "+a.toString()+" failed: "+h);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=h}ir(e,t)}},o)}function ir(e,t){const n=Kh(e,t),i=tn(n),s=zh(e,n);return mm(e,s,i),i}function mm(e,t,n){if(t.length===0)return;const i=[];let s=[];const o=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const a=t[l],h=st(n,a.path);let c=!1,u;if(f(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,u=a.abortReason,s=s.concat(Zt(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=am)c=!0,u="maxretry",s=s.concat(Zt(e.serverSyncTree_,a.currentWriteId,!0));else{const d=qh(e,a.path,o);a.currentInputSnapshot=d;const g=t[l].update(d.val());if(g!==void 0){jh("transaction failed: Data returned ",g,a.path);let _=G(g);typeof g=="object"&&g!=null&&St(g,".priority")||(_=_.updatePriority(d.getPriority()));const N=a.currentWriteId,At=Vh(e),zt=z_(_,d,At);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=zt,a.currentWriteId=fm(e),o.splice(o.indexOf(N),1),s=s.concat(H_(e.serverSyncTree_,a.path,zt,a.currentWriteId,a.applyLocally)),s=s.concat(Zt(e.serverSyncTree_,N,!0))}else c=!0,u="nodata",s=s.concat(Zt(e.serverSyncTree_,a.currentWriteId,!0))}Kt(e.eventQueue_,n,s),s=[],c&&(t[l].status=2,function(d){setTimeout(d,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(u==="nodata"?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(new Error(u),!1,null))))}ni(e,e.transactionQueueTree_);for(let l=0;l<i.length;l++)Je(i[l]);nr(e,e.transactionQueueTree_)}function Kh(e,t){let n,i=e.transactionQueueTree_;for(n=E(t);n!==null&&ge(i)===void 0;)i=tr(i,n),t=O(t),n=E(t);return i}function zh(e,t){const n=[];return Yh(e,t,n),n.sort((i,s)=>i.order-s.order),n}function Yh(e,t,n){const i=ge(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ei(t,s=>{Yh(e,s,n)})}function ni(e,t){const n=ge(t);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Bh(t,n.length>0?n:void 0)}ei(t,i=>{ni(e,i)})}function ym(e,t){const n=tn(Kh(e,t)),i=tr(e.transactionQueueTree_,t);return X_(i,s=>{Si(e,s)}),Si(e,i),$h(i,s=>{Si(e,s)}),n}function Si(e,t){const n=ge(t);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Zt(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bh(t,void 0):n.length=r+1,Kt(e.eventQueue_,tn(t),s);for(let o=0;o<i.length;o++)Je(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}t+="/"+s}return t}function Em(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):nt(`Invalid query segment '${n}' in query '${e}'`)}return t}const Oo=function(e,t){const n=Tm(e),i=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Xp();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lg(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new P(n.pathString)}},Tm=function(e){let t="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof e=="string"){let h=e.indexOf("//");h>=0&&(l=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");c===-1&&(c=e.length);let u=e.indexOf("?");u===-1&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=vm(e.substring(c,u)));const d=Em(e.substring(Math.min(e.length,u)));h=t.indexOf(":"),h>=0?(o=l==="https"||l==="wss",a=parseInt(t.substring(h+1),10)):h=t.length;const g=t.slice(0,h);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=t.indexOf(".");i=t.substring(0,_).toLowerCase(),n=t.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,n,i,s){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return y(this._path)?null:ah(this._path)}get ref(){return new _e(this._repo,this._path)}get _queryIdentifier(){const t=_o(this._queryParams),n=Us(t);return n==="{}"?"default":n}get _queryObject(){return _o(this._queryParams)}isEqual(t){if(t=Fp(t),!(t instanceof sr))return!1;const n=this._repo===t._repo,i=uh(this._path,t._path),s=this._queryIdentifier===t._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Pg(this._path)}}class _e extends sr{constructor(t,n){super(t,n,new Vs,!1)}get parent(){const t=ch(this._path);return t===null?null:new _e(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}U_(_e);B_(_e);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="FIREBASE_DATABASE_EMULATOR_HOST",es={};let Cm=!1;function Im(e,t,n,i,s){let r=i||e.options.databaseURL;r===void 0&&(e.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),V("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=Oo(r,s),l=o.repoInfo,a;typeof process<"u"&&Xr&&(a=Xr[wm]),a?(r=`http://${a}?ns=${l.namespace}`,o=Oo(r,s),l=o.repoInfo):o.repoInfo.secure;const h=new og(e.name,e.options,t);nm("Invalid Firebase Database URL",o),y(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Am(l,e,h,new rg(e.name,n));return new Rm(c,e)}function Sm(e,t){const n=es[t];(!n||n[e.key]!==e)&&Wt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),gm(e),delete n[e.key]}function Am(e,t,n,i){let s=es[t.name];s||(s={},es[t.name]=s);let r=s[e.toURLString()];return r&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hm(e,Cm,n,i),s[e.toURLString()]=r,r}class Rm{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _e(this._repo,S())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Sm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Wt("Cannot call "+t+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(e){Vp(ns),Bt(new Up("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return Im(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),mt(Qr,Jr,e),mt(Qr,Jr,"esm2017")}Ct.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Ct.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Nm();export{Um as P,Hm as S,$m as a,Bm as s};
