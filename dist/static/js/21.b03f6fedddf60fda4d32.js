webpackJsonp([21],{KuQL:function(t,a){},T07N:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("mtWM"),i=e.n(s),n=e("ABCa"),r=e("1HIy"),o=e("YxJB"),c=e("3Lt7"),d=e("2sLL"),l=(n.a,r.a,o.a,c.a,d.a,{components:{XHeader:n.a,GroupTitle:r.a,Flexbox:o.a,FlexboxItem:c.a,XButton:d.a},data:function(){return{partyBranch:"",name1:"",departmentname:"",totalscore:"",pointdetail:""}},filters:{Upper:function(t){return t>0?"+"+t:t}},methods:{getParams:function(){var t=this,a=this.$route.params.item;this.name1=a.name,this.departmentname=a.departmentname,this.totalscore=a.totalscore,i()({method:"get",url:"pdepartment/queryById",params:{departmentid:a.departmentid}}).then(function(a){t.partyBranch=a.data.partyBranch,console.log(a.data)}).catch(function(t){console.log(t)})},getPoint:function(){var t=this,a=this.$route.params.item;i()({method:"get",url:"pscoreparty/queryByUserId",params:{userid:a.id,year:2018}}).then(function(a){t.pointdetail=a.data,console.log("1212121212",a.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getParams(),this.getPoint()}}),_=e("XyMi");var v=function(t){e("KuQL")},p=Object(_.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-body"},[e("x-header",{attrs:{"left-options":{showBack:!0}}},[t._v("\n        党务积分信息\n    ")]),t._v(" "),e("section",{staticClass:"mainbox"},[e("div",{staticStyle:{padding:"2vw 3.5vw 2vw"}},[e("table",{staticClass:"table",attrs:{width:"100%"}},[e("tr",[e("td",{attrs:{width:"100"}},[t._v("姓名：")]),t._v(" "),e("td",{staticClass:"f_b"},[t._v(t._s(t.name1))])]),t._v(" "),e("tr",[e("td",[t._v("现有党支部：")]),t._v(" "),e("td",{staticClass:"f_b"},[t._v(t._s(t.departmentname))])]),t._v(" "),e("tr",[e("td",[t._v("党支部书记：")]),t._v(" "),e("td",{staticClass:"f_b"},[t._v(t._s(t.partyBranch))])]),t._v(" "),e("tr",[e("td",[t._v("现有积分：")]),t._v(" "),e("td",{staticClass:"f_b"},[e("span",{staticClass:"red"},[t._v(t._s(t.totalscore))])])])])])]),t._v(" "),e("section",{staticClass:"mainbox"},[t._m(0),t._v(" "),t._l(t.pointdetail,function(a,s){return e("div",{key:s,staticStyle:{padding:"2vw 3.5vw 6vw"}},[e("table",{staticClass:"table",attrs:{width:"100%"}},[e("tr",[e("td",{attrs:{width:"100"}},[t._v("获取时间：")]),t._v(" "),e("td",{staticClass:"f_b"},[t._v(t._s(a.scoreTime))])]),t._v(" "),e("tr",[e("td",[t._v("积分类型：")]),t._v(" "),e("td",{staticClass:"f_b"},[t._v(t._s(a.detailTitle))])]),t._v(" "),e("tr",[e("td",[t._v("审核人：")]),t._v(" "),e("td",{staticClass:"f_b"},[t._v(t._s(a.approvedName))])]),t._v(" "),e("tr",[e("td",{attrs:{valign:"top"}},[t._v("积分变动：")]),t._v(" "),e("td",{staticClass:"f_b"},[t._v(t._s(t._f("Upper")(a.score)))])])])])})],2)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:" clearfix p15 display"},[a("span",{staticClass:"fl weui-cell__bd1"},[this._v("积分获取明细")])])}],!1,v,"data-v-65c38902",null);a.default=p.exports}});
//# sourceMappingURL=21.b03f6fedddf60fda4d32.js.map