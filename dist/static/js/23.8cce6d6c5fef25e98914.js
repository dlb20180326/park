webpackJsonp([23],{HM9Y:function(t,e){},rv72:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("//Fk"),i=a.n(n),o=a("mvHQ"),s=a.n(o),r=a("mtWM"),l=a.n(r),c=a("5enu"),u=a("ABCa"),d=a("1HIy"),p=a("YxJB"),m=a("63CM"),h=a("mzja"),v=a("3Lt7"),g=a("2sLL"),f=a("oVYx"),C=a("UNGY"),w=a("rHil"),x=a("taJy"),_=a("2FOq"),y=a("fxnj"),b=a.n(y),Y=a("zlMP"),I=(m.a,u.a,d.a,p.a,v.a,g.a,f.a,C.a,w.a,x.a,h.a,_.a,c.a,{directives:{TransferDom:m.a},components:{XHeader:u.a,GroupTitle:d.a,Flexbox:p.a,FlexboxItem:v.a,XButton:g.a,DatetimePlugin:f.a,Datetime:C.a,Group:w.a,Picker:x.a,Alert:h.a,Previewer:_.a,"r-header":c.a},data:function(){return{value1:"",startTime:"",endTime:"",hourListValue:"",hot:"",ListValue:"",activeContent:"",listSingle:{},userName:"",picList:{list:[],arr:[]},userid:"",departmentid:"",name:"",departmentname:"",Content1:"",Content2:"",contents:{rights:"评分说明",title:"遵章守纪评分"}}},methods:{getUser1:function(){var t=this;l.a.get("ppartymember/queryByUserId",{params:{userid:this.$route.params.userId}}).then(function(e){t.userid=e.data.userid,t.departmentid=e.data.departmentid,t.name=e.data.name,t.departmentname=e.data.departmentname}).catch(function(t){console.log(t)})},submit:function(){var t=this;return this.Content1?this.Content2?0==this.picList.arr.length?this.$vux.toast.show({text:"请上传图片",type:"text"}):void l.a.get("pscoreparty/scoreClean",{params:{detailId:6,adderId:this.$store.getters.user.userid,userId:this.userid,imgs:this.picList.arr.join(),remark:s()({title:this.Content1,remark:this.Content2})}}).then(function(e){t.$vux.alert.show({title:e.msg,onHide:function(){setTimeout(function(){return history.back()},500)}})}).catch(function(t){console.log(t)}):this.$vux.toast.show({text:"填写原因描述",type:"text"}):this.$vux.toast.show({text:"填写扣分原因",type:"text"})},showDeleteButton:function(t){clearInterval(this.Loop);var e=this;this.Loop=setTimeout(function(){e.picList.list.splice(t,1),e.picList.arr.splice(t,1),e.$vux.alert.show({title:"删除成功"})},1e3)},clearLoop:function(){clearInterval(this.Loop)},atBig:function(t){},openPicker:function(){this.$refs.picker.open()},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},changeStart:function(t){this.startTime=t},changeEnd:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,a=e.getMonth()+1,n=e.getDate();a<10&&(a="0"+a),n<10&&(n="0"+n),this.value7=e.getFullYear()+"-"+a+"-"+n,console.log("set today ok")},chooseImage:function(t){var e=this;b.a.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var n=a.localIds||[];new i.a(function(t){var e=[];n.length?function a(i){return b.a.uploadImage({localId:i,isShowProgressTips:1,success:function(i){e.push(i.serverId),n.length?a(n.shift()):t(e)}})}(n.shift()):t(e)}).then(function(a){var n=[];a.map(function(t){return n.push(e.$http.get("picture/upload",{params:{mediaId:t}}))}),i.a.all(n).then(function(e){var a=[];e.map(function(t){return a.push(t.data)}),t.list.push("http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+a.join()),t.arr.push(a.join())})})}})}},mounted:function(){Y.a.init(["chooseImage","uploadImage"]),this.getUser1()}}),L=a("XyMi");var M=function(t){a("HM9Y"),a("uEQe")},D=Object(L.a)(I,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body disabled-tabbar"},[a("r-header",{attrs:{rfs:t.contents,"body-padding-top":".46rem"}}),t._v(" "),a("div",{staticClass:"group-item"},[a("group-title",{attrs:{slot:"title"},slot:"title"},[a("b",[t._v("党员姓名："),a("span",{staticStyle:{color:"#999999"}},[t._v(t._s(t.name))])])])],1),t._v(" "),a("div",{staticClass:"group-item"},[a("group-title",{attrs:{slot:"title"},slot:"title"},[a("b",[t._v("所属支部："),a("span",{staticStyle:{color:"#999999"}},[t._v(t._s(t.departmentname))])])])],1),t._v(" "),a("div",{staticClass:"group-item"},[a("group-title",{attrs:{slot:"title"},slot:"title"},[a("b",[t._v("扣分原因")])]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Content1,expression:"Content1"}],attrs:{cols:"30",rows:"10",maxlength:"300",placeholder:"请简单总结扣分原因"},domProps:{value:t.Content1},on:{input:function(e){e.target.composing||(t.Content1=e.target.value)}}})],1),t._v(" "),a("div",{staticClass:"group-item"},[a("group-title",{attrs:{slot:"title"},slot:"title"},[a("b",[t._v("原因描述")])]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Content2,expression:"Content2"}],attrs:{cols:"30",rows:"10",maxlength:"300",placeholder:"请详细描述扣分原因"},domProps:{value:t.Content2},on:{input:function(e){e.target.composing||(t.Content2=e.target.value)}}})],1),t._v(" "),a("div",{staticClass:"group-item"},[a("span",{staticClass:"addPic"},[t._v("添加凭证")]),t._v(" "),a("div",{staticClass:"photo-list cl"},[a("ul",[t._l(t.picList.list,function(e,n){return a("li",{key:n},[a("div",{staticClass:"preview"},[a("img",{key:n,staticStyle:{float:"left",width:"100%"},attrs:{width:"100",src:e},on:{touchend:t.clearLoop,touchstart:function(e){t.showDeleteButton(n)}}})])])}),t._v(" "),a("li",[a("div",{staticClass:"preview addUpload",on:{click:function(e){t.chooseImage(t.picList)}}},[a("span",{staticClass:"add-bg"})])])],2)])]),t._v(" "),a("div",{staticClass:"group-item"},[a("group-title",{attrs:{slot:"title"},slot:"title"}),t._v(" "),a("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n            点击确认扣分\n        ")])],1)],1)},[],!1,M,"data-v-0274f389",null);e.default=D.exports},uEQe:function(t,e){}});
//# sourceMappingURL=23.8cce6d6c5fef25e98914.js.map