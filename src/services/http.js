/**
 *  Service for handling all HTTP requests
 *  ---------------------------------------------
 *  Author : IndexXuan(https://github.com/IndexXuan)
 *  Mail   : indexxuan@gmail.com
 *  Date   : Wed 03 Feb 2016 09:17:28 PM CST
 */

export default {
  request(method, url, data, successCb = null, errorCb = null) {
    return Vue.http[method](url, data).then(successCb, errorCb)
  },

  get(url, data = {}, successCb = null, errorCb = null) {
    return this.request('get', url, data, successCb, errorCb)
  },

  post(url, data, successCb = null, errorCb = null) {
    return this.request('post', url, data, successCb, errorCb)
  },

  put(url, data, successCb = null, errorCb = null) {
    return this.request('put', url, data, successCb, errorCb)
  },

  delete(url, data = {}, successCb = null, errorCb = null) {
    return this.request('delete', url, data, successCb, errorCb)
  },

  /**
   * A shortcut method to ping and check if the user session is still valid.
   */
  ping() {
    return this.get('/')
  },
}
