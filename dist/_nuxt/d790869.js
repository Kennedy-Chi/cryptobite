(window.webpackJsonp=window.webpackJsonp||[]).push([[48,20,21,22],{315:function(t,e,r){var content=r(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(143).default)("99376990",content,!0,{sourceMap:!1})},316:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(143).default)("0297ffec",content,!0,{sourceMap:!1})},324:function(t,e,r){"use strict";r(315)},325:function(t,e,r){var o=r(142)((function(i){return i[1]}));o.push([t.i,".dashboard-logo{max-width:120px}",""]),o.locals={},t.exports=o},326:function(t,e,r){"use strict";r(316)},327:function(t,e,r){var o=r(142)((function(i){return i[1]}));o.push([t.i,"img.menu-close{cursor:pointer;right:-180px;top:20px}",""]),o.locals={},t.exports=o},328:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(48),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return r=e.sent,e.next=6,r.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),l=r(56),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-footer"},[e("div",[t._v("\n    "+t._s((new Date).getFullYear())+" Copyright "+t._s(t.company.companyName)+", All\n    Rights Reserved.\n  ")])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){"use strict";r.r(e);r(57);var o=r(8),n=(r(48),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var r=document.querySelector("#top");r?r.appendChild(e):console.error("Could not find app node to append script element")},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:r=e.sent,t.company=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadScript(),this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},head:function(){return{link:[{href:"/css/Dashboard.css",type:"text/css",rel:"stylesheet"}]}}}),l=(r(324),r(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6445ef4447bf1a3b248f87b6_hamburger-menu-icon%203.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),e("img",{staticClass:"dashboard-logo",attrs:{src:"/images/Renex-Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("div",{attrs:{id:"ytWidget"}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("\n          Hi, "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+" Welcome back.\n        ")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("div",{staticClass:"icon-holder gap"},[t.user.profilePicture?e("div",{staticClass:"top-profile-pics",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")"),backgroundSize:"cover",backgroundPosition:"center"}}):e("div",{staticClass:"top-profile-pics",style:{backgroundImage:"url(/images/avatar.svg)",backgroundSize:"cover",backgroundPosition:"center"}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-15",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(26),r(48),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),l=(r(326),r(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{show:t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d690df7d5dc496a17_decrease-text-indent-icon%201.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Renex-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cf4aba0ad5d0c1bc8ba2_four-squares-line-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Dashboard")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d85d0ef5c36bfabc9_wallet-money-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-withdraw-funds"==t.route},attrs:{to:"/dashboard/withdraw-funds"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460ca96a33287e54e85cda5_hand-money-income-dollar-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Withdraw")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c95a50cbb3577558d943_3d-modeling-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transactions")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9ddd6192761285fb9b0_chart-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit List")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-earnings"==t.route},attrs:{to:"/dashboard/earnings"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c7c6a5b90e89a2622c43_grow-money-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Earnings")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-notifications"==t.route},attrs:{to:"/dashboard/notifications"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Notification")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9bd5a61c167cdd48963_user-persona-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Profile")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-referrals"==t.route},attrs:{to:"/dashboard/referrals"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"/dashboard-images/referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Referrals")])]),t._v(" "),e("div",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @Renex Holdings Aps - "+t._s((new Date).getFullYear())+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(143).default)("4189f1dc",content,!0,{sourceMap:!1})},412:function(t,e,r){"use strict";var o=r(2),n=r(223).trim;o({target:"String",proto:!0,forced:r(413)("trim")},{trim:function(){return n(this)}})},413:function(t,e,r){var o=r(94).PROPER,n=r(4),l=r(224);t.exports=function(t){return n((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||o&&l[t].name!==t}))}},414:function(t,e,r){"use strict";r(372)},415:function(t,e,r){var o=r(142)((function(i){return i[1]}));o.push([t.i,".erro-holder{width:100%}.picture-holder label{cursor:pointer}.file-input{height:.1px;opacity:0;position:absolute;width:.1px}.profile-text-input{background-color:#181320;border:0 solid #000;border-radius:3px;color:#fff;height:50px;margin-bottom:0;padding-bottom:3px;padding-left:10px;padding-top:3px;width:100%}",""]),o.locals={},t.exports=o},459:function(t,e,r){"use strict";r.r(e);r(57),r(26);var o=r(16),n=r(8),l=(r(48),r(91),r(13),r(29),r(30),r(359),r(218),r(39),r(412),r(328)),c=r(329),d={data:function(){return{wallets:[],oldPassword:"",password:"",cPassword:"",avatar:"",rating:3,comment:"",showResponse:!1,showReviewResponse:!1,isError:!1,response:"",onRequest:!1,passwordError:!1,cPasswordError:!1,oldPasswordError:!1}},methods:{callResponse:function(t,e){var r=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){r.showResponse=!1}),6e3)},checkErrorInputs:function(input,data){if("oldPassword"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".oldPassword").classList.add("error"),this.isError=!1,this.oldPasswordError=!0,this.onRequest=!1,!1;this.$el.querySelector(".oldPassword").classList.remove("error"),this.isError=!0,this.oldPasswordError=!1}else if("password"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".password").classList.add("error"),this.isError=!1,this.passwordError=!0,this.onRequest=!1,!1;this.$el.querySelector(".password").classList.remove("error"),this.isError=!0,this.passwordError=!1}else if("cPassword"==input){if(data!=this.password||""==data)return this.$el.querySelector(".cPassword").classList.add("error"),this.isError=!1,this.cPasswordError=!0,void(this.onRequest=!1);this.$el.querySelector(".cPassword").classList.remove("error"),this.isError=!0,this.cPasswordError=!1}},checkRating:function(t){this.rating>5?this.rating=5:this.rating<2&&(this.rating=2)},setArray:function(){this.checkArray=[{name:"oldPassword",data:this.oldPassword},{name:"password",data:this.password},{name:"cPassword",data:this.cPassword}]},setProfile:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,form;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(o.a)(picture.files,1),n=r[0],e.avatar=URL.createObjectURL(n),(form=new FormData).append("profilePicture",n),console.log(n),t.prev=5,t.next=8,e.$axios.patch("users/edit-picture/".concat(e.user._id),form);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(5),console.log(t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[5,10]])})))()},updatePassword:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.onRequest=!0,t.setArray(),t.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),t.isError){e.next=5;break}return e.abrupt("return");case 5:return form={oldPassword:t.oldPassword,password:t.password,cPassword:t.cPassword},e.prev=6,e.next=9,t.$axios.patch("/users/update-password",form);case 9:t.callResponse("Your password has been updated, logout and login to continue",!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),t.callResponse(e.t0,!0);case 15:case"end":return e.stop()}}),e,null,[[6,12]])})))()},submitComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.onRequest=!0,!(t.comment.trim().length<30)){e.next=4;break}return t.callResponse("Comment cannot be less than 30 characters",!0),e.abrupt("return");case 4:return form={username:t.user.username,profilePicture:t.user.profilePicture,rating:t.rating,commented:!0,comment:t.comment,time:(new Date).getTime()},e.prev=5,e.next=8,t.$axios.patch("/users/comment/".concat(t.user.username),form);case 8:t.callResponse("Comment updates successfully.",!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),t.callResponse(e.t0.response.data.message,!0);case 14:case"end":return e.stop()}}),e,null,[[5,11]])})))()},updateWallet:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.onRequest=!0,form={wallets:t.wallets,user:t.user},e.prev=2,e.next=5,t.$axios.patch("/wallet",form);case 5:t.callResponse("Wallet has been updated successfully",!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()},getWallets:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:r=e.sent,t.wallets=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/comment/?username=".concat(t.user.username));case 3:r=e.sent,t.rating=r.data.data.rating,t.comment=r.data.data.comment,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.callResponse(e.t0.response.data.message,!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getWallets(),this.getComment()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardNavigation:r(330).default,DashboardHeader:c.default,DashboardFooter:l.default}},v=(r(414),r(56)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"change-password-holder deposit"},[e("div",{staticClass:"change-password"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"profile-top-holder"},[e("h1",{staticClass:"main-heading ful"},[t._v("Profile")]),t._v(" "),e("div",{staticClass:"profile-flex"},[""!=t.avatar?e("div",{staticClass:"picture-holder",style:{backgroundImage:" url(".concat(t.avatar,")"),backgroundSize:"cover",backgroundPosition:"center"}},[e("label",{attrs:{for:"picture"}},[e("img",{staticClass:"edit-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/643bfe657467a16ed74d14fc_edit-pen-icon%20(1)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{type:"file",id:"picture",accept:".png, .jpg, .jpeg"},on:{change:t.setProfile}})])]):t.user.profilePicture?e("div",{staticClass:"picture-holder",style:{background:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")"),backgroundSize:"cover",backgroundPosition:"center"}},[e("label",{attrs:{for:"picture"}},[e("img",{staticClass:"edit-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/643bfe657467a16ed74d14fc_edit-pen-icon%20(1)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{type:"file",id:"picture"},on:{change:t.setProfile}})])]):e("div",{staticClass:"picture-holder",style:{backgroundImage:"url(/images/avatar.svg)",backgroundSize:"cover",backgroundPosition:"center"}},[e("label",{attrs:{for:"picture"}},[e("img",{staticClass:"edit-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/643bfe657467a16ed74d14fc_edit-pen-icon%20(1)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{type:"file",id:"picture",accept:".png, .jpg, .jpeg"},on:{change:t.setProfile}})])])])]),t._v(" "),e("div",{staticClass:"profile-content-1"},[e("div",{staticClass:"input-holder"},[e("div",{staticClass:"profile-form w-form"},[e("div",[e("div",{staticClass:"profile-form-content"},[e("div",{staticClass:"profile-form-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"profile-inputs-holder"},[e("div",{staticClass:"profile-full-holder"},[e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"".concat(t.user.firstName)}})]),t._v(" "),e("div",{staticClass:"profile-full-holder"},[e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"".concat(t.user.lastName)}})]),t._v(" "),e("div",{staticClass:"profile-full-holder"},[e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"".concat(t.user.username)}})]),t._v(" "),e("div",{staticClass:"profile-full-holder"},[e("input",{staticClass:"profile-text-input w-input",attrs:{type:"tel",maxlength:"256",placeholder:"".concat(t.user.phoneNumber)}})]),t._v(" "),e("div",{staticClass:"profile-full-holder"},[e("input",{staticClass:"profile-text-input w-input",attrs:{type:"email",maxlength:"256",placeholder:"".concat(t.user.email)}})]),t._v(" "),e("div",{staticClass:"profile-full-holder"},[e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"".concat(t.user.country)}})]),t._v(" "),e("div",{staticClass:"profile-full-holder com"},[e("div",{staticClass:"rate"},[e("h1",{staticClass:"sub-heading comment"},[t._v("Make Comment")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rating,expression:"rating"}],staticClass:"profile-text-input rating w-input",attrs:{type:"number",maxlength:"256",placeholder:"Rating"},domProps:{value:t.rating},on:{change:t.checkRating,input:function(e){e.target.composing||(t.rating=e.target.value)}}})]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"profile-text-input comment w-input",attrs:{placeholder:"Write a Review About Us....",maxlength:"5000"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),e("div",{staticClass:"erro-holder"},[t.showResponse?e("div",{staticClass:"erro-text",class:{error:t.isError}},[t._v("\n                          "+t._s(t.response)+"\n                        ")]):t._e()]),t._v(" "),t.onRequest?e("div",{staticClass:"custom-btn processing"},[e("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Processing")])]):e("span",{staticClass:"green-button w-button",on:{click:t.submitComment}},[t._v("Submit Review")])])])]),t._v(" "),e("div",{staticClass:"profile-form-holder"},[t._m(1),t._v(" "),e("div",{staticClass:"profile-inputs-holder"},[e("div",{staticClass:"profile-full-holder"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.oldPasswordError,expression:"oldPasswordError"}],staticClass:"sign-label error oldPassword",attrs:{for:"username-2"}},[t._v("Passwords must be at least 6 characters")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],staticClass:"profile-text-input w-input",attrs:{type:"password",maxlength:"256",name:"password",placeholder:"Old Password"},domProps:{value:t.oldPassword},on:{input:function(e){e.target.composing||(t.oldPassword=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"profile-full-holder"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.passwordError,expression:"passwordError"}],staticClass:"sign-label error password",attrs:{for:"username-2"}},[t._v("Passwords must be at least 6 characters")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"profile-text-input w-input",attrs:{type:"password",maxlength:"256",name:"password",placeholder:"New Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"profile-full-holder"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.cPasswordError,expression:"cPasswordError"}],staticClass:"sign-label error cPassword",attrs:{for:"username-2"}},[t._v("Passwords do not match")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"profile-text-input w-input",attrs:{type:"password",maxlength:"256",name:"password-3",placeholder:"Confirm Password"},domProps:{value:t.cPassword},on:{input:function(e){e.target.composing||(t.cPassword=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"erro-holder"},[t.showResponse?e("div",{staticClass:"erro-text",class:{error:t.isError}},[t._v("\n                        "+t._s(t.response)+"\n                      ")]):t._e()]),t._v(" "),e("div",{staticClass:"profile-button-holder full"},[t.onRequest?e("div",{staticClass:"custom-btn processing"},[e("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Processing")])]):e("span",{staticClass:"green-button w-button",on:{click:t.updatePassword}},[t._v("Update Password")])])])]),t._v(" "),e("div",{staticClass:"profile-form-holder"},[t._m(2),t._v(" "),e("div",{staticClass:"profile-inputs-holder wallet"},[t._l(t.wallets,(function(r){return e("div",{key:r._id,staticClass:"profile-full-holder"},[e("div",{staticClass:"wallet-name"},[t._v(t._s(r.name))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.walletAddress,expression:"wallet.walletAddress"}],staticClass:"profile-text-input",attrs:{type:"text",maxlength:"256",placeholder:"Set Wallet Address"},domProps:{value:r.walletAddress},on:{input:function(e){e.target.composing||t.$set(r,"walletAddress",e.target.value)}}})])})),t._v(" "),e("div",{staticClass:"erro-holder"},[t.showResponse?e("div",{staticClass:"erro-text",class:{error:t.isError}},[t._v("\n                        "+t._s(t.response)+"\n                      ")]):t._e()]),t._v(" "),e("div",{staticClass:"profile-button-holder full"},[t.onRequest?e("div",{staticClass:"custom-btn processing"},[e("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Processing")])]):e("span",{staticClass:"custom-btn w-button",on:{click:t.updateWallet}},[t._v("Update Wallet")])])],2)])])])])])])],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"sub-top-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("Personal Information")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-top-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("Change Password")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-top-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("Update Wallet")])])}],!1,null,null,null);e.default=component.exports}}]);