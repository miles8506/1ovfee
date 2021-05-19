<template>
  <div class="Goods">
    <div class="container">
      <!-- 左側nav -->
      <nav class="nav_list" ref="navList">
        <nav-side />
      </nav>
      <!-- 右側商品項目 -->
      <div class="goods_item">
        <!-- <div class="wrap"> -->
        <div class="goods" v-for="(item, index) in Goods" :key="index">
          <a
            class="goods_wrap"
            :href="'/new/' + goodsId"
            @mouseover="getId(item.id)"
            @click="goInfo()"
          >
            <img :src="item.img" alt="" class="goods_img" />
            <div class="goods_name">
              <a :href="'/new/' + goodsId"> {{ item.goodsName }}</a>
            </div>
            <div class="price">
              <span class="new_price">NT${{ item.newPrice }}</span
              ><span class="old_price">NT${{ item.oldPrice }}</span>
            </div>
          </a>
        </div>
        <!-- </div> -->
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
    getId(iid) {
      this.goodsId = iid;
    },
    //獲取相對應商品id
    goInfo() {
      event.preventDefault();
      const sort = this.Goods[0].sort;
      this.$store.commit("putGoodsList", this.Goods);
      this.$router.push(`/${sort}/${this.goodsId}`);
    },
  },
};
</script>
<style scoped>
.Goods {
  padding: 50px 70px 0;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
}

/* nav */
.nav_list {
  position: relative;
  flex: 25%;
  padding: 0 0 40px 30px;
}

/* goods */
.goods_item {
  display: flex;
  flex: 75%;
  flex-wrap: wrap;
}

.goods_item .goods {
  flex: 25%;
  height: 350px;
}

.goods_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.goods_img {
  width: 200px;
  height: 250px;
  opacity: 1;
  transition: opacity 0.6s;
}

.goods_img:hover {
  opacity: 0.7;
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

/* 1350px */
@media screen and (max-width: 1350px) {
  .Goods {
    padding: 50px 30px 0;
  }
}

/* 1200px */
@media screen and (max-width: 1200px) {
  .goods_item .goods {
    width: initial;
    flex: 25%;
  }
}

/* 992px */
@media screen and (max-width: 992px) {
  .Goods {
    padding: 50px 10px 0;
  }
}

/* 650px */
@media screen and (max-width: 650px) {
  .goods_item .goods {
    flex: 100%;
  }
  .nav_list {
    flex: 30%;
  }
  .goods_item {
    flex: 70%;
  }
}

/* 510px */
@media screen and (max-width: 510px) {
  .nav_list {
    flex: 35%;
    padding-left: 10px;
  }
  .goods_item {
    flex: 65%;
  }
}
</style>
            
