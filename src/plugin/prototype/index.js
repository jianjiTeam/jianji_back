import http from './http'
import { Indicator, Toast } from 'mint-ui'
export default function (Vue) {
  Vue.prototype.$http = http
  Vue.prototype.$Indicator = Indicator
  Vue.prototype.$Toast = Toast
  // 提示停留时间
  Vue.prototype.$duration = 2000
}
