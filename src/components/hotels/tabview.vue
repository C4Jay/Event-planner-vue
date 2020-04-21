<template>
<v-container>
<slider></slider>
  <v-card>
       <v-tabs
            v-model="tab"
            background-color="purple accent-1"
            centered
            icons-and-text
            height="60"
          
            
        >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#subscribe">
                place 1
                <!-- <v-icon>mdi-phone</v-icon> -->
            </v-tab>

            <v-tab href="#contact">
                place 2
                <!-- <v-icon>mdi-heart</v-icon> -->
            </v-tab>

            <v-tab href="e">
                place 3
                <!-- <v-icon>mdi-phone</v-icon> -->
            </v-tab>

            <v-tab href="e">
                place 4
                <!-- <v-icon>mdi-heart</v-icon> -->
            </v-tab>

            <v-tab href="#i">
                place 5
                <!-- <v-icon>mdi-phone</v-icon> -->
            </v-tab>

            <v-tab href="e">
                place 6
                <!-- <v-icon>mdi-heart</v-icon> -->
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item :key="1" value="subscribe">
                <template>
                    <v-container class="text-center">
                        <v-flex class="text-center">
                        <v-layout row wrap>
                            <v-flex sm10 md3 mr-1 ml-1 >
                                <v-card>
                                    <v-card-media>
                                        <v-img src="https://images.unsplash.com/photo-1573020856672-f6bed7fae16d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></v-img>
                                    </v-card-media>
                                    <v-card-title>Hotel 1</v-card-title>
                                </v-card>
                            </v-flex>

                            <v-flex sm12 md3 >
                                <v-card>
                                    <v-card-media></v-card-media>
                                    <v-card-title>Hotel 1</v-card-title>
                                </v-card>
                            </v-flex>

                            <v-flex sm12 md3 >
                                <v-card>
                                    <v-card-media></v-card-media>
                                    <v-card-title>Hotel 1</v-card-title>
                                </v-card>
                            </v-flex>

                            <v-flex sm12 md3 >
                                <v-card>
                                    <v-card-media></v-card-media>
                                    <v-card-title>Hotel 1</v-card-title>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        </v-flex>
                    </v-container>
                </template>
            </v-tab-item>
            <v-tab-item :key="2" value="contact">
                <v-card flat>
                    <v-card-text>contact</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
  </v-card>
</v-container>
</template>

<script>
import slider from '@/components/slider/slider.vue'
  export default {
      components: {
          slider
      },
    data () {
      return {
        tab: null,
        items: [
          { tab: 'One', content: '1'},
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },
          { tab: 'Four', content: 'Tab 4 Content' },
          { tab: 'Five', content: 'Tab 5 Content' },
          { tab: 'Six', content: 'Tab 6 Content' },
          { tab: 'Seven', content: 'Tab 7 Content' },
          { tab: 'Eight', content: 'Tab 8 Content' },
          { tab: 'Nine', content: 'Tab 9 Content' },
          { tab: 'Ten', content: 'Tab 10 Content' },
        ],
      }
    },
  }
</script>