webpackJsonp([6],{BLg1:function(e,t){},ERgF:function(e,t){},hQ83:function(e,t){},jnZd:function(e,t,a){"use strict";var i=a("3cXf"),n=a.n(i),l=a("Nk/b"),s=a("BGNQ"),o=a("7g+Q"),u=(String,String,String,Boolean,{name:"popup-header",props:{leftText:String,rightText:String,title:String,showBottomBorder:{type:Boolean,default:!0}}}),r=a("18Nq");var c=function(e){a("w2fM")},p=Object(r.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vux-popup-header",class:e.showBottomBorder?"vux-1px-b":""},[a("div",{staticClass:"vux-popup-header-left",on:{click:function(t){e.$emit("on-click-left")}}},[e._t("left-text",[e._v(e._s(e.leftText))])],2),e._v(" "),a("div",{staticClass:"vux-popup-header-title"},[e._t("title",[e._v(e._s(e.title))])],2),e._v(" "),a("div",{staticClass:"vux-popup-header-right",on:{click:function(t){e.$emit("on-click-right")}}},[e._t("right-text",[e._v(e._s(e.rightText))])],2)])},[],!1,c,null,null).exports,h=a("xZPP"),v=a("nKjL"),d=function(e){return 1===e.length?e[0]:e.join(" ")},m=a("uJtz"),f=a("3BYQ"),g=a("+62G"),x=function(e){return JSON.parse(n()(e))},y=(g.a,f.a,l.a,s.a,o.a,v.a,v.b,h.a,m.a,String,String,String,String,Array,String,Number,Number,Array,Boolean,String,Number,Array,Object,Boolean,Boolean,Boolean,Function,Boolean,Array,Object,String,Boolean,m.a,function(e){return JSON.parse(n()(e))}),b={name:"popup-picker",directives:{TransferDom:g.a},created:function(){void 0!==this.show&&(this.showValue=this.show)},mixins:[f.a],components:{Picker:l.a,Cell:s.a,Popup:o.a,PopupHeader:p,Flexbox:v.a,FlexboxItem:v.b,InlineDesc:h.a},filters:{array2string:d,value2name:m.a},props:{valueTextAlign:{type:String,default:"right"},title:String,cancelText:String,confirmText:String,data:{type:Array,default:function(){return[]}},placeholder:String,columns:{type:Number,default:0},fixedColumns:{type:Number,default:0},value:{type:Array,default:function(){return[]}},showName:Boolean,inlineDesc:[String,Number,Array,Object,Boolean],showCell:{type:Boolean,default:!0},show:Boolean,displayFormat:Function,isTransferDom:{type:Boolean,default:!0},columnWidth:Array,popupStyle:Object,popupTitle:String,disabled:Boolean},computed:{labelStyles:function(){return{display:"block",width:this.$parent.labelWidth||this.$parent.$parent.labelWidth||"auto",textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{value2name:m.a,getNameValues:function(){return Object(m.a)(this.currentValue,this.data)},onClick:function(){this.disabled||(this.showValue=!0)},onHide:function(e){this.showValue=!1,e&&(this.closeType=!0,this.currentValue=y(this.tempValue)),e||(this.closeType=!1,this.value.length>0&&(this.tempValue=y(this.currentValue)))},onPopupShow:function(){this.closeType=!1,this.$emit("on-show")},onPopupHide:function(e){this.value.length>0&&(this.tempValue=y(this.currentValue)),this.$emit("on-hide",this.closeType)},onPickerChange:function(e){if(n()(this.currentValue)!==n()(e)&&this.value.length){var t=n()(this.data);t!==this.currentData&&"[]"!==this.currentData&&(this.tempValue=y(e)),this.currentData=t}var a=y(e);this.$emit("on-shadow-change",a,Object(m.a)(a,this.data).split(" "))}},watch:{value:function(e){n()(e)!==n()(this.tempValue)&&(this.tempValue=y(e),this.currentValue=y(e))},currentValue:function(e){this.$emit("input",y(e)),this.$emit("on-change",y(e))},show:function(e){this.showValue=e},showValue:function(e){this.$emit("update:show",e)}},data:function(){return{onShowProcess:!1,tempValue:y(this.value),closeType:!1,currentData:n()(this.data),showValue:!1,currentValue:this.value}}};var k=function(e){a("BLg1")},_=Object(r.a)(b,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vux-cell-box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showCell,expression:"showCell"}],staticClass:"weui-cell vux-tap-active",class:{"weui-cell_access":!e.disabled},on:{click:e.onClick}},[a("div",{staticClass:"weui-cell__hd"},[e._t("title",[e.title?a("label",{staticClass:"weui-label",class:e.labelClass,style:e.labelStyles,domProps:{innerHTML:e._s(e.title)}}):e._e()],{labelClass:"weui-label",labelStyle:e.labelStyles,labelTitle:e.title}),e._v(" "),e.inlineDesc?a("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()],2),e._v(" "),a("div",{staticClass:"vux-cell-primary vux-popup-picker-select-box"},[a("div",{staticClass:"vux-popup-picker-select",style:{textAlign:e.valueTextAlign}},[e.displayFormat||e.showName||!e.value.length?e._e():a("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[e._v(e._s(e._f("array2string")(e.value)))]),e._v(" "),!e.displayFormat&&e.showName&&e.value.length?a("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[e._v(e._s(e._f("value2name")(e.value,e.data)))]):e._e(),e._v(" "),e.displayFormat&&e.value.length?a("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[e._v(e._s(e.displayFormat(e.value,e.value2name(e.value,e.data))))]):e._e(),e._v(" "),!e.value.length&&e.placeholder?a("span",{staticClass:"vux-popup-picker-placeholder vux-cell-placeholder",domProps:{textContent:e._s(e.placeholder)}}):e._e()])]),e._v(" "),a("div",{staticClass:"weui-cell__ft"})]),e._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom",value:e.isTransferDom,expression:"isTransferDom"}]},[a("popup",{staticClass:"vux-popup-picker",attrs:{id:"vux-popup-picker-"+e.uuid,"popup-style":e.popupStyle},on:{"on-hide":e.onPopupHide,"on-show":e.onPopupShow},model:{value:e.showValue,callback:function(t){e.showValue=t},expression:"showValue"}},[a("div",{staticClass:"vux-popup-picker-container"},[a("popup-header",{attrs:{"left-text":e.cancelText||"取消","right-text":e.confirmText||"完成",title:e.popupTitle},on:{"on-click-left":function(t){e.onHide(!1)},"on-click-right":function(t){e.onHide(!0)}}}),e._v(" "),a("picker",{attrs:{data:e.data,columns:e.columns,"fixed-columns":e.fixedColumns,container:"#vux-popup-picker-"+e.uuid,"column-width":e.columnWidth},on:{"on-change":e.onPickerChange},model:{value:e.tempValue,callback:function(t){e.tempValue=t},expression:"tempValue"}})],1)])],1)])},[],!1,k,null,null);t.a=_.exports},orAB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Nk/b"),n=a("jnZd"),l=a("d5Kw"),s=(i.a,n.a,l.a,{components:{Picker:i.a,PopupPicker:n.a,XButton:l.a},data:function(){return{account:"",pass:"12345678",pickerList:[{name:"党支部书记",value:"3"},{name:"片区负责人",value:"2"}],pickerValue:[""],pickerName:"",roleName:"请选择角色",PickerVisible:!1}},methods:{login:function(){var e=this;return"0"==this.pickerValue[0]?this.$vux.toast.show({text:"请选择角色",type:"text",position:"top"}):this.account?this.pass?void this.$store.dispatch("login",{name:this.account,password:this.pass,openId:this.$route.query.openId||void 0,userType:this.pickerValue[0]}).then(function(t){if(t.status){var a=t.entry.roleId;sessionStorage.userRoleId=a,2==a?e.$router.push({path:"points/review"}):3==a?e.$router.push({path:"points/evaluation"}):e.$router.push({path:"/main"+a})}else e.$vux.toast.show({text:t.message,width:"18em",type:"text",position:"top"})}):this.$vux.toast.show({text:"请输入密码",type:"text",position:"top"}):this.$vux.toast.show({text:"请输入帐号",type:"text",position:"top"})},keyUpReturn:function(){this.login()},pickerChange:function(e){e&&console.log("",e)},roleChange:function(e){this.pickerValue=e,"3"==e?this.roleName=this.pickerList[0].name:"2"==e&&(this.roleName=this.pickerList[1].name)}},mounted:function(){document.body.classList.add("login-manage")},beforeDestroy:function(){document.body.classList.remove("login-manage")}}),o=a("18Nq");var u=function(e){a("hQ83"),a("ERgF"),a("xeDJ")},r=Object(o.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"logo-top"}),e._v(" "),a("div",{staticClass:"last-content"},[a("div",{staticClass:"inputs"},[a("div",{staticClass:"input-all clearfix"},[a("span",{staticClass:"icon-phone1 "}),e._v(" "),a("x-button",{nativeOn:{click:function(t){e.PickerVisible=!0}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.roleName,expression:"roleName"}],staticStyle:{color:"#ccc","margin-top":"-15px","margin-left":"-11px"},attrs:{type:"text",placeholder:"请选择管理角色",readonly:""},domProps:{value:e.roleName},on:{"click:native":function(t){e.PickerVisible=!0},input:function(t){t.target.composing||(e.roleName=t.target.value)}}}),e._v("  \n                    "+e._s()+"\n                ")]),e._v(" "),a("popup-picker",{attrs:{show:e.PickerVisible,columns:1,"show-cell":!1,data:e.pickerList,"confirm-text":"确认"},on:{"update:show":function(t){e.PickerVisible=t},"on-change":e.roleChange},model:{value:e.pickerValue,callback:function(t){e.pickerValue=t},expression:"pickerValue"}}),e._v(" "),a("span",{staticClass:"icon-phone2",staticStyle:{float:"right"}})],1),e._v(" "),a("div",{staticClass:"input-all clearfix"},[a("span",{staticClass:"icon-phone"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入登录用户"},domProps:{value:e.account},on:{keyup:function(t){return"button"in t||13===t.keyCode?e.keyUpReturn(t):null},input:function(t){t.target.composing||(e.account=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-all clearfix"},[a("span",{staticClass:"icon-key"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],attrs:{type:"password",placeholder:"请输入登录密码"},domProps:{value:e.pass},on:{keyup:function(t){return"button"in t||13===t.keyCode?e.keyUpReturn(t):null},input:function(t){t.target.composing||(e.pass=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btnSub",on:{click:e.login}},[e._v("登录")])])])])},[],!1,u,"data-v-76403988",null);t.default=r.exports},w2fM:function(e,t){},xeDJ:function(e,t){}});
//# sourceMappingURL=6.aa7586d184d18d60d8cd.js.map