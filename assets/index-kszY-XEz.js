import{p as L,f as R,c as k}from"./entry/index-5BGenAPt-1706087471176.js";import{u as z}from"./useContentViewHeight-aeCbGza1.js";import{G as C}from"./antd-veAxK-b_.js";import{d as E,f as o,c as W,u as a,o as $,b,_ as B,$ as M,k as F,aa as N,a0 as V,a2 as p,ag as g}from"./vue-lybwVHEG.js";import{u as D}from"./useWindowSizeFn-KMBqFfDs.js";const G=["src"],I=E({__name:"index",props:{frameSrc:L.string.def("")},emits:["message"],setup(h,{expose:_,emit:v}){const s=o(!0),w=o(50),r=o(window.innerHeight),n=o(),{headerHeightRef:x}=z(),{prefixCls:c}=R("iframe-page");D(m,{wait:150,immediate:!0});const l=W(()=>({height:`${a(r)}px`}));function m(){const e=a(n);if(!e)return;const t=x.value;w.value=t,r.value=window.innerHeight-t;const i=document.documentElement.clientHeight-t;e.style.height=`${i}px`}function y(){s.value=!1,m()}const f=e=>{v("message",e.data)},H=(e,t,i)=>{var d;const u=a(n);u&&((d=u.contentWindow)==null||d.postMessage(e,t,i))},S=()=>{var t;s.value=!0;const e=n.value;e&&((t=e.contentWindow)==null||t.location.reload(),s.value=!1)};return $(()=>{window.addEventListener("message",f)}),b(()=>{window.removeEventListener("message",f)}),_({postMessage:H,reload:S}),(e,t)=>(B(),M("div",{class:p(a(c)),style:g(l.value)},[F(a(C),{spinning:s.value,size:"large",style:g(l.value)},{default:N(()=>[V("iframe",{src:h.frameSrc,class:p(`${a(c)}__main`),ref_key:"frameRef",ref:n,onLoad:y},null,42,G)]),_:1},8,["spinning","style"])],6))}}),A=k(I,[["__scopeId","data-v-bb6a7069"]]);export{A as default};
