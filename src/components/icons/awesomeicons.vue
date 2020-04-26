<template>
<v-container  class="icons">
    <v-flex class="text-center">

        <v-flex xs12 class="text-center">
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
                          <v-text-field
                          class="body-1"
                          background-color="rgba(223, 230, 225, 0.6)"
                          label="what?"
                          solo
                          append-icon="mdi-file-find">                                                        
                          </v-text-field>
                          </v-flex>

                          <v-flex md4 class="textfield">
                          <v-text-field
                          class="text"
                          background-color="rgba(223, 230, 225, 0.6)"
                          label="location?"
                          solo
                          append-icon="mdi-file-find">                             
                          </v-text-field>
                          </v-flex>
                          </v-flex>
                      </v-layout>
                  </v-container>
              </v-form>
          </v-flex>
    
    <v-container  class="icons">
    <v-layout row wrap>

       

        <v-flex sm4 md2>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
            <v-layout row>
            <router-link to="/bands"><img class="icon" height="60" src="@/assets/icons/light/compact-disc.svg"></router-link>
            </v-layout>
            <v-layout row>
                <span>Music</span>
            </v-layout>
        </v-flex>
        

                
        <v-flex sm4 md2>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/bridalwear"><img height="60" src="@/assets/icons/light/user-tie.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Attire</span>
           </v-layout>
        </v-flex>

        <v-flex sm4 md2>
           <!-- <font-awesome-icon class="icon" icon="user-tie" />  -->
           <v-layout row>
            <router-link to="/locations"><img height="60" src="@/assets/icons/light/globe-europe.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Location</span>
           </v-layout>
        </v-flex>

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
            <router-link to="/photography"><img height="60" src="@/assets/icons/light/camera.svg"></router-link>
           </v-layout>
           <v-layout row>
               <span>Photography</span>
           </v-layout>
        </v-flex>
    </v-layout>

    <v-layout row>
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

        <v-flex>
            <v-layout row>
            <router-link to="/catering"><img height="60" src="@/assets/icons/light/concierge-bell.svg"></router-link>
            </v-layout>
            <v-layout row>
                <span>Catering</span>
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
    name: 'awesomeicons'
}
</script>


<style scoped>
.icon {
    font-size: 60px;
    color: 'rgba(212, 207, 184, 0.5)'
    /* color: green */
}

.icons {
    margin-left: 100px
}

@media only screen and (max-width: 450px) {
    .icons {
        margin-left: 3px
    }

    span {
        font-size: 15px;
        margin-bottom: 3px
    }
}

span {
    text-align: center;
    margin-bottom: 3px
}
</style>


