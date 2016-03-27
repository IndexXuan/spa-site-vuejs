/**
 *  Service for simplified localStorage API
 *  ---------------------------------------------
 *  Author : IndexXuan(https://github.com/IndexXuan)
 *  Mail   : indexxuan@gmail.com
 *  Date   : Wed 03 Feb 2016 09:19:43 PM CST
 */

import ls from 'local-storage'

export default {
  get(key, defaultVal = null) {
    var val = ls(key)
    return val ? val : defaultVal
  },

  set(key, val) {
    return ls(key, val)
  },

  remove(key) {
    return ls.remove(key)
  },

  clear() {
    return ls.clear()
  }
}
