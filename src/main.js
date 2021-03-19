import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'

import AOS from 'aos'
import 'aos/dist/aos.css'
import JwPagination from 'jw-vue-pagination'
Vue.component('jw-pagination', JwPagination)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
