<template>
<v-flex class="sliderflex">
  <v-carousel
  class="slider"
  height="618"
  interval="6000"
      cycle
      continuous
      hide-controls
      hide-delimiters
      show-arrows=false>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      autoplay
      
    >
    <template>
        <div> 
           
            <v-layout row class="ml-8 mr-8">
          
            <v-btn color="transparent" depressed class="btns">Home</v-btn>
            <v-spacer></v-spacer> 
            
            <v-btn color="transparent" depressed class="btns" to="/signin">signin</v-btn>
            
            <v-btn color="transparent" depressed class="btns">about</v-btn>
            
            </v-layout>
           
        </div>
        </template>
        <!-- <navbartest></navbartest> -->
        </v-carousel-item>
  </v-carousel>
</v-flex>
</template>

<script>
// import navbartest from '@/components/navbar/navbartest.vue';


  export default {
      components: {
        //   navbartest
      },
    data () {
      return {
        items: [
          {
            src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          },
          /* {
            src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          }, */
          {
            src: 'https://images.unsplash.com/photo-1552711566-7e58cb1eeafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1460364157752-926555421a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          },
        ],
      }
    },
  }
</script>

<style scoped>
.slider {
  height: 900px
}

@media only screen and (max-width: 456px){
.btns {
    font-size: 10px
}
.slider {
  height: 400px
}
}
.btns::before {
    background: transparent
}

.btns:hover {
    color: #f21326;
}

.slider {
  height: 700px
}
</style>
