webpackJsonp([22],{BZ3A:function(t,e){},BuXm:function(t,e){},rFqn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),i=a.n(s),o=a("NYxO"),n=a("mtWM"),r=a.n(n),c=a("ABCa"),l=a("1HIy"),d=a("YxJB"),u=a("mzja"),h=a("3Lt7"),v=a("2sLL"),f=a("oVYx"),p=a("UNGY"),m=a("rHil"),g=a("taJy"),_=a("/kga"),b=a("63CM"),x=(a("17Ff"),b.a,c.a,l.a,d.a,h.a,v.a,f.a,p.a,m.a,g.a,u.a,_.a,i()({refer:function(t){"GRAND"==t.type?this.$router.push({path:"points/review"}):"ACTIVE"==t.type&&("Y"==t.beginYn?this.$router.push({path:"active/partyBranch1"}):(this.activeTitle=t.name,this.showQR(t.masId)))},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},infoDetail:function(){var t=this;r.a.get("/dangjian/pdepartment/queryById",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.partAbout=e.data}).catch(function(t){console.log(t)}),r.a.get("/dangjian/pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data,console.log(t.todoList)}).catch(function(t){console.log(t)})},userName:function(){var t=this;r.a.get("/dangjian/ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userAbout=e.data}).catch(function(t){console.log(t)})},getHead:function(){var t=this;this.$http.get("ppartymember/queryByRoleId",{params:{roleid:this.$store.getters.user.roleid}}).then(function(e){t.headName=JSON.parse(e.data),console.log(t.headName)}).catch(function(t){console.log("fail"+t)})},getHeader:function(){var t=this;this.$http.get("pscoredetail/todoListCount",{params:{userId:this.$store.getters.user.userid}}).then(function(e){console.log(e),t.total=e.data}).catch(function(t){console.log("fail"+t)})}},Object(o.b)(["logout"])),{directives:{TransferDom:b.a},data:function(){return{users:[{id:1,fonts:"年度积分",integral:0},{id:2,fonts:"活动次数",integral:0}],userAbout:{},dateTime:"",charts:"",partAbout:{},todoList:[],total:0,headName:{},activeTitle:"",showQrcodeDialog:!1}},components:{XHeader:c.a,GroupTitle:l.a,Flexbox:d.a,FlexboxItem:h.a,XButton:v.a,DatetimePlugin:f.a,Datetime:p.a,Group:m.a,Picker:g.a,Alert:u.a,XDialog:_.a},mounted:function(){var t=(new Date).getHours();this.dateTime=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好",this.getHead(),this.getHeader(),this.$nextTick(function(){}),this.userName(),this.infoDetail()},methods:i()({refer:function(t){"GRAND"==t.type?this.$router.push({path:"points/review"}):"ACTIVE"==t.type&&("Y"==t.beginYn?this.$router.push({path:"active/partyBranch1"}):(this.activeTitle=t.name,this.showQR(t.masId)))},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},infoDetail:function(){var t=this;r.a.get("/dangjian/pdepartment/queryById",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.partAbout=e.data}).catch(function(t){console.log(t)}),r.a.get("/dangjian/pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data,console.log(t.todoList)}).catch(function(t){console.log(t)})},userName:function(){var t=this;r.a.get("/dangjian/ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userAbout=e.data}).catch(function(t){console.log(t)})},getHead:function(){var t=this;this.$http.get("ppartymember/queryByRoleId",{params:{roleid:this.$store.getters.user.roleid}}).then(function(e){t.headName=JSON.parse(e.data),console.log(t.headName)}).catch(function(t){console.log("fail"+t)})},getHeader:function(){var t=this;this.$http.get("pscoredetail/todoListCount",{params:{userId:this.$store.getters.user.userid}}).then(function(e){console.log(e),t.total=e.data}).catch(function(t){console.log("fail"+t)})}},Object(o.b)(["logout"]))}),y=a("XyMi");var C=function(t){a("BuXm"),a("BZ3A")},w=Object(y.a)(x,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n    上海中心片区\n  ")]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      片区负责人：\n                  ")]),t._v(" "),a("flexbox-item",[t._v("\n                      "+t._s(t.headName.name)+"\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      现有党支部：\n                  ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.headName.branchSum))]),t._v(" 个\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      所属党委：\n                  ")]),t._v(" "),a("flexbox-item",[t._v("\n                      陆家嘴中心\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      现有党员：\n                  ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.headName.peopleSum))]),t._v("\n                      人\n                  ")])],1),t._v(" "),a("div",{staticClass:"exit",on:{click:t.logout}},[a("span",[t._v("退出登录")])])],1),t._v(" "),a("div",{staticClass:"list"},[a("h3",[t._v("书记待办事宜 "),a("span",{staticStyle:{color:"#b93647","font-size":".16rem"}},[t._v(" ("+t._s(t.total)+")")])]),t._v(" "),t._l(t.todoList,function(e,s){return a("div",{key:s},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v(t._s(s+1)+".\n             "),"SCORE"==e.type?a("span",[t._v(t._s(e.title)+"积分加分确认")]):t._e(),t._v(" "),"GRAND"==e.type?a("span",[t._v(t._s(e.title)+"积分加分确认")]):"ACTIVE"==e.type?a("span",[a("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.masId}}}},[t._v(t._s(e.title))])],1):t._e()]),t._v(" "),a("div",{staticClass:"content"},["SCORE"==e.type?a("div",[a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      去处理\n                  ")])]):t._e(),t._v(" "),"GRAND"==e.type?a("div",[a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      去评分\n                  ")])]):t._e(),t._v(" "),"ACTIVE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      上传图片\n                  ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      活动二维码\n                  ")]):t._e()]):t._e(),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:s!==t.todoList.length-1,expression:"index!==todoList.length-1"}]})])])])})],2)]),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[a("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{minHeight:"350px"}},model:{value:t.showQrcodeDialog,callback:function(e){t.showQrcodeDialog=e},expression:"showQrcodeDialog"}},[a("div",{staticClass:"title"},[a("label",[t._v("活动名称:")]),t._v(" "),a("div",{staticClass:"activeTitle"},[t._v(t._s(t.activeTitle))])]),t._v(" "),a("div",{staticClass:"qrcode"},[a("img",{attrs:{id:"fei",alt:""}})])])],1)],1)},[],!1,C,"data-v-3a1f8df0",null);e.default=w.exports}});
//# sourceMappingURL=22.e854d1e44d1cecb124da.js.map