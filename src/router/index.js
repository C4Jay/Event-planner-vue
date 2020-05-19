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
import Createcarsform from '@/components/cars/createcarsform.vue';
import navbartr from '@/components/navbar/navbartrtest.vue';
import Singlephotography from '@/components/photography/singlephotography.vue';
import Singleband from '@/components/bands/singleband.vue';
import Singlecar from '@/components/cars/singlecar.vue';
import Singlecatering from '@/components/catering/singlecatering.vue';
import Createcateringform from '@/components/catering/createcateringform.vue';
import Createcakeform from '@/components/cake/createcakeform.vue';
import Createlocationform from '@/components/locations/createlocationsform.vue';
import Createbridalwearform from '@/components/bridalwear/createbridalwearform.vue';
import Createinvcardform from '@/components/invcards/createinvcardsform.vue';
import Singlecake from '@/components/cake/singlecake.vue';
import Singlebridalwear from '@/components/bridalwear/singlebridalwear.vue';
import Singlelocation from '@/components/locations/singlelocation.vue';
import Singleinvcard from '@/components/invcards/singleinvcard.vue';


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
    path: '/bands/:id',
    name: 'bands',
    props: true,
    component: Singleband
  },
  {
    path: '/cars/:id',
    name: 'cars',
    props: true,
    component: Singlecar
  },
  {
    path: '/catering/:id',
    name: 'catering',
    props: true,
    component: Singlecatering
  },
  {
    path: '/cake/:id',
    name: 'cake',
    props: true,
    component: Singlecake
  },
  {
    path: '/bridalwear/:id',
    name: 'bridalwear',
    props: true,
    component: Singlebridalwear
  },
  {
    path: '/locations/:id',
    name: 'location',
    props: true,
    component: Singlelocation
  },
  {
    path: '/invcards/:id',
    name: 'invcard',
    props: true,
    component: Singleinvcard
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
    path: '/createcarsform',
    name: 'createcarsform',
    component: Createcarsform
  },
  {
    path: '/createcateringform',
    name: 'createcateringform',
    component: Createcateringform
  },
  {
    path: '/createcakeform',
    name: 'createcakeform',
    component: Createcakeform
  },
  {
    path: '/createlocationform',
    name: 'createlocationform',
    component: Createlocationform
  },
  {
    path: '/createbridalwearform',
    name: 'createbridalwearform',
    component: Createbridalwearform
  },
  {
    path: '/createinvcardform',
    name: 'createinvcardform',
    component: Createinvcardform
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
