<template>
  <div class="popular">
    <goods :countData="countData">
      <template v-slot:pageBar>
        <page-bar :pages="pages" />
      </template>
    </goods>
  </div>
</template>
<script>
import Goods from "components/content/goods/Goods.vue";
import PageBar from "components/content/pagebar/PageBar.vue";

//newwork
import { getHomeData } from "network/home.js";

export default {
  name: "Popular",
  data() {
    return {
      countData: null,
      pages: null,
    };
  },
  components: {
    Goods,
    PageBar,
  },
  created() {
    getHomeData().then((res) => {
      this.countData = res.data[1].popular;
      this.pages = Object.keys(res.data[1].new);
    });
  },
  activated() {
    document.title = this.$route.meta.title;
  },
};
</script>
<style scoped>
</style>