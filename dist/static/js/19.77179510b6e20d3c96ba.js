webpackJsonp([19],{"+VbF":function(t,e){},efhR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("5enu"),n=a("2FOq"),s=a("63CM"),c=a("1sNz"),o=(s.a,i.a,n.a,c.a,{directives:{TransferDom:s.a},components:{"r-header":i.a,Previewer:n.a,ViewBox:c.a},methods:{show:function(t){this.$refs.previewer.show(t)},logIndexChange:function(t){console.log(t)},getData:function(){var t=this;this.$http.post("/dangjian/active/queryById?activeId="+this.$route.params.activeId).then(function(e){t.activeData=e.data}).catch(function(t){console.log(t)})},getPic:function(){var t=this;this.$http.post("/dangjian/active/getActivePictures?activeId="+this.$route.params.activeId).then(function(e){for(var a in t.picInfo=e.data,t.picInfo){var i={};i.msrc="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+t.picInfo[a].pictureId,i.src="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+t.picInfo[a].pictureId,t.list.push(i)}}).catch(function(t){console.log(t)})},dataPick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDay()+"日"},new Date(t).toLocaleString()}},mounted:function(){this.getData(),this.getPic()},data:function(){return{contents:{rights:"",title:"驿站活动详情"},num:10,activeData:{},picInfo:[],list:[],options:{getThumbBoundsFn:function(t){var e=document.querySelectorAll(".previewer-demo-img")[t],a=window.pageYOffset||document.documentElement.scrollTop,i=e.getBoundingClientRect();return{x:i.left,y:i.top+a,w:i.width}}}}}}),r=a("XyMi");var d=function(t){a("+VbF")},v=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("view-box",{ref:"viewBox",attrs:{"body-padding-top":".46rem"}},[a("r-header",{attrs:{rfs:t.contents}}),t._v(" "),a("p",{staticClass:"titles"},[t._v(t._s(t.activeData.activeName))]),t._v(" "),a("p",{staticClass:"time"},[t._v("时间："),a("span",{staticClass:"dark"},[t._v(t._s(t.dataPick(t.activeData.startTime)))])]),t._v(" "),a("p",{staticClass:"time"},[t._v("地点："),a("span",{staticClass:"dark"},[t._v(t._s(t.activeData.activePace))])]),t._v(" "),a("div",{staticClass:"artical"},[t._v("\n\t\t\t"+t._s(t.activeData.activeContext)+"\n\t\t")]),t._v(" "),a("p",{staticClass:"allPic"},[a("span",{staticClass:"bg-line"}),t._v(" "),a("span",{staticClass:"picture"},[t._v("活动图集")]),t._v(" "),a("span",{staticClass:"numberz"},[t._v(t._s(t.num)+"张")])]),t._v(" "),a("div",{staticClass:"img-show"},[t._l(t.list,function(e,i){return a("img",{staticClass:"previewer-demo-img",attrs:{src:e.src,width:"100"},on:{click:function(e){t.show(i)}}})}),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("previewer",{ref:"previewer",attrs:{list:t.list,options:t.options},on:{"on-index-change":t.logIndexChange}})],1)],2)],1)],1)},[],!1,d,"data-v-d5aeb2ca",null);e.default=v.exports}});
//# sourceMappingURL=19.77179510b6e20d3c96ba.js.map