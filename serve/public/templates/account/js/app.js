(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"templates/account/js/"+({}[e]||e)+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-08dad861":1,"chunk-1c0c90ff":1,"chunk-1ca9b443":1,"chunk-1fbf914a":1,"chunk-423fc245":1,"chunk-7262e070":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="templates/account/css/"+({}[e]||e)+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],h.parentNode.removeChild(h),n(c)},h.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=l;c.push([0,"template-elementUI","template-libs"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),a={token:function(e){return e.user.token},email:function(e){return e.user.email},mobile:function(e){return e.user.mobile},created_at:function(e){return e.user.created_at},webTitle:function(e){return e.web.title}},c=a,u=(n("d3b7"),n("5f87")),i=n("7ded"),s={state:{token:Object(u["a"])(),mobile:"",created_at:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_MOBILE:function(e,t){e.mobile=t},SET_CREATE:function(e,t){e.created_at=t}},actions:{login:function(e,t){var n=e.commit;return new Promise((function(e,r){Object(i["c"])(t).then((function(t){n("SET_TOKEN",t.data.body.access_token),Object(u["c"])(t.data.body.access_token),e(t)})).catch((function(e){r(e)}))}))},getUserInfo:function(e){var t=e.commit;return new Promise((function(e,n){Object(i["b"])().then((function(n){t("SET_MOBILE",n.data.body.mobile),t("SET_CREATE",n.data.body.created_at),e(n)})).catch((function(e){n(e)}))}))},logout:function(e){var t=e.commit;Object(u["b"])(),t("SET_TOKEN","")}}},l=s,f={state:{title:""},mutations:{SET_TITLE:function(e,t){e.title=t}},actions:{setTitle:function(e,t){var n=e.commit;n("SET_TITLE",t)}}},h=f;r["default"].use(o["a"]);var d=new o["a"].Store({modules:{user:l,web:h},getters:c});t["a"]=d},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c={name:"App"},u=c,i=(n("5c0b"),n("2877")),s=Object(i["a"])(u,o,a,!1,null,null,null),l=s.exports,f=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"web-container"},[n("div",{staticClass:"web-header"},[n("div",[e._v(e._s(e.$store.getters.webTitle))]),n("div",{staticClass:"logout-btn",on:{click:e.logout}},[e._m(0)])]),n("div",{staticClass:"web-content"},[n("back-menu"),n("router-view")],1)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("退出"),n("i",{staticClass:"iconfont icontuichu1"})])}],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"back-menu"},[n("ul",[n("li",{class:{"is-active":1===e.activeIndex},on:{click:function(t){return e.toPage(1)}}},[e._v("商城列表")]),n("li",{class:{"is-active":2===e.activeIndex},on:{click:function(t){return e.toPage(2)}}},[e._v("消费记录")]),n("li",{class:{"is-active":4===e.activeIndex},on:{click:function(t){return e.toPage(4)}}},[e._v("用户设置")])])])},m=[],b=(n("b0c0"),{data:function(){return{activeIndex:1}},created:function(){"Shops"===this.$route.name&&(this.activeIndex=1),"Purchase"===this.$route.name&&(this.activeIndex=2),"Wallet"===this.$route.name&&(this.activeIndex=3),"User"===this.$route.name&&(this.activeIndex=4)},methods:{toPage:function(e){this.activeIndex=e,1===e&&this.$router.push({name:"Shops"}),2===e&&this.$router.push({name:"Purchase"}),3===e&&this.$router.push({name:"Wallet"}),4===e&&this.$router.push({name:"User"})}}}),v=b,g=(n("6e83"),Object(i["a"])(v,p,m,!1,null,"2f0cded4",null)),y=g.exports,k={components:{BackMenu:y},methods:{logout:function(){var e=this;this.$store.dispatch("logout").then((function(){e.$message.success({message:"已安全退出",duration:2e3}),setTimeout((function(){e.$router.push({name:"Login"})}),2e3)}))}}},_=k,E=Object(i["a"])(_,h,d,!1,null,null,null),O=E.exports;r["default"].use(f["a"]);var w=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:function(e){return n.e("chunk-7262e070").then(function(){var t=[n("aeab")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/register",name:"Register",component:function(e){return n.e("chunk-1ca9b443").then(function(){var t=[n("4eb4")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shops",component:O,children:[{path:"",name:"Shops",component:function(e){return n.e("chunk-08dad861").then(function(){var t=[n("0c67")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"create",name:"ShopCreate",component:function(e){return n.e("chunk-423fc245").then(function(){var t=[n("6f96")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/purchase",component:O,children:[{path:"",name:"Purchase",component:function(e){return n.e("chunk-1c0c90ff").then(function(){var t=[n("b375")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/wallet",component:O,children:[{path:"",name:"Wallet",component:function(e){return n.e("chunk-2d0aa5c8").then(function(){var t=[n("114f")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/user",component:O,children:[{path:"",name:"User",component:function(e){return n.e("chunk-1fbf914a").then(function(){var t=[n("a144")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],T=new f["a"]({mode:"history",routes:w}),j=n("4360"),x=n("5c96"),S=n.n(x),P=(n("9d60"),n("c975"),n("96cf"),n("1da1")),I=n("5f87"),$=["/login","/register"];T.beforeEach(function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=document.title,j["a"].dispatch("setTitle",o),!Object(I["a"])()){e.next=14;break}return e.prev=3,"/login"===t.path?r("/shops"):r(),e.next=7,j["a"].dispatch("getUserInfo");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),401===e.t0.response.status&&(x["Message"].error({message:"登录超时，请重新登录",duration:1e3}),setTimeout((function(){j["a"].dispatch("logout"),r("/login?redirect=".concat(t.path))}),1e3));case 12:e.next=15;break;case 14:-1===$.indexOf(t.path)?r("/login?redirect=".concat(t.path)):r();case 15:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t,n,r){return e.apply(this,arguments)}}()),r["default"].use(S.a),new r["default"]({router:T,store:j["a"],render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i}));var r=n("a78e"),o=n.n(r),a="backcenterToken";function c(){return o.a.get(a)}function u(e){return o.a.set(a,e)}function i(){return o.a.remove(a)}},"6e83":function(e,t,n){"use strict";var r=n("e711"),o=n.n(r);o.a},"7ded":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return i}));var r=n("b775");function o(e){return Object(r["a"])({url:"/user/login",method:"post",data:e})}function a(e){return Object(r["a"])({url:"/user/register",method:"post",data:e})}function c(){return Object(r["a"])({url:"/user/info",method:"get"})}function u(e){return Object(r["a"])({url:"/user/edit",method:"put",data:e})}function i(){return Object(r["a"])({url:"/user/refresh",method:"get"})}},"83d6":function(e,t){e.exports={apiURL:"//asset.min-eshop.vip/api"}},"9c0c":function(e,t,n){},"9d60":function(e,t,n){},b775:function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),o=n.n(r),a=n("4360"),c=n("5f87"),u=n("83d6"),i=n.n(u),s=o.a.create({baseURL:i.a.apiURL});s.interceptors.request.use((function(e){return a["a"].getters.token&&(e.headers["Authorization"]="Bearer "+Object(c["a"])()),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t["a"]=s},e711:function(e,t,n){}});