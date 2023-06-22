import{i as H,E as W}from"./event-enums.6c6f25e7.js";import{S as G,u as A}from"./SelectGroup.cf921f1a.js";import{_ as C,d as P,r as K,g as M}from"./index.02397523.js";import{ah as s,ar as E,Q as z,o as p,c as y,V as o,P as i,a as m,T as w,O as D,S as R,U as f,L as Q,ax as L,aA as X,a9 as J}from"./vendor-vue.edbe275b.js";import{C as q}from"./ConnectStatus.e538837a.js";import{E as N,A as Y,a as Z,D as ee,b as te,C as oe}from"./ConditionFilterGroup.6289f83b.js";import{F as ne}from"./vendor-lib.4c56f242.js";import{a as ie}from"./element-plus.dcbfaaa8.js";import"./element-icon.ade3aa7e.js";const ae={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!0,trigger:"blur",validator:(t,e,n)=>{if(!e)return n();if(H(e))n();else return n(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},le={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:G},data(){return{loading:!1,form:{domain:"",alias:"",port:443,group_id:"",is_dynamic_host:!1},rules:ae}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let t={id:this.row.id},n=(await this.$http.getDomainById(t)).data;this.form.domain=n.domain,this.form.alias=n.alias,this.form.group_id=n.group_id,this.form.port=n.port,this.form.is_dynamic_host=n.is_dynamic_host,this.form.group_id==0&&(this.form.group_id="")}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(t=>{if(console.log(t),t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),e={domain:this.form.domain.trim(),alias:this.form.alias.trim(),group_id:this.form.group_id,port:this.form.port,is_dynamic_host:this.form.is_dynamic_host},n=null;this.row?(e.id=this.row.id,n=await this.$http.updateDomainById(e)):n=await this.$http.addDomain(e),n.ok&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),this.$nextTick(()=>{t.close()})}},created(){this.getData()}},se={class:"text-center"};function re(t,e,n,_,a,l){const c=s("el-input"),d=s("el-form-item"),h=s("el-switch"),b=s("Warning"),S=s("el-icon"),x=s("el-link"),v=s("el-tooltip"),k=s("SelectGroup"),O=s("el-form"),V=s("el-button"),U=E("loading");return z((p(),y("div",null,[o(O,{ref:"form",model:a.form,rules:a.rules,"label-width":"70px"},{default:i(()=>[o(d,{label:"\u57DF\u540D",prop:"domain"},{default:i(()=>[o(c,{type:"text",modelValue:a.form.domain,"onUpdate:modelValue":e[0]||(e[0]=g=>a.form.domain=g),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),o(d,{label:"\u7AEF\u53E3",prop:"port"},{default:i(()=>[o(c,{type:"text",modelValue:a.form.port,"onUpdate:modelValue":e[1]||(e[1]=g=>a.form.port=g),placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3"},null,8,["modelValue"])]),_:1}),o(d,{label:"\u52A8\u6001\u4E3B\u673A",prop:"is_dynamic_host"},{default:i(()=>[o(h,{modelValue:a.form.is_dynamic_host,"onUpdate:modelValue":e[2]||(e[2]=g=>a.form.is_dynamic_host=g)},null,8,["modelValue"]),o(v,{effect:"dark",content:"\u52A8\u6001\u4E3B\u673AIP\u5730\u5740\uFF1A\u6BCF\u6B21\u81EA\u52A8\u66F4\u65B0\u5C06\u4F1A\u91CD\u65B0\u83B7\u53D6\u4E3B\u673A\u5217\u8868",placement:"top-start","show-after":500},{default:i(()=>[o(x,{underline:!1},{default:i(()=>[o(S,{class:"ml-sm"},{default:i(()=>[o(b)]),_:1})]),_:1})]),_:1})]),_:1}),o(d,{label:"\u5206\u7EC4",prop:"group_id"},{default:i(()=>[o(k,{class:"w-[150px]",modelValue:a.form.group_id,"onUpdate:modelValue":e[3]||(e[3]=g=>a.form.group_id=g),clearable:""},null,8,["modelValue"])]),_:1}),o(d,{label:"\u5907\u6CE8",prop:"alias"},{default:i(()=>[o(c,{type:"textarea",modelValue:a.form.alias,"onUpdate:modelValue":e[4]||(e[4]=g=>a.form.alias=g),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),m("div",se,[o(V,{onClick:l.handleCancel},{default:i(()=>[w("\u53D6 \u6D88")]),_:1},8,["onClick"]),o(V,{type:"primary",onClick:l.handleSubmit},{default:i(()=>[w("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[U,a.loading]])}const de=C(le,[["render",re]]),ce={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:de},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function me(t,e,n,_,a,l){const c=s("DataForm"),d=s("el-dialog");return p(),D(d,{title:l.dialogTitle,modelValue:l.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=h=>l.dialogVisible=h),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:i(()=>[l.dialogVisible?(p(),D(c,{key:0,row:n.row,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):R("",!0)]),_:1},8,["title","modelValue"])}const j=C(ce,[["render",me]]),ue={name:"",props:{row:{type:Object,default:null}},components:{ConnectStatus:q,ExpireDays:N,AddressList:Y},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",address_count:0,group:null},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let t={id:this.row.id};const e=await this.$http.getDomainById(t);if(!e.ok)return;let n=e.data;this.form.domain=n.domain,this.form.domain_url=n.domain_url,this.form.ip=n.ip,this.form.start_time=n.start_time,this.form.expire_time=n.expire_time,this.form.check_time=n.check_time,this.form.connect_status=n.connect_status,this.form.total_days=n.total_days,this.form.expire_days=n.expire_days,this.form.real_time_expire_days=n.real_time_expire_days,this.form.create_time=n.create_time,this.form.update_time_label=n.update_time_label,this.form.domain_auto_update=n.domain_auto_update,this.form.domain_auto_update_label=n.domain_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=n.domain_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=n.domain_check_time_label,this.form.port=n.port,this.form.alias=n.alias,this.form.domain_start_time=n.domain_start_time,this.form.domain_expire_time=n.domain_expire_time,this.form.real_time_domain_expire_days=n.real_time_domain_expire_days,this.form.address_count=n.address_count,this.form.group=n.group}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let t=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_id:this.row.id};(await this.$http.updateDomainCertInfoById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),t.close()},async getIpInfo(){let t={ip:this.form.ip};const e=await this.$http.getIpInfo(t);e.code==0&&(this.ipInfo=e.data)}},created(){this.getData()}},pe={class:"domain-detail"},_e={class:"mo-form-detail grid grid-cols-2"},he={key:0},fe={key:1},ge={class:"flex justify-between flex-1"},we={class:"truncate"},be={class:"mo-form-detail mt-[20px]"},De={class:"truncate"},ye={class:"text-center mt-md"};function Ce(t,e,n,_,a,l){const c=s("el-link"),d=s("el-form-item"),h=s("el-form"),b=s("ExpireDays"),S=s("Refresh"),x=s("el-icon"),v=s("el-button");return p(),y("div",pe,[m("div",_e,[o(h,{"label-width":"130px"},{default:i(()=>[o(d,{label:"\u57DF\u540D",prop:"domain"},{default:i(()=>[o(c,{underline:!1,href:a.form.domain_url,target:"_blank"},{default:i(()=>[w(f(a.form.domain),1)]),_:1},8,["href"])]),_:1}),o(d,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"create_time"},{default:i(()=>[m("span",null,f(a.form.start_time||"-"),1)]),_:1}),o(d,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"create_time"},{default:i(()=>[m("span",null,f(a.form.expire_time||"-"),1)]),_:1}),o(d,{label:"\u5206\u7EC4",prop:"create_time"},{default:i(()=>[a.form.group?(p(),y("span",he,f(a.form.group.name||"-"),1)):(p(),y("span",fe,"-"))]),_:1})]),_:1}),o(h,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:i(()=>[o(d,{label:"\u7AEF\u53E3\u53F7",prop:"domain"},{default:i(()=>[m("span",null,f(a.form.port||"-"),1)]),_:1}),o(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:i(()=>[o(b,{value:a.form.real_time_expire_days},null,8,["value"])]),_:1}),o(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:i(()=>[m("div",ge,[m("span",we,f(a.form.update_time_label||"-"),1),o(c,{underline:!1,type:"primary",class:"mr-sm",onClick:l.handleUpdateRowDomainInfo},{default:i(()=>[o(x,null,{default:i(()=>[o(S)]),_:1})]),_:1},8,["onClick"])])]),_:1}),o(d,{label:"\u4E3B\u673A\u6570\u91CF",prop:"create_time"},{default:i(()=>[m("span",null,f(a.form.address_count||"-"),1)]),_:1})]),_:1})]),m("div",be,[o(h,{"label-width":"130px"},{default:i(()=>[o(d,{label:"\u5907\u6CE8",prop:"isp"},{default:i(()=>[m("span",De,f(a.form.alias||"-"),1)]),_:1})]),_:1})]),m("div",ye,[o(v,{type:"primary",onClick:l.handleCancel},{default:i(()=>[w("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const ke=C(ue,[["render",Ce]]),Se={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:ke},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function xe(t,e,n,_,a,l){const c=s("DataForm"),d=s("el-dialog");return p(),D(d,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:l.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=h=>l.dialogVisible=h),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:l.handleDialogClose},{default:i(()=>[l.dialogVisible?(p(),D(c,{key:0,row:n.row,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):R("",!0)]),_:1},8,["modelValue","onClose"])}const ve=C(Se,[["render",xe]]),Ve={name:"",components:{DataFormDialog:j,DataDetailDialog:ve,ConnectStatus:q,ExpireDays:N,ExpireProgress:Z,DomainSettingDialog:ee,AddressListgDialog:te},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,DomainSettingDialogVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(t){this.currentRow=t,this.dialogVisible=!0},async handleDeleteClick(t){let e={id:t.id};const n=await this.$http.deleteDomainById(e);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},async handleStatusChange(t){let e={id:t.id};const n=await this.$Http.function(e);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},async handleMonitorStatusChange(t,e){let n={domain_id:t.id,is_monitor:e};const _=await this.$http.updateDomainExpireMonitorById(n);_.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(_.msg)},async handleUpdateRowDomainInfo(t){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),n={id:t.id};(await this.$http.updateDomainRowInfoById(n)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),e.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(t){this.currentRow=t,this.dialogDetailVisible=!0},handleDomainSettingDialogShow(t){this.currentRow=t,this.DomainSettingDialogVisible=!0},handleShowAddressListgDialog(t){this.currentRow=t,this.AddressListgDialogVisible=!0},async handleAutoUpdateStatusChange(t,e){let n={domain_id:t.id,field:"auto_update",value:e};const _=await this.$http.updateDomainFieldById(n);_.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(_.msg)},handleRefreshRow(t){this.$emit("on-refresh-row",t)}},created(){}},Re={class:"inline-flex items-center"},Oe=m("span",{class:"mr-[2px]"},"\u8BC1\u4E66\u5929\u6570",-1),Ue={key:0,class:"color--danger"},Ie={key:2};function Fe(t,e,n,_,a,l){const c=s("el-table-column"),d=s("el-link"),h=s("Warning"),b=s("el-icon"),S=s("el-tooltip"),x=s("ExpireProgress"),v=s("ConnectStatus"),k=s("el-switch"),O=s("Refresh"),V=s("Edit"),U=s("Delete"),g=s("el-popconfirm"),I=s("el-table"),F=s("DataFormDialog"),T=s("DataDetailDialog"),$=s("DomainSettingDialog"),B=s("AddressListgDialog");return p(),y("div",null,[o(I,Q({stripe:"",border:""},t.$attrs,{onSortChange:e[0]||(e[0]=r=>t.$emit("sort-change",r)),onSelectionChange:e[1]||(e[1]=r=>t.$emit("selection-change",r))}),{default:i(()=>[o(c,{type:"selection","header-align":"center",align:"center",width:"40"}),o(c,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"250","show-overflow-tooltip":"",prop:"domain"},{default:i(r=>[o(d,{underline:!1,onClick:u=>l.handleShowDetail(r.row)},{default:i(()=>[w(f(r.row.domain),1)]),_:2},1032,["onClick"])]),_:1}),o(c,{label:"\u7AEF\u53E3","header-align":"center",align:"center",width:"60",sortable:"custom",prop:"port"},{default:i(r=>[m("span",null,f(r.row.port||"-"),1)]),_:1}),o(c,{label:"\u8BC1\u4E66\u5929\u6570","header-align":"center",align:"center",width:"110",sortable:"custom",prop:"expire_days"},{header:i(()=>[o(S,{effect:"dark",content:"\u5982\u6709\u591A\u4E2A\u4E3B\u673AIP\u5730\u5740\uFF0C\u6B64\u5904\u4EC5\u663E\u793A\u5230\u671F\u65F6\u95F4\u6700\u77ED\u7684\u8BC1\u4E66",placement:"top-start","show-after":800},{default:i(()=>[m("div",Re,[Oe,o(b,null,{default:i(()=>[o(h)]),_:1})])]),_:1})]),default:i(r=>[o(x,{startTime:r.row.start_time,endTime:r.row.expire_time},null,8,["startTime","endTime"])]),_:1}),o(c,{label:"\u4E3B\u673A\u6570\u91CF","header-align":"center",align:"center",width:"80",prop:"address_count"},{default:i(r=>[r.row.is_dynamic_host?(p(),y("span",Ue,"*")):R("",!0),r.row.address_count&&r.row.address_count>0?(p(),D(d,{key:1,underline:!1,onClick:u=>l.handleShowAddressListgDialog(r.row)},{default:i(()=>[w(f(r.row.address_count),1)]),_:2},1032,["onClick"])):(p(),y("span",Ie,"-"))]),_:1}),o(c,{label:"\u72B6\u6001","header-align":"center",align:"center",width:"60",sortable:"custom",prop:"connect_status"},{default:i(r=>[o(v,{value:r.row.connect_status,onOnClick:u=>l.handleShowAddressListgDialog(r.row)},null,8,["value","onOnClick"])]),_:1}),o(c,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:i(r=>[m("span",null,f(r.row.group_name||"-"),1)]),_:1}),o(c,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"check_time","show-overflow-tooltip":""},{default:i(r=>[m("span",null,f(r.row.alias||"-"),1)]),_:1}),o(c,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"90",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:i(r=>[m("span",null,f(r.row.update_time_label||"-"),1)]),_:1}),o(c,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"auto_update"},{default:i(r=>[o(k,{modelValue:r.row.auto_update,"onUpdate:modelValue":u=>r.row.auto_update=u,onChange:u=>l.handleAutoUpdateStatusChange(r.row,u)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),o(c,{label:"\u76D1\u6D4B",width:"60","header-align":"center",align:"center",sortable:"custom",prop:"is_monitor"},{default:i(r=>[o(k,{modelValue:r.row.is_monitor,"onUpdate:modelValue":u=>r.row.is_monitor=u,onChange:u=>l.handleMonitorStatusChange(r.row,u)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),o(c,{label:"\u64CD\u4F5C",width:"100","header-align":"center",align:"center"},{default:i(r=>[o(d,{underline:!1,type:"primary",class:"mr-sm",onClick:u=>l.handleUpdateRowDomainInfo(r.row)},{default:i(()=>[o(b,null,{default:i(()=>[o(O)]),_:1})]),_:2},1032,["onClick"]),o(d,{underline:!1,type:"primary",class:"mr-sm",onClick:u=>l.handleEditRow(r.row)},{default:i(()=>[o(b,null,{default:i(()=>[o(V)]),_:1})]),_:2},1032,["onClick"]),o(g,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:u=>l.handleDeleteClick(r.row)},{reference:i(()=>[o(d,{underline:!1,type:"danger"},{default:i(()=>[o(b,null,{default:i(()=>[o(U)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},16),o(F,{visible:a.dialogVisible,"onUpdate:visible":e[2]||(e[2]=r=>a.dialogVisible=r),row:a.currentRow,onOnSuccess:e[3]||(e[3]=r=>l.handleRefreshRow(a.currentRow))},null,8,["visible","row"]),o(T,{row:a.currentRow,visible:a.dialogDetailVisible,"onUpdate:visible":e[4]||(e[4]=r=>a.dialogDetailVisible=r),onOnSuccess:e[5]||(e[5]=r=>l.handleRefreshRow(a.currentRow))},null,8,["row","visible"]),o($,{row:a.currentRow,visible:a.DomainSettingDialogVisible,"onUpdate:visible":e[6]||(e[6]=r=>a.DomainSettingDialogVisible=r),onOnSuccess:e[7]||(e[7]=r=>l.handleRefreshRow(a.currentRow))},null,8,["row","visible"]),a.currentRow?(p(),D(B,{key:0,domainId:a.currentRow.id,visible:a.AddressListgDialogVisible,"onUpdate:visible":e[8]||(e[8]=r=>a.AddressListgDialogVisible=r),onOnClose:e[9]||(e[9]=r=>l.handleRefreshRow(a.currentRow))},null,8,["domainId","visible"])):R("",!0)])}const Te=C(Ve,[["render",Fe]]),$e={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,await this.$http.updateAllDomainCertInfoOfUser()},async getUpdateDomainStatusOfUser(){const t=await this.$http.getUpdateDomainStatusOfUser();t.ok&&t.data.status==!1&&(clearInterval(this.updateTimer),this.updateTimer=null,this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Be(t,e,n,_,a,l){const c=s("Refresh"),d=s("el-icon"),h=s("el-link");return p(),D(h,{underline:!1,type:"primary",onClick:l.updateAllDomainCertInfoOfUser,disabled:l.disableUpdateButton},{default:i(()=>[o(d,null,{default:i(()=>[o(c)]),_:1}),w(f(l.updateText),1)]),_:1},8,["onClick","disabled"])}const Ae=C($e,[["render",Be]]),Ee={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u8BC1\u4E66\u68C0\u67E5"}},methods:{async checkDomainCert(){const t=await this.$http.handleNotifyByEventId({event_id:W.SSL_CERT_EXPIRE});t.ok&&this.$msg.success(`\u6210\u529F\u6E20\u9053\uFF1A${t.data.success}`)},async getUpdateDomainStatusOfUser(){const t=await this.$http.getCheckDomainStatusOfUser();t.ok&&t.data.status==!1&&(clearInterval(this.updateTimer),this.updateTimer=null,this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function ze(t,e,n,_,a,l){const c=s("Position"),d=s("el-icon"),h=s("el-link");return p(),D(h,{underline:!1,type:"primary",onClick:l.checkDomainCert,disabled:l.disableUpdateButton},{default:i(()=>[o(d,null,{default:i(()=>[o(c)]),_:1}),w(f(l.updateText),1)]),_:1},8,["onClick","disabled"])}const Pe=C(Ee,[["render",ze]]),Ge={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:oe},data(){return{loading:!0,options:[{title:"\u8BC1\u4E66\u72B6\u6001",maxCount:1,field:"expire_days",selected:[],options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!1,selected:[],options:[]}]}},computed:{...L(A,{groupOptions:"getGroupOptions"})},methods:{async getData(){this.options.map(t=>{t.field=="group_ids"&&(this.groupOptions&&this.groupOptions.length>0?t.options=[...this.groupOptions.map(e=>{let n=e.name;return e.domain_count>0&&(n=`${e.name} ${e.domain_count}`),{...e,value:e.id,label:n}}),{label:"\u672A\u5206\u7EC4",value:0}]:t.hidden=!0)}),this.loading=!1},handleChange(t){this.$emit("on-change",this.options)}},created(){this.getData()}},Le={class:""};function qe(t,e,n,_,a,l){const c=s("ConditionFilterGroup"),d=E("loading");return z((p(),y("div",Le,[o(c,{options:a.options,onOnChange:l.handleChange},null,8,["options","onOnChange"])])),[[d,a.loading]])}const Ne=C(Ge,[["render",qe]]),je={name:"domain-list",props:{},components:{DataFormDialog:j,DataTable:Te,SelectGroup:G,UpdateDomainInfo:Ae,CheckDomainInfo:Pe,ConditionFilter:Ne},data(){return{dataApi:P,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:K(P.exportDomainToFile),order_type:"ascending",order_prop:"expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...L(A,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...X(A,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let t={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop};for(let n of this.ConditionFilterParams)n.selected&&n.selected.length>0&&(n.maxCount==1?t[n.field]=n.selected[0]:t[n.field]=n.selected);const e=await this.$http.getDomainList(t);e.code==0?(this.list=e.data.list.map(n=>this.preHandleRow(n)),this.total=e.data.total):this.$msg.error(e.msg),this.loading=!1},preHandleRow(t){return t._uuid=M(),t.group_id&&(t.group_name=this.getGroupName(t.group_id)),t},getGroupName(t){let e=this.groupOptions.find(n=>n.value==t);if(e)return e.name},async handleHttpRequest(t){let e=this.$loading({fullscreen:!0}),n=new FormData;n.append("file",t.file),(await this.$http.importDomainFromFile(n)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData()),e.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const t=await this.$http.exportDomainFile();t.ok&&ne.saveAs(t.data.url,"domain.txt")},handleSearch(){this.resetData()},handleSizeChange(t){localStorage.setItem(this.pageSizeCachekey,t),this.resetData()},loadPageSize(){let t=localStorage.getItem(this.pageSizeCachekey);t&&(this.size=parseInt(t))},handleExceed(t){this.$refs.upload.clearFiles();const e=t[0];e.uid=ie(),this.handleHttpRequest({file:e})},handleSortChange({column:t,prop:e,order:n}){console.log(t,e,n),this.order_prop="",this.order_type="",n&&(this.order_type=n,this.order_prop=e),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(t){this.selectedRows=t},handleConditionFilterChange(t){console.log(t),this.ConditionFilterParams=t,this.resetData()},async handleBatchDeleteConfirm(){let t=this.$loading({fullscreen:!0}),e={ids:this.selectedRows.map(n=>n.id)};try{const n=await this.$http.deleteDomainByIds(e);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(n.msg)}catch(n){console.log(n)}finally{this.$nextTick(()=>{t.close()})}},async handleRefreshRow(t){let e={id:t.id};const n=await this.$http.getDomainById(e);if(n.ok){let _=this.list.findIndex(a=>a.id==t.id);this.list.splice(_,1,this.preHandleRow(n.data)),console.log(this.list)}}},created(){this.keyword=this.$route.query.keyword||this.keyword,this.initData()}},He={class:"app-container"},We={class:"flex",style:{"justify-content":"space-between"}},Ke={class:"flex mt-sm",style:{"align-items":"center"}},Me={style:{"font-size":"14px",color:"#333333"}},Qe={class:"flex",style:{"margin-left":"auto"}},Xe=m("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function Je(t,e,n,_,a,l){const c=s("Plus"),d=s("el-icon"),h=s("el-button"),b=s("Search"),S=s("el-input"),x=s("ConditionFilter"),v=s("Delete"),k=s("el-link"),O=s("el-popconfirm"),V=s("UpdateDomainInfo"),U=s("CheckDomainInfo"),g=s("Upload"),I=s("el-upload"),F=s("Download"),T=s("DataTable"),$=s("el-pagination"),B=s("DataFormDialog"),r=E("loading");return p(),y("div",He,[m("div",We,[o(h,{type:"primary",onClick:l.handleAddRow},{default:i(()=>[o(d,null,{default:i(()=>[o(c)]),_:1}),w("\u6DFB\u52A0")]),_:1},8,["onClick"]),o(S,{class:"ml-sm",style:{width:"260px"},modelValue:a.keyword,"onUpdate:modelValue":e[0]||(e[0]=u=>a.keyword=u),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:J(l.handleSearch,["enter"]),onClear:l.handleSearch},{append:i(()=>[o(h,{onClick:l.handleSearch},{default:i(()=>[o(d,null,{default:i(()=>[o(b)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),a.hasInitData?(p(),D(x,{key:0,class:"mt-md",onOnChange:l.handleConditionFilterChange},null,8,["onOnChange"])):R("",!0),m("div",Ke,[m("div",Me,"\u5171\u8BA1 "+f(a.total)+" \u6761\u6570\u636E",1),m("div",Qe,[l.showBatchDeleteButton?(p(),D(O,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:l.handleBatchDeleteConfirm},{reference:i(()=>[o(k,{underline:!1,type:"danger",class:"mr-sm"},{default:i(()=>[o(d,null,{default:i(()=>[o(v)]),_:1}),w("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):R("",!0),o(V,{onOnSuccess:l.resetData},null,8,["onOnSuccess"]),o(U,{class:"ml-sm",onOnSuccess:l.resetData},null,8,["onOnSuccess"]),o(k,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:i(()=>[o(d,null,{default:i(()=>[o(g)]),_:1}),w("\u5BFC\u5165 "),o(I,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":l.handleExceed,"show-file-list":!1,"http-request":l.handleHttpRequest},{default:i(()=>[Xe]),_:1},8,["on-exceed","http-request"])]),_:1}),o(k,{underline:!1,type:"primary",class:"ml-sm",onClick:l.handleExportToFile},{default:i(()=>[o(d,null,{default:i(()=>[o(F)]),_:1}),w("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),z(o(T,{class:"mt-sm",data:a.list,onOnSuccess:l.resetData,onOnRefreshRow:l.handleRefreshRow,onSortChange:l.handleSortChange,onSelectionChange:l.handleSelectionChange},null,8,["data","onOnSuccess","onOnRefreshRow","onSortChange","onSelectionChange"]),[[r,a.loading]]),o($,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:a.total,"page-size":a.size,"onUpdate:pageSize":e[1]||(e[1]=u=>a.size=u),"current-page":a.page,"onUpdate:currentPage":e[2]||(e[2]=u=>a.page=u),onCurrentChange:l.getData,onSizeChange:l.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),o(B,{visible:a.dialogVisible,"onUpdate:visible":e[3]||(e[3]=u=>a.dialogVisible=u),onOnSuccess:l.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const st=C(je,[["render",Je]]);export{st as default};
