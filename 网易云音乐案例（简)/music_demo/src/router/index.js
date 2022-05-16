import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/homepage"
  },
  {
    // 首页
    path:"/homepage",
    component:()=>import("../views/layout/HomrPage.vue"),
    meta:{
      title:"首页"
    }
    
  },
  {
    // 搜索页面
    path:"/search",
    component:()=>import("../views/layout/Search.vue"),
    meta:{
      title:"搜索"
    }
  },
  // 播放页面
  {
    path:"/play",
    component:()=>import("@/views/layout/play/play.vue")
  }
 
]

const router = new VueRouter({
  routes,
})

export default router
