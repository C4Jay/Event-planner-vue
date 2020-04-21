<template>
  <div>
    <VueSlickCarousel   :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import '@/../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import '@/../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css'

  export default {
    name: 'itemslider',
    data: () => ({
        settings: {
            "dots": true,
  "dotsClass": "slick-dots custom-dot-class",
  "edgeFriction": 0.35,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 1,
  "slidesToScroll": 1
        }
    }),
    components: { VueSlickCarousel },
  }
</script> 