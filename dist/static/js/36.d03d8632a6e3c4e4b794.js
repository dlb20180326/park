webpackJsonp([36],{CfUY:function(t,s){},RfVU:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("ABCa"),i=a("1sNz"),n=a("rHil"),o=a("1DHf"),c=a("YxJB"),l=a("3Lt7"),r=a("17Ff"),v=a("mtWM"),d=a.n(v),f=(e.a,i.a,n.a,o.a,c.a,l.a,{data:function(){return{userId:r.a.get("userId"),contents:{title:"党建"},info:{name:"王大陆",cardId:"6282451745218551527"},collect:[],pay:""}},components:{XHeader:e.a,ViewBox:i.a,Group:n.a,Cell:o.a,Flexbox:c.a,FlexboxItem:l.a},mounted:function(){var t=this;d.a.get("ppartymemberdues/queryByUserId",{params:{userid:this.userId}}).then(function(s){t.collect=s.data,t.collect.sort(function(t,s){return t.month>s.month?1:-1})}).catch(function(t){console.log("fail"+t)})},methods:{backhome:function(){this.$router.push({path:"/"})}}}),u=a("XyMi");var _=function(t){a("CfUY")},p=Object(u.a)(f,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{height:"100%"}},[a("x-header",{attrs:{title:"党员缴费","left-options":{preventGoBack:!0}},on:{"on-click-back":function(s){t.backhome()}}}),t._v(" "),a("view-box",{ref:"viewBox"},[a("div",{staticClass:"card-top"},[a("div",{staticClass:"card-img"}),t._v(" "),a("div",{staticClass:"nr-info"},[a("span",{staticClass:"left-info"},[t._v("银行卡用户名：")]),t._v(" "),a("span",{staticClass:"right-info"},[t._v(t._s(t.info.name))])]),t._v(" "),a("div",{staticClass:"nr-info"},[a("span",{staticClass:"left-info"},[t._v("绑定银行卡号：")]),t._v(" "),a("span",{staticClass:"right-info"},[t._v(t._s(t.info.cardId))])])]),t._v(" "),a("div",{staticClass:"pay"},[a("span",{staticClass:"payinfo"},[t._v("11月份应缴党费")]),t._v(" "),a("span",{staticClass:"payPrize"},[t._v("50")]),t._v(" "),a("span",{staticClass:"prize"},[t._v("元")]),t._v(" "),a("span",{staticClass:"payBtn"},[t._v("立即缴纳")])]),t._v(" "),a("div",{staticClass:"hist"},[t._v("历史党费")]),t._v(" "),a("flexbox",t._l(t.collect,function(s,e){return a("flexbox-item",{key:e},[a("div",{staticClass:"flex-demo"},[a("div",{staticClass:"money"},[a("span",{staticClass:"months"},[t._v(t._s(s.month)+"月党费：")]),t._v(" "),a("span",{staticClass:"dollar"},[t._v(t._s(s.dues)+"元")])]),t._v(" "),a("div",{staticClass:"status",class:[1==s.status?"greenStatus":"redStatus"],domProps:{textContent:t._s(1==s.status?"已缴纳":"未缴纳")}})])])})),t._v(" "),a("div",{staticClass:"btnPay"},[t._v("一键补缴")])],1)],1)},[],!1,_,"data-v-7966b6ae",null);s.default=p.exports}});
//# sourceMappingURL=36.d03d8632a6e3c4e4b794.js.map