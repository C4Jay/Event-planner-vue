<template class="main">
  <v-card
  
  
  shaped
    
  >
    <v-toolbar height="66" elevation="19" color="pink accent-1" dense>
   
      <v-app-bar-nav-icon>
        <v-img class="ml-10 img" src="https://www.48hourslogo.com/48hourslogo_data/2019/03/04/82508_1551698623.png" height="60px" width="80px">
        </v-img>
      </v-app-bar-nav-icon>
        <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon color="purple">
        <v-icon color="purple">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      hide-overlay
      app
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    </v-toolbar>
  </v-card>
</template>



<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
      }
    },
  }
</script>

<style scoped>
.main {
    position: fixed;
    max-height: 1000
}
.card {
    background-color: rgba(255, 0, 0, 0.2);
}

.img {
  max-width: 30;
  max-height: 10;
  border-radius: 6
}
</style>
