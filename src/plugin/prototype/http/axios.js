import axios from 'axios'
import Vue from 'vue'
import offline from 'offline'
// 超时时间
axios.defaults.timeout = 8000

// http请求拦截器
axios.interceptors.request.use(config => {
  // Vue.prototype.$Indicator.open()// 显示加载等待
  return config
}, error => {
  Vue.prototype.$Indicator.close()// 隐藏加载等待
  // 出错提示
  // Vue.prototype.$Toast({
  //   message: '加载超时',
  //   duration: Vue.prototype.$duration,
  //   position: 'bottom'
  // })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use((data) => {
  // 隐藏加载等待
  Vue.prototype.$Indicator.close()
  return data
}, (err) => {
  // 隐藏加载等待
  Vue.prototype.$Indicator.close()
  // 出错信息
  var errMsg = err.toString().split(' ')[1]
  // 提示信息
  var message = '加载失败'
  if (offline()) {
    message = '网络出错，请稍后重试'
  } else if (errMsg === 'timeout') {
    message = '加载超时'
  }

  // 出错提示
  Vue.prototype.$Toast({
    message: message,
    duration: Vue.prototype.$duration,
    position: 'bottom'
  })
  return Promise.reject(err)
})

export default axios
