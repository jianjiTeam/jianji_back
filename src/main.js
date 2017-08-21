// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'    // 默认主题
import store from './store'
import plugin from './plugin'
// import './mock/mock'

// 自己定义的插件(用于生成全局的组件，指令，混合，过滤器，对象)
Vue.use(plugin)
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
