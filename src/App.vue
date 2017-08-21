<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created () {
      this.$store.commit('login', {token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODg0ODk2Mjg4MyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDMzNTUzNTF9.vB7esU8kCzN5z28Nyr7yKOjVsUBIMg-pdjojoCBzw0BF_-6LuNvrR52JgN1S6m2XPAUu8wptRQDtGShNn35c_A'})
    }
  }
</script>

<style lang="less">
  @import "./assets/style/public";
  #app{
    height: 100%;
  }
</style>
