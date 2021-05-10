import Vue from 'vue'
import VueRouter from 'vue-router'

const original = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return original.call(this, location).catch(err => err)
}

const Home = () => import('views/home/Home.vue');
const New = () => import('views/new/New.vue');
const GoodsInfo = () => import('views/detail/GoodsInfo.vue');
const Cart = () => import('views/cart/Cart.vue');
const Login = () => import('views/login/Login.vue');
const Search = () => import('views/search/Search.vue');
const WishList = () => import('views/wishlist/WishList.vue');


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/new',
    component: New
  },
  {
    path: '/new/:goodsId',
    component: GoodsInfo
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/wishlist/:userid',
    component: WishList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router