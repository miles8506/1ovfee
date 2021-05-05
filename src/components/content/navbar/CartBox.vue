<template>
  <div class="cart_box">
    <!-- cart_goods -->
    <div class="cart_goods" v-for="(item, index) in cartBox" :key="index">
      <div class="cart_left">
        <img :src="item.img" alt="" />
      </div>
      <div class="cart_right" @click="goGoodsInfo(item.id, item.sort)">
        <div class="goods_name">{{ item.goodsName }}</div>
        <div class="size">SIZE:{{ item.goodsSize }}</div>
        <div class="quantity">QTY:{{ item.count }}</div>
      </div>
    </div>
    <!-- goCart -->
    <div class="go_cart" @click="goCart">CHECK OUT</div>
  </div>
</template>
<script>
export default {
  name: "CartBox",
  props: {
    cartBox: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    //前往點擊後商品的相對位置
    goGoodsInfo(iid, sort) {
      this.$router.push("/");
      this.$router.push(`${sort}/${iid}`);
    },
    goCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style scoped>
.cart_box {
  position: absolute;
  top: 40px;
  left: -190px;
  width: 265px;
  padding-top: 20px;
  border: 2px solid #9999;
  color: #646565;
  background-color: #fff;
  z-index: 9999;
  cursor: pointer;
}

.cart_goods {
  display: flex;
  width: 100%;
  height: 90px;
  padding: 0 10px;
  margin-bottom: 10px;
}

.cart_left {
  flex: 30%;
}

.cart_left img {
  width: 100%;
  height: 100%;
}

.cart_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 70%;
  padding-left: 15px;
  line-height: 25px;
}

.cart_right:hover {
  text-decoration: underline;
}

.goods_name {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

/* go_cart */
.go_cart {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-top: 1px solid #9999;
  letter-spacing: 5px;
}

.go_cart:hover {
  text-decoration: underline;
}
</style>