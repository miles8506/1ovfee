<template>
  <div class="cart">
    <cart-list :cartList="cartList" />
    <cart-computed />
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
    };
  },
  components: {
    CartList,
    CartComputed,
  },
  created() {
    this.cartList = this.$store.state.cartList;
  },
};
</script>
<style scoped>
.cart {
  padding: 10px 100px;
}
</style>