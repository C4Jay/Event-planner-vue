<template>
    <v-container>
        <v-layout class="desc">
            <v-flex xs12 class="ml-1 mr-3">
            <v-card elevation="19">
                <v-img class="img" :src="item.img" ></v-img>
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
                    

                    <v-layout row class="comment">
                        <!-- <star-rating :star-size="20" :rating="3.8" :read-only="true" v-model="rating"></star-rating> -->
                   
                    </v-layout>
                    
                   <v-layout row>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                   </v-layout>
                    </v-flex>
                    
                    <v-flex xs12 sm5 class="ml-5 desc">
                        <v-layout row>
                        <!-- <span class="headline font-weight-bold">contact info</span> -->
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
                    <v-btn height="26" class="mt-10" color="#f57056" @click="showmessagebox">request quotation</v-btn>
                    <!-- <v-btn height="26" class="mt-10" color="#f57056" @click="showscorebox">rate this service</v-btn> -->
                    

                   
                        
                     
                   
                    <v-dialog 
      v-model="dialog"
      persistent
      max-width="348"
      
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mt-10"
        height="26"
          color="#f57056"
          
          v-bind="attrs"
          v-on="on"
        >
          rate this service
        </v-btn>
      </template>
      <v-card>
       <!--  <v-card-title class="headline text-center">
            <v-layout row>
                <v-flex class="text-center">
         Rate this service
                </v-flex>
            </v-layout>
        </v-card-title> -->
         
                
       <!-- <star-rating class="ml-6" :star-size="20" :rating="4" v-model="rating"></star-rating>  -->
                <v-col
        class="d-flex"
        cols="12"
        sm5 offset-sm-6
      >
        <v-select
          :items="items"
          label="Rate this service"
          solo
          v-model="score"
        ></v-select>
      </v-col>

      <v-layout row v-if="score == 5">
          <v-flex class="text-center">
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
          </v-flex>
                   </v-layout>
      
      <v-layout row v-if="score == 4">
          <v-flex class="text-center">
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
          </v-flex>
                   </v-layout>

                   <v-layout row v-if="score == 3">
          <v-flex class="text-center">
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
          </v-flex>
                   </v-layout>

                   <v-layout row v-if="score == 2">
          <v-flex class="text-center">
                       <img height="40" src="@/assets/icons8-star-96.png"/>
                       <img height="40" src="@/assets/icons8-star-96.png"/>
          </v-flex>
                   </v-layout>

                   <v-layout row v-if="score == 1">
          <v-flex class="text-center">
                       <img height="40" src="@/assets/icons8-star-96.png"/>
          </v-flex>
                   </v-layout>
         
        <v-card-actions class="text-center">
          <!-- <v-spacer></v-spacer> -->
           <v-layout row>
                <v-flex class="text-center">
          <v-btn
          class="text-center"
            color="green darken-1"
            text
            @click="dialog = false"
          >
            cancel
          </v-btn>
          <v-btn
          class="text-center"
            color="green darken-1"
            text
            @click="dialog = false"
          >
            done
          </v-btn>
                </v-flex>
           </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        
        <v-flex xs12 class="ml-1 mr-3 desc">
            <v-container xs12 class=" main " v-if="messagebox">
                        
                        <v-layout row>
                            <v-flex xs12 md3 >
                                
                                <v-layout row class="ml-3 mr-6">
                                    <v-text-field
                                    solo
                                    v-model="name"
                                    label="Name">
                                    </v-text-field>
                                </v-layout>
                                     <v-layout row class="ml-3 mr-6">
                                    <v-text-field
                                    solo
                                    v-model="number"
                                    label="Phone number">
                                    </v-text-field>
                                </v-layout>
                                 <v-layout row class="ml-3 mr-6">
                                    <v-text-field
                                    solo
                                    v-model="email"
                                    label="email(optional)">
                                    </v-text-field>
                                </v-layout>
                                <v-layout row class="ml-1 mr-3">
                                     <v-col cols="20">
                         <v-textarea
                          v-model="message"
                          solo
                          
                         >
                       <template v-slot:label>
                         <div>
                          Message
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>
                                </v-layout>
                        <v-layout row class="ml-3">
                            <v-btn @click="send" color="#4de3a0">send</v-btn>
                        </v-layout>
                        

                            </v-flex>

                            <v-flex xs10 sm5 offset-sm-6 class="ml-7 mt-3">
                                <v-layout row>
                                    <h5>You will recieve a reply within 24 hours.</h5>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-container>
        </v-flex>
        
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
import {StarRating} from 'vue-rate-it';

export default {
    components:{
    StarRating
  },
    data() {
        return {
        wholeResponse: [],
        hotel: {},
        imgs: [],
        messagebox: false,
        number: '',
        name: '',
        email: '',
        message: '',
        rating: 4,
        showscore: false,
        dialog: false,
        items: [1,2,3,4,5],
        score: 0
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
    },
    methods: {
        showmessagebox(){
            this.messagebox = !this.messagebox
        },
        showscorebox() {
            this.showscore = !this.showscore
        },
        send() {
            this.$store.dispatch('messaging', {name: this.name, email: this.email,number: this.number, 
            message: this.message, vendorname: this.item.name, vendoremail: this.item.email,
            vendornumber: this.item.number}) 
           this.messagebox = !this.messagebox
        }
    }

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.desc {
    font-family: 'Montserrat', sans-serif;
}

.main {
    background-color: #f57056;
    width: '80%'
}

img {
    object-fit: cover;
}

.comment {
    height: 20px
}

.v-dialog {
    font-family: 'Montserrat', sans-serif;
}
</style>
