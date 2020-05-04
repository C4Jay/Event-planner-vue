import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hotels from '../views/Hotels.vue'
import Hotelsform from '@/components/forms/hotelform.vue'
import Hotelsform1 from '@/components/forms/hotelform1.vue'
import SignIn from '@/components/user/signin.vue';
import SignUp from '@/components/user/signup.vue';
import Bands from '@/components/bands/bands.vue';
import Bridalwear from '@/components/bridalwear/bridalwear.vue'
import Cake from '@/components/cake/cake.vue';
import Cars from '@/components/cars/cars.vue';
import Catering from '@/components/catering/catering.vue';
import Flora from '@/components/flora/flora.vue';
import Groomwear from '@/components/groomwear/groomwear.vue';
import Invcards from '@/components/invcards/invcards.vue';
import Jewellery from '@/components/jewellery/jewellery.vue';
import Photography from '@/components/photography/photography.vue';
import Salons from '@/components/salons/salons.vue';
import Weddingplanners from '@/components/weddingplanners/weddingplanners.vue';
import Locations from '@/components/locations/locations.vue';
import Singlehotel from '@/components/hotels/singlehotel.vue';
import Createhotelform from '@/components/hotels/createhotelform.vue';
import Createphotographyform from '@/components/photography/createphotographyform.vue';
import Createbandsform from '@/components/bands/createbandsform.vue';
import navbartr from '@/components/navbar/navbartrtest.vue';
import Singlephotography from '@/components/photography/singlephotography.vue';

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
    path: '/hotels/:id',
    name: 'hotels',
    props: true,
    component: Singlehotel
  },
  {
    path: '/photography/:id',
    name: 'photography',
    props: true,
    component: Singlephotography
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
    path: '/signin',
    name: 'Signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/bands',
    name: 'bands',
    component: Bands
  },
  {
    path: '/bridalwear',
    name: 'bridalwear',
    component: Bridalwear
  },
  {
    path: '/cake',
    name: 'cake',
    component: Cake
  },
  {
    path: '/cars',
    name: 'cars',
    component: Cars
  },
  {
    path: '/catering',
    name: 'catering',
    component: Catering
  },
  {
    path: '/flora',
    name: 'flora',
    component: Flora
  },
  {
    path: '/groomwear',
    name: 'groomwear',
    component: Groomwear
  },
  {
    path: '/invcards',
    name: 'invcards',
    component: Invcards
  },
  {
    path: '/jewellery',
    name: 'jewellery',
    component: Jewellery
  },
  {
    path: '/locations',
    name: 'locations',
    component: Locations
  },
  {
    path: '/photography',
    name: 'photography',
    component: Photography
  },
  {
    path: '/salons',
    name: 'salons',
    component: Salons
  },
  {
    path: '/weddingplanners',
    name: 'weddingplanners',
    component: Weddingplanners
  },
  {
    path: '/singlehotel/:id',
    name: 'singlehotel',
    props: true,
    component: Singlehotel
  },
  {
    path: '/createhotelform',
    name: 'createhotelform',
    component: Createhotelform
  },
  {
    path: '/createphotographyform',
    name: 'createphotographyform',
    component: Createphotographyform
  },
  {
    path: '/createbandsform',
    name: 'createbandsform',
    component: Createbandsform
  },
  {
    path: '/navbartr',
    name: 'navbartr',
    component: navbartr
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
