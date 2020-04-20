<template>
  <span>
    <!-- <navbar></navbar> -->
    <!-- <navbar1></navbar1> -->
    <parlx1></parlx1>
    <sellers></sellers>
    <parlx2></parlx2>
    <Footer></Footer>
  </span>
</template>

<script>
// @ is an alias to /src
import Parlx1 from '@/components/home/Parlx1.vue'
/* import navbar from '@/components/navbar/navbar.vue' */
import sellers from '@/components/cards/sellers.vue'
import Parlx2 from '@/components/home/Parlx2.vue'
import Footer from '@/components/footer/Foooter.vue'
// import navbar1 from '@/components/navbar/navbar1.vue'

export default {
  name: 'Home',
  components: {
    /* navbar, */
    Parlx1,
    sellers,
    Parlx2,
    Footer,
    // navbar1
  }
}
</script>
