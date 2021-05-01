import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue');
const New = () => import('views/new/New.vue');
const GoodsInfo = () => import('components/content/goods/GoodsInfo.vue');


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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router