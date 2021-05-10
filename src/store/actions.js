export default {
  putCart(context, data) {
    context.commit('putCart', data);
  },
  putGoodsList(context, data) {
    return new Promise((resolve, reject) => {
      context.commit('putGoodsList', data);
      resolve('success');
    })
  },
  putSearchList(context, data) {
    context.commit('putSearchList', data);
  }
};