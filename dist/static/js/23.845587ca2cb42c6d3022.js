webpackJsonp([23],{dTCK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),s=a.n(n),o=a("ABCa"),i=a("1HIy"),r=a("YxJB"),l=a("3Lt7"),d=a("2sLL"),c=(o.a,i.a,r.a,l.a,d.a,{components:{XHeader:o.a,GroupTitle:i.a,Flexbox:r.a,FlexboxItem:l.a,XButton:d.a},data:function(){return{departmentid:this.$store.getters.user.departmentid,partyBranch:"",address:"",honor:"",people:"",todoList:[],info:[]}},methods:{getDepartment:function(){var t=this;s()({method:"get",url:"pdepartment/queryById",params:{departmentid:this.departmentid}}).then(function(e){t.info=e.data,t.partyBranch=e.data.partyBranch,t.address=e.data.address,t.honor=e.data.honor,t.people=e.data.people,console.log(e.data)}).catch(function(t){console.log(t)}),s.a.get("pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){console.log(e),t.todoList=e.data}).catch(function(t){console.log(t)})}},mounted:function(){this.getDepartment()}}),f=a("XyMi");var v=function(t){a("zger")},_=Object(f.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n    "+t._s(t.info.departmentname)+"\n  ")]),t._v(" "),a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        党支部书记：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.partyBranch)+"\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        所属片区：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.address)+"\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        党支部评级：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.honor)+"\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        现有党员：\n      ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.info.people))]),t._v("\n        人\n      ")])],1)],1),t._v(" "),a("div",{staticClass:"list"},[a("h3",[t._v("书记代办事宜")]),t._v(" "),t._l(t.todoList,function(e,n){return[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v(t._s(n+1)+". "+t._s(e.title)+t._s("SCORE"==e.type?"积分加分确认":"图片上传"))]),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{type:"warn",link:"SCORE"==e.type?"/points/review":"/active"}},[t._v("\n            "+t._s("Y"==e.beginYn?"去处理":"活动二维码")+"\n          ")])],1)])]})],2)],1)},[],!1,v,"data-v-8ffdfe02",null);e.default=_.exports},zger:function(t,e){}});
//# sourceMappingURL=23.845587ca2cb42c6d3022.js.map