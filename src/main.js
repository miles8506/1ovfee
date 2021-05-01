import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//jquery
import $ from 'jquery'
Vue.prototype.$ = $

//bootstrap
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

//bus
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
