var d=Object.defineProperty;var _=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(r,a,t)=>a in r?d(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,f=(r,a)=>{for(var t in a||(a={}))b.call(a,t)&&c(r,t,a[t]);if(_)for(var t of _(a))p.call(a,t)&&c(r,t,a[t]);return r};var s=(r,a,t)=>new Promise((i,u)=>{var l=o=>{try{e(t.next(o))}catch(n){u(n)}},m=o=>{try{e(t.throw(o))}catch(n){u(n)}},e=o=>o.done?i(o.value):Promise.resolve(o.value).then(l,m);e((t=t.apply(r,a)).next())});import{_ as y}from"./entry/index-5BGenAPt-1706087471176.js";import{x as S,u as x}from"./vue-lybwVHEG.js";function E(r,a){function t(){S(()=>s(this,null,function*(){if(r=x(r),!r)return;(yield y(()=>import("./sortable.esm-F3p9rkNP.js"),__vite__mapDeps([]))).default.create(r,f({animation:100,delay:400,delayOnTouchOnly:!0},a))}))}return{initSortable:t}}export{E as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}