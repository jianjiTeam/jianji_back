var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')
import config from '../plugin/prototype/http/config'
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios)

mock.onGet(config.invoices).reply(200, require('./invoicesData').default)
mock.onPut(config.invoices).reply(200, '')
mock.onPost(config.invoices).reply(200, '')
