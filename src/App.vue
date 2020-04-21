<template>
  <v-app>
   <navbar></navbar>
   <navbartest></navbartest>
    <v-content>
      
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import navbar from '@/components/navbar/navbar.vue'
import navbartest from '@/components/navbar/navbartest.vue'

export default {
  name: 'App',

  components: {
    // navbar
    navbartest
  },

  data: () => ({
    //
  }),
};
</script>
