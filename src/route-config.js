/**
  File   : route-config.js
  Date   : 2016年01月12日 星期二 03时07分29秒
*/

export function config(router) {

  // normal routes
  router.map({
    // basic example
    'about': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the 
      // App component's scope
      component: require('./components/about.vue')
    },

    // nested example
    '/user/:userId': {
      component: require('./components/user/index.vue'),
      subRoutes: {
        // match "user/:userId/profile/:something"
        'profile/:something': {
          component: require('./components/user/profile.vue')
        },
        // match "/user/:userId/posts"
        'posts': {
          component: require('./components/user/posts.vue')
        },
        // match "user/:userId/settings"
        'settings': {
          component: require('./components/user/settings.vue')
        }
      }
    },

    // not found handler
    "*": {
      component: require('./components/404.vue')
    },

    // advanced example
    'inbox': {
      component: require('./components/inbox/index.vue'),
      subRoutes: {
        'message/:messageId': {
          component: require('./components/inbox/message.vue')
        },
        '/archived': {
          component: require('./components/inbox/archive.vue')
        },
        // default component to render into the nested outlet
        // when the parent route is matched but there's no
        // nested segment. In this case, "/inbox"
        '/': {
          // inline component
          component: {
            template: 'default yo'
          }
        }
      }
    }
  })

  // redirect 
  router.redirect({
    '/info': '/about',
    '/hello/:userId': '/user/:userId'
  })

  // global before
  // 3 options
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach( (transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout( () => {
        router.app.authenticating = false
        alert('this route is forbidden by a global before hook!')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })

}
