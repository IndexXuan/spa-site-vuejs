/**
  File   : index.js
  Date   : 2016年01月12日 星期二 03时02分29秒
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import { config as routerConfig } from './route-config'

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
routerConfig(router)

// bootstrap the app
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')

// just for debugging
window.router = router

