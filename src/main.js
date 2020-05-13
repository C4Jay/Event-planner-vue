import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import EasySlider from 'vue-easy-slider'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faSpa } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase'
import StarRating from 'vue-star-rating'
import LightGallery from 'vue-light-gallery';
 
Vue.use(LightGallery);

library.add(faUserSecret)
library.add(fas)
library.add(faSpa)
library.add(faBirthdayCake)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('star-rating', StarRating);
Vue.use(EasySlider)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  icons: {
    iconfont: 'faSvg',
  },
  render: h => h(App),
  created () {

    var firebaseConfig = {
      apiKey: "AIzaSyAyGlQK51GXFz4kBRLj9BT-jIS55K70c0Q",
      authDomain: "wedding-planner-project.firebaseapp.com",
      databaseURL: "https://wedding-planner-project.firebaseio.com",
      projectId: "wedding-planner-project",
      storageBucket: "wedding-planner-project.appspot.com",
      messagingSenderId: "1085941548726",
      appId: "1:1085941548726:web:c1df639cdebdeb65bfc817",
      measurementId: "G-HPTP64LLES"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    this.$store.dispatch('fetchHotels')
    this.$store.dispatch('fetchPhotography')
    this.$store.dispatch('fetchbands')
    this.$store.dispatch('fetchcars')
    this.$store.dispatch('fetchcatering')
    this.$store.dispatch('fetchcake')
    this.$store.dispatch('fetchbridalwear')

  }
}).$mount('#app')
