webpackJsonp([43],{"/kga":function(t,e,n){"use strict";var i=n("JkZY"),o=(i.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[i.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),a=n("XyMi");var s=function(t){n("angc")},r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},[],!1,s,null,null);e.a=r.exports},"01k5":function(t,e){},"62KO":function(t,e,n){"use strict";var i=n("/kga"),o=(i.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,{name:"confirm",components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(t){this.msg=t},setInputFocus:function(){this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),a=n("XyMi");var s=function(t){n("Y1M+")},r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?n("div",{staticClass:"vux-prompt"},["checkbox"===t.inputAttrs.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchstart:t.setInputFocus,change:function(e){var n=t.msg,i=e.target,o=!!i.checked;if(Array.isArray(n)){var a=t._i(n,null);i.checked?a<0&&(t.msg=n.concat([null])):a>-1&&(t.msg=n.slice(0,a).concat(n.slice(a+1)))}else t.msg=o}}},"input",t.inputAttrs,!1)):"radio"===t.inputAttrs.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchstart:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.inputAttrs,!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.inputAttrs.type},domProps:{value:t.msg},on:{touchstart:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.inputAttrs,!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),n("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])],2)],1)},[],!1,s,null,null);e.a=r.exports},"6lD2":function(t,e){!function(t,e){var n,i=t.documentElement,o=t.createElement("meta");o.name="viewport",o.content="initial-scale=1,maximum-scale=1,minimum-scale=1",i.firstElementChild.appendChild(o);var a=function(){var t=i.clientWidth;t>375&&(t=375),i.style.fontSize=t/3.75+"px"};a(),e.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(a,300)},!1)}(document,window)},Bfwr:function(t,e,n){"use strict";Boolean,String,String,String;var i={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},o=n("XyMi");var a=function(t){n("w22D")},s=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},[],!1,a,null,null);e.a=s.exports},H7FC:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"default",function(){return T});var o=n("7+uW"),a=n("v5o6"),s=n.n(a),r=n("XyMi");var u=function(t){n("rJkj"),n("krwK")},l=Object(r.a)({},function(){var t=this.$createElement;return(this._self._c||t)("router-view")},[],!1,u,null,null).exports,c=n("/ocq"),d=n("NYxO"),m=n("fZjL"),p=n.n(m),h=n("//Fk"),f=n.n(h),v=n("woOf"),g=n.n(v),w=n("17Ff"),_=["roleId","userId","ptoken"],b={state:{},getters:{user:function(t){return t}},actions:{userinfo:function(t,e){var n=t.commit;return w.a.get("userId")?o.a.http.get("puser/queryById",{params:g()(e||{},{userId:w.a.get("userId")})}).then(function(t){return n("setUser",t.entry),t}):f.a.reject()},login:function(t,e){t.commit;return o.a.http.post("puser/tologin",e)},logout:function(t){var e=t.commit;return new f.a(function(t,n){e("clearUser"),t()})}},mutations:{setUser:function(t,e){p()(e).map(function(n){t[n]=e[n]})},clearUser:function(t){p()(t).map(function(e){return delete t[e]}),_.forEach(function(t){return w.a.remove(t,{path:"/"})})}}};o.a.use(d.a);var y=new d.a.Store({state:{},getters:{},mutations:{},modules:{user:b},strict:!1}),x=[{path:"/login",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"Quw4"))}},{path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"4er+"))},children:[{path:"",beforeEnter:function(t,e,n){return n({path:/^\/$/.test(t.path)?"/main"+y.getters.user.roleid:t.path})}},{path:"main1",component:function(){return n.e(21).then(n.bind(null,"nFUa"))}},{path:"main2",component:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"rFqn"))}},{path:"main3",component:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,"dTCK"))}},{path:"main4",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"PkXt"))}},{path:"party",component:function(){return n.e(34).then(n.bind(null,"alll"))}},{path:"party/dues",name:"Dues",component:function(){return Promise.all([n.e(0),n.e(41)]).then(n.bind(null,"RfVU"))}},{path:"party/dues1",name:"Dues",component:function(){return Promise.all([n.e(0),n.e(40)]).then(n.bind(null,"BArB"))}},{path:"party/branch",component:function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"Pu2Y"))}},{path:"party/member/",name:"member",component:function(){return Promise.all([n.e(0),n.e(39)]).then(n.bind(null,"6CEs"))}},{path:"party/information",name:"information",component:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"YabR"))}},{path:"party/partyDetail",name:"pointDetail",component:function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,"pcgK"))}},{path:"party/partyPoint",name:"partypointdetail",component:function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,"T07N"))}},{path:"points",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"2TJQ"))}},{path:"points/assess",component:function(){return n.e(35).then(n.bind(null,"qsx3"))}},{path:"points/review",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"tmq1"))}},{path:"points/evaluation",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"31oV"))}},{path:"points/obtain/:userid/:year",name:"Obtain",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"dA7d"))}},{path:"points/audit1/:partmentId/:name/:departmentId/:userId",name:"Audit1",props:!0,component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"Dj8i"))}},{path:"points/audit/:partmentId/:name/:departmentId/:userId",name:"Audit",props:!0,component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"HEqY"))}},{path:"points/pointDetail",component:function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,"1TZ1"))}},{path:"points/addPoint/:projectId/:moduleId",name:"addPoint",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"q8SI"))}},{path:"points/pointEvaluate/:partmentId/:name/:departmentId/:userId",name:"pointEvaluate",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"Yt/s"))}},{path:"points/political/:moduleid",component:function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,"vwVn"))}},{path:"points/politicalSimple/:moduleid",component:function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"7YId"))}},{path:"points/lawAbiding",component:function(){return Promise.all([n.e(0),n.e(38)]).then(n.bind(null,"2+Wi"))}},{path:"points/lawAbidingDetail",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"rv72"))}},{path:"active",component:function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,"lVAE"))}},{path:"active/partyIndex",name:"Active",component:function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,"a8iE"))}},{path:"active/partyBranch",component:function(){return Promise.all([n.e(0),n.e(36)]).then(n.bind(null,"dgTT"))}},{path:"active/partyBranch1",component:function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"nKx+"))}},{path:"active/partyActivity",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"kYmV"))}},{path:"active/activeMore",name:"activeMore",component:function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,"uYR3"))}},{path:"active/partyMoment",name:"partyMoment",component:function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,"Ydxj"))}},{path:"active/detailPack/:studyid/:createUserid/:moduleid",name:"detailPack",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"rlZM"))}},{path:"active/post/:activeId",name:"activePost",component:function(){return Promise.all([n.e(0),n.e(37)]).then(n.bind(null,"efhR"))}},{path:"active/new",name:"activeNews",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"IgtN"))}},{path:"active/new2",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"2+Lk"))}},{path:"active/activeDetail",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"JsMG"))}},{path:"life",component:function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,"xdbm"))}}]}];o.a.use(c.a);var S=new c.a({routes:x});S.beforeEach(function(t,e,n){return/^\/$/.test(t.path)&&/^\/main/.test(e.path)?n(!1):(o.a.$vux.loading.show({text:"加载中"}),/^\/login/.test(t.path)||y.getters.user.userid?n():void y.dispatch("userinfo").then(function(t){return n()},function(i){return/^\/login/.test(e.path)?(o.a.$vux.loading.hide(),n(!1)):n({path:"/login",query:{openId:t.query.openId||void 0}})}))}),S.afterEach(function(){return o.a.$vux.loading.hide()});var k=S,P=(n("6lD2"),n("mtWM")),C=n.n(P),I=0,B=function(t){0===(I+=t)&&setTimeout(function(){return o.a.$vux.loading.hide()},60),1===I&&o.a.$vux.loading.show({text:"加载中"})};C.a.interceptors.request.use(function(t){return/^(http(s)?:\/\/|\/)/.test(t.url)||(t.url="/dangjian/"+t.url),B(1),t},function(t){return f.a.reject(t)}),C.a.interceptors.response.use(function(t){return B(-1),t.data},function(t){return B(-1),f.a.reject(t)});var T={axios:{}},$=n("yD8N"),V=n("Y+qm"),N=n("3BeM"),O=n("NXWw"),j=n("Peep");o.a.use($.a),o.a.use(N.a),o.a.use(V.a),o.a.use(O.a),o.a.use(j.a),s.a.attach(document.body),o.a.config.productionTip=!1,new o.a({el:"#app",router:k,store:y,utils:i,components:{App:l},template:"<App/>"})},"Y1M+":function(t,e){},angc:function(t,e){},krwK:function(t,e){},mzja:function(t,e,n){"use strict";var i=n("/kga"),o=(i.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:i.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),a=n("XyMi");var s=function(t){n("H7FC")},r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},[],!1,s,null,null);e.a=r.exports},rJkj:function(t,e){},rLAy:function(t,e,n){"use strict";var i=n("xNvf"),o=(i.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a=n("XyMi");var s=function(t){n("01k5")},r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},[],!1,s,null,null);e.a=r.exports},w22D:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5b2b3ac84d78fb2680a1.js.map