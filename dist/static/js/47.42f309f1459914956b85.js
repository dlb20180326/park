webpackJsonp([47],{"8i4V":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{account:"",pass:"12345678"}},methods:{login:function(){var t=this;return this.account?this.pass?void this.$store.dispatch("login",{name:this.account,password:this.pass,openId:this.$route.query.openId||void 0}).then(function(s){if(s.status){var e=s.entry.roleId;t.$router.push({path:"/main"+e})}else t.$vux.toast.show({text:s.message,width:"18em",type:"text",position:"top"})}):this.$vux.toast.show({text:"请输入密码",type:"text",position:"top"}):this.$vux.toast.show({text:"请输入帐号",type:"text",position:"top"})},keyUpReturn:function(){this.login()}},mounted:function(){}},o=e("XyMi");var n=function(t){e("ceh7")},i=Object(o.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-body"},[e("div",{staticClass:"logo-top"}),t._v(" "),e("div",{staticClass:"last-content"},[e("div",{staticClass:"inputs"},[e("div",{staticClass:"input-all clearfix"},[e("span",{staticClass:"icon-phone"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"输入登录用户"},domProps:{value:t.account},on:{keyup:function(s){return"button"in s||13===s.keyCode?t.keyUpReturn(s):null},input:function(s){s.target.composing||(t.account=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-all clearfix"},[e("span",{staticClass:"icon-key"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],attrs:{type:"password",placeholder:"输入登录密码"},domProps:{value:t.pass},on:{keyup:function(s){return"button"in s||13===s.keyCode?t.keyUpReturn(s):null},input:function(s){s.target.composing||(t.pass=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btnSub",on:{click:t.login}},[t._v("登录")])])]),t._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"bottomLink"},[e("a",{staticClass:"changPwd",attrs:{href:"#"}},[e("router-link",{attrs:{slot:"right",to:{name:"changPwd"}},slot:"right"},[t._v("更改密码    |")])],1),t._v(" "),e("a",{staticClass:"contact",attrs:{href:"#"}},[e("router-link",{attrs:{slot:"right",to:{name:"activeMore"}},slot:"right"},[t._v("   联系工作人员")])],1)])])])},[],!1,n,"data-v-148c20d4",null);s.default=i.exports},ceh7:function(t,s){}});
//# sourceMappingURL=47.42f309f1459914956b85.js.map