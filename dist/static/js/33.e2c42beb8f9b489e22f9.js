webpackJsonp([33],{nFUa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{isDeleting:!1,items:[{text:"第一组"},{text:"第二组"},{text:"第三组"}]}},methods:{showDeleteButton:function(t){clearInterval(this.Loop);this.Loop=setTimeout(function(){alert(t)},1e3)},clearLoop:function(){clearInterval(this.Loop)}}},i=n("XyMi");var s=function(t){n("rTZv")},a=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},t._l(t.items,function(e,o){return n("div",{staticClass:"delete-button",class:{"delete-button-show":t.isDeleting},on:{touchend:t.clearLoop,touchstart:function(e){t.showDeleteButton(o)}}},[t._v(t._s(e.text))])}))])},[],!1,s,"data-v-cac52f20",null);e.default=a.exports},rTZv:function(t,e){}});
//# sourceMappingURL=33.e2c42beb8f9b489e22f9.js.map