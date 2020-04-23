<template>
<v-container>
  <div>
    <v-flex class="text-center">
  seating capacity
    </v-flex>
  </div>
  <range-slider
    class="slider"
    min="10"
    max="1000"
    step="10"
    name="Seating capacity"
    
    v-model="sliderValue">
  </range-slider>
  <v-btn color="pink accent-1">apply</v-btn>
 <div>{{sliderValue}}</div>
</v-container>
</template>
 
<script>
import RangeSlider from 'vue-range-slider'

import 'vue-range-slider/dist/vue-range-slider.css'
 
export default {
  data () {
    return {
      sliderValue: '100'
    }
  },
  components: {
    RangeSlider
  }
}
</script> 
 
<style>
.slider {
  /* overwrite slider styles */
  
  height: 30;
  color: blue
}

.range-slider {
  width: 200
}

@media only screen and (max-width: 450) {
  .slider {
    width: 200px
  }
  
}

.range-slider {
  padding: 3;
  height: 3;

}
</style> 