import Vue from 'vue'
import Router from 'vue-router'
import IndexDetail from '@/components/detailIndex'
import Index from '@/pages/index/index.vue'
import Jiceng from '@/pages/jiceng/jiceng.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index' // 重定向到index路由
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    //  详情
    {
      path: '/index/:id',
      name: 'index.detail',
      component: IndexDetail
    },
    {
      path: '/jiceng',
      name: 'Jiceng',
      component: Jiceng
    }
  ]
})
