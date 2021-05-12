export default {
  putGoodsList(state, data) {
    state.goodsList = data;
  },

  putCart(state, data) {
    let res = state.cartList.filter(item => {
      return item.id === data.id && item.goodsSize === data.goodsSize;
    })
    if (res.length !== 0) {
      let goods = state.cartList.find(item => {
        return res[0].id && res[0].goodsSize;
      })
      goods.count++;
    }
    state.cartList.push(data);
  },

  putSearchList(state, data) {
    state.searchList = data;
  },

  putFlag(state, data) {
    state.flag = data;
  },

  //登出後購物車清空
  logout(state, data) {
    state.cartList = data;
  },

  login(state, data) {
    state.cartList = data;
  }
}