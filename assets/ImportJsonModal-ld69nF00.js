var y=Object.defineProperty,E=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var C=(e,o,a)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,c=(e,o)=>{for(var a in o||(o={}))I.call(o,a)&&C(e,a,o[a]);if(h)for(var a of h(o))U.call(o,a)&&C(e,a,o[a]);return e},i=(e,o)=>E(e,M(o));import{u as j}from"./useFormDesignState-yMpjuC-D.js";import{g as k,f as D}from"./index-ZfBvCGVI.js";import{C as F,M as J}from"./index-b9FZho2S.js";import{a as S,c as g}from"./entry/index-5BGenAPt-1706087471176.js";import{at as w,M as O}from"./antd-veAxK-b_.js";import{d as B,r as N,H as $,a8 as r,_ as x,a9 as T,aa as n,E as u,k as l,a0 as b,a3 as V,a4 as A}from"./vue-lybwVHEG.js";import"./useWindowSizeFn-KMBqFfDs.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:F,Upload:w,Modal:O},setup(){const{createMessage:e}=S(),o=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=j(),p=()=>{o.visible=!1},m=()=>{o.visible=!0},d=()=>{try{const t=JSON.parse(o.json);t.schemas&&D(t.schemas,s=>{k(s)}),a.setFormConfig(i(c({},t),{activeKey:1,currentItem:{component:""}})),p(),e.success("导入成功")}catch(t){e.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:t=>{const s=new FileReader;return s.readAsText(t),s.onload=function(){o.json=this.result,d()},!1},handleCancel:p,showModal:m},$(o)),{MODE:J})}}),L=e=>(V("data-v-62ebfefa"),e=e(),A(),e),R=L(()=>b("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function H(e,o,a,p,m,d){const f=r("CodeEditor"),t=r("a-button"),s=r("Upload"),_=r("Modal");return x(),T(_,{title:"JSON数据",open:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(t,{onClick:e.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(s,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(t,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(t,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,b("div",z,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const ee=g(K,[["render",H],["__scopeId","data-v-62ebfefa"]]);export{ee as default};
