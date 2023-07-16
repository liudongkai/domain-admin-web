import{i as Y,E as M}from"./event-enums.6c6f25e7.js";import{S as N,u as z}from"./SelectGroup.b4f17d29.js";import{_ as v,R as $,d as L,r as W}from"./index.30e20f9b.js";import{ah as s,ar as P,Q as G,o as u,c as g,V as o,P as n,a as c,T as C,O as y,S as D,U as f,F as E,L as K,ax as j,ay as Q,a9 as X}from"./vendor-vue.9e61e0af.js";import{E as q,A as J,a as Z,b as ee,C as te}from"./ConditionFilterGroup.584dbd60.js";import{C as oe}from"./ConnectStatus.8587444c.js";import{F as le}from"./vendor-lib.cb4f08bf.js";import{a as ie}from"./element-plus.c20bc0dd.js";import"./element-icon.1ce1c350.js";const ne={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!0,trigger:"blur",validator:(l,e,t)=>{if(!e)return t();if(Y(e))t();else return t(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},ae={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:N},data(){return{loading:!1,form:{domain:"",alias:"",port:443,group_id:"",is_dynamic_host:!1,start_time:"",expire_time:"",auto_update:!0},rules:ne}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let l={id:this.row.id},t=(await this.$http.getDomainById(l)).data;this.form.domain=t.domain,this.form.alias=t.alias,this.form.group_id=t.group_id,this.form.port=t.port,this.form.is_dynamic_host=t.is_dynamic_host,this.form.start_time=t.start_time,this.form.expire_time=t.expire_time,this.form.auto_update=t.auto_update,this.form.group_id==0&&(this.form.group_id="")}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(l=>{if(console.log(l),l)this.confirmSubmit();else return!1})},async confirmSubmit(){let l=this.$loading({fullscreen:!0}),e={domain:this.form.domain.trim(),alias:this.form.alias.trim(),group_id:this.form.group_id,port:this.form.port,is_dynamic_host:this.form.is_dynamic_host,start_time:this.form.start_time,expire_time:this.form.expire_time,auto_update:this.form.auto_update},t=null;this.row?(e.id=this.row.id,t=await this.$http.updateDomainById(e)):t=await this.$http.addDomain(e),t.ok&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),this.$nextTick(()=>{l.close()})}},created(){this.getData()}},se={class:"flex"},re={class:"flex justify-between w-full"},de=c("span",null," - ",-1),me={class:"grid grid-cols-2"},ce={class:"text-center"};function ue(l,e,t,_,i,a){const m=s("el-input"),d=s("el-form-item"),p=s("el-date-picker"),x=s("el-switch"),b=s("Warning"),S=s("el-icon"),V=s("el-link"),k=s("el-tooltip"),O=s("SelectGroup"),U=s("el-form"),I=s("el-button"),F=P("loading");return G((u(),g("div",null,[o(U,{ref:"form",model:i.form,rules:i.rules,"label-width":"70px"},{default:n(()=>[c("div",se,[o(d,{label:"\u57DF\u540D",prop:"domain",class:"flex-1"},{default:n(()=>[o(m,{type:"text",modelValue:i.form.domain,"onUpdate:modelValue":e[0]||(e[0]=h=>i.form.domain=h),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),o(d,{label:"\u7AEF\u53E3",prop:"port",style:{width:"140px"}},{default:n(()=>[o(m,{type:"text",modelValue:i.form.port,"onUpdate:modelValue":e[1]||(e[1]=h=>i.form.port=h),placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3"},null,8,["modelValue"])]),_:1})]),o(d,{label:"\u8BC1\u4E66\u65F6\u95F4",prop:"start_time"},{default:n(()=>[c("div",re,[o(p,{modelValue:i.form.start_time,"onUpdate:modelValue":e[2]||(e[2]=h=>i.form.start_time=h),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",disabled:i.form.auto_update,style:{width:"180px"}},null,8,["modelValue","disabled"]),de,o(p,{modelValue:i.form.expire_time,"onUpdate:modelValue":e[3]||(e[3]=h=>i.form.expire_time=h),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",disabled:i.form.auto_update,style:{width:"180px"}},null,8,["modelValue","disabled"])])]),_:1}),c("div",me,[o(d,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"is_dynamic_host"},{default:n(()=>[o(x,{modelValue:i.form.auto_update,"onUpdate:modelValue":e[4]||(e[4]=h=>i.form.auto_update=h)},null,8,["modelValue"]),o(k,{effect:"dark",content:"\u5982\u9700\u624B\u52A8\u8BBE\u7F6E\u8BC1\u4E66\u65F6\u95F4\uFF0C\u9700\u5173\u95ED\u81EA\u52A8\u66F4\u65B0",placement:"top-start","show-after":500},{default:n(()=>[o(V,{underline:!1},{default:n(()=>[o(S,{class:"ml-sm"},{default:n(()=>[o(b)]),_:1})]),_:1})]),_:1})]),_:1}),o(d,{label:"\u52A8\u6001\u4E3B\u673A",prop:"is_dynamic_host"},{default:n(()=>[o(x,{modelValue:i.form.is_dynamic_host,"onUpdate:modelValue":e[5]||(e[5]=h=>i.form.is_dynamic_host=h)},null,8,["modelValue"]),o(k,{effect:"dark",content:"\u6BCF\u6B21\u81EA\u52A8\u66F4\u65B0\u5C06\u91CD\u7F6E\u4E3B\u673A\u5217\u8868",placement:"top-start","show-after":500},{default:n(()=>[o(V,{underline:!1},{default:n(()=>[o(S,{class:"ml-sm"},{default:n(()=>[o(b)]),_:1})]),_:1})]),_:1})]),_:1})]),o(d,{label:"\u5206\u7EC4",prop:"group_id"},{default:n(()=>[o(O,{class:"w-[150px]",modelValue:i.form.group_id,"onUpdate:modelValue":e[6]||(e[6]=h=>i.form.group_id=h),clearable:""},null,8,["modelValue"])]),_:1}),o(d,{label:"\u5907\u6CE8",prop:"alias"},{default:n(()=>[o(m,{type:"textarea",modelValue:i.form.alias,"onUpdate:modelValue":e[7]||(e[7]=h=>i.form.alias=h),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),c("div",ce,[o(I,{onClick:a.handleCancel},{default:n(()=>[C("\u53D6 \u6D88")]),_:1},8,["onClick"]),o(I,{type:"primary",onClick:a.handleSubmit},{default:n(()=>[C("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[F,i.loading]])}const pe=v(ae,[["render",ue]]),_e={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:pe},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(l){this.$emit("update:visible",l)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function he(l,e,t,_,i,a){const m=s("DataForm"),d=s("el-dialog");return u(),y(d,{title:a.dialogTitle,modelValue:a.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>a.dialogVisible=p),width:"500px",center:"","append-to-body":"","lock-scroll":!1},{default:n(()=>[a.dialogVisible?(u(),y(m,{key:0,row:t.row,onOnCancel:a.handleClose,onOnSuccess:a.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):D("",!0)]),_:1},8,["title","modelValue"])}const H=v(_e,[["render",he]]),fe={name:"",props:{row:{type:Object,default:null}},components:{ExpireDays:q,AddressList:J},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",group_name:"",real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",address_count:0,group:null},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let l={id:this.row.id};const e=await this.$http.getDomainById(l);if(!e.ok)return;let t=e.data;this.form.domain=t.domain,this.form.domain_url=t.domain_url,this.form.ip=t.ip,this.form.start_time=t.start_time,this.form.expire_time=t.expire_time,this.form.check_time=t.check_time,this.form.connect_status=t.connect_status,this.form.total_days=t.total_days,this.form.expire_days=t.expire_days,this.form.real_time_expire_days=t.real_time_expire_days,this.form.create_time=t.create_time,this.form.update_time_label=t.update_time_label,this.form.domain_auto_update=t.domain_auto_update,this.form.domain_auto_update_label=t.domain_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=t.domain_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=t.domain_check_time_label,this.form.port=t.port,this.form.alias=t.alias,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.real_time_domain_expire_days=t.real_time_domain_expire_days,this.form.address_count=t.address_count,this.form.group=t.group,this.form.group_name=t.group_name}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let l=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_id:this.row.id};(await this.$http.updateDomainCertInfoById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),l.close()},async getIpInfo(){let l={ip:this.form.ip};const e=await this.$http.getIpInfo(l);e.code==0&&(this.ipInfo=e.data)}},created(){this.getData()}},ge={class:"domain-detail"},we={class:"mo-form-detail grid grid-cols-2"},be={key:0},ye={key:1},De={class:"flex justify-between flex-1"},Ce={class:"truncate"},xe={class:"mo-form-detail mt-[20px]"},ke={class:"truncate"},ve={class:"text-center mt-md"};function Se(l,e,t,_,i,a){const m=s("el-link"),d=s("el-form-item"),p=s("el-form"),x=s("ExpireDays"),b=s("Refresh"),S=s("el-icon"),V=s("el-button");return u(),g("div",ge,[c("div",we,[o(p,{"label-width":"130px"},{default:n(()=>[o(d,{label:"\u57DF\u540D",prop:"domain"},{default:n(()=>[o(m,{underline:!1,href:i.form.domain_url,target:"_blank"},{default:n(()=>[C(f(i.form.domain),1)]),_:1},8,["href"])]),_:1}),o(d,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"create_time"},{default:n(()=>[c("span",null,f(i.form.start_time||"-"),1)]),_:1}),o(d,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"create_time"},{default:n(()=>[c("span",null,f(i.form.expire_time||"-"),1)]),_:1}),o(d,{label:"\u5206\u7EC4",prop:"create_time"},{default:n(()=>[i.form.group_name?(u(),g("span",be,f(i.form.group_name||"-"),1)):(u(),g("span",ye,"-"))]),_:1})]),_:1}),o(p,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:n(()=>[o(d,{label:"\u7AEF\u53E3\u53F7",prop:"domain"},{default:n(()=>[c("span",null,f(i.form.port||"-"),1)]),_:1}),o(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:n(()=>[o(x,{value:i.form.real_time_expire_days},null,8,["value"])]),_:1}),o(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:n(()=>[c("div",De,[c("span",Ce,f(i.form.update_time_label||"-"),1),o(m,{underline:!1,type:"primary",class:"mr-sm",onClick:a.handleUpdateRowDomainInfo},{default:n(()=>[o(S,null,{default:n(()=>[o(b)]),_:1})]),_:1},8,["onClick"])])]),_:1}),o(d,{label:"\u4E3B\u673A\u6570\u91CF",prop:"create_time"},{default:n(()=>[c("span",null,f(i.form.address_count||"-"),1)]),_:1})]),_:1})]),c("div",xe,[o(p,{"label-width":"130px"},{default:n(()=>[o(d,{label:"\u5907\u6CE8",prop:"isp"},{default:n(()=>[c("span",ke,f(i.form.alias||"-"),1)]),_:1})]),_:1})]),c("div",ve,[o(V,{type:"primary",onClick:a.handleCancel},{default:n(()=>[C("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const Ve=v(fe,[["render",Se]]),Re={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Ve},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(l){this.$emit("update:visible",l)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function Ie(l,e,t,_,i,a){const m=s("DataForm"),d=s("el-dialog");return u(),y(d,{title:"\u8BC1\u4E66\u8BE6\u60C5",modelValue:a.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>a.dialogVisible=p),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:a.handleDialogClose},{default:n(()=>[a.dialogVisible?(u(),y(m,{key:0,row:t.row,onOnCancel:a.handleClose,onOnSuccess:a.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):D("",!0)]),_:1},8,["modelValue","onClose"])}const Oe=v(Re,[["render",Ie]]),Ue={name:"",components:{DataFormDialog:H,DataDetailDialog:Oe,ConnectStatus:oe,ExpireDays:q,ExpireProgress:Z,AddressListgDialog:ee},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{role:{type:Number}},computed:{},data(){return{RoleEnum:$,currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(l){this.currentRow=l,this.dialogVisible=!0},async handleDeleteClick(l){let e={id:l.id};const t=await this.$http.deleteDomainById(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleStatusChange(l){let e={id:l.id};const t=await this.$Http.function(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleMonitorStatusChange(l,e){let t={domain_id:l.id,is_monitor:e};const _=await this.$http.updateDomainExpireMonitorById(t);_.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(_.msg)},async handleUpdateRowDomainInfo(l){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),t={id:l.id};(await this.$http.updateDomainRowInfoById(t)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),e.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(l){this.currentRow=l,this.dialogDetailVisible=!0},handleShowAddressListgDialog(l){this.currentRow=l,this.AddressListgDialogVisible=!0},async handleAutoUpdateStatusChange(l,e){let t={domain_id:l.id,field:"auto_update",value:e};const _=await this.$http.updateDomainFieldById(t);_.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(_.msg)},handleRefreshRow(l){this.$emit("on-refresh-row",l)},handleSelectable(l,e){return l.has_edit_permission}},created(){}},Fe={class:"inline-flex items-center"},Ee=c("span",{class:"mr-[2px]"},"\u57DF\u540D",-1),Te={key:0},Be={key:0,class:"color--danger"},Ae={key:2},ze={class:"inline-flex items-center"},$e=c("span",{class:"mr-[2px]"},"\u8BC1\u4E66\u5929\u6570",-1);function Pe(l,e,t,_,i,a){const m=s("el-table-column"),d=s("Warning"),p=s("el-icon"),x=s("el-tooltip"),b=s("el-link"),S=s("ConnectStatus"),V=s("ExpireProgress"),k=s("el-switch"),O=s("Refresh"),U=s("Edit"),I=s("Delete"),F=s("el-popconfirm"),h=s("el-table"),T=s("DataFormDialog"),B=s("DataDetailDialog"),A=s("AddressListgDialog");return u(),g("div",null,[o(h,K({stripe:"",border:""},l.$attrs,{onSortChange:e[0]||(e[0]=r=>l.$emit("sort-change",r)),onSelectionChange:e[1]||(e[1]=r=>l.$emit("selection-change",r))}),{default:n(()=>[i.RoleEnum.Admin!=t.role?(u(),y(m,{key:0,type:"selection","header-align":"center",align:"center",width:"40",selectable:a.handleSelectable},null,8,["selectable"])):D("",!0),o(m,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"230","show-overflow-tooltip":"",prop:"domain"},{header:n(()=>[o(x,{effect:"dark",content:"\u9ED8\u8BA4\u7AEF\u53E3\uFF1A443",placement:"top-start","show-after":800},{default:n(()=>[c("div",Fe,[Ee,o(p,null,{default:n(()=>[o(d)]),_:1})])]),_:1})]),default:n(r=>[o(b,{underline:!1,onClick:w=>a.handleShowDetail(r.row)},{default:n(()=>[c("span",null,f(r.row.domain),1),r.row.port!="443"?(u(),g("span",Te,":"+f(r.row.port),1)):D("",!0)]),_:2},1032,["onClick"])]),_:1}),o(m,{label:"\u4E3B\u673A\u6570\u91CF","header-align":"center",align:"center",width:"80",prop:"address_count"},{default:n(r=>[r.row.is_dynamic_host?(u(),g("span",Be,"*")):D("",!0),r.row.address_count&&r.row.address_count>0?(u(),y(b,{key:1,underline:!1,onClick:w=>a.handleShowAddressListgDialog(r.row)},{default:n(()=>[C(f(r.row.address_count),1)]),_:2},1032,["onClick"])):(u(),g("span",Ae,"-"))]),_:1}),o(m,{label:"\u72B6\u6001","header-align":"center",align:"center",width:"60",sortable:"custom",prop:"expire_status"},{default:n(r=>[o(S,{value:r.row.expire_status,onOnClick:w=>a.handleShowAddressListgDialog(r.row)},null,8,["value","onOnClick"])]),_:1}),o(m,{label:"\u8BC1\u4E66\u5929\u6570","header-align":"center",align:"center",width:"110",sortable:"custom",prop:"expire_days"},{header:n(()=>[o(x,{effect:"dark",content:"\u5982\u6709\u591A\u4E2A\u4E3B\u673AIP\u5730\u5740\uFF0C\u6B64\u5904\u4EC5\u663E\u793A\u5230\u671F\u65F6\u95F4\u6700\u77ED\u7684\u8BC1\u4E66",placement:"top-start","show-after":800},{default:n(()=>[c("div",ze,[$e,o(p,null,{default:n(()=>[o(d)]),_:1})])]),_:1})]),default:n(r=>[o(V,{startTime:r.row.start_time,endTime:r.row.expire_time},null,8,["startTime","endTime"])]),_:1}),o(m,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:n(r=>[c("span",null,f(r.row.group_name||"-"),1)]),_:1}),o(m,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"check_time","show-overflow-tooltip":""},{default:n(r=>[c("span",null,f(r.row.alias||"-"),1)]),_:1}),o(m,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"110",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:n(r=>[c("span",null,f(r.row.update_time_label||"-"),1)]),_:1}),i.RoleEnum.Admin!=t.role?(u(),g(E,{key:1},[o(m,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"auto_update"},{default:n(r=>[o(k,{disabled:!r.row.has_edit_permission,modelValue:r.row.auto_update,"onUpdate:modelValue":w=>r.row.auto_update=w,onChange:w=>a.handleAutoUpdateStatusChange(r.row,w)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])]),_:1}),o(m,{label:"\u5230\u671F\u63D0\u9192",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"is_monitor"},{default:n(r=>[o(k,{disabled:!r.row.has_edit_permission,modelValue:r.row.is_monitor,"onUpdate:modelValue":w=>r.row.is_monitor=w,onChange:w=>a.handleMonitorStatusChange(r.row,w)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])]),_:1})],64)):D("",!0),o(m,{label:"\u64CD\u4F5C",width:"100","header-align":"center",align:"center"},{default:n(r=>[o(b,{underline:!1,type:"primary",class:"mr-sm",onClick:w=>a.handleUpdateRowDomainInfo(r.row)},{default:n(()=>[o(p,null,{default:n(()=>[o(O)]),_:1})]),_:2},1032,["onClick"]),i.RoleEnum.Admin!=t.role?(u(),g(E,{key:0},[o(b,{underline:!1,type:"primary",class:"mr-sm",disabled:!r.row.has_edit_permission,onClick:w=>a.handleEditRow(r.row)},{default:n(()=>[o(p,null,{default:n(()=>[o(U)]),_:1})]),_:2},1032,["disabled","onClick"]),o(F,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:w=>a.handleDeleteClick(r.row),disabled:!r.row.has_edit_permission},{reference:n(()=>[o(b,{underline:!1,type:"danger",disabled:!r.row.has_edit_permission},{default:n(()=>[o(p,null,{default:n(()=>[o(I)]),_:1})]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm","disabled"])],64)):D("",!0)]),_:1})]),_:1},16),o(T,{visible:i.dialogVisible,"onUpdate:visible":e[2]||(e[2]=r=>i.dialogVisible=r),row:i.currentRow,onOnSuccess:e[3]||(e[3]=r=>a.handleRefreshRow(i.currentRow))},null,8,["visible","row"]),o(B,{row:i.currentRow,visible:i.dialogDetailVisible,"onUpdate:visible":e[4]||(e[4]=r=>i.dialogDetailVisible=r),onOnSuccess:e[5]||(e[5]=r=>a.handleRefreshRow(i.currentRow))},null,8,["row","visible"]),i.currentRow?(u(),y(A,{key:0,role:t.role,domainId:i.currentRow.id,domainRow:i.currentRow,visible:i.AddressListgDialogVisible,"onUpdate:visible":e[6]||(e[6]=r=>i.AddressListgDialogVisible=r),onOnClose:e[7]||(e[7]=r=>a.handleRefreshRow(i.currentRow))},null,8,["role","domainId","domainRow","visible"])):D("",!0)])}const Ge=v(Ue,[["render",Pe]]),Le={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,await this.$http.updateAllDomainCertInfoOfUser()}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Ne(l,e,t,_,i,a){const m=s("Refresh"),d=s("el-icon"),p=s("el-link");return u(),y(p,{underline:!1,type:"primary",onClick:a.updateAllDomainCertInfoOfUser,disabled:a.disableUpdateButton},{default:n(()=>[o(d,null,{default:n(()=>[o(m)]),_:1}),C(f(a.updateText),1)]),_:1},8,["onClick","disabled"])}const je=v(Le,[["render",Ne]]),qe={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u8BC1\u4E66\u68C0\u67E5"}},methods:{async handleNotifyByEventId(){let l=this.$loading({lock:!0,text:"\u68C0\u67E5\u4E2D",fullscreen:!0});try{const e=await this.$http.handleNotifyByEventId({event_id:M.SSL_CERT_EXPIRE});e.ok&&this.$msg.success(`\u68C0\u67E5\u6E20\u9053\uFF1A${e.data.success}`)}catch(e){console.log(e)}finally{this.$nextTick(()=>{l.close()})}}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function He(l,e,t,_,i,a){const m=s("Position"),d=s("el-icon"),p=s("el-link");return u(),y(p,{underline:!1,type:"primary",onClick:a.handleNotifyByEventId,disabled:a.disableUpdateButton},{default:n(()=>[o(d,null,{default:n(()=>[o(m)]),_:1}),C(f(a.updateText),1)]),_:1},8,["onClick","disabled"])}const Ye=v(qe,[["render",He]]),Me={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:te},data(){return{loading:!0,options:[{title:"\u8BC1\u4E66\u72B6\u6001",maxCount:1,field:"expire_days",selected:[],options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!0,selected:[],options:[]}]}},computed:{...j(z,{groupOptions:"getGroupOptions"})},methods:{async resetData(){const l=await this.$http.getGroupList();l.ok&&this.options.forEach(e=>{e.field=="group_ids"&&(l.data.list&&l.data.list.length>0?(e.options=l.data.list.map(t=>{let _=t.name;return{...t,value:t.id,label:_}}),e.hidden=!1):e.hidden=!0)}),this.loading=!1},handleChange(l){this.$emit("on-change",this.options)}},created(){this.resetData()}},We={class:""};function Ke(l,e,t,_,i,a){const m=s("ConditionFilterGroup"),d=P("loading");return G((u(),g("div",We,[o(m,{options:i.options,onOnChange:a.handleChange},null,8,["options","onOnChange"])])),[[d,i.loading]])}const Qe=v(Me,[["render",Ke]]),Xe={name:"domain-list",props:{role:{type:Number,default:$.User}},components:{DataFormDialog:H,DataTable:Ge,SelectGroup:N,UpdateDomainInfo:je,CheckDomainInfo:Ye,ConditionFilter:Qe},data(){return{RoleEnum:$,dataApi:L,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:W(L.exportDomainToFile),order_type:"ascending",order_prop:"expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...j(z,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...Q(z,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let l={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop,role:this.role};for(let t of this.ConditionFilterParams)t.selected&&t.selected.length>0&&(t.maxCount==1?l[t.field]=t.selected[0]:l[t.field]=t.selected);const e=await this.$http.getDomainList(l);e.code==0?(this.list=e.data.list,this.total=e.data.total):this.$msg.error(e.msg),this.loading=!1},getGroupName(l){let e=this.groupOptions.find(t=>t.value==l);if(e)return e.name},async handleHttpRequest(l){let e=this.$loading({fullscreen:!0}),t=new FormData;t.append("file",l.file),(await this.$http.importDomainFromFile(t)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData(),this.$refs.ConditionFilter&&this.$refs.ConditionFilter.resetData(),this.updateGroupOptions()),e.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const l=await this.$http.exportDomainFile();l.ok&&le.saveAs(l.data.url,l.data.name)},handleSearch(){this.resetData()},handleSizeChange(l){localStorage.setItem(this.pageSizeCachekey,l),this.resetData()},loadPageSize(){let l=localStorage.getItem(this.pageSizeCachekey);l&&(this.size=parseInt(l))},handleExceed(l){this.$refs.upload.clearFiles();const e=l[0];e.uid=ie(),this.handleHttpRequest({file:e})},handleSortChange({column:l,prop:e,order:t}){console.log(l,e,t),this.order_prop="",this.order_type="",t&&(this.order_type=t,this.order_prop=e),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(l){this.selectedRows=l},handleConditionFilterChange(l){console.log(l),this.ConditionFilterParams=l,this.resetData()},async handleBatchDeleteConfirm(){let l=this.$loading({fullscreen:!0}),e={ids:this.selectedRows.map(t=>t.id)};try{const t=await this.$http.deleteDomainByIds(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(t.msg)}catch(t){console.log(t)}finally{this.$nextTick(()=>{l.close()})}},async handleRefreshRow(l){let e={id:l.id};const t=await this.$http.getDomainById(e);if(t.ok){let _=this.list.findIndex(i=>i.id==l.id);this.list.splice(_,1,t.data),console.log(this.list)}}},created(){this.keyword=this.$route.query.keyword||this.keyword,this.initData()}},Je={class:"app-container"},Ze={class:"flex",style:{"justify-content":"space-between"}},et={key:0},tt={key:0},ot={class:"flex mt-sm",style:{"align-items":"center"}},lt={style:{"font-size":"14px",color:"#333333"}},it={class:"flex",style:{"margin-left":"auto"}},nt=c("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function at(l,e,t,_,i,a){const m=s("Plus"),d=s("el-icon"),p=s("el-button"),x=s("Search"),b=s("el-input"),S=s("ConditionFilter"),V=s("Delete"),k=s("el-link"),O=s("el-popconfirm"),U=s("UpdateDomainInfo"),I=s("CheckDomainInfo"),F=s("Upload"),h=s("el-upload"),T=s("Download"),B=s("DataTable"),A=s("el-pagination"),r=s("DataFormDialog"),w=P("loading");return u(),g("div",Je,[c("div",Ze,[i.RoleEnum.Admin==t.role?(u(),g("span",et)):(u(),y(p,{key:1,type:"primary",onClick:a.handleAddRow},{default:n(()=>[o(d,null,{default:n(()=>[o(m)]),_:1}),C("\u6DFB\u52A0")]),_:1},8,["onClick"])),o(b,{class:"ml-sm",style:{width:"260px"},modelValue:i.keyword,"onUpdate:modelValue":e[0]||(e[0]=R=>i.keyword=R),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:X(a.handleSearch,["enter"]),onClear:a.handleSearch},{append:n(()=>[o(p,{onClick:a.handleSearch},{default:n(()=>[o(d,null,{default:n(()=>[o(x)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),i.RoleEnum.Admin==t.role?(u(),g("span",tt)):(u(),g(E,{key:1},[i.hasInitData?(u(),y(S,{key:0,class:"mt-md",ref:"ConditionFilter",onOnChange:a.handleConditionFilterChange},null,8,["onOnChange"])):D("",!0)],64)),c("div",ot,[c("div",lt,"\u5171\u8BA1 "+f(i.total)+" \u6761\u6570\u636E",1),c("div",it,[a.showBatchDeleteButton?(u(),y(O,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:a.handleBatchDeleteConfirm},{reference:n(()=>[o(k,{underline:!1,type:"danger",class:"mr-sm"},{default:n(()=>[o(d,null,{default:n(()=>[o(V)]),_:1}),C("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):D("",!0),o(U,{onOnSuccess:a.resetData},null,8,["onOnSuccess"]),i.RoleEnum.Admin!=t.role?(u(),g(E,{key:1},[o(I,{class:"ml-sm",onOnSuccess:a.resetData},null,8,["onOnSuccess"]),o(k,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:n(()=>[o(d,null,{default:n(()=>[o(F)]),_:1}),C("\u5BFC\u5165 "),o(h,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":a.handleExceed,"show-file-list":!1,"http-request":a.handleHttpRequest},{default:n(()=>[nt]),_:1},8,["on-exceed","http-request"])]),_:1}),o(k,{underline:!1,type:"primary",class:"ml-sm",onClick:a.handleExportToFile},{default:n(()=>[o(d,null,{default:n(()=>[o(T)]),_:1}),C("\u5BFC\u51FA")]),_:1},8,["onClick"])],64)):D("",!0)])]),G(o(B,{class:"mt-sm",role:t.role,data:i.list,onOnSuccess:a.resetData,onOnRefreshRow:a.handleRefreshRow,onSortChange:a.handleSortChange,onSelectionChange:a.handleSelectionChange},null,8,["role","data","onOnSuccess","onOnRefreshRow","onSortChange","onSelectionChange"]),[[w,i.loading]]),o(A,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:i.total,"page-size":i.size,"onUpdate:pageSize":e[1]||(e[1]=R=>i.size=R),"current-page":i.page,"onUpdate:currentPage":e[2]||(e[2]=R=>i.page=R),onCurrentChange:a.getData,onSizeChange:a.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),o(r,{visible:i.dialogVisible,"onUpdate:visible":e[3]||(e[3]=R=>i.dialogVisible=R),onOnSuccess:a.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const ft=v(Xe,[["render",at]]);export{ft as default};
