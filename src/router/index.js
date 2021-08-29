import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Setting from '@/components/Setting'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})
