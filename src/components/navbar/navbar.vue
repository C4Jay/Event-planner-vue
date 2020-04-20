<template class="main">
  <v-card
  
  
  shaped
    
  >
    <v-toolbar elevation="19" color="rgba(252, 3, 132, 0.2)" dense>
   
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon color="purple">
        <v-icon color="purple">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<style scoped>
.main {
    position: fixed
}
.card {
    background-color: rgba(255, 0, 0, 0.2);
}
</style>
