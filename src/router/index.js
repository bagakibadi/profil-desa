import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Berita from '../views/DetailBerita.vue'
import Logo from '../views/Logo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/berita/:id',
    name: 'Berita',
    component: Berita
  },
  {
    path: '/logo',
    name: 'Logo',
    component: Logo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
