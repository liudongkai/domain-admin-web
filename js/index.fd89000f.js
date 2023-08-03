import{a as E,b as G,c as P,d as q,E as H,e as M}from"./event-enums.6c6f25e7.js";import{T as K,t as Q,o as B,j as X}from"./codemirror-lib.a3a39aa0.js";import{_ as V}from"./index.9e0904d7.js";import{ah as i,o as b,O as x,K as Y,c as S,V as o,P as n,a as p,T as v,ar as O,Q as N,F as W,a8 as j,R as Z,S as A,U as k}from"./vendor-vue.9e61e0af.js";import"./element-icon.1ce1c350.js";import"./vendor-lib.76301fc3.js";import"./element-plus.30eb1cab.js";const ee={status:[{message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],value:[{message:"\u901A\u77E5\u914D\u7F6E\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],expire_days:[{message:"\u5269\u4F59\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},te=(t,e,r)=>{if(!e)return r();if(!E(e))return r(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(e);Array.isArray(d)?d.length==0?r(new Error("\u6570\u7EC4\u957F\u5EA6\u4E0D\u80FD\u4E3A\u7A7A")):d.some(l=>!G(l))?r(new Error("\u6570\u7EC4\u9879\u53EA\u80FD\u662F\u90AE\u7BB1\u5730\u5740")):r():r(new Error("\u5FC5\u987B\u662Farray\u6570\u7EC4"))},le={email_list:[{message:"\u90AE\u4EF6\u5217\u8868\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{validator:te,trigger:"blur"}],type_id:[{message:"\u89E6\u53D1\u4E8B\u4EF6\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},w={Unknown:0,Email:1,Webhook:2,WorkWeixin:3,DingTalk:4,Feishu:5},oe=[{value:w.Email,label:"\u90AE\u4EF6"},{value:w.Webhook,label:"Webhook"},{value:w.WorkWeixin,label:"\u4F01\u4E1A\u5FAE\u4FE1"},{value:w.DingTalk,label:"\u9489\u9489"},{value:w.Feishu,label:"\u98DE\u4E66"}];function re(t){const e=oe.find(r=>r.value==t);if(e)return e.label}function T(t){return JSON.parse(JSON.stringify(t))}const ne={name:"CodeEditor",props:{value:{type:String,default:""},placeholder:{type:String,default:""},height:{type:String,default:"200px"},mode:{type:String,default:"json"}},components:{Codemirror:K},data(){return{}},computed:{value_:{get(){return this.value},set(t){this.$emit("update:value",t)}},editorStyle(){return{width:"100%",height:this.height,"font-size":"16px"}},extensions(){return this.mode=="twig"?[Q(),B]:[X(),B]}},methods:{async getData(){}},created(){this.getData()}};function ie(t,e,r,d,l,a){const u=i("codemirror");return b(),x(u,{modelValue:a.value_,"onUpdate:modelValue":e[0]||(e[0]=m=>a.value_=m),placeholder:r.placeholder,style:Y(a.editorStyle),autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:a.extensions},null,8,["modelValue","placeholder","style","extensions"])}const U=V(ne,[["render",ie]]),ae={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:U},data(){return{loading:!1,rules:le,form:{email_list:""},EventOptions:P,emailListExample:JSON.stringify(["123456@qq.com","domain@163.com"],null,4)}},computed:{disabledTestButton(){return!(this.rowData&&this.rowData.id)}},methods:{async getData(){this.rowData&&this.rowData.value&&this.rowData.value.email_list&&(this.form.email_list=JSON.stringify(this.rowData.value.email_list,null,4))},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=null;this.form.email_list&&(t=JSON.parse(this.form.email_list));let e={value:{email_list:t}};this.$emit("on-submit",T(e))},handleToSystemSetting(){let t=this.$router.resolve({name:"system-setup"});window.open(t.href,"_blank")}},created(){this.getData()}},se={class:"text-[14px] color--info"},de={class:"text-center"};function ue(t,e,r,d,l,a){const u=i("CodeEditor"),m=i("el-form-item"),f=i("el-form"),g=i("el-button");return b(),S("div",null,[o(f,{ref:"form",model:l.form,rules:l.rules,"label-width":r.labelWidth},{default:n(()=>[o(m,{label:"\u90AE\u4EF6\u5217\u8868",prop:"email_list"},{default:n(()=>[o(u,{modelValue:l.form.email_list,"onUpdate:modelValue":e[0]||(e[0]=h=>l.form.email_list=h),placeholder:`\u793A\u4F8B:
${l.emailListExample}`},null,8,["modelValue","placeholder"])]),_:1})]),_:1},8,["model","rules","label-width"]),p("div",se,[p("span",null,[v("\u63D0\u793A\uFF1A\u53D1\u4EF6\u90AE\u7BB1\u5728"),p("span",{class:"cursor-pointer color--brand",onClick:e[1]||(e[1]=(...h)=>a.handleToSystemSetting&&a.handleToSystemSetting(...h))},"[\u7CFB\u7EDF\u8BBE\u7F6E]"),v("\u4E2D\u914D\u7F6E")])]),p("div",de,[o(g,{onClick:a.handleCancel},{default:n(()=>[v("\u53D6 \u6D88")]),_:1},8,["onClick"]),o(g,{type:"primary",onClick:a.handleSubmit},{default:n(()=>[v("\u4FDD \u5B58")]),_:1},8,["onClick"])])])}const J=V(ae,[["render",ue]]),me=(t,e,r)=>{if(!e)return r();if(!E(e))return r(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(e);q(d)?r():r(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},pe={headers:[{validator:me,trigger:"blur"}],url:[{message:"\u8BF7\u6C42\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},ce={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:U},data(){return{loading:!1,rules:pe,form:{method:"POST",url:"",headers:JSON.stringify({"Content-Type":"application/json"},null,4),body:`{
  "title": "\u5230\u671F\u63D0\u9192",
  "content": "{% for row in list %}{{row.domain}} {{row.start_date or '-' }} - {{row.expire_date or '-' }} ({{row.expire_days}}){% endfor %}"
}
`},bodyPlaceholder:"\u652F\u6301jinja2\u6A21\u677F\u8BED\u6CD5",methodOptions:[{label:"GET",value:"GET"},{label:"POST",value:"POST"}],headerExample:JSON.stringify({"User-Agent":"Mozilla/5.0","Content-Type":"application/json"},null,4)}},computed:{},methods:{async getData(){console.log(this.rowData);let t=this.rowData;if(t&&t.value){let e="";t.value.headers&&(e=JSON.stringify(t.value.headers,null,4)),this.form={method:t.value.method,url:t.value.url,headers:e,body:t.value.body}}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=null;this.form.headers&&(t=JSON.parse(this.form.headers));let e={value:{method:this.form.method,url:this.form.url,headers:t,body:this.form.body}};this.$emit("on-submit",T(e))}},created(){this.getData()}},fe=p("div",{class:"text-[14px] color--info"},[p("span",null,"\u8D44\u6E90\u63A8\u8350\uFF1A"),p("a",{href:"https://pengshiyu.blog.csdn.net/article/details/124135877",class:"color--brand",target:"_blank"},"\u5FAE\u4FE1\u63A8\u9001\u6D88\u606F\u901A\u77E5\u63A5\u53E3\u6C47\u603B")],-1),_e={class:"text-center mt-md"};function he(t,e,r,d,l,a){const u=i("el-option"),m=i("el-select"),f=i("el-form-item"),g=i("el-input"),h=i("CodeEditor"),y=i("el-form"),s=i("el-button"),C=O("loading");return N((b(),S("div",null,[o(y,{ref:"form",model:l.form,rules:l.rules,"label-width":r.labelWidth},{default:n(()=>[o(f,{label:"\u8BF7\u6C42\u65B9\u6CD5",prop:"method"},{default:n(()=>[o(m,{modelValue:l.form.method,"onUpdate:modelValue":e[0]||(e[0]=c=>l.form.method=c),placeholder:"\u8BF7\u6C42\u65B9\u6CD5",style:{width:"100px"}},{default:n(()=>[(b(!0),S(W,null,j(l.methodOptions,c=>(b(),x(u,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(f,{label:"\u8BF7\u6C42\u5730\u5740",prop:"url"},{default:n(()=>[o(g,{type:"text",modelValue:l.form.url,"onUpdate:modelValue":e[1]||(e[1]=c=>l.form.url=c),placeholder:"\u8BF7\u6C42\u5730\u5740"},null,8,["modelValue"])]),_:1}),o(f,{label:"\u8BF7\u6C42\u5934",prop:"headers"},{default:n(()=>[o(h,{modelValue:l.form.headers,"onUpdate:modelValue":e[2]||(e[2]=c=>l.form.headers=c),height:"100px",placeholder:`\u793A\u4F8B: 
${l.headerExample}`},null,8,["modelValue","placeholder"])]),_:1}),o(f,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:n(()=>[o(h,{mode:"twig",modelValue:l.form.body,"onUpdate:modelValue":e[3]||(e[3]=c=>l.form.body=c),height:"140px",placeholder:l.bodyPlaceholder},null,8,["modelValue","placeholder"])]),_:1})]),_:1},8,["model","rules","label-width"]),fe,p("div",_e,[o(s,{onClick:a.handleCancel},{default:n(()=>[v("\u53D6 \u6D88")]),_:1},8,["onClick"]),o(s,{type:"primary",onClick:a.handleSubmit},{default:n(()=>[v("\u4FDD \u5B58")]),_:1},8,["onClick"])])])),[[C,l.loading]])}const R=V(ce,[["render",he]]),be=(t,e,r)=>{if(!e)return r();if(!E(e))return r(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(e);q(d)?r():r(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},ge={body:[{message:"\u8BF7\u6C42\u4F53\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{validator:be,trigger:"blur"}],corpid:[{message:"\u4F01\u4E1AID\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],corpsecret:[{message:"\u51ED\u8BC1\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},ye={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:U},data(){return{loading:!1,rules:ge,form:{corpid:"",corpsecret:"",body:""},defaultBody:JSON.stringify({touser:"@all",msgtype:"text",agentid:1,text:{content:`\u4F60\u7684\u57DF\u540D\u8BC1\u4E66\u5373\u5C06\u5230\u671F
\u70B9\u51FB\u67E5\u770B<a href="${window.location.href}">Domain Admin</a>`}},null,4)}},computed:{},methods:{async getData(){let t=this.rowData;console.log(this.rowData),t&&t.value?this.form={corpid:t.value.corpid,corpsecret:t.value.corpsecret,body:t.value.body}:this.form.body=this.defaultBody},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit"),this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return console.log("err"),!1})},async confirmSubmit(){console.log("confirmSubmit");let t={value:{corpid:this.form.corpid,corpsecret:this.form.corpsecret,body:this.form.body}};this.$emit("on-submit",T(t))}},created(){this.getData()}},ve=p("div",{class:"text-[14px] color--info"},[p("span",null,"\u5F00\u53D1\u6587\u6863\uFF1A"),p("a",{href:"https://developer.work.weixin.qq.com/document/path/90236",class:"color--brand",target:"_blank"},"\u4F01\u4E1A\u5FAE\u4FE1-\u53D1\u9001\u5E94\u7528\u6D88\u606F")],-1),we={class:"text-center"};function Se(t,e,r,d,l,a){const u=i("el-input"),m=i("el-form-item"),f=i("CodeEditor"),g=i("el-form"),h=i("el-button"),y=O("loading");return N((b(),S("div",null,[o(g,{ref:"form",model:l.form,rules:l.rules,"label-width":r.labelWidth},{default:n(()=>[o(m,{label:"\u4F01\u4E1AID",prop:"corpid"},{default:n(()=>[o(u,{type:"text",modelValue:l.form.corpid,"onUpdate:modelValue":e[0]||(e[0]=s=>l.form.corpid=s),placeholder:"corpid"},null,8,["modelValue"])]),_:1}),o(m,{label:"\u51ED\u8BC1\u5BC6\u94A5",prop:"corpsecret"},{default:n(()=>[o(u,{type:"text",modelValue:l.form.corpsecret,"onUpdate:modelValue":e[1]||(e[1]=s=>l.form.corpsecret=s),placeholder:"corpsecret"},null,8,["modelValue"])]),_:1}),o(m,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:n(()=>[o(f,{mode:"json",modelValue:l.form.body,"onUpdate:modelValue":e[2]||(e[2]=s=>l.form.body=s),height:"200px",placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","label-width"]),ve,p("div",we,[o(h,{onClick:a.handleCancel},{default:n(()=>[v("\u53D6 \u6D88")]),_:1},8,["onClick"]),o(h,{type:"primary",onClick:a.handleSubmit},{default:n(()=>[v("\u4FDD \u5B58")]),_:1},8,["onClick"])])])),[[y,l.loading]])}const F=V(ye,[["render",Se]]),Ce=(t,e,r)=>{if(!e)return r();if(!E(e))return r(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(e);q(d)?r():r(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},Ve={body:[{message:"\u8BF7\u6C42\u4F53\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{validator:Ce,trigger:"blur"}],appkey:[{message:"\u5E94\u7528key\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],appsecret:[{message:"\u5E94\u7528\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},xe={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:U},data(){return{loading:!1,rules:Ve,form:{appkey:"",appsecret:"",body:""},defaultBody:JSON.stringify({agent_id:"",userid_list:"",msg:{msgtype:"text",text:{content:"\u57DF\u540D\u6216\u8BC1\u4E66\u8FC7\u671F\u63D0\u9192"}}},null,4)}},computed:{},methods:{async getData(){let t=this.rowData;console.log(this.rowData),t&&t.value?this.form={appkey:t.value.appkey,appsecret:t.value.appsecret,body:t.value.body}:this.form.body=this.defaultBody},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit"),this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return console.log("err"),!1})},async confirmSubmit(){console.log("confirmSubmit");let t={value:{appkey:this.form.appkey,appsecret:this.form.appsecret,body:this.form.body}};this.$emit("on-submit",T(t))}},created(){this.getData()}},De=p("div",{class:"text-[14px] color--info"},[p("span",null,"\u5F00\u53D1\u6587\u6863\uFF1A"),p("a",{href:"https://open.dingtalk.com/document/orgapp/asynchronous-sending-of-enterprise-session-messages",class:"color--brand",target:"_blank"},"\u9489\u9489\u5F00\u653E\u5E73\u53F0-\u53D1\u9001\u5DE5\u4F5C\u901A\u77E5")],-1),ke={class:"text-center"};function Ee(t,e,r,d,l,a){const u=i("el-input"),m=i("el-form-item"),f=i("CodeEditor"),g=i("el-form"),h=i("el-button"),y=O("loading");return N((b(),S("div",null,[o(g,{ref:"form",model:l.form,rules:l.rules,"label-width":r.labelWidth},{default:n(()=>[o(m,{label:"\u5E94\u7528key",prop:"appkey"},{default:n(()=>[o(u,{type:"text",modelValue:l.form.appkey,"onUpdate:modelValue":e[0]||(e[0]=s=>l.form.appkey=s),placeholder:"appkey"},null,8,["modelValue"])]),_:1}),o(m,{label:"\u5E94\u7528\u5BC6\u94A5",prop:"appsecret"},{default:n(()=>[o(u,{type:"text",modelValue:l.form.appsecret,"onUpdate:modelValue":e[1]||(e[1]=s=>l.form.appsecret=s),placeholder:"appsecret"},null,8,["modelValue"])]),_:1}),o(m,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:n(()=>[o(f,{mode:"json",modelValue:l.form.body,"onUpdate:modelValue":e[2]||(e[2]=s=>l.form.body=s),height:"200px",placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","label-width"]),De,p("div",ke,[o(h,{onClick:a.handleCancel},{default:n(()=>[v("\u53D6 \u6D88")]),_:1},8,["onClick"]),o(h,{type:"primary",onClick:a.handleSubmit},{default:n(()=>[v("\u4FDD \u5B58")]),_:1},8,["onClick"])])])),[[y,l.loading]])}const I=V(xe,[["render",Ee]]),Oe=(t,e,r)=>{if(!e)return r();if(!E(e))return r(new Error("\u5FC5\u987B\u662Fjson"));let d=JSON.parse(e);q(d)?r():r(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},Ne={body:[{message:"\u8BF7\u6C42\u4F53\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{validator:Oe,trigger:"blur"}],app_id:[{message:"\u5E94\u7528key\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],app_secret:[{message:"\u5E94\u7528\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},Te=[{value:"open_id",label:"open_id"},{value:"user_id",label:"user_id"},{value:"union_id",label:"union_id"},{value:"email",label:"email"},{value:"chat_id",label:"chat_id"}],Ue={name:"",props:{rowData:{type:Object,default:null},labelWidth:{type:String,default:""}},emits:["on-submit","on-cancel"],components:{CodeEditor:U},data(){return{loading:!1,rules:Ne,receiveIdTypeOptions:Te,form:{app_id:"",app_secret:"",receive_id_type:"open_id",body:""},defaultBody:JSON.stringify({receive_id:"<open_id>",msg_type:"text",content:JSON.stringify({text:"\u57DF\u540D\u6216\u8BC1\u4E66\u8FC7\u671F\u63D0\u9192"})},null,4)}},computed:{},methods:{async getData(){let t=this.rowData;console.log(this.rowData),t&&t.value?this.form={app_id:t.value.app_id,app_secret:t.value.app_secret,body:t.value.body,receive_id_type:t.value.params.receive_id_type}:this.form.body=this.defaultBody},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit"),this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return console.log("err"),!1})},async confirmSubmit(){console.log("confirmSubmit");let t={value:{app_id:this.form.app_id,app_secret:this.form.app_secret,params:{receive_id_type:this.form.receive_id_type},body:this.form.body}};this.$emit("on-submit",T(t))}},created(){this.getData()}},We=p("div",{class:"text-[14px] color--info"},[p("span",null,"\u5F00\u53D1\u6587\u6863\uFF1A"),p("a",{href:"https://open.feishu.cn/document/server-docs/im-v1/message/create",class:"color--brand",target:"_blank"},"\u98DE\u4E66\u5F00\u653E\u5E73\u53F0-\u53D1\u9001\u6D88\u606F")],-1),je={class:"text-center"};function qe(t,e,r,d,l,a){const u=i("el-input"),m=i("el-form-item"),f=i("el-option"),g=i("el-select"),h=i("CodeEditor"),y=i("el-form"),s=i("el-button"),C=O("loading");return N((b(),S("div",null,[o(y,{ref:"form",model:l.form,rules:l.rules,"label-width":r.labelWidth},{default:n(()=>[o(m,{label:"\u5E94\u7528key",prop:"app_id"},{default:n(()=>[o(u,{type:"text",modelValue:l.form.app_id,"onUpdate:modelValue":e[0]||(e[0]=c=>l.form.app_id=c),placeholder:"app_id"},null,8,["modelValue"])]),_:1}),o(m,{label:"\u5E94\u7528\u5BC6\u94A5",prop:"app_secret"},{default:n(()=>[o(u,{type:"text",modelValue:l.form.app_secret,"onUpdate:modelValue":e[1]||(e[1]=c=>l.form.app_secret=c),placeholder:"app_secret"},null,8,["modelValue"])]),_:1}),o(m,{label:"ID\u7C7B\u578B",prop:"receive_id_type"},{default:n(()=>[o(g,{modelValue:l.form.receive_id_type,"onUpdate:modelValue":e[2]||(e[2]=c=>l.form.receive_id_type=c),placeholder:"\u6D88\u606F\u63A5\u6536\u8005id\u7C7B\u578B"},{default:n(()=>[(b(!0),S(W,null,j(l.receiveIdTypeOptions,c=>(b(),x(f,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(m,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:n(()=>[o(h,{mode:"json",modelValue:l.form.body,"onUpdate:modelValue":e[3]||(e[3]=c=>l.form.body=c),height:"200px",placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","label-width"]),We,p("div",je,[o(s,{onClick:a.handleCancel},{default:n(()=>[v("\u53D6 \u6D88")]),_:1},8,["onClick"]),o(s,{type:"primary",onClick:a.handleSubmit},{default:n(()=>[v("\u4FDD \u5B58")]),_:1},8,["onClick"])])])),[[C,l.loading]])}const z=V(Ue,[["render",qe]]),Be={name:"",props:{row:{type:Object,default:null}},emits:["on-success","on-cancel"],components:{NotifyEditEmail:J,NotifyEditWebhook:R,NotifyEditWorkWeixin:F,NotifyEditDingTalk:I,NotifyEditFeishu:z},data(){return{hasInit:!1,rowData:null,labelWidth:"90px",options:[{value:w.Email,label:"\u90AE\u4EF6\u901A\u77E5",icon:"Message",component:J},{value:w.Webhook,label:"WebHook",icon:"AlarmClock",component:R},{value:w.WorkWeixin,label:"\u4F01\u4E1A\u5FAE\u4FE1",icon:"ChatSquare",component:F},{value:w.DingTalk,label:"\u9489\u9489",icon:"ChatSquare",component:I},{value:w.Feishu,label:"\u98DE\u4E66",icon:"ChatSquare",component:z}],rules:ee,EventOptions:P,form:{event_id:H.SSL_CERT_EXPIRE,type_id:w.Email,expire_days:3,comment:""}}},computed:{currentComponent(){return this.options.find(t=>t.value==this.form.type_id).component},disabledType(){return Boolean(this.row&&this.row.id)}},methods:{async getData(){if(this.row){let t={notify_id:this.row.id};const e=await this.$http.getNotifyById(t);if(e.ok){this.rowData=e.data;let r=e.data;this.form.event_id=r.event_id,this.form.type_id=r.type_id,this.form.value=r.value,this.form.expire_days=r.expire_days,this.form.comment=r.comment}}this.hasInit=!0},handleCancel(){this.$emit("on-cancel")},handleSubmit(t){console.log(t),this.$refs.form.validate(e=>{if(e)this.confirmSubmit(t);else return!1})},async confirmSubmit(t){let e=this.$loading({fullscreen:!0}),r={event_id:this.form.event_id,type_id:this.form.type_id,expire_days:this.form.expire_days,comment:this.form.comment,value:t.value},d=null;this.row?(r.notify_id=this.row.id,d=await this.$http.updateNotifyById(r)):d=await this.$http.addNotify(r),d.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(d.msg),this.$nextTick(()=>{e.close()})},handleClose(){this.$emit("on-cancel")}},created(){this.getData()}};function Je(t,e,r,d,l,a){const u=i("el-option"),m=i("el-select"),f=i("el-form-item"),g=i("el-input-number"),h=i("el-input"),y=i("el-form");return b(),S("div",null,[o(y,{ref:"form",model:l.form,rules:l.rules,"label-width":l.labelWidth},{default:n(()=>[o(f,{label:"\u901A\u77E5\u65B9\u5F0F",prop:"type_id"},{default:n(()=>[o(m,{placeholder:"\u901A\u77E5\u65B9\u5F0F",modelValue:l.form.type_id,"onUpdate:modelValue":e[0]||(e[0]=s=>l.form.type_id=s),disabled:a.disabledType},{default:n(()=>[(b(!0),S(W,null,j(l.options,s=>(b(),x(u,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),o(f,{label:"\u89E6\u53D1\u4E8B\u4EF6",prop:"event_id"},{default:n(()=>[o(m,{placeholder:"\u89E6\u53D1\u4E8B\u4EF6",modelValue:l.form.event_id,"onUpdate:modelValue":e[1]||(e[1]=s=>l.form.event_id=s)},{default:n(()=>[(b(!0),S(W,null,j(l.EventOptions,s=>(b(),x(u,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(f,{label:"\u5269\u4F59\u5929\u6570",prop:"expire_days"},{default:n(()=>[o(g,{modelValue:l.form.expire_days,"onUpdate:modelValue":e[2]||(e[2]=s=>l.form.expire_days=s),min:0,placeholder:"\u8FC7\u671F\u901A\u77E5"},null,8,["modelValue"])]),_:1}),o(f,{label:"\u5907\u6CE8",prop:"comment"},{default:n(()=>[o(h,{modelValue:l.form.comment,"onUpdate:modelValue":e[3]||(e[3]=s=>l.form.comment=s),placeholder:"\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","label-width"]),l.hasInit?(b(),x(Z(a.currentComponent),{key:0,rowData:l.rowData,labelWidth:l.labelWidth,onOnSubmit:a.handleSubmit,onOnCancel:a.handleClose},null,40,["rowData","labelWidth","onOnSubmit","onOnCancel"])):A("",!0)])}const Re=V(Be,[["render",Je]]),Fe={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Re},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u901A\u77E5":"\u6DFB\u52A0\u901A\u77E5"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function Ie(t,e,r,d,l,a){const u=i("DataForm"),m=i("el-dialog");return b(),x(m,{title:a.dialogTitle,modelValue:a.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=f=>a.dialogVisible=f),width:"800px",center:"",top:"8vh","append-to-body":""},{default:n(()=>[a.dialogVisible?(b(),x(u,{key:0,row:r.row,onOnCancel:a.handleClose,onOnSuccess:a.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):A("",!0)]),_:1},8,["title","modelValue"])}const $=V(Fe,[["render",Ie]]),ze={name:"",components:{DataFormDialog:$},props:{list:{type:Array}},emits:["on-sort-change"],computed:{},data(){return{currentRow:null,dialogVisible:!1,NotifyTypeEnum:w}},methods:{handleEditRow(t){this.currentRow=t,this.dialogVisible=!0},async handleDeleteClick(t){let e={notify_id:t.id};const r=await this.$http.deleteNotifyById(e);r.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(r.msg)},async handleStatusChange(t,e){let r={notify_id:t.id,status:e};const d=await this.$http.updateNotifyStatusById(r);d.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(d.msg)},handleUpdateSuccess(){this.$emit("on-success")},async handleTestRow(t){let e=this.$loading({fullscreen:!0}),r={notify_id:t.id};const d=await this.$http.handleTestNotifyById(r);if(d.code==0){let l=d.data;try{l=JSON.parse(l)}catch{}this.$msg.success(l||"\u64CD\u4F5C\u6210\u529F")}else this.$msg.error(d.msg);this.$nextTick(()=>{e.close()})}},created(){}};function Pe(t,e,r,d,l,a){const u=i("el-table-column"),m=i("el-switch"),f=i("Position"),g=i("el-icon"),h=i("el-link"),y=i("el-popconfirm"),s=i("Edit"),C=i("Delete"),c=i("el-table"),L=i("DataFormDialog");return b(),S("div",null,[o(c,{data:r.list,stripe:"",border:"",onSortChange:e[0]||(e[0]=_=>t.$emit("on-sort-change",_))},{default:n(()=>[o(u,{label:"\u5E8F\u53F7",align:"center",prop:"id",width:"60"},{default:n(_=>[p("span",null,k(_.$index+1),1)]),_:1}),o(u,{label:"\u4E8B\u4EF6\u7C7B\u578B","header-align":"center",align:"left",width:"150",prop:"event_id",sortable:"custom"},{default:n(_=>[p("span",null,k(_.row.event_label||"-"),1)]),_:1}),o(u,{label:"\u901A\u77E5\u65B9\u5F0F","header-align":"center",align:"left",width:"150",prop:"type_id",sortable:"custom"},{default:n(_=>[p("span",null,k(_.row.type_label||"-"),1)]),_:1}),o(u,{label:"\u5269\u4F59\u5929\u6570","header-align":"center",align:"center",width:"90",prop:"expire_days",sortable:"custom"},{default:n(_=>[p("span",null,k(_.row.expire_days||"-"),1)]),_:1}),o(u,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"comment"},{default:n(_=>[p("span",null,k(_.row.comment||"-"),1)]),_:1}),o(u,{label:"\u542F\u7528","header-align":"center",align:"center",width:"80",prop:"status",sortable:"custom"},{default:n(_=>[o(m,{modelValue:_.row.status,"onUpdate:modelValue":D=>_.row.status=D,onChange:D=>a.handleStatusChange(_.row,D)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),o(u,{label:"\u6D4B\u8BD5","header-align":"center",align:"center",width:"80"},{default:n(_=>[o(y,{title:"\u786E\u5B9A\u53D1\u9001\uFF1F",onConfirm:D=>a.handleTestRow(_.row)},{reference:n(()=>[o(h,{underline:!1,type:"primary"},{default:n(()=>[o(g,null,{default:n(()=>[o(f)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1}),o(u,{label:"\u7F16\u8F91",width:"60","header-align":"center",align:"center"},{default:n(_=>[o(h,{underline:!1,type:"primary",onClick:D=>a.handleEditRow(_.row)},{default:n(()=>[o(g,null,{default:n(()=>[o(s)]),_:1})]),_:2},1032,["onClick"])]),_:1}),o(u,{label:"\u5220\u9664",width:"60",align:"center",prop:"tag"},{default:n(_=>[o(y,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:D=>a.handleDeleteClick(_.row)},{reference:n(()=>[o(h,{underline:!1,type:"danger"},{default:n(()=>[o(g,null,{default:n(()=>[o(C)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),o(L,{visible:l.dialogVisible,"onUpdate:visible":e[1]||(e[1]=_=>l.dialogVisible=_),row:l.currentRow,onOnSuccess:a.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"])])}const Ae=V(ze,[["render",Pe]]),$e={name:"notify-list",props:{},components:{DataFormDialog:$,DataTable:Ae},data(){return{list:[],total:0,page:1,size:20,keyword:"",loading:!0,dialogVisible:!1,order_type:"",order_prop:""}},computed:{},methods:{resetData(){this.page=1,this.getData()},async getData(){this.loading=!0;let t={page:this.page,size:this.size,keyword:this.keyword,order_type:this.order_type,order_prop:this.order_prop};try{const e=await this.$http.getNotifyListOfUser(t);e.code==0&&(this.list=e.data.list.map(r=>(r.type_label=re(r.type_id),r.event_label=M(r.event_id),r)),this.total=e.data.total)}catch(e){console.log(e)}finally{this.loading=!1}},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},handleSearch(){this.resetData()},handleSortChange({column:t,prop:e,order:r}){console.log(t,e,r),this.order_prop="",this.order_type="",r&&(this.order_type=r,this.order_prop=e),this.resetData()}},created(){this.resetData()}},Le={class:"app-container"},Ge={class:"margin-bottom--20"};function He(t,e,r,d,l,a){const u=i("Plus"),m=i("el-icon"),f=i("el-button"),g=i("DataTable"),h=i("el-pagination"),y=i("DataFormDialog"),s=O("loading");return b(),S("div",Le,[p("div",Ge,[o(f,{type:"primary",onClick:a.handleAddRow},{default:n(()=>[o(m,null,{default:n(()=>[o(u)]),_:1}),v("\u6DFB\u52A0")]),_:1},8,["onClick"])]),N(o(g,{class:"mt-md",list:l.list,onOnSuccess:a.resetData,onOnSortChange:a.handleSortChange},null,8,["list","onOnSuccess","onOnSortChange"]),[[s,l.loading]]),o(h,{class:"mt-md justify-center",background:"",layout:"total, prev, pager, next",total:l.total,"page-size":l.size,"onUpdate:pageSize":e[0]||(e[0]=C=>l.size=C),"current-page":l.page,"onUpdate:currentPage":e[1]||(e[1]=C=>l.page=C),onCurrentChange:a.getData},null,8,["total","page-size","current-page","onCurrentChange"]),o(y,{visible:l.dialogVisible,"onUpdate:visible":e[2]||(e[2]=C=>l.dialogVisible=C),onOnSuccess:a.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const tt=V($e,[["render",He]]);export{tt as default};