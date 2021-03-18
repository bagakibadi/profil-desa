import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Masuk from '../views/Masuk.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/masuk',
    name: 'Masuk',
    component: Masuk
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
