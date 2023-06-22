import{i as q,E as Y}from"./event-enums.6c6f25e7.js";import{S as z,u as $}from"./SelectGroup.cf921f1a.js";import{_ as y,d as E,r as M,g as K}from"./index.02397523.js";import{ah as l,ar as B,Q as A,o as h,c as k,V as i,P as a,a as c,T as b,O as w,S as V,U as _,L as Q,ax as G,aA as X,a9 as J}from"./vendor-vue.edbe275b.js";import{C as P}from"./ConnectStatus.e538837a.js";import{E as H,A as W,a as Z,D as ee,b as te,C as oe}from"./ConditionFilterGroup.6289f83b.js";import{F as ie}from"./vendor-lib.4c56f242.js";import{a as ne}from"./element-plus.dcbfaaa8.js";import"./element-icon.ade3aa7e.js";const ae={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!1,trigger:"blur",validator:(e,t,o)=>{if(!t)return o();if(q(t))o();else return o(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},se={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:z},data(){return{loading:!1,form:{domain:"",comment:"",port:443,group_id:"",domain_start_time:"",domain_expire_time:""},rules:ae,disabledTime:!1}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let e={domain_info_id:this.row.id},o=(await this.$http.getDomainInfoById(e)).data;this.form.domain=o.domain,this.form.comment=o.comment,this.form.group_id=o.group_id,this.form.domain_start_time=o.domain_start_time,this.form.domain_expire_time=o.domain_expire_time,this.form.group_id==0&&(this.form.group_id=""),o.is_auto_update&&(this.disabledTime=!0)}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(e=>{if(console.log(e),e)this.confirmSubmit();else return!1})},async confirmSubmit(){let e=this.$loading({fullscreen:!0}),t={domain:this.form.domain.trim(),comment:this.form.comment.trim(),group_id:this.form.group_id,domain_start_time:this.form.domain_start_time,domain_expire_time:this.form.domain_expire_time},o=null;this.row?(t.domain_info_id=this.row.id,o=await this.$http.updateDomainInfoById(t)):o=await this.$http.addDomainInfo(t),o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg),this.$nextTick(()=>{e.close()})}},created(){this.getData()}},le={class:"text-center"};function re(e,t,o,p,n,s){const m=l("el-input"),d=l("el-form-item"),u=l("el-date-picker"),C=l("SelectGroup"),x=l("el-form"),D=l("el-button"),S=B("loading");return A((h(),k("div",null,[i(x,{ref:"form",model:n.form,rules:n.rules,"label-width":"70px"},{default:a(()=>[i(d,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[i(m,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":t[0]||(t[0]=f=>n.form.domain=f),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),i(d,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"domain_start_time"},{default:a(()=>[i(u,{modelValue:n.form.domain_start_time,"onUpdate:modelValue":t[1]||(t[1]=f=>n.form.domain_start_time=f),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u57DF\u540D\u6CE8\u518C\u65F6\u95F4",disabled:n.disabledTime},null,8,["modelValue","disabled"])]),_:1}),i(d,{label:"\u5230\u671F\u65F6\u95F4",prop:"domain_expire_time"},{default:a(()=>[i(u,{modelValue:n.form.domain_expire_time,"onUpdate:modelValue":t[2]||(t[2]=f=>n.form.domain_expire_time=f),"value-format":"YYYY-MM-DD HH:mm:ss",type:"date",placeholder:"\u57DF\u540D\u5230\u671F\u65F6\u95F4",disabled:n.disabledTime},null,8,["modelValue","disabled"])]),_:1}),i(d,{label:"\u5206\u7EC4",prop:"group_id"},{default:a(()=>[i(C,{class:"w-[150px]",modelValue:n.form.group_id,"onUpdate:modelValue":t[3]||(t[3]=f=>n.form.group_id=f),clearable:""},null,8,["modelValue"])]),_:1}),i(d,{label:"\u5907\u6CE8",prop:"comment"},{default:a(()=>[i(m,{type:"textarea",modelValue:n.form.comment,"onUpdate:modelValue":t[4]||(t[4]=f=>n.form.comment=f),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),c("div",le,[i(D,{onClick:s.handleCancel},{default:a(()=>[b("\u53D6 \u6D88")]),_:1},8,["onClick"]),i(D,{type:"primary",onClick:s.handleSubmit},{default:a(()=>[b("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[S,n.loading]])}const de=y(se,[["render",re]]),me={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:de},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{handleClose(){this.$emit("on-success"),this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function ce(e,t,o,p,n,s){const m=l("DataForm"),d=l("el-dialog");return h(),w(d,{title:s.dialogTitle,modelValue:s.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=u=>s.dialogVisible=u),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:a(()=>[s.dialogVisible?(h(),w(m,{key:0,row:o.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):V("",!0)]),_:1},8,["title","modelValue"])}const L=y(me,[["render",ce]]),ue={name:"",props:{row:{type:Object,default:null}},components:{ConnectStatus:P,ExpireDays:H,AddressList:W},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}},real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",real_domain_expire_days:"",ssl_count:"",comment:""},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let e={domain_info_id:this.row.id};const t=await this.$http.getDomainInfoById(e);if(t.code!=0)return;let o=t.data;this.form.domain=o.domain,this.form.update_time_label=o.update_time_label,this.form.ssl_count=o.ssl_count,this.form.comment=o.comment,this.form.domain_url=o.domain_url,this.form.ip=o.ip,this.form.start_time=o.start_time,this.form.expire_time=o.expire_time,this.form.check_time=o.check_time,this.form.connect_status=o.connect_status,this.form.total_days=o.total_days,this.form.expire_days=o.expire_days,this.form.real_time_expire_days=o.real_time_expire_days,this.form.create_time=o.create_time,this.form.update_time=o.update_time,this.form.domain_auto_update=o.domain_auto_update,this.form.domain_auto_update_label=o.domain_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=o.domain_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=o.domain_check_time_label,this.form.port=o.port,this.form.real_domain_expire_days=o.real_domain_expire_days,this.form.alias=o.alias,this.form.domain_start_time=o.domain_start_time,this.form.domain_expire_time=o.domain_expire_time,this.form.real_time_domain_expire_days=o.real_time_domain_expire_days,this.form.detail={issuer:o.detail.issuer||{},subject:o.detail.subject||{}}}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),t={domain_info_id:this.row.id};(await this.$http.updateDomainInfoRowById(t)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),e.close()},async getIpInfo(){let e={ip:this.form.ip};const t=await this.$http.getIpInfo(e);t.code==0&&(this.ipInfo=t.data)}},created(){this.getData()}},pe={class:"domain-detail"},_e={class:"mo-form-detail grid grid-cols-2"},he={class:"truncate"},fe={class:"flex justify-between flex-1"},ge={class:"truncate"},be={class:"truncate"},De={class:"mo-form-detail mt-[20px]"},we={class:"truncate"},ye={class:"text-center mt-md"};function Ce(e,t,o,p,n,s){const m=l("el-link"),d=l("el-form-item"),u=l("el-form"),C=l("ExpireDays"),x=l("Refresh"),D=l("el-icon"),S=l("el-button");return h(),k("div",pe,[c("div",_e,[i(u,{"label-width":"130px"},{default:a(()=>[i(d,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[i(m,{underline:!1},{default:a(()=>[b(_(n.form.domain),1)]),_:1})]),_:1}),i(d,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"create_time"},{default:a(()=>[c("span",null,_(n.form.domain_start_time||"-"),1)]),_:1}),i(d,{label:"\u5230\u671F\u65F6\u95F4",prop:"create_time"},{default:a(()=>[c("span",null,_(n.form.domain_expire_time||"-"),1)]),_:1}),i(d,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"isp"},{default:a(()=>[c("span",he,_(n.form.domain_auto_update_label||"-"),1)]),_:1})]),_:1}),i(u,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:a(()=>[i(d,{label:"\u8BC1\u4E66\u6570\u91CF",prop:"domain"},{default:a(()=>[c("span",null,_(n.form.ssl_count||"-"),1)]),_:1}),i(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:a(()=>[i(C,{value:n.form.real_domain_expire_days},null,8,["value"])]),_:1}),i(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:a(()=>[c("div",fe,[c("span",ge,_(n.form.update_time_label||"-"),1),i(m,{underline:!1,type:"primary",class:"mr-sm",onClick:s.handleUpdateRowDomainInfo},{default:a(()=>[i(D,null,{default:a(()=>[i(x)]),_:1})]),_:1},8,["onClick"])])]),_:1}),i(d,{label:"\u8FC7\u671F\u76D1\u6D4B",prop:"isp"},{default:a(()=>[c("span",be,_(n.form.domain_expire_monitor||"-"),1)]),_:1})]),_:1})]),c("div",De,[i(u,{"label-width":"130px"},{default:a(()=>[i(d,{label:"\u5907\u6CE8",prop:"comment"},{default:a(()=>[c("span",we,_(n.form.comment||"-"),1)]),_:1})]),_:1})]),c("div",ye,[i(S,{type:"primary",onClick:s.handleCancel},{default:a(()=>[b("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const xe=y(ue,[["render",Ce]]),Se={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:xe},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function ve(e,t,o,p,n,s){const m=l("DataForm"),d=l("el-dialog");return h(),w(d,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:s.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=u=>s.dialogVisible=u),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:s.handleDialogClose},{default:a(()=>[s.dialogVisible?(h(),w(m,{key:0,row:o.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):V("",!0)]),_:1},8,["modelValue","onClose"])}const ke=y(Se,[["render",ve]]),Ve={name:"",components:{DataFormDialog:L,DataDetailDialog:ke,ConnectStatus:P,ExpireDays:H,ExpireProgress:Z,DomainSettingDialog:ee,AddressListgDialog:te},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,DomainSettingDialogVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(e){this.currentRow=e,this.dialogVisible=!0},async handleDeleteClick(e){let t={domain_info_id:e.id};const o=await this.$http.deleteDomainInfoById(t);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},async handleStatusChange(e){let t={id:e.id};const o=await this.$Http.function(t);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},async handleMonitorStatusChange(e,t){let o={domain_info_id:e.id,field:"is_expire_monitor",value:t};const p=await this.$http.updateDomainInfoFieldById(o);p.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(p.msg)},async handleAutoUpdateStatusChange(e,t){let o={domain_info_id:e.id,field:"is_auto_update",value:t};const p=await this.$http.updateDomainInfoFieldById(o);p.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(p.msg)},async handleUpdateRowDomainInfo(e){let t=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),o={domain_info_id:e.id};(await this.$http.updateDomainInfoRowById(o)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),t.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(e){this.currentRow=e,this.dialogDetailVisible=!0},handleDomainSettingDialogShow(e){this.currentRow=e,this.DomainSettingDialogVisible=!0},handleShowAddressListgDialog(e){this.currentRow=e,this.AddressListgDialogVisible=!0},handleCertCountClick(e){let t=this.$router.resolve({name:"domain-list",query:{keyword:e.domain}});window.open(t.href,"_blank")},handleRefreshRow(e){this.$emit("on-refresh-row",e)}},created(){}},Ie={key:1};function Oe(e,t,o,p,n,s){const m=l("el-table-column"),d=l("el-link"),u=l("ExpireDays"),C=l("el-switch"),x=l("Refresh"),D=l("el-icon"),S=l("Edit"),f=l("Delete"),I=l("el-popconfirm"),O=l("el-table"),R=l("DataFormDialog"),U=l("DataDetailDialog"),F=l("DomainSettingDialog"),T=l("AddressListgDialog");return h(),k("div",null,[i(O,Q({stripe:"",border:""},e.$attrs,{onSortChange:t[0]||(t[0]=r=>e.$emit("sort-change",r)),onSelectionChange:t[1]||(t[1]=r=>e.$emit("selection-change",r))}),{default:a(()=>[i(m,{type:"selection","header-align":"center",align:"center",width:"40"}),i(m,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"250","show-overflow-tooltip":"",prop:"domain"},{default:a(r=>[i(d,{underline:!1,onClick:g=>s.handleShowDetail(r.row)},{default:a(()=>[b(_(r.row.domain),1)]),_:2},1032,["onClick"])]),_:1}),i(m,{label:"\u57DF\u540D\u5929\u6570","header-align":"center",align:"center",width:"90",sortable:"custom",prop:"domain_expire_days"},{default:a(r=>[i(u,{value:r.row.real_domain_expire_days},null,8,["value"])]),_:1}),i(m,{label:"\u8BC1\u4E66\u6570\u91CF","header-align":"center",align:"center",width:"100"},{default:a(r=>[r.row.ssl_count&&r.row.ssl_count>0?(h(),w(d,{key:0,underline:!1,onClick:g=>s.handleCertCountClick(r.row)},{default:a(()=>[b(_(r.row.ssl_count),1)]),_:2},1032,["onClick"])):(h(),k("span",Ie,"-"))]),_:1}),i(m,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:a(r=>[c("span",null,_(r.row.group_name||"-"),1)]),_:1}),i(m,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"comment","show-overflow-tooltip":""},{default:a(r=>[c("span",null,_(r.row.comment||"-"),1)]),_:1}),i(m,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"90",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:a(r=>[c("span",null,_(r.row.update_time_label||"-"),1)]),_:1}),i(m,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"domain_expire_monitor"},{default:a(r=>[i(C,{modelValue:r.row.is_auto_update,"onUpdate:modelValue":g=>r.row.is_auto_update=g,onChange:g=>s.handleAutoUpdateStatusChange(r.row,g)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),i(m,{label:"\u76D1\u6D4B",width:"60","header-align":"center",align:"center",sortable:"custom",prop:"domain_expire_monitor"},{default:a(r=>[i(C,{modelValue:r.row.is_expire_monitor,"onUpdate:modelValue":g=>r.row.is_expire_monitor=g,onChange:g=>s.handleMonitorStatusChange(r.row,g)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),i(m,{label:"\u64CD\u4F5C",width:"100","header-align":"center",align:"center"},{default:a(r=>[i(d,{underline:!1,type:"primary",class:"mr-sm",onClick:g=>s.handleUpdateRowDomainInfo(r.row)},{default:a(()=>[i(D,null,{default:a(()=>[i(x)]),_:1})]),_:2},1032,["onClick"]),i(d,{underline:!1,type:"primary",class:"mr-sm",onClick:g=>s.handleEditRow(r.row)},{default:a(()=>[i(D,null,{default:a(()=>[i(S)]),_:1})]),_:2},1032,["onClick"]),i(I,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:g=>s.handleDeleteClick(r.row)},{reference:a(()=>[i(d,{underline:!1,type:"danger"},{default:a(()=>[i(D,null,{default:a(()=>[i(f)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},16),i(R,{visible:n.dialogVisible,"onUpdate:visible":t[2]||(t[2]=r=>n.dialogVisible=r),row:n.currentRow,onOnSuccess:t[3]||(t[3]=r=>s.handleRefreshRow(n.currentRow))},null,8,["visible","row"]),i(U,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":t[4]||(t[4]=r=>n.dialogDetailVisible=r),onOnSuccess:t[5]||(t[5]=r=>s.handleRefreshRow(n.currentRow))},null,8,["row","visible"]),i(F,{row:n.currentRow,visible:n.DomainSettingDialogVisible,"onUpdate:visible":t[6]||(t[6]=r=>n.DomainSettingDialogVisible=r),onOnSuccess:s.handleUpdateSuccess},null,8,["row","visible","onOnSuccess"]),n.currentRow?(h(),w(T,{key:0,domainId:n.currentRow.id,visible:n.AddressListgDialogVisible,"onUpdate:visible":t[7]||(t[7]=r=>n.AddressListgDialogVisible=r),onOnSuccess:s.handleUpdateSuccess},null,8,["domainId","visible","onOnSuccess"])):V("",!0)])}const Re=y(Ve,[["render",Oe]]),Ue={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,(await this.$http.updateDomainInfoOfUser()).code==0&&this.$msg.success("\u540E\u53F0\u66F4\u65B0\u4E2D\uFF0C\u5237\u65B0\u67E5\u770B")},async getUpdateDomainStatusOfUser(){const e=await this.$http.getUpdateDomainStatusOfUser();e.ok&&e.data.status==!1&&(clearInterval(this.updateTimer),this.updateTimer=null,this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Fe(e,t,o,p,n,s){const m=l("Refresh"),d=l("el-icon"),u=l("el-link");return h(),w(u,{underline:!1,type:"primary",onClick:s.updateAllDomainCertInfoOfUser,disabled:s.disableUpdateButton},{default:a(()=>[i(d,null,{default:a(()=>[i(m)]),_:1}),b(_(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Te=y(Ue,[["render",Fe]]),$e={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u8BC1\u4E66\u68C0\u67E5"}},methods:{async checkDomainCert(){const e=await this.$http.handleNotifyByEventId({event_id:Y.DOMAIN_EXPIRE});e.ok&&this.$msg.success(`\u6210\u529F\u6E20\u9053\uFF1A${e.data.success}`)},async getUpdateDomainStatusOfUser(){const e=await this.$http.getCheckDomainStatusOfUser();e.ok&&e.data.status==!1&&(clearInterval(this.updateTimer),this.updateTimer=null,this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Be(e,t,o,p,n,s){const m=l("Position"),d=l("el-icon"),u=l("el-link");return h(),w(u,{underline:!1,type:"primary",onClick:s.checkDomainCert,disabled:s.disableUpdateButton},{default:a(()=>[i(d,null,{default:a(()=>[i(m)]),_:1}),b(_(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Ae=y($e,[["render",Be]]),Ee={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:oe},data(){return{loading:!0,options:[{title:"\u57DF\u540D\u72B6\u6001",field:"domain_expire_days",selected:[],maxCount:1,options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!1,selected:[],options:[]}]}},computed:{...G($,{groupOptions:"getGroupOptions"})},methods:{async getData(){this.options.map(e=>{e.field=="group_ids"&&(this.groupOptions&&this.groupOptions.length>0?e.options=[...this.groupOptions.map(t=>{let o=t.name;return t.domain_count>0&&(o=`${t.name} ${t.domain_count}`),{...t,value:t.id,label:o}}),{label:"\u672A\u5206\u7EC4",value:0}]:e.hidden=!0)}),this.loading=!1},handleChange(e){this.$emit("on-change",this.options)}},created(){this.getData()}},ze={class:""};function Ge(e,t,o,p,n,s){const m=l("ConditionFilterGroup"),d=B("loading");return A((h(),k("div",ze,[i(m,{options:n.options,onOnChange:s.handleChange},null,8,["options","onOnChange"])])),[[d,n.loading]])}const Pe=y(Ee,[["render",Ge]]),He={name:"domain-list",props:{},components:{DataFormDialog:L,DataTable:Re,SelectGroup:z,UpdateDomainInfo:Te,CheckDomainInfo:Ae,ConditionFilter:Pe},data(){return{dataApi:E,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:M(E.exportDomainToFile),order_type:"ascending",order_prop:"domain_expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...G($,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...X($,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let e={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop};for(let o of this.ConditionFilterParams)o.selected&&o.selected.length>0&&(o.maxCount==1?e[o.field]=o.selected[0]:e[o.field]=o.selected);const t=await this.$http.getDomainInfoList(e);t.code==0?(this.list=t.data.list.map(o=>this.preHandleRow(o)),this.total=t.data.total):this.$msg.error(t.msg),this.loading=!1},preHandleRow(e){return e._uuid=K(),e.group_id&&(e.group_name=this.getGroupName(e.group_id)),e},getGroupName(e){let t=this.groupOptions.find(o=>o.value==e);if(t)return t.name},async handleHttpRequest(e){let t=this.$loading({fullscreen:!0}),o=new FormData;o.append("file",e.file),(await this.$http.importDomainInFromFile(o)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData()),t.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const e=await this.$http.exportDomainInfoFile();e.ok&&ie.saveAs(e.data.url,"domain.txt")},handleSearch(){this.resetData()},handleSizeChange(e){localStorage.setItem(this.pageSizeCachekey,e),this.resetData()},loadPageSize(){let e=localStorage.getItem(this.pageSizeCachekey);e&&(this.size=parseInt(e))},handleExceed(e){this.$refs.upload.clearFiles();const t=e[0];t.uid=ne(),this.handleHttpRequest({file:t})},handleSortChange({column:e,prop:t,order:o}){console.log(e,t,o),this.order_prop="",this.order_type="",o&&(this.order_type=o,this.order_prop=t),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(e){this.selectedRows=e},handleConditionFilterChange(e){console.log(e),this.ConditionFilterParams=e,this.resetData()},async handleBatchDeleteConfirm(){let e=this.$loading({fullscreen:!0}),t={domain_info_ids:this.selectedRows.map(o=>o.id)};try{const o=await this.$http.deleteDomainInfoByIds(t);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(o.msg)}catch(o){console.log(o)}finally{this.$nextTick(()=>{e.close()})}},async handleRefreshRow(e){let t={domain_info_id:e.id};const o=await this.$http.getDomainInfoById(t);if(o.ok){let p=this.list.findIndex(n=>n.id==e.id);this.list.splice(p,1,this.preHandleRow(o.data)),console.log(this.list)}}},created(){this.initData()}},Le={class:"app-container"},je={class:"flex",style:{"justify-content":"space-between"}},Ne={class:"flex mt-sm",style:{"align-items":"center"}},qe={style:{"font-size":"14px",color:"#333333"}},Ye={class:"flex",style:{"margin-left":"auto"}},Me=c("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function Ke(e,t,o,p,n,s){const m=l("Plus"),d=l("el-icon"),u=l("el-button"),C=l("Search"),x=l("el-input"),D=l("ConditionFilter"),S=l("Delete"),f=l("el-link"),I=l("el-popconfirm"),O=l("UpdateDomainInfo"),R=l("CheckDomainInfo"),U=l("Upload"),F=l("el-upload"),T=l("Download"),r=l("DataTable"),g=l("el-pagination"),j=l("DataFormDialog"),N=B("loading");return h(),k("div",Le,[c("div",je,[i(u,{type:"primary",onClick:s.handleAddRow},{default:a(()=>[i(d,null,{default:a(()=>[i(m)]),_:1}),b("\u6DFB\u52A0")]),_:1},8,["onClick"]),i(x,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":t[0]||(t[0]=v=>n.keyword=v),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:J(s.handleSearch,["enter"]),onClear:s.handleSearch},{append:a(()=>[i(u,{onClick:s.handleSearch},{default:a(()=>[i(d,null,{default:a(()=>[i(C)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),n.hasInitData?(h(),w(D,{key:0,class:"mt-md",onOnChange:s.handleConditionFilterChange},null,8,["onOnChange"])):V("",!0),c("div",Ne,[c("div",qe,"\u5171\u8BA1 "+_(n.total)+" \u6761\u6570\u636E",1),c("div",Ye,[s.showBatchDeleteButton?(h(),w(I,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:s.handleBatchDeleteConfirm},{reference:a(()=>[i(f,{underline:!1,type:"danger",class:"mr-sm"},{default:a(()=>[i(d,null,{default:a(()=>[i(S)]),_:1}),b("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):V("",!0),i(O,{onOnSuccess:s.resetData},null,8,["onOnSuccess"]),i(R,{class:"ml-sm",onOnSuccess:s.resetData},null,8,["onOnSuccess"]),i(f,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:a(()=>[i(d,null,{default:a(()=>[i(U)]),_:1}),b("\u5BFC\u5165 "),i(F,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":s.handleExceed,"show-file-list":!1,"http-request":s.handleHttpRequest},{default:a(()=>[Me]),_:1},8,["on-exceed","http-request"])]),_:1}),i(f,{underline:!1,type:"primary",class:"ml-sm",onClick:s.handleExportToFile},{default:a(()=>[i(d,null,{default:a(()=>[i(T)]),_:1}),b("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),A(i(r,{class:"mt-sm",data:n.list,onOnSuccess:s.resetData,onSortChange:s.handleSortChange,onSelectionChange:s.handleSelectionChange,onOnRefreshRow:s.handleRefreshRow},null,8,["data","onOnSuccess","onSortChange","onSelectionChange","onOnRefreshRow"]),[[N,n.loading]]),i(g,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:pageSize":t[1]||(t[1]=v=>n.size=v),"current-page":n.page,"onUpdate:currentPage":t[2]||(t[2]=v=>n.page=v),onCurrentChange:s.getData,onSizeChange:s.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),i(j,{visible:n.dialogVisible,"onUpdate:visible":t[3]||(t[3]=v=>n.dialogVisible=v),onOnSuccess:s.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const nt=y(He,[["render",Ke]]);export{nt as default};
