<template>
  <div class="GoodsInfo">
    <div class="container">
      <nav class="nav_list">
        <nav-side />
      </nav>
      <info-content :currentGoods="currentGoods" />
      <info-cart :currentGoods="currentGoods" />
    </div>
  </div>
</template>
<script>
//components
import NavSide from "components/content/navside/NavSide.vue";
import InfoContent from "views/detail/detailchild/InfoContent.vue";
import InfoCart from "views/detail/detailchild/InfoCart.vue";

export default {
  name: "GoodsInfo",
  data() {
    return {
      currentGoods: {},
      init: null,
    };
  },
  components: {
    NavSide,
    InfoContent,
    InfoCart,
  },
  created() {
    let filterArray = this.$store.state.goodsList.filter((item) => {
      return item.id == this.$route.params.goodsId;
    });
    this.currentGoods = filterArray[0];
  },
  mounted() {
    window.scroll(0, 0);
    document.title = `1ovfee-${this.currentGoods.goodsName}`;
  },
  computed: {
    refresh() {
      return this.$store.state.infoFlag;
    },
  },
  watch: {
    refresh() {
      let filterArray = this.$store.state.goodsList.filter((item) => {
        return item.id == this.$route.params.goodsId;
      });
      this.currentGoods = filterArray[0];
    },
  },
};
</script>
<style scoped>
.GoodsInfo {
  padding: 50px 70px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

/* nav_list */
.nav_list {
  flex: 20%;
  padding: 0 0 40px 30px;
}

/* info_content */
.info_content {
  flex: 55%;
}

/* info_cart */
.info_cart {
  flex: 25%;
}
</style>