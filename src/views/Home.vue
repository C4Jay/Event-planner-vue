<template>
  <span>
    <!-- <navbar></navbar> -->
    <!-- <navbar1></navbar1> -->
    <slideshow></slideshow>
    <iconbg></iconbg>
    <!-- <parlx1></parlx1> -->
    <!-- <sellers></sellers> -->
    <slideshow1></slideshow1>
    <parlx2></parlx2>
    <!-- <Footer></Footer> -->
  </span>
</template>

<script>
// @ is an alias to /src
// import Parlx1 from '@/components/home/Parlx1.vue'
/* import navbar from '@/components/navbar/navbar.vue' */
// import sellers from '@/components/cards/sellers.vue'
import Parlx2 from '@/components/home/Parlx2.vue'
// import Footer from '@/components/footer/Foooter.vue'
// import navbar1 from '@/components/navbar/navbar1.vue'
import slideshow from '@/components/slideshow/slideshow.vue'
import slideshow1 from '@/components/slideshow/slideshow1.vue'
import iconbg from '@/components/icons/iconbg.vue';

export default {
  name: 'Home',
  components: {
    /* navbar, */
    // Parlx1,
    // sellers,
    slideshow,
    Parlx2,
    // Footer,
    // navbar1,
    slideshow1,
    iconbg
  }
}
</script>
