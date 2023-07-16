import{i as H,E as M}from"./event-enums.6c6f25e7.js";import{S as P,u as E}from"./SelectGroup.a829a448.js";import{_ as v,R as B,d as $,r as Y}from"./index.cf59b06a.js";import{ah as s,ar as z,Q as A,o as c,c as b,V as i,P as l,a as _,T as y,O as w,S as D,U as h,F as T,L as K,ax as G,ay as Q,a9 as X}from"./vendor-vue.9e61e0af.js";import{E as L,A as J,a as Z,b as ee,C as te}from"./ConditionFilterGroup.41a36424.js";import{F as oe}from"./vendor-lib.cb4f08bf.js";import{a as ie}from"./element-plus.c20bc0dd.js";import"./element-icon.1ce1c350.js";const ne={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!1,trigger:"blur",validator:(o,e,t)=>{if(!e)return t();if(H(e))t();else return t(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},le={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:P},data(){return{loading:!1,form:{domain:"",comment:"",port:443,group_id:"",domain_start_time:"",domain_expire_time:"",is_auto_update:!0},rules:ne,disabledTime:!1,is_auto_subdomain:!1}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let o={domain_info_id:this.row.id},t=(await this.$http.getDomainInfoById(o)).data;this.form.domain=t.domain,this.form.comment=t.comment,this.form.group_id=t.group_id,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.is_auto_update=t.is_auto_update,this.form.group_id==0&&(this.form.group_id=""),t.is_auto_update&&(this.disabledTime=!0)}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(o=>{if(console.log(o),o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),e={domain:this.form.domain.trim(),comment:this.form.comment.trim(),group_id:this.form.group_id,is_auto_update:this.form.is_auto_update,domain_start_time:this.form.domain_start_time,domain_expire_time:this.form.domain_expire_time,is_auto_subdomain:this.form.is_auto_subdomain},t=null;this.row?(e.domain_info_id=this.row.id,t=await this.$http.updateDomainInfoById(e)):t=await this.$http.addDomainInfo(e),t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg),this.$nextTick(()=>{o.close()})}},created(){this.getData()}},ae={class:"flex justify-between w-full"},se=_("span",null," - ",-1),re={class:"grid grid-cols-2"},de={class:"text-center"};function me(o,e,t,u,n,a){const m=s("el-input"),d=s("el-form-item"),p=s("el-date-picker"),C=s("el-switch"),S=s("Warning"),x=s("el-icon"),I=s("el-link"),k=s("el-tooltip"),O=s("SelectGroup"),U=s("el-form"),R=s("el-button"),F=z("loading");return A((c(),b("div",null,[i(U,{ref:"form",model:n.form,rules:n.rules,"label-width":"70px"},{default:l(()=>[i(d,{label:"\u57DF\u540D",prop:"domain"},{default:l(()=>[i(m,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":e[0]||(e[0]=f=>n.form.domain=f),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),i(d,{label:"\u57DF\u540D\u65F6\u95F4",prop:"start_time"},{default:l(()=>[_("div",ae,[i(p,{modelValue:n.form.domain_start_time,"onUpdate:modelValue":e[1]||(e[1]=f=>n.form.domain_start_time=f),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u57DF\u540D\u6CE8\u518C\u65F6\u95F4",disabled:n.form.is_auto_update,style:{width:"150px"}},null,8,["modelValue","disabled"]),se,i(p,{modelValue:n.form.domain_expire_time,"onUpdate:modelValue":e[2]||(e[2]=f=>n.form.domain_expire_time=f),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u57DF\u540D\u5230\u671F\u65F6\u95F4",disabled:n.form.is_auto_update,style:{width:"150px"}},null,8,["modelValue","disabled"])])]),_:1}),_("div",re,[i(d,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"is_auto_update"},{default:l(()=>[i(C,{modelValue:n.form.is_auto_update,"onUpdate:modelValue":e[3]||(e[3]=f=>n.form.is_auto_update=f)},null,8,["modelValue"]),i(k,{effect:"dark",content:"\u5982\u9700\u624B\u52A8\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF0C\u9700\u5173\u95ED\u81EA\u52A8\u66F4\u65B0",placement:"top-start","show-after":500},{default:l(()=>[i(I,{underline:!1},{default:l(()=>[i(x,{class:"ml-sm"},{default:l(()=>[i(S)]),_:1})]),_:1})]),_:1})]),_:1}),i(d,{label:"\u5B50\u57DF\u8BC1\u4E66",prop:"is_auto_subdomain"},{default:l(()=>[i(C,{modelValue:n.form.is_auto_subdomain,"onUpdate:modelValue":e[4]||(e[4]=f=>n.form.is_auto_subdomain=f)},null,8,["modelValue"]),i(k,{effect:"dark",content:"\u81EA\u52A8\u8BC6\u522B\u5B50\u57DF\u540D\uFF0C\u5E76\u6DFB\u52A0\u8BC1\u4E66\u76D1\u63A7\uFF0C\u4EC5\u672C\u6B21\u63D0\u4EA4\u6709\u6548",placement:"top-start","show-after":500},{default:l(()=>[i(I,{underline:!1},{default:l(()=>[i(x,{class:"ml-sm"},{default:l(()=>[i(S)]),_:1})]),_:1})]),_:1})]),_:1})]),i(d,{label:"\u5206\u7EC4",prop:"group_id"},{default:l(()=>[i(O,{class:"w-[150px]",modelValue:n.form.group_id,"onUpdate:modelValue":e[5]||(e[5]=f=>n.form.group_id=f),clearable:""},null,8,["modelValue"])]),_:1}),i(d,{label:"\u5907\u6CE8",prop:"comment"},{default:l(()=>[i(m,{type:"textarea",modelValue:n.form.comment,"onUpdate:modelValue":e[6]||(e[6]=f=>n.form.comment=f),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),_("div",de,[i(R,{onClick:a.handleCancel},{default:l(()=>[y("\u53D6 \u6D88")]),_:1},8,["onClick"]),i(R,{type:"primary",onClick:a.handleSubmit},{default:l(()=>[y("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[F,n.loading]])}const ce=v(le,[["render",me]]),ue={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:ce},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.$emit("on-success"),this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function _e(o,e,t,u,n,a){const m=s("DataForm"),d=s("el-dialog");return c(),w(d,{title:a.dialogTitle,modelValue:a.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>a.dialogVisible=p),width:"440px",center:"","append-to-body":"","lock-scroll":!1},{default:l(()=>[a.dialogVisible?(c(),w(m,{key:0,row:t.row,onOnCancel:a.handleClose,onOnSuccess:a.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):D("",!0)]),_:1},8,["title","modelValue"])}const N=v(ue,[["render",_e]]);const pe={name:"ShowOverflowTooltip",props:{content:{type:String}},data(){return{id:Math.random().toString(36).slice(2),disabled:!0}},watch:{content(){this.handleInit()}},methods:{handleInit(){function o(m,d=null){const p=window.getComputedStyle(m,null);return d?p[d]:p}const e=this.$refs.ShowOverflowTooltip;console.log(e);const t=document.createRange();t.setStart(e,0),t.setEnd(e,e.childNodes.length);const u=t.getBoundingClientRect().width,n=(parseInt(o(e,"paddingLeft"),10)||0)+(parseInt(o(e,"paddingRight"),10)||0);let a={rangeWidth:u,padding:n,"rangeWidth+padding":u+n,offsetWidth:e.offsetWidth,scrollWidth:e.scrollWidth};console.table(a),u+n>e.offsetWidth||e.scrollWidth>e.offsetWidth?(console.log("\u6709\u9690\u85CF\u6587\u5B57..."),this.content&&this.content.length>5?this.disabled=!1:this.disabled=!0):(console.log("\u6CA1\u6709\u9690\u85CF\u6587\u5B57"),this.disabled=!0)}},mounted(){this.$nextTick(()=>{this.handleInit()})}};function he(o,e,t,u,n,a){const m=s("el-tooltip");return c(),w(m,{effect:"dark",disabled:n.disabled,content:t.content,placement:"top-start"},{default:l(()=>[_("div",{ref:"ShowOverflowTooltip",class:"overflow-tooltip"},h(t.content),513)]),_:1},8,["disabled","content"])}const fe=v(pe,[["render",he],["__scopeId","data-v-9e813693"]]),ge={name:"",props:{row:{type:Object,default:null}},components:{ExpireDays:L,AddressList:J,ShowOverflowTooltip:fe},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}},real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",real_domain_expire_days:"",ssl_count:"",comment:"",domain_registrar:"",domain_registrar_url:""},ipInfo:{isp:""},icpInfo:null}},computed:{},methods:{async getICP(){if(!this.form.domain)return;this.loading=!0;let o={domain:this.form.domain};try{const e=await this.$http.getICP(o);this.icpInfo=e.data||{}}catch(e){console.log(e)}finally{this.loading=!1}},async getData(){if(this.row){let o={domain_info_id:this.row.id};const e=await this.$http.getDomainInfoById(o);if(e.code!=0)return;let t=e.data;this.form.domain=t.domain,this.form.update_time_label=t.update_time_label,this.form.ssl_count=t.ssl_count,this.form.comment=t.comment,this.form.domain_url=t.domain_url,this.form.domain_registrar_url=t.domain_registrar_url,this.form.domain_registrar=t.domain_registrar,this.form.ip=t.ip,this.form.start_time=t.start_time,this.form.expire_time=t.expire_time,this.form.check_time=t.check_time,this.form.connect_status=t.connect_status,this.form.total_days=t.total_days,this.form.expire_days=t.expire_days,this.form.real_time_expire_days=t.real_time_expire_days,this.form.create_time=t.create_time,this.form.update_time=t.update_time,this.form.domain_auto_update=t.domain_auto_update,this.form.domain_auto_update_label=t.is_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=t.is_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=t.domain_check_time_label,this.form.port=t.port,this.form.real_domain_expire_days=t.real_domain_expire_days,this.form.alias=t.alias,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.real_time_domain_expire_days=t.real_time_domain_expire_days,this.getICP()}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let o=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_info_id:this.row.id};(await this.$http.updateDomainInfoRowById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),o.close()},async getIpInfo(){let o={ip:this.form.ip};const e=await this.$http.getIpInfo(o);e.code==0&&(this.ipInfo=e.data)}},created(){this.getData()}},be={class:"domain-detail"},we={class:"mo-form-detail grid grid-cols-2"},ye={class:"truncate"},De={class:"flex justify-between flex-1"},Ce={class:"truncate"},xe={class:"truncate"},ke={key:0,class:"truncate"},ve={class:"mo-form-detail mt-[20px]"},Se=["href"],Ie={key:1},Ve={class:"truncate"},Re={class:"text-center mt-md"};function Oe(o,e,t,u,n,a){const m=s("el-link"),d=s("el-form-item"),p=s("ShowOverflowTooltip"),C=s("el-form"),S=s("ExpireDays"),x=s("Refresh"),I=s("el-icon"),k=s("el-button");return c(),b("div",be,[_("div",we,[i(C,{"label-width":"130px"},{default:l(()=>[i(d,{label:"\u57DF\u540D",prop:"domain"},{default:l(()=>[i(m,{underline:!1},{default:l(()=>[y(h(n.form.domain),1)]),_:1})]),_:1}),i(d,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"create_time"},{default:l(()=>[_("span",null,h(n.form.domain_start_time||"-"),1)]),_:1}),i(d,{label:"\u5230\u671F\u65F6\u95F4",prop:"create_time"},{default:l(()=>[_("span",null,h(n.form.domain_expire_time||"-"),1)]),_:1}),i(d,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"isp"},{default:l(()=>[_("span",ye,h(n.form.domain_auto_update_label||"-"),1)]),_:1}),i(d,{label:"\u4E3B\u529E\u5355\u4F4D\u540D\u79F0",prop:"isp"},{default:l(()=>[n.icpInfo?(c(),w(p,{key:0,content:n.icpInfo.name||"-"},null,8,["content"])):D("",!0)]),_:1})]),_:1}),i(C,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:l(()=>[i(d,{label:"\u8BC1\u4E66\u6570\u91CF",prop:"domain"},{default:l(()=>[_("span",null,h(n.form.ssl_count||"-"),1)]),_:1}),i(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:l(()=>[i(S,{value:n.form.real_domain_expire_days},null,8,["value"])]),_:1}),i(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:l(()=>[_("div",De,[_("span",Ce,h(n.form.update_time_label||"-"),1),i(m,{underline:!1,type:"primary",class:"mr-sm",onClick:a.handleUpdateRowDomainInfo},{default:l(()=>[i(I,null,{default:l(()=>[i(x)]),_:1})]),_:1},8,["onClick"])])]),_:1}),i(d,{label:"\u5230\u671F\u63D0\u9192",prop:"isp"},{default:l(()=>[_("span",xe,h(n.form.domain_expire_monitor||"-"),1)]),_:1}),i(d,{label:"ICP\u5907\u6848",prop:"isp"},{default:l(()=>[n.icpInfo?(c(),b("span",ke,h(n.icpInfo.icp||"-"),1)):D("",!0)]),_:1})]),_:1})]),_("div",ve,[i(C,{"label-width":"130px"},{default:l(()=>[i(d,{label:"\u6CE8\u518C\u5546",prop:"domain_registrar"},{default:l(()=>[n.form.domain_registrar_url?(c(),b("a",{key:0,href:n.form.domain_registrar_url,target:"_blank",class:"mo-link"},h(n.form.domain_registrar),9,Se)):(c(),b("span",Ie,h(n.form.domain_registrar||"-"),1))]),_:1}),i(d,{label:"\u5907\u6CE8",prop:"comment"},{default:l(()=>[_("span",Ve,h(n.form.comment||"-"),1)]),_:1})]),_:1})]),_("div",Re,[i(k,{type:"primary",onClick:a.handleCancel},{default:l(()=>[y("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const Ue=v(ge,[["render",Oe]]),Fe={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Ue},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function Te(o,e,t,u,n,a){const m=s("DataForm"),d=s("el-dialog");return c(),w(d,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:a.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>a.dialogVisible=p),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:a.handleDialogClose},{default:l(()=>[a.dialogVisible?(c(),w(m,{key:0,row:t.row,onOnCancel:a.handleClose,onOnSuccess:a.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):D("",!0)]),_:1},8,["modelValue","onClose"])}const Ee=v(Fe,[["render",Te]]),Be={name:"",components:{DataFormDialog:N,DataDetailDialog:Ee,ExpireDays:L,ExpireProgress:Z,AddressListgDialog:ee},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{role:{type:Number}},computed:{},data(){return{RoleEnum:B,currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(o){this.currentRow=o,this.dialogVisible=!0},async handleDeleteClick(o){let e={domain_info_id:o.id};const t=await this.$http.deleteDomainInfoById(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleStatusChange(o){let e={id:o.id};const t=await this.$Http.function(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleMonitorStatusChange(o,e){let t={domain_info_id:o.id,field:"is_expire_monitor",value:e};const u=await this.$http.updateDomainInfoFieldById(t);u.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(u.msg)},async handleAutoUpdateStatusChange(o,e){let t={domain_info_id:o.id,field:"is_auto_update",value:e};const u=await this.$http.updateDomainInfoFieldById(t);u.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(u.msg)},async handleUpdateRowDomainInfo(o){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),t={domain_info_id:o.id};(await this.$http.updateDomainInfoRowById(t)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),e.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(o){this.currentRow=o,this.dialogDetailVisible=!0},handleShowAddressListgDialog(o){this.currentRow=o,this.AddressListgDialogVisible=!0},handleCertCountClick(o){let e=this.$router.resolve({name:"domain-list",query:{keyword:o.domain}});window.open(e.href,"_blank")},handleRefreshRow(o){this.$emit("on-refresh-row",o)},handleSelectable(o,e){return o.has_edit_permission}},created(){}},ze={key:1};function Ae(o,e,t,u,n,a){const m=s("el-table-column"),d=s("el-link"),p=s("ExpireDays"),C=s("el-switch"),S=s("Refresh"),x=s("el-icon"),I=s("Edit"),k=s("Delete"),O=s("el-popconfirm"),U=s("el-table"),R=s("DataFormDialog"),F=s("DataDetailDialog"),f=s("AddressListgDialog");return c(),b("div",null,[i(U,K({stripe:"",border:""},o.$attrs,{onSortChange:e[0]||(e[0]=r=>o.$emit("sort-change",r)),onSelectionChange:e[1]||(e[1]=r=>o.$emit("selection-change",r))}),{default:l(()=>[t.role==n.RoleEnum.User?(c(),w(m,{key:0,type:"selection","header-align":"center",align:"center",width:"40",selectable:a.handleSelectable},null,8,["selectable"])):D("",!0),i(m,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"250","show-overflow-tooltip":"",prop:"domain"},{default:l(r=>[i(d,{underline:!1,onClick:g=>a.handleShowDetail(r.row)},{default:l(()=>[y(h(r.row.domain),1)]),_:2},1032,["onClick"])]),_:1}),i(m,{label:"\u57DF\u540D\u5929\u6570","header-align":"center",align:"center",width:"90",sortable:"custom",prop:"domain_expire_days"},{default:l(r=>[i(p,{value:r.row.real_domain_expire_days},null,8,["value"])]),_:1}),i(m,{label:"\u8BC1\u4E66\u6570\u91CF","header-align":"center",align:"center",width:"100"},{default:l(r=>[r.row.ssl_count&&r.row.ssl_count>0?(c(),w(d,{key:0,underline:!1,onClick:g=>a.handleCertCountClick(r.row)},{default:l(()=>[y(h(r.row.ssl_count),1)]),_:2},1032,["onClick"])):(c(),b("span",ze,"-"))]),_:1}),i(m,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:l(r=>[_("span",null,h(r.row.group_name||"-"),1)]),_:1}),i(m,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"comment","show-overflow-tooltip":""},{default:l(r=>[_("span",null,h(r.row.comment||"-"),1)]),_:1}),i(m,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"110",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:l(r=>[_("span",null,h(r.row.update_time_label||"-"),1)]),_:1}),t.role==n.RoleEnum.User?(c(),b(T,{key:1},[i(m,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"domain_expire_monitor"},{default:l(r=>[i(C,{modelValue:r.row.is_auto_update,"onUpdate:modelValue":g=>r.row.is_auto_update=g,disabled:!r.row.has_edit_permission,onChange:g=>a.handleAutoUpdateStatusChange(r.row,g)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1}),i(m,{label:"\u5230\u671F\u63D0\u9192",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"is_expire_monitor"},{default:l(r=>[i(C,{modelValue:r.row.is_expire_monitor,"onUpdate:modelValue":g=>r.row.is_expire_monitor=g,disabled:!r.row.has_edit_permission,onChange:g=>a.handleMonitorStatusChange(r.row,g)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1})],64)):D("",!0),i(m,{label:"\u64CD\u4F5C",width:"100","header-align":"center",align:"center"},{default:l(r=>[i(d,{underline:!1,type:"primary",class:"mr-sm",onClick:g=>a.handleUpdateRowDomainInfo(r.row)},{default:l(()=>[i(x,null,{default:l(()=>[i(S)]),_:1})]),_:2},1032,["onClick"]),t.role==n.RoleEnum.User?(c(),b(T,{key:0},[i(d,{underline:!1,type:"primary",class:"mr-sm",disabled:!r.row.has_edit_permission,onClick:g=>a.handleEditRow(r.row)},{default:l(()=>[i(x,null,{default:l(()=>[i(I)]),_:1})]),_:2},1032,["disabled","onClick"]),i(O,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:g=>a.handleDeleteClick(r.row),disabled:!r.row.has_edit_permission},{reference:l(()=>[i(d,{underline:!1,type:"danger",disabled:!r.row.has_edit_permission},{default:l(()=>[i(x,null,{default:l(()=>[i(k)]),_:1})]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm","disabled"])],64)):D("",!0)]),_:1})]),_:1},16),i(R,{visible:n.dialogVisible,"onUpdate:visible":e[2]||(e[2]=r=>n.dialogVisible=r),row:n.currentRow,onOnSuccess:e[3]||(e[3]=r=>a.handleRefreshRow(n.currentRow))},null,8,["visible","row"]),i(F,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":e[4]||(e[4]=r=>n.dialogDetailVisible=r),onOnSuccess:e[5]||(e[5]=r=>a.handleRefreshRow(n.currentRow))},null,8,["row","visible"]),n.currentRow?(c(),w(f,{key:0,domainId:n.currentRow.id,visible:n.AddressListgDialogVisible,"onUpdate:visible":e[6]||(e[6]=r=>n.AddressListgDialogVisible=r),onOnSuccess:a.handleUpdateSuccess},null,8,["domainId","visible","onOnSuccess"])):D("",!0)])}const $e=v(Be,[["render",Ae]]),Pe={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,(await this.$http.updateDomainInfoOfUser()).code==0&&this.$msg.success("\u540E\u53F0\u66F4\u65B0\u4E2D\uFF0C\u5237\u65B0\u67E5\u770B")}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Ge(o,e,t,u,n,a){const m=s("Refresh"),d=s("el-icon"),p=s("el-link");return c(),w(p,{underline:!1,type:"primary",onClick:a.updateAllDomainCertInfoOfUser,disabled:a.disableUpdateButton},{default:l(()=>[i(d,null,{default:l(()=>[i(m)]),_:1}),y(h(a.updateText),1)]),_:1},8,["onClick","disabled"])}const Le=v(Pe,[["render",Ge]]),Ne={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u57DF\u540D\u68C0\u67E5"}},methods:{async handleNotifyByEventId(){let o=this.$loading({lock:!0,text:"\u68C0\u67E5\u4E2D",fullscreen:!0});try{const e=await this.$http.handleNotifyByEventId({event_id:M.DOMAIN_EXPIRE});e.ok&&this.$msg.success(`\u68C0\u67E5\u6E20\u9053\uFF1A${e.data.success}`)}catch(e){console.log(e)}finally{this.$nextTick(()=>{o.close()})}}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function We(o,e,t,u,n,a){const m=s("Position"),d=s("el-icon"),p=s("el-link");return c(),w(p,{underline:!1,type:"primary",onClick:a.handleNotifyByEventId,disabled:a.disableUpdateButton},{default:l(()=>[i(d,null,{default:l(()=>[i(m)]),_:1}),y(h(a.updateText),1)]),_:1},8,["onClick","disabled"])}const je=v(Ne,[["render",We]]),qe={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:te},data(){return{loading:!0,options:[{title:"\u57DF\u540D\u72B6\u6001",field:"domain_expire_days",selected:[],maxCount:1,options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!0,selected:[],options:[]}]}},computed:{...G(E,{groupOptions:"getGroupOptions"})},methods:{async resetData(){const o=await this.$http.getGroupList();o.ok&&this.options.forEach(e=>{e.field=="group_ids"&&(o.data.list&&o.data.list.length>0?(e.options=o.data.list.map(t=>{let u=t.name;return{...t,value:t.id,label:u}}),e.hidden=!1):e.hidden=!0)}),this.loading=!1},handleChange(o){this.$emit("on-change",this.options)}},created(){this.resetData()}},He={class:""};function Me(o,e,t,u,n,a){const m=s("ConditionFilterGroup"),d=z("loading");return A((c(),b("div",He,[i(m,{options:n.options,onOnChange:a.handleChange},null,8,["options","onOnChange"])])),[[d,n.loading]])}const Ye=v(qe,[["render",Me]]),Ke={name:"domain-list",props:{role:{type:Number,default:B.User}},components:{DataFormDialog:N,DataTable:$e,SelectGroup:P,UpdateDomainInfo:Le,CheckDomainInfo:je,ConditionFilter:Ye},data(){return{RoleEnum:B,dataApi:$,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:Y($.exportDomainToFile),order_type:"ascending",order_prop:"domain_expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...G(E,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...Q(E,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let o={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop,role:this.role};for(let t of this.ConditionFilterParams)t.selected&&t.selected.length>0&&(t.maxCount==1?o[t.field]=t.selected[0]:o[t.field]=t.selected);const e=await this.$http.getDomainInfoList(o);e.code==0?(this.list=e.data.list,this.total=e.data.total):this.$msg.error(e.msg),this.loading=!1},getGroupName(o){let e=this.groupOptions.find(t=>t.value==o);if(e)return e.name},async handleHttpRequest(o){let e=this.$loading({fullscreen:!0}),t=new FormData;t.append("file",o.file),(await this.$http.importDomainInFromFile(t)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData(),this.$refs.ConditionFilter&&this.$refs.ConditionFilter.resetData(),this.updateGroupOptions()),e.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const o=await this.$http.exportDomainInfoFile();o.ok&&oe.saveAs(o.data.url,o.data.name)},handleSearch(){this.resetData()},handleSizeChange(o){localStorage.setItem(this.pageSizeCachekey,o),this.resetData()},loadPageSize(){let o=localStorage.getItem(this.pageSizeCachekey);o&&(this.size=parseInt(o))},handleExceed(o){this.$refs.upload.clearFiles();const e=o[0];e.uid=ie(),this.handleHttpRequest({file:e})},handleSortChange({column:o,prop:e,order:t}){console.log(o,e,t),this.order_prop="",this.order_type="",t&&(this.order_type=t,this.order_prop=e),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(o){this.selectedRows=o},handleConditionFilterChange(o){console.log(o),this.ConditionFilterParams=o,this.resetData()},async handleBatchDeleteConfirm(){let o=this.$loading({fullscreen:!0}),e={domain_info_ids:this.selectedRows.map(t=>t.id)};try{const t=await this.$http.deleteDomainInfoByIds(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(t.msg)}catch(t){console.log(t)}finally{this.$nextTick(()=>{o.close()})}},async handleRefreshRow(o){let e={domain_info_id:o.id};const t=await this.$http.getDomainInfoById(e);if(t.ok){let u=this.list.findIndex(n=>n.id==o.id);this.list.splice(u,1,t.data),console.log(this.list)}}},created(){this.initData()}},Qe={class:"app-container"},Xe={class:"flex",style:{"justify-content":"space-between"}},Je={key:1},Ze={class:"flex mt-sm",style:{"align-items":"center"}},et={style:{"font-size":"14px",color:"#333333"}},tt={class:"flex",style:{"margin-left":"auto"}},ot=_("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function it(o,e,t,u,n,a){const m=s("Plus"),d=s("el-icon"),p=s("el-button"),C=s("Search"),S=s("el-input"),x=s("ConditionFilter"),I=s("Delete"),k=s("el-link"),O=s("el-popconfirm"),U=s("UpdateDomainInfo"),R=s("CheckDomainInfo"),F=s("Upload"),f=s("el-upload"),r=s("Download"),g=s("DataTable"),W=s("el-pagination"),j=s("DataFormDialog"),q=z("loading");return c(),b("div",Qe,[_("div",Xe,[t.role==n.RoleEnum.User?(c(),w(p,{key:0,type:"primary",onClick:a.handleAddRow},{default:l(()=>[i(d,null,{default:l(()=>[i(m)]),_:1}),y("\u6DFB\u52A0")]),_:1},8,["onClick"])):(c(),b("span",Je)),i(S,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":e[0]||(e[0]=V=>n.keyword=V),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:X(a.handleSearch,["enter"]),onClear:a.handleSearch},{append:l(()=>[i(p,{onClick:a.handleSearch},{default:l(()=>[i(d,null,{default:l(()=>[i(C)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),t.role==n.RoleEnum.User?(c(),b(T,{key:0},[n.hasInitData?(c(),w(x,{key:0,class:"mt-md",ref:"ConditionFilter",onOnChange:a.handleConditionFilterChange},null,8,["onOnChange"])):D("",!0)],64)):D("",!0),_("div",Ze,[_("div",et,"\u5171\u8BA1 "+h(n.total)+" \u6761\u6570\u636E",1),_("div",tt,[a.showBatchDeleteButton?(c(),w(O,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:a.handleBatchDeleteConfirm},{reference:l(()=>[i(k,{underline:!1,type:"danger",class:"mr-sm"},{default:l(()=>[i(d,null,{default:l(()=>[i(I)]),_:1}),y("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):D("",!0),i(U,{onOnSuccess:a.resetData},null,8,["onOnSuccess"]),t.role==n.RoleEnum.User?(c(),b(T,{key:1},[i(R,{class:"ml-sm",onOnSuccess:a.resetData},null,8,["onOnSuccess"]),i(k,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:l(()=>[i(d,null,{default:l(()=>[i(F)]),_:1}),y("\u5BFC\u5165 "),i(f,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":a.handleExceed,"show-file-list":!1,"http-request":a.handleHttpRequest},{default:l(()=>[ot]),_:1},8,["on-exceed","http-request"])]),_:1}),i(k,{underline:!1,type:"primary",class:"ml-sm",onClick:a.handleExportToFile},{default:l(()=>[i(d,null,{default:l(()=>[i(r)]),_:1}),y("\u5BFC\u51FA")]),_:1},8,["onClick"])],64)):D("",!0)])]),A(i(g,{class:"mt-sm",data:n.list,role:t.role,onOnSuccess:a.resetData,onSortChange:a.handleSortChange,onSelectionChange:a.handleSelectionChange,onOnRefreshRow:a.handleRefreshRow},null,8,["data","role","onOnSuccess","onSortChange","onSelectionChange","onOnRefreshRow"]),[[q,n.loading]]),i(W,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:pageSize":e[1]||(e[1]=V=>n.size=V),"current-page":n.page,"onUpdate:currentPage":e[2]||(e[2]=V=>n.page=V),onCurrentChange:a.getData,onSizeChange:a.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),i(j,{visible:n.dialogVisible,"onUpdate:visible":e[3]||(e[3]=V=>n.dialogVisible=V),onOnSuccess:a.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const ut=v(Ke,[["render",it]]);export{ut as default};
