import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';
import modules from './modules';
import getters from './getters';

Vue.use(Vuex)

let state = {
  goodsList: [],
  cartList: [],
  searchList: [],
  //flag乃是用來監聽search page點擊後回調給watch更新新的data
  flag: true,
  infoFlag: true,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
