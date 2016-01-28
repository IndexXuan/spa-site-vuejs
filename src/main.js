/**
  File   : index.js
  Date   : 2016年01月12日 星期二 03时02分29秒
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './routerConfig'
import filters from './filters'
console.log(filters.date)

// instance the fitlers
// Object.keys(filters).forEach( (k) => Vue.fitler(k, filters[k]) )
Vue.filter('date', filters.date)

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: false 
})

// configure router
routerConfig(router)

// bootstrap the app, bind into dom root node with #app
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')

// just for debugging
if (process.NODE_ENV !== 'production') {
  Vue.config.debug = true
}

window.vue = Vue
window.router = router

