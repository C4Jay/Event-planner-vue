<template>
<vueper-slides

 :breakpoints="breakpoints"
 duration="3000"
 autoplay
 fade :touchable="false">
  <vueper-slide
  class="slides"
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content"
     />
</vueper-slides>
</template>

<script>
// import { Slider, SliderItem } from "vue-easy-slider";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  
  name: "slideshow",
  components: {
    VueperSlides, 
    VueperSlide
  },
  /* components: {
    Slider,
    SliderItem
  }, */
  data() {
    return {
      
      breakpoints: {
        1200: {
      slideRatio: 1 / 1
    },
    900: {
      slideRatio: 1 / 3
    },
    600: {
      slideRatio: 1 / 2,
      arrows: false,
      bulletsOutside: true
    },
    // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
    1100: {
      slideRatio: 1 / 4
    }
  },
      
      slides : [
        {image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
        {image: 'https://images.unsplash.com/photo-1552711566-7e58cb1eeafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
        {image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}
      ],

   /*    list: [],
      sliderValue: 2  */
    }; 
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url("https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url("https://images.unsplash.com/photo-1552711566-7e58cb1eeafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")',
         /*    width: "100%",
            height: "100%" */
          },
        ]),
      1000
    );
  }
};
</script>

<style scoped>
.slides {
  height: 600px;
}

@media only screen and (max-width: 360px) {
  .slides {
    height: 300px
  }
}
</style>
