webpackJsonp([28],{eR94:function(t,a){},efhR:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("5enu"),i=n("2FOq"),e=n("63CM"),c=n("1sNz"),o=(e.a,s.a,i.a,c.a,{directives:{TransferDom:e.a},components:{"r-header":s.a,Previewer:i.a,ViewBox:c.a},methods:{show:function(t){this.$refs.previewer.show(t)},spread:function(){this.spr=!0,this.btnAn=!this.btnAn,this.btnPack=!this.btnPack},folding:function(){this.spr=!this.spr,this.btnAn=!this.btnAn,this.btnPack=!this.btnPack},noSpread:function(){this.noSpr=!0,this.nobtnAn=!this.nobtnAn,this.nobtnPack=!this.nobtnPack},noFolding:function(){this.noSpr=!this.noSpr,this.nobtnAn=!this.nobtnAn,this.nobtnPack=!this.nobtnPack},logIndexChange:function(t){console.log(t)},getData:function(){var t=this;this.$http.post("active/queryById?activeId="+this.$route.params.activeId).then(function(a){t.activeData=a.data,t.peopleNum=t.activeData.notParticipate.length+t.activeData.participate.length,t.participants=t.activeData.participate.length,t.Noparticipants=t.activeData.notParticipate.length,t.participants>=4&&(t.btnAn=!0),t.Noparticipants>=4&&(t.nobtnAn=!0)}).catch(function(t){console.log(t)})},getPic:function(){var t=this;this.$http.post("active/getActivePictures?activeId="+this.$route.params.activeId).then(function(a){for(var n in t.picInfo=a.data,t.picInfo){var s={};s.msrc="http://www.dlbdata.cnpicture/show?pictureId="+t.picInfo[n].pictureId,s.src="http://www.dlbdata.cnpicture/show?pictureId="+t.picInfo[n].pictureId,t.list.push(s)}}).catch(function(t){console.log(t)})},dataPick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日"},new Date(t).toLocaleString()}},mounted:function(){this.getData(),this.getPic()},data:function(){return{contents:{rights:"",title:"驿站活动详情"},num:0,activeData:{},picInfo:[],list:[],spr:!1,noSpr:!1,nobtnPack:!1,nobtnAn:!1,btnPack:!1,btnAn:!1,peopleNum:null,participants:null,Noparticipants:null,options:{getThumbBoundsFn:function(t){var a=document.querySelectorAll(".previewer-demo-img")[t],n=window.pageYOffset||document.documentElement.scrollTop,s=a.getBoundingClientRect();return{x:s.left,y:s.top+n,w:s.width}}}}}}),r=n("XyMi");var p=function(t){n("eR94")},l=Object(r.a)(o,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"page-body"},[n("view-box",{ref:"viewBox",attrs:{"body-padding-top":".46rem"}},[n("r-header",{attrs:{rfs:t.contents}}),t._v(" "),n("p",{staticClass:"titles"},[t._v(t._s(t.activeData.activeName))]),t._v(" "),n("p",{staticClass:"time"},[t._v("时间："),n("span",{staticClass:"dark"},[t._v(t._s(t.dataPick(t.activeData.startTime)))])]),t._v(" "),n("p",{staticClass:"time"},[t._v("地点："),n("span",{staticClass:"dark"},[t._v(t._s(t.activeData.activePace))])]),t._v(" "),n("div",{staticClass:"artical"},[t._v("\n\t\t\t"+t._s(t.activeData.activeContext)+"\n\t\t")]),t._v(" "),n("p",{staticClass:"allPic"},[n("span",{staticClass:"bg-line"}),t._v(" "),n("span",{staticClass:"picture"},[t._v("活动图集")]),t._v(" "),n("span",{staticClass:"numberz"},[t._v(t._s(t.list&&t.list.length||t.num)+"张")])]),t._v(" "),n("div",{staticClass:"img-show"},[t._l(t.list,function(a,s){return n("img",{staticClass:"previewer-demo-img",attrs:{src:a.src},on:{click:function(a){t.show(s)}}})}),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("previewer",{ref:"previewer",attrs:{list:t.list,options:t.options},on:{"on-index-change":t.logIndexChange}})],1)],2),t._v(" "),n("p",{staticClass:"allPic"},[n("span",{staticClass:"bg-line"}),t._v(" "),n("span",{staticClass:"picture"},[t._v("参与人员")]),t._v(" "),n("span",{staticClass:"numberz"},[n("span",{staticClass:"color-num"},[t._v(t._s(t.participants))]),t._v("/"+t._s(t.peopleNum))])]),t._v(" "),n("div",{staticClass:"wz-fonts",class:[t.spr?"auto":""]},t._l(t.activeData.participate,function(a,s){return n("span",[t._v(t._s(a.name))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.btnAn,expression:"btnAn"}],staticClass:"btnMore",on:{click:t.spread}},[t._v("查看全部参与人员名单"),n("span",{staticClass:"down"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.btnPack,expression:"btnPack"}],staticClass:"btnMore",on:{click:t.folding}},[t._v("收起"),n("span",{staticClass:"up"})]),t._v(" "),n("p",{staticClass:"allPic"},[n("span",{staticClass:"bg-line"}),t._v(" "),n("span",{staticClass:"no-picture"},[t._v("未参与人员")]),t._v(" "),n("span",{staticClass:"numberz"},[n("span",{staticClass:"color-num"},[t._v(t._s(t.Noparticipants))]),t._v("/"+t._s(t.peopleNum))])]),t._v(" "),n("div",{staticClass:"wz-fonts",class:[t.noSpr?"auto":""]},t._l(t.activeData.notParticipate,function(a,s){return n("span",[t._v(t._s(a.name))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.nobtnAn,expression:"nobtnAn"}],staticClass:"btnMore",on:{click:t.noSpread}},[t._v("查看全部参与人员名单"),n("span",{staticClass:"down"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.nobtnPack,expression:"nobtnPack"}],staticClass:"btnMore",on:{click:t.noFolding}},[t._v("收起"),n("span",{staticClass:"up"})])],1)],1)},[],!1,p,"data-v-52da74b4",null);a.default=l.exports}});
//# sourceMappingURL=28.5fda1a258dccf2a39e90.js.map