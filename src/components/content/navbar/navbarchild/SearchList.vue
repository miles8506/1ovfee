<template>
  <div class="searchList" v-show="isShow">
    <div v-if="showList">
      <div class="search_item" v-for="(item, index) in searchArr" :key="index">
        <div class="search_left">
          <img :src="item.img" alt="" />
        </div>
        <div class="search_right">
          <a
            href="javascript:;"
            class="search_link"
            @click="goGoods(item.id, item.sort, item)"
          >
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
          </a>
        </div>
      </div>
    </div>
    <div v-else class="nothing"><span>搜尋不到相關商品</span></div>
  </div>
</template>
<script>
//JS
import { Debounce } from "components/common/debounce/debounce.js";
import { blurSearch, blurDetail } from "assets/js/search.js";

export default {
  name: "BlurSearch",
  data() {
    return {
      deBounce: null,
      searchArr: [],
      isShow: false,
      showList: false,
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
      blurSearch(this.searchValue, this.searchArr).then(() => {
        if (this.searchArr.length > 0)
          this.$store.dispatch("putSearchList", this.searchArr);
        else return;
      });
    },
    goGoods(iid, sort, item) {
      event.preventDefault();
      blurDetail(iid, sort)
        .then((res) => {
          const arr = [];
          arr.push(item);
          this.$store.dispatch("putGoodsList", arr).then((res) => {
            this.$router.push(`/${item.sort}/${item.id}`);
            this.$store.state.infoFlag = !this.$store.state.infoFlag;
          });
        })
        .catch((err) => console.log(err));
    },
  },
  watch: {
    searchArr(newData) {
      if (newData) {
        newData.length > 0 ? (this.showList = true) : (this.showList = false);
      }
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

.search_link:hover {
  text-decoration: underline !important;
  color: #505050 !important;
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

/* nothing */
.nothing {
  display: flex;
  justify-content: center;
}
</style>