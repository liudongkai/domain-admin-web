import{i as q,E as H}from"./event-enums.6c6f25e7.js";import{S as A,u as B}from"./SelectGroup.74ddb39d.js";import{_ as D,d as E,r as Y}from"./index.012fac8d.js";import{ah as l,ar as T,Q as $,o as h,c as x,V as i,P as a,a as c,T as b,O as y,S as I,U as _,L as M,ax as z,aA as K,a9 as Q}from"./vendor-vue.edbe275b.js";import{E as P,A as X,a as J,b as W,C as Z}from"./ConditionFilterGroup.148b888e.js";import{F as ee}from"./vendor-lib.4c56f242.js";import{a as te}from"./element-plus.dcbfaaa8.js";import"./element-icon.ade3aa7e.js";const oe={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!1,trigger:"blur",validator:(o,e,t)=>{if(!e)return t();if(q(e))t();else return t(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},ie={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:A},data(){return{loading:!1,form:{domain:"",comment:"",port:443,group_id:"",domain_start_time:"",domain_expire_time:""},rules:oe,disabledTime:!1}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let o={domain_info_id:this.row.id},t=(await this.$http.getDomainInfoById(o)).data;this.form.domain=t.domain,this.form.comment=t.comment,this.form.group_id=t.group_id,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.group_id==0&&(this.form.group_id=""),t.is_auto_update&&(this.disabledTime=!0)}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(o=>{if(console.log(o),o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),e={domain:this.form.domain.trim(),comment:this.form.comment.trim(),group_id:this.form.group_id,domain_start_time:this.form.domain_start_time,domain_expire_time:this.form.domain_expire_time},t=null;this.row?(e.domain_info_id=this.row.id,t=await this.$http.updateDomainInfoById(e)):t=await this.$http.addDomainInfo(e),t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg),this.$nextTick(()=>{o.close()})}},created(){this.getData()}},ne={class:"text-center"};function ae(o,e,t,u,n,s){const m=l("el-input"),d=l("el-form-item"),p=l("el-date-picker"),C=l("SelectGroup"),k=l("el-form"),w=l("el-button"),v=T("loading");return $((h(),x("div",null,[i(k,{ref:"form",model:n.form,rules:n.rules,"label-width":"70px"},{default:a(()=>[i(d,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[i(m,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":e[0]||(e[0]=f=>n.form.domain=f),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),i(d,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"domain_start_time"},{default:a(()=>[i(p,{modelValue:n.form.domain_start_time,"onUpdate:modelValue":e[1]||(e[1]=f=>n.form.domain_start_time=f),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u57DF\u540D\u6CE8\u518C\u65F6\u95F4",disabled:n.disabledTime},null,8,["modelValue","disabled"])]),_:1}),i(d,{label:"\u5230\u671F\u65F6\u95F4",prop:"domain_expire_time"},{default:a(()=>[i(p,{modelValue:n.form.domain_expire_time,"onUpdate:modelValue":e[2]||(e[2]=f=>n.form.domain_expire_time=f),"value-format":"YYYY-MM-DD HH:mm:ss",type:"date",placeholder:"\u57DF\u540D\u5230\u671F\u65F6\u95F4",disabled:n.disabledTime},null,8,["modelValue","disabled"])]),_:1}),i(d,{label:"\u5206\u7EC4",prop:"group_id"},{default:a(()=>[i(C,{class:"w-[150px]",modelValue:n.form.group_id,"onUpdate:modelValue":e[3]||(e[3]=f=>n.form.group_id=f),clearable:""},null,8,["modelValue"])]),_:1}),i(d,{label:"\u5907\u6CE8",prop:"comment"},{default:a(()=>[i(m,{type:"textarea",modelValue:n.form.comment,"onUpdate:modelValue":e[4]||(e[4]=f=>n.form.comment=f),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),c("div",ne,[i(w,{onClick:s.handleCancel},{default:a(()=>[b("\u53D6 \u6D88")]),_:1},8,["onClick"]),i(w,{type:"primary",onClick:s.handleSubmit},{default:a(()=>[b("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[v,n.loading]])}const se=D(ie,[["render",ae]]),le={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:se},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.$emit("on-success"),this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function re(o,e,t,u,n,s){const m=l("DataForm"),d=l("el-dialog");return h(),y(d,{title:s.dialogTitle,modelValue:s.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>s.dialogVisible=p),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:a(()=>[s.dialogVisible?(h(),y(m,{key:0,row:t.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):I("",!0)]),_:1},8,["title","modelValue"])}const G=D(le,[["render",re]]),de={name:"",props:{row:{type:Object,default:null}},components:{ExpireDays:P,AddressList:X},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}},real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",real_domain_expire_days:"",ssl_count:"",comment:"",domain_registrar:"",domain_registrar_url:""},ipInfo:{isp:""},icpInfo:{}}},computed:{},methods:{async getICP(){if(!this.form.domain)return;this.loading=!0;let o={domain:this.form.domain};try{const e=await this.$http.getICP(o);this.icpInfo=e.data}catch(e){console.log(e)}finally{this.loading=!1}},async getData(){if(this.row){let o={domain_info_id:this.row.id};const e=await this.$http.getDomainInfoById(o);if(e.code!=0)return;let t=e.data;this.form.domain=t.domain,this.form.update_time_label=t.update_time_label,this.form.ssl_count=t.ssl_count,this.form.comment=t.comment,this.form.domain_url=t.domain_url,this.form.domain_registrar_url=t.domain_registrar_url,this.form.domain_registrar=t.domain_registrar,this.form.ip=t.ip,this.form.start_time=t.start_time,this.form.expire_time=t.expire_time,this.form.check_time=t.check_time,this.form.connect_status=t.connect_status,this.form.total_days=t.total_days,this.form.expire_days=t.expire_days,this.form.real_time_expire_days=t.real_time_expire_days,this.form.create_time=t.create_time,this.form.update_time=t.update_time,this.form.domain_auto_update=t.domain_auto_update,this.form.domain_auto_update_label=t.is_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=t.is_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=t.domain_check_time_label,this.form.port=t.port,this.form.real_domain_expire_days=t.real_domain_expire_days,this.form.alias=t.alias,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.real_time_domain_expire_days=t.real_time_domain_expire_days,this.getICP()}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let o=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_info_id:this.row.id};(await this.$http.updateDomainInfoRowById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),o.close()},async getIpInfo(){let o={ip:this.form.ip};const e=await this.$http.getIpInfo(o);e.code==0&&(this.ipInfo=e.data)}},created(){this.getData()}},me={class:"domain-detail"},ce={class:"mo-form-detail grid grid-cols-2"},ue={class:"truncate"},_e={class:"truncate"},pe={class:"flex justify-between flex-1"},he={class:"truncate"},fe={class:"truncate"},ge={class:"truncate"},be={class:"mo-form-detail mt-[20px]"},we=["href"],ye={key:1},De={class:"truncate"},Ce={class:"text-center mt-md"};function xe(o,e,t,u,n,s){const m=l("el-link"),d=l("el-form-item"),p=l("el-form"),C=l("ExpireDays"),k=l("Refresh"),w=l("el-icon"),v=l("el-button");return h(),x("div",me,[c("div",ce,[i(p,{"label-width":"130px"},{default:a(()=>[i(d,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[i(m,{underline:!1},{default:a(()=>[b(_(n.form.domain),1)]),_:1})]),_:1}),i(d,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"create_time"},{default:a(()=>[c("span",null,_(n.form.domain_start_time||"-"),1)]),_:1}),i(d,{label:"\u5230\u671F\u65F6\u95F4",prop:"create_time"},{default:a(()=>[c("span",null,_(n.form.domain_expire_time||"-"),1)]),_:1}),i(d,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"isp"},{default:a(()=>[c("span",ue,_(n.form.domain_auto_update_label||"-"),1)]),_:1}),i(d,{label:"\u4E3B\u529E\u5355\u4F4D\u540D\u79F0",prop:"isp"},{default:a(()=>[c("span",_e,_(n.icpInfo.name||"-"),1)]),_:1})]),_:1}),i(p,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:a(()=>[i(d,{label:"\u8BC1\u4E66\u6570\u91CF",prop:"domain"},{default:a(()=>[c("span",null,_(n.form.ssl_count||"-"),1)]),_:1}),i(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:a(()=>[i(C,{value:n.form.real_domain_expire_days},null,8,["value"])]),_:1}),i(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:a(()=>[c("div",pe,[c("span",he,_(n.form.update_time_label||"-"),1),i(m,{underline:!1,type:"primary",class:"mr-sm",onClick:s.handleUpdateRowDomainInfo},{default:a(()=>[i(w,null,{default:a(()=>[i(k)]),_:1})]),_:1},8,["onClick"])])]),_:1}),i(d,{label:"\u5230\u671F\u63D0\u9192",prop:"isp"},{default:a(()=>[c("span",fe,_(n.form.domain_expire_monitor||"-"),1)]),_:1}),i(d,{label:"ICP\u5907\u6848",prop:"isp"},{default:a(()=>[c("span",ge,_(n.icpInfo.icp||"-"),1)]),_:1})]),_:1})]),c("div",be,[i(p,{"label-width":"130px"},{default:a(()=>[i(d,{label:"\u6CE8\u518C\u5546",prop:"domain_registrar"},{default:a(()=>[n.form.domain_registrar_url?(h(),x("a",{key:0,href:n.form.domain_registrar_url,target:"_blank",class:"mo-link"},_(n.form.domain_registrar),9,we)):(h(),x("span",ye,_(n.form.domain_registrar||"-"),1))]),_:1}),i(d,{label:"\u5907\u6CE8",prop:"comment"},{default:a(()=>[c("span",De,_(n.form.comment||"-"),1)]),_:1})]),_:1})]),c("div",Ce,[i(v,{type:"primary",onClick:s.handleCancel},{default:a(()=>[b("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const ke=D(de,[["render",xe]]),ve={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:ke},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function Se(o,e,t,u,n,s){const m=l("DataForm"),d=l("el-dialog");return h(),y(d,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:s.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>s.dialogVisible=p),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:s.handleDialogClose},{default:a(()=>[s.dialogVisible?(h(),y(m,{key:0,row:t.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):I("",!0)]),_:1},8,["modelValue","onClose"])}const Ie=D(ve,[["render",Se]]),Ve={name:"",components:{DataFormDialog:G,DataDetailDialog:Ie,ExpireDays:P,ExpireProgress:J,AddressListgDialog:W},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(o){this.currentRow=o,this.dialogVisible=!0},async handleDeleteClick(o){let e={domain_info_id:o.id};const t=await this.$http.deleteDomainInfoById(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleStatusChange(o){let e={id:o.id};const t=await this.$Http.function(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleMonitorStatusChange(o,e){let t={domain_info_id:o.id,field:"is_expire_monitor",value:e};const u=await this.$http.updateDomainInfoFieldById(t);u.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(u.msg)},async handleAutoUpdateStatusChange(o,e){let t={domain_info_id:o.id,field:"is_auto_update",value:e};const u=await this.$http.updateDomainInfoFieldById(t);u.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(u.msg)},async handleUpdateRowDomainInfo(o){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),t={domain_info_id:o.id};(await this.$http.updateDomainInfoRowById(t)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),e.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(o){this.currentRow=o,this.dialogDetailVisible=!0},handleShowAddressListgDialog(o){this.currentRow=o,this.AddressListgDialogVisible=!0},handleCertCountClick(o){let e=this.$router.resolve({name:"domain-list",query:{keyword:o.domain}});window.open(e.href,"_blank")},handleRefreshRow(o){this.$emit("on-refresh-row",o)}},created(){}},Re={key:1};function Oe(o,e,t,u,n,s){const m=l("el-table-column"),d=l("el-link"),p=l("ExpireDays"),C=l("el-switch"),k=l("Refresh"),w=l("el-icon"),v=l("Edit"),f=l("Delete"),V=l("el-popconfirm"),R=l("el-table"),O=l("DataFormDialog"),U=l("DataDetailDialog"),F=l("AddressListgDialog");return h(),x("div",null,[i(R,M({stripe:"",border:""},o.$attrs,{onSortChange:e[0]||(e[0]=r=>o.$emit("sort-change",r)),onSelectionChange:e[1]||(e[1]=r=>o.$emit("selection-change",r))}),{default:a(()=>[i(m,{type:"selection","header-align":"center",align:"center",width:"40"}),i(m,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"250","show-overflow-tooltip":"",prop:"domain"},{default:a(r=>[i(d,{underline:!1,onClick:g=>s.handleShowDetail(r.row)},{default:a(()=>[b(_(r.row.domain),1)]),_:2},1032,["onClick"])]),_:1}),i(m,{label:"\u57DF\u540D\u5929\u6570","header-align":"center",align:"center",width:"90",sortable:"custom",prop:"domain_expire_days"},{default:a(r=>[i(p,{value:r.row.real_domain_expire_days},null,8,["value"])]),_:1}),i(m,{label:"\u8BC1\u4E66\u6570\u91CF","header-align":"center",align:"center",width:"100"},{default:a(r=>[r.row.ssl_count&&r.row.ssl_count>0?(h(),y(d,{key:0,underline:!1,onClick:g=>s.handleCertCountClick(r.row)},{default:a(()=>[b(_(r.row.ssl_count),1)]),_:2},1032,["onClick"])):(h(),x("span",Re,"-"))]),_:1}),i(m,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:a(r=>[c("span",null,_(r.row.group_name||"-"),1)]),_:1}),i(m,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"comment","show-overflow-tooltip":""},{default:a(r=>[c("span",null,_(r.row.comment||"-"),1)]),_:1}),i(m,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"90",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:a(r=>[c("span",null,_(r.row.update_time_label||"-"),1)]),_:1}),i(m,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"domain_expire_monitor"},{default:a(r=>[i(C,{modelValue:r.row.is_auto_update,"onUpdate:modelValue":g=>r.row.is_auto_update=g,onChange:g=>s.handleAutoUpdateStatusChange(r.row,g)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),i(m,{label:"\u5230\u671F\u63D0\u9192",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"is_expire_monitor"},{default:a(r=>[i(C,{modelValue:r.row.is_expire_monitor,"onUpdate:modelValue":g=>r.row.is_expire_monitor=g,onChange:g=>s.handleMonitorStatusChange(r.row,g)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),i(m,{label:"\u64CD\u4F5C",width:"100","header-align":"center",align:"center"},{default:a(r=>[i(d,{underline:!1,type:"primary",class:"mr-sm",onClick:g=>s.handleUpdateRowDomainInfo(r.row)},{default:a(()=>[i(w,null,{default:a(()=>[i(k)]),_:1})]),_:2},1032,["onClick"]),i(d,{underline:!1,type:"primary",class:"mr-sm",onClick:g=>s.handleEditRow(r.row)},{default:a(()=>[i(w,null,{default:a(()=>[i(v)]),_:1})]),_:2},1032,["onClick"]),i(V,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:g=>s.handleDeleteClick(r.row)},{reference:a(()=>[i(d,{underline:!1,type:"danger"},{default:a(()=>[i(w,null,{default:a(()=>[i(f)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},16),i(O,{visible:n.dialogVisible,"onUpdate:visible":e[2]||(e[2]=r=>n.dialogVisible=r),row:n.currentRow,onOnSuccess:e[3]||(e[3]=r=>s.handleRefreshRow(n.currentRow))},null,8,["visible","row"]),i(U,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":e[4]||(e[4]=r=>n.dialogDetailVisible=r),onOnSuccess:e[5]||(e[5]=r=>s.handleRefreshRow(n.currentRow))},null,8,["row","visible"]),n.currentRow?(h(),y(F,{key:0,domainId:n.currentRow.id,visible:n.AddressListgDialogVisible,"onUpdate:visible":e[6]||(e[6]=r=>n.AddressListgDialogVisible=r),onOnSuccess:s.handleUpdateSuccess},null,8,["domainId","visible","onOnSuccess"])):I("",!0)])}const Ue=D(Ve,[["render",Oe]]),Fe={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,(await this.$http.updateDomainInfoOfUser()).code==0&&this.$msg.success("\u540E\u53F0\u66F4\u65B0\u4E2D\uFF0C\u5237\u65B0\u67E5\u770B")}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Be(o,e,t,u,n,s){const m=l("Refresh"),d=l("el-icon"),p=l("el-link");return h(),y(p,{underline:!1,type:"primary",onClick:s.updateAllDomainCertInfoOfUser,disabled:s.disableUpdateButton},{default:a(()=>[i(d,null,{default:a(()=>[i(m)]),_:1}),b(_(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Te=D(Fe,[["render",Be]]),$e={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u57DF\u540D\u68C0\u67E5"}},methods:{async handleNotifyByEventId(){const o=await this.$http.handleNotifyByEventId({event_id:H.DOMAIN_EXPIRE});o.ok&&this.$msg.success(`\u6210\u529F\u6E20\u9053\uFF1A${o.data.success}`)}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Ee(o,e,t,u,n,s){const m=l("Position"),d=l("el-icon"),p=l("el-link");return h(),y(p,{underline:!1,type:"primary",onClick:s.handleNotifyByEventId,disabled:s.disableUpdateButton},{default:a(()=>[i(d,null,{default:a(()=>[i(m)]),_:1}),b(_(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Ae=D($e,[["render",Ee]]),ze={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:Z},data(){return{loading:!0,options:[{title:"\u57DF\u540D\u72B6\u6001",field:"domain_expire_days",selected:[],maxCount:1,options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!0,selected:[],options:[]}]}},computed:{...z(B,{groupOptions:"getGroupOptions"})},methods:{async resetData(){const o=await this.$http.getDomainInfoGroupFilter();o.ok&&this.options.forEach(e=>{e.field=="group_ids"&&(o.data.list&&o.data.list.length>0?(e.options=o.data.list.map(t=>{let u=t.name;return t.domain_count>0&&(u=`${t.name} ${t.domain_count}`),{...t,value:t.id,label:u}}),e.hidden=!1):e.hidden=!0)}),this.loading=!1},handleChange(o){this.$emit("on-change",this.options)}},created(){this.resetData()}},Pe={class:""};function Ge(o,e,t,u,n,s){const m=l("ConditionFilterGroup"),d=T("loading");return $((h(),x("div",Pe,[i(m,{options:n.options,onOnChange:s.handleChange},null,8,["options","onOnChange"])])),[[d,n.loading]])}const Le=D(ze,[["render",Ge]]),Ne={name:"domain-list",props:{},components:{DataFormDialog:G,DataTable:Ue,SelectGroup:A,UpdateDomainInfo:Te,CheckDomainInfo:Ae,ConditionFilter:Le},data(){return{dataApi:E,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:Y(E.exportDomainToFile),order_type:"ascending",order_prop:"domain_expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...z(B,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...K(B,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let o={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop};for(let t of this.ConditionFilterParams)t.selected&&t.selected.length>0&&(t.maxCount==1?o[t.field]=t.selected[0]:o[t.field]=t.selected);const e=await this.$http.getDomainInfoList(o);e.code==0?(this.list=e.data.list,this.total=e.data.total):this.$msg.error(e.msg),this.loading=!1},getGroupName(o){let e=this.groupOptions.find(t=>t.value==o);if(e)return e.name},async handleHttpRequest(o){let e=this.$loading({fullscreen:!0}),t=new FormData;t.append("file",o.file),(await this.$http.importDomainInFromFile(t)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData(),this.$refs.ConditionFilter&&this.$refs.ConditionFilter.resetData(),this.updateGroupOptions()),e.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const o=await this.$http.exportDomainInfoFile();o.ok&&ee.saveAs(o.data.url,o.data.name)},handleSearch(){this.resetData()},handleSizeChange(o){localStorage.setItem(this.pageSizeCachekey,o),this.resetData()},loadPageSize(){let o=localStorage.getItem(this.pageSizeCachekey);o&&(this.size=parseInt(o))},handleExceed(o){this.$refs.upload.clearFiles();const e=o[0];e.uid=te(),this.handleHttpRequest({file:e})},handleSortChange({column:o,prop:e,order:t}){console.log(o,e,t),this.order_prop="",this.order_type="",t&&(this.order_type=t,this.order_prop=e),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(o){this.selectedRows=o},handleConditionFilterChange(o){console.log(o),this.ConditionFilterParams=o,this.resetData()},async handleBatchDeleteConfirm(){let o=this.$loading({fullscreen:!0}),e={domain_info_ids:this.selectedRows.map(t=>t.id)};try{const t=await this.$http.deleteDomainInfoByIds(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(t.msg)}catch(t){console.log(t)}finally{this.$nextTick(()=>{o.close()})}},async handleRefreshRow(o){let e={domain_info_id:o.id};const t=await this.$http.getDomainInfoById(e);if(t.ok){let u=this.list.findIndex(n=>n.id==o.id);this.list.splice(u,1,t.data),console.log(this.list)}}},created(){this.initData()}},je={class:"app-container"},qe={class:"flex",style:{"justify-content":"space-between"}},He={class:"flex mt-sm",style:{"align-items":"center"}},Ye={style:{"font-size":"14px",color:"#333333"}},Me={class:"flex",style:{"margin-left":"auto"}},Ke=c("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function Qe(o,e,t,u,n,s){const m=l("Plus"),d=l("el-icon"),p=l("el-button"),C=l("Search"),k=l("el-input"),w=l("ConditionFilter"),v=l("Delete"),f=l("el-link"),V=l("el-popconfirm"),R=l("UpdateDomainInfo"),O=l("CheckDomainInfo"),U=l("Upload"),F=l("el-upload"),r=l("Download"),g=l("DataTable"),L=l("el-pagination"),N=l("DataFormDialog"),j=T("loading");return h(),x("div",je,[c("div",qe,[i(p,{type:"primary",onClick:s.handleAddRow},{default:a(()=>[i(d,null,{default:a(()=>[i(m)]),_:1}),b("\u6DFB\u52A0")]),_:1},8,["onClick"]),i(k,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":e[0]||(e[0]=S=>n.keyword=S),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:Q(s.handleSearch,["enter"]),onClear:s.handleSearch},{append:a(()=>[i(p,{onClick:s.handleSearch},{default:a(()=>[i(d,null,{default:a(()=>[i(C)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),n.hasInitData?(h(),y(w,{key:0,class:"mt-md",ref:"ConditionFilter",onOnChange:s.handleConditionFilterChange},null,8,["onOnChange"])):I("",!0),c("div",He,[c("div",Ye,"\u5171\u8BA1 "+_(n.total)+" \u6761\u6570\u636E",1),c("div",Me,[s.showBatchDeleteButton?(h(),y(V,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:s.handleBatchDeleteConfirm},{reference:a(()=>[i(f,{underline:!1,type:"danger",class:"mr-sm"},{default:a(()=>[i(d,null,{default:a(()=>[i(v)]),_:1}),b("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):I("",!0),i(R,{onOnSuccess:s.resetData},null,8,["onOnSuccess"]),i(O,{class:"ml-sm",onOnSuccess:s.resetData},null,8,["onOnSuccess"]),i(f,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:a(()=>[i(d,null,{default:a(()=>[i(U)]),_:1}),b("\u5BFC\u5165 "),i(F,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":s.handleExceed,"show-file-list":!1,"http-request":s.handleHttpRequest},{default:a(()=>[Ke]),_:1},8,["on-exceed","http-request"])]),_:1}),i(f,{underline:!1,type:"primary",class:"ml-sm",onClick:s.handleExportToFile},{default:a(()=>[i(d,null,{default:a(()=>[i(r)]),_:1}),b("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),$(i(g,{class:"mt-sm",data:n.list,onOnSuccess:s.resetData,onSortChange:s.handleSortChange,onSelectionChange:s.handleSelectionChange,onOnRefreshRow:s.handleRefreshRow},null,8,["data","onOnSuccess","onSortChange","onSelectionChange","onOnRefreshRow"]),[[j,n.loading]]),i(L,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:pageSize":e[1]||(e[1]=S=>n.size=S),"current-page":n.page,"onUpdate:currentPage":e[2]||(e[2]=S=>n.page=S),onCurrentChange:s.getData,onSizeChange:s.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),i(N,{visible:n.dialogVisible,"onUpdate:visible":e[3]||(e[3]=S=>n.dialogVisible=S),onOnSuccess:s.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const nt=D(Ne,[["render",Qe]]);export{nt as default};