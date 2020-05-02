<template>
    <span>
      <!-- <hotelform1></hotelform1> -->
      <!-- <normalview></normalview> -->
      <hotelsview></hotelsview>
    </span>
</template>


<script>

// import tabview from '@/components/hotels/tabview.vue';
// import slider from '@/components/slider/slider.vue';
// import hotelform1 from '@/components/forms/hotelform1.vue';
// import normalview from '@/components/hotels/normalview.vue'
import hotelsview from '@/components/hotels/hotelsview.vue';

export default {
    name: 'Hotels',

    components: {
        // tabview,
        // slider,
        // hotelform1,
        // normalview
        hotelsview
    }
}
</script>
