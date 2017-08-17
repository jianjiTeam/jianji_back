export default function (Vue) {
  Vue.mixin({
    methods: {
      // 自定义的页面激活方法
      activated () {
      }
    },
    // vue 自带页面激活钩子
    activated () {
      var apps = document.getElementsByClassName('app_router_view')

      if (this.$router.currentRoute.meta.hasTabbar) { // 是tabbar的内容
        if (apps.length > 0) {
          apps[apps.length - 1].scrollTop = this.$router.currentRoute.meta.top
        }
      } else {
        if (apps.length > 1) {
          // 设置滚动位置
          apps[1].scrollTop = this.$router.pathHistory.top.top
        }
      }

      if (!this.$router.pathHistory.isBack) {
        // 调用自定义的页面激活方法
        this.activated()
      }

      // 中间路由，不设置头部导航
      if (this.isMiddlePage) {
        return
      }

      // 程序入口组件
      var app = this.$root.$children[0]
      // 公共头部导航
      var headNav = app.$refs.headNav
      if (this.header) {
        headNav.header = this.header
      } else if (this.$route.params.title) {
        headNav.header = { title: this.$route.params.title || '' }
      }
      headNav.clickLeftBtn = this.clickLeftBtn
      headNav.clickRightBtn = this.clickRightBtn
    },
    deactivated () {
      Vue.prototype.$Indicator.close()
    }
  })
}
