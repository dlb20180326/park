webpackJsonp([47],{GT9p:function(t,e){},W8gL:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mtWM"),i=s.n(a),n={data:function(){return{userName:"",dateTime:"",activeId:"",activeName:"",activeMsg:"",sucStates:""}},methods:{getId:function(){this.activeId=this.$route.params.activeId,this.$vux.alert.show({title:this.$route.params.activeId})},getSign:function(){var t=this;this.$http.get("active/approved",{params:{userId:this.$store.getters.user.userid,activeId:this.$route.params.activeId}}).then(function(e){t.activeMsg=e.msg,0==e.success?t.sucStates="签到失败":t.sucStates="恭喜"}).catch(function(t){console.log(t)})},getActiveName:function(){var t=this;i()({url:"active/queryById",method:"post",headers:{contentType:"application/x-www-form-urlencode"},params:{activeId:this.$route.params.activeId}}).then(function(e){t.activeName=e.data.activeName}).catch(function(t){console.log(t)})},getUser:function(){var t=this;this.$http.get("ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userName=e.data.name}).catch(function(t){console.log(t)})},datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日"+this.getHours()+"时"+this.getMinutes()+"分"},new Date(t).toLocaleString()}},components:{},mounted:function(){this.getUser(),this.getSign(),this.getActiveName()}},c=s("XyMi");var r=function(t){s("GT9p")},o=Object(c.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-body"},[s("div",{staticClass:"all-bg"},[s("div",{staticClass:"header-title"},[s("p",{staticClass:"p-line"},[s("span",[t._v("\n            组织生活名称：\n            ")]),t._v(" "),s("span",[t._v("\n                "+t._s(t.activeName)+"\n                ")])]),t._v(" "),s("p",{staticClass:"p-line"},[s("span",[t._v("\n            签到时间：\n            ")]),t._v(" "),s("span",[t._v("\n                "+t._s(t.datePick(new Date))+"\n                ")])])]),t._v(" "),s("div",{staticClass:"success"},[s("div",{staticClass:"msgActive"},[t._v("\n            "+t._s(t.activeMsg)+"\n            ")]),t._v(" "),s("h2",[t._v("\n            "+t._s(t.sucStates)+"\n            ")]),t._v(" "),s("h1",[t._v("\n            "+t._s(t.userName)+"\n            ")]),t._v(" "),s("button",{staticClass:"btn-return"},[s("router-link",{staticStyle:{color:"#fff"},attrs:{to:"/"}},[t._v("点击返回")])],1)])])])},[],!1,r,"data-v-036cf373",null);e.default=o.exports}});
//# sourceMappingURL=47.eb4372d210eeab2f7c30.js.map