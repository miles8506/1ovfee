<template>
  <div class="searchList" v-show="isShow">
    <div class="search_item" v-for="(item, index) in searchArr" :key="index">
      <div class="search_left">
        <img :src="item.img" alt="" />
      </div>
      <div class="search_right">
        <div class="goods_name">{{ item.goodsName }}</div>
        <div class="pric">
          <span class="new_price">NT{{ item.newPrice }}</span>
          <span class="old_price">NT$.{{ item.oldPrice }}</span>
        </div>
        <div class="size">
          SIZE:
          <span v-for="(item, index) in item.size" :key="index">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//JS
import { Debounce } from "components/common/debounce/debounce.js";
import { blurSearch } from "assets/js/search.js";

export default {
  name: "BlurSearch",
  data() {
    return {
      deBounce: null,
      searchArr: [],
      isShow: false,
    };
  },
  props: {
    searchValue: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$bus.$on("search", () => {
      this.deBounce();
    });
    this.deBounce = Debounce(this.setSearch, 500);
  },

  methods: {
    setSearch() {
      if (this.searchValue.length < 1) return (this.isShow = false);
      this.isShow = true;
      this.searchArr = [];
      blurSearch(this.searchValue, this.searchArr);
    },
  },
  destroyed() {
    this.$bus.$off("search");
  },
};
</script>
<style scoped>
.searchList {
  position: absolute;
  top: 72px;
  left: 0;
  width: 220px;
  height: 300px;
  padding: 10px 5px;
  line-height: initial;
  background-color: #fff;
  overflow: auto;
  border: 2px solid #999;
  border-top: 0;
}

.search_item {
  display: flex;
  height: 90px;
  margin-bottom: 10px;
}

/* search_left */
.search_left {
  flex: 40%;
  height: 100%;
  /* background-color: red; */
}

.search_left img {
  width: 100%;
  height: 100%;
}

/* search_right */
.search_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 60%;
  height: 100%;
  padding: 0 10px;
}

.search_right div {
  margin-bottom: 5px;
}

.goods_name {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.new_price {
  margin-right: 10px;
}

.old_price {
  color: #9999;
  text-decoration: line-through;
}
</style>