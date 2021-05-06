<template>
  <div id="app">
    <mask-cover />
    <nav-bar />
    <keep-alive exclude="GoodsInfo"><router-view></router-view></keep-alive>
    <top-icon />
    <nav-bottom />
  </div>
</template>
<script>
//components
import NavBar from "components/content/navbar/NavBar.vue";
import NavBottom from "./components/content/footer/NavBottom";
import TopIcon from "./components/content/topicon/TopIcon.vue";
import MaskCover from "components/content/mask/MaskCover.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NavBottom,
    TopIcon,
    MaskCover,
  },
};
</script>
<style scoped>
@import "assets/css/base.css";
/* mask */
</style>
