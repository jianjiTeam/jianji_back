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
      { path: '', redirect: '/ClientManage' },
      { path: 'ClientManage', name: 'ClientManage', component: cmp('/clientManage/ClientManage') },
      { path: 'InvoiceMessage', name: 'InvoiceMessage', component: cmp('/invoiceMessage/InvoiceMessage') },
      { path: 'SendInform', name: 'SendInform', component: cmp('/sendInform/SendInform') },
      { path: 'ShopOrder', name: 'ShopOrder', component: cmp('/shopOrder/ShopOrder') },
      { path: 'TopUpRecord', name: 'TopUpRecord', component: cmp('/topUpRecord/TopUpRecord') },
      { path: 'UserFeedback', name: 'UserFeedback', component: cmp('/userFeedback/UserFeedback') }
    ]
  }
]
