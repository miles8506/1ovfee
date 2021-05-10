<template>
  <div class="service" ref="service">
    <div class="social">
      <div class="fb"><a href="javascript:;"></a></div>
      <div class="twitter"><a href="javascript:;"></a></div>
      <div class="line"><a href="javascript:;"></a></div>
    </div>
    <div class="account">
      <div class="login" v-if="isShowLog">
        <a href="/login" @click="goLogin"><span class="img"></span>Login</a>
      </div>
      <div
        class="logout"
        @mouseenter="showMember"
        @mouseleave="hideMember"
        v-else
      >
        <a href="javascript:;"
          ><span class="img"></span><span class="user_name">會員管理</span></a
        >
        <member-list v-show="isShowMember" @Logout="Logout" />
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
import MemberList from "./Member";

export default {
  name: "Service",
  data() {
    return {
      cartBox: [],
      isShow: false,
      isShowLog: true,
      isShowMember: null,
      userName: "",
    };
  },
  components: {
    CartBox,
    MemberList,
  },
  created() {
    if (localStorage.getItem("login") !== null) {
      this.userName = localStorage.getItem("login");
      this.isShowLog = false;
    }
  },
  mounted() {
    this.$bus.$on("user", () => {
      this.userName = localStorage.getItem("login");
      this.isShowLog = false;
      this.isShowMember = false;
    });
  },
  methods: {
    //前往購物車page
    goCart() {
      event.preventDefault();
      localStorage.getItem("login") !== null
        ? this.$router.push("/cart")
        : this.$router.push("/login");
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
    //會員管理
    showMember() {
      this.isShowMember = true;
    },
    hideMember() {
      this.isShowMember = false;
    },
    Logout() {
      this.isShowLog = true;
      localStorage.removeItem("login");
      this.$router.push("/");
      this.$bus.$emit("mask", "帳號已登出");
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
.logout,
.cart {
  line-height: 40px;
  height: 40px;
}

.logout,
.cart {
  position: relative;
}

/* .cart {
  position: relative;
} */

.login a,
.logout a,
.cart a {
  height: 100%;
  padding: 0 20px;
  color: #fff !important;
  text-decoration: none;
}

.login a .img,
.logout a .img,
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