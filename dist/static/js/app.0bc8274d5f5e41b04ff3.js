webpackJsonp([49],{"/kga":function(t,n,e){"use strict";var i=e("JkZY"),o=(i.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[i.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),n=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&n)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),a=e("XyMi");var s=function(t){e("angc")},r=Object(a.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[e("transition",{attrs:{name:t.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),e("transition",{attrs:{name:t.dialogTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},[],!1,s,null,null);n.a=r.exports},"01k5":function(t,n){},"62KO":function(t,n,e){"use strict";var i=e("/kga"),o=(i.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,{name:"confirm",components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var n=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){n.$refs.input&&n.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(t){this.msg=t},setInputFocus:function(){this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),a=e("XyMi");var s=function(t){e("Y1M+")},r=Object(a.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-confirm"},[e("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(n){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(n){t.showValue=n},expression:"showValue"}},[t.title?e("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[e("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?e("div",{staticClass:"vux-prompt"},["checkbox"===t.inputAttrs.type?e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchstart:t.setInputFocus,change:function(n){var e=t.msg,i=n.target,o=!!i.checked;if(Array.isArray(e)){var a=t._i(e,null);i.checked?a<0&&(t.msg=e.concat([null])):a>-1&&(t.msg=e.slice(0,a).concat(e.slice(a+1)))}else t.msg=o}}},"input",t.inputAttrs,!1)):"radio"===t.inputAttrs.type?e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchstart:t.setInputFocus,change:function(n){t.msg=null}}},"input",t.inputAttrs,!1)):e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.inputAttrs.type},domProps:{value:t.msg},on:{touchstart:t.setInputFocus,input:function(n){n.target.composing||(t.msg=n.target.value)}}},"input",t.inputAttrs,!1))]):e("div",{staticClass:"weui-dialog__bd"},[t._t("default",[e("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),e("div",{staticClass:"weui-dialog__ft"},[e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),e("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])],2)],1)},[],!1,s,null,null);n.a=r.exports},"6lD2":function(t,n){!function(t,n){var e,i=t.documentElement,o=t.createElement("meta");o.name="viewport",o.content="initial-scale=1,maximum-scale=1,minimum-scale=1",i.firstElementChild.appendChild(o);var a=function(){var t=i.clientWidth;t>375&&(t=375),i.style.fontSize=t/3.75+"px"};a(),n.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(a,300)},!1)}(document,window)},Bfwr:function(t,n,e){"use strict";Boolean,String,String,String;var i={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},o=e("XyMi");var a=function(t){e("w22D")},s=Object(o.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:t.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[e("div",{staticClass:"weui-mask_transparent"}),t._v(" "),e("div",{staticClass:"weui-toast",style:{position:t.position}},[e("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),e("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},[],!1,a,null,null);n.a=s.exports},H7FC:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={};e.d(i,"default",function(){return T});var o=e("7+uW"),a=e("v5o6"),s=e.n(a),r=e("XyMi");var l=function(t){e("rJkj"),e("krwK")},u=Object(r.a)({},function(){var t=this.$createElement;return(this._self._c||t)("router-view")},[],!1,l,null,null).exports,c=e("/ocq"),d=e("NYxO"),p=e("fZjL"),m=e.n(p),h=e("//Fk"),f=e.n(h),v=e("woOf"),g=e.n(v),w=e("17Ff"),b=["roleId","userId","ptoken"],_={state:{},getters:{user:function(t){return t}},actions:{userinfo:function(t,n){var e=t.commit;return w.a.get("userId")?o.a.http.get("puser/queryById",{params:g()(n||{},{userId:w.a.get("userId")})}).then(function(t){return e("setUser",t.entry),t}):f.a.reject()},login:function(t,n){t.commit;return o.a.http.post("puser/tologin",n)},logout:function(t){var n=t.commit;return new f.a(function(t,e){n("clearUser"),t()})}},mutations:{setUser:function(t,n){m()(n).map(function(e){t[e]=n[e]})},clearUser:function(t){t.user={},m()(t).map(function(n){return delete t[n]}),b.forEach(function(t){return w.a.remove(t,{path:"/"})}),P.push("/login")}}};o.a.use(d.a);var x=new d.a.Store({state:{info:{}},actions:{setInfo:function(t,n){(0,t.commit)("setInfo",n)}},getters:{info:function(t){return t.info}},mutations:{setInfo:function(t,n){t.info=n}},modules:{user:_},strict:!1}),y=[{path:"/login",component:function(){return e.e(39).then(e.bind(null,"8i4V"))}},{path:"/",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"4er+"))},children:[{path:"",beforeEnter:function(t,n,e){return e({path:/^\/$/.test(t.path)?"/main"+x.getters.user.roleid:t.path})}},{path:"main1",component:function(){return e.e(29).then(e.bind(null,"nFUa"))}},{path:"main2",component:function(){return Promise.all([e.e(0),e.e(15)]).then(e.bind(null,"rFqn"))}},{path:"main3",component:function(){return Promise.all([e.e(0),e.e(20)]).then(e.bind(null,"dTCK"))}},{path:"main4",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"PkXt"))}},{path:"party",component:function(){return e.e(44).then(e.bind(null,"alll"))}},{path:"party/dues",name:"Dues",component:function(){return Promise.all([e.e(0),e.e(46)]).then(e.bind(null,"RfVU"))}},{path:"party/branch",component:function(){return Promise.all([e.e(0),e.e(26)]).then(e.bind(null,"Pu2Y"))}},{path:"party/information/:departmentid",name:"information",component:function(){return Promise.all([e.e(0),e.e(25)]).then(e.bind(null,"YabR"))}},{path:"party/partyDetail",name:"pointDetail",component:function(){return Promise.all([e.e(0),e.e(31)]).then(e.bind(null,"pcgK"))}},{path:"party/partyPointDetail/:userid",name:"partyPointDetail",props:!0,component:function(){return Promise.all([e.e(0),e.e(28)]).then(e.bind(null,"T07N"))}},{path:"points",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"2TJQ"))}},{path:"points/assess",component:function(){return e.e(45).then(e.bind(null,"qsx3"))}},{path:"points/member/",name:"member",component:function(){return Promise.all([e.e(0),e.e(33)]).then(e.bind(null,"111z"))}},{path:"points/review",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"tmq1"))}},{path:"points/detail",name:"pointsNews",component:function(){return Promise.all([e.e(0),e.e(19)]).then(e.bind(null,"cKKc"))}},{path:"points/evaluation",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"31oV"))}},{path:"party/obtain/:userid/:year",name:"Obtain",component:function(){return Promise.all([e.e(0),e.e(22)]).then(e.bind(null,"nEmE"))}},{path:"points/audit1/:partmentId/:name/:departmentId/:userId",name:"Audit1",props:!0,component:function(){return Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"Dj8i"))}},{path:"points/audit/:partmentId/:name/:departmentId/:userId",name:"Audit",props:!0,component:function(){return Promise.all([e.e(0),e.e(11)]).then(e.bind(null,"HEqY"))}},{path:"points/addPoint/:projectId/:moduleId",name:"addPoint",component:function(){return Promise.all([e.e(0),e.e(21)]).then(e.bind(null,"q8SI"))}},{path:"points/addPoint1/:projectId/:moduleId",name:"addPoint1",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"ljAl"))}},{path:"points/addPoint1/:projectId/:moduleId/:studyId",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"ljAl"))}},{path:"points/pointEvaluate/:partmentId/:name/:departmentId/:userId",name:"pointEvaluate",component:function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"Yt/s"))}},{path:"points/political/:moduleid",component:function(){return Promise.all([e.e(0),e.e(42)]).then(e.bind(null,"vwVn"))}},{path:"points/political1",component:function(){return Promise.all([e.e(0),e.e(17)]).then(e.bind(null,"R/kV"))}},{path:"points/politicalSimple/:moduleid",component:function(){return Promise.all([e.e(0),e.e(41)]).then(e.bind(null,"7YId"))}},{path:"points/lawAbiding",component:function(){return Promise.all([e.e(0),e.e(34)]).then(e.bind(null,"2+Wi"))}},{path:"points/lawAbidingDetail/:userId",name:"lawAbidingDetail",props:!0,component:function(){return Promise.all([e.e(0),e.e(16)]).then(e.bind(null,"rv72"))}},{path:"points/lawAbidingDetailFinish/:userId",name:"lawAbidingDetailFinish",props:!0,component:function(){return Promise.all([e.e(0),e.e(38)]).then(e.bind(null,"Szwi"))}},{path:"active",component:function(){return Promise.all([e.e(0),e.e(40)]).then(e.bind(null,"lVAE"))}},{path:"active/partyIndex",name:"Active",component:function(){return Promise.all([e.e(0),e.e(30)]).then(e.bind(null,"a8iE"))}},{path:"active/partyBranch",component:function(){return Promise.all([e.e(0),e.e(37)]).then(e.bind(null,"dgTT"))}},{path:"active/partyBranch1",component:function(){return Promise.all([e.e(0),e.e(36)]).then(e.bind(null,"nKx+"))}},{path:"active/partyActivity",component:function(){return Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"kYmV"))}},{path:"active/activeSign/:activeId",name:"activeSign",component:function(){return e.e(47).then(e.bind(null,"W8gL"))}},{path:"active/activeMore",name:"activeMore",component:function(){return Promise.all([e.e(0),e.e(18)]).then(e.bind(null,"uYR3"))}},{path:"active/partyMoment",name:"partyMoment",component:function(){return Promise.all([e.e(0),e.e(27)]).then(e.bind(null,"Ydxj"))}},{path:"points/detailPack/:studyid/:createUserid/:moduleid",name:"detailPack",component:function(){return Promise.all([e.e(0),e.e(24)]).then(e.bind(null,"NvJ1"))}},{path:"points/detailPack1/:username",name:"detailPack1",component:function(){return Promise.all([e.e(0),e.e(23)]).then(e.bind(null,"wQ90"))}},{path:"points/detailPack2/:userId/:departmentid/:moduleid",name:"detailPack2",component:function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"JDQa"))}},{path:"points/detailPack3/:userId/:departmentid/:moduleid",name:"detailPack3",component:function(){return Promise.all([e.e(0),e.e(32)]).then(e.bind(null,"kjxs"))}},{path:"active/post/:activeId",name:"activePost",component:function(){return Promise.all([e.e(0),e.e(35)]).then(e.bind(null,"efhR"))}},{path:"active/new",name:"activeNews",component:function(){return Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"IgtN"))}},{path:"active/new2",name:"activeNews2",component:function(){return Promise.all([e.e(0),e.e(14)]).then(e.bind(null,"2+Lk"))}},{path:"active/activeDetail",component:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"JsMG"))}},{path:"life",component:function(){return Promise.all([e.e(0),e.e(43)]).then(e.bind(null,"xdbm"))}}]}];o.a.use(c.a);var S=new c.a({routes:y});S.beforeEach(function(t,n,e){return/^\/$/.test(t.path)&&/^\/main/.test(n.path)?e(!1):(o.a.$vux.loading.show({text:"加载中"}),/^\/login/.test(t.path)||x.getters.user.userid?e():void x.dispatch("userinfo").then(function(t){return e()},function(i){return/^\/login/.test(n.path)?(o.a.$vux.loading.hide(),e(!1)):e({path:"/login",query:{openId:t.query.openId||void 0}})}))}),S.afterEach(function(){return o.a.$vux.loading.hide()});var P=S,k=(e("6lD2"),e("mtWM")),I=e.n(k),C=0,B=function(t){0===(C+=t)&&setTimeout(function(){return o.a.$vux.loading.hide()},60),1===C&&o.a.$vux.loading.show({text:"加载中"})};I.a.interceptors.request.use(function(t){return/^(http(s)?:\/\/|\/)/.test(t.url)||(t.url="/dangjian/"+t.url),B(1),t},function(t){return f.a.reject(t)}),I.a.interceptors.response.use(function(t){return B(-1),t.data},function(t){return B(-1),f.a.reject(t)});var T={axios:{}},$=e("yD8N"),N=e("Y+qm"),V=e("3BeM"),j=e("NXWw"),O=e("Peep");o.a.use($.a),o.a.use(V.a),o.a.use(N.a),o.a.use(j.a),o.a.use(O.a),s.a.attach(document.body),o.a.config.productionTip=!1,new o.a({el:"#app",router:P,store:x,utils:i,components:{App:u},template:"<App/>"})},"Y1M+":function(t,n){},angc:function(t,n){},krwK:function(t,n){},mzja:function(t,n,e){"use strict";var i=e("/kga"),o=(i.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:i.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),a=e("XyMi");var s=function(t){e("H7FC")},r=Object(a.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-alert"},[e("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(n){t.$emit("on-hide")},"on-show":function(n){t.$emit("on-show")}},model:{value:t.showValue,callback:function(n){t.showValue=n},expression:"showValue"}},[e("div",{staticClass:"weui-dialog__hd"},[e("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"weui-dialog__bd"},[t._t("default",[e("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),e("div",{staticClass:"weui-dialog__ft"},[e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},[],!1,s,null,null);n.a=r.exports},rJkj:function(t,n){},rLAy:function(t,n,e){"use strict";var i=e("xNvf"),o=(i.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var n=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.show=!1,n.$emit("input",!1),n.$emit("on-hide"),n.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a=e("XyMi");var s=function(t){e("01k5")},r=Object(a.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-toast"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),e("transition",{attrs:{name:t.currentTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):e("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},[],!1,s,null,null);n.a=r.exports},w22D:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.0bc8274d5f5e41b04ff3.js.map