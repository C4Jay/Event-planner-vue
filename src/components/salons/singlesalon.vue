<template>
    <v-container>
        <v-layout class="desc">
            <v-flex xs12 class="ml-1 mr-3">
            <v-card elevation="19">
                <v-img class="img" :src="item.img" height="400px"></v-img>
                <v-card-title>
                    <h1>
                    {{item.name}}  
                    </h1>
                </v-card-title>
                <v-card-text class="card-text ml-3">
                    <v-layout row wrap>
                    <v-flex xs12 sm5 class="ml-5 mb-8">
                    <v-layout row class="font-weight-light">
                       <v-icon>mdi-map-marker</v-icon><h3> {{item.location}}</h3>
                    </v-layout>
                    
                   
                    </v-flex>
                    
                    <v-flex xs12 sm5 class="ml-5 desc">
                        <v-layout row>
                        <span class="headline font-weight-bold">contact info</span>
                        </v-layout>
                         <v-layout row class="font-weight-light">
                       <v-icon>mdi-phone</v-icon><pre>   {{item.number}}</pre>
                    </v-layout>
                    <v-layout row class="font-weight-light">
                       <v-icon>mdi-earth</v-icon><pre>   {{item.website}}</pre>
                    </v-layout>
                    <v-layout row class="font-weight-light">
                   <v-icon>mdi-mail</v-icon>     <pre>   {{item.email}}</pre>
                    </v-layout>
                    <v-layout row>
                    <v-btn height="26" color="grey">request a quotation</v-btn>
                    </v-layout>
                    </v-flex>
                    </v-layout>


                    <v-flex xs12 md6 class="mt-10">
                    <v-layout row>
                        <h3 class="font-weight-bold">About {{item.name}}</h3>
                    </v-layout>
                        <v-layout row>
                        <p class="font-weight-light">{{item.description}}</p>
                        </v-layout>
                    </v-flex>
                </v-card-text>
            </v-card>
            </v-flex>
        </v-layout>
        <v-flex xs12 class="ml-1 mr-3">
        <v-carousel
        autoplay
        cycle
        interval="3000">
    <v-carousel-item
      v-for="(item,i) in imgs"
      :key="i"
      :src="item"
      reverse-transition="slide-Y-transition"
      transition="slide-y-transition"
    ></v-carousel-item>
  </v-carousel>
  
        </v-flex>
    </v-container>
</template>



<script>
export default {
    data() {
        return {
        wholeResponse: [],
        hotel: {},
        imgs: []
        }
    },
    
    props: ['id'],
    
    mounted () {
       
        this.wholeResponse = this.$store.getters.salonsfind(this.id)
        console.log(this.wholeResponse.img)
        this.imgs.push(this.wholeResponse.img)
        this.imgs.push(this.wholeResponse.img1)
        this.imgs.push(this.wholeResponse.img2)
        this.imgs.push(this.wholeResponse.img3)
        this.imgs.push(this.wholeResponse.img4)
        this.imgs.push(this.wholeResponse.img5)
    },

    computed: {
        item() {
            return this.$store.getters.salonsfind(this.id)
        }
    }

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.desc {
    font-family: 'Montserrat', sans-serif;
}
</style>
