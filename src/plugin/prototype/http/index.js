/**
 * Created by fjl on 2017/7/14.
 */
import axios from './axios'
import config from './config'
// import qs from 'qs'

axios.defaults.headers.Authorization = localStorage.getItem('token')

// 监听全局token值得改变
Object.defineProperty(window, 'token', {
  get () {
    return window.token
  },
  set: function (value) {
    axios.defaults.headers.token = value
  }
})

export default {
  // 获取发票信息
  getInvoices () {
    return axios.get(config.invoices)
  },
  // 修改发票
  putInvoice (param) {
    return axios.put(config.invoices, param)
  },
  // 新增发票
  postInvoice (param) {
    return axios.post(config.invoices, param)
  }
}
