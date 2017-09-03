<!--Created by tyf on 2017/8/18-->
<template>
  <div class="Main">
   <!--左侧导航-->
    <home-menu class="left-menu"></home-menu>
    <!--主体-->
    <main>
      <!--头部-->
      <header>
        <div class="logout">退出登录</div>
      </header>
      <router-view class="content"></router-view>
    </main>

   <!--二级路由入口-->


  </div>
</template>

<script>
  import HomeMenu from '../../components/common/HomeMenu'
  export default {
    components: {HomeMenu},
    data () {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/vars";
  .Main{
    height: 100%;
    position: relative;
    .left-menu{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: @left-menu-width;
      margin: auto;
    }
    main{
      position: absolute;
      left: @left-menu-width;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      header {
        flex: 0 40px;
        height: 40px;
        background-color: lightgray;
        .logout {
          float: right;
          height: 40px;
          line-height: 40px;
          margin-right: 20px;
        }
      }
      .content{
        flex: 1;
        padding: 15px 30px;
      }
    }
  }
</style>
