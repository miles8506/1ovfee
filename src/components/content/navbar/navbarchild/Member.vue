<template>
  <div class="memberlist_wrap">
    <!-- normal start -->
    <div class="member_list">
      <div class="member_item"><a href="">會員資料</a></div>
      <div class="wishlist_item">
        <a
          :href="`/wishlist/${userId}`"
          @click="goWishList"
          @mouseover="pushUserId"
          >Wish List</a
        >
      </div>
      <div class="logout_item"><a href="/logout" @click="logout">登出</a></div>
    </div>
    <!-- normal end -->

    <!-- 992px start -->
    <div class="member_list_m">
      <div class="item_wrap">
        <a href="javascript:;" @click="goMember">會員資料</a>
      </div>
      <div class="item_wrap">
        <a
          :href="`/wishlist/${userId}`"
          @click="goWishList"
          @mouseover="pushUserId"
          >Wish List</a
        >
      </div>
      <div class="item_wrap">
        <a href="/logout" @click="logout('refresh')">登出</a>
      </div>
    </div>
    <!-- 992px end -->
  </div>
</template>
<script>
//JS
import { logOut } from "assets/js/logout.js";

export default {
  name: "Member",
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    logout(status) {
      event.preventDefault();
      const user = JSON.parse(localStorage.getItem("login")).account;
      const cartList = this.$store.state.cartList;
      this.$store.commit("logout", []);
      logOut(cartList, user);
      this.$emit("Logout", status);
    },
    pushUserId() {
      const userid = JSON.parse(localStorage.getItem("login")).account;
      this.userId = userid;
    },
    goWishList() {
      event.preventDefault();
      this.$bus.$emit("mobileList");
      this.$router.push(`/wishlist/${this.userId}`);
    },
    goMember() {
      this.$bus.$emit("mobileList");
    },
  },
};
</script>
<style scoped>
.member_list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  left: -5px;
  width: 150px;
  padding: 5px;
  border: 2px solid #9999;
  background-color: #fff;
  z-index: 9999;
}

.member_list .member_item,
.member_list .wishlist_item,
.member_list .logout_item {
  flex: 1;
}

.member_list .member_item a,
.member_list .wishlist_item a,
.member_list .logout_item a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 40px;
  color: #646565;
}

.member_list .member_item a:hover,
.member_list .wishlist_item a:hover,
.member_list .logout_item a:hover {
  color: #646565 !important;
  text-decoration: underline !important;
}

.member_list_m .item_wrap {
  height: 40px;
  line-height: 40px;
}

.member_list_m .item_wrap a {
  text-decoration: none;
  color: #fff !important;
}

/* 992px */
@media screen and (max-width: 992px) {
  .member_list {
    display: none;
  }
}
</style>