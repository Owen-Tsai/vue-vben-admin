var _=Object.defineProperty;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))B.call(a,t)&&y(e,t,a[t]);if(m)for(var t of m(a))E.call(a,t)&&y(e,t,a[t]);return e};import{z as x,T as F,w as $}from"./entry/index-5BGenAPt-1706087471176.js";import{aa as k}from"./antd-veAxK-b_.js";import{d as z,f as S,c as D,u as I,h as M,w as P,o as j,_ as q,$ as A,a1 as G,ag as H}from"./vue-lybwVHEG.js";const J=z({name:"CountTo",__name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(e){return e>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(e,{expose:a,emit:t}){const n=e,r=S(n.startVal),h=S(!1);let u=x(r);const V=D(()=>N(I(u)));M(()=>{r.value=n.startVal}),P([()=>n.startVal,()=>n.endVal],()=>{n.autoplay&&d()}),j(()=>{n.autoplay&&d()});function d(){f(),r.value=n.endVal}function b(){r.value=n.startVal,f()}function f(){u=x(r,g({disabled:h,duration:n.duration,onFinished:()=>t("onFinished"),onStarted:()=>t("onStarted")},n.useEasing?{transition:F[n.transition]}:{}))}function N(o){if(!o&&o!==0)return"";const{decimals:c,decimal:v,separator:i,suffix:w,prefix:T}=n;o=Number(o).toFixed(c),o+="";const l=o.split(".");let s=l[0];const C=l.length>1?v+l[1]:"",p=/(\d+)(\d{3})/;if(i&&!k(i))for(;p.test(s);)s=s.replace(p,"$1"+i+"$2");return T+s+C+w}return a({reset:b}),(o,c)=>(q(),A("span",{style:H({color:e.color})},G(V.value),5))}}),R=$(J);export{R as C};
