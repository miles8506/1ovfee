<template>
  <div class="cart">
    <div v-if="isShow">
      <cart-list :cartList="cartList" />
      <cart-computed />
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
  created() {
    this.cartList = this.$store.state.cartList;
  },
  watch: {
    cartList(newdata) {
      if (newdata.length !== 0) {
        this.isShow = true;
      }
    },
  },
  methods: {
    goNew() {
      event.preventDefault();
      this.$router.push("/new");
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
  background-color: #e0c3ac;
  color: #fff !important;
}

.go_new a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>