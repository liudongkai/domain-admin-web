import{S as K,u as j}from"./SelectGroup.f0a78a9f.js";import{_ as C,d as q,r as Z}from"./index.d808c56f.js";import{a5 as s,ak as F,S as T,o as m,c as y,X as e,R as o,a as c,Z as b,Q as D,V as x,L as $,W as f,O as N,am as J,F as U,a8 as A,ay as L,az as ee,aa as te}from"./vendor-vue.e07d7f7e.js";import{C as W}from"./ConnectStatus.70402c67.js";import{d as Y,a as ne}from"./element-plus.0d508af4.js";import{F as ie}from"./vendor-lib.f93a8f58.js";import"./element-icon.bb5f2c38.js";const le={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},oe={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:K},data(){return{loading:!1,rules:le,form:{domain:"",alias:"",group_id:""}}},computed:{},methods:{async getData(){if(this.loading=!0,this.row){let t={id:this.row.id},i=(await this.$http.getDomainById(t)).data;this.form.domain=i.domain,this.form.alias=i.alias,this.form.group_id=i.group_id,this.form.group_id==0&&(this.form.group_id="")}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),n={domain:this.form.domain.trim(),alias:this.form.alias.trim(),group_id:this.form.group_id},i=null;this.row?(n.id=this.row.id,i=await this.$http.updateDomainById(n)):i=await this.$http.addDomain(n),i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg),this.$nextTick(()=>{t.close()})}},created(){this.getData()}},ae={class:"text-center"};function se(t,n,i,g,a,l){const d=s("el-input"),r=s("el-form-item"),_=s("SelectGroup"),h=s("el-form"),w=s("el-button"),v=F("loading");return T((m(),y("div",null,[e(h,{ref:"form",model:a.form,rules:a.rules,"label-width":"80px"},{default:o(()=>[e(r,{label:"\u57DF\u540D",prop:"domain"},{default:o(()=>[e(d,{type:"text",modelValue:a.form.domain,"onUpdate:modelValue":n[0]||(n[0]=p=>a.form.domain=p),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5206\u7EC4",prop:"group_id"},{default:o(()=>[e(_,{class:"w-[150px]",modelValue:a.form.group_id,"onUpdate:modelValue":n[1]||(n[1]=p=>a.form.group_id=p),clearable:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5907\u6CE8",prop:"alias"},{default:o(()=>[e(d,{type:"textarea",modelValue:a.form.alias,"onUpdate:modelValue":n[2]||(n[2]=p=>a.form.alias=p),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),c("div",ae,[e(w,{onClick:l.handleCancel},{default:o(()=>[b("\u53D6 \u6D88")]),_:1},8,["onClick"]),e(w,{type:"primary",onClick:l.handleSubmit},{default:o(()=>[b("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[v,a.loading]])}const re=C(oe,[["render",se]]),de={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:re},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function ce(t,n,i,g,a,l){const d=s("DataForm"),r=s("el-dialog");return m(),D(r,{title:l.dialogTitle,modelValue:l.dialogVisible,"onUpdate:modelValue":n[0]||(n[0]=_=>l.dialogVisible=_),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:o(()=>[l.dialogVisible?(m(),D(d,{key:0,row:i.row,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):x("",!0)]),_:1},8,["title","modelValue"])}const Q=C(de,[["render",ce]]);const ue={name:"ExpiredDays",props:{value:{type:Number,default:null}},components:{},data(){return{}},computed:{showValue(){return Number.isInteger(this.value)},className(){return this.showValue?this.value<7?["color--danger"]:this.value<30?["color--warning"]:["color--success"]:[]}},methods:{async getData(){}},created(){this.getData()}},me={class:"ExpireDays"},_e={key:1};function pe(t,n,i,g,a,l){return m(),y("div",me,[l.showValue?(m(),y("span",{key:0,class:$(l.className)},f(i.value),3)):(m(),y("span",_e,"-"))])}const X=C(ue,[["render",pe]]),he={name:"",props:{row:{type:Object,default:null}},components:{ConnectStatus:W,ExpireDays:X},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}},real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:""},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let t={id:this.row.id};const n=await this.$http.getDomainById(t);if(n.code!=0)return;let i=n.data;this.form.domain=i.domain,this.form.domain_url=i.domain_url,this.form.ip=i.ip,this.form.start_time=i.start_time,this.form.expire_time=i.expire_time,this.form.check_time=i.check_time,this.form.connect_status=i.connect_status,this.form.total_days=i.total_days,this.form.expire_days=i.expire_days,this.form.real_time_expire_days=i.real_time_expire_days,this.form.create_time=i.create_time,this.form.update_time=i.update_time,this.form.alias=i.alias,this.form.domain_start_time=i.domain_start_time,this.form.domain_expire_time=i.domain_expire_time,this.form.real_time_domain_expire_days=i.real_time_domain_expire_days,this.form.detail={issuer:i.detail.issuer||{},subject:i.detail.subject||{}}}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let t=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),n={id:this.row.id};(await this.$http.updateDomainCertInfoById(n)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),t.close()},async getIpInfo(){let t={ip:this.form.ip};const n=await this.$http.getIpInfo(t);n.code==0&&(this.ipInfo=n.data)}},created(){this.getData()}},fe={class:"domain-detail"},ge={class:"mo-form-detail grid grid-cols-2 mt-sm"},ye={class:"flex justify-between flex-1"},be=c("span",null," \u66F4\u65B0",-1),De={class:"mo-form-detail",style:{"margin-top":"20px"}},Ce={class:"truncate"},we={class:"text-center mt-md"};function xe(t,n,i,g,a,l){const d=s("el-link"),r=s("el-form-item"),_=s("ExpireDays"),h=s("el-form"),w=s("ConnectStatus"),v=s("Refresh"),p=s("el-icon"),V=s("el-button");return m(),y("div",fe,[c("div",ge,[e(h,{ref:"form",model:a.form,"label-width":"130px"},{default:o(()=>[e(r,{label:"\u57DF\u540D",prop:"domain"},{default:o(()=>[e(d,{underline:!1,href:a.form.domain_url,target:"_blank"},{default:o(()=>[b(f(a.form.domain),1)]),_:1},8,["href"])]),_:1}),e(r,{label:"ip",prop:"ip"},{default:o(()=>[c("span",null,f(a.form.ip||"-"),1)]),_:1}),e(r,{label:"\u57DF\u540D\u6CE8\u518C\u65F6\u95F4",prop:"create_time"},{default:o(()=>[c("span",null,f(a.form.domain_start_time||"-"),1)]),_:1}),e(r,{label:"\u57DF\u540D\u5230\u671F\u65F6\u95F4",prop:"create_time"},{default:o(()=>[c("span",null,f(a.form.domain_expire_time||"-"),1)]),_:1}),e(r,{label:"\u57DF\u540D\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:o(()=>[e(_,{value:a.form.real_time_domain_expire_days},null,8,["value"])]),_:1}),e(r,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time"},{default:o(()=>[c("span",null,f(a.form.create_time||"-"),1)]),_:1})]),_:1},8,["model"]),e(h,{ref:"form",model:a.form,"label-width":"130px"},{default:o(()=>[e(r,{label:"\u57DF\u540D\u8FDE\u63A5\u72B6\u6001",prop:"connect_status"},{default:o(()=>[e(w,{value:a.form.connect_status},null,8,["value"])]),_:1}),e(r,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"check_time"},{default:o(()=>[c("div",ye,[c("span",null,f(a.form.check_time||"-"),1),e(d,{underline:!1,type:"primary",onClick:l.handleUpdateRowDomainInfo},{default:o(()=>[e(p,null,{default:o(()=>[e(v)]),_:1}),be]),_:1},8,["onClick"])])]),_:1}),e(r,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"start_time"},{default:o(()=>[c("span",null,f(a.form.start_time||"-"),1)]),_:1}),e(r,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"expire_time"},{default:o(()=>[c("span",null,f(a.form.expire_time||"-"),1)]),_:1}),e(r,{label:"\u8FC7\u671F\u5269\u4F59\u5929\u6570",prop:"real_time_expire_days"},{default:o(()=>[e(_,{value:a.form.real_time_expire_days},null,8,["value"])]),_:1}),e(r,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"create_time"},{default:o(()=>[c("span",null,f(a.form.update_time||"-"),1)]),_:1})]),_:1},8,["model"])]),c("div",De,[e(h,{"label-width":"130px"},{default:o(()=>[e(r,{label:"\u5907\u6CE8",prop:"isp"},{default:o(()=>[c("span",Ce,f(a.form.alias||"-"),1)]),_:1})]),_:1})]),c("div",we,[e(V,{type:"primary",onClick:l.handleCancel},{default:o(()=>[b("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const ve=C(he,[["render",xe]]),Se={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:ve},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function ke(t,n,i,g,a,l){const d=s("DataForm"),r=s("el-dialog");return m(),D(r,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:l.dialogVisible,"onUpdate:modelValue":n[0]||(n[0]=_=>l.dialogVisible=_),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:l.handleDialogClose},{default:o(()=>[l.dialogVisible?(m(),D(d,{key:0,row:i.row,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):x("",!0)]),_:1},8,["modelValue","onClose"])}const Ve=C(Se,[["render",ke]]);const Oe={name:"ExpireProgress",props:{startTime:{type:String},endTime:{type:String},isManual:{type:Boolean}},components:{},data(){return{nowTime:Y()}},computed:{parsedStartTime(){return Y(this.startTime)},parsedEndTime(){return Y(this.endTime)},totalDays(){return this.parsedEndTime.diff(this.parsedStartTime,"day")},expireDays(){return this.parsedEndTime.diff(this.nowTime,"day")},percentage(){let t=null;return this.expireDays&&this.totalDays&&(t=this.expireDays/this.totalDays*100),t},percentageStatus(){let t;return this.expireDays>=30?t="":this.expireDays>=3?t="warning":t="exception",t}},methods:{async getData(){}},created(){this.getData()}},Ue={class:"ExpireProgress"},$e={class:"ExpireProgress__info"},Fe={class:"el-text-color-primary"},Te=c("span",null," / ",-1),Ie={class:"el-text-color-secondary"};function Re(t,n,i,g,a,l){const d=s("el-progress"),r=s("el-tag");return m(),y("div",Ue,[l.percentage?(m(),D(d,{key:0,percentage:l.percentage,"show-text":!1,status:l.percentageStatus},null,8,["percentage","status"])):x("",!0),c("div",$e,[c("span",Fe,f(l.expireDays||"-"),1),Te,c("span",Ie,f(l.totalDays||"-"),1),i.isManual?(m(),D(r,{key:0,type:"info",class:"mo-table-tag ml-[1px]",size:"small"},{default:o(()=>[b("\u624B\u52A8")]),_:1})):x("",!0)])])}const Be=C(Oe,[["render",Re]]),Ee={},ze={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:K},data(){return{loading:!1,rules:Ee,form:{domain_start_time:"",domain_expire_time:"",domain_auto_update:!0,start_time:"",expire_time:"",auto_update:!0}}},computed:{},methods:{async getData(){if(this.loading=!0,this.row){let t={id:this.row.id};const n=await this.$http.getDomainById(t);this.form=n.data}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),n={domain_start_time:this.form.domain_start_time,domain_expire_time:this.form.domain_expire_time,domain_auto_update:this.form.domain_auto_update,start_time:this.form.start_time,expire_time:this.form.expire_time,auto_update:this.form.auto_update,domain_id:this.row.id},i=await this.$http.updateDomainSetting(n);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg),this.$nextTick(()=>{t.close()})}},created(){this.getData()}},Me=c("div",{class:"text-[12px] color--info"}," \u63D0\u793A\uFF1A\u5982\u9700\u624B\u52A8\u8BBE\u7F6E\uFF0C\u8BF7\u5173\u95ED\u81EA\u52A8\u66F4\u65B0 ",-1),Ge={class:"text-center mt-md"};function Pe(t,n,i,g,a,l){const d=s("el-date-picker"),r=s("el-form-item"),_=s("el-switch"),h=s("el-form"),w=s("el-button"),v=F("loading");return T((m(),y("div",null,[e(h,{ref:"form",model:a.form,rules:a.rules,"label-width":"100px"},{default:o(()=>[e(r,{label:"\u57DF\u540D\u6CE8\u518C\u65F6\u95F4",prop:"domain_start_time"},{default:o(()=>[e(d,{modelValue:a.form.domain_start_time,"onUpdate:modelValue":n[0]||(n[0]=p=>a.form.domain_start_time=p),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u57DF\u540D\u6CE8\u518C\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u57DF\u540D\u5230\u671F\u65F6\u95F4",prop:"domain_expire_time"},{default:o(()=>[e(d,{modelValue:a.form.domain_expire_time,"onUpdate:modelValue":n[1]||(n[1]=p=>a.form.domain_expire_time=p),"value-format":"YYYY-MM-DD HH:mm:ss",type:"date",placeholder:"\u57DF\u540D\u5230\u671F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u57DF\u540D\u81EA\u52A8\u66F4\u65B0",prop:"domain_auto_update"},{default:o(()=>[e(_,{modelValue:a.form.domain_auto_update,"onUpdate:modelValue":n[2]||(n[2]=p=>a.form.domain_auto_update=p)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"start_time"},{default:o(()=>[e(d,{modelValue:a.form.start_time,"onUpdate:modelValue":n[3]||(n[3]=p=>a.form.start_time=p),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"expire_time"},{default:o(()=>[e(d,{modelValue:a.form.expire_time,"onUpdate:modelValue":n[4]||(n[4]=p=>a.form.expire_time=p),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8BC1\u4E66\u81EA\u52A8\u66F4\u65B0",prop:"auto_update"},{default:o(()=>[e(_,{modelValue:a.form.auto_update,"onUpdate:modelValue":n[5]||(n[5]=p=>a.form.auto_update=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),Me,c("div",Ge,[e(w,{onClick:l.handleCancel},{default:o(()=>[b("\u53D6 \u6D88")]),_:1},8,["onClick"]),e(w,{type:"primary",onClick:l.handleSubmit},{default:o(()=>[b("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[v,a.loading]])}const He=C(ze,[["render",Pe]]),Ye={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DomainSettingForm:He},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function je(t,n,i,g,a,l){const d=s("DomainSettingForm"),r=s("el-dialog");return m(),D(r,{title:"\u57DF\u540D\u8BBE\u7F6E",modelValue:l.dialogVisible,"onUpdate:modelValue":n[0]||(n[0]=_=>l.dialogVisible=_),width:"380px",center:"","append-to-body":"","lock-scroll":!1},{default:o(()=>[l.dialogVisible?(m(),D(d,{key:0,row:i.row,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):x("",!0)]),_:1},8,["modelValue"])}const Ae=C(Ye,[["render",je]]),Ke={name:"",components:{DataFormDialog:Q,DataDetailDialog:Ve,ConnectStatus:W,ExpireDays:X,ExpireProgress:Be,DomainSettingDialog:Ae},emits:["on-success"],props:{},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,DomainSettingDialogVisible:!1}},methods:{handleEditRow(t){this.currentRow=t,this.dialogVisible=!0},async handleDeleteClick(t){let n={id:t.id};const i=await this.$http.deleteDomainById(n);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg)},async handleStatusChange(t){let n={id:t.id};const i=await this.$Http.function(n);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg)},async handleMonitorStatusChange(t,n){let i={id:t.id,is_monitor:n};const g=await this.$http.updateDomainById(i);g.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(g.msg)},async handleUpdateRowDomainInfo(t){let n=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),i={id:t.id};(await this.$http.updateDomainCertInfoById(i)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),n.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(t){this.currentRow=t,this.dialogDetailVisible=!0},handleDomainSettingDialogShow(t){this.currentRow=t,this.DomainSettingDialogVisible=!0}},created(){}};function Ne(t,n,i,g,a,l){const d=s("el-table-column"),r=s("el-link"),_=s("el-tooltip"),h=s("ExpireDays"),w=s("el-tag"),v=s("ExpireProgress"),p=s("ConnectStatus"),V=s("el-switch"),I=s("Tickets"),O=s("el-icon"),R=s("Refresh"),B=s("Setting"),E=s("Edit"),z=s("Delete"),M=s("el-popconfirm"),G=s("el-table"),P=s("DataFormDialog"),H=s("DataDetailDialog"),S=s("DomainSettingDialog");return m(),y("div",null,[e(G,N({stripe:"",border:""},t.$attrs,J(t.$events)),{default:o(()=>[e(d,{type:"selection",width:"40"}),e(d,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"180","show-overflow-tooltip":"",prop:"domain"},{default:o(u=>[e(_,{disabled:!u.row.alias,content:u.row.alias},{default:o(()=>[e(r,{underline:!1,href:u.row.domain_url,target:"_blank"},{default:o(()=>[b(f(u.row.domain),1)]),_:2},1032,["href"])]),_:2},1032,["disabled","content"])]),_:1}),e(d,{label:"\u57DF\u540D\u5929\u6570","header-align":"center",align:"center",width:"110",sortable:"custom",prop:"domain_expire_days"},{default:o(u=>[e(h,{value:u.row.real_time_domain_expire_days},null,8,["value"]),u.row.domain_auto_update?x("",!0):(m(),D(w,{key:0,class:"ml-[5px] mo-table-tag",type:"info",size:"small"},{default:o(()=>[b("\u624B\u52A8")]),_:1}))]),_:1}),e(d,{label:"\u8BC1\u4E66\u5929\u6570","header-align":"center",align:"center",width:"120",sortable:"custom",prop:"expire_days"},{default:o(u=>[e(v,{startTime:u.row.start_time,endTime:u.row.expire_time,isManual:!u.row.auto_update},null,8,["startTime","endTime","isManual"])]),_:1}),e(d,{label:"\u72B6\u6001","header-align":"center",align:"center",width:"60",prop:"connect_status"},{default:o(u=>[e(p,{value:u.row.connect_status},null,8,["value"])]),_:1}),e(d,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",prop:"check_time"},{default:o(u=>[c("span",null,f(u.row.group_name||"-"),1)]),_:1}),e(d,{label:"\u5907\u6CE8","header-align":"center",align:"center",prop:"check_time","show-overflow-tooltip":""},{default:o(u=>[c("span",null,f(u.row.alias||"-"),1)]),_:1}),e(d,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"100",prop:"check_time","show-overflow-tooltip":""},{default:o(u=>[c("span",null,f(u.row.update_time_label||"-"),1)]),_:1}),e(d,{label:"\u76D1\u6D4B",width:"66","header-align":"center",align:"center"},{default:o(u=>[e(V,{style:{transform:"scale(0.8)"},modelValue:u.row.is_monitor,"onUpdate:modelValue":k=>u.row.is_monitor=k,onChange:k=>l.handleMonitorStatusChange(u.row,k)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),e(d,{label:"\u64CD\u4F5C",width:"140","header-align":"center",align:"center"},{default:o(u=>[e(r,{underline:!1,type:"primary",class:"mr-sm",onClick:k=>l.handleShowDetail(u.row)},{default:o(()=>[e(O,null,{default:o(()=>[e(I)]),_:1})]),_:2},1032,["onClick"]),e(r,{underline:!1,type:"primary",class:"mr-sm",onClick:k=>l.handleUpdateRowDomainInfo(u.row)},{default:o(()=>[e(O,null,{default:o(()=>[e(R)]),_:1})]),_:2},1032,["onClick"]),e(r,{underline:!1,type:"primary",class:"mr-sm",onClick:k=>l.handleDomainSettingDialogShow(u.row)},{default:o(()=>[e(O,null,{default:o(()=>[e(B)]),_:1})]),_:2},1032,["onClick"]),e(r,{underline:!1,type:"primary",class:"mr-sm",onClick:k=>l.handleEditRow(u.row)},{default:o(()=>[e(O,null,{default:o(()=>[e(E)]),_:1})]),_:2},1032,["onClick"]),e(M,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:k=>l.handleDeleteClick(u.row)},{reference:o(()=>[e(r,{underline:!1,type:"danger"},{default:o(()=>[e(O,null,{default:o(()=>[e(z)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},16),e(P,{visible:a.dialogVisible,"onUpdate:visible":n[0]||(n[0]=u=>a.dialogVisible=u),row:a.currentRow,onOnSuccess:l.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"]),e(H,{row:a.currentRow,visible:a.dialogDetailVisible,"onUpdate:visible":n[1]||(n[1]=u=>a.dialogDetailVisible=u),onOnSuccess:l.handleDetailSuccess},null,8,["row","visible","onOnSuccess"]),e(S,{row:a.currentRow,visible:a.DomainSettingDialogVisible,"onUpdate:visible":n[2]||(n[2]=u=>a.DomainSettingDialogVisible=u),onOnSuccess:l.handleUpdateSuccess},null,8,["row","visible","onOnSuccess"])])}const qe=C(Ke,[["render",Ne]]),Le={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=setInterval(()=>{this.getUpdateDomainStatusOfUser()},2e3),(await this.$http.updateAllDomainCertInfoOfUser()).code==0&&this.$msg.success("\u64CD\u4F5C\u6210\u529F")},async getUpdateDomainStatusOfUser(){const t=await this.$http.getUpdateDomainStatusOfUser();t.ok&&t.data.status==!1&&(clearInterval(this.updateTimer),this.updateTimer=null,this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function We(t,n,i,g,a,l){const d=s("Refresh"),r=s("el-icon"),_=s("el-link");return m(),D(_,{underline:!1,type:"primary",onClick:l.updateAllDomainCertInfoOfUser,disabled:l.disableUpdateButton},{default:o(()=>[e(r,null,{default:o(()=>[e(d)]),_:1}),b(f(l.updateText),1)]),_:1},8,["onClick","disabled"])}const Qe=C(Le,[["render",We]]),Xe={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u8BC1\u4E66\u68C0\u67E5"}},methods:{async checkDomainCert(){this.updateTimer=setInterval(()=>{this.getUpdateDomainStatusOfUser()},2e3),(await this.$http.checkDomainCert()).ok&&this.$msg.success("\u64CD\u4F5C\u6210\u529F")},async getUpdateDomainStatusOfUser(){const t=await this.$http.getCheckDomainStatusOfUser();t.ok&&t.data.status==!1&&(clearInterval(this.updateTimer),this.updateTimer=null,this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Ze(t,n,i,g,a,l){const d=s("Position"),r=s("el-icon"),_=s("el-link");return m(),D(_,{underline:!1,type:"primary",onClick:l.checkDomainCert,disabled:l.disableUpdateButton},{default:o(()=>[e(r,null,{default:o(()=>[e(d)]),_:1}),b(f(l.updateText),1)]),_:1},8,["onClick","disabled"])}const Je=C(Xe,[["render",Ze]]);const et={name:"ConditionFilter",props:{title:{type:String},field:{type:String},options:{type:Array},selected:{type:Array,default:()=>[]},maxCount:{type:Number,default:0},labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},level:{type:Number,default:0}},components:{},data(){return{childrenKey:0,showMoreButton:!1,hiddenMore:!0,itemTagHeight:20}},computed:{selectedIsEmpty(){return this.selected.length==0}},methods:{async getData(){},handleClear(){this.selected.splice(0,this.selected.length),this.handleChange()},handleClick(t){let n=this.selected.findIndex(i=>t[this.valueKey]==i);n>-1?this.selected.splice(n,1):(this.maxCount==1&&this.selected.splice(0,this.selected.length),this.selected.push(t[this.valueKey])),this.childrenKey++,this.handleChange()},handleChange(){this.$emit("on-change",{selected:this.selected,title:this.title,field:this.field,options:this.options})},handleChildrenChange(t){this.$emit("on-change",t)},handleMoreClick(){this.hiddenMore=!this.hiddenMore},handleWindowResize(){!this.$refs["condition-item__list"]||(this.$refs["condition-item__list"].clientHeight>this.itemTagHeight?(this.showMoreButton=!0,this.selected&&this.selected.length>0?this.hiddenMore=!1:this.hiddenMore=!0):(this.hiddenMore=!1,this.showMoreButton=!1))}},mounted(){},created(){this.getData()}},tt={class:"condition-filter"},nt={key:0,class:"condition-filter__title"},it={class:"condition-filter__list-wrap"},lt={class:"condition-item__list-box"},ot={class:"condition-item__list",ref:"condition-item__list"},at=["onClick"],st={class:"condition-filter__tag__close"},rt={class:"condition-filter__children"};function dt(t,n,i,g,a,l){const d=s("Close"),r=s("el-icon"),_=s("ConditionFilter");return m(),y("div",tt,[i.title?(m(),y("div",nt,f(i.title),1)):x("",!0),c("div",{class:$(["condition-filter__tag condition-filter__clear",{"condition-filter__tag--seleted":l.selectedIsEmpty}]),onClick:n[0]||(n[0]=(...h)=>l.handleClear&&l.handleClear(...h))}," \u4E0D\u9650 ",2),c("div",it,[c("div",lt,[c("div",{class:$({"condition-item__list--overflow":a.hiddenMore})},[c("div",ot,[(m(!0),y(U,null,A(i.options,h=>(m(),y("div",{class:$(["condition-filter__tag",{"condition-filter__tag--seleted":i.selected.indexOf(h[i.valueKey])>-1}]),onClick:w=>l.handleClick(h)},[c("span",null,f(h[i.labelKey]),1),c("span",st,[e(r,null,{default:o(()=>[e(d)]),_:1})])],10,at))),256))],512)],2)]),c("div",rt,[(m(!0),y(U,null,A(i.options,h=>(m(),y(U,null,[i.selected.indexOf(h[i.valueKey])>-1&&h.child?(m(),D(_,N({key:0,key:a.childrenKey,class:"condition-filter__child",ref_for:!0,ref:"child"},h.child,{level:h.level||i.level+1,onOnChange:l.handleChildrenChange}),null,16,["level","onOnChange"])):x("",!0)],64))),256))])])])}const ct=C(et,[["render",dt]]);const ut={name:"ConditionFilterGroup",props:{options:{type:Array}},components:{ConditionFilterRow:ct},data(){return{}},computed:{},methods:{async getData(){},handleChange(t){console.log(t),this.$emit("on-change",t)}},created(){this.getData()}},mt={class:"ConditionFilterGroup"};function _t(t,n,i,g,a,l){const d=s("ConditionFilterRow");return m(),y("div",mt,[(m(!0),y(U,null,A(i.options,r=>(m(),y(U,null,[r.hidden?x("",!0):(m(),D(d,N({key:0,class:"ConditionFilterGroup__row"},r,{onOnChange:l.handleChange}),null,16,["onOnChange"]))],64))),256))])}const pt=C(ut,[["render",_t]]),ht={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:pt},data(){return{loading:!0,options:[{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!1,selected:[],options:[]},{title:"\u57DF\u540D\u72B6\u6001",field:"domain_expire_days",selected:[],maxCount:1,options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u8BC1\u4E66\u72B6\u6001",maxCount:1,field:"expire_days",selected:[],options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u7F51\u7AD9\u72B6\u6001",field:"connect_status",selected:[],maxCount:1,options:[{label:"\u8FDE\u63A5\u5F02\u5E38",value:"error"},{label:"\u8FDE\u63A5\u6B63\u5E38",value:"success"},{label:"\u72B6\u6001\u672A\u77E5",value:"unknown"}]}]}},computed:{...L(j,{groupOptions:"getGroupOptions"})},methods:{async getData(){this.options.map(t=>{t.field=="group_ids"&&(this.groupOptions&&this.groupOptions.length>0?t.options=[...this.groupOptions.map(n=>{let i=n.name;return n.domain_count>0&&(i=`${n.name} ${n.domain_count}`),{...n,value:n.id,label:i}}),{label:"\u672A\u5206\u7EC4",value:0}]:t.hidden=!0)}),this.loading=!1},handleChange(t){this.$emit("on-change",this.options)}},created(){this.getData()}},ft={class:""};function gt(t,n,i,g,a,l){const d=s("ConditionFilterGroup"),r=F("loading");return T((m(),y("div",ft,[e(d,{options:a.options,onOnChange:l.handleChange},null,8,["options","onOnChange"])])),[[r,a.loading]])}const yt=C(ht,[["render",gt]]),bt={name:"domain-list",props:{},components:{DataFormDialog:Q,DataTable:qe,SelectGroup:K,UpdateDomainInfo:Qe,CheckDomainInfo:Je,ConditionFilter:yt},data(){return{dataApi:q,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:Z(q.exportDomainToFile),order_type:"ascending",order_prop:"expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...L(j,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...ee(j,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let t={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop};for(let i of this.ConditionFilterParams)i.selected&&i.selected.length>0&&(i.maxCount==1?t[i.field]=i.selected[0]:t[i.field]=i.selected);const n=await this.$http.getDomainList(t);n.code==0?(this.list=n.data.list.map(i=>(i.group_id&&(i.group_name=this.getGroupName(i.group_id)),i)),this.total=n.data.total):this.$msg.error(n.msg),this.loading=!1},getGroupName(t){let n=this.groupOptions.find(i=>i.value==t);if(n)return n.name},async handleHttpRequest(t){let n=this.$loading({fullscreen:!0}),i=new FormData;i.append("file",t.file),(await this.$http.importDomainFromFile(i)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData()),n.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const t=await this.$http.exportDomainFile();t.ok&&ie.saveAs(t.data.url,"domain.txt")},handleSearch(){this.resetData()},handleSizeChange(t){localStorage.setItem(this.pageSizeCachekey,t),this.resetData()},loadPageSize(){let t=localStorage.getItem(this.pageSizeCachekey);t&&(this.size=parseInt(t))},handleExceed(t){this.$refs.upload.clearFiles();const n=t[0];n.uid=ne(),this.handleHttpRequest({file:n})},handleSortChange({column:t,prop:n,order:i}){console.log(t,n,i),this.order_type=i,this.order_prop=n,this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(t){this.selectedRows=t},handleConditionFilterChange(t){console.log(t),this.ConditionFilterParams=t,this.resetData()},async handleBatchDeleteConfirm(){let t=this.$loading({fullscreen:!0}),n={ids:this.selectedRows.map(i=>i.id)};try{const i=await this.$http.deleteDomainByIds(n);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(i.msg)}catch(i){console.log(i)}finally{this.$nextTick(()=>{t.close()})}}},created(){this.initData()}},Dt={class:"app-container"},Ct={class:"flex",style:{"justify-content":"space-between"}},wt={class:"flex mt-sm",style:{"align-items":"center"}},xt={style:{"font-size":"14px",color:"#333333"}},vt={class:"flex",style:{"margin-left":"auto"}},St=c("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function kt(t,n,i,g,a,l){const d=s("Plus"),r=s("el-icon"),_=s("el-button"),h=s("Search"),w=s("el-input"),v=s("ConditionFilter"),p=s("Delete"),V=s("el-link"),I=s("el-popconfirm"),O=s("UpdateDomainInfo"),R=s("CheckDomainInfo"),B=s("Upload"),E=s("el-upload"),z=s("Download"),M=s("DataTable"),G=s("el-pagination"),P=s("DataFormDialog"),H=F("loading");return m(),y("div",Dt,[c("div",Ct,[e(_,{type:"primary",onClick:l.handleAddRow},{default:o(()=>[e(r,null,{default:o(()=>[e(d)]),_:1}),b("\u6DFB\u52A0")]),_:1},8,["onClick"]),e(w,{class:"ml-sm",style:{width:"260px"},modelValue:a.keyword,"onUpdate:modelValue":n[0]||(n[0]=S=>a.keyword=S),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:te(l.handleSearch,["enter"]),onClear:l.handleSearch},{append:o(()=>[e(_,{onClick:l.handleSearch},{default:o(()=>[e(r,null,{default:o(()=>[e(h)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),a.hasInitData?(m(),D(v,{key:0,class:"mt-md",onOnChange:l.handleConditionFilterChange},null,8,["onOnChange"])):x("",!0),c("div",wt,[c("div",xt,"\u5171\u8BA1 "+f(a.total)+" \u6761\u6570\u636E",1),c("div",vt,[l.showBatchDeleteButton?(m(),D(I,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:l.handleBatchDeleteConfirm},{reference:o(()=>[e(V,{underline:!1,type:"danger",class:"mr-sm"},{default:o(()=>[e(r,null,{default:o(()=>[e(p)]),_:1}),b("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):x("",!0),e(O,{onOnSuccess:l.resetData},null,8,["onOnSuccess"]),e(R,{class:"ml-sm",onOnSuccess:l.resetData},null,8,["onOnSuccess"]),e(V,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:o(()=>[e(r,null,{default:o(()=>[e(B)]),_:1}),b("\u5BFC\u5165 "),e(E,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":l.handleExceed,"show-file-list":!1,"http-request":l.handleHttpRequest},{default:o(()=>[St]),_:1},8,["on-exceed","http-request"])]),_:1}),e(V,{underline:!1,type:"primary",class:"ml-sm",onClick:l.handleExportToFile},{default:o(()=>[e(r,null,{default:o(()=>[e(z)]),_:1}),b("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),T(e(M,{class:"mt-sm",data:a.list,onOnSuccess:l.resetData,onSortChange:l.handleSortChange,onSelectionChange:l.handleSelectionChange},null,8,["data","onOnSuccess","onSortChange","onSelectionChange"]),[[H,a.loading]]),e(G,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:a.total,"page-size":a.size,"onUpdate:page-size":n[1]||(n[1]=S=>a.size=S),"current-page":a.page,"onUpdate:current-page":n[2]||(n[2]=S=>a.page=S),onCurrentChange:l.getData,onSizeChange:l.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),e(P,{visible:a.dialogVisible,"onUpdate:visible":n[3]||(n[3]=S=>a.dialogVisible=S),onOnSuccess:l.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const Rt=C(bt,[["render",kt]]);export{Rt as default};
