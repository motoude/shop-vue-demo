import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Detail from '@/pages/Detail'
import Rec from '@/pages/Rec'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/rec',
      name: 'Rec',
      component: Rec
    }
  ]
})
