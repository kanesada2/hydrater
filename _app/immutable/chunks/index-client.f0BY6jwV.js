import{S as g,z as re,A as ne,B as w,C as te,D as y,E as I,U as p,g as P,v as j,F as ie,G as se,H as Q,I as ae,J as K,K as M,L as Y,h as F,a as fe,M as ue,N as le,O as ce,y as oe,P as U,x as de,Q as _e,R as ve,d as N,V as pe,W as he,X as be,Y as W,Z as Pe,_ as $,$ as we,a0 as ye,a1 as G,a2 as ge,a3 as X,a4 as Ee,a5 as Re,a6 as k,i as H,a7 as me,a8 as T,a9 as xe,aa as Ie,c as D,ab as ee,b as Oe}from"./runtime.Ca66Dgyo.js";import{c as Se}from"./store.X5M__x5J.js";function x(e,r=null,i){if(typeof e!="object"||e===null||g in e)return e;const a=se(e);if(a!==re&&a!==ne)return e;var t=new Map,u=Q(e),v=w(0);u&&t.set("length",w(e.length));var d;return new Proxy(e,{defineProperty(l,n,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&te();var f=t.get(n);return f===void 0?(f=w(s.value),t.set(n,f)):y(f,x(s.value,d)),!0},deleteProperty(l,n){var s=t.get(n);if(s===void 0)n in l&&t.set(n,w(p));else{if(u&&typeof n=="string"){var f=t.get("length"),c=Number(n);Number.isInteger(c)&&c<f.v&&y(f,c)}y(s,p),Z(v)}return!0},get(l,n,s){var h;if(n===g)return e;var f=t.get(n),c=n in l;if(f===void 0&&(!c||(h=I(l,n))!=null&&h.writable)&&(f=w(x(c?l[n]:p,d)),t.set(n,f)),f!==void 0){var o=P(f);return o===p?void 0:o}return Reflect.get(l,n,s)},getOwnPropertyDescriptor(l,n){var s=Reflect.getOwnPropertyDescriptor(l,n);if(s&&"value"in s){var f=t.get(n);f&&(s.value=P(f))}else if(s===void 0){var c=t.get(n),o=c==null?void 0:c.v;if(c!==void 0&&o!==p)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return s},has(l,n){var o;if(n===g)return!0;var s=t.get(n),f=s!==void 0&&s.v!==p||Reflect.has(l,n);if(s!==void 0||j!==null&&(!f||(o=I(l,n))!=null&&o.writable)){s===void 0&&(s=w(f?x(l[n],d):p),t.set(n,s));var c=P(s);if(c===p)return!1}return f},set(l,n,s,f){var R;var c=t.get(n),o=n in l;if(u&&n==="length")for(var h=s;h<c.v;h+=1){var E=t.get(h+"");E!==void 0?y(E,p):h in l&&(E=w(p),t.set(h+"",E))}c===void 0?(!o||(R=I(l,n))!=null&&R.writable)&&(c=w(void 0),y(c,x(s,d)),t.set(n,c)):(o=c.v!==p,y(c,x(s,d)));var b=Reflect.getOwnPropertyDescriptor(l,n);if(b!=null&&b.set&&b.set.call(f,s),!o){if(u&&typeof n=="string"){var O=t.get("length"),S=Number(n);Number.isInteger(S)&&S>=O.v&&y(O,S+1)}Z(v)}return!0},ownKeys(l){P(v);var n=Reflect.ownKeys(l).filter(c=>{var o=t.get(c);return o===void 0||o.v!==p});for(var[s,f]of t)f.v!==p&&!(s in l)&&n.push(s);return n},setPrototypeOf(){ie()}})}function Z(e,r=1){y(e,e.v+r)}function z(e){return e!==null&&typeof e=="object"&&g in e?e[g]:e}function je(e,r){return Object.is(z(e),z(r))}function qe(e,r,i,a=null,t=!1){F&&fe();var u=e,v=null,d=null,l=null,n=t?ue:0;ae(()=>{if(l===(l=!!r()))return;let s=!1;if(F){const f=u.data===le;l===f&&(u=ce(),oe(u),U(!1),s=!0)}l?(v?K(v):v=M(()=>i(u)),d&&Y(d,()=>{d=null})):(d?K(d):a&&(d=M(()=>a(u))),v&&Y(v,()=>{v=null})),s&&U(!0)},n),F&&(u=de)}function V(e,r){return e===r||(e==null?void 0:e[g])===r}function Be(e={},r,i,a){return _e(()=>{var t,u;return ve(()=>{t=u,u=[],N(()=>{e!==i(...u)&&(r(e,...u),t&&V(i(...t),e)&&r(null,...t))})}),()=>{pe(()=>{u&&V(i(...u),e)&&r(null,...u)})}}),e}const Ae={get(e,r){if(!e.exclude.includes(r))return P(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,i){return r in e.special||(e.special[r]=De({get[r](){return e.props[r]}},r,W)),e.special[r](i),$(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),$(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ke(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},Ae)}const Te={get(e,r){let i=e.props.length;for(;i--;){let a=e.props[i];if(T(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,i){let a=e.props.length;for(;a--;){let t=e.props[a];T(t)&&(t=t());const u=I(t,r);if(u&&u.set)return u.set(i),!0}return!1},getOwnPropertyDescriptor(e,r){let i=e.props.length;for(;i--;){let a=e.props[i];if(T(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const t=I(a,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===g||r===k)return!1;for(let i of e.props)if(T(i)&&(i=i()),i!=null&&r in i)return!0;return!1},ownKeys(e){const r=[];for(let i of e.props){T(i)&&(i=i());for(const a in i)r.includes(a)||r.push(a)}return r}};function Me(...e){return new Proxy({props:e},Te)}function J(e){for(var r=j,i=j;r!==null&&!(r.f&(we|ye));)r=r.parent;try{return G(r),e()}finally{G(i)}}function De(e,r,i,a){var B;var t=(i&ge)!==0,u=!X||(i&Ee)!==0,v=(i&Re)!==0,d=(i&xe)!==0,l=!1,n;v?[n,l]=Se(()=>e[r]):n=e[r];var s=g in e||k in e,f=((B=I(e,r))==null?void 0:B.set)??(s&&v&&r in e?_=>e[r]=_:void 0),c=a,o=!0,h=!1,E=()=>(h=!0,o&&(o=!1,d?c=N(a):c=a),c);n===void 0&&a!==void 0&&(f&&u&&he(),n=E(),f&&f(n));var b;if(u)b=()=>{var _=e[r];return _===void 0?E():(o=!0,h=!1,_)};else{var O=J(()=>(t?H:me)(()=>e[r]));O.f|=be,b=()=>{var _=P(O);return _!==void 0&&(c=void 0),_===void 0?c:_}}if(!(i&W))return b;if(f){var S=e.$$legacy;return function(_,m){return arguments.length>0?((!u||!m||S||l)&&f(m?b():_),_):b()}}var R=!1,q=!1,L=Ie(n),A=J(()=>H(()=>{var _=b(),m=P(L);return R?(R=!1,q=!0,m):(q=!1,L.v=_)}));return t||(A.equals=Pe),function(_,m){if(arguments.length>0){const C=m?P(A):u&&v?x(_):_;return A.equals(C)||(R=!0,y(L,C),h&&c!==void 0&&(c=C),N(()=>P(A))),_}return P(A)}}function Ye(e){D===null&&ee(),X&&D.l!==null?Le(D).m.push(e):Oe(()=>{const r=N(e);if(typeof r=="function")return r})}function Ne(e,r,{bubbles:i=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:r,bubbles:i,cancelable:a})}function Ue(){const e=D;return e===null&&ee(),(r,i,a)=>{var u;const t=(u=e.s.$$events)==null?void 0:u[r];if(t){const v=Q(t)?t.slice():[t],d=Ne(r,i,a);for(const l of v)l.call(e.x,d);return!d.defaultPrevented}return!0}}function Le(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{x as a,Be as b,je as c,Ue as d,qe as i,Ke as l,Ye as o,De as p,Me as s};