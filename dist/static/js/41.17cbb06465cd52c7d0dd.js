webpackJsonp([41],{efhR:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i("5enu"),s=i("UnIH"),e=i("+62G"),c=i("bFJ2"),o=(e.a,n.a,s.a,c.a,{directives:{TransferDom:e.a},data:function(){return{num:0,activeData:{},picInfo:[],list:[],picList:[],spr:!1,noSpr:!1,nobtnPack:!1,nobtnAn:!1,btnPack:!1,btnAn:!1,peopleNum:null,participants:null,Noparticipants:null,activeNames:"",contents:{rights:"",title:"bbb"},roleId:this.$store.getters.user.roleid,options:{getThumbBoundsFn:function(t){var a=document.querySelectorAll(".previewer-demo-img")[t],i=window.pageYOffset||document.documentElement.scrollTop,n=a.getBoundingClientRect();return{x:n.left,y:n.top+i,w:n.width}}}}},components:{"r-header":n.a,Previewer:s.a,ViewBox:c.a},methods:{show:function(t){this.$refs.previewer.show(t)},showPicInfo:function(t){this.$refs.previewer2.show(t)},spread:function(){this.spr=!0,this.btnAn=!this.btnAn,this.btnPack=!this.btnPack},folding:function(){this.spr=!this.spr,this.btnAn=!this.btnAn,this.btnPack=!this.btnPack},noSpread:function(){this.noSpr=!0,this.nobtnAn=!this.nobtnAn,this.nobtnPack=!this.nobtnPack},noFolding:function(){this.noSpr=!this.noSpr,this.nobtnAn=!this.nobtnAn,this.nobtnPack=!this.nobtnPack},logIndexChange:function(t){console.log(t)},getData:function(){var t=this;this.$http.post("active/queryById?activeId="+this.$route.params.activeId).then(function(a){(t.activeData=a.data,t.contents.title=a.data.activeTypeName+"详情",t.activeNames=t.activeData.activeTypeName,t.peopleNum=t.activeData.participateCount+t.activeData.notParticipateCount,t.participants=t.activeData.participateCount,t.Noparticipants=t.activeData.notParticipateCount,t.participants>=4&&(t.btnAn=!0),t.Noparticipants>=4&&(t.nobtnAn=!0),t.activeData.picIds)&&t.activeData.picIds.split(",").forEach(function(a){if(a){var i={};i.msrc="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+a,i.src="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+a,t.picList.push(i)}})}).catch(function(t){console.log(t)})},getPic:function(){var t=this;this.$http.post("active/getActivePictures?activeId="+this.$route.params.activeId).then(function(a){t.picInfo=a.data;for(var i=0;i<t.picInfo.length;i++){var n={};n.msrc="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+t.picInfo[i].pictureId,n.src="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+t.picInfo[i].pictureId,t.list.push(n)}}).catch(function(t){console.log(t)})},dataPick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日"},new Date(t).toLocaleString()}},mounted:function(){this.getData(),this.getPic()},filters:{formatDuring:function(t){return""==t||null==t||void 0==t?t="无":(Date.prototype.toLocaleString=function(){var t=this.getMonth()+1;t<10&&(t="0"+t);var a=this.getDate();a<10&&(a="0"+a);var i=this.getHours();i<10&&(i="0"+i);var n=this.getMinutes();return n<10&&(n="0"+n),this.getFullYear()+"."+t+"."+a+" "+i+":"+n},new Date(t).toLocaleString())}}}),r=i("18Nq");var p=function(t){i("ky5+")},l=Object(r.a)(o,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"page-body"},[i("view-box",{ref:"viewBox",attrs:{"body-padding-top":".46rem"}},[i("r-header",{attrs:{rfs:t.contents}}),t._v(" "),i("p",{staticClass:"titles"},[t._v(t._s(t.activeData.activeName))]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.activeNames)+"活动发起人："),i("span",{staticClass:"dark"},[t._v(t._s(t.activeData.activeCreatePeopleName))])]),t._v(" "),i("p",{staticClass:"time"},[t._v("活动时间："),i("span",{staticClass:"dark"},[t._v(t._s(t._f("formatDuring")(t.activeData.startTime))+"~"+t._s(t._f("formatDuring")(t.activeData.endTime)))])]),t._v(" "),i("p",{staticClass:"time"},[t._v("地点："),i("span",{staticClass:"dark"},[t._v(t._s(t.activeData.activePace))])]),t._v(" "),i("div",{staticClass:"artical"},[t._v("\n                "+t._s(t.activeData.activeContext)+"\n                \n                "),t._v(" "),i("div",{staticClass:"img-show-pic"},[t._l(t.picList,function(a,n){return i("img",{key:n,staticClass:"previewer-demo-img",attrs:{src:a.msrc},on:{click:function(a){t.showPicInfo(n)}}})}),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("previewer",{ref:"previewer2",attrs:{list:t.picList,options:t.options},on:{"on-index-change":t.logIndexChange}})],1)],2)]),t._v(" "),i("p",{staticClass:"allPic"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("span",{staticClass:"picture"},[t._v("活动图集")]),t._v(" "),i("span",{staticClass:"numberz"},[i("span",{staticStyle:{color:"#ff0000"}},[t._v(t._s(t.list&&t.list.length||t.num))]),t._v("张")])]),t._v(" "),i("div",{staticClass:"img-show"},[t._l(t.list,function(a,n){return i("img",{key:n,staticClass:"previewer-demo-img",attrs:{src:a.msrc},on:{click:function(a){t.show(n)}}})}),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("previewer",{ref:"previewer",attrs:{list:t.list,options:t.options},on:{"on-index-change":t.logIndexChange}})],1)],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:4!=t.roleId,expression:"roleId != 4 "}]},[i("p",{staticClass:"allPic"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("span",{staticClass:"picture"},[t._v("参与人员")]),t._v(" "),i("span",{staticClass:"numberz"},[i("span",{staticClass:"color-num"},[t._v(t._s(t.participants))]),t._v("/"+t._s(t.peopleNum))])]),t._v(" "),i("div",{staticClass:"wz-fonts",class:[t.noSpr?"auto":""]},t._l(t.activeData.participate,function(a,n){return i("div",[i("span",{staticClass:"noPartici-title"},[t._v(t._s(n)+"：")]),t._v(" "),t._l(a,function(a,n){return i("span",{staticStyle:{display:"inline-block"}},[t._v(t._s(a.name))])})],2)})),t._v(" "),i("p",{staticClass:"allPic"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("span",{staticClass:"no-picture"},[t._v("未参与人员")]),t._v(" "),i("span",{staticClass:"numberz"},[i("span",{staticClass:"color-num"},[t._v(t._s(t.Noparticipants))]),t._v("/"+t._s(t.peopleNum))])]),t._v(" "),i("div",{staticClass:"wz-fonts",class:[t.noSpr?"auto":""]},t._l(t.activeData.notParticipate,function(a,n){return i("div",[i("span",{staticClass:"noPartici-title"},[t._v(t._s(n)+"：")]),t._v(" "),t._l(a,function(a,n){return i("span",{staticStyle:{display:"inline-block"}},[t._v(t._s(a.name))])})],2)}))])],1)],1)},[],!1,p,"data-v-4dc6f37f",null);a.default=l.exports},"ky5+":function(t,a){}});
//# sourceMappingURL=41.17cbb06465cd52c7d0dd.js.map