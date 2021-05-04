<template>
  <div class="cart_computed">
    <div class="cart_wrap clearfix">
      <div class="computed_box">
        <div class="freeInfo">
          <div class="text" v-show="!free">
            <span class="free">免運費</span>您已達到NT$1000免運費門檻了。
          </div>
          <div class="goods_total">
            <span>商品總金額</span><span>{{ goodsTotal }}</span>
          </div>
          <div class="curry">
            運費<span v-if="curry">100</span><span v-else>0</span>
          </div>
          <div class="total_price">
            <span>總金額：</span
            ><span class="total_box">NT.{{ priceTotal }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="continue">CONTINUE</div>
  </div>
</template>
<script>
export default {
  name: "CartComputed",
  data() {
    return {
      cartList: [],
    };
  },
  created() {
    this.cartList = this.$store.state.cartList;
  },
  computed: {
    //商品總金額
    goodsTotal() {
      let count = 0;
      this.cartList.forEach((item) => {
        count += item.count * item.newPrice;
      });
      return count;
    },
    // 最後結算總金額
    priceTotal() {
      const goodsTotal = this.goodsTotal;
      const flag = this.curry;
      if (flag) {
        return goodsTotal - 100;
      } else {
        return goodsTotal;
      }
    },
    //免運通知
    free() {
      const goodsTotal = this.goodsTotal;
      if (goodsTotal === 0) {
        return true;
      } else {
        if (goodsTotal >= 1000) {
          return false;
        } else {
          return true;
        }
      }
    },
    //免運判斷
    curry() {
      const goodsTotal = this.goodsTotal;
      if (goodsTotal === 0 || goodsTotal >= 1000) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style scoped>
/* 清除浮動 */
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}

/* cart_computed */
.cart_computed {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.cart_wrap {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 30px;
  color: #505050;
}

.cart_wrap .computed_box {
  float: right;
  width: 400px;
  padding: 20px;
  background-color: rgb(246, 243, 243);
  box-shadow: 5px 6px 5px -5px rgb(0 0 0 / 45%);
  border-radius: 5px;
}

.text {
  margin-bottom: 40px;
}

.free {
  display: inline-block;
  width: 80px;
  margin-right: 10px;
  padding: 2px;
  text-align: center;
  background-color: #eeded1;
  border-radius: 5px;
  color: #505050;
}

.goods_total,
.curry {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.total_price {
  display: flex;
  justify-content: flex-end;
}

.total_price .total_box {
  font-size: 30px;
  font-weight: 500;
}

.total_price span:nth-child(1) {
  line-height: 51px;
}

/* continue */
.continue {
  width: 400px;
  height: 50px;
  letter-spacing: 5px;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  background: #eeded1;
  color: #505050;
  cursor: pointer;
}

.continue:hover {
  color: #fff;
}
</style>