var Se=Object.defineProperty;var be=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var Fe=(n,r,s)=>r in n?Se(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s,L=(n,r)=>{for(var s in r||(r={}))Re.call(r,s)&&Fe(n,s,r[s]);if(be)for(var s of be(r))Ne.call(r,s)&&Fe(n,s,r[s]);return n};var x=(n,r,s)=>new Promise((o,A)=>{var l=c=>{try{w(s.next(c))}catch(p){A(p)}},d=c=>{try{w(s.throw(c))}catch(p){A(p)}},w=c=>c.done?o(c.value):Promise.resolve(c.value).then(l,d);w((s=s.apply(n,r)).next())});import{u as t,g as ke,c as X,w as M,an as Ce,x as Ae,I as we,h as Ke,d as Ue,K as He,r as Ie,f as J,o as We,_ as ue,a9 as Ve,aa as oe,k as Te,O as ie,$ as Ye,ab as de,ae as Be,aj as pe,ak as he,F as Xe,ad as De,al as qe}from"./vue-lybwVHEG.js";import{_ as Ge}from"./FormItem.vue_vue_type_script_lang-cLVScLe_.js";import{b as ze,c as Je,_ as Me}from"./BasicForm.vue_vue_type_style_index_0_lang-rH-Ti-Vr.js";import{h as Qe,i as re,d as je,a as Ze}from"./helper-pBU1FWBk.js";import{G as W,H as Q,I as K,F as et,u as _e,J as Ee,K as me,d as Le,f as tt}from"./entry/index-5BGenAPt-1706087471176.js";import{e as le,k as ce,s as q,ad as ye,ag as Oe,d as Z,v as xe,f as G,aa as nt,ah as st,ai as at,U as ot,a2 as it}from"./antd-veAxK-b_.js";import{u as rt}from"./index-8fAXhvXw.js";function ct(n,r,s){const o=/^\[(.+)\]$/;if(o.test(n)){const A=n.match(o);if(A&&A[1]){const l=A[1].split(",");return r=Array.isArray(r)?r:[r],l.forEach((d,w)=>{q(s,d.trim(),r[w])}),!0}}}function lt(n,r,s){const o=/^\{(.+)\}$/;if(o.test(n)){const A=n.match(o);if(A&&A[1]){const l=A[1].split(",");return r=W(r)?r:{},l.forEach(d=>{q(s,d.trim(),r[d.trim()])}),!0}}}function ft({defaultValueRef:n,getSchema:r,formModel:s,getProps:o}){function A(c){var F,D;if(!W(c))return{};const p={};for(const B of Object.entries(c)){let[,h]=B;const[u]=B;if(!u||Q(h)&&h.length===0||le(h))continue;const E=t(o).transformDateFunc;W(h)&&(h=E==null?void 0:E(h)),Q(h)&&((F=h[0])!=null&&F.format)&&((D=h[1])!=null&&D.format)&&(h=h.map(y=>E==null?void 0:E(y))),ce(h)&&(h=h.trim()),!ct(u,h,p)&&!lt(u,h,p)&&q(p,u,h)}return l(p)}function l(c){const p=t(o).fieldMapToTime;if(!p||!Array.isArray(p))return c;for(const[F,[D,B],h="YYYY-MM-DD"]of p){if(!F||!D||!B)continue;if(!ye(c,F)){Oe(c,F);continue}const[u,E]=ye(c,F),[y,b]=Array.isArray(h)?h:[h,h];!Z(u)&&!xe(u)&&q(c,D,d(u,y)),!Z(E)&&!xe(E)&&q(c,B,d(E,b)),Oe(c,F)}return c}function d(c,p){return p==="timestamp"?K(c).unix():p==="timestampStartDay"?K(c).startOf("day").unix():K(c).format(p)}function w(){const c=t(r),p={};c.forEach(F=>{const{defaultValue:D,defaultValueObj:B}=F,h=Object.keys(B||{});h.length&&h.map(u=>{p[u]=B[u],s[u]===void 0&&(s[u]=B[u])}),Z(D)||(p[F.field]=D,s[F.field]===void 0&&(s[F.field]=D))}),n.value=G(p)}return{handleFormValues:A,initDefault:w}}const Y=24;function ut({advanceState:n,emit:r,getProps:s,getSchema:o,formModel:A,defaultValueRef:l}){const d=ke(),{realWidthRef:w,screenEnum:c,screenRef:p}=et(),F=X(()=>{if(!n.isAdvanced)return 0;const y=t(s).emptySpan||0;if(nt(y))return y;if(W(y)){const{span:b=0}=y,j=t(p);return y[j.toLowerCase()]||b||0}return 0}),D=_e(u,30);M([()=>t(o),()=>n.isAdvanced,()=>t(w)],()=>{const{showAdvancedButton:y}=t(s);y&&D()},{immediate:!0});function B(y,b=0,j=!1){const P=t(w),k=parseInt(y.md)||parseInt(y.xs)||parseInt(y.sm)||y.span||Y,$=parseInt(y.lg)||k,N=parseInt(y.xl)||$,S=parseInt(y.xxl)||N;return P<=c.LG?b+=k:P<c.XL?b+=$:P<c.XXL?b+=N:b+=S,j?(n.hideAdvanceBtn=!1,b<=Y*2?(n.hideAdvanceBtn=!0,n.isAdvanced=!0):b>Y*2&&b<=Y*(t(s).autoAdvancedLine||3)?n.hideAdvanceBtn=!1:n.isLoad||(n.isLoad=!0,n.isAdvanced=!n.isAdvanced),{isAdvanced:n.isAdvanced,itemColSum:b}):b>Y*(t(s).alwaysShowLines||1)?{isAdvanced:n.isAdvanced,itemColSum:b}:{isAdvanced:!0,itemColSum:b}}const h=Ce({});function u(){var P;let y=0,b=0;const{baseColProps:j={}}=t(s);for(const k of t(o)){const{show:$,colProps:N}=k;let S=!0;if(st($)&&(S=$),le($)&&(S=$({schema:k,model:A,field:k.field,values:L(L({},t(l)),A)})),S&&(N||j)){const{itemColSum:U,isAdvanced:z}=B(L(L({},j),N),y);y=U||0,z&&(b=y),h[k.field]=z}}(P=d==null?void 0:d.proxy)==null||P.$forceUpdate(),n.actionSpan=b%Y+t(F),B(t(s).actionColOptions||{span:Y},y,!0),r("advanced-change")}function E(){n.isAdvanced=!n.isAdvanced}return{handleToggleAdvanced:E,fieldsIsAdvancedMap:h}}function dt(n,r={}){const s=/^\[(.+)\]$/;if(s.test(n)){const o=n.match(s);if(o&&o[1]){const A=o[1].split(",");if(!A.length)return;const l=[];return A.forEach((d,w)=>{q(l,w,r[d.trim()])}),l.filter(Boolean).length?l:void 0}}}function pt(n,r={}){const s=/^\{(.+)\}$/;if(s.test(n)){const o=n.match(s);if(o&&o[1]){const A=o[1].split(",");if(!A.length)return;const l={};return A.forEach(d=>{q(l,d.trim(),r[d.trim()])}),Object.values(l).filter(Boolean).length?l:void 0}}}function ht({emit:n,getProps:r,formModel:s,getSchema:o,defaultValueRef:A,formElRef:l,schemaRef:d,handleFormValues:w}){function c(){return x(this,null,function*(){const{resetFunc:e,submitOnReset:a}=t(r);e&&le(e)&&(yield e()),t(l)&&(Object.keys(s).forEach(i=>{const g=t(o).find(I=>I.field===i),m=g==null?void 0:g.defaultValueObj,O=Object.keys(m||{});O.length&&O.map(I=>{s[I]=m[I]}),s[i]=mt(g,A,i)}),Ae(()=>N()),n("reset",we(s)),a&&U())})}const p=()=>t(o).map(e=>[...e.fields||[],e.field]).flat(1).filter(Boolean);function F(e){return x(this,null,function*(){if(Object.keys(e).length===0)return;const a=p(),v=".",i=a.filter(m=>String(m).indexOf(v)>=0),g=[];a.forEach(m=>{const O=t(o).find(T=>T.field===m);let I=ye(e,m);const fe=Reflect.has(e,m);I=Qe(O==null?void 0:O.component,I);const{componentProps:ee}=O||{};let R=ee;typeof ee=="function"&&(R=R({formModel:t(s),formActionType:z}));const te=dt(m,e)||pt(m,e);if(fe||te){const T=te||I;if(j(m))if(Array.isArray(T)){const H=[];for(const f of T)H.push(f?K(f):null);t(s)[m]=H}else t(s)[m]=T?R!=null&&R.valueFormat?T:K(T):null;else t(s)[m]=T;R!=null&&R.onChange&&(R==null||R.onChange(T)),g.push(m)}else i.forEach(T=>{try{const H=T.split(".").reduce((f,_)=>f[_],e);Ee(H)&&(t(s)[T]=t(H),g.push(T))}catch(H){Ee(A.value[T])&&(t(s)[T]=G(t(A.value[T])))}})}),P(g).catch(m=>{})})}function D(e){return x(this,null,function*(){const a=G(t(o));if(!e)return;let v=ce(e)?[e]:e;ce(e)&&(v=[e]);for(const i of v)B(i,a);d.value=a})}function B(e,a){if(ce(e)){const v=a.findIndex(i=>i.field===e);v!==-1&&(delete s[e],a.splice(v,1))}}function h(e,a,v=!1){return x(this,null,function*(){const i=G(t(o)),g=Array.isArray(e)?e.map(I=>I.field):[e.field];if(i.find(I=>g.includes(I.field))){me("There are schemas that have already been added");return}const m=i.findIndex(I=>I.field===a),O=W(e)?[e]:e;!a||m===-1||v?v?i.unshift(...O):i.push(...O):m!==-1&&i.splice(m+1,0,...O),d.value=i,y(e)})}function u(e){return x(this,null,function*(){let a=[];if(W(e)&&a.push(e),Q(e)&&(a=[...e]),!a.every(i=>re(i.component)||Reflect.has(i,"field")&&i.field)){me("All children of the form Schema array that need to be updated must contain the `field` field");return}d.value=a})}function E(e){return x(this,null,function*(){let a=[];if(W(e)&&a.push(e),Q(e)&&(a=[...e]),!a.every(m=>re(m.component)||Reflect.has(m,"field")&&m.field)){me("All children of the form Schema array that need to be updated must contain the `field` field");return}const i=[],g=[];t(o).forEach(m=>{const O=a.find(I=>m.field===I.field);if(O){const I=Le(m,O);g.push(I),i.push(I)}else i.push(m)}),y(g),d.value=at(i,"field")})}function y(e){let a=[];W(e)&&a.push(e),Q(e)&&(a=[...e]);const v={},i=b();a.forEach(g=>{!re(g.component)&&Reflect.has(g,"field")&&g.field&&!Z(g.defaultValue)&&(!(g.field in i)||Z(i[g.field]))&&(v[g.field]=g.defaultValue)}),F(v)}function b(){return t(l)?w(we(t(s))):{}}function j(e){return t(o).some(a=>a.field===e&&a.component?je.includes(a.component):!1)}function P(e){return x(this,null,function*(){var v;const a=yield(v=t(l))==null?void 0:v.validateFields(e);return w(a)})}function k(e){return x(this,null,function*(){var a;yield(a=t(l))==null?void 0:a.setProps(e)})}function $(e){return x(this,null,function*(){var i;let a;e===void 0?a=p():a=e===Array.isArray(e)?e:void 0;const v=yield(i=t(l))==null?void 0:i.validate(a);return w(v)})}function N(e){return x(this,null,function*(){var a;yield(a=t(l))==null?void 0:a.clearValidate(e)})}function S(e,a){return x(this,null,function*(){var v;yield(v=t(l))==null?void 0:v.scrollToField(e,a)})}function U(e){return x(this,null,function*(){e&&e.preventDefault();const{submitFunc:a}=t(r);if(a&&le(a)){yield a();return}if(t(l))try{const i=yield $();n("submit",i)}catch(i){if((i==null?void 0:i.outOfDate)===!1&&(i!=null&&i.errorFields))return;throw new Error(i)}})}const z={getFieldsValue:b,setFieldsValue:F,resetFields:c,updateSchema:E,resetSchema:u,setProps:k,removeSchemaByField:D,appendSchemaByField:h,clearValidate:N,validateFields:P,validate:$,submit:U,scrollToField:S};return{handleSubmit:U,clearValidate:N,validate:$,validateFields:P,getFieldsValue:b,updateSchema:E,resetSchema:u,appendSchemaByField:h,removeSchemaByField:D,resetFields:c,setFieldsValue:F,scrollToField:S}}function mt(n,r,s){let o=G(r.value[s]);return At(n)?o||void 0:(!o&&n&&yt(n)&&(o=[0,0]),!o&&n&&n.component==="ApiTree"&&(o=[]),o)}function yt(n){if(n.component==="Slider"&&n.componentProps&&"range"in n.componentProps)return!0}function At(n){return(n==null?void 0:n.component)&&Ze.includes(n.component)}function vt(A){return x(this,arguments,function*({getSchema:n,getProps:r,formElRef:s,isInitedDefault:o}){Ke(()=>x(this,null,function*(){if(t(o)||!t(r).autoFocusFirstItem)return;yield Ae();const l=t(n),d=t(s),w=d==null?void 0:d.$el;if(!d||!w||!l||l.length===0)return;const c=l[0];if(!c.component||!c.component.includes("Input"))return;const p=w.querySelector(".ant-row:first-child input");p&&(p==null||p.focus())}))})}const Dt=Ue({name:"BasicForm",__name:"BasicForm",props:ze,emits:["advanced-change","reset","submit","register","field-value-change"],setup(n,{expose:r,emit:s}){const o=n,A=He(),l=Ie({}),d=rt(),w=Ie({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),c=J({}),p=J(!1),F=J(),D=J(null),B=J(null),{prefixCls:h}=tt("basic-form"),u=X(()=>L(L({},o),t(F))),E=X(()=>[h,{[`${h}--compact`]:t(u).compact}]),y=X(()=>{const{baseRowStyle:f={},rowProps:_}=t(u);return L({style:f},_)}),b=X(()=>L(L(L({},A),o),t(u))),j=X(()=>{var _;const f=t(D)||t(u).schemas;for(const V of f){const{defaultValue:C,component:ne,componentProps:se={},isHandleDateDefaultValue:Pe=!0}=V;if(Pe&&C&&ne&&je.includes(ne)){const $e={schema:V,tableAction:(_=o.tableAction)!=null?_:{},formModel:l,formActionType:{}},ae=se?typeof se=="function"?se($e).valueFormat:se.valueFormat:null;if(!Array.isArray(C))V.defaultValue=ae?K(C).format(ae):K(C);else{const ve=[];C.forEach(ge=>{ve.push(ae?K(ge).format(ae):K(ge))}),V.defaultValue=ve}}}return t(u).showAdvancedButton?G(f.filter(V=>!re(V.component))):G(f)}),{handleToggleAdvanced:P,fieldsIsAdvancedMap:k}=ut({advanceState:w,emit:s,getProps:u,getSchema:j,formModel:l,defaultValueRef:c}),{handleFormValues:$,initDefault:N}=ft({getProps:u,defaultValueRef:c,getSchema:j,formModel:l});vt({getSchema:j,getProps:u,isInitedDefault:p,formElRef:B});const{handleSubmit:S,setFieldsValue:U,clearValidate:z,validate:e,validateFields:a,getFieldsValue:v,updateSchema:i,resetSchema:g,appendSchemaByField:m,removeSchemaByField:O,resetFields:I,scrollToField:fe}=ht({emit:s,getProps:u,formModel:l,getSchema:j,defaultValueRef:c,formElRef:B,schemaRef:D,handleFormValues:$});Je({resetAction:I,submitAction:S}),M(()=>t(u).model,()=>{const{model:f}=t(u);f&&U(f)},{immediate:!0}),M(()=>o.schemas,f=>{g(f!=null?f:[])}),M(()=>j.value,f=>{Ae(()=>{var _;(_=d==null?void 0:d.redoModalHeight)==null||_.call(d)}),!t(p)&&f!=null&&f.length&&(N(),p.value=!0)}),M(()=>l,_e(()=>{t(u).submitOnChange&&S()},300),{deep:!0});function ee(f){return x(this,null,function*(){F.value=Le(t(F)||{},f)})}function R(f,_,V){l[f]=_,s("field-value-change",f,_),V&&V.itemProps&&!V.itemProps.autoLink&&a([f]).catch(C=>{})}function te(f){const{autoSubmitOnEnter:_}=t(u);if(_&&f.key==="Enter"&&f.target&&f.target instanceof HTMLElement){const V=f.target;V&&V.tagName&&V.tagName.toUpperCase()=="INPUT"&&S()}}const T={getFieldsValue:v,setFieldsValue:U,resetFields:I,updateSchema:i,resetSchema:g,setProps:ee,removeSchemaByField:O,appendSchemaByField:m,clearValidate:z,validateFields:a,validate:e,submit:S,scrollToField:fe},H=X(()=>L(L({},u.value),w));return r(L({},T)),We(()=>{N(),s("register",T)}),(f,_)=>(ue(),Ve(t(it),De(b.value,{class:E.value,ref_key:"formElRef",ref:B,model:l,onKeypress:qe(te,["enter"])}),{default:oe(()=>[Te(t(ot),pe(he(y.value)),{default:oe(()=>[ie(f.$slots,"formHeader"),(ue(!0),Ye(Xe,null,de(j.value,V=>(ue(),Ve(Ge,{key:V.field,isAdvanced:t(k)[V.field],tableAction:f.tableAction,formActionType:T,schema:V,formProps:u.value,allDefaultValues:c.value,formModel:l,setFormModel:R},Be({_:2},[de(Object.keys(f.$slots),C=>({name:C,fn:oe(ne=>[ie(f.$slots,C,pe(he(ne||{})))])}))]),1032,["isAdvanced","tableAction","schema","formProps","allDefaultValues","formModel"]))),128)),Te(Me,De(H.value,{onToggleAdvanced:t(P)}),Be({_:2},[de(["resetBefore","submitBefore","advanceBefore","advanceAfter"],V=>({name:V,fn:oe(C=>[ie(f.$slots,V,pe(he(C||{})))])}))]),1040,["onToggleAdvanced"]),ie(f.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"]))}});export{Dt as _};
