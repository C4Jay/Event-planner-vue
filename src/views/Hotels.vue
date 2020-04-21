<template>
    <span>
       <tabview></tabview>
       <!-- <slider></slider> -->
    </span>
</template>


<script>

import tabview from '@/components/hotels/tabview.vue';
// import slider from '@/components/slider/slider.vue';

export default {
    name: 'Hotels',

    components: {
        tabview,
        // slider
    }
}
</script>
