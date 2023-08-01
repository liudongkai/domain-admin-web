import{_ as D,R as U}from"./index.f879aa38.js";import{o as d,c as m,J as I,U as v,ah as n,V as i,P as o,a as h,T as k,O as b,S as C,F as x,ar as T,Q as E,a8 as O,L as A}from"./vendor-vue.9e61e0af.js";const N={name:"ExpireDays",props:{value:{type:[Number,String],default:null}},components:{},data(){return{}},computed:{showValue(){return Number.isInteger(this.value)},className(){return this.showValue?this.value<7?["color--danger"]:this.value<30?["color--warning"]:["color--success"]:[]}},methods:{async getData(){}},created(){this.getData()}},z={class:"ExpireDays"},M={key:1};function K(s,t,e,f,a,l){return d(),m("div",z,[l.showValue?(d(),m("span",{key:0,class:I(l.className)},v(e.value),3)):(d(),m("span",M,"-"))])}const $=D(N,[["render",K]]),j={host:[{message:"\u4E3B\u673A\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],host_connect_status:[{message:"\u4E3B\u673A\u8FDE\u63A5\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],host_check_time:[{message:"\u4E3B\u673A\u68C0\u67E5\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},Y={name:"",props:{row:{type:Object,default:null},domainId:{type:Number,default:null}},components:{},data(){return{rules:j,is_auto_update:!0,form:{host:"",host_connect_status:"",host_check_time:"",ssl_start_time:"",ssl_expire_time:"",ssl_check_time:"",ssl_expire_days:"",ssl_expire_monitor:!0,ssl_auto_update:!0}}},computed:{disabledTime(){return this.is_auto_update}},methods:{async getDomainById(){let s={domain_id:this.domainId};const t=await this.$http.getDomainById(s);t.ok&&(this.is_auto_update=t.data.auto_update)},async getData(){if(await this.getDomainById(),this.row){let s={address_id:this.row.id};const t=await this.$http.getAddressById(s);if(t.code!=0)return;let e=t.data;this.form.host=e.host,this.form.host_connect_status=e.host_connect_status,this.form.host_check_time=e.host_check_time,this.form.ssl_start_time=e.ssl_start_time,this.form.ssl_expire_time=e.ssl_expire_time,this.form.ssl_check_time=e.ssl_check_time,this.form.ssl_expire_days=e.ssl_expire_days,this.form.ssl_auto_update=e.ssl_auto_update,this.form.ssl_expire_monitor=e.ssl_expire_monitor}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(s=>{if(s)this.confirmSubmit();else return!1})},async confirmSubmit(){let s=this.$loading({fullscreen:!0}),t={domain_id:this.domainId,host:this.form.host.trim(),ssl_start_time:this.form.ssl_start_time,ssl_expire_time:this.form.ssl_expire_time},e=null;this.row?(t.address_id=this.row.id,e=await this.$http.updateAddressById(t)):e=await this.$http.addAddress(t),e.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(e.msg),this.$nextTick(()=>{s.close()})}},created(){this.getData()}},H={class:"text-center mt-md"};function P(s,t,e,f,a,l){const r=n("el-input"),u=n("el-form-item"),p=n("el-date-picker"),_=n("el-form"),g=n("el-button");return d(),m("div",null,[i(_,{ref:"form",model:a.form,rules:a.rules,"label-width":"100px"},{default:o(()=>[i(u,{label:"\u4E3B\u673AIP\u5730\u5740",prop:"host"},{default:o(()=>[i(r,{type:"text",style:{width:"220px"},modelValue:a.form.host,"onUpdate:modelValue":t[0]||(t[0]=y=>a.form.host=y),placeholder:"\u8BF7\u8F93\u5165\u4E3B\u673A\u5730\u5740"},null,8,["modelValue"])]),_:1}),i(u,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"ssl_start_time"},{default:o(()=>[i(p,{modelValue:a.form.ssl_start_time,"onUpdate:modelValue":t[1]||(t[1]=y=>a.form.ssl_start_time=y),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",teleported:!1,disabled:l.disabledTime},null,8,["modelValue","disabled"])]),_:1}),i(u,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"ssl_expire_time"},{default:o(()=>[i(p,{modelValue:a.form.ssl_expire_time,"onUpdate:modelValue":t[2]||(t[2]=y=>a.form.ssl_expire_time=y),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",teleported:!1,disabled:l.disabledTime},null,8,["modelValue","disabled"])]),_:1})]),_:1},8,["model","rules"]),h("div",H,[i(g,{onClick:l.handleCancel},{default:o(()=>[k("\u53D6 \u6D88")]),_:1},8,["onClick"]),i(g,{type:"primary",onClick:l.handleSubmit},{default:o(()=>[k("\u786E \u5B9A")]),_:1},8,["onClick"])])])}const L=D(Y,[["render",P]]),G={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1},domainId:{type:Number,default:null}},emits:["update:visible"],components:{DataForm:L},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u4E3B\u673A\u5730\u5740":"\u6DFB\u52A0\u4E3B\u673A\u5730\u5740"},dialogVisible:{get(){return this.visible},set(s){this.$emit("update:visible",s)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function q(s,t,e,f,a,l){const r=n("DataForm"),u=n("el-dialog");return d(),b(u,{title:l.dialogTitle,modelValue:l.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=p=>l.dialogVisible=p),width:"400px",center:"","append-to-body":""},{default:o(()=>[l.dialogVisible?(d(),b(r,{key:0,row:e.row,domainId:e.domainId,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","domainId","onOnCancel","onOnSuccess"])):C("",!0)]),_:1},8,["title","modelValue"])}const F=D(G,[["render",q]]),J={name:"",components:{DataFormDialog:F,ExpireDays:$},props:{list:{type:Array},domainId:{type:Number,default:null},domainRow:{type:Object,default:null},disableUpdateButton:{type:Boolean,default:!1},role:{type:Number}},emits:["on-selection-change"],computed:{},data(){return{RoleEnum:U,currentRow:null,dialogVisible:!1}},methods:{handleEditRow(s){this.currentRow=s,this.dialogVisible=!0},async handleDeleteClick(s){let t={address_id:s.id};const e=await this.$http.deleteAddressById(t);e.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(e.msg)},async handleStatusChange(s){let t={id:s.id};const e=await this.$http.function(t);e.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(e.msg)},handleUpdateSuccess(){this.$emit("on-success")},async handleUpdateRowDomainInfo(s){let t=this.$loading({fullscreen:!0}),e={address_id:s.id};const f=await this.$http.updateAddressRowInfoById(e);f.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(f.msg),this.$nextTick(()=>{t.close()})}},created(){}};function Q(s,t,e,f,a,l){const r=n("el-table-column"),u=n("ExpireDays"),p=n("Refresh"),_=n("el-icon"),g=n("el-link"),y=n("Edit"),R=n("Delete"),S=n("el-popconfirm"),V=n("el-table"),B=n("DataFormDialog");return d(),m("div",null,[i(V,{data:e.list,stripe:"",border:"",onSelectionChange:t[0]||(t[0]=c=>s.$emit("on-selection-change",c))},{default:o(()=>[a.RoleEnum.User==e.role&&e.domainRow.has_edit_permission?(d(),b(r,{key:0,type:"selection","header-align":"center",align:"center",width:"40"})):C("",!0),i(r,{label:"\u4E3B\u673AIP\u5730\u5740","header-align":"center",align:"center",prop:"host"},{default:o(c=>[h("span",null,v(c.row.host||"-"),1)]),_:1}),i(r,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4","header-align":"center",align:"center",prop:"ssl_start_time"},{default:o(c=>[h("span",null,v(c.row.ssl_start_date||"-"),1)]),_:1}),i(r,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4","header-align":"center",align:"center",prop:"ssl_expire_time"},{default:o(c=>[h("span",null,v(c.row.ssl_expire_date||"-"),1)]),_:1}),i(r,{label:"\u8BC1\u4E66\u5269\u4F59\u5929\u6570","header-align":"center",align:"center",prop:"ssl_expire_days"},{default:o(c=>[i(u,{value:c.row.real_time_ssl_expire_days},null,8,["value"])]),_:1}),i(r,{label:"\u8BC1\u4E66\u68C0\u67E5\u65F6\u95F4","header-align":"center",align:"center",prop:"ssl_check_time"},{default:o(c=>[h("span",null,v(c.row.update_time_label||"-"),1)]),_:1}),i(r,{label:"\u64CD\u4F5C",width:"90",align:"center",prop:"tag"},{default:o(c=>[i(g,{underline:!1,type:"primary",class:"mr-sm",disabled:e.disableUpdateButton,onClick:w=>l.handleUpdateRowDomainInfo(c.row)},{default:o(()=>[i(_,null,{default:o(()=>[i(p)]),_:1})]),_:2},1032,["disabled","onClick"]),a.RoleEnum.User==e.role?(d(),m(x,{key:0},[i(g,{underline:!1,type:"primary",class:"mr-sm",onClick:w=>l.handleEditRow(c.row),disabled:!e.domainRow.has_edit_permission},{default:o(()=>[i(_,null,{default:o(()=>[i(y)]),_:1})]),_:2},1032,["onClick","disabled"]),i(S,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:w=>l.handleDeleteClick(c.row),disabled:!e.domainRow.has_edit_permission},{reference:o(()=>[i(g,{underline:!1,type:"danger",disabled:!e.domainRow.has_edit_permission},{default:o(()=>[i(_,null,{default:o(()=>[i(R)]),_:1})]),_:1},8,["disabled"])]),_:2},1032,["onConfirm","disabled"])],64)):C("",!0)]),_:1})]),_:1},8,["data"]),i(B,{visible:a.dialogVisible,"onUpdate:visible":t[1]||(t[1]=c=>a.dialogVisible=c),row:a.currentRow,domainId:e.domainId,onOnSuccess:l.handleUpdateSuccess},null,8,["visible","row","domainId","onOnSuccess"])])}const W=D(J,[["render",Q]]),X={name:"address-list",props:{domainRow:{type:Object,default:null},domainId:{type:Number,default:null},role:{type:Number}},components:{DataFormDialog:F,DataTable:W},data(){return{RoleEnum:U,list:[],total:0,page:1,size:10,keyword:"",selectedRows:[],loading:!0,dialogVisible:!1,is_auto_update:!0}},computed:{disableUpdateButton(){return!this.is_auto_update},showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{async resetData(){this.page=1,await this.getData()},async getDomainById(){let s={domain_id:this.domainId};const t=await this.$http.getDomainById(s);t.ok&&(this.is_auto_update=t.data.auto_update)},async getData(){this.loading=!0;let s={domain_id:this.domainId,page:this.page,size:this.size};try{const t=await this.$http.getAddressListByDomainId(s);t.code==0&&(this.list=t.data.list,this.total=t.data.total)}catch(t){console.log(t)}finally{this.loading=!1}},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},handleSearch(){this.resetData()},async updateAllAddress(){let s=this.$loading({fullscreen:!0}),t={domain_id:this.domainId},e=await this.$http.updateAddressListInfoByDomainId(t);e.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(e.msg),this.$nextTick(()=>{s.close()})},handleSizeChange(s){this.resetData()},handleSelectionChange(s){this.selectedRows=s},async handleBatchDeleteConfirm(){let s=this.$loading({fullscreen:!0}),t={address_ids:this.selectedRows.map(e=>e.id)};try{(await this.$http.deleteAddressByIds(t)).ok&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData())}catch(e){console.log(e)}finally{this.$nextTick(()=>{s.close()})}}},created(){this.resetData()}},Z={class:""},ee={class:"flex justify-between items-center"},te={key:1};function se(s,t,e,f,a,l){const r=n("Plus"),u=n("el-icon"),p=n("el-button"),_=n("Delete"),g=n("el-link"),y=n("el-popconfirm"),R=n("Refresh"),S=n("DataTable"),V=n("el-pagination"),B=n("DataFormDialog"),c=T("loading");return d(),m("div",Z,[h("div",ee,[a.RoleEnum.User==e.role?(d(),b(p,{key:0,type:"primary",onClick:l.handleAddRow,disabled:!e.domainRow.has_edit_permission},{default:o(()=>[i(u,null,{default:o(()=>[i(r)]),_:1}),k("\u6DFB\u52A0")]),_:1},8,["onClick","disabled"])):(d(),m("span",te)),h("div",null,[l.showBatchDeleteButton?(d(),b(y,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:l.handleBatchDeleteConfirm},{reference:o(()=>[i(g,{underline:!1,type:"danger",class:"mr-sm"},{default:o(()=>[i(u,null,{default:o(()=>[i(_)]),_:1}),k("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):C("",!0),i(g,{underline:!1,type:"primary",disabled:l.disableUpdateButton,onClick:l.updateAllAddress},{default:o(()=>[i(u,null,{default:o(()=>[i(R)]),_:1}),k("\u5168\u90E8\u66F4\u65B0")]),_:1},8,["disabled","onClick"])])]),E(i(S,{class:"mt-sm",list:a.list,role:e.role,domainId:e.domainId,domainRow:e.domainRow,disableUpdateButton:l.disableUpdateButton,onOnSuccess:l.resetData,onOnSelectionChange:l.handleSelectionChange},null,8,["list","role","domainId","domainRow","disableUpdateButton","onOnSuccess","onOnSelectionChange"]),[[c,a.loading]]),i(V,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:a.total,"page-size":a.size,"onUpdate:pageSize":t[0]||(t[0]=w=>a.size=w),"current-page":a.page,"onUpdate:currentPage":t[1]||(t[1]=w=>a.page=w),onCurrentChange:l.getData,onSizeChange:l.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),i(B,{visible:a.dialogVisible,"onUpdate:visible":t[2]||(t[2]=w=>a.dialogVisible=w),domainId:e.domainId,onOnSuccess:l.handleAddSuccess},null,8,["visible","domainId","onOnSuccess"])])}const le=D(X,[["render",se]]),ie={name:"",props:{domainRow:{type:Object,default:null},row:{type:Object,default:null},visible:{type:Boolean,default:!1},domainId:{type:Number,default:null},role:{type:Number}},components:{DataTableIndex:le},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(s){this.$emit("update:visible",s)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose(),this.$emit("on-success")},handleDialogClose(){this.$emit("on-close")}},created(){}};function ne(s,t,e,f,a,l){const r=n("DataTableIndex"),u=n("el-dialog");return d(),b(u,{title:"\u57DF\u540D\u4E3B\u673A\u5217\u8868",modelValue:l.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=p=>l.dialogVisible=p),width:"900px",center:"","append-to-body":"",onClose:l.handleDialogClose},{default:o(()=>[l.dialogVisible?(d(),b(r,{key:0,row:e.row,role:e.role,domainRow:e.domainRow,domainId:e.domainId,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","role","domainRow","domainId","onOnCancel","onOnSuccess"])):C("",!0)]),_:1},8,["modelValue","onClose"])}const ve=D(ie,[["render",ne]]);const ae={name:"ConditionFilter",props:{title:{type:String},field:{type:String},options:{type:Array},selected:{type:Array,default:()=>[]},maxCount:{type:Number,default:0},labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},level:{type:Number,default:0}},components:{},data(){return{childrenKey:0,showMoreButton:!1,hiddenMore:!0,itemTagHeight:20}},computed:{selectedIsEmpty(){return this.selected.length==0}},methods:{async getData(){},handleClear(){this.selected.splice(0,this.selected.length),this.handleChange()},handleClick(s){let t=this.selected.findIndex(e=>s[this.valueKey]==e);t>-1?this.selected.splice(t,1):(this.maxCount==1&&this.selected.splice(0,this.selected.length),this.selected.push(s[this.valueKey])),this.childrenKey++,this.handleChange()},handleChange(){this.$emit("on-change",{selected:this.selected,title:this.title,field:this.field,options:this.options})},handleChildrenChange(s){this.$emit("on-change",s)},handleMoreClick(){this.hiddenMore=!this.hiddenMore},handleWindowResize(){!this.$refs["condition-item__list"]||(this.$refs["condition-item__list"].clientHeight>this.itemTagHeight?(this.showMoreButton=!0,this.selected&&this.selected.length>0?this.hiddenMore=!1:this.hiddenMore=!0):(this.hiddenMore=!1,this.showMoreButton=!1))}},mounted(){},created(){this.getData()}},oe={class:"condition-filter"},de={key:0,class:"condition-filter__title"},re={class:"condition-filter__group_button"},ce={class:"condition-filter__list-wrap"},ue={class:"condition-item__list-box"},_e={class:"condition-item__list",ref:"condition-item__list"},me=["onClick"],he={class:"condition-filter__tag__close"},pe={class:"condition-filter__children"};function fe(s,t,e,f,a,l){const r=n("Close"),u=n("el-icon"),p=n("ConditionFilter");return d(),m("div",oe,[e.title?(d(),m("div",de,v(e.title),1)):C("",!0),h("div",re,[h("div",{class:I(["condition-filter__tag condition-filter__clear",{"condition-filter__tag--seleted":l.selectedIsEmpty}]),onClick:t[0]||(t[0]=(..._)=>l.handleClear&&l.handleClear(..._))}," \u4E0D\u9650 ",2),h("div",ce,[h("div",ue,[h("div",{class:I({"condition-item__list--overflow":a.hiddenMore})},[h("div",_e,[(d(!0),m(x,null,O(e.options,_=>(d(),m("div",{class:I(["condition-filter__tag",{"condition-filter__tag--seleted":e.selected.indexOf(_[e.valueKey])>-1}]),onClick:g=>l.handleClick(_)},[h("span",null,v(_[e.labelKey]),1),h("span",he,[i(u,null,{default:o(()=>[i(r)]),_:1})])],10,me))),256))],512)],2)]),h("div",pe,[(d(!0),m(x,null,O(e.options,_=>(d(),m(x,null,[e.selected.indexOf(_[e.valueKey])>-1&&_.child?(d(),b(p,A({key:a.childrenKey,class:"condition-filter__child",ref_for:!0,ref:"child"},_.child,{level:_.level||e.level+1,onOnChange:l.handleChildrenChange}),null,16,["level","onOnChange"])):C("",!0)],64))),256))])])])])}const ge=D(ae,[["render",fe]]);const ye={name:"ConditionFilterGroup",props:{options:{type:Array}},components:{ConditionFilterRow:ge},data(){return{}},computed:{},methods:{async getData(){},handleChange(s){console.log(s),this.$emit("on-change",s)}},created(){this.getData()}},be={class:"ConditionFilterGroup"};function we(s,t,e,f,a,l){const r=n("ConditionFilterRow");return d(),m("div",be,[(d(!0),m(x,null,O(e.options,u=>(d(),m(x,null,[u.hidden?C("",!0):(d(),b(r,A({key:0,class:"ConditionFilterGroup__row"},u,{onOnChange:l.handleChange}),null,16,["onOnChange"]))],64))),256))])}const xe=D(ye,[["render",we]]);export{le as A,xe as C,$ as E,ve as a};
