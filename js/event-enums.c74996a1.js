import{t as n}from"./index.b0be2496.js";function i(t){var e=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return e.test(t)}function l(t){try{return JSON.parse(t),!0}catch{return!1}}function o(t){return Object.prototype.toString.call(t)=="[object Object]"}function _(t){return typeof t!="string"&&(t=""+t),/^\d+$/.test(t)}const a={SSL_CERT_EXPIRE:0,DOMAIN_EXPIRE:1,MONITOR_EXCEPTION:2,SSL_CERT_FILE_EXPIRE:3},r=[{value:a.SSL_CERT_EXPIRE,label:n("SSL\u8BC1\u4E66\u5230\u671F")},{value:a.DOMAIN_EXPIRE,label:n("\u57DF\u540D\u5230\u671F")},{value:a.MONITOR_EXCEPTION,label:n("\u7F51\u7AD9\u5F02\u5E38")},{value:a.SSL_CERT_FILE_EXPIRE,label:n("\u6258\u7BA1\u8BC1\u4E66\u5230\u671F")}];function c(t){const e=r.find(E=>E.value==t);if(e)return e.label}export{a as E,l as a,i as b,r as c,o as d,c as e,_ as i};
