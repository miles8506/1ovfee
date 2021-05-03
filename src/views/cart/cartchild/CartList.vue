<template>
  <div class="cart_list">
    <div class="goods_box goods_item">
      <input type="checkbox" class="check" />
      <div class="goods_img img_title">商品圖片</div>
      <div class="goods_name name_title">商品名稱</div>
      <div class="size size_title">尺寸</div>
      <div class="price price_title">特價/原價</div>
      <div class="quantity-form quantity_title">數量</div>
      <div class="delete delete_title">操作</div>
    </div>
    <div class="goods_box" v-for="(item, index) in cartList" :key="index">
      <input type="checkbox" class="check" />
      <div class="goods_img"><img :src="item.img" alt="" /></div>
      <div class="goods_name">{{ item.goodsName }}</div>
      <div class="size">{{ item.goodsSize }}</div>
      <div class="price">
        <span class="new_price">{{ item.newPrice }}</span
        >&nbsp;/
        <span class="old_price">{{ item.oldPrice }}</span>
      </div>
      <div class="quantity-form">
        <span class="decrement" @click="decrement(item.id, item.goodsSize)"
          >-</span
        >
        <input
          type="text"
          class="itxt"
          :value="item.count"
          @change="setCount(item.id, item.goodsSize)"
          oninput="value=value.replace(/[^\d]/g,'')"
        />
        <span class="increment" @click="increment(item.id, item.goodsSize)"
          >+</span
        >
      </div>
      <div class="delete">刪除</div>
    </div>
  </div>
</template>
<script>
//JS
import { filterData } from "assets/js/filterData.js";

export default {
  name: "CartList",
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    this.cartList.count = this.count;
  },
  methods: {
    // quantity-form -
    decrement(iid, size) {
      const data = filterData(this.cartList, iid, size);
      data.count > 1 ? data.count-- : data.count;
    },
    // quantity-form +
    increment(iid, size) {
      const data = filterData(this.cartList, iid, size);
      data.count++;
    },
    // quantity-form input
    setCount(iid, size) {
      const val = event.target.value;
      const data = filterData(this.cartList, iid, size);
      data.count = val;
    },
  },
};
</script>
<style scoped>
.goods_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: rgb(246, 243, 243);
  box-shadow: 0px 5px 3px -4px rgba(0, 0, 0, 0.4);
  color: #505050;
  cursor: default;
}

input {
  margin: 0;
}

/* hd */
.goods_item {
  height: 30px;
  margin-bottom: 5px;
  padding: 0 15px;
  border-bottom: 1px solid rgb(208, 208, 208);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  font-weight: 700;
}

.quantity_title {
  text-align: center;
  border: 0px !important;
}

.delete_title {
  cursor: default !important;
}

/* bd */
.img_title {
  line-height: 30px;
}

.goods_img {
  flex: 10%;
  height: 100%;
  text-align: center;
}

.goods_img img {
  height: 100%;
}

.goods_name {
  flex: 20%;
  text-align: center;
}

.size {
  flex: 3%;
  text-align: center;
}

.price {
  text-align: center;
  flex: 10%;
}

.new_price {
  color: #000;
  font-weight: 500;
}

.old_price {
  text-decoration: line-through;
}

.quantity-form {
  flex: 5%;
  border: 1px solid #999;
}

.quantity-form .decrement,
.quantity-form .increment {
  display: inline-block;
  width: 10%;
  text-align: center;
  font-size: 20px;
  color: gray;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.quantity-form .decrement {
  text-align: right;
}

.quantity-form .increment {
  text-align: left;
}

.quantity-form .decrement:hover,
.quantity-form .increment:hover {
  color: #292727;
}
.quantity-form .itxt {
  border: 0;
  width: 80%;
  height: 30px;
  background-color: rgb(246, 243, 243);
  text-align: center;
  outline: none;
}

.delete {
  flex: 10%;
  text-align: center;
  cursor: pointer;
}
</style>