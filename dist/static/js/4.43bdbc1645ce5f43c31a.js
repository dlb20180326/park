webpackJsonp([4],{"1UPx":function(t,e,i){t.exports=i.p+"static/img/icon-head.303d926.png"},"2TJQ":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("ABCa"),s=i("YxJB"),n=i("3Lt7"),r=i("odqc"),o=i("Znkm"),l=i("f6Hi"),c=(l.a,Number,Boolean,{name:"x-progress",mixins:[l.a],props:{percent:{type:Number,default:0},showCancel:{type:Boolean,default:!0}},methods:{cancel:function(){this.$emit("on-cancel")}}}),d=i("XyMi");var u=function(t){i("sA5x")},h=Object(d.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-progress"},[e("div",{staticClass:"weui-progress__bar"},[e("div",{staticClass:"weui-progress__inner-bar",style:{width:this.percent+"%"}})]),this._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:this.showCancel,expression:"showCancel"}],staticClass:"weui-progress_opr",attrs:{href:"javascript:;"}},[e("i",{staticClass:"weui-icon-cancel",on:{click:this.cancel}})])])},[],!1,u,null,null).exports,v=i("2sLL"),b=i("mtWM"),f=i.n(b),p=(a.a,s.a,n.a,r.a,o.a,v.a,{components:{XHeader:a.a,Flexbox:s.a,FlexboxItem:n.a,Tab:r.a,TabItem:o.a,XProgress:h,XButton:v.a},data:function(){return{tabIndex:0,percent:0,collect:[],years:(new Date).getFullYear(),proTotal:[],projectList:{},getList:[],rate:[],itegral:"",results:""}},methods:{progress:function(){var t=this;f.a.get("pscoreparty/getProjectScoreByUserId",{params:{userId:this.$store.getters.user.userId,year:this.years}}).then(function(e){t.proTotal=e.data}).catch(function(t){console.log("fail"+t)})},project:function(){var t=this;f.a.get("pscoredetail/queryByRoleMenu",{params:{roleid:4}}).then(function(e){for(var i=e.data,a={},s=0;s<i.length;s++)a[i[s].projectId]=i[s],t.projectId=a[i[s].projectId];t.projectList=a}).catch(function(t){console.log("fail"+t)})},getDetail:function(){var t=this;f.a.get("pscoreparty/queryByUserId",{params:{userid:this.$store.getters.user.userid,year:this.years}}).then(function(e){t.getList=e.data}).catch(function(t){console.log("fail"+t)})},rating:function(){var t=this,e=this;e.score(),f.a.get("pscorelevel/getList").then(function(i){for(var a in t.rate=i.data,t.rate)e.itegral>=t.rate[a].min&&e.itegral<=t.rate[a].max&&(t.results=t.rate[a].level)}).catch(function(t){console.log("fail"+t)})},score:function(){var t=this;f.a.get("pscoreparty/getSumScoreByUserId",{params:{userId:this.$store.getters.user.userid,year:(new Date).getFullYear()}}).then(function(e){t.itegral=e.data}).catch(function(t){console.log("fail"+t)})},dataPickers:function(t){var e=new Date(t).toLocaleString();return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日 "},e}},mounted:function(){this.progress(),this.project(),this.getDetail(),this.rating()}});var g=function(t){i("9lZW"),i("dZV6")},m=Object(d.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n            党员积分\n        ")]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"avatar"},[a("img",{attrs:{src:i("1UPx")}})]),t._v(" "),a("flexbox-item",[a("div",{staticClass:"label"},[t._v("积分周期：")]),t._v(" "),a("div",[t._v("2018年1月1日 - 12月31日")])])],1),t._v(" "),a("flexbox",{attrs:{gutter:15}},[a("flexbox-item",[a("div",{staticClass:"piece"},[a("div",[t._v("现党员积分")]),t._v(" "),a("span",[t._v(t._s(t.itegral))])])]),t._v(" "),a("flexbox-item",[a("div",{staticClass:"piece"},[a("div",[t._v("年度党员评级")]),t._v(" "),a("span",[t._v(t._s(t.results))])])])],1)],1),t._v(" "),a("div",{staticClass:"body"},[a("tab",{attrs:{"line-width":5,"active-color":"#666","bar-active-color":"#a0333b","custom-bar-width":"1rem"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("tab-item",[a("b",[t._v("积分进度")])]),t._v(" "),a("tab-item",[a("b",[t._v("获取明细")])])],1),t._v(" "),a("transition",{attrs:{name:"fade"}},[0===t.tabIndex?a("div",{staticClass:"tab-content"},t._l(t.proTotal,function(e,i){return a("div",{staticClass:"item-detail"},[a("div",{staticClass:"title"},[a("b",[t._v(t._s(i+1)+". "+t._s(e.projectName))]),t._v(" "),a("div",{staticClass:"space"}),t._v(" "),a("span",{staticClass:"number"},[t._v(t._s(e.totalScore))]),t._v("/"+t._s(e.score)+"\n\t                            ")]),t._v(" "),a("div",{staticClass:"content"},[a("x-progress",{attrs:{percent:e.totalScore/e.score*100,"show-cancel":!1}})],1),t._v(" "),7===e.id?a("router-link",{attrs:{to:{name:"Dues"}}},[a("div",{staticClass:"content"},[t.projectList[e.id]?a("x-button",{attrs:{mini:"",type:"warn"}},[t._v("\n\t                                    点击+积分\n\t                                ")]):t._e()],1)]):1===e.id||2===e.id||6===e.id?a("router-link",{attrs:{to:"points/addPoint/"+e.id+"/"+t.projectList[e.id].id}},[a("div",{staticClass:"content"},[t.projectList[e.id]?a("x-button",{attrs:{mini:"",type:"warn"}},[t._v("\n\t\t                                    点击+积分 模块ID"+t._s(t.projectList[e.id].id)+" 项目id"+t._s(e.id)+"\n\t\t                                ")]):t._e()],1)]):t._e()],1)})):t._e(),t._v(" "),1===t.tabIndex?a("div",{staticClass:"tab-content"},t._l(t.getList,function(e,i){return a("div",{key:i,staticClass:"item-detail"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                    获取时间：\n                                ")]),t._v(" "),a("flexbox-item",[t._v("\n                                   "+t._s(t.dataPickers(e.scoreTime))+"\n                                ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                    积分类型：\n                                ")]),t._v(" "),a("flexbox-item",[t._v("\n                                   "+t._s(e.detailTitle)+"\n                                ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                    审核人：\n                                ")]),t._v(" "),a("flexbox-item",[t._v("\n                                    "+t._s(e.approvedName)+"\n                                ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                    积分变动：\n                                ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number",class:[e.score>=0?"colored":"colorGreen"]},[t._v(t._s(e.score))])])],1)],1)})):t._e()])],1)])],1)},[],!1,g,"data-v-95618982",null);e.default=m.exports},"9lZW":function(t,e){},LnN6:function(t,e){},Znkm:function(t,e,i){"use strict";var a=i("piuB"),s=(a.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[a.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),n=i("XyMi"),r=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},[],!1,null,null,null);e.a=r.exports},dZV6:function(t,e){},f6Hi:function(t,e,i){"use strict";var a=i("OFgA");e.a={mixins:[a.a],props:{required:{type:Boolean,default:!1}},created:function(){this.handleChangeEvent=!1},computed:{dirty:{get:function(){return!this.pristine},set:function(t){this.pristine=!t}},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){!0===this.pristine&&(this.pristine=!1),this.handleChangeEvent||(this.$emit("on-change",t),this.$emit("input",t))}},data:function(){return{errors:{},pristine:!0,touched:!1}}}},odqc:function(t,e,i){"use strict";var a=i("piuB"),s=(a.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,{name:"tab",mixins:[a.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0;window.requestAnimationFrame(function a(){var s=t.$refs.nav;s.scrollLeft+=(e.offsetLeft-(s.offsetWidth-e.offsetWidth)/2-s.scrollLeft)/15,++i<15&&window.requestAnimationFrame(a)})}}}}),n=i("XyMi");var r=function(t){i("LnN6")},o=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-warp"},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},[],!1,r,null,null);e.a=o.exports},sA5x:function(t,e){}});
//# sourceMappingURL=4.43bdbc1645ce5f43c31a.js.map