webpackJsonp([9],{"9r/T":function(t,e,i){(function(t){var a=void 0!==t&&t||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new s(n.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new s(n.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i("AYvJ"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,i("nvO+"))},AYvJ:function(t,e,i){(function(t,e){!function(t,i){"use strict";if(!t.setImmediate){var a,n,s,o,l,r=1,c={},u=!1,m=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?a=function(t){e.nextTick(function(){f(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,i=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=i,e}}()?t.MessageChannel?((s=new MessageChannel).port1.onmessage=function(t){f(t.data)},a=function(t){s.port2.postMessage(t)}):m&&"onreadystatechange"in m.createElement("script")?(n=m.documentElement,a=function(t){var e=m.createElement("script");e.onreadystatechange=function(){f(t),e.onreadystatechange=null,n.removeChild(e),e=null},n.appendChild(e)}):a=function(t){setTimeout(f,0,t)}:(o="setImmediate$"+Math.random()+"$",l=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(o)&&f(+e.data.slice(o.length))},t.addEventListener?t.addEventListener("message",l,!1):t.attachEvent("onmessage",l),a=function(e){t.postMessage(o+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var n={callback:t,args:e};return c[r]=n,a(r),r++},d.clearImmediate=p}function p(t){delete c[t]}function f(t){if(u)setTimeout(f,0,t);else{var e=c[t];if(e){u=!0;try{!function(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(i,a)}}(e)}finally{p(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,i("nvO+"),i("V0EG"))},JDQa:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("4YfN"),n=i.n(a),s=i("rVsN"),o=i.n(s),l=i("6sKG"),r=i.n(l),c=i("9rMa"),u=i("nxAZ"),m=i("Ylcv"),d=i("fJ2I"),p=i("+62G"),f=i("ZCI5"),v=i("mmca"),h=i("d5Kw"),g=i("r1uy"),w=i("u28h"),y=i("z5TY"),_=i("Nk/b"),b=i("UnIH"),I=i("7g+Q"),T=i("P6uy"),x=i.n(T),C=i("zlMP"),k=i("9r/T"),Y=(p.a,u.a,m.a,d.a,v.a,h.a,g.a,w.a,y.a,_.a,f.a,b.a,I.a,n()({},Object(c.c)(["user"])),{directives:{TransferDom:p.a},components:{XHeader:u.a,GroupTitle:m.a,Flexbox:d.a,FlexboxItem:v.a,XButton:h.a,DatetimePlugin:g.a,Datetime:w.a,Group:y.a,Picker:_.a,Alert:f.a,Previewer:b.a,Popup:I.a},data:function(){return{showPop:!1,name1:"",value1:"",startTime:"",endTime:"",hourListValue:"",hot:"",ListValue:"",list1:[{text:"口头汇报",moduleId:11},{text:"书面汇报",moduleId:12}],list1Selected:{},activeContent:"",listSingle:{},userName:"",picList:{list:[],arr:[]}}},methods:{showMenu:function(){this.showPop=!0},know:function(){this.showPop=!1},getUser1:function(){var t=this;r.a.get("ppartymember/queryByUserId",{params:{userid:this.$route.params.userId}}).then(function(e){t.name1=e.data.name}).catch(function(t){console.log(t)})},showDeleteButton:function(t){clearInterval(this.Loop);var e=this;this.Loop=Object(k.setTimeout)(function(){e.picList.list.splice(t,1),e.picList.arr.splice(t,1),e.$vux.alert.show({title:"删除成功"})},1e3)},clearLoop:function(){clearInterval(this.Loop)},atBig:function(t){},getList:function(){var t=this;r.a.get("pscoredetail/queryById",{params:{id:this.$route.params.moduleid}}).then(function(e){t.listSingle=e.data}).catch(function(t){console.log("fail"+t.data)})},getUser:function(){var t=this;r.a.get("ppartymember/queryByUserId",{params:{userid:this.user.userid}}).then(function(e){t.userName=e.data.name}).catch(function(t){console.log(t)})},openPicker:function(){this.$refs.picker.open()},submit:function(){var t=this,e=this.startTime.replace(new RegExp("-","gm"),"/");new Date(e).getTime();return e?this.activeContent?this.picList.arr.length?void r()({url:"pscoreparty/scoreCustom",method:"post",params:{detailId:this.list1Selected.moduleId,userId:this.$route.params.userId,adderId:this.user.userid,score:5,imgs:this.picList.arr.join(),remark:this.activeContent,addTimes:new Date(this.startTime.replace(/-/gi,"/")).getTime()}}).then(function(e){console.log(e),e.success?t.$vux.alert.show({title:"增加成功",onHide:function(){Object(k.setTimeout)(function(){return history.back()},1e3)}}):t.$vux.alert.show({title:e.msg})}).catch(function(e){e.success&&(t.$vux.alert.show({title:"增加失败"}),Object(k.setTimeout)(function(){t.$vux.alert.hide()},1e3))}):this.$vux.toast.show({text:"请上传图片",type:"text"}):this.$vux.toast.show({text:"请填写内容",type:"text"}):this.$vux.toast.show({text:"请设置时间",type:"text"})},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},changeStart:function(t){this.startTime=t},changeEnd:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,i=e.getMonth()+1,a=e.getDate();i<10&&(i="0"+i),a<10&&(a="0"+a),this.value7=e.getFullYear()+"-"+i+"-"+a,console.log("set today ok")},chooseImage:function(t){var e=this;x.a.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var a=i.localIds||[];new o.a(function(t){var e=[];a.length?function i(n){return x.a.uploadImage({localId:n,isShowProgressTips:1,success:function(n){e.push(n.serverId),a.length?i(a.shift()):t(e)}})}(a.shift()):t(e)}).then(function(i){var a=[];i.map(function(t){return a.push(e.$http.get("picture/upload",{params:{mediaId:t}}))}),o.a.all(a).then(function(e){var i=[];e.map(function(t){return i.push(t.data)}),t.list.push("http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+i.join()),t.arr.push(i.join())})})}})}},mounted:function(){var t=this;C.a.init(["chooseImage","uploadImage"]),this.list1Selected=this.list1.find(function(e){return e.moduleId==t.$route.params.moduleid}),this.getUser1()},computed:n()({},Object(c.c)(["user"]))}),S=i("18Nq");var M=function(t){i("cVX/"),i("v1JJ")},D=Object(S.a)(Y,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body disabled-tabbar"},[i("x-header",[t._v("思想汇报评分"),i("a",{attrs:{slot:"right"},on:{click:t.showMenu},slot:"right"},[t._v("评分说明")])]),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",[t._v("党员姓名：\n                "),i("span",{staticStyle:{color:"#999999"}},[t._v(t._s(t.name1))])])])],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",[t._v("时间:")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],attrs:{type:"text",readonly:""},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.changeStart},model:{value:t.hourListValue,callback:function(e){t.hourListValue=e},expression:"hourListValue"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",[t._v("汇报类型：\n                "),i("span",{staticStyle:{color:"#999999"}},[t._v(t._s(t.list1Selected.text))])])])],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",{staticClass:"colorSet"},[t._v("党员思想汇报主要内容：")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeContent,expression:"activeContent"}],attrs:{cols:"30",rows:"10",maxlength:"300"},domProps:{value:t.activeContent},on:{input:function(e){e.target.composing||(t.activeContent=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",[t._v("思想汇报图片：\n                "),i("span",{staticStyle:{color:"#999999"}},[t._v("最多可传3张")])])]),t._v(" "),i("div",{staticClass:"photo-list cl"},[i("ul",[t._l(t.picList.list,function(e,a){return i("li",{key:a},[i("div",{staticClass:"preview"},[i("img",{key:a,staticStyle:{float:"left",width:"100%"},attrs:{width:"100",src:e},on:{touchend:t.clearLoop,touchstart:function(e){t.showDeleteButton(a)}}})])])}),t._v(" "),i("li",[i("div",{staticClass:"preview addUpload",on:{click:function(e){t.chooseImage(t.picList)}}},[i("span",{staticClass:"add-bg"})])])],2)])],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"}),t._v(" "),i("x-button",{staticStyle:{},attrs:{type:"warn"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n            提交支部书记审核\n        ")])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{attrs:{position:"left",width:"100%"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[i("div",{staticClass:"middle"},[i("div",{staticClass:"middle-top"},[t._v("评分说明")]),t._v(" "),i("div",{staticClass:"middle-content"},[i("p",[t._v("\n                        1、党员每上半年口头向支部书记汇报一次，经支部书记审核通过后加5分； 2、党员每下半年书面向支部汇报一次，经支部书记审核通过后加5分。\n                    ")])]),t._v(" "),i("div",{staticClass:"knowBtn",on:{click:t.know}},[t._v("我知道了")])])])],1)],1)},[],!1,M,"data-v-f31b81e0",null);e.default=D.exports},"cVX/":function(t,e){},v1JJ:function(t,e){}});
//# sourceMappingURL=9.aafd074e3738bef9b79e.js.map