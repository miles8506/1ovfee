<template>
  <div class="GoodsInfo">
    <div>{{ currentGoods.goodsName }}</div>
    <div><img :src="currentGoods.img" alt="" /></div>
    <div class="price">
      <span>{{ currentGoods.newPrice }}</span>
      <span>{{ currentGoods.oldPrice }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsInfo",
  data() {
    return {
      goodsList: [],
      currentGoods: {},
    };
  },
  created() {
    let data = window.sessionStorage.getItem("goodsInfo");
    this.goodsList = JSON.parse(data);
    let filterArray = this.goodsList.filter(
      (item) => item.id == this.$route.params.goodsId
    );
    this.currentGoods = filterArray[0];
  },
};
</script>
<style scoped>
</style>