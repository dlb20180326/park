webpackJsonp([33],{"8i4V":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{account:"",pass:"12345678"}},methods:{login:function(){var t=this;return this.account?this.pass?void this.$store.dispatch("login",{name:this.account,password:this.pass,openId:this.$route.query.openId||void 0}).then(function(e){if(e.status){var s=e.entry.roleId;t.$router.push({path:"/main"+s})}else t.$vux.toast.show({text:e.message,width:"18em",type:"text",position:"top"})}):this.$vux.toast.show({text:"请输入密码",type:"text",position:"top"}):this.$vux.toast.show({text:"请输入帐号",type:"text",position:"top"})},keyUpReturn:function(){this.login()}},mounted:function(){}},o=s("XyMi");var a=function(t){s("wQOe")},i=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-body"},[s("div",{staticClass:"logo-top"}),t._v(" "),s("div",{staticClass:"last-content"},[s("div",{staticClass:"inputs"},[s("div",{staticClass:"input-all clearfix"},[s("span",{staticClass:"icon-phone"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"输入登录用户"},domProps:{value:t.account},on:{keyup:function(e){return"button"in e||13===e.keyCode?t.keyUpReturn(e):null},input:function(e){e.target.composing||(t.account=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-all clearfix"},[s("span",{staticClass:"icon-key"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],attrs:{type:"password",placeholder:"输入登录密码"},domProps:{value:t.pass},on:{keyup:function(e){return"button"in e||13===e.keyCode?t.keyUpReturn(e):null},input:function(e){e.target.composing||(t.pass=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btnSub",on:{click:t.login}},[t._v("登录")])])])])},[],!1,a,"data-v-8f66a000",null);e.default=i.exports},wQOe:function(t,e){}});
//# sourceMappingURL=33.9a134acc3a233c32e1f9.js.map