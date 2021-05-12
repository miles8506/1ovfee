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
    redirect: '/home',
    meta: {
      title: '1ovfee'
    }

  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '1ovfee'
    }
  },
  {
    path: '/new',
    component: New,
    meta: {
      title: '1ovfee-本週新品'
    }
  },
  {
    path: '/new/:goodsId',
    component: GoodsInfo,
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '1ovfee-購物車'
    }

  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '1ovfee-登入/註冊'
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      title: '1ovfee-搜尋列表'
    }
  },
  {
    path: '/wishlist/:userid',
    component: WishList,
    meta: {
      title: '1ovfee-WishList'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router