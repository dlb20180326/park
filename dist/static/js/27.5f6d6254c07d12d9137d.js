webpackJsonp([27],{NvJ1:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e,i,o=s("4YfN"),a=s.n(o),c=s("a3Yh"),r=s.n(c),u=s("6sKG"),d=s.n(u),l=s("9rMa"),h=s("bFJ2"),p=s("+62G"),f=s("7g+Q"),g=(s("fJ2I"),s("mmca"),s("nxAZ")),m=s("UnIH"),v=(p.a,g.a,m.a,h.a,f.a,e={cos:function(){console.log("1111")},show:function(t){this.$refs.previewer.show(t)},reject:function(){var t=this;d.a.get("pstudy/reject",{params:{userid:this.user.userid,studyid:this.$route.params.studyid}}).then(function(n){n.success?t.$vux.alert.show({title:n.msg,onHide:function(){history.back(-1)}}):t.$vux.alert.show({title:n.msg})}).catch(function(t){console.log(t)})},pass:function(){var t=this;d.a.get("pstudy/pass",{params:{userid:this.user.userid,studyid:this.$route.params.studyid}}).then(function(n){n.success?t.$vux.alert.show({title:n.msg,onHide:function(){history.back(-1)}}):t.$vux.alert.show({title:n.msg})}).catch(function(t){console.log(t)})},spread:function(){this.spr=!0,this.btnAn=!this.btnAn,this.btnPack=!this.btnPack},folding:function(){this.spr=!this.spr,this.btnAn=!this.btnAn,this.btnPack=!this.btnPack},noSpread:function(){this.noSpr=!0,this.nobtnAn=!this.nobtnAn,this.nobtnPack=!this.nobtnPack},noFolding:function(){this.noSpr=!this.noSpr,this.nobtnAn=!this.nobtnAn,this.nobtnPack=!this.nobtnPack},logIndexChange:function(t){console.log(t)},getDetail:function(){var t=this;this.$http.get("pstudy/queryById?studyid="+this.$route.params.studyid).then(function(n){t.content=n.data,t.content.picture=[],t.num=n.data.pictures.length,t.content.pictures.forEach(function(n){console.log(n);var s={};s.msrc="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+n.pictureId,s.src="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+n.pictureId,t.content.picture.push(s)})}).catch(function(t){console.log(t)})},getModule:function(){var t=this;this.$http.get("pscoredetail/queryById?id="+this.$route.params.moduleid).then(function(n){t.contents.title=n.data.projectName+"评分"}).catch(function(t){console.log(t)})}},r()(e,"getDetail",function(){var t=this;this.$http.get("pstudy/queryById?studyid="+this.$route.params.studyid).then(function(n){t.content=n.data,t.content.picture=[],t.num=n.data.pictures.length,t.content.pictures.forEach(function(n){var s={};s.msrc="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+n.pictureId,s.src="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+n.pictureId,t.content.picture.push(s)})}).catch(function(t){console.log(t)})}),r()(e,"dataPick",function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日"},new Date(t).toLocaleString()}),r()(e,"showMenu",function(){this.showPop=!0}),r()(e,"know",function(){this.showPop=!1}),r()(e,"getmoduleid",function(){this.moduleid=this.$route.params.moduleid}),a()({},Object(l.c)(["user"])),{directives:{TransferDom:p.a},components:{XHeader:g.a,Previewer:m.a,ViewBox:h.a,Popup:f.a},filters:{formatDuring:function(t){return t?(Date.prototype.toLocaleString=function(){var t=this.getMonth()+1;t<10&&(t="0"+t);var n=this.getDate();n<10&&(n="0"+n);var s=this.getHours();s<10&&(s="0"+s);var e=this.getMinutes();return e<10&&(e="0"+e),this.getFullYear()+"."+t+"."+n+" "+s+":"+e},new Date(t).toLocaleString()):"无"}},methods:(i={cos:function(){console.log("1111")},show:function(t){this.$refs.previewer.show(t)},reject:function(){var t=this;d.a.get("pstudy/reject",{params:{userid:this.user.userid,studyid:this.$route.params.studyid}}).then(function(n){n.success?t.$vux.alert.show({title:n.msg,onHide:function(){history.back(-1)}}):t.$vux.alert.show({title:n.msg})}).catch(function(t){console.log(t)})},pass:function(){var t=this;d.a.get("pstudy/pass",{params:{userid:this.user.userid,studyid:this.$route.params.studyid}}).then(function(n){n.success?t.$vux.alert.show({title:n.msg,onHide:function(){history.back(-1)}}):t.$vux.alert.show({title:n.msg})}).catch(function(t){console.log(t)})},spread:function(){this.spr=!0,this.btnAn=!this.btnAn,this.btnPack=!this.btnPack},folding:function(){this.spr=!this.spr,this.btnAn=!this.btnAn,this.btnPack=!this.btnPack},noSpread:function(){this.noSpr=!0,this.nobtnAn=!this.nobtnAn,this.nobtnPack=!this.nobtnPack},noFolding:function(){this.noSpr=!this.noSpr,this.nobtnAn=!this.nobtnAn,this.nobtnPack=!this.nobtnPack},logIndexChange:function(t){console.log(t)},getDetail:function(){var t=this;this.$http.get("pstudy/queryById?studyid="+this.$route.params.studyid).then(function(n){t.content=n.data,t.content.picture=[],t.num=n.data.pictures.length,t.content.pictures.forEach(function(n){console.log(n);var s={};s.msrc="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+n.pictureId,s.src="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+n.pictureId,t.content.picture.push(s)})}).catch(function(t){console.log(t)})},getModule:function(){var t=this;this.$http.get("pscoredetail/queryById?id="+this.$route.params.moduleid).then(function(n){t.contents.title=n.data.projectName+"评分"}).catch(function(t){console.log(t)})}},r()(i,"getDetail",function(){var t=this;this.$http.get("pstudy/queryById?studyid="+this.$route.params.studyid).then(function(n){t.content=n.data,t.content.picture=[],t.num=n.data.pictures.length,t.content.pictures.forEach(function(n){var s={};s.msrc="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+n.pictureId,s.src="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+n.pictureId,t.content.picture.push(s)})}).catch(function(t){console.log(t)})}),r()(i,"dataPick",function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日"},new Date(t).toLocaleString()}),r()(i,"showMenu",function(){this.showPop=!0}),r()(i,"know",function(){this.showPop=!1}),r()(i,"getmoduleid",function(){this.moduleid=this.$route.params.moduleid}),i),mounted:function(){this.getDetail(),this.getModule(),this.getmoduleid()},computed:a()({},Object(l.c)(["user"])),data:function(){return{moduleid:"",contents:{title:""},num:0,activeData:{},picInfo:[],list:[],content:{},spr:!1,noSpr:!1,nobtnPack:!1,nobtnAn:!1,btnPack:!1,btnAn:!1,peopleNum:null,participants:null,Noparticipants:null,showPop:!1,options:{getThumbBoundsFn:function(t){var n=document.querySelectorAll(".previewer-demo-img")[t],s=window.pageYOffset||document.documentElement.scrollTop,e=n.getBoundingClientRect();return{x:e.left,y:e.top+s,w:e.width}}}}}}),b=s("18Nq");var w=function(t){s("tVWg")},_=Object(b.a)(v,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"page-body disabled-tabbar"},[s("view-box",{ref:"viewBox",attrs:{"body-padding-top":".46rem"}},[s("x-header",{staticClass:"bgColors",staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{slot:"header","body-padding-top":".46rem"},slot:"header"},[t._v("\n             "+t._s(t.contents.title)+"\n              "),s("a",{attrs:{slot:"right"},on:{click:t.showMenu},slot:"right"},[t._v("评分说明")])]),t._v(" "),s("p",{staticClass:"allPic"},[s("span",{staticClass:"bg-line"}),t._v(" "),s("span",{staticClass:"picture"},[t._v("党员姓名:")]),t._v(" "),s("span",{staticClass:"numberz"},[t._v(t._s(t.content.partyname))])]),t._v(" "),s("p",{staticClass:"allPic"},[s("span",{staticClass:"bg-line"}),t._v(" "),s("span",{staticClass:"picture"},[t._v("活动时间:")]),t._v(" "),s("span",{staticClass:"numberz1"},[t._v(t._s(t._f("formatDuring")(t.content.starttime))+"~"+t._s(t._f("formatDuring")(t.content.endtime)))])]),t._v(" "),s("p",{staticClass:"allPic"},[s("span",{staticClass:"bg-line"}),t._v(" "),s("span",{staticClass:"picture"},[t._v("主要内容:")])]),t._v(" "),s("div",{staticClass:"artical"},[t._v("\n                "+t._s(t.content.content)+"\n            ")]),t._v(" "),s("p",{staticClass:"allPic"},[s("span",{staticClass:"bg-line"}),t._v(" "),s("span",{staticClass:"picture"},[t._v("活动图集")]),t._v(" "),s("span",{staticClass:"numberz"},[t._v(t._s(t.num)+"张")])]),t._v(" "),s("div",{staticClass:"img-show"},[t._l(t.content.picture,function(n,e){return s("img",{key:e,staticClass:"previewer-demo-img",attrs:{src:n.msrc},on:{click:function(n){t.show(e)}}})}),t._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("previewer",{ref:"previewer",attrs:{list:t.content.picture||[],options:t.options},on:{"on-index-change":t.logIndexChange}})],1)],2),t._v(" "),s("table",{staticStyle:{margin:"0.1rem auto"},attrs:{width:"90%"}},[s("tr",[s("td",{attrs:{width:"50%"}},[0==t.content.status?s("button",{staticClass:"btnRed",on:{click:function(n){t.reject()}}},[t._v("驳回")]):t._e()]),t._v(" "),s("td",{attrs:{width:"50%"}},[0==t.content.status?s("button",{staticClass:"btnRed",on:{click:function(n){t.pass()}}},[t._v("通过")]):t._e()])])]),t._v(" "),2==t.content.status?s("button",{staticClass:"btnRed"},[t._v("已评分 (评分人："+t._s(t.content.branch)+")")]):t._e(),t._v(" "),3==t.content.status?s("button",{staticClass:"btnRed"},[t._v("审核已驳回 (审核人："+t._s(t.content.branch)+")")]):t._e(),t._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("popup",{attrs:{position:"left",width:"100%"},model:{value:t.showPop,callback:function(n){t.showPop=n},expression:"showPop"}},[s("div",{staticClass:"middle"},[s("div",{staticClass:"middle-top"},[t._v("评分说明")]),t._v(" "),s("div",{staticClass:"middle-content"},["2"===t.moduleid?s("p",[t._v("\n\t\t\t\t\t\t\t党员自学或参加其他党组织组织的学习教育活动，经所属党支部书记确认后，每参加一次加2.5分（共5分）。\n\t\t\t\t\t\t")]):"4"===t.moduleid?s("p",[t._v("\n                            党员在金领驿站参加政治活动，或“双报到”参加居民区党组织组织的党日活动，经所属党支部书记确认后，每次加2分（共10分）。\n                        ")]):"11"===t.moduleid?s("p",[t._v("\n                            党员积极参加公益活动，每次加3分(最高不超过20分)。\n                        ")]):"8"===t.moduleid?s("p",[t._v("\n                            党员积极参加公益活动，每次加3分(最高不超过10分)。\n                        ")]):t._e()]),t._v(" "),s("div",{staticClass:"knowBtn",on:{click:function(n){t.know()}}},[t._v("我知道了")])])])],1)],1)],1)},[],!1,w,"data-v-08b0061d",null);n.default=_.exports},a3Yh:function(t,n,s){"use strict";n.__esModule=!0;var e,i=s("liLe"),o=(e=i)&&e.__esModule?e:{default:e};n.default=function(t,n,s){return n in t?(0,o.default)(t,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[n]=s,t}},tVWg:function(t,n){}});
//# sourceMappingURL=27.5f6d6254c07d12d9137d.js.map