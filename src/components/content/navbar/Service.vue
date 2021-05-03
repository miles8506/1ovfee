<template>
  <div class="service" ref="service">
    <div class="social">
      <div class="fb"><a href=""></a></div>
      <div class="twitter"><a href=""></a></div>
      <div class="line"><a href=""></a></div>
    </div>
    <div class="account">
      <div class="login">
        <a href=""><span class="img"></span>Login</a>
      </div>
      <div class="cart">
        <a href="/cart" @click="goCart"><span class="img"></span>Cart</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Service",
  props: {
    offsetY: {
      type: Number,
      default: 0,
    },
  },
  //監聽scrollTop數據
  watch: {
    offsetY(newData) {
      if (newData > 1) {
        $(this.$refs.service).hide();
      } else {
        $(this.$refs.service).show();
      }
    },
  },
  methods: {
    //前往購物車page
    goCart() {
      event.preventDefault();
      // if () {
      this.$router.push("/cart");
      // }
    },
  },
};
</script>
<style scoped>
.service {
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 8px 0;
  background-color: #666;
}

/* social */
.social {
  display: flex;
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
  line-height: 24px;
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