webpackJsonp([16],{OPZ2:function(t,e){},uYR3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),s=a.n(i),o=a("ABCa"),n=a("1HIy"),c=a("17Ff"),d=a("YxJB"),r=a("3Lt7"),v=a("2sLL"),l=a("mzja"),u=a("63CM"),_=(u.a,o.a,n.a,d.a,r.a,v.a,l.a,{directives:{TransferDom:u.a},components:{XHeader:o.a,GroupTitle:n.a,Flexbox:d.a,FlexboxItem:r.a,XButton:v.a,Alert:l.a},data:function(){return{departmentid:this.$store.getters.user.departmentid,active:[],show:!1,msg:"",userId:c.a.get("userId"),isActive:!1}},methods:{getActivityMore:function(){var t=this;s()({method:"get",url:"/dangjian/active/getParticipateActive",params:{pageNum:1,pageSize:3,departmentid:this.departmentid}}).then(function(e){console.log(e.data.list),t.active=e.data.list}).catch(function(t){console.log(t)})},submit:function(t){var e=this;console.log(t),s()({method:"post",url:"/dangjian/active/participate",params:{userId:this.userId,activeId:t,departmentid:this.departmentid}}).then(function(t){e.msg=t.msg,e.show=!0}).catch(function(t){console.log(t)})},onHide:function(){console.log("on hide")},onShow:function(){console.log("on show")}},mounted:function(){this.getActivityMore()}}),m=a("XyMi");var f=function(t){a("OPZ2")},h=Object(m.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body disabled-tabbar"},[a("x-header",[t._v("全部活动")]),t._v(" "),a("div",{staticClass:"group-item"},t._l(t.active,function(e,i){return a("section",{key:i,staticClass:"mainbox"},[a("div",{staticStyle:{padding:"2vw 3.5vw 0"}},[a("table",{staticClass:"table",attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"90"}},[t._v("时间：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(e.startTime))])]),t._v(" "),a("tr",[a("td",[t._v("地点：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(e.activePace))])]),t._v(" "),a("tr",[a("td",[t._v("发起人：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(e.activeCreatePeopleName))])]),t._v(" "),a("tr",[a("td",{attrs:{valign:"top"}},[t._v("活动内容：")]),t._v(" "),a("td",{staticClass:"f_b weui-media-box__desc"},[t._v(t._s(e.activeContext))])])])]),t._v(" "),a("div",{staticClass:"book"},[a("a",{on:{click:function(a){t.submit(e.id)}}},[t._v("报名")])])])})),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("alert",{attrs:{title:t.msg},on:{"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("谢谢")])],1)],1)},[],!1,f,"data-v-f2be34e6",null);e.default=h.exports}});
//# sourceMappingURL=16.fc4fd270914a2ce94528.js.map