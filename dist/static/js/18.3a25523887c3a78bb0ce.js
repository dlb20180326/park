webpackJsonp([18],{"61bR":function(t,e){},ASU9:function(t,e){},dTCK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),i=a.n(n),o=a("9rMa"),s=a("6sKG"),r=a.n(s),d=a("nxAZ"),c=a("Ylcv"),l=a("fJ2I"),u=a("ZCI5"),p=a("mmca"),h=a("d5Kw"),v=a("r1uy"),f=a("u28h"),m=a("z5TY"),_=a("Nk/b"),g=a("YP5q"),b=a("+62G"),x=(a("cayO"),b.a,d.a,c.a,l.a,p.a,h.a,v.a,f.a,m.a,_.a,u.a,g.a,i()({refer:function(t){"SCORE"==t.type?2===t.id||4===t.id||8===t.id?this.$router.push({path:"points/political/"+t.id}):this.$router.push({path:"points/evaluation"}):"ACTIVE"==t.type&&("Y"==t.beginYn?this.$router.push({path:"active/partyBranch"}):(this.activeTitle=t.name,this.showQR(t.masId)))},getDate:function(){var t=(new Date).getHours();this.dateTimes=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好"},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},getDepartment:function(){var t=this;r()({method:"get",url:"pdepartment/queryById",params:{departmentid:this.departmentid}}).then(function(e){t.info=e.data,t.partyBranch=e.data.partyBranch,t.address=e.data.address,t.honor=e.data.honor,t.people=e.data.people}).catch(function(t){console.log(t)}),r.a.get("pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data}).catch(function(t){console.log(t)})}},Object(o.b)(["logout"])),{directives:{TransferDom:b.a},components:{XHeader:d.a,GroupTitle:c.a,Flexbox:l.a,FlexboxItem:p.a,XButton:h.a,DatetimePlugin:v.a,Datetime:f.a,Group:m.a,Picker:_.a,Alert:u.a,XDialog:g.a},data:function(){return{departmentid:this.$store.getters.user.departmentid,partyBranch:"",address:"",honor:"",people:"",todoList:[],activeTitle:"",info:[],dateTimes:"",departmentname:"",showQrcodeDialog:!1}},methods:i()({refer:function(t){"SCORE"==t.type?2===t.id||4===t.id||8===t.id?this.$router.push({path:"points/political/"+t.id}):this.$router.push({path:"points/evaluation"}):"ACTIVE"==t.type&&("Y"==t.beginYn?this.$router.push({path:"active/partyBranch"}):(this.activeTitle=t.name,this.showQR(t.masId)))},getDate:function(){var t=(new Date).getHours();this.dateTimes=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好"},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},getDepartment:function(){var t=this;r()({method:"get",url:"pdepartment/queryById",params:{departmentid:this.departmentid}}).then(function(e){t.info=e.data,t.partyBranch=e.data.partyBranch,t.address=e.data.address,t.honor=e.data.honor,t.people=e.data.people}).catch(function(t){console.log(t)}),r.a.get("pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data}).catch(function(t){console.log(t)})}},Object(o.b)(["logout"])),beforeMount:function(){sessionStorage.userRoleId=3},mounted:function(){var t=(new Date).getHours();this.dateTime=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好",this.getDepartment(),this.getDate()}}),C=a("18Nq");var w=function(t){a("61bR"),a("ASU9")},y=Object(C.a)(x,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n    "+t._s(t.info.departmentname)+"\n  ")]),t._v(" "),a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"dateLable"},[t._v("\n        "+t._s(t.dateTimes)+","+t._s(t.info.partyBranch)+"书记。\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        所属党委：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.departmentname)+"\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        所属片区：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.address)+"\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        党支部评级：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.honor)+"\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        现有党员：\n      ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.info.people))]),t._v("\n        人\n      ")])],1),t._v(" "),a("div",{staticClass:"exit",on:{click:t.logout}},[a("span",[t._v("退出登录")])])],1),t._v(" "),a("div",{staticClass:"list"},[a("h3",[t._v("书记待办事宜")]),t._v(" "),t._l(t.todoList,function(e,n){return a("div",{key:n},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v(t._s(n+1)+".\n              "),"SCORE"==e.type?a("span",[t._v(t._s(e.name)+"积分加分确认")]):"ACTIVE"==e.type?a("span",[a("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.masId}}}},[t._v(t._s(e.title))])],1):t._e()]),t._v(" "),a("div",{staticClass:"content"},["SCORE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      去处理\n                  ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      去处理\n                  ")]):t._e()]):t._e(),t._v(" "),"ACTIVE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      上传图片\n                  ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      活动二维码\n                  ")]):t._e()]):t._e(),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:n!==t.todoList.length-1,expression:"index!==todoList.length-1"}]})])])])})],2),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[a("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{minHeight:"350px"}},model:{value:t.showQrcodeDialog,callback:function(e){t.showQrcodeDialog=e},expression:"showQrcodeDialog"}},[a("div",{staticClass:"title"},[a("label",[t._v("活动名称:")]),t._v(" "),a("div",{staticClass:"activeTitle"},[t._v(t._s(t.activeTitle))])]),t._v(" "),a("div",{staticClass:"qrcode"},[a("img",{attrs:{id:"fei",alt:""}})])])],1)],1)},[],!1,w,"data-v-ad154fa0",null);e.default=y.exports}});
//# sourceMappingURL=18.3a25523887c3a78bb0ce.js.map