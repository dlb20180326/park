webpackJsonp([13],{JsMG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),s=a.n(i),l=a("ABCa"),n=a("YxJB"),c=a("3Lt7"),o=a("17Ff"),r=a("1DHf"),v=a("rHil"),d=a("2sLL"),u=(Boolean,Boolean,Boolean,{name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}}),_=a("XyMi");var f=function(t){a("gAE/")},p=Object(_.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},[],!1,f,null,null).exports,h=(l.a,n.a,c.a,r.a,v.a,d.a,{components:{XHeader:l.a,Flexbox:n.a,FlexboxItem:c.a,Cell:r.a,Group:v.a,XButton:d.a,XTable:p},data:function(){return{number1:1,number2:1,userId:o.a.get("userId"),startTime1:"",activePace:"",activeCreatePeople:"",activeId:"",activeContext:"",activeComplete:[]}},methods:{getActivity:function(){var t=this;s()({method:"get",url:"active/getRunningActive",params:{pageNum:1,pageSize:1}}).then(function(e){console.log(e.data),t.startTime1=e.data.list[0].startTime,t.activePace=e.data.list[0].activePace,t.activeCreatePeople=e.data.list[0].activeCreatePeople,t.activeContext=e.data.list[0].activeContext,t.activeId=e.data.list[0].id}).catch(function(t){console.log(t)})},gettimes1:function(){var t=this;s()({method:"post",url:"active/getParticipateCount",params:{userId:this.userId,activeType:3}}).then(function(e){console.log(e),t.number1=e.data}).catch(function(t){console.log(t)})},gettimes2:function(){var t=this;s()({method:"post",url:"active/getParticipateCount",params:{userId:this.userId,activeType:5}}).then(function(e){console.log(e),t.number2=e.data}).catch(function(t){console.log(t)})},submit:function(){s()({method:"post",url:"active/participate",params:{userId:this.userId,activeId:this.activeId}}).then(function(t){alert(t.msg)}).catch(function(t){console.log(t)})},getAlreadyActive:function(){var t=this;s()({method:"get",url:"active/getAlreadyActive",params:{pageNum:1,pageSize:4}}).then(function(e){console.log("112132132132131",e.data.list),t.activeComplete=e.data.list,console.log(t.activeComplete)}).catch(function(t){console.log(t)})},datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"."+(this.getMonth()+1)+"."+this.getDay()},new Date(t).toLocaleString()}},mounted:function(){this.getActivity(),this.gettimes1(),this.gettimes2(),this.getAlreadyActive()}});var m=function(t){a("RNXU")},g=Object(_.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        党员活动\n    ")]),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("flexbox-item",[a("section",{staticClass:"mainbox"},[a("div",{staticClass:"barbg"},[t._v("\n                    年度共参与组织活动："),a("span",{staticStyle:{display:"inline"}},[t._v(t._s(t.number1))]),t._v(" 次\n                ")]),t._v(" "),a("div",{staticClass:"barbg"},[t._v("\n                    年度共参与紧邻一战活动："),a("span",{staticStyle:{display:"inline"}},[t._v(t._s(t.number2))]),t._v(" 次\n                ")])]),t._v(" "),a("div",{staticClass:"grayLine"})])],1),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("section",{staticClass:"mainbox1"},[a("div",{staticClass:" clearfix p15 display"},[a("span",{staticClass:"fl weui-cell__bd1"},[t._v("党员生活通知")]),t._v(" "),a("a",{staticClass:"fRight"},[a("router-link",{attrs:{slot:"right",to:{name:"activeMore"}},slot:"right"},[t._v("查看全部 >")])],1)]),t._v(" "),a("div",{staticClass:"content"},[a("table",{staticClass:"table",attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"100"}},[t._v("时间：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.startTime1))])]),t._v(" "),a("tr",[a("td",[t._v("地点：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activePace))])]),t._v(" "),a("tr",[a("td",[t._v("发起人：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activeCreatePeople))])]),t._v(" "),a("tr",[a("td",{attrs:{valign:"top"}},[t._v("活动内容：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activeContext))])])])]),t._v(" "),a("div",{staticClass:"book"},[a("a",{on:{click:function(e){t.submit()}}},[t._v("报名")])])])]),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("flexbox-item",[a("section",{staticClass:"mainbox "},[a("div",{staticClass:"p15"},[a("div",{staticClass:" clearfix  display"},[a("span",{staticClass:"fl weui-cell__bd1"},[t._v("已参与组织生活")]),t._v(" "),a("a",{staticClass:" fAll",attrs:{href:"#"}},[a("router-link",{attrs:{slot:"right",to:{name:"Active"}},slot:"right"},[t._v("查看全部 >")])],1)]),t._v(" "),a("ul",{staticClass:"news"},t._l(t.activeComplete,function(e,i){return a("li",{key:i},[a("a",{staticClass:" display clearfix ",attrs:{href:"javascript:;"}},[a("div",{staticClass:" fl"},[t._v(t._s(e.activeName))]),t._v(" "),a("div",{staticClass:" fr"},[t._v(t._s(t.datePick(e.endTime))),a("span",{staticClass:"rightBtn"})])])])}))])])])],1)],1)},[],!1,m,"data-v-2660c7c8",null);e.default=g.exports},RNXU:function(t,e){},"gAE/":function(t,e){}});
//# sourceMappingURL=13.369cdb211f4a99479847.js.map