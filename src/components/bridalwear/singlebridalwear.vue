<template>
    <v-container>
        <v-layout>
            <v-flex xs12 class="ml-1 mr-3">
               
            <v-card elevation="19">
                <v-img class="img" :src="item.img" height="600px"></v-img>
                <v-card-title class="display-1">
                    {{item.name}}
                </v-card-title>
                <v-card-text class="card-text ml-3">
                    <v-layout row wrap>
                    <v-flex xs12 sm5 class="ml-5 mb-8">
                    <v-layout row class="font-weight-black">
                        {{item.location}}
                    </v-layout>
                    <v-layout row class="font-weight-black">
                        Type of bridalwear
                    </v-layout>
                    <v-layout row >
                        {{item.category}}
                    </v-layout>

                    <v-layout row class="font-weight-black">
                        Wedding dresses
                    </v-layout>
                    <v-layout row >
                        <pre>{{item.weddinglist}}</pre>
                    </v-layout>

                    <v-layout row class="font-weight-black">
                        Homecoming dresses
                    </v-layout>
                    <v-layout row >
                        <pre>{{item.homecominglist}}</pre>
                    </v-layout>

                    <v-layout row class="font-weight-black">
                        Price range(Rs)
                    </v-layout>
                    <v-layout row >
                        {{item.pricemin}} - {{item.pricemax}}
                    </v-layout>
                    
                    </v-flex>
                    
                    <v-flex xs12 sm5 class="ml-5">
                        <v-layout row>
                        <span class="headline font-weight-bold">contact info</span>
                        </v-layout>
                         <v-layout row class="font-weight-black">
                        {{item.number}}
                    </v-layout>
                    <v-layout row class="font-weight-black">
                        {{item.website}}
                    </v-layout>
                    <v-layout row class="font-weight-black">
                        {{item.email}}
                    </v-layout>
                    <v-layout row>
                    <v-btn height="26" color="grey">request a quotation</v-btn>
                    </v-layout>
                    </v-flex>
                    </v-layout>
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
        imgs: [],
        category0: '',
        category1: ''
        }
    },
    
    props: ['id'],
    
    mounted () {
       
        this.wholeResponse = this.$store.getters.bridalwearsfind(this.id)
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
            return this.$store.getters.bridalwearsfind(this.id)
        }
    }

}
</script>

