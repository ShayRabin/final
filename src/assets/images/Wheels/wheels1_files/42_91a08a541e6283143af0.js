(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[42],{819:function(e,n,t){"use strict";t.d(n,{w:function(){return y}});t(34769),t(34115),t(95342),t(9e4),t(26464),t(18339),t(68625),t(36728),t(34715),t(19570),t(1939),t(62775),t(76555),t(95094);var r=t(63987),a=t.n(r),o=t(77797),c=t.n(o),i=t(69834),l=t.n(i),s=(t(15735),t(58188),t(73439),t(28673),t(6886),t(35079)),u=t.n(s),p=t(58788),g=t(65615),m=t(18206),f=t(68135),d=t(58818),v=t(81235);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _={40001:function(){}},w=function(){var e=l()(u().mark((function e(n,t,r){var a,o,c,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:o=(a=n||{}).uin,c=a.uaid,((i=(null==t?void 0:t.result)||{}).avatar||i.nickname)&&(n=b(b({},n),{},{avatar:i.avatar,nick_name:i.nickname})),(0,v.uV)({uin:o,uaid:c,latestAccountInfo:b(b({},n),{},{remember:r})});case 6:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),y=function(){var e=l()(u().mark((function e(){var n,t,r,o,c,i,l,s,h,y,E,C,k,x,O=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(n=O.length>0&&void 0!==O[0]?O[0]:{}).axiosHttp,r=n.params,o=t||(0,f.Z)(),e.next=4,Promise.all([o.post("/api/bg-barbera-api/user/short/profile",{},{useAntiToken:!0,errorCodeHandlers:_}).catch((function(){})),o.post("/api/bg/sigerus/auth/remember_me/check",{},{useAntiToken:!0,errorCodeHandlers:_}).catch((function(){}))]);case 4:return c=e.sent,i=a()(c,2),l=i[0],s=i[1],h=(null==s?void 0:s.result)||{},y=h.uaid,E=h.uin,C=(0,v.o_)({uaid:y,uin:E}),k=(C||{}).remember,x=b({scene:1,remove_account:!k},r),w(C,l,k),e.next=15,o.post("/api/bg/sigerus/auth/logout",x);case 15:try{sessionStorage.setItem(d.gF,1)}catch(e){}(0,g.oP)({op:"event",sub_op:"logout"}),(0,m.mH)(),(0,p.kS)();case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},42:function(e,n,t){"use strict";t.d(n,{R:function(){return he}});var r=t(29684),a=t.n(r),o=t(69834),c=t.n(o),i=t(35079),l=t.n(i),s=(t(58188),t(73439),t(71372),t(72147),t(18178),t(77950),t(48319),t(49228),t(48166),t(26464),t(45162),t(54529)),u=t(9953),p=t(51528),g=t(98111),m=t(15716),f=t(21335),d=t(64906),v=t(819),h=t(65615),b={lineHeight:"20px"},_="TRIGGER_LIMIT",w="LIMIT_TIPS_CONFIRM",y="LIMIT_TIPS_CLOSE",E="SWITCH_REGIN_CONFIRM",C="SWITCH_REGIN_CANCEL",k="SWITCH_REGIN_CLOSE",x="SWITCH_LANGUAGE_CONFIRM",O="SWITCH_LANGUAGE_CLOSE",N="SWITCH_LANGUAGE_CANCEL",I="SWITCH_SUCCESS_CONFIRM",P="SWITCH_INIT",j="SWITCH_DONE",T=213047,L=213048,S=213050,A=213049,D=213056,Z=function(e){return e.userActive="userActive",e}({}),R=function(e){return e.country="country",e.language="language",e}({}),H=t(77797),B=t.n(H),F=t(63987),z=t.n(F),G=(t(43450),t(64925),t(54819),t(34769),t(34115),t(95342),t(9e4),t(18339),t(68625),t(36728),t(34715),t(19570),t(1939),t(62775),t(76555),t(95094),t(72779)),U=t.n(G),M=t(28485),W=t(68940),K=t(56588),Y=t(37162),V=t(85942),X=t.n(V);function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?J(Object(t),!0).forEach((function(n){B()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=function(e){var n,t=e.title,r=e.text,a=e.cancel,o=e.confirm,c=e.languageList,i=e.onCancel,l=e.onConfirm,u=e.onClose,p=(0,s.useState)(null===(n=c[0])||void 0===n?void 0:n.lang),g=z()(p,2),m=g[0],f=g[1];return s.createElement(M.ZP,{className:X().popContain,onClick:u},s.createElement("div",null,s.createElement("div",{className:U()(X().title,X().langTitle)},t),s.createElement("div",{className:U()(X().tipsText,X().langTip)},r),s.createElement("div",{className:X().langList},c.map((function(e,n){var t=e.lang,r=e.standard_lang_text,a=e.current_lang_text;return s.createElement("div",{key:n,className:X().langItem,onClick:function(){return f(t)}},s.createElement(W.Y8,{isChecked:t===m}),s.createElement("p",{className:X().langName},s.createElement("span",{className:X().standLang},r),s.createElement("span",{className:X().currentLangName},a)))}))),s.createElement("div",{className:X().langHandleArea},s.createElement(K.Z,{"aria-label":a,type:"border",size:"xl",style:Q({width:152},b),onClick:i},s.createElement(Y.ZP,{payload:{page_el_sn:A}},s.createElement("span",null,a))),s.createElement(K.Z,{"aria-label":o,type:"main",size:"xl",style:Q({width:152},b),onClick:function(){return null==l?void 0:l(m)}},s.createElement(Y.ZP,{payload:{page_el_sn:S}},s.createElement("span",null,o))))))},q=function(e){return{getTips:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.post("/api/bg/huygens/text/change/country/tips",n)},getIsTriggerChangeLimit:function(n){return e.post("/api/bg/huygens/text/region/change/limit",n)},getLanguageList:function(n){return e.post("/api/bg/huygens/text/change/lang",n)}}},ee=t(69033),ne=t(84838),te=t(24974),re=t(6478),ae=t(83451),oe=t(34979);function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var ie=function(e,n){return(0,ae.IV)(e)!==(0,ae.IV)(n)},le=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,oe.Z)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ce(Object(t),!0).forEach((function(n){B()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({groupId:100399,type:"local-switch",pagePath:location.pathname},n))},se=function(e){return(p._6[e]||"us").toUpperCase()},ue=function(e){var n=e.localInfo,t=e.switchInfo,r=e.onClose,o=e.onConfirm,c=e.onCancel,i=e.textMap,l=void 0===i?{}:i,u=e.innerElementProps,p=e.renderButton,g=e.scene,m=e.showTitleAppend,f=(0,ne.$)("bec-fe.locale-switch"),d=z()(f,1)[0],v=se(n.region),h=se(t.region),_=u||{},w=_.title,y=_.warning,E=_.switchButton,C=_.stayButton,k=_.agree,x=(null==l?void 0:l.stayButton)||d("stayButton",{currentRegion:v}),O=(null==l?void 0:l.switchButton)||d("switchButton",{switchRegion:h}),N=ie(n.region,t.region),I=N?"".concat(d("titleAppend")):"",P=d("titleWithDot",{currentRegion:v}),j=N?"".concat(P," ").concat(I):d("title",{currentRegion:v});return s.createElement(M.ZP,{className:X().popContain,onClick:r},s.createElement("div",{className:X().popContent},s.createElement("div",a()({},w,{className:U()(X().title,null==w?void 0:w.className)}),null!=l&&l.title?"".concat(null==l?void 0:l.title," ").concat(m?I:""):s.createElement(s.Fragment,null,j)),s.createElement("div",a()({},y,{className:U()(X().warning,null==y?void 0:y.className)}),(null==l?void 0:l.warning)||d("warning")),s.createElement("div",{className:X().handleArea},p?p({onCancel:c,onConfirm:o,stayText:d("stayButton",{currentRegion:v}),switchText:d("switchButton",{switchRegion:h})}):g===Z.userActive?s.createElement(s.Fragment,null,s.createElement(K.Z,a()({style:b,type:"main",size:"xl","aria-label":"string"==typeof O?O:"",role:"button"},E,{className:U()(X().button,null==E?void 0:E.className),onClick:o}),s.createElement(Y.ZP,{payload:{page_el_sn:L}},s.createElement("span",null,O))),s.createElement(K.Z,a()({style:b,type:"border",size:"xl",role:"button","aria-label":"string"==typeof x?x:""},C,{className:U()(X().button,X().switch,null==C?void 0:C.className),onClick:c}),s.createElement(Y.ZP,{payload:{page_el_sn:T}},s.createElement("span",null,x)))):s.createElement(s.Fragment,null,s.createElement(K.Z,a()({style:b,type:"main",size:"xl","aria-label":"string"==typeof x?x:"",role:"button"},C,{className:U()(X().button,null==C?void 0:C.className),onClick:c}),s.createElement(Y.ZP,{payload:{page_el_sn:T}},s.createElement("span",null,x))),s.createElement(K.Z,a()({style:b,type:"border",size:"xl","aria-label":"string"==typeof O?O:"",role:"button"},E,{onClick:o,className:U()(X().button,X().switch,null==E?void 0:E.className)}),s.createElement(Y.ZP,{payload:{page_el_sn:L}},s.createElement("span",null,O))))),s.createElement("div",a()({},k,{className:U()(X().agree,null==k?void 0:k.className)}),(null==l?void 0:l.agree)||s.createElement(te.c,{i18nKey:"agreeTerms",ns:"bec-fe.locale-switch"},"By continuing, you agree to our",s.createElement("span",{onClick:function(){return re.Z.uniformForward((0,ee.ru)({region_id:null==t?void 0:t.region},"/terms-of-use.html"),{openTarget:"_blank"})},className:X().termsLink},"Terms of Use"),"and",s.createElement("span",{onClick:function(){return re.Z.uniformForward((0,ee.ru)({region_id:null==t?void 0:t.region},"/privacy-and-cookie-policy.html"),{openTarget:"_blank"})},className:X().termsLink},"Privacy & Cookie Policy.")))))},pe=s.memo(ue),ge=t(73242),me=t(25595),fe=function(e){var n=e.title,t=e.text_pc,r=e.from_pc_v2,a=e.confirm,o=e.onClose,c=e.onConfirm,i=e.showSuccessIcon;return s.createElement(M.ZP,{className:X().popContain,onClick:o},s.createElement("div",{className:X().popContent},!!i&&s.createElement("div",{className:X().successIcon},s.createElement(ge._Z,{width:42,height:42,path:"M512 13.2c275.5 0 498.8 223.3 498.8 498.8 0 275.5-223.3 498.8-498.8 498.8-275.5 0-498.8-223.3-498.8-498.8 0-275.5 223.3-498.8 498.8-498.8z m0 66.7c-238.6 0-432.1 193.4-432.1 432.1 0 238.6 193.4 432.1 432.1 432.1 238.6 0 432.1-193.4 432.1-432.1 0-238.6-193.4-432.1-432.1-432.1z m273.2 265.3c11.9 11.8 13 30.4 3.4 43.5l-3.3 3.7-320 322.2c-11.3 11.4-29 13-42 4.4l-4.2-3.2-164.4-149.9c-13.6-12.4-14.6-33.5-2.1-47.1 11.3-12.4 29.8-14.3 43.2-5.3l3.9 3.1 140.8 128.3 297.5-299.5c13-13.1 34.1-13.2 47.2-0.2z",fill:"#5DBE36",stroke:"none",strokeWidth:"44.52173913043478"})),s.createElement("div",{className:U()(X().title,B()({},X().failedTitle,!i))},n),s.createElement("div",{className:X().tipsText},t),s.createElement("div",{className:X().exampleImg},s.createElement(me.ZP,{src:r,style:{height:273}})),s.createElement(K.Z,{className:X().tipsConfirm,type:"main",size:"xl",onClick:c,role:"button","aria-label":a,style:b},a)))},de=s.memo(fe),ve=function(){var e=c()(l().mark((function e(n){var t,r,o,c,i,u,p,g,f,d,v,b,_;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.axiosHttp,r=n.onComplete,o=n.tipsResult,c=n.localInfo,i=q(t),p=(u=c||{}).region,g=u.language,e.next=5,Promise.resolve(o?{result:o}:i.getTips({current_lang_code:g,from_market_region:p}));case 5:if(f=e.sent,d=f.result,null!=(v=(d||{}).text_map)&&v.title){e.next=10;break}throw new Error("switch region api data error");case 10:b=function(){null==r||r(),_(),(0,h.ax)({page_el_sn:D}),le(I)},(0,h.wI)({page_el_sn:D}),_=(0,m.Z)(s.createElement(de,a()({showSuccessIcon:!0},v,{onConfirm:b,onClose:b})));case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),he=function(){var e=c()(l().mark((function e(n){var t,r,o,i,b,I,D,Z,H,B,F,z,G,U,M,W,K,Y,V,X,J,Q,ee,ne,te;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.localInfo,r=n.switchInfo,o=n.onComplete,i=n.onCancel,b=n.onClose,I=n.switchFromUrl,D=n.onTriggerSwitchLimit,Z=n.disabledSwitchLimit,H=n.isTakeOverAllError,B=n.switchConfirmProps,F=n.hiddenTipsPopup,z=n.switchScene,G=p._6[t.region],U=p._6[r.region],e.next=5;break;case 5:if(le(P,{tags:{localInfoRegion:t.region,switchInfoRegion:r.region,switchScene:z}}),G&&U&&G!==U){e.next=9;break}return(0,g.K2)(new Error("invalid params localInfo.region: ".concat(G,", switchInfo.region: ").concat(U))),e.abrupt("return");case 9:if(Z||"string"==typeof I){e.next=12;break}return(0,g.K2)(new Error("expect switchFromUrl param is a string")),e.abrupt("return");case 12:if(M=(0,f.ej)(),W=q(M),K=ie(t.region,r.region),Z){e.next=30;break}return e.next=18,W.getIsTriggerChangeLimit({link:I,to_be_switched_region_id:null==r?void 0:r.region});case 18:if(e.t0=e.sent,e.t0){e.next=21;break}e.t0={};case 21:if(Y=e.t0,(V=Y.result).pass){e.next=30;break}throw X=V.text_map,le(_),(J=new Error("".concat(I||""," has triggered change country limit"))).errorCode=6e4,H||(Q=(0,m.Z)(s.createElement(de,a()({},X,{onConfirm:function(){Q(),null==D||D(),le(w)},onClose:function(){Q(),le(y)}})),{})),J;case 30:if(ne=t.language){e.next=36;break}return e.next=34,(0,d.Bf)();case 34:te=e.sent,ne=te.language;case 36:return e.abrupt("return",new Promise((function(e,n){ee=(0,m.Z)(s.createElement(pe,a()({localInfo:t,switchInfo:r},B,{onCancel:function(){var e,t;null==i||i({source:R.country}),null===(e=ee)||void 0===e||e(),n(),null==B||null===(t=B.onConfirm)||void 0===t||t.call(B),le(C),(0,h.ax)({page_el_sn:T})},onConfirm:function(){var n;(0,u.K3)({mask:!0}),e(),null==B||null===(n=B.onCancel)||void 0===n||n.call(B),le(E),(0,h.ax)({page_el_sn:L})},onClose:function(){var e,t;null==b||b({source:R.country}),null===(e=ee)||void 0===e||e(),n(),null==B||null===(t=B.onClose)||void 0===t||t.call(B),le(k),(0,h.ax)({page_el_sn:T})}})),{})})).then(c()(l().mark((function e(){var n,t,o,c,p,g,f,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,ne){e.next=3;break}throw new Error("can not get current language, please check cookie 'language' field or pass a language by 'localInfo'");case 3:return c=null===(n=navigator)||void 0===n?void 0:n.language,e.next=6,W.getLanguageList({country_id_to_be_switched:r.region,current_lang_code:ne,system_lang:null==c||null===(t=c.split)||void 0===t||null===(o=t.call(c,"-"))||void 0===o?void 0:o[0]});case 6:if(e.t0=e.sent,e.t0){e.next=9;break}e.t0={};case 9:if(p=e.t0,g=p.result,f=g.text_map,!(d=g.lang_text_list).find((function(e){return e.lang===ne}))){e.next=14;break}return e.abrupt("return",{language:ne});case 14:return e.abrupt("return",new Promise((function(e,n){var t;null===(t=ee)||void 0===t||t(),(0,u.Dw)(),ee=(0,m.Z)(s.createElement($,a()({},f,{languageList:d,onCancel:function(){var e;null==i||i({source:R.language}),null===(e=ee)||void 0===e||e(),(0,h.ax)({page_el_sn:A}),le(N),n()},onConfirm:function(n){e({language:n}),(0,u.K3)({mask:!0}),(0,h.ax)({page_el_sn:S}),le(x,{tags:{switchLang:n}})},onClose:function(){var e;null==b||b({source:R.language}),null===(e=ee)||void 0===e||e(),(0,h.ax)({page_el_sn:A}),le(O),n()}})),{})})));case 15:return e.prev=15,(0,u.Dw)(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,,15,18]])})))).then(function(){var e=c()(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.language,e.next=3,(0,d.xI)({region:r.region,language:t},{axiosHttp:M,scene:z,betweenReportAndSet:function(){var e=c()(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K){e.next=3;break}return e.next=3,(0,v.w)({axiosHttp:M,params:{remove_account:!1,scene:3}});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),(function(e){if(e)throw e;return!1})).then(function(){var e=c()(l().mark((function e(n){var r,a,c,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le(j,{tags:{success:n}}),n){e.next=3;break}return e.abrupt("return");case 3:if(!F){e.next=8;break}return null===(r=ee)||void 0===r||r(),(0,u.Dw)(),null==o||o(),e.abrupt("return");case 8:return e.prev=8,e.next=11,W.getTips({current_lang_code:ne,from_market_region:t.region});case 11:if(e.t0=e.sent,e.t0){e.next=14;break}e.t0={};case 14:return c=e.t0,i=c.result,null===(a=ee)||void 0===a||a(),(0,u.Dw)(),e.next=20,ve({tipsResult:i,axiosHttp:M,onComplete:o,localInfo:t});case 20:e.next=26;break;case 22:throw e.prev=22,e.t1=e.catch(8),null==o||o(e.t1),e.t1;case 26:return e.prev=26,(0,u.Dw)(),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[8,22,26,29]])})));return function(n){return e.apply(this,arguments)}}()));case 37:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},34979:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});t(34769),t(34115),t(95342),t(58188),t(9e4),t(26464),t(18339),t(68625),t(36728),t(34715),t(19570),t(1939),t(62775),t(76555),t(95094);var r=t(77797),a=t.n(r),o=t(41867),c=t(68709),i=t(8335);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=!1,p=90866;function g(e,n,t){try{var r=n||{},a=r.groupId,l=void 0===a?p:a,g=r.tags,m=r.fields,f=r.longFields;if(!l)return;var d=(0,o.ej)(),v=(0,c.Up)().amplifyRate,h=window,b=h.screen,_=h.devicePixelRatio,w=h.innerWidth,y=h.innerHeight,E=h.scrollX,C=h.scrollY,k=b||{},x=k.width,O=k.height,N={groupId:l,amplifyRate:v,tags:s({event:e,type:"biz",hasBee:d._bee?1:0},g),fields:s({url:location.href,bee:d._bee,api_uid:d.api_uid,userAgent:navigator.userAgent,screen_width:x,screen_height:O,dpr:_,inner_width:w,inner_height:y,page_x_offset:E,page_y_offset:C},m),longFields:f};if(u)return void console.log(N,l);(0,i.P2)(N,t||{})}catch(e){u&&console.error(e)}}},68940:function(e,n,t){"use strict";t.d(n,{XZ:function(){return v},Y8:function(){return d}});var r=t(29684),a=t.n(r),o=t(77797),c=t.n(o),i=t(54529),l=t(72779),s=t.n(l),u=t(73242),p=t(57882),g=t.n(p),m=(0,i.memo)((function(e){var n=e.className,t=e.isChecked;return i.createElement(u.i0,{className:s()(g().icon,n),path:"M276.3 484c18.1-19.9 48.8-21.4 68.7-3.3l112.5 102.1 222.5-220.2c17.7-17.5 45.5-18.7 64.5-3.4l4.2 3.8c18.9 19.1 18.7 49.9-0.3 68.8l-255.2 252.6c-18.4 18.2-47.8 18.8-66.9 1.5l-146.7-133.2c-19.9-18.1-21.4-48.8-3.3-68.7z",role:"checkbox","aria-checked":!!t})})),f=(0,i.forwardRef)((function(e,n){var t,r=e.type,a=void 0===r?"normal":r,o=e.className,l=e.isChecked,u=void 0!==l&&l,p=e.toggleCheck,m=e.onClick,f=e.disabled,d=e.children;f&&(u=!1);var v=function(e){f||(null==p||p(!u,e),null==m||m(e))},h=s()(g().box,f?g().disabled:(t={},c()(t,g().checked,u),c()(t,g().unchecked,!u),c()(t,g().background,"background"===a),t),o);return i.createElement("span",{ref:n,className:h,onClick:v,role:"radio","aria-checked":u,tabIndex:0,onKeyDown:function(e){"Enter"!==(null==e?void 0:e.key)&&13!==(null==e?void 0:e.keyCode)||v(e)}},u?d:null)})),d=(0,i.forwardRef)((function(e,n){var t=e.iconClass,r=e.className;return i.createElement(f,a()({},e,{ref:n,className:s()(r,g().radio)}),i.createElement("span",{className:s()(g().point,t)}))})),v=(0,i.forwardRef)((function(e,n){var t=e.iconClass,r=e.isChecked,o=void 0!==r&&r;return i.createElement(f,a()({},e,{ref:n}),i.createElement(m,{className:t,isChecked:o}))}))},85942:function(e){e.exports={popContain:"popContain-1jB4K",title:"title-2vxhG",failedTitle:"failedTitle-3V_zA",warning:"warning-2dYMB",handleArea:"handleArea-BBxUd",button:"button-b0_eQ",switch:"switch-3FEzg",agree:"agree-8emck",termsLink:"termsLink-1bb3E",tipsText:"tipsText-3JZ17",exampleImg:"exampleImg-2IiP0",tipsConfirm:"tipsConfirm-38R1N",successIcon:"successIcon-3PUNT",langTitle:"langTitle-2r2KS",langTip:"langTip-1WX3Y",langList:"langList-1edGs",langItem:"langItem-27GBN",langName:"langName-2JDl-",standLang:"standLang-34FH7",currentLangName:"currentLangName-L-7R9",langHandleArea:"langHandleArea-1pRyb"}},57882:function(e){e.exports={box:"box-YOZDb",unchecked:"unchecked-11MpV",checked:"checked-3tAow",icon:"icon-20Mvt",disabled:"disabled-1hXtJ",point:"point-28iPU",radio:"radio-1KAHe",background:"background-4Zwo3"}}}]);
//# sourceMappingURL=http://temudebug.com/sourcemaps/assets/js/42_91a08a541e6283143af0.js.map