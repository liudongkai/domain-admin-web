import{a as O,b as K,c as P,d as q,E as Q,e as X}from"./event-enums.90fb3af2.js";import{t as U,_ as D}from"./index.344011fe.js";import{T as Y,t as Z,o as B,j as ee}from"./codemirror-lib.a3a39aa0.js";import{ah as a,o as b,O as k,K as te,c as V,V as o,P as r,a as m,T as w,U as y,ar as x,Q as $,F as W,a8 as j,R as le,S as A}from"./vendor-vue.9e61e0af.js";import"./element-plus.1c4dcd05.js";import"./element-icon.1ce1c350.js";import"./vendor-lib.6ffc91e0.js";const oe={status:[{message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],value:[{message:"\u901A\u77E5\u914D\u7F6E\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],expire_days:[{message:"\u5269\u4F59\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},ne=(e,t,n)=>{if(!t)return n();if(!O(t))return n(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(t);Array.isArray(d)?d.length==0?n(new Error("\u6570\u7EC4\u957F\u5EA6\u4E0D\u80FD\u4E3A\u7A7A")):d.some(l=>!K(l))?n(new Error("\u6570\u7EC4\u9879\u53EA\u80FD\u662F\u90AE\u7BB1\u5730\u5740")):n():n(new Error("\u5FC5\u987B\u662Farray\u6570\u7EC4"))},re={email_list:[{message:"\u90AE\u4EF6\u5217\u8868\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{validator:ne,trigger:"blur"}],type_id:[{message:"\u89E6\u53D1\u4E8B\u4EF6\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},C={Unknown:0,Email:1,Webhook:2,WorkWeixin:3,DingTalk:4,Feishu:5},ae=[{value:C.Email,label:U("\u90AE\u4EF6")},{value:C.Webhook,label:"Webhook"},{value:C.WorkWeixin,label:U("\u4F01\u4E1A\u5FAE\u4FE1")},{value:C.DingTalk,label:U("\u9489\u9489")},{value:C.Feishu,label:U("\u98DE\u4E66")}];function ie(e){const t=ae.find(n=>n.value==e);if(t)return t.label}function N(e){return JSON.parse(JSON.stringify(e))}const se={name:"CodeEditor",props:{value:{type:String,default:""},placeholder:{type:String,default:""},height:{type:String,default:"200px"},mode:{type:String,default:"json"}},components:{Codemirror:Y},data(){return{}},computed:{value_:{get(){return this.value},set(e){this.$emit("update:value",e)}},editorStyle(){return{width:"100%",height:this.height,"font-size":"16px"}},extensions(){return this.mode=="twig"?[Z(),B]:[ee(),B]}},methods:{async getData(){}},created(){this.getData()}};function de(e,t,n,d,l,i){const u=a("codemirror");return b(),k(u,{modelValue:i.value_,"onUpdate:modelValue":t[0]||(t[0]=p=>i.value_=p),placeholder:n.placeholder,style:te(i.editorStyle),autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:i.extensions},null,8,["modelValue","placeholder","style","extensions"])}const T=D(se,[["render",de]]),ue={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:T},data(){return{loading:!1,rules:re,form:{email_list:""},EventOptions:P,emailListExample:JSON.stringify(["123456@qq.com","domain@163.com"],null,4)}},computed:{disabledTestButton(){return!(this.rowData&&this.rowData.id)}},methods:{async getData(){this.rowData&&this.rowData.value&&this.rowData.value.email_list&&(this.form.email_list=JSON.stringify(this.rowData.value.email_list,null,4))},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(e=>{if(e)this.confirmSubmit();else return!1})},async confirmSubmit(){let e=null;this.form.email_list&&(e=JSON.parse(this.form.email_list));let t={value:{email_list:e}};this.$emit("on-submit",N(t))},handleToSystemSetting(){let e=this.$router.resolve({name:"system-setup"});window.open(e.href,"_blank")}},created(){this.getData()}},me={class:"text-[14px] color--info"},pe={class:"text-center"};function ce(e,t,n,d,l,i){const u=a("CodeEditor"),p=a("el-form-item"),f=a("el-form"),g=a("el-button");return b(),V("div",null,[o(f,{ref:"form",model:l.form,rules:l.rules,"label-width":n.labelWidth},{default:r(()=>[o(p,{label:e.$t("\u90AE\u4EF6\u5217\u8868"),prop:"email_list"},{default:r(()=>[o(u,{modelValue:l.form.email_list,"onUpdate:modelValue":t[0]||(t[0]=_=>l.form.email_list=_),placeholder:`\u793A\u4F8B:
${l.emailListExample}`},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules","label-width"]),m("div",me,[m("span",null,[w("\u63D0\u793A\uFF1A\u53D1\u4EF6\u90AE\u7BB1\u5728"),m("span",{class:"cursor-pointer color--brand",onClick:t[1]||(t[1]=(..._)=>i.handleToSystemSetting&&i.handleToSystemSetting(..._))},"[\u7CFB\u7EDF\u8BBE\u7F6E]"),w("\u4E2D\u914D\u7F6E")])]),m("div",pe,[o(g,{onClick:i.handleCancel},{default:r(()=>[w(y(e.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),o(g,{type:"primary",onClick:i.handleSubmit},{default:r(()=>[w(y(e.$t("\u4FDD\u5B58")),1)]),_:1},8,["onClick"])])])}const J=D(ue,[["render",ce]]),fe=(e,t,n)=>{if(!t)return n();if(!O(t))return n(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(t);q(d)?n():n(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},he={headers:[{validator:fe,trigger:"blur"}],url:[{message:"\u8BF7\u6C42\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},_e={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:T},data(){return{loading:!1,rules:he,form:{method:"POST",url:"",headers:JSON.stringify({"Content-Type":"application/json"},null,4),body:`{
  "title": "\u5230\u671F\u63D0\u9192",
  "content": "{% for row in list %}{{row.domain}} {{row.start_date or '-' }} - {{row.expire_date or '-' }} ({{row.expire_days}}){% endfor %}"
}
`},bodyPlaceholder:"\u652F\u6301jinja2\u6A21\u677F\u8BED\u6CD5",methodOptions:[{label:"GET",value:"GET"},{label:"POST",value:"POST"}],headerExample:JSON.stringify({"User-Agent":"Mozilla/5.0","Content-Type":"application/json"},null,4)}},computed:{},methods:{async getData(){console.log(this.rowData);let e=this.rowData;if(e&&e.value){let t="";e.value.headers&&(t=JSON.stringify(e.value.headers,null,4)),this.form={method:e.value.method,url:e.value.url,headers:t,body:e.value.body}}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(e=>{if(e)this.confirmSubmit();else return!1})},async confirmSubmit(){let e=null;this.form.headers&&(e=JSON.parse(this.form.headers));let t={value:{method:this.form.method,url:this.form.url,headers:e,body:this.form.body}};this.$emit("on-submit",N(t))}},created(){this.getData()}},be=m("div",{class:"text-[14px] color--info"},[m("span",null,"\u8D44\u6E90\u63A8\u8350\uFF1A"),m("a",{href:"https://pengshiyu.blog.csdn.net/article/details/124135877",class:"color--brand",target:"_blank"},"\u5FAE\u4FE1\u63A8\u9001\u6D88\u606F\u901A\u77E5\u63A5\u53E3\u6C47\u603B")],-1),ge={class:"text-center mt-md"};function ye(e,t,n,d,l,i){const u=a("el-option"),p=a("el-select"),f=a("el-form-item"),g=a("el-input"),_=a("CodeEditor"),v=a("el-form"),s=a("el-button"),S=x("loading");return $((b(),V("div",null,[o(v,{ref:"form",model:l.form,rules:l.rules,"label-width":n.labelWidth},{default:r(()=>[o(f,{label:"\u8BF7\u6C42\u65B9\u6CD5",prop:"method"},{default:r(()=>[o(p,{modelValue:l.form.method,"onUpdate:modelValue":t[0]||(t[0]=c=>l.form.method=c),placeholder:"\u8BF7\u6C42\u65B9\u6CD5",style:{width:"100px"}},{default:r(()=>[(b(!0),V(W,null,j(l.methodOptions,c=>(b(),k(u,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(f,{label:"\u8BF7\u6C42\u5730\u5740",prop:"url"},{default:r(()=>[o(g,{type:"text",modelValue:l.form.url,"onUpdate:modelValue":t[1]||(t[1]=c=>l.form.url=c),placeholder:"\u8BF7\u6C42\u5730\u5740"},null,8,["modelValue"])]),_:1}),o(f,{label:"\u8BF7\u6C42\u5934",prop:"headers"},{default:r(()=>[o(_,{modelValue:l.form.headers,"onUpdate:modelValue":t[2]||(t[2]=c=>l.form.headers=c),height:"100px",placeholder:`\u793A\u4F8B: 
${l.headerExample}`},null,8,["modelValue","placeholder"])]),_:1}),o(f,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:r(()=>[o(_,{mode:"twig",modelValue:l.form.body,"onUpdate:modelValue":t[3]||(t[3]=c=>l.form.body=c),height:"140px",placeholder:l.bodyPlaceholder},null,8,["modelValue","placeholder"])]),_:1})]),_:1},8,["model","rules","label-width"]),be,m("div",ge,[o(s,{onClick:i.handleCancel},{default:r(()=>[w(y(e.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),o(s,{type:"primary",onClick:i.handleSubmit},{default:r(()=>[w(y(e.$t("\u4FDD\u5B58")),1)]),_:1},8,["onClick"])])])),[[S,l.loading]])}const R=D(_e,[["render",ye]]),ve=(e,t,n)=>{if(!t)return n();if(!O(t))return n(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(t);q(d)?n():n(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},we={body:[{message:"\u8BF7\u6C42\u4F53\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{validator:ve,trigger:"blur"}],corpid:[{message:"\u4F01\u4E1AID\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],corpsecret:[{message:"\u51ED\u8BC1\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},Se={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:T},data(){return{loading:!1,rules:we,form:{corpid:"",corpsecret:"",body:""},defaultBody:JSON.stringify({touser:"@all",msgtype:"text",agentid:1,text:{content:`\u4F60\u7684\u57DF\u540D\u8BC1\u4E66\u5373\u5C06\u5230\u671F
\u70B9\u51FB\u67E5\u770B<a href="${window.location.href}">Domain Admin</a>`}},null,4)}},computed:{},methods:{async getData(){let e=this.rowData;console.log(this.rowData),e&&e.value?this.form={corpid:e.value.corpid,corpsecret:e.value.corpsecret,body:e.value.body}:this.form.body=this.defaultBody},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit"),this.$refs.form.validate(e=>{if(e)this.confirmSubmit();else return console.log("err"),!1})},async confirmSubmit(){console.log("confirmSubmit");let e={value:{corpid:this.form.corpid,corpsecret:this.form.corpsecret,body:this.form.body}};this.$emit("on-submit",N(e))}},created(){this.getData()}},Ce=m("div",{class:"text-[14px] color--info"},[m("span",null,"\u5F00\u53D1\u6587\u6863\uFF1A"),m("a",{href:"https://developer.work.weixin.qq.com/document/path/90236",class:"color--brand",target:"_blank"},"\u4F01\u4E1A\u5FAE\u4FE1-\u53D1\u9001\u5E94\u7528\u6D88\u606F")],-1),Ve={class:"text-center"};function De(e,t,n,d,l,i){const u=a("el-input"),p=a("el-form-item"),f=a("CodeEditor"),g=a("el-form"),_=a("el-button"),v=x("loading");return $((b(),V("div",null,[o(g,{ref:"form",model:l.form,rules:l.rules,"label-width":n.labelWidth},{default:r(()=>[o(p,{label:"\u4F01\u4E1AID",prop:"corpid"},{default:r(()=>[o(u,{type:"text",modelValue:l.form.corpid,"onUpdate:modelValue":t[0]||(t[0]=s=>l.form.corpid=s),placeholder:"corpid"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u51ED\u8BC1\u5BC6\u94A5",prop:"corpsecret"},{default:r(()=>[o(u,{type:"text",modelValue:l.form.corpsecret,"onUpdate:modelValue":t[1]||(t[1]=s=>l.form.corpsecret=s),placeholder:"corpsecret"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:r(()=>[o(f,{mode:"json",modelValue:l.form.body,"onUpdate:modelValue":t[2]||(t[2]=s=>l.form.body=s),height:"200px",placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","label-width"]),Ce,m("div",Ve,[o(_,{onClick:i.handleCancel},{default:r(()=>[w(y(e.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),o(_,{type:"primary",onClick:i.handleSubmit},{default:r(()=>[w(y(e.$t("\u4FDD\u5B58")),1)]),_:1},8,["onClick"])])])),[[v,l.loading]])}const F=D(Se,[["render",De]]),ke=(e,t,n)=>{if(!t)return n();if(!O(t))return n(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(t);q(d)?n():n(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},Ee={body:[{message:"\u8BF7\u6C42\u4F53\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{validator:ke,trigger:"blur"}],appkey:[{message:"\u5E94\u7528key\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],appsecret:[{message:"\u5E94\u7528\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},Oe={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:T},data(){return{loading:!1,rules:Ee,form:{appkey:"",appsecret:"",body:""},defaultBody:JSON.stringify({agent_id:"",userid_list:"",msg:{msgtype:"text",text:{content:"\u57DF\u540D\u6216\u8BC1\u4E66\u8FC7\u671F\u63D0\u9192"}}},null,4)}},computed:{},methods:{async getData(){let e=this.rowData;console.log(this.rowData),e&&e.value?this.form={appkey:e.value.appkey,appsecret:e.value.appsecret,body:e.value.body}:this.form.body=this.defaultBody},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit"),this.$refs.form.validate(e=>{if(e)this.confirmSubmit();else return console.log("err"),!1})},async confirmSubmit(){console.log("confirmSubmit");let e={value:{appkey:this.form.appkey,appsecret:this.form.appsecret,body:this.form.body}};this.$emit("on-submit",N(e))}},created(){this.getData()}},xe=m("div",{class:"text-[14px] color--info"},[m("span",null,"\u5F00\u53D1\u6587\u6863\uFF1A"),m("a",{href:"https://open.dingtalk.com/document/orgapp/asynchronous-sending-of-enterprise-session-messages",class:"color--brand",target:"_blank"},"\u9489\u9489\u5F00\u653E\u5E73\u53F0-\u53D1\u9001\u5DE5\u4F5C\u901A\u77E5")],-1),$e={class:"text-center"};function Ne(e,t,n,d,l,i){const u=a("el-input"),p=a("el-form-item"),f=a("CodeEditor"),g=a("el-form"),_=a("el-button"),v=x("loading");return $((b(),V("div",null,[o(g,{ref:"form",model:l.form,rules:l.rules,"label-width":n.labelWidth},{default:r(()=>[o(p,{label:"\u5E94\u7528key",prop:"appkey"},{default:r(()=>[o(u,{type:"text",modelValue:l.form.appkey,"onUpdate:modelValue":t[0]||(t[0]=s=>l.form.appkey=s),placeholder:"appkey"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u5E94\u7528\u5BC6\u94A5",prop:"appsecret"},{default:r(()=>[o(u,{type:"text",modelValue:l.form.appsecret,"onUpdate:modelValue":t[1]||(t[1]=s=>l.form.appsecret=s),placeholder:"appsecret"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:r(()=>[o(f,{mode:"json",modelValue:l.form.body,"onUpdate:modelValue":t[2]||(t[2]=s=>l.form.body=s),height:"200px",placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","label-width"]),xe,m("div",$e,[o(_,{onClick:i.handleCancel},{default:r(()=>[w(y(e.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),o(_,{type:"primary",onClick:i.handleSubmit},{default:r(()=>[w(y(e.$t("\u4FDD\u5B58")),1)]),_:1},8,["onClick"])])])),[[v,l.loading]])}const I=D(Oe,[["render",Ne]]),Te=(e,t,n)=>{if(!t)return n();if(!O(t))return n(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(t);q(d)?n():n(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},Ue={body:[{message:"\u8BF7\u6C42\u4F53\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{validator:Te,trigger:"blur"}],app_id:[{message:"\u5E94\u7528key\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],app_secret:[{message:"\u5E94\u7528\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},We=[{value:"open_id",label:"open_id"},{value:"user_id",label:"user_id"},{value:"union_id",label:"union_id"},{value:"email",label:"email"},{value:"chat_id",label:"chat_id"}],je={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:T},data(){return{loading:!1,rules:Ue,receiveIdTypeOptions:We,form:{app_id:"",app_secret:"",receive_id_type:"open_id",body:""},defaultBody:JSON.stringify({receive_id:"<open_id>",msg_type:"text",content:JSON.stringify({text:"\u57DF\u540D\u6216\u8BC1\u4E66\u8FC7\u671F\u63D0\u9192"})},null,4)}},computed:{},methods:{async getData(){let e=this.rowData;console.log(this.rowData),e&&e.value?this.form={app_id:e.value.app_id,app_secret:e.value.app_secret,body:e.value.body,receive_id_type:e.value.params.receive_id_type}:this.form.body=this.defaultBody},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit"),this.$refs.form.validate(e=>{if(e)this.confirmSubmit();else return console.log("err"),!1})},async confirmSubmit(){console.log("confirmSubmit");let e={value:{app_id:this.form.app_id,app_secret:this.form.app_secret,params:{receive_id_type:this.form.receive_id_type},body:this.form.body}};this.$emit("on-submit",N(e))}},created(){this.getData()}},qe=m("div",{class:"text-[14px] color--info"},[m("span",null,"\u5F00\u53D1\u6587\u6863\uFF1A"),m("a",{href:"https://open.feishu.cn/document/server-docs/im-v1/message/create",class:"color--brand",target:"_blank"},"\u98DE\u4E66\u5F00\u653E\u5E73\u53F0-\u53D1\u9001\u6D88\u606F")],-1),Be={class:"text-center"};function Je(e,t,n,d,l,i){const u=a("el-input"),p=a("el-form-item"),f=a("el-option"),g=a("el-select"),_=a("CodeEditor"),v=a("el-form"),s=a("el-button"),S=x("loading");return $((b(),V("div",null,[o(v,{ref:"form",model:l.form,rules:l.rules,"label-width":n.labelWidth},{default:r(()=>[o(p,{label:"\u5E94\u7528key",prop:"app_id"},{default:r(()=>[o(u,{type:"text",modelValue:l.form.app_id,"onUpdate:modelValue":t[0]||(t[0]=c=>l.form.app_id=c),placeholder:"app_id"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u5E94\u7528\u5BC6\u94A5",prop:"app_secret"},{default:r(()=>[o(u,{type:"text",modelValue:l.form.app_secret,"onUpdate:modelValue":t[1]||(t[1]=c=>l.form.app_secret=c),placeholder:"app_secret"},null,8,["modelValue"])]),_:1}),o(p,{label:"ID\u7C7B\u578B",prop:"receive_id_type"},{default:r(()=>[o(g,{modelValue:l.form.receive_id_type,"onUpdate:modelValue":t[2]||(t[2]=c=>l.form.receive_id_type=c),placeholder:"\u6D88\u606F\u63A5\u6536\u8005id\u7C7B\u578B"},{default:r(()=>[(b(!0),V(W,null,j(l.receiveIdTypeOptions,c=>(b(),k(f,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:r(()=>[o(_,{mode:"json",modelValue:l.form.body,"onUpdate:modelValue":t[3]||(t[3]=c=>l.form.body=c),height:"200px",placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","label-width"]),qe,m("div",Be,[o(s,{onClick:i.handleCancel},{default:r(()=>[w(y(e.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),o(s,{type:"primary",onClick:i.handleSubmit},{default:r(()=>[w(y(e.$t("\u4FDD\u5B58")),1)]),_:1},8,["onClick"])])])),[[S,l.loading]])}const z=D(je,[["render",Je]]),Re={name:"",props:{row:{type:Object,default:null}},emits:["on-success","on-cancel"],components:{NotifyEditEmail:J,NotifyEditWebhook:R,NotifyEditWorkWeixin:F,NotifyEditDingTalk:I,NotifyEditFeishu:z},data(){return{hasInit:!1,rowData:null,labelWidth:"90px",options:[{value:C.Email,label:this.$t("\u90AE\u4EF6"),icon:"Message",component:J},{value:C.Webhook,label:"WebHook",icon:"AlarmClock",component:R},{value:C.WorkWeixin,label:this.$t("\u4F01\u4E1A\u5FAE\u4FE1"),icon:"ChatSquare",component:F},{value:C.DingTalk,label:this.$t("\u9489\u9489"),icon:"ChatSquare",component:I},{value:C.Feishu,label:this.$t("\u98DE\u4E66"),icon:"ChatSquare",component:z}],rules:oe,EventOptions:P,form:{event_id:Q.SSL_CERT_EXPIRE,type_id:C.Email,expire_days:3,comment:""}}},computed:{currentComponent(){return this.options.find(e=>e.value==this.form.type_id).component},disabledType(){return Boolean(this.row&&this.row.id)}},methods:{async getData(){if(this.row){let e={notify_id:this.row.id};const t=await this.$http.getNotifyById(e);if(t.ok){this.rowData=t.data;let n=t.data;this.form.event_id=n.event_id,this.form.type_id=n.type_id,this.form.value=n.value,this.form.expire_days=n.expire_days,this.form.comment=n.comment}}this.hasInit=!0},handleCancel(){this.$emit("on-cancel")},handleSubmit(e){console.log(e),this.$refs.form.validate(t=>{if(t)this.confirmSubmit(e);else return!1})},async confirmSubmit(e){let t=this.$loading({fullscreen:!0}),n={event_id:this.form.event_id,type_id:this.form.type_id,expire_days:this.form.expire_days,comment:this.form.comment,value:e.value},d=null;this.row?(n.notify_id=this.row.id,d=await this.$http.updateNotifyById(n)):d=await this.$http.addNotify(n),d.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(d.msg),this.$nextTick(()=>{t.close()})},handleClose(){this.$emit("on-cancel")}},created(){this.getData()}};function Fe(e,t,n,d,l,i){const u=a("el-option"),p=a("el-select"),f=a("el-form-item"),g=a("el-input-number"),_=a("el-input"),v=a("el-form");return b(),V("div",null,[o(v,{ref:"form",model:l.form,rules:l.rules,"label-width":l.labelWidth},{default:r(()=>[o(f,{label:e.$t("\u901A\u77E5\u65B9\u5F0F"),prop:"type_id"},{default:r(()=>[o(p,{placeholder:"\u901A\u77E5\u65B9\u5F0F",modelValue:l.form.type_id,"onUpdate:modelValue":t[0]||(t[0]=s=>l.form.type_id=s),disabled:i.disabledType},{default:r(()=>[(b(!0),V(W,null,j(l.options,s=>(b(),k(u,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label"]),o(f,{label:e.$t("\u89E6\u53D1\u4E8B\u4EF6"),prop:"event_id"},{default:r(()=>[o(p,{placeholder:e.$t("\u89E6\u53D1\u4E8B\u4EF6"),modelValue:l.form.event_id,"onUpdate:modelValue":t[1]||(t[1]=s=>l.form.event_id=s)},{default:r(()=>[(b(!0),V(W,null,j(l.EventOptions,s=>(b(),k(u,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"]),o(f,{label:e.$t("\u5269\u4F59\u5929\u6570"),prop:"expire_days"},{default:r(()=>[o(g,{modelValue:l.form.expire_days,"onUpdate:modelValue":t[2]||(t[2]=s=>l.form.expire_days=s),min:0,placeholder:"\u8FC7\u671F\u901A\u77E5"},null,8,["modelValue"])]),_:1},8,["label"]),o(f,{label:e.$t("\u5907\u6CE8"),prop:"comment"},{default:r(()=>[o(_,{modelValue:l.form.comment,"onUpdate:modelValue":t[3]||(t[3]=s=>l.form.comment=s),placeholder:e.$t("\u5907\u6CE8")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules","label-width"]),l.hasInit?(b(),k(le(i.currentComponent),{key:0,rowData:l.rowData,labelWidth:l.labelWidth,onOnSubmit:i.handleSubmit,onOnCancel:i.handleClose},null,40,["rowData","labelWidth","onOnSubmit","onOnCancel"])):A("",!0)])}const Ie=D(Re,[["render",Fe]]),ze={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Ie},data(){return{}},computed:{dialogTitle(){return this.row?this.$t("\u7F16\u8F91\u901A\u77E5"):this.$t("\u6DFB\u52A0\u901A\u77E5")},dialogVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function Pe(e,t,n,d,l,i){const u=a("DataForm"),p=a("el-dialog");return b(),k(p,{title:i.dialogTitle,modelValue:i.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=f=>i.dialogVisible=f),width:"800px",center:"",top:"8vh","append-to-body":""},{default:r(()=>[i.dialogVisible?(b(),k(u,{key:0,row:n.row,onOnCancel:i.handleClose,onOnSuccess:i.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):A("",!0)]),_:1},8,["title","modelValue"])}const L=D(ze,[["render",Pe]]),Ae={name:"",components:{DataFormDialog:L},props:{list:{type:Array}},emits:["on-sort-change"],computed:{},data(){return{currentRow:null,dialogVisible:!1,NotifyTypeEnum:C}},methods:{handleEditRow(e){this.currentRow=e,this.dialogVisible=!0},async handleDeleteClick(e){let t={notify_id:e.id};const n=await this.$http.deleteNotifyById(t);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},async handleStatusChange(e,t){let n={notify_id:e.id,status:t};const d=await this.$http.updateNotifyStatusById(n);d.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(d.msg)},handleUpdateSuccess(){this.$emit("on-success")},async handleTestRow(e){let t=this.$loading({fullscreen:!0}),n={notify_id:e.id};const d=await this.$http.handleTestNotifyById(n);if(d.code==0){let l=d.data;try{l=JSON.parse(l)}catch{}this.$msg.success(l||"\u64CD\u4F5C\u6210\u529F")}else this.$msg.error(d.msg);this.$nextTick(()=>{t.close()})}},created(){}},Le={class:"inline-flex items-center"},Ge={class:"mr-[2px]"};function He(e,t,n,d,l,i){const u=a("el-table-column"),p=a("el-switch"),f=a("Warning"),g=a("el-icon"),_=a("el-tooltip"),v=a("Position"),s=a("el-link"),S=a("el-popconfirm"),c=a("Edit"),G=a("Delete"),H=a("el-table"),M=a("DataFormDialog");return b(),V("div",null,[o(H,{data:n.list,stripe:"",border:"",onSortChange:t[0]||(t[0]=h=>e.$emit("on-sort-change",h))},{default:r(()=>[o(u,{label:e.$t("\u5E8F\u53F7"),align:"center",prop:"id",width:"60"},{default:r(h=>[m("span",null,y(h.$index+1),1)]),_:1},8,["label"]),o(u,{label:e.$t("\u4E8B\u4EF6\u7C7B\u578B"),"header-align":"center",align:"left",width:"150",prop:"event_id",sortable:"custom"},{default:r(h=>[m("span",null,y(h.row.event_label||"-"),1)]),_:1},8,["label"]),o(u,{label:e.$t("\u901A\u77E5\u65B9\u5F0F"),"header-align":"center",align:"left",width:"150",prop:"type_id",sortable:"custom"},{default:r(h=>[m("span",null,y(h.row.type_label||"-"),1)]),_:1},8,["label"]),o(u,{label:e.$t("\u5269\u4F59\u5929\u6570"),"header-align":"center",align:"center",width:"90",prop:"expire_days",sortable:"custom"},{default:r(h=>[m("span",null,y(h.row.expire_days||"-"),1)]),_:1},8,["label"]),o(u,{label:e.$t("\u5907\u6CE8"),"header-align":"center",align:"left",prop:"comment"},{default:r(h=>[m("span",null,y(h.row.comment||"-"),1)]),_:1},8,["label"]),o(u,{label:e.$t("\u542F\u7528"),"header-align":"center",align:"center",width:"90",prop:"status",sortable:"custom"},{default:r(h=>[o(p,{modelValue:h.row.status,"onUpdate:modelValue":E=>h.row.status=E,onChange:E=>i.handleStatusChange(h.row,E)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"]),o(u,{label:e.$t("\u6D4B\u8BD5"),"header-align":"center",align:"center",width:"80"},{header:r(()=>[o(_,{effect:"dark",content:"\u5982\u679C\u6536\u4E0D\u5230\u6D88\u606F\uFF0C\u53EF\u5C1D\u8BD5\u589E\u52A0\uFF1A\u5269\u4F59\u5929\u6570",placement:"top-start","show-after":800},{default:r(()=>[m("div",Le,[m("span",Ge,y(e.$t("\u6D4B\u8BD5")),1),o(g,null,{default:r(()=>[o(f)]),_:1})])]),_:1})]),default:r(h=>[o(S,{title:"\u786E\u5B9A\u53D1\u9001\uFF1F",onConfirm:E=>i.handleTestRow(h.row)},{reference:r(()=>[o(s,{underline:!1,type:"primary"},{default:r(()=>[o(g,null,{default:r(()=>[o(v)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1},8,["label"]),o(u,{label:e.$t("\u7F16\u8F91"),width:"60","header-align":"center",align:"center"},{default:r(h=>[o(s,{underline:!1,type:"primary",onClick:E=>i.handleEditRow(h.row)},{default:r(()=>[o(g,null,{default:r(()=>[o(c)]),_:1})]),_:2},1032,["onClick"])]),_:1},8,["label"]),o(u,{label:e.$t("\u5220\u9664"),width:"60",align:"center",prop:"tag"},{default:r(h=>[o(S,{title:`${e.$t("\u786E\u5B9A\u5220\u9664")}\uFF1F`,onConfirm:E=>i.handleDeleteClick(h.row)},{reference:r(()=>[o(s,{underline:!1,type:"danger"},{default:r(()=>[o(g,null,{default:r(()=>[o(G)]),_:1})]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1},8,["data"]),o(M,{visible:l.dialogVisible,"onUpdate:visible":t[1]||(t[1]=h=>l.dialogVisible=h),row:l.currentRow,onOnSuccess:i.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"])])}const Me=D(Ae,[["render",He]]),Ke={name:"notify-list",props:{},components:{DataFormDialog:L,DataTable:Me},data(){return{list:[],total:0,page:1,size:20,keyword:"",loading:!0,dialogVisible:!1,order_type:"",order_prop:""}},computed:{},methods:{resetData(){this.page=1,this.getData()},async getData(){this.loading=!0;let e={page:this.page,size:this.size,keyword:this.keyword,order_type:this.order_type,order_prop:this.order_prop};try{const t=await this.$http.getNotifyListOfUser(e);t.code==0&&(this.list=t.data.list.map(n=>(n.type_label=ie(n.type_id),n.event_label=X(n.event_id),n)),this.total=t.data.total)}catch(t){console.log(t)}finally{this.loading=!1}},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},handleSearch(){this.resetData()},handleSortChange({column:e,prop:t,order:n}){console.log(e,t,n),this.order_prop="",this.order_type="",n&&(this.order_type=n,this.order_prop=t),this.resetData()}},created(){this.resetData()}},Qe={class:"app-container"},Xe={class:"margin-bottom--20"};function Ye(e,t,n,d,l,i){const u=a("Plus"),p=a("el-icon"),f=a("el-button"),g=a("DataTable"),_=a("el-pagination"),v=a("DataFormDialog"),s=x("loading");return b(),V("div",Qe,[m("div",Xe,[o(f,{type:"primary",onClick:i.handleAddRow},{default:r(()=>[o(p,null,{default:r(()=>[o(u)]),_:1}),w(y(e.$t("\u6DFB\u52A0")),1)]),_:1},8,["onClick"])]),$(o(g,{class:"mt-md",list:l.list,onOnSuccess:i.resetData,onOnSortChange:i.handleSortChange},null,8,["list","onOnSuccess","onOnSortChange"]),[[s,l.loading]]),o(_,{class:"mt-md justify-center",background:"",layout:"total, prev, pager, next",total:l.total,"page-size":l.size,"onUpdate:pageSize":t[0]||(t[0]=S=>l.size=S),"current-page":l.page,"onUpdate:currentPage":t[1]||(t[1]=S=>l.page=S),onCurrentChange:i.getData},null,8,["total","page-size","current-page","onCurrentChange"]),o(v,{visible:l.dialogVisible,"onUpdate:visible":t[2]||(t[2]=S=>l.dialogVisible=S),onOnSuccess:i.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const at=D(Ke,[["render",Ye]]);export{at as default};
