(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f74b8be"],{"1ad1":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nav_wrap"},[s("div",{staticClass:"nav_side"},[s("div",{staticClass:"first_activity"},[s("h4",{staticClass:"title"},[t._v("最新活動 -")]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("清倉大拍賣 全面9折")])]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("2021年必備款式")])]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("超夯人氣款TOP10")])]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("BASIC百搭 日常單品")])])]),s("div",{staticClass:"sort"},[s("h4",{staticClass:"title"},[t._v("商品分類 -")]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("Top上衣")])]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("Bottom下身")])]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("Dress洋裝")])]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("Outer外套")])]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("Accessories飾品")])]),s("div",[s("a",{attrs:{href:"javascript:;"}},[t._v("Shoes/Bags鞋包")])])])])])}],r={name:"NavSide"},n=r,c=(s("5204"),s("2877")),o=Object(c["a"])(n,e,i,!1,null,"88070574",null);a["a"]=o.exports},"24b7":function(t,a,s){"use strict";s("9a69")},"351b":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page_bar"},[s("div",{staticClass:"page_wrap"},t._l(t.pageLength,(function(a,e){return s("div",{key:e,staticClass:"page"},[s("a",{class:{current:t.currentIndex==e},attrs:{href:"javascript:;"},on:{click:function(a){return t.goPage(e)}}},[t._v(" "+t._s(e+1))])])})),0)])},i=[],r=s("46ba"),n={name:"PageBar",data(){return{pageLength:[],currentIndex:0}},props:{pages:{type:Array,default(){return[]}}},watch:{pages(t){t&&(this.pageLength=this.pages)}},methods:{goPage(t){const a=document.documentElement;t!==this.currentIndex&&(this.currentIndex=t,this.$bus.$emit("page",t),Object(r["a"])(a,20))}}},c=n,o=(s("3988"),s("2877")),d=Object(o["a"])(c,e,i,!1,null,"59ea9eeb",null);a["a"]=d.exports},3988:function(t,a,s){"use strict";s("f1dd")},5204:function(t,a,s){"use strict";s("5d51")},"5d51":function(t,a,s){},"74b0":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Goods"},[s("div",{staticClass:"container"},[s("nav",{ref:"navList",staticClass:"nav_list"},[s("nav-side")],1),s("div",{staticClass:"goods_item"},t._l(t.Goods,(function(a,e){return s("div",{key:e,staticClass:"goods"},[s("a",{staticClass:"goods_wrap",attrs:{href:"/new/"+t.goodsId},on:{mouseover:function(s){return t.getId(a.id)},click:function(a){return t.goInfo()}}},[s("img",{staticClass:"goods_img",attrs:{src:a.img,alt:""}}),s("div",{staticClass:"goods_name"},[s("a",{attrs:{href:"/new/"+t.goodsId}},[t._v(" "+t._s(a.goodsName))])]),s("div",{staticClass:"price"},[s("span",{staticClass:"new_price"},[t._v("NT$"+t._s(a.newPrice))]),s("span",{staticClass:"old_price"},[t._v("NT$"+t._s(a.oldPrice))])])])])})),0)]),t._t("pageBar")],2)},i=[],r=s("1ad1"),n={name:"Goods",data(){return{Goods:[],page:0,goodsId:0}},components:{NavSide:r["a"]},props:{countData:{type:Object,default(){return{}}}},watch:{countData(t){this.Goods=t[this.page]}},mounted(){this.$bus.$on("page",t=>{t!==this.page&&(this.page=t,this.Goods=this.countData[this.page])})},destroyed(){this.$bus.$off("page")},methods:{getId(t){this.goodsId=t},goInfo(){event.preventDefault();const t=this.Goods[0].sort;this.$store.commit("putGoodsList",this.Goods),this.$router.push(`/${t}/${this.goodsId}`)}}},c=n,o=(s("24b7"),s("2877")),d=Object(o["a"])(c,e,i,!1,null,"1fe13ec7",null);a["a"]=d.exports},"9a69":function(t,a,s){},dc17:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"new"},[s("goods",{attrs:{countData:t.countData},scopedSlots:t._u([{key:"pageBar",fn:function(){return[s("page-bar",{attrs:{pages:t.pages}})]},proxy:!0}])})],1)},i=[],r=s("74b0"),n=s("351b"),c=s("735b"),o={name:"New",data(){return{countData:null,completedData:!1,pages:null}},components:{Goods:r["a"],PageBar:n["a"]},created(){Object(c["a"])().then(t=>{this.countData=t.data[1].new,this.pages=Object.keys(t.data[1].new)})},activated(){document.title=this.$route.meta.title},watch:{countData(t){t&&(this.completedData=!0)}}},d=o,u=s("2877"),v=Object(u["a"])(d,e,i,!1,null,"63f1059c",null);a["default"]=v.exports},f1dd:function(t,a,s){}}]);
//# sourceMappingURL=chunk-2f74b8be.802efc26.js.map