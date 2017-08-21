import axios from 'axios'
import Vue from 'vue'
// 超时时间
// axios.defaults.timeout = 8000

// 设置跨域
axios.defaults.withCredentials = true
// http请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  Vue.prototype.$Indicator.close()
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use((data) => {
  return data
}, (err) => {
  console.log(err)
  return Promise.reject(err)
})

export default axios
