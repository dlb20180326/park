webpackJsonp([27],{"2+Wi":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("mtWM"),i=o.n(n),a=o("7+uW"),s=o("1sNz"),l=o("63CM"),r=o("HD9R"),c=o("YxJB"),d=o("3Lt7"),p=o("ABCa");a.a.component(r.a.name,r.a);p.a,s.a,r.a,c.a,d.a,l.a;a.a.component(r.a.name,r.a);var u={data:function(){return{contents:{rights:"评分说明",title:"遵纪守法评分"},list:[],isYellow:!1,showPop:!1}},filters:{Upper:function(t){try{if(3===t)throw"去处理";if(1===t)throw"已审核";if(0===t)throw"待审核"}catch(t){return t}},Upper1:function(t){try{if(null===t)throw"yellowA";if(1===t)throw"yellowB";if(0===t)throw"yellowC"}catch(t){return t}}},components:{XHeader:p.a,ViewBox:s.a,Popup:r.a,Flexbox:c.a,FlexboxItem:d.a},directives:{TransferDom:l.a},methods:{getlist:function(){var t=this;i()({method:"get",url:"pscoreparty/getDakDetialByDepartmentId",params:{departmentId:1}}).then(function(e){console.log(e),t.list=e.data}).catch(function(t){console.log(t)})},changeItem:function(t){this.$router.push({path:"lawAbidingDetail",params:{partmentId:t.id,name:encodeURI(t.name),departmentId:t.departmentid,userId:t.userid}})},showMenu:function(){this.showPop=!0},know:function(){this.showPop=!1}},mounted:function(){this.getlist()}},v=o("XyMi");var f=function(t){o("nQ5k")},m=Object(v.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[o("view-box",{ref:"viewBox",attrs:{"body-padding-top":".46rem"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{slot:"header"},slot:"header"},[t._v("\n                "+t._s(t.contents.title)),o("a",{attrs:{slot:"right"},on:{click:t.showMenu},slot:"right"},[t._v("评分说明")])]),t._v(" "),o("div",{staticClass:"points-table"},[o("flexbox",{attrs:{gutter:0}},[o("flexbox-item",[t._v("序号")]),t._v(" "),o("flexbox-item",[t._v("党员姓名")]),t._v(" "),o("flexbox-item",[t._v("分数")]),t._v(" "),o("flexbox-item",[t._v("一票否决")])],1),t._v(" "),t._l(t.list,function(e,n){return o("flexbox",{key:n,attrs:{gutter:0}},[o("flexbox-item",[t._v(t._s(n+1))]),t._v(" "),o("flexbox-item",[t._v(t._s(e.approvedName))]),t._v(" "),"Y"==e.validYn?o("flexbox-item",[t._v("0")]):o("flexbox-item",[t._v(t._s(e.typetotalscore))]),t._v(" "),o("flexbox-item",[o("input",{staticClass:"btnSub",class:t._f("Upper1")(e.tempint),attrs:{type:"button",value:t._f("Upper")(3)},on:{click:function(o){t.changeItem(e)}}})])],1)})],2),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("popup",{attrs:{position:"left",width:"100%"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[o("div",{staticClass:"middle"},[o("div",{staticClass:"middle-top",on:{click:function(e){t.show()}}},[t._v("评分说明")]),t._v(" "),o("div",{staticClass:"middle-content"},[o("p",[t._v("                            1、党员在支部民主评议党员活动中，被评定为“不合格党员”或受限期改正等组织处置的扣20分；"),o("br"),t._v("\n                            2、党员受到党内纪律处分或行政处罚以上的，实行“一票否决”。\n\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"knowBtn",on:{click:t.know}},[t._v("我知道了")])])])],1)],1)],1)},[],!1,f,"data-v-7865e92c",null);e.default=m.exports},nQ5k:function(t,e){}});
//# sourceMappingURL=27.14025bdfd42beaa90ac0.js.map