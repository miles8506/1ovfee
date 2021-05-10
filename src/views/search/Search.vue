<template>
  <div>
    <goods :countData="searchArr" />
  </div>
</template>
<script>
//components
import Goods from "components/content/goods/Goods.vue";

export default {
  name: "Search",
  data() {
    return {
      searchArr: null,
    };
  },
  components: {
    Goods,
  },
  created() {
    setTimeout(() => {
      const obj = {};
      obj["0"] = this.$store.state.searchList;
      this.searchArr = obj;
    }, 50);
  },
  computed: {
    flag() {
      return this.$store.state.flag;
    },
  },
  watch: {
    flag() {
      setTimeout(() => {
        const obj = {};
        obj["0"] = this.$store.state.searchList;
        this.searchArr = obj;
      }, 50);
    },
  },
};
</script>
<style scoped>
</style>