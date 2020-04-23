<template class="main mt-1">
     <v-parallax height="645" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
      <v-container>
          <v-flex>
              <v-form>
                  <v-container>
                      <v-layout row>
                          <v-flex class="text-center topic">
                              Ayubowan
                          </v-flex>
                      </v-layout>
                      <v-layout row wrap class="text-center">
                          <v-flex class="text-center row">
                          <v-flex md4 class="textfield mr-3">
                          <v-text-field
                          background-color="rgba(223, 230, 225, 0.6)"
                          label="what"
                          solo
                          append-icon="mdi-file-find">                                                        
                          </v-text-field>
                          </v-flex>

                          <v-flex md4 class="textfield">
                          <v-text-field
                          background-color="rgba(223, 230, 225, 0.6)"
                          label="where"
                          solo
                          append-icon="mdi-file-find">                             
                          </v-text-field>
                          </v-flex>
                          </v-flex>
                      </v-layout>
                  </v-container>
              </v-form>
          </v-flex>
         <v-layout row wrap>
             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons2">
                  <router-link class="link" to="/hotels"><v-icon size="60" to="/hotels">mdi-home</v-icon></router-link>
                 </div>
             </v-flex>
            <v-flex class="text-center ml-1 mt-1">
                 <div class="icons">
                 <router-link class="link" to="/hotelsform"><v-icon size="60">mdi-camera</v-icon></router-link>
                 </div>
             </v-flex>
            <v-flex class="text-center ml-1 mt-1">
                 <div class="icons">
                  <router-link class="link" to="/hotelsform1"><v-icon size="60">mdi-home-modern</v-icon></router-link>
                 </div>
             </v-flex>
             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons">
                  <v-icon size="60">mdi-car-convertible</v-icon>
                 </div>
             </v-flex>
             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons">
                     <v-icon size="60">mdi-music-clef-treble</v-icon>
                 </div>
             </v-flex>
             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons1">
                     <v-icon size="60">mdi-pasta</v-icon>
                 </div>
             </v-flex>

             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons1">
                     <v-icon size="60">mdi-bike</v-icon>
                 </div>
             </v-flex>

             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons1">
                     <v-icon size="60">mdi-castle</v-icon>
                 </div>
             </v-flex>

         </v-layout>

             
           <v-layout row class="ml-1">
             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons1">
                     <v-icon size="60">mdi-church</v-icon>
                 </div>
             </v-flex>

                <v-flex class="text-center ml-1 mt-1">
                 <div class="icons2">
                  <v-icon size="60">mdi-home</v-icon>
                 </div>
             </v-flex>
            <v-flex class="text-center ml-1 mt-1">
                 <div class="icons">
                  <v-icon size="60">mdi-camera</v-icon>
                 </div>
             </v-flex>
            <v-flex class="text-center ml-1 mt-1">
                 <div class="icons">
                  <v-icon size="60">mdi-home-modern</v-icon>
                 </div>
             </v-flex>
             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons">
                  <v-icon size="60">mdi-car-convertible</v-icon>
                 </div>
             </v-flex>
             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons">
                     <v-icon size="60">mdi-music-clef-treble</v-icon>
                 </div>
             </v-flex>
             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons1">
                     <v-icon size="60">mdi-pasta</v-icon>
                 </div>
             </v-flex>

             <v-flex class="text-center ml-1 mt-1">
                 <div class="icons1">
                     <v-icon size="60">mdi-bike</v-icon>
                 </div>
             </v-flex>

             <v-flex class="text-center ml-1 mt-1 mb-3">
                 <div class="icons1">
                     <v-icon size="60">mdi-castle</v-icon>
                 </div>
             </v-flex>
         </v-layout>
      </v-container>
     </v-parallax>
</template>

<script>
export default {
    name: 'Parlx1'
}
</script>

<style>

.topic {
    font-size: 80px;
    color: rgba(224, 210, 218, 0.9);
    outline-color: black;
    font-weight: bold;
    text-shadow: 2px 2px #ff0000;
}

.main {
    position: relative
}

.heyrow {
    font-size: 40;
    color: green;
}

.icons {
    height: 15;
    margin: 1;
    cursor: pointer;
    max-width: 10;
    border-style: solid;
    border-right-width: 1;
    border-left-width: 1;
    border-color: black;
    background: rgba(129, 122, 126, 0.6);
    margin-left: 10
}

.icons1 {
    cursor: pointer;
    max-width: 10;
    border-style: solid;
    border-width: 0.5;
    border-right-width: 1;
    border-left-width: 1;
    border-color: black;
    background: rgba(129, 122, 126, 0.6);
    margin-left: 10
}

.icons2 {
    cursor: pointer;
    max-width: 10;
    border-style: solid;
    border-width: 0.5;
    border-right-width: 1;
    border-left-width: 1;
    border-color: black;
    background: rgba(129, 122, 126, 0.6);
    margin-left: 10
}

.textfield {
    width: 100
}

.link {
    text-decoration: none
}

@media (max-width: 360px) {
    .topic {
        font-size: 50px;
        /* text-shadow: 2px 2px green; */
    }
}
</style>

