<template>
    <v-container>
        <v-layout class="desc">
            <v-flex xs12 class="ml-1 mr-3">
               
            <v-card elevation="19">
                <v-img class="img" :src="item.img" height="400px"></v-img>
                <v-card-title>
                   <h1> {{item.name}}</h1>
                </v-card-title>
                <v-card-text class="card-text ml-3">
                    <v-layout row wrap>
                    <v-flex xs12 sm5 class="ml-5 mb-8">
                    <v-layout row class="font-weight-black">
                        <v-icon>mdi-map-marker</v-icon>{{item.location}}
                    </v-layout>
                    <v-layout row class="font-weight-black">
                        Type of cake
                    </v-layout>
                    <v-layout row >
                        {{item.category}}
                    </v-layout>

                    <v-layout row class="font-weight-black">
                        Price range(Rs)
                    </v-layout>
                    <v-layout row >
                        {{item.pricemin}} - {{item.pricemax}}
                    </v-layout>
                    
                    </v-flex>
                    
                    <v-flex xs12 sm5 class="ml-5 desc">
                        <v-layout row>
                        <!-- <span class="headline font-weight-bold ">contact info</span> -->
                        <!-- <v-layout row class="font-weight-black"><h2>contact info</h2></v-layout> -->
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
                    <v-layout row class="mt-10">
                    <v-btn height="26" color="#f57056" @click="showmessagebox">request quotation</v-btn>
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
                    
                   <v-flex class="text-center">
                    
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
        height="618"
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
        category1: '',
        messagebox: false,
        number: '',
        name: '',
        email: '',
        message: ''
        }
    },
    
    props: ['id'],
    
    mounted () {
       
        this.wholeResponse = this.$store.getters.cakesfind(this.id)
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
            return this.$store.getters.cakesfind(this.id)
        }
    },

    methods: {
        showmessagebox(){
            this.messagebox = !this.messagebox
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
    width: '100%'
}
</style>
