webpackJsonp([7],{"1UPx":function(t,e,i){t.exports=i.p+"static/img/icon-head.303d926.png"},"2TJQ":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("ABCa"),n=i("YxJB"),s=i("3Lt7"),l=i("piuB"),r=(l.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,{name:"tab",mixins:[l.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0;window.requestAnimationFrame(function a(){var n=t.$refs.nav;n.scrollLeft+=(e.offsetLeft-(n.offsetWidth-e.offsetWidth)/2-n.scrollLeft)/15,++i<15&&window.requestAnimationFrame(a)})}}}}),o=i("XyMi");var c=function(t){i("LnN6")},d=Object(o.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-warp"},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},[],!1,c,null,null).exports,v=(l.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[l.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),b=Object(o.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},[],!1,null,null,null).exports,u={mixins:[i("OFgA").a],props:{required:{type:Boolean,default:!1}},created:function(){this.handleChangeEvent=!1},computed:{dirty:{get:function(){return!this.pristine},set:function(t){this.pristine=!t}},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){!0===this.pristine&&(this.pristine=!1),this.handleChangeEvent||(this.$emit("on-change",t),this.$emit("input",t))}},data:function(){return{errors:{},pristine:!0,touched:!1}}},x=(Number,Boolean,{name:"x-progress",mixins:[u],props:{percent:{type:Number,default:0},showCancel:{type:Boolean,default:!0}},methods:{cancel:function(){this.$emit("on-cancel")}}});var h=function(t){i("sA5x")},f=Object(o.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-progress"},[e("div",{staticClass:"weui-progress__bar"},[e("div",{staticClass:"weui-progress__inner-bar",style:{width:this.percent+"%"}})]),this._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:this.showCancel,expression:"showCancel"}],staticClass:"weui-progress_opr",attrs:{href:"javascript:;"}},[e("i",{staticClass:"weui-icon-cancel",on:{click:this.cancel}})])])},[],!1,h,null,null).exports,_=i("2sLL"),m=(a.a,n.a,s.a,_.a,{components:{XHeader:a.a,Flexbox:n.a,FlexboxItem:s.a,Tab:d,TabItem:b,XProgress:f,XButton:_.a},data:function(){return{tabIndex:0,percent:60}}});var p=function(t){i("hwMB"),i("je4A")},C=Object(o.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        党员积分\n    ")]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"avatar"},[a("img",{attrs:{src:i("1UPx")}})]),t._v(" "),a("flexbox-item",[a("div",{staticClass:"label"},[t._v("积分周期：")]),t._v(" "),a("div",[t._v("2018年1月1日 - 12月31日")])])],1),t._v(" "),a("flexbox",{attrs:{gutter:15}},[a("flexbox-item",[a("div",{staticClass:"piece"},[a("div",[t._v("现党员积分")]),t._v(" "),a("span",[t._v("22")])])]),t._v(" "),a("flexbox-item",[a("div",{staticClass:"piece"},[a("div",[t._v("年度党员评级")]),t._v(" "),a("span",[t._v("暂无")])])])],1)],1),t._v(" "),a("div",{staticClass:"body"},[a("tab",{attrs:{"line-width":5,"active-color":"#666","bar-active-color":"#a0333b","custom-bar-width":"1rem"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("tab-item",[a("b",[t._v("积分进度")])]),t._v(" "),a("tab-item",[a("b",[t._v("获取明细")])])],1),t._v(" "),a("transition",{attrs:{name:"fade"}},[0===t.tabIndex?a("div",{staticClass:"tab-content"},[a("div",{staticClass:"item-detail"},[a("div",{staticClass:"title"},[a("b",[t._v("1. 政治学习")]),t._v(" "),a("div",{staticClass:"space"}),t._v(" "),a("span",{staticClass:"number"},[t._v("12")]),t._v("/20\n                        ")]),t._v(" "),a("div",{staticClass:"content"},[a("x-progress",{attrs:{percent:t.percent,"show-cancel":!1}})],1),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{mini:"",type:"warn"}},[t._v("\n                                点击+积分\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"item-detail"},[a("div",{staticClass:"title"},[a("b",[t._v("2. 政治学习")]),t._v(" "),a("div",{staticClass:"space"}),t._v(" "),a("span",{staticClass:"number"},[t._v("12")]),t._v("/20\n                        ")]),t._v(" "),a("div",{staticClass:"content"},[a("x-progress",{attrs:{percent:t.percent,"show-cancel":!1}})],1),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{mini:"",type:"warn"}},[t._v("\n                                点击+积分\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"item-detail"},[a("div",{staticClass:"title"},[a("b",[t._v("3. 政治学习")]),t._v(" "),a("div",{staticClass:"space"}),t._v(" "),a("span",{staticClass:"number"},[t._v("12")]),t._v("/20\n                        ")]),t._v(" "),a("div",{staticClass:"content"},[a("x-progress",{attrs:{percent:t.percent,"show-cancel":!1}})],1),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{mini:"",type:"warn"}},[t._v("\n                                点击+积分\n                            ")])],1)])]):t._e(),t._v(" "),1===t.tabIndex?a("div",{staticClass:"tab-content"},[a("div",{staticClass:"item-detail"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                获取时间：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                2018年1月1日 - 12月31日\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                积分类型：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                党费缴纳\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                审核人：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                支部书记\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                积分变动：\n                            ")]),t._v(" "),a("flexbox-item",[a("spam",{staticClass:"number"},[t._v("+5分")])],1)],1)],1),t._v(" "),a("div",{staticClass:"item-detail"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                获取时间：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                2018年1月1日 - 12月31日\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                积分类型：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                党费缴纳\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                审核人：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                支部书记\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                积分变动：\n                            ")]),t._v(" "),a("flexbox-item",[a("spam",{staticClass:"number"},[t._v("+5分")])],1)],1)],1),t._v(" "),a("div",{staticClass:"item-detail"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                获取时间：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                2018年1月1日 - 12月31日\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                积分类型：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                党费缴纳\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                审核人：\n                            ")]),t._v(" "),a("flexbox-item",[t._v("\n                                支部书记\n                            ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                                积分变动：\n                            ")]),t._v(" "),a("flexbox-item",[a("spam",{staticClass:"number"},[t._v("+5分")])],1)],1)],1)]):t._e()])],1)])],1)},[],!1,p,"data-v-69ab7f42",null);e.default=C.exports},LnN6:function(t,e){},OFgA:function(t,e,i){"use strict";function a(){return Math.random().toString(36).substring(3,8)}e.a={mounted:function(){0},data:function(){return{uuid:a()}}}},hwMB:function(t,e){},je4A:function(t,e){},sA5x:function(t,e){}});
//# sourceMappingURL=7.dfab1d429b6d9bfb4fb8.js.map