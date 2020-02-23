import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLocalForage from 'vue-localforage'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueBus from 'vue-bus'

Vue.use(VueBus)
Vue.use(VueAxios, axios)


Vue.use(VueLocalForage)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
