(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{308:function(t,n,o){"use strict";o.r(n);var c={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},e=o(56),component=Object(e.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"confirm-action",class:{hide:t.state}},[n("div",{staticClass:"confirm-box"},[n("div",[t._v(t._s(t.msg))]),t._v(" "),n("div",{staticClass:"confirm-holder"},[n("span",{staticClass:"button w-button",on:{click:function(n){return t.confirm("yes")}}},[t._v("Yes")]),n("span",{staticClass:"button w-button",on:{click:function(n){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);n.default=component.exports}}]);