(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{321:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("0080bb15",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n(321)},325:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".list-item.pink{background:#f8e9f5}.list-item.red{background:#fff6f5}",""]),r.locals={},t.exports=r},326:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(48),{data:function(){return{transactions:[]}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getTime:function(data){var t=new Date(data),e=t.getHours(),n=t.getMinutes(),r=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+r},getTransactions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/?limit=4&username=".concat(t.user.username,"&sort=-dateCreated"));case 3:n=e.sent,t.transactions=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getTransactions()},computed:{user:function(){return this.$store.state.auth.user}}}),c=(n(324),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-wrapper latest"},[e("h4",{staticClass:"card-wrap-title volume"},[t._v("Latest Activities")]),t._v(" "),e("ul",{staticClass:"latest-list",attrs:{role:"list"}},t._l(t.transactions,(function(n){return e("li",{key:n._id,staticClass:"list-item",class:{grean:"Transfer"==n.transactionType,pink:"Loan"==n.transactionType,red:"Deposit"==n.transactionType}},[e("div",{staticClass:"latest-flex"},[e("div",{staticClass:"latest-icon-holder"},["Transfer"==n.transactionType?e("img",{staticClass:"volume-icon big",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641413102f7f81ab89a821c6_exchange.svg",loading:"lazy",alt:""}}):e("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641400500eac7c2351f1d064_withdraw.svg",loading:"lazy",alt:""}})]),t._v(" "),e("h4",{staticClass:"latest-title"},[t._v(t._s(n.transactionType))])]),t._v(" "),e("div",{staticClass:"latest-body"},[e("div",{staticClass:"latest-time"},[t._v("\n          "+t._s(t.getTime(n.dateCreated))+",\n          "+t._s(t.formatDate(n.dateCreated))+"\n        ")]),t._v(" "),e("h4",{staticClass:"latest-value"},[t._v("$"+t._s(n.amount))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);