webpackJsonp([3],{"6fHd":function(t,n,e){"use strict";function c(t){e("nzrP")}Object.defineProperty(n,"__esModule",{value:!0});var a=e("SigS"),s={name:"buttonItem",components:{iButton:a.a},data:function(){return{message:"message回调"}},methods:{alertFn:function(){this.$alert("温馨提示温馨提示温馨提示")},alertFn1:function(){var t=this;this.$alert({content:"温馨提示温馨提示温馨提示",callBack:function(){console.log(t.message)}})},alertFn2:function(){this.$alert({content:"温馨提示温馨提示温馨提示",className:"custom custom2"})}}},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"page page-article page-wrap"},[e("h2",[t._v("Alert 告警")]),t._v(" "),t._m(0),t._v(" "),e("h3",[t._v("Default")]),t._v(" "),e("div",{staticClass:"section-content"},[e("i-button",{nativeOn:{click:function(n){t.alertFn(n)}}},[t._v("Default")]),t._v(" "),t._m(1)],1),t._v(" "),e("h3",[t._v("回调")]),t._v(" "),e("div",{staticClass:"section-content"},[e("i-button",{nativeOn:{click:function(n){t.alertFn1(n)}}},[t._v("回调")]),t._v(" "),t._m(2)],1),t._v(" "),e("h3",[t._v("样式绑定")]),t._v(" "),e("div",{staticClass:"section-content"},[e("i-button",{nativeOn:{click:function(n){t.alertFn2(n)}}},[t._v("样式绑定")]),t._v(" "),t._m(3)],1)])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section-content"},[e("p",[t._v("告警类notice。用法如下：")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v('\n                this.$alert("这里是消息内容");\n            ')])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("\n                this.$alert({\n                    content:'温馨提示温馨提示温馨提示',\n                    callBack:()=>{\n                        console.log(this.message);\n                    }\n                });\n            ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("\n                this.$alert({\n                    content:'温馨提示温馨提示温馨提示',\n                    className:'custom'\n                });\n            ")])])}],l={render:i,staticRenderFns:o},r=l,u=e("VU/8"),_=c,v=u(s,r,!1,_,null,null);n.default=v.exports},nzrP:function(t,n){}});