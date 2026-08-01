(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return w},NormalizeError:function(){return h},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return v},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return E}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function u(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,v=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class h extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},18566,(e,t,r)=>{t.exports=e.r(76562)},5766,e=>{"use strict";let t,r;var n,o=e.i(71645);let i={data:""},a=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,s=/\n+/g,u=(e,t)=>{let r="",n="",o="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+a+";":n+="f"==i[1]?u(a,i):i+"{"+u(a,"k"==i[1]?"":t)+"}":"object"==typeof a?n+=u(a,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(i,a):i+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+n},c={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e};function f(e){let t,r,n,o=this||{},f=e.call?e(o.p):e;return((e,t,r,n,o)=>{var i;let f=d(e),p=c[f]||(c[f]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(f));if(!c[p]){let t=f!==e?e:(e=>{let t,r,n=[{}];for(;t=a.exec(e.replace(l,""));)t[4]?n.shift():t[3]?(r=t[3].replace(s," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(s," ").trim();return n[0]})(e);c[p]=u(o?{["@keyframes "+p]:t}:t,r?"":"."+p)}let g=r&&c.g?c.g:null;return r&&(c.g=c[p]),i=c[p],g?t.data=t.data.replace(g,i):-1===t.data.indexOf(i)&&(t.data=n?i+t.data:t.data+i),p})(f.unshift?f.raw?(t=[].slice.call(arguments,1),r=o.p,f.reduce((e,n,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+n+(null==i?"":i)},"")):f.reduce((e,t)=>Object.assign(e,t&&t.call?t(o.p):t),{}):f,(n=o.target,"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||i),o.g,o.o,o.k)}f.bind({g:1});let p,g,m,v=f.bind({k:1});function y(e,t){let r=this||{};return function(){let n=arguments;function o(i,a){let l=Object.assign({},i),s=l.className||o.className;r.p=Object.assign({theme:g&&g()},l),r.o=/ *go\d+/.test(s),l.className=f.apply(r,n)+(s?" "+s:""),t&&(l.ref=a);let u=e;return e[0]&&(u=l.as||e,delete l.as),m&&u[0]&&m(l),p(u,l)}return t?t(o):o}}var h=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),w=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},x=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return x(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},E=[],_={toasts:[],pausedAt:void 0},S=e=>{_=x(_,e),E.forEach(e=>{e(_)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=(e={})=>{let[t,r]=(0,o.useState)(_),n=(0,o.useRef)(_);(0,o.useEffect)(()=>(n.current!==_&&r(_),E.push(r),()=>{let e=E.indexOf(r);e>-1&&E.splice(e,1)}),[]);let i=t.toasts.map(t=>{var r,n,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:i}},A=e=>(t,r)=>{let n=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||b()}))(t,e,r);return S({type:2,toast:n}),n.id},C=(e,t)=>A("blank")(e,t);C.error=A("error"),C.success=A("success"),C.loading=A("loading"),C.custom=A("custom"),C.dismiss=e=>{S({type:3,toastId:e})},C.remove=e=>S({type:4,toastId:e}),C.promise=(e,t,r)=>{let n=C.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?h(t.success,e):void 0;return o?C.success(o,{id:n,...r,...null==r?void 0:r.success}):C.dismiss(n),e}).catch(e=>{let o=t.error?h(t.error,e):void 0;o?C.error(o,{id:n,...r,...null==r?void 0:r.error}):C.dismiss(n)}),e};var I=(e,t)=>{S({type:1,toast:{id:e,height:t}})},j=()=>{S({type:5,time:Date.now()})},k=new Map,T=1e3,L=e=>{let{toasts:t,pausedAt:r}=P(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),n=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&C.dismiss(t.id);return}return setTimeout(()=>C.dismiss(t.id),r)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[t,r]);let n=(0,o.useCallback)(()=>{r&&S({type:6,time:Date.now()})},[r]),i=(0,o.useCallback)((e,r)=>{let{reverseOrder:n=!1,gutter:o=8,defaultPosition:i}=r||{},a=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=a.findIndex(t=>t.id===e.id),s=a.filter((e,t)=>t<l&&e.visible).length;return a.filter(e=>e.visible).slice(...n?[s+1]:[0,s]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return(0,o.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)((e,t=T)=>{if(k.has(e))return;let r=setTimeout(()=>{k.delete(e),S({type:4,toastId:e})},t);k.set(e,r)})(e.id,e.removeDelay);else{let t=k.get(e.id);t&&(clearTimeout(t),k.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:I,startPause:j,endPause:n,calculateOffset:i}}},$=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,N=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${N} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,D=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${D} 1s linear infinite;
`,z=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,q=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,F=y("div")`
  position: absolute;
`,H=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${B} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?o.createElement(J,null,t):t:"blank"===r?null:o.createElement(H,null,o.createElement(G,{...n}),"loading"!==r&&o.createElement(F,null,"error"===r?o.createElement(R,{...n}):o.createElement(q,{...n})))},Z=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=o.memo(({toast:e,position:t,style:r,children:n})=>{let i=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,o]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${v(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},a=o.createElement(X,{toast:e}),l=o.createElement(K,{...e.ariaProps},h(e.message,e));return o.createElement(Z,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof n?n({icon:a,message:l}):o.createElement(o.Fragment,null,a,l))});n=o.createElement,u.p=void 0,p=n,g=void 0,m=void 0;var V=({id:e,className:t,style:r,onHeightUpdate:n,children:i})=>{let a=o.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return o.createElement("div",{ref:a,className:t,style:r},i)},W=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;e.s(["CheckmarkIcon",0,q,"ErrorIcon",0,R,"LoaderIcon",0,G,"ToastBar",0,Q,"ToastIcon",0,X,"Toaster",0,({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:i,containerStyle:a,containerClassName:l})=>{let{toasts:s,handlers:u}=L(r);return o.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},s.map(r=>{let a,l,s=r.position||t,c=u.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}),d=(a=s.includes("top"),l=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...l});return o.createElement(V,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?W:"",style:d},"custom"===r.type?h(r.message,r):i?i(r):o.createElement(Q,{toast:r,position:s}))}))},"default",0,C,"resolveValue",0,h,"toast",0,C,"useToaster",0,L,"useToasterStore",0,P],5766)},93936,e=>{"use strict";var t=e.i(71645);let r=(0,t.createContext)(null);function n(){let e=(0,t.useContext)(r);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function o(e){var t;return null!=(t=null==e?void 0:e.clientId)?t:null==e?void 0:e.client_id}let i={large:40,medium:32,small:20};e.s(["GoogleLogin",0,function({onSuccess:e,onError:r,useOneTap:a,promptMomentNotification:l,type:s="standard",theme:u="outline",size:c="large",text:d,shape:f,logo_alignment:p,width:g,locale:m,click_listener:v,containerProps:y,...h}){let b=(0,t.useRef)(null),{clientId:w,scriptLoadedSuccessfully:x}=n(),E=(0,t.useRef)(e);E.current=e;let _=(0,t.useRef)(r);_.current=r;let S=(0,t.useRef)(l);return S.current=l,(0,t.useEffect)(()=>{var e,t,r,n,i,l,y,O,P;if(x)return null==(r=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||r.initialize({client_id:w,callback:e=>{var t;if(!(null==e?void 0:e.credential))return null==(t=_.current)?void 0:t.call(_);let{credential:r,select_by:n}=e;E.current({credential:r,clientId:o(e),select_by:n})},...h}),null==(l=null==(i=null==(n=null==window?void 0:window.google)?void 0:n.accounts)?void 0:i.id)||l.renderButton(b.current,{type:s,theme:u,size:c,text:d,shape:f,logo_alignment:p,width:g,locale:m,click_listener:v}),a&&(null==(P=null==(O=null==(y=null==window?void 0:window.google)?void 0:y.accounts)?void 0:O.id)||P.prompt(S.current)),()=>{var e,t,r;a&&(null==(r=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||r.cancel())}},[w,x,a,s,u,c,d,f,p,g,m]),t.default.createElement("div",{...y,ref:b,style:{height:i[c],...null==y?void 0:y.style}})},"GoogleOAuthProvider",0,function({clientId:e,nonce:n,onScriptLoadSuccess:o,onScriptLoadError:i,children:a}){let l=function(e={}){let{nonce:r,onScriptLoadSuccess:n,onScriptLoadError:o}=e,[i,a]=(0,t.useState)(!1),l=(0,t.useRef)(n);l.current=n;let s=(0,t.useRef)(o);return s.current=o,(0,t.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=r,e.onload=()=>{var e;a(!0),null==(e=l.current)||e.call(l)},e.onerror=()=>{var e;a(!1),null==(e=s.current)||e.call(s)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[r]),i}({nonce:n,onScriptLoadSuccess:o,onScriptLoadError:i}),s=(0,t.useMemo)(()=>({clientId:e,scriptLoadedSuccessfully:l}),[e,l]);return t.default.createElement(r.Provider,{value:s},a)},"googleLogout",0,function(){var e,t,r;null==(r=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||r.disableAutoSelect()},"hasGrantedAllScopesGoogle",0,function(e,t,...r){var n,o,i;return!!(null==window?void 0:window.google)&&((null==(i=null==(o=null==(n=null==window?void 0:window.google)?void 0:n.accounts)?void 0:o.oauth2)?void 0:i.hasGrantedAllScopes(e,t,...r))||!1)},"hasGrantedAnyScopeGoogle",0,function(e,t,...r){var n,o,i;return!!(null==window?void 0:window.google)&&((null==(i=null==(o=null==(n=null==window?void 0:window.google)?void 0:n.accounts)?void 0:o.oauth2)?void 0:i.hasGrantedAnyScope(e,t,...r))||!1)},"useGoogleLogin",0,function({flow:e="implicit",scope:r="",onSuccess:o,onError:i,onNonOAuthError:a,overrideScope:l,state:s,...u}){let{clientId:c,scriptLoadedSuccessfully:d}=n(),f=(0,t.useRef)(),p=(0,t.useRef)(o);p.current=o;let g=(0,t.useRef)(i);g.current=i;let m=(0,t.useRef)(a);m.current=a,(0,t.useEffect)(()=>{var t,n;if(!d)return;let o="implicit"===e?"initTokenClient":"initCodeClient";f.current=null==(n=null==(t=null==window?void 0:window.google)?void 0:t.accounts)?void 0:n.oauth2[o]({client_id:c,scope:l?r:`openid profile email ${r}`,callback:e=>{var t,r;if(e.error)return null==(t=g.current)?void 0:t.call(g,e);null==(r=p.current)||r.call(p,e)},error_callback:e=>{var t;null==(t=m.current)||t.call(m,e)},state:s,...u})},[c,d,e,r,s]);let v=(0,t.useCallback)(e=>{var t;return null==(t=f.current)?void 0:t.requestAccessToken(e)},[]),y=(0,t.useCallback)(()=>{var e;return null==(e=f.current)?void 0:e.requestCode()},[]);return"implicit"===e?v:y},"useGoogleOAuth",0,n,"useGoogleOneTapLogin",0,function({onSuccess:e,onError:r,promptMomentNotification:i,cancel_on_tap_outside:a,prompt_parent_id:l,state_cookie_domain:s,hosted_domain:u,use_fedcm_for_prompt:c=!1,use_fedcm_for_button:d=!1,disabled:f,auto_select:p}){let{clientId:g,scriptLoadedSuccessfully:m}=n(),v=(0,t.useRef)(e);v.current=e;let y=(0,t.useRef)(r);y.current=r;let h=(0,t.useRef)(i);h.current=i,(0,t.useEffect)(()=>{var e,t,r,n,i,b,w,x,E;if(m){if(f){null==(r=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||r.cancel();return}return null==(b=null==(i=null==(n=null==window?void 0:window.google)?void 0:n.accounts)?void 0:i.id)||b.initialize({client_id:g,callback:e=>{var t;if(!(null==e?void 0:e.credential))return null==(t=y.current)?void 0:t.call(y);let{credential:r,select_by:n}=e;v.current({credential:r,clientId:o(e),select_by:n})},hosted_domain:u,cancel_on_tap_outside:a,prompt_parent_id:l,state_cookie_domain:s,use_fedcm_for_prompt:c,use_fedcm_for_button:d,auto_select:p}),null==(E=null==(x=null==(w=null==window?void 0:window.google)?void 0:w.accounts)?void 0:x.id)||E.prompt(h.current),()=>{var e,t,r;null==(r=null==(t=null==(e=null==window?void 0:window.google)?void 0:e.accounts)?void 0:t.id)||r.cancel()}}},[g,m,a,l,s,u,c,d,f,p])}])},8341,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={cancelIdleCallback:function(){return a},requestIdleCallback:function(){return i}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},a="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},19083,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={ESCAPE_REGEX:function(){return a},htmlEscapeAttributeString:function(){return c},htmlEscapeJsonString:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},a=/[&><\u2028\u2029]/g,l={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},s=/[&"'<>]/g;function u(e){return e.replace(a,e=>i[e])}function c(e){return e.replace(s,e=>l[e])}},79520,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return w},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return h}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(55682),a=e.r(90809),l=e.r(43476),s=i._(e.r(74080)),u=a._(e.r(71645)),c=e.r(42732),d=e.r(22737),f=e.r(8341),p=e.r(19083),g=new Map,m=new Set,v=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:l="afterInteractive",onError:u,stylesheets:c}=e,f=r||t;if(f&&m.has(f))return;if(g.has(t)){m.add(f),g.get(t).then(n,u);return}let p=()=>{o&&o(),m.add(f)},v=document.createElement("script"),y=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),n&&n.call(this,t),p()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});i?(v.innerHTML=i.__html||"",p()):a?(v.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",p()):t&&(v.src=t,g.set(t,y)),(0,d.setAttributesFromProps)(v,e),"worker"===l&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",l),c&&(e=>{if(s.default.preinit)return e.forEach(e=>{s.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}})(c),document.body.appendChild(v)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>v(e))}):v(e)}function h(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");m.add(t)})}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:i="afterInteractive",onError:a,stylesheets:d,...g}=e,{updateScripts:y,scripts:h,getIsSsr:b,appDir:w,nonce:x}=(0,u.useContext)(c.HeadManagerContext);x=g.nonce||x;let E=(0,u.useRef)(!1);(0,u.useEffect)(()=>{let e=t||r;E.current||(o&&e&&m.has(e)&&o(),E.current=!0)},[o,t,r]);let _=(0,u.useRef)(!1);if((0,u.useEffect)(()=>{if(!_.current){if("afterInteractive"===i)v(e);else"lazyOnload"===i&&("complete"===document.readyState?(0,f.requestIdleCallback)(()=>v(e)):window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>v(e))}));_.current=!0}},[e,i]),("beforeInteractive"===i||"worker"===i)&&(y?(h[i]=(h[i]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:a,...g,nonce:x}]),y(h)):b&&b()?m.add(t||r):b&&!b()&&v({...e,nonce:x})),w){if(d&&d.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===i)if(!r)return g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([0,{...g,id:t}]))})`}});else return s.default.preload(r,g.integrity?{as:"script",integrity:g.integrity,nonce:x,crossOrigin:g.crossOrigin}:{as:"script",nonce:x,crossOrigin:g.crossOrigin}),(0,l.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([r,{...g,id:t}]))})`}});"afterInteractive"===i&&r&&s.default.preload(r,g.integrity?{as:"script",integrity:g.integrity,nonce:x,crossOrigin:g.crossOrigin}:{as:"script",nonce:x,crossOrigin:g.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let w=b;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},85107,e=>{"use strict";var t=e.i(43476),r=e.i(55487),n=e.i(64645),o=e.i(45489);let i=(0,n.configureStore)({reducer:{googleUser:o.default}});e.s(["default",0,function({children:e}){return(0,t.jsx)(r.Provider,{store:i,children:e})}],85107)},53477,e=>{"use strict";var t=e.i(71645),r=e.i(55487),n=e.i(45489);e.s(["default",0,()=>{let e=(0,r.useDispatch)();return(0,t.useEffect)(()=>{let t=localStorage.getItem("username"),r=localStorage.getItem("profilePicture");t&&e((0,n.setGoogleUser)({username:t})),r&&e((0,n.setGoogleUser)({profilePicture:r}))},[e]),null}])},59109,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(18566);let o=e.i(47167).default.env.NEXT_PUBLIC_GA_MEASUREMENT_ID??"G-S13HG588J1";function i(){let e=(0,n.usePathname)(),t=(0,n.useSearchParams)();return(0,r.useEffect)(()=>{try{var r;r=e+(t?`?${t.toString()}`:""),"function"==typeof window.gtag&&window.gtag("config",o,{page_path:r})}catch(e){console.warn("gtag pageview error:",e)}},[e,t]),null}e.s(["default",0,function(){return(0,t.jsx)(r.Suspense,{fallback:null,children:(0,t.jsx)(i,{})})}],59109)},93653,e=>{"use strict";var t=e.i(71645);e.s(["default",0,function(){return(0,t.useEffect)(()=>{try{if(document.querySelector('script[src*="adsbygoogle.js"]'))return void console.debug("[AdScriptLoader] AdSense script already present");let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6570382057496115",e.async=!0,e.crossOrigin="anonymous",e.onload=()=>console.debug("[AdScriptLoader] AdSense script loaded"),e.onerror=e=>console.error("[AdScriptLoader] AdSense script failed to load",e),document.body.appendChild(e),console.debug("[AdScriptLoader] AdSense script appended")}catch(e){console.error("[AdScriptLoader] failed initializing AdSense script",e)}},[]),null}])}]);