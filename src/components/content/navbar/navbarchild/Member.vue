<template>
  <div class="member_list">
    <div><a href="">會員資料</a></div>
    <div>
      <a
        :href="`/wishlist/${userId}`"
        @click="goWishList"
        @mouseover="pushUserId"
        >Wish List</a
      >
    </div>
    <div><a href="/logout" @click="logout">登出</a></div>
  </div>
</template>
<script>
export default {
  name: "Member",
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    logout() {
      event.preventDefault();
      this.$store.commit("logout", []);
      this.$emit("Logout");
    },
    pushUserId() {
      const userid = JSON.parse(localStorage.getItem("login")).account;
      this.userId = userid;
    },
    goWishList() {
      event.preventDefault();
      this.$router.push(`/wishlist/${this.userId}`);
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

.member_list .div {
  flex: 1;
}

.member_list div a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 40px;
  color: #646565;
}

.member_list div a:hover {
  color: #646565 !important;
  text-decoration: underline !important;
}
</style>