// 指令
import directive from './directive'
// 过滤器
import filter from './filter'
// 混合
import mixin from './mixin'
// 全局属性或方法
import prototype from './prototype'
// 全局组件
import component from './component'
export default {
  install (Vue, options) {
    directive(Vue)
    filter(Vue)
    mixin(Vue)
    prototype(Vue)
    component(Vue)
  }
}
