import{h as w,q as M,ag as P,V as H,ah as R,ai as m,a1 as T,aj as W,v as I,ad as z,H as G,ak as k,al as K,am as U,an as S,P as g,y as j,a as F,x as h,ao as J,ap as Q,aq as X,ar as Z,as as ee,o as te,K as re,p as ne,l as ae,c as se,at as A,d as oe,aa as ie,g as ue,D as ce}from"./runtime.Ca66Dgyo.js";import{d as fe}from"./disclose-version.GuGCm0Ph.js";function we(e,t){if(t){const r=document.body;e.autofocus=!0,H(()=>{document.activeElement===r&&e.focus()})}}function me(e){w&&M(e)!==null&&P(e)}let q=!1;function le(){q||(q=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Te(e,t,r,a=!0){a&&r();for(var s of t)e.addEventListener(s,r);R(()=>{for(var n of t)e.removeEventListener(n,r)})}function B(e){var t=W,r=I;m(null),T(null);try{return e()}finally{m(t),T(r)}}function Le(e,t,r,a=r){e.addEventListener(t,()=>B(r));const s=e.__on_r;s?e.__on_r=()=>{s(),a()}:e.__on_r=a,le()}const C=new Set,N=new Set;function de(e,t,r,a){function s(n){if(a.capture||b.call(t,n),!n.cancelBubble)return B(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?H(()=>{t.addEventListener(e,s,a)}):t.addEventListener(e,s,a),s}function Se(e,t,r,a,s){var n={capture:a,passive:s},u=de(e,t,r,n);(t===document.body||t===window||t===document)&&R(()=>{t.removeEventListener(e,u,n)})}function ke(e){for(var t=0;t<e.length;t++)C.add(e[t]);for(var r of N)r(e)}function b(e){var V;var t=this,r=t.ownerDocument,a=e.type,s=((V=e.composedPath)==null?void 0:V.call(e))||[],n=s[0]||e.target,u=0,p=e.__root;if(p){var l=s.indexOf(p);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var d=s.indexOf(t);if(d===-1)return;l<=d&&(u=l)}if(n=s[u]||e.target,n!==t){z(e,"currentTarget",{configurable:!0,get(){return n||r}});var L=W,c=I;m(null),T(null);try{for(var o,i=[];n!==null;){var f=n.assignedSlot||n.parentNode||n.host||null;try{var _=n["__"+a];if(_!==void 0&&!n.disabled)if(G(_)){var[x,...$]=_;x.apply(n,[e,...$])}else _.call(n,e)}catch(y){o?i.push(y):o=y}if(e.cancelBubble||f===t||f===null)break;n=f}if(o){for(let y of i)queueMicrotask(()=>{throw y});throw o}}finally{e.__root=t,delete e.currentTarget,m(L),T(c)}}}function Ae(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const _e=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ne(e){return _e.includes(e)}const pe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function De(e){return e=e.toLowerCase(),pe[e]??e}const ve=["touchstart","touchmove"];function he(e){return ve.includes(e)}let D=!0;function Oe(e){D=e}function Re(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function be(e,t){return Y(e,t)}function Ie(e,t){k(),t.intro=t.intro??!1;const r=t.target,a=w,s=h;try{for(var n=M(r);n&&(n.nodeType!==8||n.data!==K);)n=U(n);if(!n)throw S;g(!0),j(n),F();const u=Y(e,{...t,anchor:n});if(h===null||h.nodeType!==8||h.data!==J)throw Q(),S;return g(!1),u}catch(u){if(u===S)return t.recover===!1&&X(),k(),P(r),g(!1),be(e,t);throw u}finally{g(a),j(s)}}const v=new Map;function Y(e,{target:t,anchor:r,props:a={},events:s,context:n,intro:u=!0}){k();var p=new Set,l=c=>{for(var o=0;o<c.length;o++){var i=c[o];if(!p.has(i)){p.add(i);var f=he(i);t.addEventListener(i,b,{passive:f});var _=v.get(i);_===void 0?(document.addEventListener(i,b,{passive:f}),v.set(i,1)):v.set(i,_+1)}}};l(Z(C)),N.add(l);var d=void 0,L=ee(()=>{var c=r??t.appendChild(te());return re(()=>{if(n){ne({});var o=se;o.c=n}s&&(a.$$events=s),w&&fe(c,null),D=u,d=e(c,a)||{},D=!0,w&&(I.nodes_end=h),n&&ae()}),()=>{var f;for(var o of p){t.removeEventListener(o,b);var i=v.get(o);--i===0?(document.removeEventListener(o,b),v.delete(o)):v.set(o,i)}N.delete(l),O.delete(d),c!==r&&((f=c.parentNode)==null||f.removeChild(c))}});return O.set(d,L),d}let O=new WeakMap;function Ve(e){const t=O.get(e);t&&t()}function ye(e,t,r){if(e==null)return t(void 0),A;const a=oe(()=>e.subscribe(t,r));return a.unsubscribe?()=>a.unsubscribe():a}let E=!1;function je(e,t,r){const a=r[t]??(r[t]={store:null,source:ie(void 0),unsubscribe:A});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=A;else{var s=!0;a.unsubscribe=ye(e,n=>{s?a.source.v=n:ce(a.source,n)}),s=!1}return ue(a.source)}function qe(){const e={};return R(()=>{for(var t in e)e[t].unsubscribe()}),e}function Me(e){var t=E;try{return E=!1,[e(),E]}finally{E=t}}export{Re as a,je as b,Me as c,Oe as d,le as e,de as f,ke as g,Ie as h,Ae as i,we as j,Ne as k,D as l,be as m,De as n,Le as o,Te as p,Se as q,me as r,qe as s,Ve as u};