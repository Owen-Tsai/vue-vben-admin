var w=Object.defineProperty,V=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var C=(e,o,t)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,v=(e,o)=>{for(var t in o||(o={}))H.call(o,t)&&C(e,t,o[t]);if(y)for(var t of y(o))L.call(o,t)&&C(e,t,o[t]);return e},$=(e,o)=>V(e,A(o));import{d as O}from"./vuedraggable.umd-tqMgCm6E.js";import R from"./FormNode-HE7moIAP.js";import D from"./FormNodeOperate-t4zR5Zm9.js";import{u as j}from"./useFormDesignState-yMpjuC-D.js";import{d as z,r as B,c as p,H as U,a8 as n,_ as m,a9 as u,aa as s,a2 as q,A as M,ad as k,F as E,k as l,ab as G,$ as b,aj as T,ak as J}from"./vue-lybwVHEG.js";import{U as K,V as Q}from"./antd-veAxK-b_.js";import{c as W}from"./entry/index-5BGenAPt-1706087471176.js";import"./index-h3iqAht9.js";import"./formItemConfig-KEB43Oio.js";import"./componentMap-4VnVNc9Q.js";import"./useFormItem-Y8aCfwEt.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-UGaKr6YP.js";import"./index-8fAXhvXw.js";import"./useWindowSizeFn-KMBqFfDs.js";import"./uuid-uJQj7518.js";import"./useSortable-5LH1rpMh.js";import"./download-zZghob-H.js";import"./base64Conver-UKE1Rgbp.js";import"./index-E_mvLG_R.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-EBdp4nfr.js";import"./copyTextToClipboard-2AOVSRlO.js";import"./index-XtaqexEI.js";import"./index-DeAdMtnc.js";import"./index-ZfBvCGVI.js";const X=z({name:"LayoutItem",components:{FormNode:R,FormNodeOperate:D,draggable:O,Row:K,Col:Q},props:{schema:{type:Object,required:!0},currentItem:{type:Object,required:!0}},emits:["dragStart","handleColAdd","handle-copy","handle-delete"],setup(e){const{formDesignMethods:{handleSetSelectItem:o},formConfig:t}=j(),c=B({}),g=p(()=>{const{colProps:i={}}=e.schema;return i}),h=p(()=>e.schema.columns),d=p(()=>t.value.layout==="horizontal"?"Col":"div");return $(v({},U(c)),{colPropsComputed:g,handleSetSelectItem:o,layoutTag:d,list1:h})}});function Y(e,o,t,c,g,h){const d=n("LayoutItem",!0),i=n("draggable"),f=n("Col"),F=n("Row"),I=n("FormNodeOperate"),S=n("FormNode");return m(),u(f,T(J(e.colPropsComputed)),{default:s(()=>[["Grid"].includes(e.schema.component)?(m(),b("div",{key:0,class:q(["grid-box",{active:e.schema.key===e.currentItem.key}]),onClick:o[2]||(o[2]=M(r=>e.handleSetSelectItem(e.schema),["stop"]))},[l(F,k({class:"grid-row"},e.schema.componentProps),{default:s(()=>[(m(!0),b(E,null,G(e.schema.columns,(r,N)=>(m(),u(f,{class:"grid-col",key:N,span:r.span},{default:s(()=>[l(i,k({class:"list-main draggable-box","component-data":{name:"list",tag:"div",type:"transition-group"}},{group:"form-draggable",ghostClass:"moving",animation:180,handle:".drag-move"},{"item-key":"key",modelValue:r.children,"onUpdate:modelValue":a=>r.children=a,onStart:a=>e.$emit("dragStart",a,r.children),onAdd:a=>e.$emit("handleColAdd",a,r.children)}),{item:s(({element:a})=>[l(d,{class:"drag-move",schema:a,"current-item":e.currentItem,onHandleCopy:o[0]||(o[0]=P=>e.$emit("handle-copy")),onHandleDelete:o[1]||(o[1]=P=>e.$emit("handle-delete"))},null,8,["schema","current-item"])]),_:2},1040,["modelValue","onUpdate:modelValue","onStart","onAdd"])]),_:2},1032,["span"]))),128))]),_:1},16),l(I,{schema:e.schema,currentItem:e.currentItem},null,8,["schema","currentItem"])],2)):(m(),u(S,{key:e.schema.key,schema:e.schema,"current-item":e.currentItem,onHandleCopy:o[3]||(o[3]=r=>e.$emit("handle-copy")),onHandleDelete:o[4]||(o[4]=r=>e.$emit("handle-delete"))},null,8,["schema","current-item"]))]),_:1},16)}const be=W(X,[["render",Y]]);export{be as default};
