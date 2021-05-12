<template>
  <div class="wish_item">
    <div class="wish_goods" v-for="(item, index) in wishData" :key="index">
      <div class="goods_img">
        <img :src="item.img" alt="" />
      </div>
      <div class="goods_info">
        <div class="goods_name">
          <a :href="`/${item.sort}/${item.id}`" @click="goDetail(item)">{{
            item.goodsName
          }}</a>
        </div>
        <div class="size">
          SIZE:
          <span v-for="(item, index) in item.size" :key="index"
            >{{ item }} &nbsp;
          </span>
        </div>
      </div>
      <div class="goods_price">
        <span class="new_price">NT.{{ item.newPrice }}</span>
        <span class="old_price">NT.{{ item.oldPrice }}</span>
      </div>
      <div class="add_cart">
        <span class="add_btn" @click="goDetail(item)">Add to Cart</span>
      </div>
      <div class="delete"><span @click="deleteItem(item)"></span></div>
    </div>
  </div>
</template>
<script>
//JS
import { wishDelete } from "assets/js/wish.js";

export default {
  name: "WishItem",
  data() {
    return {
      wishData: null,
    };
  },
  props: {
    wishList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    this.wishData = this.wishList;
  },
  methods: {
    goDetail(item) {
      event.preventDefault();
      const arr = [];
      arr.push(item);
      this.$store.commit("putGoodsList", arr);
      this.$router.push(`/${item.sort}/${item.id}`);
    },
    deleteItem(data) {
      const that = this;
      let wish = JSON.parse(localStorage.getItem("login"));
      const wishList = wish.wishList;
      const index = wishList.findIndex((item) => item.id == data.id);
      wishList.splice(index, 1);
      wishDelete(wish, function () {
        that.wishData = wishList;
      });
      wish = JSON.stringify(wish);
      localStorage.setItem("login", wish);
    },
  },
  watch: {
    wishList(newData) {
      this.wishData = newData;
    },
  },
};
</script>
<style scoped>
.wish_goods {
  display: flex;
  height: 160px;
  padding: 0 15px;
  font-size: 12px;
  color: #6f6a66;
  cursor: default;
}

.goods_img,
/* .goods_info, */
.goods_price,
.add_cart,
.delete {
  display: flex;
  justify-content: center;
  align-items: center;
}

.goods_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* goods_img */
.goods_img {
  flex: 20%;
}

.goods_img img {
  width: 70%;
  height: 80%;
}

/* goods_info */
.goods_info {
  flex: 30%;
}

.goods_name {
  margin-bottom: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.goods_name a:hover {
  color: #6f6a66 !important;
  text-decoration: underline !important;
}

/* goods_price */
.goods_price {
  flex: 20%;
}

.old_price {
  margin-left: 10px;
  text-decoration: line-through;
}

/* add_cart */
.add_cart {
  flex: 20%;
}

.add_btn {
  display: inline-block;
  width: 90px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #6f6a66;
  border-radius: 5px;
  cursor: pointer;
}

.add_btn:hover {
  background-color: #6f6a66;
  color: #fff;
}

/* delete */
.delete {
  flex: 10%;
}

.delete span {
  font-family: "icomoon";
  font-size: 14px;
  cursor: pointer;
}
</style>