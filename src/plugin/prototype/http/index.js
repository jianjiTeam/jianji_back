/**
 * Created by fjl on 2017/7/14.
 */
import axios from './axios'
import config from './config'
import qs from 'qs'

axios.defaults.headers.token = localStorage.getItem('token')

// 监听全局token值得改变
Object.defineProperty(window, 'token', {
  get () {
    return window.token
  },
  set: function (value) {
    axios.defaults.headers.token = value
  }
})

export default {
  login (param) {
    return axios.post(config.login, qs.stringify(param))
  },
  getNewsContent (param) {
    return axios.post(config.getNewsContent, qs.stringify(param))
  },
  getNewsList (param) {
    return axios.post(config.getNewsList, qs.stringify(param))
  },
  imageUpload (param) {
    return axios.post(config.imageUpload, qs.stringify(param))
  },
  uploadPersonalSummary (param) {
    return axios.post(config.uploadPersonalSummary, param)
  },
  checkSummary (param) {
    return axios.post(config.checkSummary, param)
  },
  uploadSummary (param) {
    return axios.post(config.uploadSummary, param)
  },
  uploadThoughtReport (param) {
    return axios.post(config.uploadThoughtReport, param)
  },
  checkReportType (param) {
    return axios.post(config.checkReportType, param)
  },
//  民主评议
  nationCommentJudge  (param) {
    return axios.post(config.nationCommentJudge, qs.stringify(param))
  },
  brabchList  (param) {
    return axios.get(config.brabchList, qs.stringify(param))
  },
  commentExpect  (param) {
    return axios.get(config.commentExpect, qs.stringify(param))
  },
  partyUserList  (param) {
    return axios.get(config.partyUserList, qs.stringify(param))
  },
  judgeIsComment  (param) {
    return axios.get(config.judgeIsComment, qs.stringify(param))
  },
  getPersonalSummary  (param) {
    return axios.get(config.getPersonalSummary, qs.stringify(param))
  },
  uploadComment  (param) {
    return axios.get(config.uploadComment, param)
  },
  getMemberList (param) {
    return axios.post(config.getForumList, qs.stringify(param))
  },
  getUserInfo (param) {
    return axios.get(config.getUserInfo, qs.stringify(param))
  },
  changeUserInfo (param) {
    return axios.post(config.changeUserInfo, qs.stringify(param))
  },
  changePwd (param) {
    return axios.post(config.changePwd, qs.stringify(param))
  },
  getForumDetail (param) {
    return axios.get(config.getForumDetail, qs.stringify(param))
  },
  addComment (param) {
    return axios.post(config.addComment, qs.stringify(param))
  },
  saveForum (param) {
    return axios.post(config.saveForum, qs.stringify(param))
  },
  integralList (param) {
    return axios.post(config.integralList, qs.stringify(param))
  }
}
