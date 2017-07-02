import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'


import webIndex from '../web/index'
import webSingle from '../web/single'
//vuebase
import vuebase from '../web/vueStudy/vuebase'




Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    //vuebase部分
    {
      path: '/vuebase',
      name: 'vuebase',
      component: vuebase
    },
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
