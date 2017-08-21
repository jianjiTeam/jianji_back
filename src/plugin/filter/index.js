/**
 * Created by fjl on 2017/7/21.
 */

import invoiceStatus from '../../appConfig/invoiceStatus'
import formatDate from '../../FJLCoreOperation/Date/formatDate'
export default function (Vue) {
  // 截取字符串
  Vue.filter('subStr', function (str, begin, end) {
    return str.substr(begin, end)
  })

  // 日期格式化器
  Vue.filter('formDate', function (time, format) {
    return formatDate(time, format)
  })

  // 返回发票状态
  Vue.filter('statusText', function (status) {
    return invoiceStatus[status]
  })
}

