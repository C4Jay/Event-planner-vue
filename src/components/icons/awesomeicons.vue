<template>
<v-container class="icons">
    <v-flex class="text-center">

        <v-flex xs12 class="text-center textfield">
              <v-form>
                  <v-container>
                      <!-- <v-layout row>
                          <v-flex class="text-center topic">
                              Ayubowan
                          </v-flex>
                      </v-layout> -->
                      <v-layout row wrap class="text-center ml-8">
                          <v-flex class="text-center row">
                          <v-flex md4 class="textfield mr-3 .body-1">
                          <!-- <v-text-field
                          class="body-1"
                          background-color="rgba(223, 230, 225, 0.6)"
                          label="what?"
                          solo
                          append-icon="mdi-file-find">                                                        
                          </v-text-field> -->
                          <v-select
                          outlined
                          solo
                          :items="types"
                          v-model="type"
                          label="What?"></v-select>
                          </v-flex>

                          <v-flex md4 class="textfield">
                          <!-- <v-text-field
                          class="text"
                          background-color="rgba(223, 230, 225, 0.6)"
                          label="location?"
                          solo
                          append-icon="mdi-file-find">                             
                          </v-text-field>
                           -->
                           <v-select
                           outlined
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
    <v-layout row wrap>

       

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

    <!-- </v-layout> -->

    <!-- <v-layout row wrap> -->

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
    <!-- </v-layout> -->

    

    <!-- <v-layout row wrap> -->
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
                <span>Decorators</span>
            </v-layout>
        </v-flex>

    <!-- </v-layout> -->

    <!-- <v-layout row wrap> -->
        
        <v-flex class="text-center">
            <v-layout row>
            <router-link to="/salons"><img height="60" src="@/assets/icons/light/female.svg"></router-link>
            </v-layout>
            <v-layout row>
               <!--  <span> -->Salons<!-- </span> -->
            </v-layout>
        </v-flex>

        <v-flex>
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
    name: 'awesomeicons',

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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.icon {
    font-size: 60px;
    color: 'rgba(212, 207, 184, 0.5)';
    font-family: 'Montserrat', sans-serif;
    /* color: green */
}
.icons {
    margin-top: 30px;
    margin-left: 60px;
    /* background-color: 	#f9583c */;
    font-family: 'Montserrat', sans-serif;
}
.icons1 {
    margin-left: 60px;
    font-family: 'Montserrat', sans-serif;
}

@media only screen and (max-width: 450px) {
    .icons {
        margin-left: 3px
    }
    .icons1 {
        margin-left: 38px
    }
    span {
        font-size: 15px;
        margin-bottom: 3px;
        font-family: 'Montserrat', sans-serif;
    }
}

@media only screen and (min-width : 768px) and (max-width : 1024px)  { 
    
    .icons {
        margin-left: -19px
    }
}

@media only screen and (min-width: 1023px) and (max-width: 1024px) {
    .textfield {
        margin-left: 80px
    }
    .icons1 {
        margin-left: 190px
    }
}
span {
    text-align: center;
    margin-bottom: 3px
}
</style>