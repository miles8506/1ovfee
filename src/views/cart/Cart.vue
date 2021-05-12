<template>
  <div class="cart">
    <div v-if="isShow">
      <cart-list :cartList="cartList" />
      <cart-computed @hidecart="hidecart" />
    </div>
    <div v-else class="is_none">
      <div class="text">您的購物車還是空的</div>
      <div class="go_new"><a href="/new" @click="goNew">來去逛逛吧！</a></div>
    </div>
  </div>
</template>
<script>
//components
import CartList from "./cartchild/CartList";
import CartComputed from "./cartchild/CartComputed";

//JS
import { setGoods } from "assets/js/userCartList.js";

export default {
  name: "Cart",
  data() {
    return {
      cartList: [],
      isShow: false,
    };
  },
  components: {
    CartList,
    CartComputed,
  },
  mounted() {
    window.scroll(0, 0);
    this.cartList = this.$store.state.cartList;
    this.cartList.length > 0 ? (this.isShow = true) : (this.isShow = false);
    document.title = this.$route.meta.title;
    setGoods(this.cartList);
  },
  methods: {
    goNew() {
      event.preventDefault();
      this.$router.push("/new");
    },
    hidecart() {
      this.isShow = false;
    },
  },
};
</script>
<style scoped>
.cart {
  padding: 10px 100px;
}
.is_none {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  font-size: 26px;
}

.go_new {
  width: 130px;
  height: 40px;
  margin-top: 30px;
  text-align: center;
  line-height: 40px;
  background-color: #eeded1;
  border-radius: 10px;
  color: #505050;
}

.go_new:hover a {
  border-radius: 10px;
  background-color: #e0c3ac;
  color: #fff !important;
}

.go_new a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>