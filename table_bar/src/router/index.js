import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:() => import("@/views/ProductList.vue")
  },
  {
    path: '/list',
    name: 'list',
    component: () => import("@/views/ProductList.vue")
  },
  {
    path: '/search',
    name: 'search',
    component: () => import("@/views/ProductSearch.vue")
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import("@/views/MyMessages.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
