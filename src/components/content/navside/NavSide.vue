<template>
  <div class="nav_wrap">
    <div class="nav_side">
      <div class="first_activity">
        <h4 class="title">最新活動 -</h4>
        <div><a href="javascript:;">清倉大拍賣 全面9折</a></div>
        <div><a href="javascript:;">2021年必備款式</a></div>
        <div><a href="javascript:;">超夯人氣款TOP10</a></div>
        <div><a href="javascript:;">BASIC百搭 日常單品</a></div>
      </div>
      <div class="sort">
        <h4 class="title">商品分類 -</h4>
        <div><a href="javascript:;">Top上衣</a></div>
        <div><a href="javascript:;">Bottom下身</a></div>
        <div><a href="javascript:;">Dress洋裝</a></div>
        <div><a href="javascript:;">Outer外套</a></div>
        <div><a href="javascript:;">Accessories飾品</a></div>
        <div><a href="javascript:;">Shoes/Bags鞋包</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavSide",
};
</script>
<style scoped>
/* nav_side */
.nav_wrap {
  position: sticky;
  top: 120px;
}

.nav_list .title {
  font-size: 16px;
  margin: 0 0 10px !important;
}

.first_activity div,
.sort div {
  padding: 8px 0;
  font-size: 12px;
  color: #505050;
}

.sort {
  margin-top: 20px;
}

.nav_side .first_activity div a,
.nav_side .sort div a {
  text-decoration: none;
}
</style>