<template>
<!-- <v-flex class="slider mt-10"> 
    <div>
        <v-flex class="text-center">
            seating capacity
        </v-flex>
    </div> -->
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
</template>



<script>
  export default {
    data () {
      return {
        min: 0,
        max: 1000,
        slider: 40,
        range: [-20, 70],
      }
    },
  }
</script>


<style scoped>
.slider {
    width : 200
}
</style>
