<template>
  <div class="cart_list clearfix">
    <!-- hd -->
    <div class="goods_box goods_item">
      <label
        class="check"
        for="checkAllbox"
        :class="{ current: checkAll }"
        @click.prevent="setAll"
      >
        <input type="checkbox" id="checkAllbox" />
        <div class="fake"></div>
      </label>
      <div class="goods_img img_title">商品圖片</div>
      <div class="goods_name name_title">商品名稱</div>
      <div class="size size_title">尺寸</div>
      <div class="price price_title">特價/原價</div>
      <div class="quantity-form quantity_title">數量</div>
      <div class="delete delete_title">操作</div>
    </div>
    <!-- bd -->
    <div class="goods_box" v-for="(item, index) in cartList" :key="index">
      <label
        class="check"
        :class="{ current: item.status }"
        for="checkbox"
        @click.prevent="checked(item.id, item.goodsSize)"
      >
        <input type="checkbox" id="checkbox" />
        <div class="fake"></div>
      </label>
      <div class="goods_img"><img :src="item.img" alt="" /></div>
      <div class="goods_name">{{ item.goodsName }}</div>
      <div class="size">{{ item.goodsSize }}</div>
      <div class="price">
        <span class="new_price">$NT{{ item.newPrice }}</span
        >&nbsp;/
        <span class="old_price">$NT{{ item.oldPrice }}</span>
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
      <div class="delete">
        <span @click="removeGoods(item.id, item.goodsSize)">刪除</span>
      </div>
    </div>
  </div>
</template>
<script>
//JS
import { filterData } from "assets/js/filterData.js";
import { computedGoods } from "assets/js/userCartList.js";

export default {
  name: "CartList",
  data() {
    return {
      allIcon: false,
      keydata: "forOnlyhd",
    };
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    // quantity-form -
    decrement(iid, size) {
      const data = filterData(this.cartList, iid, size);
      if (data.count < 1) return;
      data.count--;
      computedGoods(this.cartList);
    },
    // quantity-form +
    increment(iid, size) {
      const data = filterData(this.cartList, iid, size);
      data.count++;
      computedGoods(this.cartList);
    },
    // quantity-form input
    setCount(iid, size) {
      const val = parseInt(event.target.value);
      const data = filterData(this.cartList, iid, size);
      data.count = val;
      computedGoods(this.cartList);
    },
    //removeGoods
    removeGoods(iid, size) {
      const data = filterData(this.cartList, iid, size);
      const index = this.cartList.indexOf(data);
      this.cartList.splice(index, 1);
      computedGoods(this.cartList);
    },
    //單選
    checked(iid, size) {
      const data = filterData(this.cartList, iid, size);
      data.status = !data.status;
      computedGoods(this.cartList);
    },
    //全選
    setAll() {
      this.allIcon = !this.allIcon;
      if (this.allIcon) {
        this.cartList.forEach((item) => {
          item.status = true;
        });
      } else {
        this.cartList.forEach((item) => {
          item.status = false;
        });
      }
    },
  },
  computed: {
    checkAll() {
      if (this.cartList.length !== 0) {
        const flag = this.cartList.some((item) => {
          return item.status === false;
        });
        this.allIcon = !flag;
        return !flag;
      } else {
        return false;
      }
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
.check {
  position: relative;
  background-color: #fff;
  width: 18px;
  height: 18px;
  margin-bottom: 0;
  border-radius: 2px;
  border: 1px solid #999;
}

.check input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
}

.check .fake {
  position: relative;
  width: 100%;
  height: 100%;
}

.check .fake::before {
  display: inline-block;
  content: "";
  position: absolute;
  top: 32%;
  left: 25%;
  width: 9px;
  height: 5px;
  transform: translate(-50%, -50%);
  transform: rotate(-45deg);
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
}

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
  flex: 1%;
  text-align: center;
}

.delete span {
  cursor: pointer;
}

.delete span:hover {
  color: var(--color-hover);
}

/* current */
.current {
  background-color: #999;
}

/* 清除浮動 */
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
</style>