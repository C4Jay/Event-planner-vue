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
import Createsalonform from '@/components/salons/createsalonsform.vue';

import Createfloraform from '@/components/flora/createfloraform.vue';
import Singlecake from '@/components/cake/singlecake.vue';
import Singlebridalwear from '@/components/bridalwear/singlebridalwear.vue';
import Singlelocation from '@/components/locations/singlelocation.vue';
import Singleinvcard from '@/components/invcards/singleinvcard.vue';

import Singlesalon from '@/components/salons/singlesalon.vue';

import Singleflora from '@/components/flora/singleflora.vue';
import Dashboard from '@/components/sellers/dashboard.vue';
import FCreatebandsform from '@/components/fvendors/createbandsform.vue'
import FCreatebridalwearform from '@/components/fvendors/createbridalwearform.vue'
import FCreatecakeform from '@/components/fvendors/createcakeform.vue'
import FCreatecarsform from '@/components/fvendors/createcarsform.vue'
import FCreatefloraform from '@/components/fvendors/createfloraform.vue'
import FCreatehotelform from '@/components/fvendors/createhotelform.vue'
import FCreateinvcardform from '@/components/fvendors/createinvcardsform.vue'
import FCreatelocationform from '@/components/fvendors/createlocationsform.vue'
import FCreatephotographyform from '@/components/fvendors/createphotographyform.vue'
import FCreatesalonform from '@/components/fvendors/createsalonsform.vue'
import Fvendorsdashboard from '@/components/fvendors/dashboard.vue'
import Fvendors from '@/components/fvendors/fvendors.vue'
import Singlevendor from '@/components/fvendors/singlevendor.vue'
import Offersform from '@/components/offers/offersform.vue';
import Singleoffer from '@/components/offers/singleoffer.vue'

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
    name: 'singlecake',
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
    path: '/salons/:id',
    name: 'salon',
    props: true,
    component: Singlesalon
  },
  {
    path: '/flora/:id',
    name: 'flora',
    props: true,
    component: Singleflora
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
    name: 'Bands',
    component: Bands
  },
  {
    path: '/bridalwear',
    name: 'Bride/Groom wear',
    component: Bridalwear
  },
  {
    path: '/cake',
    name: 'Cake',
    component: Cake
  },
 /*  {
    path: '/cake/:location',
    name: 'cake',
    component: Cake,
    props: true
  }, */
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/catering',
    name: 'catering',
    component: Catering
  },
  {
    path: '/flora',
    name: 'Flora',
    component: Flora
  },
  {
    path: '/groomwear',
    name: 'groomwear',
    component: Groomwear
  },
  {
    path: '/invcards',
    name: 'Gifts/ Cards',
    component: Invcards
  },
  {
    path: '/jewellery',
    name: 'Jewellery',
    component: Jewellery
  },
  {
    path: '/locations',
    name: 'Location',
    component: Locations
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/salons',
    name: 'Hair & Beauty',
    component: Salons
  },
  {
    path: '/fvendors',
    name: 'fvendors',
    component: Fvendors
  },
  {
    path: '/fvendorsdashboard',
    name: 'fvendorsdashboard',
    component: Fvendorsdashboard
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
    path: '/fvendors/:id',
    name: 'singlevendor',
    props: true,
    component: Singlevendor
  },
  {
    path: '/createhotelform',
    name: 'createhotelform',
    component: Createhotelform
  },
  {
    path: '/fcreatehotelform',
    name: 'createhotelform',
    component: FCreatehotelform
  },
  {
    path: '/createphotographyform',
    name: 'createphotographyform',
    component: Createphotographyform
  },
  {
    path: '/fcreatephotographyform',
    name: 'createphotographyform',
    component: FCreatephotographyform
  },
  {
    path: '/createbandsform',
    name: 'createbandsform',
    component: Createbandsform
  },
  {
    path: '/fcreatebandsform',
    name: 'createbandsform',
    component: FCreatebandsform
  },
  {
    path: '/createcarsform',
    name: 'createcarsform',
    component: Createcarsform
  },
  {
    path: '/fcreatecarsform',
    name: 'createcarsform',
    component: FCreatecarsform
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
    path: '/fcreatecakeform',
    name: 'createcakeform',
    component: FCreatecakeform
  },
  {
    path: '/createlocationform',
    name: 'createlocationform',
    component: Createlocationform
  },
  {
    path: '/fcreatelocationform',
    name: 'createlocationform',
    component: FCreatelocationform
  },
  {
    path: '/createbridalwearform',
    name: 'createbridalwearform',
    component: Createbridalwearform
  },
  {
    path: '/fcreatebridalwearform',
    name: 'createbridalwearform',
    component: FCreatebridalwearform
  },
  {
    path: '/createinvcardform',
    name: 'createinvcardform',
    component: Createinvcardform
  },
  {
    path: '/fcreateinvcardform',
    name: 'createinvcardform',
    component: FCreateinvcardform
  },
  {
    path: '/createsalonform',
    name: 'createsalonform',
    component: Createsalonform
  },
  {
    path: '/fcreatesalonform',
    name: 'createsalonform',
    component: FCreatesalonform
  },
  {
    path: '/createfloraform',
    name: 'createfloraform',
    component: Createfloraform
  },
  {
    path: '/fcreatefloraform',
    name: 'createfloraform',
    component: FCreatefloraform
  },
  {
    path: '/navbartr',
    name: 'navbartr',
    component: navbartr
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/offersform',
    name: 'offersform',
    component: Offersform
  },
  {
    path: '/:id',
    name: 'singleoffer',
    props: true,
    component: Singleoffer
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
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
  
})

export default router
