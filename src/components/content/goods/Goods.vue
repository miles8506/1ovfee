<template>
  <div class="Goods">
    <div class="container">
      <!-- 左側nav -->
      <nav class="nav_list" ref="navList">
        <div class="nav_wrap">
          <nav-side />
        </div>
      </nav>
      <!-- 右側商品項目 -->
      <div class="goods_item">
        <div class="goods" v-for="(item, index) in Goods" :key="index">
          <a
            :href="'/new/' + goodsId"
            class="goods_wrap"
            @click="goInfo(item.id)"
          >
            <img :src="item.img" alt="" class="goods_img" />
            <div class="goods_name">
              <a href="javascript:;"> {{ item.goodsName }}</a>
            </div>
            <div class="price">
              <span class="new_price">NT${{ item.newPrice }}</span
              ><span class="old_price">NT${{ item.oldPrice }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <slot name="pageBar"></slot>
  </div>
</template>
<script>
//components
import NavSide from "components/content/navside/NavSide.vue";

export default {
  name: "Goods",
  data() {
    return {
      Goods: [],
      page: 0,
      goodsId: 0,
    };
  },
  components: {
    NavSide,
  },
  props: {
    countData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    countData(newData) {
      this.Goods = newData[this.page];
    },
  },
  mounted() {
    //獲取點擊後page的index
    this.$bus.$on("page", (index) => {
      if (index === this.page) {
        return;
      } else {
        this.page = index;
        this.Goods = this.countData[this.page];
      }
    });
  },
  destroyed() {
    this.$bus.$off("page");
  },
  methods: {
    //獲取相對應商品id，並將該page的data存到sesstion中
    goInfo(iid) {
      window.sessionStorage.removeItem("goodsInfo");
      let data = JSON.stringify(this.Goods);
      window.sessionStorage.setItem("goodsInfo", data);
      this.goodsId = iid;
    },
  },
};
</script>
<style scoped>
.Goods {
  padding: 50px 50px 0;
}

.container {
  display: flex;
}

/* nav */
.nav_list {
  position: relative;
  flex: 25%;
  padding: 0 0 40px 30px;
}

.nav_wrap {
  position: sticky;
  top: 100px;
}

.nav_list .title {
  font-size: 16px;
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

/* goods */
.goods_item {
  display: flex;
  flex: 75%;
  flex-wrap: wrap;
}

.goods_item .goods {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 25%;
  height: 350px;
}

.goods_wrap {
  display: block;
  width: 100%;
  height: 100%;
}

.goods_img {
  width: 200px;
  height: 250px;
}

.goods_name,
.new_price,
.old_price {
  font-size: 12px;
  line-height: 20px;
  color: #505050;
  letter-spacing: 1px;
}

.goods_name {
  margin-top: 10px;
  padding: 0 30px;
  text-align: center;
}

.price {
  margin-top: 5px;
  text-align: center;
}

.new_price,
.old_price {
  display: inline-block;
  cursor: default;
}

.new_price {
  color: #000;
  margin-right: 15px;
}

.old_price {
  text-decoration: line-through;
  color: #999;
}
</style>
