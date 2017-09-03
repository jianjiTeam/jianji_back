/**
 * Created by fjl on 2017/7/26.
 */

export default function (Vue) {
// 格式化日期
  Vue.directive('header',
    // 函数简写(bind 和 update)
    function (el, binding, vnode) {
      var header = document.getElementById('header')
      header.innerHTML = el.innerHTML
      el.innerHTML = ''
    })
}
