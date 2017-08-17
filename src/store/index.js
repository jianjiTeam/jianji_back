import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    // 令牌
    _token: '',
    set token (token) {
      this._token = token
      // 将token公开为全局变量
      window.token = token
      localStorage.setItem('token', token)
    },
    get token () {
      if (!this._token) {
        this._token = localStorage.getItem('token')
      }
      return this._token
    },
    // 用户信息
    _user: null,
    set user (user) {
      this._user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    get user () {
      if (!this._user) {
        this._user = JSON.parse(localStorage.getItem('user'))
      }
      return this._user
    }
  },
  getters,
  mutations,
  actions
})

export default store
