webpackJsonp([16],{IgtN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mtWM"),o=i.n(a),n=i("ABCa"),s=i("1HIy"),l=i("YxJB"),r=i("mzja"),c=i("3Lt7"),u=i("2sLL"),v=i("oVYx"),m=i("UNGY"),d=i("rHil"),p=i("taJy"),g=i("/kga"),h=i("63CM"),f=(h.a,n.a,s.a,l.a,c.a,u.a,v.a,m.a,d.a,p.a,r.a,g.a,{directives:{TransferDom:h.a},components:{XHeader:n.a,GroupTitle:s.a,Flexbox:l.a,FlexboxItem:c.a,XButton:u.a,DatetimePlugin:v.a,Datetime:m.a,Group:d.a,Picker:p.a,Alert:r.a,XDialog:g.a},data:function(){return{value1:"",startTime:"",endTime:"",hourListValue:"",hot:"",activeType:"",activityName:"",activePace:"",activeTitle:"",activeCreatePeople:this.$store.getters.user.userid,activePrincipalPeople:"",activeContext:"",activeContent:"",activeStatus:0,activeProjectActive:"",PickerVisible1:!1,pickerValue1:"请选择活动类型",years:"",year1:[""],list:"",PickerVisible2:!1,departmentid:this.$store.getters.user.departmentid,showQrcodeDialog:!1,Qrcode:""}},methods:{openPicker:function(){this.$refs.picker.open()},handleConfirm:function(t){var e=t;this.startTime=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()},handlePicker:function(){var t=this;this.PickerVisible2=!this.PickerVisible2,o()({method:"get",url:"pscoredetail/queryByJoinList"}).then(function(e){t.list=e.data}).catch(function(t){console.log(t)})},onValuesChange:function(t,e){this.pickerValue1=e[0],this.PickerVisible1=!1},submit:function(){var t=this,e=this.startTime.replace(new RegExp("-","gm"),"/"),i=new Date(e).getTime(),a=this.endTime.replace(new RegExp("-","gm"),"/"),n=new Date(a).getTime();i<n?o()({method:"post",url:"active/create",params:{startTime:i,endTime:n,activeType:this.activeType,activityProjectId:this.activeProjectActive,activePace:this.activePace,activeCreatePeople:this.$store.getters.user.userid,activePrincipalPeople:this.activePrincipalPeople,activeContext:this.activeContext,activeName:this.activeTitle,activeStatus:1,departmentid:this.departmentid}}).then(function(e){t.$vux.alert.show({title:e.msg}),t.showQR(e.data)}).catch(function(t){console.log(t)}):this.$vux.alert.show({title:"开始日期不能大于结束日期"})},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},submit1:function(t){this.activeType=t.id,this.activeProjectActive=t.projectId,this.activityName=t.projectName,this.PickerVisible2=!1},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},change:function(t){this.startTime=t},change1:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,i=e.getMonth()+1,a=e.getDate();i<10&&(i="0"+i),a<10&&(a="0"+a),this.value7=e.getFullYear()+"-"+i+"-"+a,console.log("set today ok")}},mounted:function(){this.getActivity()}}),x=i("XyMi");var b=function(t){i("n3Bc"),i("ouTW")},y=Object(x.a)(f,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body disabled-tabbar"},[i("x-header",[t._v("发起活动")]),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动开始时间")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.change},model:{value:t.hourListValue,callback:function(e){t.hourListValue=e},expression:"hourListValue"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动结束时间")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.endTime,expression:"endTime"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.endTime},on:{input:function(e){e.target.composing||(t.endTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.change1},model:{value:t.hot,callback:function(e){t.hot=e},expression:"hot"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动类型")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.activityName,expression:"activityName"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.activityName},on:{input:function(e){e.target.composing||(t.activityName=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon"},[i("x-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(e){t.handlePicker()}}},[i("i",{staticClass:"iconfont dlb-icon-category"})])],1)],1)],1),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.PickerVisible2,expression:"PickerVisible2"}],staticClass:"active-type-list"},t._l(t.list,function(e,a){return i("li",{key:a,on:{click:function(i){t.submit1(e)}}},[t._v(t._s(e.projectName))])})),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动名称")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activeTitle,expression:"activeTitle"}],attrs:{type:"text"},domProps:{value:t.activeTitle},on:{input:function(e){e.target.composing||(t.activeTitle=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动地点")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activePace,expression:"activePace"}],attrs:{type:"text"},domProps:{value:t.activePace},on:{input:function(e){e.target.composing||(t.activePace=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动负责人")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activePrincipalPeople,expression:"activePrincipalPeople"}],attrs:{type:"text"},domProps:{value:t.activePrincipalPeople},on:{input:function(e){e.target.composing||(t.activePrincipalPeople=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动内容")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeContext,expression:"activeContext"}],attrs:{cols:"30",rows:"10",maxlength:"300"},domProps:{value:t.activeContext},on:{input:function(e){e.target.composing||(t.activeContext=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"}),t._v(" "),i("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n            生成活动二维码\n        ")])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[i("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{width:"80%",height:"300px"}},model:{value:t.showQrcodeDialog,callback:function(e){t.showQrcodeDialog=e},expression:"showQrcodeDialog"}},[i("h1",{staticStyle:{"text-align":"center","margin-top":"20px","margin-bottom":"20px"}},[t._v(t._s(t.activeTitle))]),t._v(" "),i("img",{attrs:{id:"fei",alt:""}})])],1)],1)},[],!1,b,"data-v-092f749e",null);e.default=y.exports},n3Bc:function(t,e){},ouTW:function(t,e){}});
//# sourceMappingURL=16.1722f92b0d08a4ded961.js.map