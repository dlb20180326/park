webpackJsonp([7],{"1UPx":function(t,e,a){t.exports=a.p+"static/img/icon-head.303d926.png"},"2TJQ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("ABCa"),n=a("YxJB"),s=a("3Lt7"),r=a("piuB"),o=(r.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,{name:"tab",mixins:[r.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,a=0;window.requestAnimationFrame(function i(){var n=t.$refs.nav;n.scrollLeft+=(e.offsetLeft-(n.offsetWidth-e.offsetWidth)/2-n.scrollLeft)/15,++a<15&&window.requestAnimationFrame(i)})}}}}),l=a("XyMi");var c=function(t){a("LnN6")},d=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vux-tab-warp"},[a("div",{staticClass:"vux-tab-container"},[a("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?a("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?a("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},[],!1,c,null,null).exports,u=(r.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[r.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),h=Object(l.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?a("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},[],!1,null,null,null).exports,v=a("f6Hi"),b=(v.a,Number,Boolean,{name:"x-progress",mixins:[v.a],props:{percent:{type:Number,default:0},showCancel:{type:Boolean,default:!0}},methods:{cancel:function(){this.$emit("on-cancel")}}});var f=function(t){a("sA5x")},p=Object(l.a)(b,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-progress"},[e("div",{staticClass:"weui-progress__bar"},[e("div",{staticClass:"weui-progress__inner-bar",style:{width:this.percent+"%"}})]),this._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:this.showCancel,expression:"showCancel"}],staticClass:"weui-progress_opr",attrs:{href:"javascript:;"}},[e("i",{staticClass:"weui-icon-cancel",on:{click:this.cancel}})])])},[],!1,f,null,null).exports,g=a("2sLL"),m=a("mtWM"),x=a.n(m),_=(i.a,n.a,s.a,g.a,{components:{XHeader:i.a,Flexbox:n.a,FlexboxItem:s.a,Tab:d,TabItem:h,XProgress:p,XButton:g.a},data:function(){return{tabIndex:0,percent:0,collect:[],years:(new Date).getFullYear(),proTotal:[],projectList:{},getList:[],rate:[],itegral:"",results:""}},methods:{progress:function(){var t=this;x.a.get("/dangjian/pscoreparty/getProjectScoreByUserId",{params:{userId:this.$store.getters.user.userId,year:this.years}}).then(function(e){t.proTotal=e.data,console.log(t.proTotal)}).catch(function(t){console.log("fail"+t)})},project:function(){var t=this;x.a.get("/dangjian/pscoredetail/queryByRoleMenu",{params:{roleid:4}}).then(function(e){for(var a=e.data,i={},n=0;n<a.length;n++)i[a[n].projectId]=a[n];t.projectList=i,console.log(t.projectList)}).catch(function(t){console.log("fail"+t)})},getDetail:function(){var t=this;x.a.get("/dangjian/pscoreparty/queryByUserId",{params:{userid:this.$store.getters.user.userid,year:this.years}}).then(function(e){t.getList=e.data,console.log(t.getList)}).catch(function(t){console.log("fail"+t)})},rating:function(){var t=this,e=this;e.score(),x.a.get("/dangjian/pscorelevel/getList").then(function(a){for(var i in t.rate=a.data,t.rate)e.itegral>=t.rate[i].min&&e.itegral<=t.rate[i].max&&(t.results=t.rate[i].level)}).catch(function(t){console.log("fail"+t)})},score:function(){var t=this;x.a.get("/dangjian/pscoreparty/getSumScoreByUserId",{params:{userId:this.$store.getters.user.userid,year:(new Date).getFullYear()}}).then(function(e){t.itegral=e.data}).catch(function(t){console.log("fail"+t)})},dataPickers:function(t){var e=new Date(t).toLocaleString();return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日 "},e}},mounted:function(){this.progress(),this.project(),this.getDetail(),this.rating()}});var C=function(t){a("5jNj"),a("EOj4")},y=Object(l.a)(_,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body"},[i("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n            党员积分\n        ")]),t._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"head"},[i("flexbox",[i("flexbox-item",{staticClass:"avatar"},[i("img",{attrs:{src:a("1UPx")}})]),t._v(" "),i("flexbox-item",[i("div",{staticClass:"label"},[t._v("积分周期：")]),t._v(" "),i("div",[t._v("2018年1月1日 - 12月31日")])])],1),t._v(" "),i("flexbox",{attrs:{gutter:15}},[i("flexbox-item",[i("div",{staticClass:"piece"},[i("div",[t._v("现党员积分")]),t._v(" "),i("span",[t._v(t._s(t.itegral))])])]),t._v(" "),i("flexbox-item",[i("div",{staticClass:"piece"},[i("div",[t._v("年度党员评级")]),t._v(" "),i("span",[t._v(t._s(t.results))])])])],1)],1),t._v(" "),i("div",{staticClass:"body"},[i("tab",{attrs:{"line-width":5,"active-color":"#666","bar-active-color":"#a0333b","custom-bar-width":"1rem"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[i("tab-item",[i("b",[t._v("积分进度")])]),t._v(" "),i("tab-item",[i("b",[t._v("获取明细")])])],1),t._v(" "),i("transition",{attrs:{name:"fade"}},[0===t.tabIndex?i("div",{staticClass:"tab-content"},t._l(t.proTotal,function(e,a){return i("div",{staticClass:"item-detail"},[i("div",{staticClass:"title"},[i("b",[t._v(t._s(a+1)+". "+t._s(e.projectName))]),t._v(" "),i("div",{staticClass:"space"}),t._v(" "),i("span",{staticClass:"number"},[t._v(t._s(e.totalScore))]),t._v("/"+t._s(e.score)+"\n\t                            ")]),t._v(" "),i("div",{staticClass:"content"},[i("x-progress",{attrs:{percent:e.totalScore/e.score*100,"show-cancel":!1}})],1),t._v(" "),"交纳党费"==e.projectName?i("router-link",{attrs:{to:{name:"Dues"}}},[i("div",{staticClass:"content"},[t.projectList[e.id]?i("x-button",{attrs:{mini:"",type:"warn"}},[t._v("\n\t                                    点击+积分\n\t                                ")]):t._e()],1)]):i("router-link",{attrs:{to:{name:""}}},[i("div",{staticClass:"content"},[t.projectList[e.id]?i("x-button",{attrs:{mini:"",type:"warn"}},[t._v("\n\t\t                                    点击+积分\n\t\t                                ")]):t._e()],1)])],1)})):t._e(),t._v(" "),1===t.tabIndex?i("div",{staticClass:"tab-content"},t._l(t.getList,function(e,a){return i("div",{key:a,staticClass:"item-detail"},[i("flexbox",[i("flexbox-item",{staticClass:"label"},[t._v("\n                                    获取时间：\n                                ")]),t._v(" "),i("flexbox-item",[t._v("\n                                   "+t._s(t.dataPickers(e.scoreTime))+"\n                                ")])],1),t._v(" "),i("flexbox",[i("flexbox-item",{staticClass:"label"},[t._v("\n                                    积分类型：\n                                ")]),t._v(" "),i("flexbox-item",[t._v("\n                                   "+t._s(e.detailTitle)+"\n                                ")])],1),t._v(" "),i("flexbox",[i("flexbox-item",{staticClass:"label"},[t._v("\n                                    审核人：\n                                ")]),t._v(" "),i("flexbox-item",[t._v("\n                                    "+t._s(e.approvedName)+"\n                                ")])],1),t._v(" "),i("flexbox",[i("flexbox-item",{staticClass:"label"},[t._v("\n                                    积分变动：\n                                ")]),t._v(" "),i("flexbox-item",[i("span",{staticClass:"number",class:[e.score>=0?"colored":"colorGreen"]},[t._v(t._s(e.score))])])],1)],1)})):t._e()])],1)])],1)},[],!1,C,"data-v-3995611a",null);e.default=y.exports},"5jNj":function(t,e){},EOj4:function(t,e){},LnN6:function(t,e){},f6Hi:function(t,e,a){"use strict";var i=a("OFgA");e.a={mixins:[i.a],props:{required:{type:Boolean,default:!1}},created:function(){this.handleChangeEvent=!1},computed:{dirty:{get:function(){return!this.pristine},set:function(t){this.pristine=!t}},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){!0===this.pristine&&(this.pristine=!1),this.handleChangeEvent||(this.$emit("on-change",t),this.$emit("input",t))}},data:function(){return{errors:{},pristine:!0,touched:!1}}}},sA5x:function(t,e){}});
//# sourceMappingURL=7.0f720b47c8bc76bf86f4.js.map