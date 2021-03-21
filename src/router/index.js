import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Masuk from '../views/Masuk.vue'
import Berita from '../views/DetailBerita.vue'

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
