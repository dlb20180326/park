webpackJsonp([14],{bOdI:function(t,e,a){"use strict";e.__esModule=!0;var s,n=a("C4MV"),i=(s=n)&&s.__esModule?s:{default:s};e.default=function(t,e,a){return e in t?(0,i.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},e9Qg:function(t,e){},rFqn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n,i=a("bOdI"),l=a.n(i),o=a("ABCa"),r=a("1HIy"),v=a("YxJB"),c=a("3Lt7"),u=a("2sLL"),d=(a("17Ff"),a("mtWM")),_=a.n(d),x=(s={XHeader:o.a,GroupTitle:r.a,Flexbox:v.a},l()(s,"Flexbox",v.a),l()(s,"FlexboxItem",c.a),l()(s,"XButton",u.a),{data:function(){return{users:[{id:1,fonts:"年度积分",integral:0},{id:2,fonts:"活动次数",integral:0}],userAbout:{},dateTime:"",charts:"",partAbout:{}}},components:(n={XHeader:o.a,GroupTitle:r.a,Flexbox:v.a},l()(n,"Flexbox",v.a),l()(n,"FlexboxItem",c.a),l()(n,"XButton",u.a),n),mounted:function(){var t=(new Date).getHours();this.dateTime=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好",this.$nextTick(function(){}),this.userName(),this.infoDetail()},methods:{infoDetail:function(){var t=this;_.a.get("/dangjian/pdepartment/queryById",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.partAbout=e.data}).catch(function(t){console.log(t)})},userName:function(){var t=this;_.a.get("/dangjian/ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){console.log(e),t.userAbout=e.data}).catch(function(t){console.log(t)})}}}),b=a("XyMi");var f=function(t){a("e9Qg")},m=Object(b.a)(x,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        花旗银行第二党支部\n    ")]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                    片区负责人：\n                ")]),t._v(" "),a("flexbox-item",[t._v("\n                    金领驿站\n                ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                    现有党支部：\n                ")]),t._v(" "),a("flexbox-item",[t._v("\n                    上海中心片区\n                ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                    所属党委：\n                ")]),t._v(" "),a("flexbox-item",[t._v("\n                    三级党支部\n                ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                    现有党员：\n                ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v("25")]),t._v("\n                    人\n                ")])],1)],1),t._v(" "),a("div",{staticClass:"list"},[a("h3",[t._v("书记代办事宜")]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("1. 党员先锋作用积分加分确认")]),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{type:"warn"}},[t._v("\n                        去处理\n                    ")])],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("2. 陆家嘴植树活动即将开启")]),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{type:"warn"}},[t._v("\n                        活动二维码\n                    ")])],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("3. 2018年第三次组织生活会图片上传")]),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{type:"warn"}},[t._v("\n                        去处理\n                    ")])],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("4. 2018年第三次组织生活会图片上传")]),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{type:"warn"}},[t._v("\n                        去处理\n                    ")])],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("5. 2018年第三次组织生活会图片上传")]),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{type:"warn"}},[t._v("\n                        去处理\n                    ")])],1)])])])],1)},[],!1,f,"data-v-136d1f0d",null);e.default=m.exports}});
//# sourceMappingURL=14.7421eab50bf8e1fdeee5.js.map