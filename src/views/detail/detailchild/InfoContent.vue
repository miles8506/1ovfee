<template>
  <div class="info_content">
    <div
      class="goods_img"
      v-for="(item, index) in currentGoods.moreImg"
      :key="index"
    >
      <img :src="item" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoContent",
  data() {
    return {
      moreImg: [],
    };
  },
  props: {
    currentGoods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.info_content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.goods_img {
  width: 80%;
  margin-bottom: 30px;
}

.goods_img img {
  width: 100%;
}
</style>