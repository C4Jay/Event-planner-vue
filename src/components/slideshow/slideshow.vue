<template>
  <div>
    <Slider
    height="600px"
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
    >
      <SliderItem
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1);"
        :style="i"
      >
       <!--  <p style="line-height: 280px; font-size: 5rem; text-align: center;">
          Page{{ index + 1 }}
        </p> -->
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "slideshow",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      list: [],
      sliderValue: 2
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
            backgroundImage: 'url("https://www.srilankabusiness.com/emarketplace/media/wysiwyg/edb/homepage_banners/banner_02.jpg")',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url("https://www.srilankabusiness.com/emarketplace/media/wysiwyg/edb/homepage_banners/banner03.jpg")',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url("https://www.srilankabusiness.com/emarketplace/media/wysiwyg/edb/homepage_banners/banner01.jpg")',
            width: "100%",
            height: "100%"
          },
        ]),
      1000
    );
  }
};
</script>

<style>


p {
  margin: 0;
}
</style>
