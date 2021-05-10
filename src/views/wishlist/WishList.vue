<template>
  <div class="wish_list">
    <div class="wrap">
      <div class="title">
        <span class="en"> My wishlist -</span>
      </div>
      <wish-item :wishList="wishList" />
    </div>
  </div>
</template>
<script>
//components
import WishItem from "./wishlistchild/WishItem";

export default {
  name: "WishList",
  data() {
    return {
      wishList: [],
    };
  },
  activated() {
    this.wishList = [];
    const data = JSON.parse(localStorage.getItem("login")).wishList;
    this.wishList.push(...data);
  },
  components: {
    WishItem,
  },
};
</script>
<style scoped>
.wish_list {
  width: 100%;
  min-height: 100vh;
  padding: 20px 0px 20px;
  background-color: #f6f4f5;
}

.wish_list .wrap {
  width: 66%;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
}

.title {
  margin-bottom: 20px;
  font-family: "Libre Baskerville", serif;
}

.title .en {
  margin-right: 20px;
  font-size: 30px;
}
</style>