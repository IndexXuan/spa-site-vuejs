/**
  File   : main.js
  Date   : 2016年01月12日 星期二 03时02分29秒
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import http from 'vue-resource'
import routerConfig from './routerConfig'
import ls from './services/ls'
import filters from './filters'
import config from './config'

// install Router
Vue.use(VueRouter)

// install vue-resource, config it and add interceptors
Vue.use(http)
Vue.http.options.root = 'http://api.hizuoye.com/api/v1/'
Vue.http.interceptors.push({
  request(r) {
    const token = ls.get('illy-token')

    if (token) {
      Vue.http.headers.common.Authorization = `Bearer ${token}`
    }

    return r
  },

  response(r) {
    if (r.status === 400 || r.status === 401) {
      console.log(`error with response in ${r.url}`)
    }
  }
})

// export settings to global
window.illyConfig = config 

// instance all registed fitlers
Object.keys(filters).forEach( (filterName) => Vue.filter(filterName, filters[filterName]) )

// create Router
const router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: false 
})

// configure Router
routerConfig(router)

// bootstrap the app, bind into dom'root node with id #app
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')

// make vue global
window.vue = Vue

// just for debugging
if (process.NODE_ENV !== 'production') {
  Vue.config.debug = true
}

window.router = router

