import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 系统首页
    {
      path: '/',
      component:() => import("@/views/index"),
      children:[
        // 文件上传下载
        {
          path:'/',
          name:"file",
          component:() => import("@/views/File")
        },
        // 图片放大器
        {
          path:"/magnifier",
          name:"magnifier",
          component:()=>import("@/views/Magnifier")
        }, 
      ]
    },
  ]
})
