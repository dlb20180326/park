webpackJsonp([29],{Asxq:function(t,e){},Pu2Y:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("6sKG"),s=a.n(n),i=a("nxAZ"),r=a("fJ2I"),o=a("mmca"),l=a("bFJ2"),c=a("cayO"),u=(i.a,r.a,o.a,l.a,{components:{XHeader:i.a,Flexbox:r.a,FlexboxItem:o.a,ViewBox:l.a},data:function(){return{contents:[],navName:{},years:(new Date).getFullYear(),select:{infos:"党员信息",acin:!1},userId:c.a.get("userId"),departmentname:"",person:0,partyBranch:""}},methods:{sub:function(t){this.$router.push({path:"/party/partyPointDetail",name:"partyPointDetail",params:{userid:t.id}})},infor:function(){var t=this;s.a.get("ppartymember/queryByDepartmentId",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.contents=e.data,t.departmentname=t.contents[0].departmentname}).catch(function(t){console.log("fail"+t)})},nav:function(){var t=this;s.a.get("pdepartment/queryById",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.navName=e.data,t.person=e.data.people}).catch(function(t){console.log("fail"+t)})},judge:function(t){return"1"===t?"男":"女"}},mounted:function(){this.infor(),this.nav(),this.judge()}}),f=a("18Nq");var m=function(t){a("Asxq")},d=Object(f.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body party-information"},[a("x-header",[t._v("\n        党员信息\n    ")]),t._v(" "),a("flexbox",{attrs:{orient:"vertical",align:"initial"}},[a("view-box",[a("div",{staticClass:"header"},[a("div",{staticClass:"group-name"},[t._v("\n                    "+t._s(t.departmentname)+"\n                ")]),t._v(" "),a("flexbox",{attrs:{gutter:0}},[a("flexbox-item",[t._v("支部人数:"+t._s(t.person)+"人")])],1)],1),t._v(" "),a("div",{staticClass:"points-table"},[a("flexbox",{staticClass:"colors",attrs:{gutter:0}},[a("flexbox-item",[t._v("姓名")]),t._v(" "),a("flexbox-item",[t._v("性别")]),t._v(" "),a("flexbox-item",[t._v("年龄")]),t._v(" "),a("flexbox-item",[t._v("积分")])],1),t._v(" "),t._l(t.contents,function(e,n){return a("flexbox",{key:n,staticClass:"diffrent",attrs:{gutter:0},nativeOn:{click:function(a){t.sub(e)}}},[a("flexbox-item",[t._v(t._s(e.name))]),t._v(" "),a("flexbox-item",[t._v(t._s(e.sex))]),t._v(" "),a("flexbox-item",[t._v(t._s(e.age))]),t._v(" "),a("flexbox-item",[t._v(t._s(e.totalscore||0))])],1)})],2)])],1)],1)},[],!1,m,null,null);e.default=d.exports}});
//# sourceMappingURL=29.bd7ca4d5857ff6acea92.js.map