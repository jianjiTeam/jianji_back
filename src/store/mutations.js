export default {
  login (state, param) {
    state.token = param.token
  },
  logout (state) {
    state.token = ''
  }
}
