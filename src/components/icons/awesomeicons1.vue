<template>
<v-container  class="icons">
    <v-flex class="text-center">

        <v-flex xs12 class="text-center textfield">
              <v-form>
                  <v-container>
                      <!-- <v-layout row>
                          <v-flex class="text-center topic">
                              Ayubowan
                          </v-flex>
                      </v-layout> -->
                     <v-layout row wrap class="text-center ">
                          <v-flex class="text-center row">
                          <v-flex sm3 class="textfield mr-3 .body-1">
                          <!-- <v-text-field
                          class="body-1"
                          background-color="rgba(223, 230, 225, 0.6)"
                          label="what?"
                          solo
                          append-icon="mdi-file-find">                                                        
                          </v-text-field> -->
                          <v-select
                          solo
                          :items="types"
                          v-model="type"
                          label="What?"></v-select>
                          </v-flex>

                          <v-flex sm3 class="textfield">
                          <!-- <v-text-field
                          class="text"
                          background-color="rgba(223, 230, 225, 0.6)"
                          label="location?"
                          solo
                          append-icon="mdi-file-find">                             
                          </v-text-field>
                           -->
                           <v-select
                           solo
                           :items="locations"
                           v-model="location"
                           label="Where?"></v-select>
                           </v-flex>

                           <v-flex md3 ><v-btn color="pink">find</v-btn></v-flex>

                          </v-flex>
                      </v-layout>
                  </v-container>
              </v-form>
          </v-flex>
    
    <v-container  class="icons1">
    <v-layout row class="ml-7">

       

        <v-flex ><!-- sm4 md2 -->
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
            <v-layout row>
            <router-link to="/bands"><img class="icon" height="60" src="@/assets/icons/light/compact-disc.svg"></router-link>
            </v-layout>
            <v-layout row>
                <span>Music</span>
            </v-layout>
        </v-flex>
        

                
        <v-flex>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/bridalwear"><img height="60" src="@/assets/icons/light/user-tie.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Attire</span>
           </v-layout>
        </v-flex>

        <v-flex>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/locations"><img height="60" src="@/assets/icons/light/globe-europe.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Location</span>
           </v-layout>
        </v-flex>

    </v-layout>

    <v-layout row wrap class="ml-7">

       <v-flex>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/weddingplanners"><img height="60" src="@/assets/icons/light/tasks.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Planners</span>
           </v-layout>
        </v-flex>

        <v-flex>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/invcards"><img height="60" src="@/assets/icons/light/gifts.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Cards / Gifts</span>
           </v-layout>
        </v-flex>

        

         <v-flex>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/photography"><img height="60" src="@/assets/icons/light/camera.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Photography</span>
           </v-layout>
        </v-flex>
    </v-layout>

    

    <v-layout row wrap class="ml-7">
        <!-- <v-flex> -->
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <!-- <i class="fas fa-utensils icon"></i> -->
        <!-- </v-flex> -->

        <!-- flower -->
        <v-flex>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/cars"><img height="60" src="@/assets/icons/light/car.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Car</span>
           </v-layout>
        </v-flex>

        <v-flex>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/cake"><img height="60" src="@/assets/icons/light/birthday-cake.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Cake</span>
           </v-layout>
        </v-flex>

        <v-flex>
            <v-layout row>
            <router-link to="/flora"><img height="60" src="@/assets/icons/light/flower-tulip.svg"></router-link>
            </v-layout>
            <v-layout row>
                <span>Flora</span>
            </v-layout>
        </v-flex>

    </v-layout>

    <v-layout row wrap class="ml-7">
        <v-flex>
            <v-layout row>
            <router-link to="/salons"><img height="60" src="@/assets/icons/light/female.svg"></router-link>
            </v-layout>
            <v-layout row>
                <span>Salons</span>
            </v-layout>
        </v-flex>

        <v-flex class="hotel">
            <v-layout row>
            <router-link to="/hotels"><img height="60" src="@/assets/icons/light/hotel.svg"></router-link>
            </v-layout>
            <v-layout row>
                <span>Hotel</span>
            </v-layout>
        </v-flex>
       <!--  <v-flex>
             -->
           <!-- <i class="fas fa-spa icon"></i>
        </v-flex> -->

      <!--   <v-flex>
        <v-icon size="60" to="/hotels" color="">mdi-cake-layered</v-icon>
        </v-flex> -->

        

    </v-layout> 
    </v-container>    
    </v-flex>
</v-container>
</template>


<script>
// fontawesome.library.add(brands, faSpinner);
export default {
    name: 'awesomeicons1',

    data () {
        return {
            types : ['Hotels','Photography','Cars','Jewellery','Bands','Cake','Catering','Hair & beauty','Decorators','Cards / Gifts'],
            locations: ['Galle',
                    'Colombo',
                    'Gampaha',
                    'Hambantota',
                    'Jaffna',
                    'Kalutara',
                    'Kandy',
                    'Kegalle',
                    'Kilinochchi',
                    'Kurunegala',
                    'Mannar',
                    'Matale',
                    'Matara',
                    'Monaragala',
                    'Mullaitivu',
                    'Nuwara Eliya',
                    'Polonnaruwa',
                    'Puttalam',
                    'Ratnapura',
                    'Trincomalee',
                    'Vavuniya',
                    'Ampara',
                    'Anuradhapura',
                    'Badulla',
                    'Batticalo']
        }
    }
}
</script>


<style scoped>
.icon {
    font-size: 60px;
    color: 'rgba(212, 207, 184, 0.5)';
            font-family: 'Montserrat', sans-serif;

    /* color: green */
}
.icons {
    margin-left: 100px;
            font-family: 'Montserrat', sans-serif;

    
}
.icons1 {
    margin-left: 200px;
            font-family: 'Montserrat', sans-serif;

   
}

.hotel {
    margin-left: -101px
}
@media only screen and (max-width: 450px) {
    .icons {
        margin-left: -10px
    }
    .icons1 {
        margin-left: 10px
    }
    span {
        font-size: 15px;
        margin-bottom: 3px;
                font-family: 'Montserrat', sans-serif;

    }
}
@media only screen and (min-width : 768px) and (max-width : 1024px)  { 
    
    .icons {
        margin-left: -130px
    }
    .textfield {
        margin-left: 100px
    }
}
@media only screen and (min-width: 1023px) and (max-width: 1024px) {
    .textfield {
        margin-left: 80px
    }
    .icons1 {
        /* margin-left: 100px */
    }
}

@media only screen and (min-width: 1024px) {
    .icons1 {
        margin-left: 0px
    }
}
span {
    text-align: center;
    margin-bottom: 3px
}

</style>