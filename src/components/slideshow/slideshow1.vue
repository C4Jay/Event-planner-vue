<template>
    <vueper-slides
    autoplay
    duration="1000"
  class="slider"
  :visible-slides="3"
  :slide-ratio="1 / 4"
  :dragging-distance="70"
  arrows=false
  bullets=false
  arrowsOutside=false
  >
  

    <!-- <vueper-slide>
      <template>
          <v-flex class="pink">2</v-flex>
      </template>
  </vueper-slide>

    <vueper-slide>
      <template>
          <v-flex class="pink">3</v-flex>
      </template>
  </vueper-slide>

    <vueper-slide>
      <template>
          <v-flex class="pink">4</v-flex>
      </template>
  </vueper-slide> -->
   <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :link="slide.link"/>
</vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    data() {
    return {
     slides : [
         {image: "https://images.unsplash.com/photo-1573020856672-f6bed7fae16d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", link: "/hotels"},
         {image: "https://images.unsplash.com/photo-1573020856672-f6bed7fae16d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", link: "/hotels"},
         {image: "https://images.unsplash.com/photo-1573020856672-f6bed7fae16d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", link: "/hotels"},
         {image: "https://images.unsplash.com/photo-1573020856672-f6bed7fae16d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", link: "/hotels"}
     ]
    };
  },
    components: { VueperSlides, VueperSlide },    
}
</script>
