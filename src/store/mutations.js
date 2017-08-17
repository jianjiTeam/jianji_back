export default {
  login (state, param) {
    state.token = param.token
    state.user = param.user
  },
  logout (state) {
    state.token = ''
    state.user = ''
  },
  changeUser (state, user) {
    state.user = user
  }
}
