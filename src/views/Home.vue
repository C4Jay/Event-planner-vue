<template>
  <span>
    <navbartile></navbartile>
    <!-- <navbar></navbar> -->
    <!-- <navbartest></navbartest> -->
    <!-- <navbar1></navbar1> -->
    <!-- <slideshow class="slide"></slideshow> -->
    <slideshowcar class="slide"></slideshowcar>
    <!-- <iconbg></iconbg> -->
    <awesomeicons1 class="icons1"></awesomeicons1>
    <awesomeicons class="icons"></awesomeicons>
    <!-- <parlx1></parlx1> -->
    <!-- <sellers></sellers> -->
    
    <!-- <slideshow1></slideshow1> -->
    <listsearch></listsearch>
    <vendors></vendors>
    <offers></offers>
    <!-- <paidlist></paidlist> -->
    <parlx2></parlx2>
    <!-- <Footer></Footer> -->
  </span>
</template>

<script>

import navbartile from '@/components/navbar/navbartile.vue';
// @ is an alias to /src
// import navbartest from '@/components/navbar/navbartest.vue';
// import Parlx1 from '@/components/home/Parlx1.vue'
// import navbar from '@/components/navbar/navbar.vue'
// import sellers from '@/components/cards/sellers.vue'
import Parlx2 from '@/components/home/Parlx2.vue'
// import Footer from '@/components/footer/Foooter.vue'
// import navbar1 from '@/components/navbar/navbar1.vue'
// import slideshow from '@/components/slideshow/slideshow.vue'

// import slideshow1 from '@/components/slideshow/slideshow1.vue'

// import iconbg from '@/components/icons/iconbg.vue';
import awesomeicons from '@/components/icons/awesomeicons.vue';
import slideshowcar from '@/components/slideshow/slideshowcar.vue';
// import paidlist from '@/components/paidsellers/paidlist.vue';
import listsearch from '@/components/home/listsearch.vue';
import awesomeicons1 from '@/components/icons/awesomeicons1.vue';
import vendors from '@/components/home/vendors.vue';
import offers from '@/components/home/offers.vue';

export default {
  name: 'Home',
  components: {
    navbartile,
    // navbartest,
    // navbar,
    // Parlx1,
    // sellers,
    // slideshow,
    Parlx2,
    // Footer,
    // navbar1,

// slideshow1,

    // iconbg,
    awesomeicons,
    slideshowcar,
    // paidlist,
    listsearch,
    awesomeicons1,
    vendors,
    offers
  }
}
</script>

<style scoped>
.slide {
  /* position: relative; */
  margin-top: 0px

}

.icons {
  display: block;
}

.icons1 {
  display: none
}

@media only screen and (max-width: 1024px) {
  .icons {
    display: none
  }

  .icons1 {
    display: block
  }
}

/* @media only screen and (min-width: 320px) and (max-width: 450px) {
  .icons{
    display: none
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1366px) {
  .icons1 {
    display: none
  }
} */

</style>

