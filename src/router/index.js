import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import FilterDemo from '@/components/filter/filterDemo'
import computedDemo from '@/components/computed/computedDemo'
import watchDemo from '@/components/computed/watchDemo'
import propDemo from '../components/prop/supper'
import slotDemo from '../components/slot/supper'
import webIndex from '../web/index'
import webSingle from '../web/single'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/filterDemo',
      name: 'filterDemo',
      component: FilterDemo
    }, {
      path: '/computedDemo',
      name: 'computedDemo',
      component: computedDemo
    }, {
      path: '/watchDemo',
      name: 'watchDemo',
      component: watchDemo
    }, {
      path: '/propDemo',
      name: 'propDemo',
      component: propDemo
    }, {
      path: '/slotDemo',
      name: 'slotDemo',
      component: slotDemo
    },
    //博客
    {
      path: '/',
      name: 'index',
      component: webIndex
    },
    {
      path: '/webSingle',
      name: 'webSingle',
      component: webSingle
    }
  ]
})
