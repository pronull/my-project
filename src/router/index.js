import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'


import webIndex from '../web/index'
import webSingle from '../web/single'

import vuebase from '../web/vueStudy/app'
import lambda from '../web/java8lambda/app'
import  login from '../web/login/login'
import  regist from '../web/login/regist'



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
    //lambda
    {
      path: '/lambda',
      name: 'lambda',
      component: lambda
    },
    //博客
    {
      path: '/',
      name: 'index',
      component: webIndex
    },
    //登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
    //注册
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/webSingle',
      name: 'webSingle',
      component: webSingle
    }
  ]
})
