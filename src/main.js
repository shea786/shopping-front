import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from './routes.js'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'
import VeeValidate from 'vee-validate';

Vue.use(Vuetify)
Vue.use(Router)
Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate);

Vue.http.options.root = 'http://api.shopping.app'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
Vue.http.interceptors.push((response, next) => {
  next(response => {
    if(response.stats == 404) {
      swal(response.status.toString(), response.body.error, 'error')
    } else if(response.status == 500) {
      swal(response.status.toString(), 'The site is temporary unavailable', 'error')
    }
  })
})

Router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)) {
      if(Vue.auth.isAuthenticated()) {
        next ({
          path: '/feed'
        })
      } else {
        next()
      }
    } else if(to.matched.some(record => record.meta.forAuth)) {
      if(!Vue.auth.isAuthenticated()) {
        next ({
          path: '/login'
        })
      } else {
        next()
      }
    } else{
      next()
    }
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
