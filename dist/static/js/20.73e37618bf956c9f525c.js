webpackJsonp([20],{Fc3N:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAACiklEQVQ4T42SX0iTYRTGz3nfb/uc081tjcIZKUwKiSQk6CIvRKaZgjch1oWVhKlBIQrW3W69sG4qTMEsIqhuigRpmlKWSRBlBSlBUAurrbaZzn3ze9/3xHbVH43O5Xme8+M5h4OwQUVDrYUoVu8AgdS1gsb82oHIelbcCJAItZxIp34MZHRrbl6rK3D9yn8BYuNtHYYLrmJEt2sUGUYAqTncx9YEmlyYhzyBoaFfQX8liI8dDkplNqPVftQTGJnNmGPjrftkemkEuH7RW3fj/D8BsYmOXWL180sEJpjF1kdIFjJT3dkh3bfNW3NhcV3Al/s99pQ1T5ZUBY3oaNMCAK0y3dmhhMgBlbwMgJ+89beqKRhkUFaG2NQkM6DsCpmIykwNc90dcFVf/JCYPF7hxKI5rAqKjE4zXbZ4Mul3BwZfx6fai1Vq6Taipctdd+1xFhCZ6tzCUrF+JNlACGEg9g4YTwCJZaUIObfkKSULEFUpKPIRamPc6jjjDgx+/O2I4ZlzNnty3i9FusSi4WYhDBsp4BqiAKYlDLAurKjyudIDp9J9d+fzext3LGcBi/facnWr5vHUXgpv9Bd/9it7HjW6vGwS46GW00BUjEx9U5I5OMO0YLYER/Qj0FtA2ASI0TUTdEamIlB2JMX23GxerizBEEZDre2o1FYg4UNuey80+4MctlYu0sYRAv4GNcssU0YhAt+ugF6ZqD/XkLB+9GDBSP2LKEYnOqtIGL0MhRO4/lADOSGJ1YC5UgnIwrYc/WtaoktK6SCLo59JsVtj0nl2yn9yb+H3J5iY7q6QQjaANHcSWudIrkxzjvuBNEag3Mi0fCJpAWEgt9qemZLlMlDO/qe+tiJnavYnMIMgrfr3FJYAAAAASUVORK5CYII="},kWhS:function(t,e){},uYR3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),s=a.n(i),o=a("ABCa"),n=a("1HIy"),r=a("17Ff"),c=a("YxJB"),l=a("3Lt7"),u=a("2sLL"),v=a("mzja"),d=a("63CM"),g=(d.a,o.a,n.a,c.a,l.a,u.a,v.a,{directives:{TransferDom:d.a},components:{XHeader:o.a,GroupTitle:n.a,Flexbox:c.a,FlexboxItem:l.a,XButton:u.a,Alert:v.a},filters:{formatDuring:function(t){return""==t||null==t||void 0==t?t="无":(Date.prototype.toLocaleString=function(){var t=this.getMonth()+1;t<10&&(t="0"+t);var e=this.getDate();e<10&&(e="0"+e);var a=this.getHours();a<10&&(a="0"+a);var i=this.getMinutes();return i<10&&(i="0"+i),this.getFullYear()+"."+t+"."+e+" "+a+":"+i},new Date(t).toLocaleString())}},data:function(){return{departmentid:this.$store.getters.user.departmentid,active:[],show:!1,msg:"",userId:r.a.get("userId"),isActive:!1}},methods:{getActivityMore:function(){var t=this;s()({method:"get",url:"active/getParticipateActive",params:{pageNum:1,pageSize:200,departmentid:this.departmentid,userId:this.$store.getters.user.userid}}).then(function(e){console.log(e.data.list),t.active=e.data.list}).catch(function(t){console.log(t)})},submit:function(t){var e=this;s()({method:"post",url:"active/participate",params:{userId:this.userId,activeId:t,departmentid:this.departmentid}}).then(function(t){e.msg=t.msg,e.show=!0}).catch(function(t){console.log(t)})},submit1:function(t){this.$vux.alert.show({title:"请勿重复报名"})},onHide:function(){window.location.reload()},onShow:function(){console.log("on show")},datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"."+(this.getMonth()+1)+"."+this.getDate()},new Date(t).toLocaleString()}},mounted:function(){this.getActivityMore()}}),p=a("XyMi");var h=function(t){a("kWhS")},m=Object(p.a)(g,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body disabled-tabbar"},[i("x-header",[t._v("全部活动")]),t._v(" "),i("div",{staticClass:"group-item"},t._l(t.active,function(e,s){return i("div",{key:s,staticClass:"allLine"},[i("div",{staticStyle:{position:"relative"}},[i("span",{staticClass:"colorL"},[t._v("活动名称：")]),t._v(" "),i("span",{staticClass:"colorW"},[t._v(t._s(e.activeName))]),t._v(" "),5===e.activeType?i("div",[i("img",{staticStyle:{position:"absolute",right:"20px",top:"3px"},attrs:{src:a("Fc3N"),alt:""}})]):t._e()]),t._v(" "),i("div",[i("span",{staticClass:"colorL"},[t._v("活动时间：")]),t._v(" "),i("span",{staticClass:"colorW"},[t._v(t._s(t._f("formatDuring")(e.startTime))+"~"+t._s(t._f("formatDuring")(e.endTime)))])]),t._v(" "),i("div",[i("span",{staticClass:"colorL"},[t._v("地点：")]),t._v(" "),i("span",{staticClass:"colorW"},[t._v(t._s(e.activePace))])]),t._v(" "),i("div",[i("span",{staticClass:"colorL"},[t._v("发起人：")]),t._v(" "),i("span",{staticClass:"colorW"},[t._v(t._s(e.activeCreatePeopleName))])]),t._v(" "),i("div",[i("span",{staticClass:"colorL"},[t._v("活动内容：")]),t._v(" "),i("span",{staticClass:"colorW"},[t._v(t._s(e.active_Context))])]),t._v(" "),2==e.signupstatus?i("div",{staticClass:"book"},[i("a",{on:{click:function(a){t.submit(e.id)}}},[t._v("报名")])]):t._e(),t._v(" "),1==e.signupstatus?i("div",{staticClass:"book"},[i("a",{staticStyle:{"background-color":"#8b8b8b"},on:{click:function(a){t.submit1(e.id)}}},[t._v("已报名")])]):t._e(),t._v(" "),i("div",{staticClass:"grayLine"})])})),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("alert",{attrs:{title:t.msg},on:{"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("谢谢")])],1)],1)},[],!1,h,"data-v-2aeeedf7",null);e.default=m.exports}});
//# sourceMappingURL=20.73e37618bf956c9f525c.js.map