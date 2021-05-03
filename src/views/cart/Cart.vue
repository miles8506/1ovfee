<template>
  <div class="cart">
    <cart-list :cartList="cartList" />
  </div>
</template>
<script>
//components
import CartList from "./cartchild/CartList";

export default {
  name: "Cart",
  data() {
    return {
      cartList: [],
    };
  },
  components: {
    CartList,
  },
  created() {
    this.cartList = this.$store.state.cartList;
    console.log(this.cartList);
  },
};
</script>
<style scoped>
.cart {
  padding: 10px 100px;
}
</style>