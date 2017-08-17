/**
 * Created by fjl on 2017/7/15.
 */

function cmp (path) {
  // var cmp = require('../components'+path);
  var cmp = resolve => require(['../components' + path], resolve)
  return cmp.default || cmp
}

export default [
  {
    path: '/',
    name: 'main',
    component: cmp('/main/Main'),
    children: [
      {path: '', redirect: '/Home'},
      {path: 'Home', name: 'Home', component: cmp('/home/Home'), meta: {hasTabbar: true, top: 0}},

      {path: 'Inform', name: 'Inform', component: cmp('/inform/Inform'), meta: {hasTabbar: true, top: 0}},

      {path: 'MyParty', name: 'MyParty', component: cmp('/my/MyParty'), meta: {hasTabbar: true, top: 0}}
    ]
  },

  {path: '/Login', name: 'Login', component: cmp('/user/Login')},

  {path: '/NewsList/:type/:title', name: 'NewsList', component: cmp('/news/NewsList')},

  {path: '/NewsDetail/:type/:title/:id', name: 'NewsDetail', component: cmp('/news/NewsDetail')},

  {path: '/PalmOrganization/:title', name: 'PalmOrganization', component: cmp('/palm/PalmOrganization')},

  {
    path: '/MemberInteract/:title',
    name: 'MemberInteract',
    component: cmp('/interact/MemberInteract'),
    meta: {auth: true}
  },
  {path: '/Summary/:title', name: 'Summary', component: cmp('/palm/Summary'), meta: {auth: true}},
  {
    path: '/ThoughtReports/:title',
    name: 'ThoughtReports',
    component: cmp('/palm/ThoughtReports'),
    meta: {auth: true}
  },

  {
    path: '/UploadPersonalSummary',
    name: 'UploadPersonalSummary',
    component: cmp('/palm/comment/UploadPersonalSummary')
  },

  {path: '/Comment/:title', name: 'Comment', component: cmp('/palm/Comment'), meta: {auth: true}},

  {path: '/FoundOrganization/:title', name: 'FoundOrganization', component: cmp('/palm/FoundOrganization')},

  {path: '/NationComment', name: 'NationComment', component: cmp('/palm/comment/NationComment')},

  {path: '/Comment/:title', name: 'Comment', component: cmp('/palm/Comment')},
  {path: '/FoundOrganization/:title', name: 'FoundOrganization', component: cmp('/palm/FoundOrganization')},
  {path: '/password', name: 'password', component: cmp('/my/password'), meta: {auth: true}},
  {path: '/integration', name: 'integration', component: cmp('/my/integration'), meta: {auth: true}},
  {path: '/message', name: 'message', component: cmp('/interact/message'), meta: {auth: true}},
  {path: '/MemberInteract', name: 'MemberInteract', component: cmp('/interact/MemberInteract')},
  {path: '/comments', name: 'comments', component: cmp('/pictureLink/comments')},
  {path: '/forumSave', name: 'forumSave', component: cmp('/forum/forumSave')},
  {path: '/forumAdd', name: 'forumAdd', component: cmp('/forum/forumAdd')}
]
