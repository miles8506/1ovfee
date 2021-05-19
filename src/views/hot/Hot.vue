<template>
  <div class="hot">
    <goods :countData="countData">
      <template v-slot:pageBar>
        <page-bar :pages="pages" />
      </template>
    </goods>
  </div>
</template>
<script>
//components
import Goods from "components/content/goods/Goods.vue";
import PageBar from "components/content/pagebar/PageBar.vue";

//newwork
import { getHomeData } from "network/home.js";

export default {
  name: "Hot",
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
      this.countData = res.data[1].hot;
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