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
            :items="districts"
            label="location"
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

        <v-col cols="12" md="4">
          <v-select
            v-model="category"
            :items="categories"
          
            label="Type of the band"
           
            solo
          ></v-select>
        </v-col>

       
        <v-flex class="right">
        <v-btn color="pink accent-1" @click="filterset">reset</v-btn>
        </v-flex>
      </v-row>
    </v-container>
    
  </v-form>
</v-card>
</v-container>






     <v-card color="rgba(255, 0, 0, 0.2)" class="card" elevation="19">
    <v-container grid-list-lg>
        <v-layout row wrap >
            <v-flex xs12 sm12 md3 v-for="item in items" :key="item.id">
                <v-card :to="'/bands/' + item.id" v-if="(location == '' || location == item.location ) && (category == '' || category == item.category )" elevation="19">
                    <v-responsive>
                        <v-img :src="item.img" height="200px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">{{item.name}}</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <v-icon>mdi-map-marker</v-icon><h3 class="headline mb-0">{{item.location}}</h3>
                            <v-layout row v-for="category in item.categories" :key="category">
                            <h3>{{category}}</h3>
                            </v-layout>
                            <h3 class="text-weight-black">Price range(Rs)</h3>
                            <div>
                              {{item.pricemin}} - {{item.pricemax}}
                            </div>
                           <!--  <div class="text-weight-black">
                                {{item.description}}
                            </div> -->
                        </div>
                    </v-card-text>
                    <!-- <v-btn block color="green" :to="'/bands/' + item.id" >view</v-btn> -->
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
      categories: ['DJ', '3 piece', '4 piece', 'DJ + band'],
      
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
                    'Batticalo'],
        category: ''
        }
    },

   /*  mounted: {
        hotels() {
            console.log(this.$store.getters.hotels)
        }
    }, */

    computed: {
        items () {
            return this.$store.getters.bands
            // console.log(this.$store.getters.hotels)
        }
    },

    methods: {
        filterset () {
            this.location = '',
            this.category = ''
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
