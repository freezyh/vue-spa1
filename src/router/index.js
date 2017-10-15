import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index'
import News from '@/components/page/news'
import Menu1 from '@/components/page/menu1'
import Menu2 from '@/components/page/menu2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    },
    {
      path: '/news',
      name: '热点新闻',
      component: News
    },
    {
      path: '/menu1',
      name: 'menu1',
      component: Menu1
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: Menu2
    }
  ]
})
