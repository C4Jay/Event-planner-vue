<template>

<div>
<v-container>
<v-card elevation="19" color="rgba(255, 0, 0, 0.2)" class="card" >
  <v-form v-model="valid" class="mr-3 my-3 ml-3">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-select
            v-model="location"
            label="location"
            :items="districts"
            required
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
          disabled
            v-model="rating"
            :rules="nameRules"
            
            label="ratings"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
         <!-- <slider1></slider1> -->

          <v-layout row>
     <span xs12 class="mt-6 ml-3">capacity </span>
<v-slider
            v-model="slider"
            class="align-center slider mt-7 mr-3"
            :max="max"
            :min="min"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="slider"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
       
          </v-slider>    
          <!-- <v-btn color="pink accent-1">apply</v-btn> -->
     </v-layout>
<!-- </v-flex> -->


        </v-col>
        <v-flex class="right">
        <v-btn color="pink accent-1" @click="filterset">reset</v-btn>
        </v-flex>
      </v-row>
    </v-container>
    
  </v-form>
</v-card>
</v-container>






     <v-card color="rgba(255, 0, 0, 0.2)" class="card" elevation="0">
    <v-container grid-list-lg>
        <v-layout row wrap >
            <v-flex xs12 sm12 md3 v-for="item in items" :key="item.id">
                <v-card :to="'/hotels/' + item.id" v-if="(slider == 40 || slider <= item.capacity) && (location == '' || location == item.location)" elevation="19">
                    <v-responsive>
                        <v-img :src="item.img" height="200px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text font-weight-light" >{{item.name}}</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0 font-weight-light">{{item.hall}}</h3>
                            <h3 class="font-weight-light"><v-icon>mdi-map-marker</v-icon>{{item.location}}</h3>
                            <h3 class="font-weight-light">seating {{item.capacity}}</h3>
                           <!--  <div class="text-weight-black">
                                {{item.description}}
                            </div> -->
                        </div>
                    </v-card-text>
                    <!-- <v-btn block color="green" :to="'/hotels/' + item.id" >view</v-btn> -->
                </v-card>
            </v-flex>
           
        </v-layout>
    </v-container>
    </v-card>
</div>
</template>


<script>
export default {
    data () {
        return {
           // items: []
           valid: false,
      location: '',
      
      min: 0,
        max: 1000,
        slider: 40,
        range: [-20, 70],
        districts: ['Galle',
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
    },

    /* mounted: {
        hotels() {
            console.log(this.$store.getters.hotels)
        }
    }, */

    computed: {
        items () {
            return this.$store.getters.hotels
            // console.log(this.$store.getters.hotels)
        }
    },

   
    methods: {
        filterset () {
            this.location = '',
            this.category = '',
            this.slider = 40
        }
    }
}
</script>


<style scoped>
.card {
    margin-left: 100px;
    margin-right: 100px;
    padding: 10px;
    margin-bottom: 60px
}

@media only screen and (max-width: 450px) {
    .card {
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>
