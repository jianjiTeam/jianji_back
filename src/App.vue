<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created () {
      this.$store.commit('login', {token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODg0ODk2Mjg4MyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDM0NzM0ODF9.zeiBr45rKp5uBbB_MCGGF2bD3nmN21V-hSUk5g9wS5NF97cdocVgmGDOyTjO2UI7h9T2vYmcGQHfxkcYq6Z7Nw'})
    }
  }
</script>

<style lang="less">
  @import "./assets/style/public";
  #app{
    height: 100%;
  }
</style>
