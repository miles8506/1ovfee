(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a782e9"],{"1ad1":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"nav_wrap"},[e("div",{staticClass:"nav_side"},[e("div",{staticClass:"first_activity"},[e("h4",{staticClass:"title"},[t._v("最新活動 -")]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("清倉大拍賣 全面9折")])]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("2021年必備款式")])]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("超夯人氣款TOP10")])]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("BASIC百搭 日常單品")])])]),e("div",{staticClass:"sort"},[e("h4",{staticClass:"title"},[t._v("商品分類 -")]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("Top上衣")])]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("Bottom下身")])]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("Dress洋裝")])]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("Outer外套")])]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("Accessories飾品")])]),e("div",[e("a",{attrs:{href:"javascript:;"}},[t._v("Shoes/Bags鞋包")])])])])])}],r={name:"NavSide"},o=r,n=(e("5204"),e("2877")),c=Object(n["a"])(o,i,a,!1,null,"88070574",null);s["a"]=c.exports},"2ea4":function(t,s,e){},3318:function(t,s,e){},5204:function(t,s,e){"use strict";e("5d51")},5546:function(t,s,e){"use strict";(function(t){e.d(s,"b",(function(){return i})),e.d(s,"a",(function(){return a})),e.d(s,"c",(function(){return r}));e("1157");function i(s){t.ajax({url:"http://127.0.0.1:3000/wish",type:"get",data:{data:s},success(t){}})}function a(t){let s=JSON.parse(localStorage.getItem("login")),e=s.wishList;if(e.length>0){const s=e.findIndex(s=>s.id==t.id);-1===s?e.push(t):e.splice(s,1)}else e.push(t);s=JSON.stringify(s),localStorage.setItem("login",s)}function r(s,e){t.ajax({url:"http://127.0.0.1:3000/deletewish",type:"get",data:{data:s},success(t){1==t&&e()}})}}).call(this,e("1157"))},"5d51":function(t,s,e){},"80fa":function(t,s,e){"use strict";e("3318")},"84f8":function(t,s,e){"use strict";e("c8b7")},b201:function(t,s,e){"use strict";e("2ea4")},bd98:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"GoodsInfo"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"nav_list"},[e("nav-side")],1),e("info-content",{attrs:{currentGoods:t.currentGoods}}),e("info-cart",{attrs:{currentGoods:t.currentGoods}})],1)])},a=[],r=e("1ad1"),o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info_content"},t._l(t.currentGoods.moreImg,(function(t,s){return e("div",{key:s,staticClass:"goods_img"},[e("img",{attrs:{src:t,alt:""}})])})),0)},n=[],c={name:"InfoContent",data(){return{moreImg:[]}},props:{currentGoods:{type:Object,default(){return{}}}}},d=c,l=(e("80fa"),e("2877")),u=Object(l["a"])(d,o,n,!1,null,"feb4c4ea",null),v=u.exports,h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info_cart"},[e("div",{staticClass:"info_wrap"},[e("h2",{staticClass:"title"},[t._v(t._s(t.currentGoods.goodsName))]),e("div",{staticClass:"text"},[t._v("此款版型適中")]),e("div",{staticClass:"wish"},[e("span",{staticClass:"wish_logo",class:{current:t.isWished},on:{click:t.addWish}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isWished,expression:"isWished"}],staticClass:"added_mark"}),t._v("")]),t._v(" ADD WISH ")]),e("div",{staticClass:"price"},[e("span",{staticClass:"new_price"},[t._v("NT$"+t._s(t.currentGoods.newPrice))]),e("span",{staticClass:"old_price"},[t._v("NT$"+t._s(t.currentGoods.oldPrice))])]),e("div",{staticClass:"choose_wrap"},[e("div",{staticClass:"size_box"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.goodsSize,expression:"goodsSize"}],staticClass:"size",attrs:{name:"size",id:"size"},on:{change:[function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.goodsSize=s.target.multiple?e:e[0]},t.setFlag]}},[e("option",{ref:"sizeAlert",attrs:{value:""}},[t._v("SIZE")]),t._l(t.currentGoods.size,(function(s,i){return e("option",{key:i,domProps:{value:s}},[t._v(" "+t._s(s)+" ")])}))],2)]),e("div",{staticClass:"quantity-form"},[e("span",{staticClass:"decrement",on:{click:t.decrement}},[t._v("-")]),e("input",{staticClass:"itxt",attrs:{type:"text",oninput:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:t.count},on:{change:t.setCount}}),e("span",{staticClass:"increment",on:{click:t.increment}},[t._v("+")])])]),e("div",{staticClass:"gocart_icon"},[t.flag?e("a",{attrs:{href:"javascript:;"}},[t._v("請選擇尺寸")]):e("a",{attrs:{href:"/cart"},on:{click:t.goCart}},[t._v("添加至購物車")])]),t._m(0)])])},f=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info_detail"},[e("div",{staticClass:"detail_hd"},[e("span",[t._v("商品資訊")]),t._v(" / "),e("span",[t._v("洗滌方式")])]),e("div",{staticClass:"detail_bd"},[e("div",[t._v("1.深淺色請分開洗滌，以避免造成互相移染。")]),e("div",[t._v("2.請放入大小適中之細網洗衣袋細中弱速水洗，以保持商品型態。")]),e("div",[t._v("3.洗滌時，水溫請低於30℃；請使用中性洗劑；浸泡時間不宜過長。")]),e("div",[t._v("4.請勿使用漂白劑、螢光增白劑及衣物柔軟劑，以免破壞布料。")]),e("div",[t._v(" 5.不可濕放，以免衣物染色；請弱速輕脫水，不可烘乾，以免衣物縮水。 ")]),e("div",[t._v("6.清洗後請快速調整商品型態並吊掛晾乾即可。")]),e("div",[t._v("7.如需整燙，請以低溫墊布熨燙，溫度不可超過110℃。")]),e("div",[t._v("8.穿著時，請留意避免與配件包包等他物接觸摩擦。")])])])}],_=e("5546"),p={name:"InfoCart",data(){return{goodsSize:"",count:1,flag:!0,isWished:!1}},props:{currentGoods:{type:Object,default(){return{}}}},created(){if(null!==localStorage.getItem("login")){const t=JSON.parse(localStorage.getItem("login")).wishList;if(void 0!==t){const s=t.some(t=>t.id==this.currentGoods.id);this.isWished=!!s}else this.isWished=!1}},mounted(){this.$refs.sizeAlert.disabled=!0},methods:{decrement(){this.count>1?this.count--:this.count},increment(){this.count++},setCount(){this.count=event.target.value},setFlag(){this.flag&&(this.flag=!1)},goCart(){event.preventDefault();localStorage.getItem("login");if(null===localStorage.getItem("login"))return void this.$bus.$emit("mask","請先登入帳號");let t={};t.count=this.count,t.goodsName=this.currentGoods.goodsName,t.goodsSize=this.goodsSize,t.id=this.currentGoods.id,t.img=this.currentGoods.img,t.moreImg=this.currentGoods.moreImg,t.newPrice=this.currentGoods.newPrice,t.oldPrice=this.currentGoods.oldPrice,t.status=!0,t.sort=this.currentGoods.sort,this.$store.dispatch("putCart",t),this.$router.push("/cart")},addWish(){if(null===localStorage.getItem("login"))return void this.$bus.$emit("mask","請先登入帳號");Object(_["a"])(this.currentGoods),this.isWished=!this.isWished;const t=JSON.parse(localStorage.getItem("login"));Object(_["b"])(t)}}},m=p,g=(e("b201"),Object(l["a"])(m,h,f,!1,null,"d9b930c4",null)),C=g.exports,w={name:"GoodsInfo",data(){return{currentGoods:{},init:null}},components:{NavSide:r["a"],InfoContent:v,InfoCart:C},created(){let t=this.$store.state.goodsList.filter(t=>t.id==this.$route.params.goodsId);this.currentGoods=t[0]},mounted(){window.scroll(0,0),document.title="1ovfee-"+this.currentGoods.goodsName},computed:{refresh(){return this.$store.state.infoFlag}},watch:{refresh(){let t=this.$store.state.goodsList.filter(t=>t.id==this.$route.params.goodsId);this.currentGoods=t[0]}}},G=w,b=(e("84f8"),Object(l["a"])(G,i,a,!1,null,"05a4057a",null));s["default"]=b.exports},c8b7:function(t,s,e){}}]);
//# sourceMappingURL=chunk-24a782e9.b225bce5.js.map