(window.webpackJsonp=window.webpackJsonp||[]).push([[42,20,21,22],{315:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("99376990",content,!0,{sourceMap:!1})},316:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("0297ffec",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n(315)},325:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".dashboard-logo{max-width:120px}",""]),r.locals={},t.exports=r},326:function(t,e,n){"use strict";n(316)},327:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,"img.menu-close{cursor:pointer;right:-180px;top:20px}",""]),r.locals={},t.exports=r},328:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(48),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),l=n(56),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-footer"},[e("div",[t._v("\n    "+t._s((new Date).getFullYear())+" Copyright "+t._s(t.company.companyName)+", All\n    Rights Reserved.\n  ")])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);n(57);var r=n(8),o=(n(48),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#top");n?n.appendChild(e):console.error("Could not find app node to append script element")},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadScript(),this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},head:function(){return{link:[{href:"/css/Dashboard.css",type:"text/css",rel:"stylesheet"}]}}}),l=(n(324),n(56)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6445ef4447bf1a3b248f87b6_hamburger-menu-icon%203.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),e("img",{staticClass:"dashboard-logo",attrs:{src:"/images/Renex-Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("div",{attrs:{id:"ytWidget"}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("\n          Hi, "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+" Welcome back.\n        ")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("div",{staticClass:"icon-holder gap"},[t.user.profilePicture?e("div",{staticClass:"top-profile-pics",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")"),backgroundSize:"cover",backgroundPosition:"center"}}):e("div",{staticClass:"top-profile-pics",style:{backgroundImage:"url(/images/avatar.svg)",backgroundSize:"cover",backgroundPosition:"center"}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-15",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(26),n(48),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),l=(n(326),n(56)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{show:t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d690df7d5dc496a17_decrease-text-indent-icon%201.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Renex-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cf4aba0ad5d0c1bc8ba2_four-squares-line-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Dashboard")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d85d0ef5c36bfabc9_wallet-money-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-withdraw-funds"==t.route},attrs:{to:"/dashboard/withdraw-funds"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460ca96a33287e54e85cda5_hand-money-income-dollar-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Withdraw")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c95a50cbb3577558d943_3d-modeling-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transactions")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9ddd6192761285fb9b0_chart-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit List")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-earnings"==t.route},attrs:{to:"/dashboard/earnings"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c7c6a5b90e89a2622c43_grow-money-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Earnings")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-notifications"==t.route},attrs:{to:"/dashboard/notifications"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Notification")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9bd5a61c167cdd48963_user-persona-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Profile")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-referrals"==t.route},attrs:{to:"/dashboard/referrals"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"/dashboard-images/referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Referrals")])]),t._v(" "),e("div",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @Renex Holdings Aps - "+t._s((new Date).getFullYear())+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";var r=n(2),o=n(3),l=n(59),c=n(216),d=n(215),h=n(4),v=RangeError,m=String,f=Math.floor,_=o(d),C=o("".slice),y=o(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},x=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=f(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=f(n/t),n=n%t*1e7},D=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:h((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!h((function(){y({})}))},{toFixed:function(t){var e,n,r,o,d=c(this),h=l(t),data=[0,0,0,0,0,0],f="",y="0";if(h<0||h>20)throw v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(f="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*w(2,69,1))-69)<0?d*w(2,-e,1):d/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(x(data,0,n),r=h;r>=7;)x(data,1e7,0),r-=7;for(x(data,w(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),x(data,1,1),k(data,2),y=D(data)}else x(data,0,n),x(data,1<<-e,0),y=D(data)+_("0",h);return y=h>0?f+((o=y.length)<=h?"0."+_("0",h-o)+y:C(y,0,o-h)+"."+C(y,o-h)):f+y}})},369:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("f7a4e1bc",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";n(369)},407:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".scan-button-holder{flex-wrap:wrap}.processing.right{margin-right:5px}img.ehereum{height:30px;min-width:30px}",""]),r.locals={},t.exports=r},431:function(t,e,n){"use strict";n.r(e);n(57),n(26),n(331),n(214);var r=n(8),o=(n(48),n(91),n(20),n(40),n(13),n(92),n(328)),l=n(329),c=n(330);var d={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let h;const v=new Uint8Array(16);function m(){if(!h&&(h="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(v)}const f=[];for(let i=0;i<256;++i)f.push((i+256).toString(16).slice(1));function _(t,e=0){return(f[t[e+0]]+f[t[e+1]]+f[t[e+2]]+f[t[e+3]]+"-"+f[t[e+4]]+f[t[e+5]]+"-"+f[t[e+6]]+f[t[e+7]]+"-"+f[t[e+8]]+f[t[e+9]]+"-"+f[t[e+10]]+f[t[e+11]]+f[t[e+12]]+f[t[e+13]]+f[t[e+14]]+f[t[e+15]]).toLowerCase()}var C=function(t,e,n){if(d.randomUUID&&!e&&!t)return d.randomUUID();const r=(t=t||{}).random||(t.rng||m)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return _(r)},y={data:function(){return{amount:"",plan:"",wallet:"",currency:"",scanCode:!0,qrcodeSize:200,userID:"",paymentMethod:"Coinpayment",response:"",isError:!1,showResponse:!1,onRequest:!1}},methods:{callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1,n.$router.push("/dashboard")}),8e3)},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},copyInputValue:function(){document.getElementById("walletAddress").select(),document.execCommand("copy")},generateCode:function(){var t,e=document.getElementById("qrcode"),n=200,r=null===(t=this.currency)||void 0===t?void 0:t.address,o="https://chart.googleapis.com/chart?chs=".concat(n,"x").concat(n,"&cht=qr&chl=").concat(r),img=new Image;img.src=o,img.width=n,img.height=n,e.appendChild(img)},goBack:function(){this.$router.push("/dashboard/deposit")},makeDeposit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.onRequest=!0,form={amount:t.amount,symbol:t.currency.symbol,transactionType:"deposit",username:t.user.username,referredBy:t.user.referredBy,user:t.user,planName:t.plan.planName,planDuration:t.plan.planDuration,planCycle:t.plan.planCycle,walletName:t.currency.name,percent:t.plan.planPercentage,currencyId:t.currency._id,walletId:t.wallet._id,online:t.currency.online,image:t.currency.image,time:(new Date).getTime(),fromBalance:t.$route.query.fromBalance},e.prev=2,e.next=5,t.$axios.post("/transactions",form);case 5:n="true"==t.$route.query.fromBalance?"Your deposit is successful.":"The deposit is pending and will be approved after confirmation",t.onRequest=!1,t.callResponse(n,!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),t.onRequest=!1,console.log(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))()},getCurrency:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.get("/currency/".concat(t,"/?username=").concat(e.user.username));case 3:r=n.sent,e.currency=r.data.data,e.wallet=r.data.wallet,e.generateCode(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.response.data.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},getWallet:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.get("/wallet/".concat(t));case 3:r=n.sent,e.wallet=r.data.data,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getPlan:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.get("/plans/".concat(t));case 3:r=n.sent,e.plan=r.data.data,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},mounted:function(){var t=this;this.amount=this.$route.query.amount,this.userID=C(),this.paymentMethod=this.$route.query.paymentMethod,this.getCurrency(this.$route.query.currencyId),this.getPlan(this.$route.query.planId),"true"==this.$route.query.fromBalance&&(this.getWallet(this.$route.query.walletId),this.scanCode=!1);var form=document.getElementById("coinpayments-form");form.querySelector('input[type="image"]').addEventListener("click",function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.onRequest=!0,n.preventDefault(),data={amount:t.amount,symbol:t.currency.symbol,transactionType:"deposit",username:t.user.username,referredBy:t.user.referredBy,user:t.user,planName:t.plan.planName,planDuration:t.plan.planDuration,planCycle:t.plan.planCycle,walletName:t.currency.name,percent:t.plan.planPercentage,currencyId:t.currency._id,walletId:t.wallet._id,image:t.currency.image,online:t.currency.online,time:(new Date).getTime(),fromBalance:t.$route.query.fromBalance,userID:t.userID},e.prev=3,e.next=6,t.$axios.post("/transactions",data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0.response.data.message);case 11:setTimeout((function(){form.submit()}),1e3);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}())},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:o.default,DashboardNavigation:c.default,DashboardHeader:l.default}},w=y,x=(n(406),n(56)),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comfirm-deposit-holder"},[e("div",{staticClass:"comfirm-deposit"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"scan-section-holder"},[t._m(0),t._v(" "),t.scanCode&&"Coinpayment"!=t.paymentMethod?e("div",{staticClass:"scan-div"},[t._m(1),t._v(" "),e("div",{attrs:{id:"qrcode"}}),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"input-upload-holder"},[e("div",{staticClass:"scan-form w-form"},[e("div",{staticClass:"over-flow"},[e("div",{staticClass:"upload-address-holder"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currency.address,expression:"currency.address"}],staticClass:"text-field-2 w-input",attrs:{type:"text",maxlength:"256",name:"name-3","data-name":"Name 3",placeholder:"Wallleaddress",id:"walletAddress"},domProps:{value:t.currency.address},on:{input:function(e){e.target.composing||t.$set(t.currency,"address",e.target.value)}}}),t._v(" "),e("div",{staticClass:"upload-icon-holder"},[e("img",{staticClass:"copied-icon",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/64375ec4b5653e1a0ca9ab21_copy-link-icon%202.svg",loading:"lazy",alt:""},on:{click:t.copyInputValue}})])])])])])]):t._e()]),t._v(" "),e("div",{staticClass:"scan-deposit-table"},[e("div",{staticClass:"table"},[t._m(3),t._v(" "),e("div",{staticClass:"main-table"},[t._m(4),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(5),t._v(" "),t._m(6),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(t.formatDate(new Date)))])])]),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(7),t._v(" "),t._m(8),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(t.plan.planPercentage)+"%")])])]),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(9),t._v(" "),t._m(10),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                  Daily for "+t._s(t.plan.planDuration)+" days\n                ")])])]),t._v(" "),t._m(11),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(12),t._v(" "),t._m(13),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),t.currency.online?e("img",{staticClass:"ehereum",attrs:{src:"".concat(t.currency.image),loading:"lazy",alt:""}}):e("img",{staticClass:"ehereum",attrs:{src:"".concat(t.FILE_URL,"/").concat(t.currency.image),loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(t.currency.name))])])]),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(14),t._v(" "),t._m(15),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                  $"+t._s(t.formatMoney(Number(t.amount).toFixed(2)))+" USD\n                ")])])]),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(16),t._v(" "),t._m(17),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                  $"+t._s(t.formatMoney(t.amount*t.plan.planPercentage*t.plan.planDuration/100+1*t.amount))+"\n                ")])])])])])]),t._v(" "),e("div",{staticClass:"erro-holder"},[t.showResponse?e("div",{staticClass:"erro-text",class:{error:t.isError}},[t._v("\n          "+t._s(t.response)+"\n        ")]):t._e()]),t._v(" "),"Coinpayment"==t.paymentMethod?e("div",{staticClass:"scan-button-holder"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.onRequest,expression:"onRequest"}],staticClass:"custom-btn processing right"},[e("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Processing")])]),t._v(" "),e("form",{directives:[{name:"show",rawName:"v-show",value:!t.onRequest,expression:"!onRequest"}],attrs:{id:"coinpayments-form",action:"https://www.coinpayments.net/index.php",method:"post"}},[e("input",{attrs:{type:"hidden",name:"cmd",value:"_pay_simple"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"reset",value:"1"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"merchant",value:"e4d65107efb4a4e6354264e73d30fb48"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"item_name"},domProps:{value:t.plan.planName}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"currency",value:"USD"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"amountf"},domProps:{value:t.amount}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"want_shipping",value:"0"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"custom"},domProps:{value:t.userID}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"ipn_url",value:"neinachukwu123"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"callback_url",value:"https://renexholdings.com/api/transactions/create-payment"}}),t._v(" "),e("input",{attrs:{type:"image",src:"https://www.coinpayments.net/images/pub/buynow-grey.png",alt:"Buy Now with CoinPayments.net"}})]),t._v(" "),e("nuxt-link",{staticClass:"green-button w-button",attrs:{to:"/dashboard/deposit"}},[t._v("Cancel Deposit")])],1):e("div",{staticClass:"scan-button-holder"},[t.onRequest?e("div",{staticClass:"custom-btn processing right"},[e("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Processing")])]):e("div",{staticClass:"green-button-pad"},[e("span",{staticClass:"green-button w-button",on:{click:t.makeDeposit}},[t._v("Make Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"green-button w-button",attrs:{to:"/dashboard/deposit"}},[t._v("Cancel Deposit")])],1)],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"balance-header-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Deposit Comfirmation")])])},function(){var t=this._self._c;return t("div",{staticClass:"scan-toptext-holder"},[t("div",{staticClass:"down-logo-texts"},[this._v("You can scan the code below.")])])},function(){var t=this._self._c;return t("div",{staticClass:"scan-toptext-holder down"},[t("div",{staticClass:"down-logo-texts"},[this._v("\n              Or copy the wallet address below.\n            ")])])},function(){var t=this._self._c;return t("div",{staticClass:"details-top-holder"},[t("div",{staticClass:"details-texts-holder"},[t("div",{staticClass:"main-header"},[this._v("Deposit Details")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"light-table-holder table-green"},[e("div",{staticClass:"sn-holder head"},[e("h1",{staticClass:"table-header head"},[t._v("S/N")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder long head"},[e("h1",{staticClass:"table-header head"},[t._v("Title")])]),t._v(" "),e("div",{staticClass:"table-amount-holder long head"},[e("h1",{staticClass:"table-header head"},[t._v("Description")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("1.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Date")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("2.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("No Profit")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("3.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Duration")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"light-table-holder"},[e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("4.")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Principal Return")])]),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Yes (Return 100% Principal)")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("5")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Wallet")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("6.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Deposit")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("7.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Total Return")])])}],!1,null,null,null);e.default=component.exports}}]);