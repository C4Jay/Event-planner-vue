<template class="main mt-1">
     <v-parallax height="600" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
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
                          
                       <!--    <v-flex md4 class="textfield mr-3">
                          <v-text-field
                          label="what"
                          solo
                          append-icon="mdi-file-find">                                                        
                          </v-text-field>
                          </v-flex>

                          <v-flex md4 class="textfield">
                          <v-text-field
                          label="where"
                          solo
                          append-icon="mdi-file-find">                             
                          </v-text-field>
                          </v-flex> -->
                         
                      </v-layout>
                  </v-container>
              </v-form>
          </v-flex>
         <v-layout row wrap>
             <v-flex class="text-center">
                 <div class="icons2">
                  <v-icon size="100">mdi-home</v-icon>
                 </div>
             </v-flex>
            <v-flex class="text-center">
                 <div class="icons">
                  <v-icon size="100">mdi-camera</v-icon>
                 </div>
             </v-flex>
            <v-flex class="text-center">
                 <div class="icons">
                  <v-icon size="100">mdi-home-modern</v-icon>
                 </div>
             </v-flex>
             <v-flex class="text-center">
                 <div class="icons">
                  <v-icon size="100">mdi-car-convertible</v-icon>
                 </div>
             </v-flex>
             <v-flex class="text-center">
                 <div class="icons">
                     <v-icon size="100">mdi-music-clef-treble</v-icon>
                 </div>
             </v-flex>
             <v-flex class="text-center">
                 <div class="icons1">
                     <v-icon size="100">mdi-pasta</v-icon>
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

<style scoped>

.topic {
    font-size: 80px;
    color: rgb(0, 0, 0, 0.7);
}

.main {
    position: relative
}

.heyrow {
    font-size: 40;
    color: green;
}

.icons {
    cursor: pointer;
    width: 20;
    border-style: solid;
    border-right-width: 1;
    border-left-width: 1;
    border-color: black;
    background: rgb(252, 3, 132, 0.2)
}

.icons1 {
    cursor: pointer;
    width: 20;
    border-style: solid;
    border-width: 0.5;
    border-right-width: 1;
    border-left-width: 1;
    border-color: black;
    background: rgb(252, 3, 132, 0.2)
}

.icons2 {
    cursor: pointer;
    width: 20;
    border-style: solid;
    border-width: 0.5;
    border-right-width: 1;
    border-left-width: 1;
    border-color: black;
    background: rgb(252, 3, 132, 0.2)
}

.textfield {
    width: 100
}
</style>

