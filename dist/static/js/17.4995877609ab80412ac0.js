webpackJsonp([17],{"0dLg":function(t,e){},UokI:function(t,e){},dTCK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),o=a("NYxO"),s=a("mtWM"),r=a.n(s),d=a("ABCa"),c=a("1HIy"),l=a("YxJB"),p=a("mzja"),v=a("3Lt7"),h=a("2sLL"),u=a("oVYx"),f=a("UNGY"),m=a("rHil"),_=a("taJy"),g=a("/kga"),b=a("63CM"),x=(a("17Ff"),b.a,d.a,c.a,l.a,v.a,h.a,u.a,f.a,m.a,_.a,p.a,g.a,n()({refer:function(t){"SCORE"==t.type?2===t.id||4===t.id||8===t.id?this.$router.push({path:"points/political/"+t.id}):this.$router.push({path:"points/evaluation"}):"ACTIVE"==t.type&&("Y"==t.beginYn?this.$router.push({path:"active/partyBranch"}):(this.activeTitle=t.name,this.showQR(t.masId)))},getDate:function(){var t=(new Date).getHours();this.dateTimes=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好"},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},getDepartment:function(){var t=this;r()({method:"get",url:"pdepartment/queryById",params:{departmentid:this.departmentid}}).then(function(e){t.info=e.data,t.partyBranch=e.data.partyBranch,t.address=e.data.address,t.honor=e.data.honor,t.people=e.data.people}).catch(function(t){console.log(t)}),r.a.get("pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data}).catch(function(t){console.log(t)})}},Object(o.b)(["logout"])),{directives:{TransferDom:b.a},components:{XHeader:d.a,GroupTitle:c.a,Flexbox:l.a,FlexboxItem:v.a,XButton:h.a,DatetimePlugin:u.a,Datetime:f.a,Group:m.a,Picker:_.a,Alert:p.a,XDialog:g.a},data:function(){return{departmentid:this.$store.getters.user.departmentid,partyBranch:"",address:"",honor:"",people:"",todoList:[],activeTitle:"",info:[],dateTimes:"",departmentname:"",showQrcodeDialog:!1}},methods:n()({refer:function(t){"SCORE"==t.type?2===t.id||4===t.id||8===t.id?this.$router.push({path:"points/political/"+t.id}):this.$router.push({path:"points/evaluation"}):"ACTIVE"==t.type&&("Y"==t.beginYn?this.$router.push({path:"active/partyBranch"}):(this.activeTitle=t.name,this.showQR(t.masId)))},getDate:function(){var t=(new Date).getHours();this.dateTimes=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好"},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},getDepartment:function(){var t=this;r()({method:"get",url:"pdepartment/queryById",params:{departmentid:this.departmentid}}).then(function(e){t.info=e.data,t.partyBranch=e.data.partyBranch,t.address=e.data.address,t.honor=e.data.honor,t.people=e.data.people}).catch(function(t){console.log(t)}),r.a.get("pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data}).catch(function(t){console.log(t)})}},Object(o.b)(["logout"])),mounted:function(){this.getDepartment(),this.getDate()}}),C=a("XyMi");var y=function(t){a("0dLg"),a("UokI")},w=Object(C.a)(x,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n    "+t._s(t.info.departmentname)+"\n  ")]),t._v(" "),a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"dateLable"},[t._v("\n        "+t._s(t.dateTimes)+",\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.partyBranch)+"书记。\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        所属党委：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.departmentname)+"\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        所属片区：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.address)+"\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        党支部评级：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.honor)+"\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        现有党员：\n      ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.info.people))]),t._v("\n        人\n      ")])],1),t._v(" "),a("div",{staticClass:"exit",on:{click:t.logout}},[a("span",[t._v("退出登录")])])],1),t._v(" "),a("div",{staticClass:"list"},[a("h3",[t._v("书记待办事宜")]),t._v(" "),t._l(t.todoList,function(e,i){return a("div",{key:i},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v(t._s(i+1)+".\n              "),"SCORE"==e.type?a("span",[t._v(t._s(e.name)+"积分加分确认")]):"ACTIVE"==e.type?a("span",[a("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.masId}}}},[t._v(t._s(e.title))])],1):t._e()]),t._v(" "),a("div",{staticClass:"content"},["SCORE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      去处理\n                  ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      去处理\n                  ")]):t._e()]):t._e(),t._v(" "),"ACTIVE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      上传图片\n                  ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      活动二维码\n                  ")]):t._e()]):t._e(),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:i!==t.todoList.length-1,expression:"index!==todoList.length-1"}]})])])])})],2),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[a("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{minHeight:"350px"}},model:{value:t.showQrcodeDialog,callback:function(e){t.showQrcodeDialog=e},expression:"showQrcodeDialog"}},[a("div",{staticClass:"title"},[a("label",[t._v("活动名称:")]),t._v(" "),a("div",{staticClass:"activeTitle"},[t._v(t._s(t.activeTitle))])]),t._v(" "),a("div",{staticClass:"qrcode"},[a("img",{attrs:{id:"fei",alt:""}})])])],1)],1)},[],!1,y,"data-v-b16d7bc0",null);e.default=w.exports}});
//# sourceMappingURL=17.4995877609ab80412ac0.js.map