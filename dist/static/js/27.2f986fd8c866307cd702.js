webpackJsonp([27],{uYR3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mtWM"),o=a.n(s),i=a("ABCa"),n=a("1HIy"),c=a("17Ff"),r=a("YxJB"),l=a("3Lt7"),d=a("2sLL"),v=a("mzja"),u=a("63CM"),m=(u.a,i.a,n.a,r.a,l.a,d.a,v.a,{directives:{TransferDom:u.a},components:{XHeader:i.a,GroupTitle:n.a,Flexbox:r.a,FlexboxItem:l.a,XButton:d.a,Alert:v.a},data:function(){return{departmentid:this.$store.getters.user.departmentid,active:[],show:!1,msg:"",userId:c.a.get("userId"),isActive:!1}},methods:{getActivityMore:function(){var t=this;o()({method:"get",url:"/dangjian/active/getParticipateActive",params:{pageNum:1,pageSize:3,departmentid:this.departmentid,userId:this.$store.getters.user.userid}}).then(function(e){console.log(e.data.list),t.active=e.data.list}).catch(function(t){console.log(t)})},submit:function(t){var e=this;console.log(t),o()({method:"post",url:"/dangjian/active/participate",params:{userId:this.userId,activeId:t,departmentid:this.departmentid}}).then(function(t){e.msg=t.msg,e.show=!0}).catch(function(t){console.log(t)})},onHide:function(){console.log("on hide")},onShow:function(){console.log("on show")},datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"."+(this.getMonth()+1)+"."+this.getDay()},new Date(t).toLocaleString()}},mounted:function(){this.getActivityMore(),console.log(this.$store.getters.user.userid)}}),p=a("XyMi");var h=function(t){a("ymOw")},g=Object(p.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body disabled-tabbar"},[a("x-header",[t._v("全部活动")]),t._v(" "),a("div",{staticClass:"group-item"},t._l(t.active,function(e,s){return a("div",{key:s,staticClass:"allLine"},[a("div",[a("span",{staticClass:"colorL"},[t._v("时间：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(t.datePick(e.startTime)))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("地点：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activePace))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("发起人：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activeCreatePeopleName))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("活动内容：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activeContext))])]),t._v(" "),a("div",{staticClass:"book"},[a("a",{on:{click:function(a){t.submit(e.id)}}},[t._v("报名")])])])})),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("alert",{attrs:{title:t.msg},on:{"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("谢谢")])],1)],1)},[],!1,h,"data-v-30ec24f6",null);e.default=g.exports},ymOw:function(t,e){}});
//# sourceMappingURL=27.2f986fd8c866307cd702.js.map