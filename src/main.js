// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



Vue.config.productionTip = false

//设置跨域,携带cookie
// Vue.http.options.emulateJSON = true;
// Vue.http.options.xhr = { withCredentials: true }
//
// //在拦截其中添加此属性即可
// Vue.http.interceptors.push((request, next) => {
//   request.credentials = true
//   next()
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


