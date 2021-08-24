import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Setting from '@/components/Setting'

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
    }
  ]
})
