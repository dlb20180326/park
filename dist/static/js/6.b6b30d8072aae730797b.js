webpackJsonp([6],{BLg1:function(t,e){},CzJC:function(t,e){},IgtN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("rVsN"),o=i.n(a),n=i("aA9S"),s=i.n(n),l=i("6sKG"),r=i.n(l),c=i("nxAZ"),u=i("Ylcv"),p=i("fJ2I"),v=i("ZCI5"),h=i("mmca"),d=i("d5Kw"),m=i("r1uy"),g=i("u28h"),f=i("z5TY"),x=i("Nk/b"),b=i("jnZd"),w=i("YP5q"),y=i("+62G"),_=i("P6uy"),C=i.n(_),k=i("zlMP"),P=(y.a,c.a,u.a,p.a,h.a,d.a,m.a,g.a,f.a,x.a,v.a,w.a,b.a,{directives:{TransferDom:y.a},components:{XHeader:c.a,GroupTitle:u.a,Flexbox:p.a,FlexboxItem:h.a,XButton:d.a,DatetimePlugin:m.a,Datetime:g.a,Group:f.a,Picker:x.a,Alert:v.a,XDialog:w.a,PopupPicker:b.a},data:function(){return{value1:"",startTime:"",endTime:"",hourListValue:"",hot:"",activeType:"",activityName:"",activePace:"",activeTitle:"",activeCreatePeople:this.$store.getters.user.userid,activePrincipalPeople:"",activeContext:"",activeContent:"",activeStatus:0,activeProjectActive:"",PickerVisible1:!1,pickerValue1:"请选择活动类型",years:"",year1:[""],list:[],pickerValue:[],PickerVisible2:!1,departmentid:this.$store.getters.user.departmentid,showQrcodeDialog:!1,Qrcode:"",picList:{list:[],arr:[]}}},methods:{backRoute:function(){setTimeout(function(){return history.back()},500)},openPicker:function(){this.$refs.picker.open()},handleConfirm:function(t){this.startTime=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()},handlePicker:function(){var t=this;r()({method:"get",url:"pscoredetail/queryByJoinList"}).then(function(e){t.PickerVisible2=!0,t.list=e.data.map(function(t){return s()({},t,{title:t.title.substring(0,4)})})}).catch(function(t){})},onValuesChange:function(t,e){this.pickerValue1=e[0],this.PickerVisible1=!1},submit:function(){var t=this;if(!this.startTime)return this.$vux.toast.show({text:"填写开始时间",type:"text"});if(!this.endTime)return this.$vux.toast.show({text:"填写结束时间",type:"text"});if(!this.pickerValue)return this.$vux.toast.show({text:"选择活动类型",type:"text"});if(!this.activePace)return this.$vux.toast.show({text:"填写活动地点",type:"text"});if(!this.activePrincipalPeople)return this.$vux.toast.show({text:"填写负责人",type:"text"});if(!this.activeContext)return this.$vux.toast.show({text:"填写活动内容",type:"text"});var e=this.startTime.replace(new RegExp("-","gm"),"/"),i=new Date(e).getTime(),a=this.endTime.replace(new RegExp("-","gm"),"/"),o=new Date(a).getTime();i<o?r()({method:"post",url:"active/create",params:{startTime:i,endTime:o,activeType:this.pickerValue[0],activityProjectId:this.pickerValue[0],activePace:this.activePace,activeCreatePeople:this.$store.getters.user.userid,activePrincipalPeople:this.activePrincipalPeople,activeContext:this.activeContext,activeName:this.activeTitle,activeStatus:1,departmentid:this.departmentid,picids:this.picList.arr.join()}}).then(function(e){t.$vux.toast.show({text:"增加成功",type:"text"}),t.showQR(e.data)}).catch(function(t){console.log(t)}):this.$vux.toast.show({text:"开始日期不能大于结束日期",type:"text"})},showQR:function(t){t&&(document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0)},submit1:function(t){},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},change:function(t){this.startTime=t},change1:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,i=e.getMonth()+1,a=e.getDate();i<10&&(i="0"+i),a<10&&(a="0"+a),this.value7=e.getFullYear()+"-"+i+"-"+a,console.log("set today ok")},backhome:function(){console.log("---"),this.$router.push({path:"/"})},chooseImage:function(t){var e=this;C.a.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var a=i.localIds||[];new o.a(function(t){var e=[];a.length?function i(o){return C.a.uploadImage({localId:o,isShowProgressTips:1,success:function(o){e.push(o.serverId),a.length?i(a.shift()):t(e)}})}(a.shift()):t(e)}).then(function(i){var a=[];i.map(function(t){return a.push(e.$http.get("picture/upload",{params:{mediaId:t}}))}),o.a.all(a).then(function(e){var i=[];e.map(function(t){return i.push(t.data)}),t.list.push("http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+i.join()),t.arr.push(i.join())})})}})}},computed:{pickerList:function(){return this.list.map(function(t){return{name:t.title,value:""+t.id}})},activityType:function(){var t=this.pickerValue[0];return t&&this.pickerList.length?this.pickerList.find(function(e){return e.value===t}).name:""}},mounted:function(){k.a.init(["chooseImage","uploadImage"]),this.getActivity()}}),T=i("18Nq");var V=function(t){i("o0pJ"),i("gllu"),i("CzJC")},S=Object(T.a)(P,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body disabled-tabbar"},[i("x-header",{attrs:{title:"发起活动"},on:{"on-click-back":function(e){t.backhome()}}}),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动开始时间")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.change},model:{value:t.hourListValue,callback:function(e){t.hourListValue=e},expression:"hourListValue"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动结束时间")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.endTime,expression:"endTime"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.endTime},on:{input:function(e){e.target.composing||(t.endTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.change1},model:{value:t.hot,callback:function(e){t.hot=e},expression:"hot"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动类型")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{attrs:{type:"text",readonly:"readonly"},domProps:{value:t.activityType}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon"},[i("x-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(e){t.handlePicker()}}},[i("i",{staticClass:"iconfont dlb-icon-category"})]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.PickerVisible2,expression:"PickerVisible2"}],staticClass:"picker-box",on:{click:function(e){t.PickerVisible2=!1}}},[i("picker",{directives:[{name:"show",rawName:"v-show",value:t.PickerVisible2,expression:"PickerVisible2"}],attrs:{data:t.pickerList,"column-width":[],"fixed-columns":1,columns:1},on:{"on-change":function(e){t.submit1()}},model:{value:t.pickerValue,callback:function(e){t.pickerValue=e},expression:"pickerValue"}},[t._v("·\n                        ")])],1)])],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动名称")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activeTitle,expression:"activeTitle"}],attrs:{type:"text"},domProps:{value:t.activeTitle},on:{input:function(e){e.target.composing||(t.activeTitle=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动地点")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activePace,expression:"activePace"}],attrs:{type:"text"},domProps:{value:t.activePace},on:{input:function(e){e.target.composing||(t.activePace=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动负责人")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activePrincipalPeople,expression:"activePrincipalPeople"}],attrs:{type:"text"},domProps:{value:t.activePrincipalPeople},on:{input:function(e){e.target.composing||(t.activePrincipalPeople=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动内容")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeContext,expression:"activeContext"}],attrs:{cols:"30",rows:"10",maxlength:"300"},domProps:{value:t.activeContext},on:{input:function(e){e.target.composing||(t.activeContext=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("添加海报")])]),t._v(" "),i("div",{staticClass:"photo-list cl"},[i("ul",{staticStyle:{"margin-top":"-.1rem"}},[t._l(t.picList.list,function(e,a){return i("li",[i("div",{staticClass:"preview"},[i("img",{key:a,staticStyle:{float:"left",width:"100%",height:"100%"},attrs:{width:"100",src:e},on:{touchend:t.clearLoop,touchstart:function(e){t.showDeleteButton(a)}}})])])}),t._v(" "),i("li",[i("div",{staticClass:"preview addUpload",on:{click:function(e){t.chooseImage(t.picList)}}},[i("span",{staticClass:"add-bg"})])])],2)])],1),t._v(" "),i("div",{staticClass:"group-item",staticStyle:{"margin-bottom":"0.2rem"}},[i("group-title",{attrs:{slot:"title"},slot:"title"}),t._v(" "),i("x-button",{staticStyle:{height:"0.4rem !important"},attrs:{type:"warn"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n            生成活动二维码\n        ")])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[t.showQrcodeDialog?i("x-dialog",{attrs:{"hide-on-blur":!0,"dialog-style":{minHeight:"350px"}},on:{"on-hide":function(e){t.backRoute()}}},[i("div",{staticClass:"title"},[i("label",[t._v("活动名称:")]),t._v(" "),i("div",{staticClass:"activeTitle"},[t._v(t._s(t.activeTitle))])]),t._v(" "),i("div",{staticClass:"qrcode"},[i("img",{attrs:{id:"fei",alt:""}})])]):t._e()],1)],1)},[],!1,V,"data-v-8eea3a20",null);e.default=S.exports},gllu:function(t,e){},jnZd:function(t,e,i){"use strict";var a=i("3cXf"),o=i.n(a),n=i("Nk/b"),s=i("BGNQ"),l=i("7g+Q"),r=(String,String,String,Boolean,{name:"popup-header",props:{leftText:String,rightText:String,title:String,showBottomBorder:{type:Boolean,default:!0}}}),c=i("18Nq");var u=function(t){i("w2fM")},p=Object(c.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-popup-header",class:t.showBottomBorder?"vux-1px-b":""},[i("div",{staticClass:"vux-popup-header-left",on:{click:function(e){t.$emit("on-click-left")}}},[t._t("left-text",[t._v(t._s(t.leftText))])],2),t._v(" "),i("div",{staticClass:"vux-popup-header-title"},[t._t("title",[t._v(t._s(t.title))])],2),t._v(" "),i("div",{staticClass:"vux-popup-header-right",on:{click:function(e){t.$emit("on-click-right")}}},[t._t("right-text",[t._v(t._s(t.rightText))])],2)])},[],!1,u,null,null).exports,v=i("xZPP"),h=i("nKjL"),d=function(t){return 1===t.length?t[0]:t.join(" ")},m=i("uJtz"),g=i("3BYQ"),f=i("+62G"),x=function(t){return JSON.parse(o()(t))},b=(f.a,g.a,n.a,s.a,l.a,h.a,h.b,v.a,m.a,String,String,String,String,Array,String,Number,Number,Array,Boolean,String,Number,Array,Object,Boolean,Boolean,Boolean,Function,Boolean,Array,Object,String,Boolean,m.a,function(t){return JSON.parse(o()(t))}),w={name:"popup-picker",directives:{TransferDom:f.a},created:function(){void 0!==this.show&&(this.showValue=this.show)},mixins:[g.a],components:{Picker:n.a,Cell:s.a,Popup:l.a,PopupHeader:p,Flexbox:h.a,FlexboxItem:h.b,InlineDesc:v.a},filters:{array2string:d,value2name:m.a},props:{valueTextAlign:{type:String,default:"right"},title:String,cancelText:String,confirmText:String,data:{type:Array,default:function(){return[]}},placeholder:String,columns:{type:Number,default:0},fixedColumns:{type:Number,default:0},value:{type:Array,default:function(){return[]}},showName:Boolean,inlineDesc:[String,Number,Array,Object,Boolean],showCell:{type:Boolean,default:!0},show:Boolean,displayFormat:Function,isTransferDom:{type:Boolean,default:!0},columnWidth:Array,popupStyle:Object,popupTitle:String,disabled:Boolean},computed:{labelStyles:function(){return{display:"block",width:this.$parent.labelWidth||this.$parent.$parent.labelWidth||"auto",textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{value2name:m.a,getNameValues:function(){return Object(m.a)(this.currentValue,this.data)},onClick:function(){this.disabled||(this.showValue=!0)},onHide:function(t){this.showValue=!1,t&&(this.closeType=!0,this.currentValue=b(this.tempValue)),t||(this.closeType=!1,this.value.length>0&&(this.tempValue=b(this.currentValue)))},onPopupShow:function(){this.closeType=!1,this.$emit("on-show")},onPopupHide:function(t){this.value.length>0&&(this.tempValue=b(this.currentValue)),this.$emit("on-hide",this.closeType)},onPickerChange:function(t){if(o()(this.currentValue)!==o()(t)&&this.value.length){var e=o()(this.data);e!==this.currentData&&"[]"!==this.currentData&&(this.tempValue=b(t)),this.currentData=e}var i=b(t);this.$emit("on-shadow-change",i,Object(m.a)(i,this.data).split(" "))}},watch:{value:function(t){o()(t)!==o()(this.tempValue)&&(this.tempValue=b(t),this.currentValue=b(t))},currentValue:function(t){this.$emit("input",b(t)),this.$emit("on-change",b(t))},show:function(t){this.showValue=t},showValue:function(t){this.$emit("update:show",t)}},data:function(){return{onShowProcess:!1,tempValue:b(this.value),closeType:!1,currentData:o()(this.data),showValue:!1,currentValue:this.value}}};var y=function(t){i("BLg1")},_=Object(c.a)(w,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-cell-box"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCell,expression:"showCell"}],staticClass:"weui-cell vux-tap-active",class:{"weui-cell_access":!t.disabled},on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("title",[t.title?i("label",{staticClass:"weui-label",class:t.labelClass,style:t.labelStyles,domProps:{innerHTML:t._s(t.title)}}):t._e()],{labelClass:"weui-label",labelStyle:t.labelStyles,labelTitle:t.title}),t._v(" "),t.inlineDesc?i("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()],2),t._v(" "),i("div",{staticClass:"vux-cell-primary vux-popup-picker-select-box"},[i("div",{staticClass:"vux-popup-picker-select",style:{textAlign:t.valueTextAlign}},[t.displayFormat||t.showName||!t.value.length?t._e():i("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[t._v(t._s(t._f("array2string")(t.value)))]),t._v(" "),!t.displayFormat&&t.showName&&t.value.length?i("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[t._v(t._s(t._f("value2name")(t.value,t.data)))]):t._e(),t._v(" "),t.displayFormat&&t.value.length?i("span",{staticClass:"vux-popup-picker-value vux-cell-value"},[t._v(t._s(t.displayFormat(t.value,t.value2name(t.value,t.data))))]):t._e(),t._v(" "),!t.value.length&&t.placeholder?i("span",{staticClass:"vux-popup-picker-placeholder vux-cell-placeholder",domProps:{textContent:t._s(t.placeholder)}}):t._e()])]),t._v(" "),i("div",{staticClass:"weui-cell__ft"})]),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom",value:t.isTransferDom,expression:"isTransferDom"}]},[i("popup",{staticClass:"vux-popup-picker",attrs:{id:"vux-popup-picker-"+t.uuid,"popup-style":t.popupStyle},on:{"on-hide":t.onPopupHide,"on-show":t.onPopupShow},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"vux-popup-picker-container"},[i("popup-header",{attrs:{"left-text":t.cancelText||"取消","right-text":t.confirmText||"完成",title:t.popupTitle},on:{"on-click-left":function(e){t.onHide(!1)},"on-click-right":function(e){t.onHide(!0)}}}),t._v(" "),i("picker",{attrs:{data:t.data,columns:t.columns,"fixed-columns":t.fixedColumns,container:"#vux-popup-picker-"+t.uuid,"column-width":t.columnWidth},on:{"on-change":t.onPickerChange},model:{value:t.tempValue,callback:function(e){t.tempValue=e},expression:"tempValue"}})],1)])],1)])},[],!1,y,null,null);e.a=_.exports},o0pJ:function(t,e){},w2fM:function(t,e){}});
//# sourceMappingURL=6.b6b30d8072aae730797b.js.map