<template>
  <div class="service" ref="service">
    <div class="social">
      <div class="fb"><a href=""></a></div>
      <div class="twitter"><a href=""></a></div>
      <div class="line"><a href=""></a></div>
    </div>
    <div class="account">
      <div class="login">
        <a href="/login" @click="goLogin"><span class="img"></span>Login</a>
      </div>
      <div class="cart" @mouseenter="showCart" @mouseleave="hideCart">
        <a href="/cart" @click="goCart"><span class="img"></span>Cart</a>
        <cart-box :cartBox="cartBox" v-show="isShow" />
      </div>
    </div>
  </div>
</template>
<script>
//components
import CartBox from "./CartBox";

export default {
  name: "Service",
  data() {
    return {
      cartBox: [],
      isShow: false,
    };
  },
  components: {
    CartBox,
  },
  methods: {
    //前往購物車page
    goCart() {
      event.preventDefault();
      this.$router.push("/cart");
    },
    showCart() {
      this.isShow = true;
      this.cartBox = this.$store.state.cartList;
    },
    hideCart() {
      this.isShow = false;
    },
    goLogin() {
      event.preventDefault();
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #666;
}

/* social */
.social {
  display: flex;
  height: 40px;
}

.fb,
.twitter,
.line {
  font-family: "icomoon";
  height: 100%;
  padding: 0 20px;
  line-height: 24px;
}

.fb a,
.twitter a,
.line a {
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: #fff !important;
  line-height: 40px;
}

.social div a:hover {
  color: var(--color-hover) !important;
}

/* account */
.account {
  display: flex;
}

.login,
.cart {
  line-height: 40px;
  height: 40px;
}

.cart {
  position: relative;
}

.login a,
.cart a {
  height: 100%;
  padding: 0 20px;
  color: #fff !important;
  text-decoration: none;
}

.login a .img,
.cart a .img {
  display: inline-block;
  margin-right: 10px;
  line-height: 24px;
  font-family: "icomoon";
}

.account div:hover .img {
  color: var(--color-hover) !important;
}

.account div:hover a {
  color: var(--color-hover) !important;
}
</style>