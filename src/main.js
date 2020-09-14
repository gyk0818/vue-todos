// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue模块
import Vue from 'vue'
// 引入vue组件
import App from './App'
// 引入路由配置文件
import router from './router'

// 关闭生产模式下给的提示
Vue.config.productionTip = false

// 创建一个vue的根实例
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注入路由配置
  components: { App }, // 配置根模版，即打开页面显示的组件
  template: '<App/>' // 注入组件
})
