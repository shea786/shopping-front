import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from './routes.js'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'

Vue.use(Vuetify)
Vue.use(Router)
Vue.use(VueResource)
Vue.use(Auth)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
