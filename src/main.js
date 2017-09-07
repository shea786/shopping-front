import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from './routes.js'

Vue.use(Vuetify)
Vue.use(Router)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
