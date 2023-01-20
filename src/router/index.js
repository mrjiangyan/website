import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      content: {
        description: '上海特趣商务咨询有限公司 是一家成立超过10年的软件与人工智能解决方案提供商',
        keywords: '人工智能,AI,智慧工地,百度,CV',
      },
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServicesView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUsView.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/PortfolioView.vue'),
    meta: {
      content: {
        description: '上海特趣商务咨询有限公司 是一家成立超过10年的软件与人工智能解决方案提供商,相关的用户成功案例',
        keywords: '人工智能,AI,智慧工地,百度,CV,客户案例,APP',
      },
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
