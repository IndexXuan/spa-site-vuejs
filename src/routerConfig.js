/**
  File   : routeConfig.js
  Date   : 2016年01月12日 星期二 03时07分29秒
*/

export default function routerConfig(router) {

  // normal routes
  router.map({

    '/index': {
      name: 'index',
      component: require('./views/index.vue')
    },

    '/list/:categoryId': {
      name: "list",
      component: require('./views/list.vue')
    },

    // nested example
    '/detail/:articleId': {
      name: "detail",
      component: require('./views/detail.vue')
      // subRoutes: {
      //   // match "user/:userId/profile/:something"
      //   'profile/:something': {
      //     component: require('./components/user/profile.vue')
      //   }
      // }
    },

    // not found handler
    "*": {
      component: require('./views/index.vue')
    }

  })

  // redirect 
  router.redirect({
    // not sure the default listId, so failed to use redirect
    '/': '/index',
    '/list': '/',
    '/detail': '/'
  })

  // global before
  // 3 options
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  // router.beforeEach( (transition) => {
    // if (transition.to.path === '/forbidden') {
      // router.app.authenticating = true
      // setTimeout( () => {
        // router.app.authenticating = false
        // alert('this route is forbidden by a global before hook!')
        // transition.abort()
      // }, 3000)
    // } else {
      // transition.next()
    // }
  // })

}
