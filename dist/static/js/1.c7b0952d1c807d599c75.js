webpackJsonp([1],{D4YL:function(t,e){},aiKK:function(t,e){},ljAl:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("//Fk"),n=i.n(o),s=i("Dd8w"),a=i.n(s),r=i("NYxO"),u=i("mtWM"),c=i.n(u),l=i("HD9R"),h=i("ABCa"),d=i("1HIy"),p=i("YxJB"),m=i("63CM"),f=i("mzja"),v=i("3Lt7"),g=i("2sLL"),w=i("oVYx"),x=i("UNGY"),T=i("rHil"),y=i("taJy"),b=i("2FOq"),Y=i("fxnj"),D=i.n(Y),$=i("zlMP"),_="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId=",I=(m.a,h.a,d.a,p.a,v.a,g.a,w.a,x.a,T.a,y.a,f.a,b.a,l.a,a()({know:function(){this.showPop=!1},showMenu:function(){this.showPop=!0},showDeleteButton:function(t){clearInterval(this.Loop);var e=this;this.Loop=setTimeout(function(){e.picList.list.splice(t,1),e.picList.arr.splice(t,1),e.$vux.alert.show({title:"删除成功"})},1e3)},clearLoop:function(){clearInterval(this.Loop)},atBig:function(t){},getList:function(){var t=this;c.a.get("pscoredetail/queryById",{params:{id:this.$route.params.moduleId}}).then(function(e){t.listSingle=e.data}).catch(function(t){console.log("fail"+t.data)})},getUser:function(){var t=this;c.a.get("ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userName=e.data.name}).catch(function(t){console.log(t)})},openPicker:function(){this.$refs.picker.open()},submit:function(){var t=this;if(!this.startTime)return this.$vux.toast.show({text:"填写开始时间",type:"text"});if(!this.endTime)return this.$vux.toast.show({text:"填写结束时间",type:"text"});if(!this.activeContent)return this.$vux.toast.show({text:"填写内容",type:"text"});if(!this.picList.arr.length)return this.$vux.toast.show({text:"请上传图片",type:"text"});var e=this.startTime.replace(new RegExp("-","gm"),"/"),i=new Date(e).getTime(),o=this.endTime.replace(new RegExp("-","gm"),"/");i<new Date(o).getTime()?c()({url:"pstudy/reSubmit",method:"post",headers:{contentType:"application/json"},params:{departmentid:this.$store.getters.user.departmentid,createUserid:this.$store.getters.user.userid,roleid:this.$store.getters.user.roleid,starttime:new Date(this.startTime.replace(/-/gi,"/")).getTime(),endtime:new Date(this.endTime.replace(/-/gi,"/")).getTime(),projectid:this.$route.params.projectId,moduleid:this.$route.params.moduleId,content:this.activeContent,picids:this.picList.arr.join(),studyid:this.info.studyid}}).then(function(e){if(e.success){var i=t;t.$vux.alert.show({title:"增加成功",onHide:function(){i.$router.push({path:"/points"})}})}else t.$vux.alert.show({title:e.msg})}).catch(function(e){e.success&&(t.$vux.alert.show({title:"增加失败"}),setTimeout(function(){t.$vux.alert.hide()},1e3))}):this.$vux.alert.show({title:"开始日期不能大于结束日期"})},moreInfo:function(t){if(console.log(t),this.darkbgShow=!0,this.infoList=t,console.log(this.infoList),t);else this.imgpics=[];setTimeout(function(){var t=new XScroll({renderTo:"#showBox",preventDefault:!1,preventTouchMove:!1,touchAction:"pan-y"});t.on("panstart",function(t){console.log(t)}),t.on("panend",function(e){t._resetLockConfig()}),t.render()},1e3)},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},changeStart:function(t){this.startTime=t},changeEnd:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,i=e.getMonth()+1,o=e.getDate();i<10&&(i="0"+i),o<10&&(o="0"+o),this.value7=e.getFullYear()+"-"+i+"-"+o,console.log("set today ok")},chooseImage:function(t){var e=this;D.a.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var o=i.localIds||[];new n.a(function(t){var e=[];o.length?function i(n){return D.a.uploadImage({localId:n,isShowProgressTips:1,success:function(n){e.push(n.serverId),o.length?i(o.shift()):t(e)}})}(o.shift()):t(e)}).then(function(i){var o=[];i.forEach(function(t){return o.push(e.$http.get("picture/upload",{params:{mediaId:t}}))}),n.a.all(o).then(function(e){var i=e.map(function(t){return t.data});t.list.push(_+i.join()),t.arr.push(i.join())})})}})}},Object(r.b)(["setInfo"])),a()({},Object(r.c)(["info"])),"http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="),L={directives:{TransferDom:m.a},components:{XHeader:h.a,GroupTitle:d.a,Flexbox:p.a,FlexboxItem:v.a,XButton:g.a,DatetimePlugin:w.a,Datetime:x.a,Group:T.a,Picker:y.a,Alert:f.a,Previewer:b.a,Popup:l.a},data:function(){return{value1:"",startTime:"",endTime:"",hourListValue:"",hot:"",ListValue:"",activeContent:"",listSingle:{},userName:"",showPop:!1,picList:{list:[],arr:[]},moduleid:this.$route.params.moduleId}},methods:a()({know:function(){this.showPop=!1},showMenu:function(){this.showPop=!0},showDeleteButton:function(t){clearInterval(this.Loop);var e=this;this.Loop=setTimeout(function(){e.picList.list.splice(t,1),e.picList.arr.splice(t,1),e.$vux.alert.show({title:"删除成功"})},1e3)},clearLoop:function(){clearInterval(this.Loop)},atBig:function(t){},getList:function(){var t=this;c.a.get("pscoredetail/queryById",{params:{id:this.$route.params.moduleId}}).then(function(e){t.listSingle=e.data}).catch(function(t){console.log("fail"+t.data)})},getUser:function(){var t=this;c.a.get("ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userName=e.data.name}).catch(function(t){console.log(t)})},openPicker:function(){this.$refs.picker.open()},submit:function(){var t=this;if(!this.startTime)return this.$vux.toast.show({text:"填写开始时间",type:"text"});if(!this.endTime)return this.$vux.toast.show({text:"填写结束时间",type:"text"});if(!this.activeContent)return this.$vux.toast.show({text:"填写内容",type:"text"});if(!this.picList.arr.length)return this.$vux.toast.show({text:"请上传图片",type:"text"});var e=this.startTime.replace(new RegExp("-","gm"),"/"),i=new Date(e).getTime(),o=this.endTime.replace(new RegExp("-","gm"),"/");i<new Date(o).getTime()?c()({url:"pstudy/reSubmit",method:"post",headers:{contentType:"application/json"},params:{departmentid:this.$store.getters.user.departmentid,createUserid:this.$store.getters.user.userid,roleid:this.$store.getters.user.roleid,starttime:new Date(this.startTime.replace(/-/gi,"/")).getTime(),endtime:new Date(this.endTime.replace(/-/gi,"/")).getTime(),projectid:this.$route.params.projectId,moduleid:this.$route.params.moduleId,content:this.activeContent,picids:this.picList.arr.join(),studyid:this.info.studyid}}).then(function(e){if(e.success){var i=t;t.$vux.alert.show({title:"增加成功",onHide:function(){i.$router.push({path:"/points"})}})}else t.$vux.alert.show({title:e.msg})}).catch(function(e){e.success&&(t.$vux.alert.show({title:"增加失败"}),setTimeout(function(){t.$vux.alert.hide()},1e3))}):this.$vux.alert.show({title:"开始日期不能大于结束日期"})},moreInfo:function(t){if(console.log(t),this.darkbgShow=!0,this.infoList=t,console.log(this.infoList),t);else this.imgpics=[];setTimeout(function(){var t=new XScroll({renderTo:"#showBox",preventDefault:!1,preventTouchMove:!1,touchAction:"pan-y"});t.on("panstart",function(t){console.log(t)}),t.on("panend",function(e){t._resetLockConfig()}),t.render()},1e3)},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},changeStart:function(t){this.startTime=t},changeEnd:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,i=e.getMonth()+1,o=e.getDate();i<10&&(i="0"+i),o<10&&(o="0"+o),this.value7=e.getFullYear()+"-"+i+"-"+o,console.log("set today ok")},chooseImage:function(t){var e=this;D.a.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var o=i.localIds||[];new n.a(function(t){var e=[];o.length?function i(n){return D.a.uploadImage({localId:n,isShowProgressTips:1,success:function(n){e.push(n.serverId),o.length?i(o.shift()):t(e)}})}(o.shift()):t(e)}).then(function(i){var o=[];i.forEach(function(t){return o.push(e.$http.get("picture/upload",{params:{mediaId:t}}))}),n.a.all(o).then(function(e){var i=e.map(function(t){return t.data});t.list.push(I+i.join()),t.arr.push(i.join())})})}})}},Object(r.b)(["setInfo"])),computed:a()({},Object(r.c)(["info"])),mounted:function(){function t(t){var e=new Date(t),i=e.getFullYear(),o=e.getMonth()+1;o<10&&(o="0"+o);var n=e.getDate();n<10&&(n="0"+n);var s=e.getHours();s<10&&(s="0"+s);var a=e.getMinutes();a<10&&(a="0"+a);e.getSeconds();return i+"-"+o+"-"+n+"  "+s+":"+a}if($.a.init(["chooseImage","uploadImage"]),this.getActivity(),this.getList(),this.getUser(),this.info.studyid){this.startTime=t(this.info.starttime),this.endTime=t(this.info.endtime),this.activeContent=this.info.content;var e=this.info.pictures;e.length&&(this.picList.list=e.map(function(t){return""+I+t.pictureId}),this.picList.arr=e.map(function(t){return t.pictureId}))}},beforeDestroy:function(){this.setInfo({})}},C=i("XyMi");var M=function(t){i("aiKK"),i("D4YL")},k=Object(C.a)(L,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body disabled-tabbar"},[i("x-header",[t._v(t._s(t.listSingle.projectName)),i("a",{attrs:{slot:"right"},on:{click:t.showMenu},slot:"right"},[t._v("评分说明")])]),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("党员姓名："),i("span",{staticStyle:{color:"#999999"}},[t._v(t._s(t.userName))])])])],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("开始时间")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],attrs:{type:"text",readonly:""},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.changeStart},model:{value:t.hourListValue,callback:function(e){t.hourListValue=e},expression:"hourListValue"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("结束时间")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.endTime,expression:"endTime"}],attrs:{type:"text",readonly:""},domProps:{value:t.endTime},on:{input:function(e){e.target.composing||(t.endTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.changeEnd},model:{value:t.ListValue,callback:function(e){t.ListValue=e},expression:"ListValue"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",{staticClass:"colorSet"},[t._v("主要内容")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeContent,expression:"activeContent"}],attrs:{cols:"30",rows:"10",maxlength:"300"},domProps:{value:t.activeContent},on:{input:function(e){e.target.composing||(t.activeContent=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"addPic"},[t._v("添加照片")]),t._v(" "),i("div",{staticClass:"photo-list cl"},[i("ul",[t._l(t.picList.list,function(t,e){return i("li",{key:e},[i("div",{staticClass:"preview"},[i("img",{staticClass:"previewer-demo-img",attrs:{src:t}})])])}),t._v(" "),i("li",[i("div",{staticClass:"preview addUpload",on:{click:function(e){t.chooseImage(t.picList)}}},[i("span",{staticClass:"add-bg"})])])],2)])]),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"}),t._v(" "),i("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n            提交支部书记审核\n        ")])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{attrs:{position:"left",width:"100%"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[i("div",{staticClass:"middle"},[i("div",{staticClass:"middle-top"},[t._v("评分说明")]),t._v(" "),i("div",{staticClass:"middle-content"},["2"===t.moduleid?i("p",[t._v("\n                        党员自学或参加其他党组织组织的学习教育活动，经所属党支部书记确认后，每参加一次加2.5分（共5分）。\n                    ")]):"4"===t.moduleid?i("p",[t._v("\n                        党员在金领驿站参加政治活动，或“双报到”参加居民区党组织组织的党日活动，经所属党支部书记确认后，每次加2分（共10分）。\n                    ")]):"11"===t.moduleid?i("p",[t._v("\n                        党员积极参加公益活动，每次加3分(最高不超过20分)。\n                    ")]):"8"===t.moduleid?i("p",[t._v("\n                        党员积极参加公益活动，每次加3分(最高不超过20分)。\n                    ")]):t._e()]),t._v(" "),i("div",{staticClass:"knowBtn",on:{click:t.know}},[t._v("我知道了")])])])],1)],1)},[],!1,M,"data-v-85fd494a",null);e.default=k.exports}});
//# sourceMappingURL=1.c7b0952d1c807d599c75.js.map