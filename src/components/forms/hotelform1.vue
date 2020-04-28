<template>
<v-container>
<v-card elevation="19" color="rgba(255, 0, 0, 0.2)" class="card" >
  <v-form v-model="valid" class="mr-3 my-3 ml-3">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="location"
            :rules="nameRules"
            label="location"
            required
          ></v-text-field>
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
        <v-btn color="pink accent-1" @click="filterset">find</v-btn>
        </v-flex>
      </v-row>
    </v-container>
    
  </v-form>
</v-card>
</v-container>
</template>

<script>
// import slider1 from '@/components/slider/slider1.vue'


  export default {
      components: {
          // slider1
      },
    data: () => ({
      valid: false,
      location: '',
      
      min: 0,
        max: 1000,
        slider: 40,
        range: [-20, 70],
    }),

    methods: {
      filterset () {
        this.$store.dispatch('filterhotel', {location: this.location, capacity: this.capacity})
      }
    }
  }
</script>


<style scoped>
.card {
    padding: 10
}
</style>
