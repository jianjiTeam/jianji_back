<!--Created by tyf on 2017/8/18-->
<template>
  <el-menu class="HomeMenu" :default-active="$router.currentRoute.path" :router="true">
    <div class="title">简记</div>
    <img class="rili" src="./rili.png">
    <el-menu-item :key="item.path" v-for="item in list" :index="item.path" v-text="item.title"></el-menu-item>
  </el-menu>
</template>

<script>
  import homeMenuList from '../../appConfig/homeMenuList'

  export default {
    data () {
      return {
        list: homeMenuList
      }
    }
  }
</script>

<style lang="less" scoped>
  .HomeMenu {
    width: 200px;
    text-align: center;
    .title{
      font-size: 30px;
      line-height: 50px;
      text-align: center;
    }
    .rili{
      width: 80px;
    }
  }
</style>
