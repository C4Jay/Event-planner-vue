import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hotels from '../views/Hotels.vue'
import Hotelsform from '@/components/forms/hotelform.vue'
import Hotelsform1 from '@/components/forms/hotelform1.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotels',
    name: 'Hotels',
    component: Hotels
  },
  {
    path: '/hotelsform',
    name: 'Hotelsform',
    component: Hotelsform
  },
  {
    path: '/hotelsform1',
    name: 'Hotelsform1',
    component: Hotelsform1
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
