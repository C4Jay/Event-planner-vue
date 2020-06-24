<template>
  <v-app>
   <!-- <navbar></navbar> -->
   <!-- <navbartest class="nav"></navbartest> -->
    <v-content>
      <vue-page-transition name="fade-in-right">
      <router-view></router-view>
      </vue-page-transition>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>
// import navbar from '@/components/navbar/navbar.vue'
// import navbartest from '@/components/navbar/navbartest.vue'
import Footer from '@/components/footer/Foooter.vue'

export default {
  name: 'App',

  components: {
    // navbar
    // navbartest,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped>
.nav {
  position: absolute
}
</style>
