webpackJsonp([23],{"4YLP":function(t,e){},YabR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),r=a.n(n),i=a("ABCa"),o=a("YxJB"),s=a("3Lt7"),l=a("1sNz"),m=(i.a,o.a,s.a,l.a,{components:{XHeader:i.a,Flexbox:o.a,FlexboxItem:s.a,ViewBox:l.a},data:function(){return{people:"",departmentname:"",partyBranch:"",total:""}},methods:{submit:function(t){this.$router.push({path:"/party/partyPointDetail/:userid/:partyBranch",name:"partyPointDetail",params:{userid:t.id}})},getParams:function(){var t=this,e=this.$route.params.departmentid;r()({method:"get",url:"pdepartment/queryById",params:{departmentid:e}}).then(function(e){t.departmentname=e.data.departmentname,t.partyBranch=e.data.partyBranch,t.people=e.data.people}).catch(function(t){console.log(t)})},getParams1:function(){var t=this,e=this.$route.params.departmentid;r()({method:"get",url:"ppartymember/queryByDepartmentId",params:{departmentid:e}}).then(function(e){t.total=e.data}).catch(function(t){console.log(t)})}},mounted:function(){this.getParams(),this.getParams1()}}),p=a("XyMi");var c=function(t){a("4YLP")},u=Object(p.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body party-information"},[a("x-header",[t._v("\n        党务信息\n    ")]),t._v(" "),a("flexbox",{attrs:{orient:"vertical",align:"initial"}},[a("view-box",[a("div",{staticClass:"header"},[a("div",{staticClass:"group-name"},[t._v("\n                    "+t._s(t.departmentname)+"\n                ")]),t._v(" "),a("flexbox",{attrs:{gutter:0}},[a("flexbox-item",[t._v("支部书记:"+t._s(t.partyBranch))]),t._v(" "),a("flexbox-item",[t._v("支部人数:"+t._s(t.people)+"人")])],1)],1),t._v(" "),a("div",{staticClass:"points-table"},[a("flexbox",{staticClass:"colors",attrs:{gutter:0}},[a("flexbox-item",[t._v("姓名")]),t._v(" "),a("flexbox-item",[t._v("性别")]),t._v(" "),a("flexbox-item",[t._v("年龄")]),t._v(" "),a("flexbox-item",[t._v("积分")])],1),t._v(" "),t._l(t.total,function(e,n){return a("flexbox",{key:n,staticClass:"diffrent",attrs:{gutter:0},nativeOn:{click:function(a){t.submit(e)}}},[a("flexbox-item",[t._v(t._s(e.name))]),t._v(" "),a("flexbox-item",[t._v(t._s(e.sex))]),t._v(" "),a("flexbox-item",[t._v(t._s(e.age))]),t._v(" "),a("flexbox-item",[t._v(t._s(e.totalscore||0))])],1)})],2)])],1)],1)},[],!1,c,null,null);e.default=u.exports}});
//# sourceMappingURL=23.580fb2a059bda29a8be9.js.map