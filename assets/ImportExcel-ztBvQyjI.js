import{I as d}from"./index-_A1CMXrx.js";import{_}from"./BasicTable.vue_vue_type_script_setup_true_lang-WKE6md99.js";import"./TableImg.vue_vue_type_style_index_0_lang-df3EjlFe.js";import"./componentMap-4VnVNc9Q.js";import{P as x}from"./index-pAv9Uh1I.js";import{d as h,f as S,a8 as k,_ as a,a9 as l,aa as m,u as s,E,k as u,F as v,ab as D,$ as I}from"./vue-lybwVHEG.js";import"./entry/index-5BGenAPt-1706087471176.js";import"./antd-veAxK-b_.js";import"./index-8fAXhvXw.js";import"./useWindowSizeFn-KMBqFfDs.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-V86qKwDE.js";import"./FormItem.vue_vue_type_script_lang-cLVScLe_.js";import"./helper-pBU1FWBk.js";import"./BasicForm.vue_vue_type_style_index_0_lang-rH-Ti-Vr.js";import"./useForm-p0OrcF0H.js";import"./uuid-uJQj7518.js";import"./sortable.esm-F3p9rkNP.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-UGaKr6YP.js";import"./useFormItem-Y8aCfwEt.js";import"./onMountedOrActivated-C4XOXYty.js";import"./useSortable-5LH1rpMh.js";import"./download-zZghob-H.js";import"./base64Conver-UKE1Rgbp.js";import"./index-E_mvLG_R.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-EBdp4nfr.js";import"./copyTextToClipboard-2AOVSRlO.js";import"./index-XtaqexEI.js";import"./index-DeAdMtnc.js";import"./useContentViewHeight-aeCbGza1.js";const tt=h({__name:"ImportExcel",setup(Y){const o=S([]);function f(p){o.value=[];for(const i of p){const{header:e,results:t,meta:{sheetName:r}}=i,c=[];for(const n of e)c.push({title:n,dataIndex:n});o.value.push({title:r,dataSource:t,columns:c})}}return(p,i)=>{const e=k("a-button");return a(),l(s(x),{title:"excel数据导入示例"},{default:m(()=>[u(s(d),{onSuccess:f,dateFormat:"YYYY-MM-DD"},{default:m(()=>[u(e,{class:"m-3"},{default:m(()=>[E(" 导入Excel ")]),_:1})]),_:1}),(a(!0),I(v,null,D(o.value,(t,r)=>(a(),l(s(_),{key:r,title:t.title,columns:t.columns,dataSource:t.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}}});export{tt as default};
