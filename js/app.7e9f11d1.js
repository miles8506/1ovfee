(function(t){function e(e){for(var a,i,n=e[0],c=e[1],l=e[2],u=0,h=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var n=s[i];0!==r[n]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},r={app:0},o=[];function n(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-24a782e9":"b225bce5","chunk-34e3a5d9":"9e3a804c","chunk-6b9162f2":"e4357930","chunk-6d8c80d0":"bc94cfaa","chunk-b26e8d20":"e488c402","chunk-2c749a2e":"ae478071","chunk-2f74b8be":"802efc26","chunk-2febccc1":"884f6c2b","chunk-3933d712":"d6754eb9","chunk-b5fddda4":"a98466af"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s={"chunk-24a782e9":1,"chunk-34e3a5d9":1,"chunk-6b9162f2":1,"chunk-6d8c80d0":1,"chunk-2c749a2e":1,"chunk-2f74b8be":1,"chunk-2febccc1":1,"chunk-3933d712":1,"chunk-b5fddda4":1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=new Promise((function(e,s){for(var a="css/"+({}[t]||t)+"."+{"chunk-24a782e9":"da2665d4","chunk-34e3a5d9":"3c62f41c","chunk-6b9162f2":"bc5b3f16","chunk-6d8c80d0":"f05151cd","chunk-b26e8d20":"31d6cfe0","chunk-2c749a2e":"7f25cb6f","chunk-2f74b8be":"7f25cb6f","chunk-2febccc1":"8ed5ced4","chunk-3933d712":"7f25cb6f","chunk-b5fddda4":"14655369"}[t]+".css",r=c.p+a,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var l=o[n],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var h=document.getElementsByTagName("style");for(n=0;n<h.length;n++){l=h[n],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],d.parentNode.removeChild(d),s(o)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=n(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",h.name="ChunkLoadError",h.type=a,h.request=i,s[1](h)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/1ovfee/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"060b":function(t,e,s){"use strict";s("878b")},"13aa":function(t,e,s){},"1ce3":function(t,e){},"25f6":function(t,e,s){},3052:function(t,e,s){"use strict";s("da65")},"46ba":function(t,e,s){"use strict";function a(t,e,s){clearInterval(t.move),t.move=setInterval((function(){var a=(e-window.pageYOffset)/10;a<0?a=Math.floor(a):a>0&&(a=Math.ceil(a)),window.pageYOffset==e&&(clearInterval(t.move),s&&s()),window.scroll(0,window.pageYOffset+a)}),15)}s.d(e,"a",(function(){return a}))},"538c":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("mask-cover"),s("nav-bar"),s("keep-alive",{attrs:{exclude:"GoodsInfo,Login,Cart"}},[s("router-view")],1),s("top-icon"),s("nav-bottom")],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav_bar"},[s("service"),s("h1",{ref:"logoWrap"},[s("a",{staticClass:"logo",attrs:{href:"/"},on:{click:t.goHome}},[s("img",{attrs:{src:t.logoURL,alt:""}})])]),s("nav-item",{staticClass:"nav_item",class:{status:t.isShow},attrs:{navItem:t.navItem}}),s("div",{staticClass:"nav_m",on:{click:t.showList}},[t._v("")]),s("mobile-list",{attrs:{navItem:t.navItem,isShowM:t.isShowM},on:{showList:t.showList}})],1)},n=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav_item"},[s("ul",{ref:"itemWrap",staticClass:"item_wrap"},[t._l(t.navItem,(function(e,a){return s("li",{key:a},[s("a",{attrs:{href:t.pathURL[a]},on:{click:function(e){return t.goNext(a)}}},[t._v(t._s(e))])])})),s("li",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchValue,expression:"searchValue",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{input:[function(e){e.target.composing||(t.searchValue=e.target.value.trim())},t.searchData],focus:function(e){return t.clickipt("focus")},blur:[function(e){return t.clickipt("blur")},function(e){return t.$forceUpdate()}]}}),s("span",{staticClass:"search_icon",on:{click:t.goSearch}},[t._v("")]),s("search-list",{attrs:{searchValue:t.searchValue}})],1)],2)])},l=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"searchList"},[t.showList?s("div",t._l(t.searchArr,(function(e,a){return s("div",{key:a,staticClass:"search_item"},[s("div",{staticClass:"search_left"},[s("img",{attrs:{src:e.img,alt:""}})]),s("div",{staticClass:"search_right"},[s("a",{staticClass:"search_link",attrs:{href:"javascript:;"},on:{click:function(s){return t.goGoods(e.id,e.sort,e)}}},[s("div",{staticClass:"goods_name"},[t._v(t._s(e.goodsName))]),s("div",{staticClass:"pric"},[s("span",{staticClass:"new_price"},[t._v("NT"+t._s(e.newPrice))]),s("span",{staticClass:"old_price"},[t._v("NT$."+t._s(e.oldPrice))])]),s("div",{staticClass:"size"},[t._v(" SIZE: "),t._l(e.size,(function(e,a){return s("span",{key:a},[t._v(" "+t._s(e)+" ")])}))],2)])])])})),0):s("div",{staticClass:"nothing"},[s("span",[t._v("搜尋不到相關商品")])])])},h=[];function d(t,e){let s=null;return function(){s&&clearTimeout(s),s=setTimeout(()=>{t()},e)}}var m=s("b995"),f={name:"BlurSearch",data(){return{deBounce:null,searchArr:[],isShow:!1,showList:!1}},props:{searchValue:{type:String,default:""}},mounted(){this.$bus.$on("search",()=>{this.deBounce()}),this.deBounce=d(this.setSearch,500)},methods:{setSearch(){if(this.searchValue.length<1)return this.isShow=!1;this.isShow=!0,this.searchArr=[],Object(m["b"])(this.searchValue,this.searchArr).then(()=>{this.searchArr.length>0&&this.$store.dispatch("putSearchList",this.searchArr)})},goGoods(t,e,s){event.preventDefault(),Object(m["a"])(t,e).then(t=>{const e=[];e.push(s),this.$store.dispatch("putGoodsList",e).then(t=>{this.$router.push(`/${s.sort}/${s.id}`),this.$store.state.infoFlag=!this.$store.state.infoFlag})}).catch(t=>console.log(t))}},watch:{searchArr(t){t&&(t.length>0?this.showList=!0:this.showList=!1)}},destroyed(){this.$bus.$off("search")}},p=f,v=(s("fc96"),s("2877")),g=Object(v["a"])(p,u,h,!1,null,"f50ab7ca",null),b=g.exports,_=s("7fae"),w={name:"NavItem",data(){return{pathURL:["/home","/new","/hot","/popular"],searchValue:""}},mounted(){let t=window.innerWidth,e=0;window.addEventListener("resize",()=>{e<1||(t=window.innerWidth,t>1200?this.$refs.itemWrap.classList.remove("current"):this.$refs.itemWrap.classList.add("current"))}),window.addEventListener("scroll",()=>{Object(_["a"])().then(s=>{e=s,t>1200||(s>1?this.$refs.itemWrap.classList.add("current"):this.$refs.itemWrap.classList.remove("current"))})})},components:{SearchList:b},props:{navItem:{type:Array,default(){return[]}}},methods:{goNext(t){switch(event.preventDefault(),t){case 0:this.$router.push("/home");break;case 1:this.$router.push("/new");break;case 2:this.$router.push("/hot");break;case 3:this.$router.push("/popular");break}},searchData(){this.$bus.$emit("search")},clickipt(t){setTimeout(()=>{this.$bus.$emit("ipt",t)},500)},goSearch(){const t=this.$store.state.flag;this.$store.commit("putFlag",!t),this.$router.push("/search")}}},L=w,$=(s("060b"),Object(v["a"])(L,c,l,!1,null,"481ba326",null)),C=$.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"service",staticClass:"service"},[t._m(0),s("div",{staticClass:"account"},[t.isShowLog?s("div",{staticClass:"login"},[s("a",{attrs:{href:"/login"},on:{click:t.goLogin}},[s("span",{staticClass:"img"},[t._v("")]),t._v("Login")])]):s("div",{staticClass:"logout",on:{mouseenter:t.showMember,mouseleave:t.hideMember}},[t._m(1),s("member-list",{directives:[{name:"show",rawName:"v-show",value:t.isShowMember,expression:"isShowMember"}],on:{Logout:t.Logout}})],1),s("div",{staticClass:"cart",on:{mouseenter:t.showCart,mouseleave:t.hideCart}},[s("a",{attrs:{href:"/cart"},on:{click:t.goCart}},[s("span",{staticClass:"img"},[t._v("")]),t._v("Cart")]),s("cart-box",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{cartBox:t.cartBox}})],1)])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"social"},[s("div",{staticClass:"fb"},[s("a",{attrs:{href:"javascript:;"}},[t._v("")])]),s("div",{staticClass:"twitter"},[s("a",{attrs:{href:"javascript:;"}},[t._v("")])]),s("div",{staticClass:"line"},[s("a",{attrs:{href:"javascript:;"}},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("span",{staticClass:"img"},[t._v("")]),s("span",{staticClass:"user_name"},[t._v("會員管理")])])}],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart_box"},[t._l(t.cartBox,(function(e,a){return s("div",{key:a,staticClass:"cart_goods"},[s("div",{staticClass:"cart_left"},[s("img",{attrs:{src:e.img,alt:""}})]),s("div",{staticClass:"cart_right",on:{click:function(s){return t.goGoodsInfo(e)}}},[s("div",{staticClass:"goods_name"},[t._v(t._s(e.goodsName))]),s("div",{staticClass:"size"},[t._v("SIZE:"+t._s(e.goodsSize))]),s("div",{staticClass:"quantity"},[t._v("QTY:"+t._s(e.count))])])])})),s("div",{staticClass:"go_cart",on:{click:t.goCart}},[t._v("CHECK OUT")])],2)},I=[],x={name:"CartBox",props:{cartBox:{type:Array,default(){return[]}}},methods:{goGoodsInfo(t){const e=[];e.push(t),this.$store.commit("putGoodsList",e),this.$router.push(`/${t.sort}/${t.id}`),this.$store.state.infoFlag=!this.$store.state.infoFlag},goCart(){null!==localStorage.getItem("login")?this.$router.push("/cart"):this.$router.push("/login")}}},M=x,E=(s("5d04"),Object(v["a"])(M,y,I,!1,null,"f2b83168",null)),j=E.exports,O=s("a1b6"),N={name:"Service",data(){return{cartBox:[],isShow:!1,isShowLog:!0,isShowMember:null,userName:""}},components:{CartBox:j,MemberList:O["a"]},created(){null!==localStorage.getItem("login")&&(this.userName=localStorage.getItem("login"),this.isShowLog=!1)},mounted(){this.$bus.$on("user",()=>{this.userName=localStorage.getItem("login"),this.isShowLog=!1,this.isShowMember=!1})},methods:{goCart(){event.preventDefault(),null!==localStorage.getItem("login")?this.$router.push("/cart"):this.$router.push("/login")},showCart(){this.isShow=!0,this.cartBox=this.$store.state.cartList},hideCart(){this.isShow=!1},goLogin(){event.preventDefault(),this.$router.push("/login")},showMember(){this.isShowMember=!0},hideMember(){this.isShowMember=!1},Logout(){this.isShowLog=!0,localStorage.removeItem("login"),this.$router.push("/"),this.$bus.$emit("mask","帳號已登出")}}},T=N,B=(s("72b9"),Object(v["a"])(T,S,k,!1,null,"4bb77e4c",null)),P=B.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mobile_list",class:{slide_f:t.isShowM,slide_s:!t.isShowM}},[s("ul",{ref:"itemWrap",staticClass:"item_wrap"},[t._l(t.navItem,(function(e,a){return s("li",{key:a},[s("a",{attrs:{href:t.pathURL[a]},on:{click:function(e){return t.goNext(a)}}},[t._v(t._s(e))])])})),t.isShowLog?s("li",{staticClass:"login"},[s("a",{attrs:{href:"/login"},on:{click:t.goLogin}},[t._v("Login")])]):s("li",{staticClass:"logout"},[s("a",{attrs:{href:"javascript:;"},on:{click:t.memberSlide}},[s("span",{staticClass:"user_name"},[t._v("會員管理"),s("span",{ref:"slideIcon",staticClass:"img_icon"},[t._v("")])])])]),s("member-list",{directives:[{name:"show",rawName:"v-show",value:t.isShowMember,expression:"isShowMember"}],staticClass:"member_mobile",on:{Logout:t.Logout}}),s("li",{staticClass:"cart"},[s("a",{attrs:{href:"/cart"},on:{click:t.goCart}},[t._v("Cart")])])],2)])},W=[],V=s("d2c0"),U=V["a"],D=(s("96f3"),Object(v["a"])(U,A,W,!1,null,"9503a256",null)),R=D.exports,F={name:"NavBar",data(){return{navItem:["首頁","本週新品","熱銷現貨","人氣預定"],logoURL:"https://www.lovfee.com/Source/images/zh-TW/icons/logo.png",isShow:!1,isShowM:!1}},components:{NavItem:C,Service:P,MobileList:R},mounted(){window.addEventListener("scroll",()=>{Object(_["a"])().then(t=>{t>1?this.$refs.logoWrap.classList.add("current"):this.$refs.logoWrap.classList.remove("current")})}),this.$bus.$on("ipt",t=>{this.isShow="focus"==t}),this.$bus.$on("mobileList",()=>{this.isShowM=!this.isShowM})},methods:{goHome(){event.preventDefault(),"/home"!==this.$route.path&&this.$router.push("/")},showList(){this.isShowM=!this.isShowM}},destroyed(){this.$bus.$off("ipt"),this.$bus.$off("mobileList")}},G=F,z=(s("a815"),Object(v["a"])(G,o,n,!1,null,"121e30b4",null)),H=z.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav_bottom"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"footer_item"},[s("span",[s("a",{attrs:{href:"javascript:;"}},[t._v("ABOUT US")])]),t._v("| "),s("span",[s("a",{attrs:{href:"javascript:;"}},[t._v("HOW TO BUY")])]),t._v("| "),s("span",[s("a",{attrs:{href:"javascript:;"}},[t._v("VVIP SERVICE")])]),t._v("| "),s("span",[s("a",{attrs:{href:"javascript:;"}},[t._v("EVENT")])])]),s("div",{staticClass:"service_wrap"},[s("div",{staticClass:"service"},[t._v("SERVICE")]),s("div",{staticClass:"info"},[s("div",{staticClass:"email"},[t._v("E-MAIL：servicehelpyou.com")]),s("div",{staticClass:"phone"},[t._v("FREE TEL：0800-000-000（ AM8:00~PM22:00 ）")])])])]),s("div",{staticClass:"copyright"},[t._v("Copyright @2000~2200 1OVFEE ALL Rights Reserved")])])}],q={name:"NavBottom"},K=q,Z=(s("60b9"),Object(v["a"])(K,Y,J,!1,null,"055fe107",null)),Q=Z.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"topIcon",staticClass:"top_icon",on:{click:t.topScroll}},[t._v("")])},tt=[],et=s("5a01"),st=et["a"],at=(s("ae5a"),Object(v["a"])(st,X,tt,!1,null,"68a6625a",null)),it=at.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"mask_cover"},[s("div",{staticClass:"mask"}),s("div",{staticClass:"alert"},[s("div",{staticClass:"title"},[t._v("提示訊息")]),s("div",{staticClass:"text"},[t._v(t._s(t.text))]),s("div",{staticClass:"agree_btn",on:{click:t.agree}},[s("span",[t._v("確定")])])])])},ot=[],nt={name:"MaskCover",data(){return{flag:!1,text:""}},mounted(){this.$bus.$on("mask",t=>{this.text=t,this.flag=!0})},destroyed(){this.$bus.$off("mask")},methods:{agree(){this.flag=!1}}},ct=nt,lt=(s("3052"),Object(v["a"])(ct,rt,ot,!1,null,"20897deb",null)),ut=lt.exports,ht={name:"App",components:{NavBar:H,NavBottom:Q,TopIcon:it,MaskCover:ut}},dt=ht,mt=(s("7f05"),Object(v["a"])(dt,i,r,!1,null,"7b119dc4",null)),ft=mt.exports,pt=s("8c4f");const vt=pt["a"].prototype.push;pt["a"].prototype.push=function(t){return vt.call(this,t).catch(t=>t)};const gt=()=>Promise.all([s.e("chunk-b26e8d20"),s.e("chunk-2febccc1")]).then(s.bind(null,"b3d7")),bt=()=>Promise.all([s.e("chunk-b26e8d20"),s.e("chunk-2f74b8be")]).then(s.bind(null,"dc17")),_t=()=>s.e("chunk-24a782e9").then(s.bind(null,"bd98")),wt=()=>s.e("chunk-b5fddda4").then(s.bind(null,"c228")),Lt=()=>s.e("chunk-6b9162f2").then(s.bind(null,"ede4")),$t=()=>s.e("chunk-6d8c80d0").then(s.bind(null,"794b")),Ct=()=>s.e("chunk-34e3a5d9").then(s.bind(null,"9e41")),St=()=>Promise.all([s.e("chunk-b26e8d20"),s.e("chunk-2c749a2e")]).then(s.bind(null,"3ef1")),kt=()=>Promise.all([s.e("chunk-b26e8d20"),s.e("chunk-3933d712")]).then(s.bind(null,"d124"));a["a"].use(pt["a"]);const yt=[{path:"/",redirect:"/home",meta:{title:"1ovfee"}},{path:"/home",component:gt,meta:{title:"1ovfee"}},{path:"/new",component:bt,meta:{title:"1ovfee-本週新品"}},{path:"/new/:goodsId",component:_t},{path:"/hot/:goodsId",component:_t},{path:"/popular/:goodsId",component:_t},{path:"/cart",component:wt,meta:{title:"1ovfee-購物車"}},{path:"/login",component:Lt,meta:{title:"1ovfee-登入/註冊"}},{path:"/search",component:$t,meta:{title:"1ovfee-搜尋列表"}},{path:"/wishlist/:userid",component:Ct,meta:{title:"1ovfee-WishList"}},{path:"/hot",component:St,meta:{title:"1ovfee-熱銷現貨"}},{path:"/popular",component:kt,meta:{title:"1ovfee-人氣預定"}}],It=new pt["a"]({mode:"history",base:"/1ovfee/",routes:yt});var xt=It,Mt=s("2f62"),Et={putGoodsList(t,e){t.goodsList=e},putCart(t,e){let s=t.cartList.filter(t=>t.id===e.id&&t.goodsSize===e.goodsSize);if(0!==s.length){let e=t.cartList.find(t=>s[0].id&&s[0].goodsSize);e.count++}t.cartList.push(e)},putSearchList(t,e){t.searchList=e},putFlag(t,e){t.flag=e},logout(t,e){t.cartList=e},login(t,e){t.cartList=e}},jt={putCart(t,e){t.commit("putCart",e)},putGoodsList(t,e){return new Promise((s,a)=>{t.commit("putGoodsList",e),s("success")})},putSearchList(t,e){t.commit("putSearchList",e)}},Ot=s("1ce3"),Nt=s.n(Ot),Tt={};a["a"].use(Mt["a"]);let Bt={goodsList:[],cartList:[],searchList:[],flag:!0,infoFlag:!0};var Pt=new Mt["a"].Store({state:Bt,mutations:Et,actions:jt,modules:Nt.a,getters:Tt}),At=s("1157"),Wt=s.n(At);s("1b58"),s("ab8b"),s("3e48");a["a"].prototype.$=Wt.a,a["a"].prototype.$bus=new a["a"],a["a"].config.productionTip=!1,new a["a"]({router:xt,store:Pt,render:function(t){return t(ft)}}).$mount("#app")},"5a01":function(t,e,s){"use strict";(function(t){var a=s("46ba");e["a"]={name:"TopIcon",mounted(){let e=null;window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{let e=document.documentElement.scrollTop;e>200?t(this.$refs.topIcon).show(300):t(this.$refs.topIcon).hide(300)},50)})},methods:{topScroll(){let t=document.documentElement;Object(a["a"])(t,0)}}}}).call(this,s("1157"))},"5d04":function(t,e,s){"use strict";s("f437")},"60b9":function(t,e,s){"use strict";s("13aa")},"66be":function(t,e,s){"use strict";(function(t){function a(e,s){t.ajax({url:"http://127.0.0.1:3000/logout",type:"get",data:{cartList:e,user:s}})}s.d(e,"a",(function(){return a}))}).call(this,s("1157"))},"72b9":function(t,e,s){"use strict";s("fcfa")},"7f05":function(t,e,s){"use strict";s("c72c")},"7fae":function(t,e,s){"use strict";function a(){return new Promise((t,e)=>{t(document.documentElement.scrollTop),e("err")})}s.d(e,"a",(function(){return a}))},"878b":function(t,e,s){},"96f3":function(t,e,s){"use strict";s("25f6")},a1b6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"memberlist_wrap"},[s("div",{staticClass:"member_list"},[t._m(0),s("div",{staticClass:"wishlist_item"},[s("a",{attrs:{href:"/wishlist/"+t.userId},on:{click:t.goWishList,mouseover:t.pushUserId}},[t._v("Wish List")])]),s("div",{staticClass:"logout_item"},[s("a",{attrs:{href:"/logout"},on:{click:t.logout}},[t._v("登出")])])]),s("div",{staticClass:"member_list_m"},[s("div",{staticClass:"item_wrap"},[s("a",{attrs:{href:"javascript:;"},on:{click:t.goMember}},[t._v("會員資料")])]),s("div",{staticClass:"item_wrap"},[s("a",{attrs:{href:"/wishlist/"+t.userId},on:{click:t.goWishList,mouseover:t.pushUserId}},[t._v("Wish List")])]),s("div",{staticClass:"item_wrap"},[s("a",{attrs:{href:"/logout"},on:{click:function(e){return t.logout("refresh")}}},[t._v("登出")])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"member_item"},[s("a",{attrs:{href:""}},[t._v("會員資料")])])}],r=s("66be"),o={name:"Member",data(){return{userId:""}},methods:{logout(t){event.preventDefault();const e=JSON.parse(localStorage.getItem("login")).account,s=this.$store.state.cartList;this.$store.commit("logout",[]),Object(r["a"])(s,e),this.$emit("Logout",t)},pushUserId(){const t=JSON.parse(localStorage.getItem("login")).account;this.userId=t},goWishList(){event.preventDefault(),this.$bus.$emit("mobileList"),this.$router.push("/wishlist/"+this.userId)},goMember(){this.$bus.$emit("mobileList")}}},n=o,c=(s("b626"),s("2877")),l=Object(c["a"])(n,a,i,!1,null,"60c52640",null);e["a"]=l.exports},a815:function(t,e,s){"use strict";s("af71")},ae5a:function(t,e,s){"use strict";s("e1d8")},af71:function(t,e,s){},b626:function(t,e,s){"use strict";s("538c")},b995:function(t,e,s){"use strict";(function(t){function a(e,s){return new Promise((a,i)=>{t.ajax({url:"http://127.0.0.1:3000/search",type:"get",data:{data:e},success(t){s.push(...t),a()}})})}function i(e,s){return new Promise((a,i)=>{t.ajax({url:"http://127.0.0.1:3000/detail",type:"get",data:{iid:e,sort:s},success(t){const e=[];e.push(t),a(e)}})})}s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return i}))}).call(this,s("1157"))},c72c:function(t,e,s){},ca05:function(t,e,s){},d2c0:function(t,e,s){"use strict";(function(t){var a=s("a1b6");e["a"]={name:"MobileList",data(){return{pathURL:["/home","/new","/hot","/popular"],cartBox:[],isShowLog:!0,isShowMember:null,userName:"",isShowList:null}},props:{navItem:{type:Array,default(){return[]}},isShowM:{type:Boolean,default:!1}},components:{MemberList:a["a"]},created(){null!==localStorage.getItem("login")&&(this.userName=localStorage.getItem("login"),this.isShowLog=!1,this.isShowList=this.isShowM)},mounted(){this.$bus.$on("user",()=>{this.userName=localStorage.getItem("login"),this.isShowLog=!1,this.isShowMember=!1})},methods:{goNext(t){switch(event.preventDefault(),this.$emit("showList"),t){case 0:this.$router.push("/home");break;case 1:this.$router.push("/new");break;case 2:this.$router.push("/hot");break;case 3:this.$router.push("/popular");break}},goCart(){event.preventDefault(),this.$emit("showList"),null!==localStorage.getItem("login")?this.$router.push("/cart"):this.$router.push("/login")},goLogin(){event.preventDefault(),this.$emit("showList"),this.$router.push("/login")},showMember(){this.isShowMember=!0},hideMember(){this.isShowMember=!1},Logout(t){this.isShowLog=!0,localStorage.removeItem("login"),this.$router.push("/"),"refresh"==t&&this.$router.go(0),this.$bus.$emit("mask","帳號已登出")},memberSlide(){const e=this.$refs.slideIcon;e.classList.contains("current_f")?(e.classList.remove("current_f"),e.classList.add("current_s"),t(".member_mobile").stop().slideToggle(300)):e.classList.contains("current_s")?(e.classList.remove("current_s"),e.classList.add("current_f"),t(".member_mobile").stop().slideToggle(300)):(e.classList.add("current_f"),t(".member_mobile").stop().slideToggle(300))},showList(){console.log(123),this.$emit("showList")}}}}).call(this,s("1157"))},da65:function(t,e,s){},e1d8:function(t,e,s){},f437:function(t,e,s){},fc96:function(t,e,s){"use strict";s("ca05")},fcfa:function(t,e,s){}});
//# sourceMappingURL=app.7e9f11d1.js.map