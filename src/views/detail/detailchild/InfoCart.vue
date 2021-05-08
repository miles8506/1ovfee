<template>
  <div class="info_cart">
    <div class="info_wrap">
      <!-- title start-->
      <h2 class="title">{{ currentGoods.goodsName }}</h2>
      <!-- title end-->

      <!-- text start-->
      <div class="text">此款版型適中</div>
      <!-- text end-->

      <!-- wish start-->
      <div class="wish">
        <span class="wish_logo" @click="addWish" :class="{ current: isWished }"
          ><span class="added_mark" v-show="isWished"></span></span
        >
        ADD WISH
      </div>

      <!-- wish end -->

      <!-- price start-->
      <div class="price">
        <span class="new_price">NT${{ currentGoods.newPrice }}</span>
        <span class="old_price">NT${{ currentGoods.oldPrice }}</span>
      </div>
      <!-- price end -->

      <!-- choose_wrap start-->
      <div class="choose_wrap">
        <div class="size_box">
          <select
            name="size"
            id="size"
            v-model="goodsSize"
            class="size"
            @change="setFlag"
          >
            <option value="" ref="sizeAlert">SIZE</option>
            <option
              :value="item"
              v-for="(item, index) in currentGoods.size"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="quantity-form">
          <span class="decrement" @click="decrement">-</span>
          <input
            type="text"
            class="itxt"
            :value="count"
            @change="setCount"
            oninput="value=value.replace(/[^\d]/g,'')"
          />
          <span class="increment" @click="increment">+</span>
        </div>
      </div>
      <!-- choose_wrap end -->

      <!-- gocart_icon start-->
      <div class="gocart_icon">
        <a href="javascript:;" v-if="flag">請選擇尺寸</a>
        <a href="/cart" v-else @click="goCart">添加至購物車</a>
      </div>
      <!-- gocart_icon end -->

      <!-- info_detail start-->
      <div class="info_detail">
        <div class="detail_hd">
          <span>商品資訊</span> / <span>洗滌方式</span>
        </div>
        <div class="detail_bd">
          <div>1.深淺色請分開洗滌，以避免造成互相移染。</div>
          <div>2.請放入大小適中之細網洗衣袋細中弱速水洗，以保持商品型態。</div>
          <div>3.洗滌時，水溫請低於30℃；請使用中性洗劑；浸泡時間不宜過長。</div>
          <div>4.請勿使用漂白劑、螢光增白劑及衣物柔軟劑，以免破壞布料。</div>
          <div>
            5.不可濕放，以免衣物染色；請弱速輕脫水，不可烘乾，以免衣物縮水。
          </div>
          <div>6.清洗後請快速調整商品型態並吊掛晾乾即可。</div>
          <div>7.如需整燙，請以低溫墊布熨燙，溫度不可超過110℃。</div>
          <div>8.穿著時，請留意避免與配件包包等他物接觸摩擦。</div>
        </div>
      </div>
      <!-- info_detail end -->
    </div>
  </div>
</template>
<script>
//JS
import { wish, wishApi } from "assets/js/wish.js";

export default {
  name: "InfoCart",
  data() {
    return {
      goodsSize: "",
      count: 1,
      flag: true,
      isWished: false,
    };
  },
  props: {
    currentGoods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    if (localStorage.getItem("login") !== null) {
      const wishList = JSON.parse(localStorage.getItem("login")).wishList;
      if (wishList !== null) {
        const flag = wishList.some((item) => item.id == this.currentGoods.id);
        if (flag) {
          this.isWished = true;
        } else {
          this.isWished = false;
        }
      } else {
        this.isWished = false;
      }
    }
  },
  mounted() {
    this.$refs.sizeAlert.disabled = true;
  },
  methods: {
    // quantity-form -
    decrement() {
      this.count > 1 ? this.count-- : this.count;
    },
    // quantity-form +
    increment() {
      this.count++;
    },
    setCount() {
      this.count = event.target.value;
    },
    //show 添加至購物車icon
    setFlag() {
      if (this.flag) this.flag = false;
    },
    goCart() {
      event.preventDefault();
      let data = {};
      data.count = this.count;
      data.goodsName = this.currentGoods.goodsName;
      data.goodsSize = this.goodsSize;
      data.id = this.currentGoods.id;
      data.img = this.currentGoods.img;
      data.newPrice = this.currentGoods.newPrice;
      data.oldPrice = this.currentGoods.oldPrice;
      data.status = true;
      data.sort = this.currentGoods.sort;
      this.$store.dispatch("putCart", data);
      this.$router.push("/cart");
    },
    addWish() {
      if (localStorage.getItem("login") === null) {
        this.$bus.$emit("mask", "請先登入帳號");
      } else {
        wish(this.currentGoods);
        this.isWished = !this.isWished;
        const data = JSON.parse(localStorage.getItem("login"));
        wishApi(data);
      }
    },
  },
};
</script>
<style scoped>
.info_cart {
  position: relative;
  padding: 0 10 10px;
  cursor: default;
}

.info_wrap {
  position: sticky;
  top: 130px;
}

/* title */
.title {
  margin: 0 0 10px 0;
  font-size: 25px;
  line-height: 45px;
  letter-spacing: 5px;
  font-weight: 400;
  color: #505050;
}

/* text */
.text {
  margin-bottom: 10px;
  color: #505050;
}

/* wish */
.wish {
  margin-bottom: 10px;
}

.wish_logo {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  line-height: 20px;
  font-family: "icomoon";
  font-size: 18px;
  color: rgb(224, 145, 159);
  cursor: pointer;
}

.wish_logo:hover {
  color: rgb(200, 93, 111);
}

.added_mark {
  position: absolute;
  top: 37%;
  left: 31%;
  width: 7px;
  height: 4px;
  transform: translate(-50%, -50%);
  transform: rotate(-45deg);
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
}

/* price */
.price {
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
}

.price .new_price,
.price .old_price {
  font-size: 20px;
  font-weight: 300;
  font-family: none;
}

.price .new_price {
  margin-right: 30px;
  color: #000;
}

.price .old_price {
  text-decoration: line-through;
  color: #999;
}

/* choose_wrap */
.choose_wrap {
  display: flex;
  margin-bottom: 20px;
}

.choose_wrap .size_box,
.choose_wrap .quantity-form {
  flex: 50%;
}

/* size */
.size_box {
  margin-right: 5px;
}
.size {
  width: 100%;
  height: 100%;
  outline: none;
}

/* quantity-form */
.quantity-form {
  margin-left: 5px;
  border: 1px solid #999;
}

.quantity-form .decrement,
.quantity-form .increment {
  display: inline-block;
  width: 10%;
  text-align: center;
  font-size: 20px;
  color: gray;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.quantity-form .decrement {
  text-align: right;
}

.quantity-form .increment {
  text-align: left;
}

.quantity-form .decrement:hover,
.quantity-form .increment:hover {
  color: #292727;
}
.quantity-form .itxt {
  border: 0;
  width: 80%;
  height: 100%;
  text-align: center;
  outline: none;
}

/* gocart_icon */
.gocart_icon {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 50px;
  border: 2px solid #646565;
}

.gocart_icon:hover {
  border-color: #837165;
}

.gocart_icon a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #646565;
}

.gocart_icon a:hover {
  color: #837165 !important;
}

/* info_detail */
.info_detail .detail_hd {
  margin-bottom: 10px;
}

.info_detail .detail_hd span {
  font-weight: 700;
}

.info_detail .detail_hd span:nth-child(1) {
  margin-right: 5px;
}

.info_detail .detail_hd span:nth-child(2) {
  margin-left: 5px;
}

.detail_bd div {
  margin-bottom: 2px;
  letter-spacing: 3px;
  text-align: justify;
  line-height: 23px;
  font-size: 12px;
}

/* current */
.current {
  color: rgb(200, 93, 111);
}
</style>