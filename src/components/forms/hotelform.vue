<template>
    <v-container>
        <v-card color="rgba(255, 0, 0, 0.2)">
            <!-- <v-form class="mb-10"> -->
                <v-layout row>
                <v-flex xs12 class="text-xs-center mb-10 mr-12 ml-12">
                <h1>Pick a Hotel</h1>
                <v-container>
                <v-layout row>
                    <v-flex xs12>
                <slider1 class="mb-6"></slider1>
                <v-text-field label="location" solo></v-text-field>
                <v-text-field label="rating" solo></v-text-field>
              <!--   <v-text-field label="form" solo></v-text-field>
               -->  </v-flex>
                <v-flex class="text-center mt-3 mb-6">
                <v-btn class="mb-10" color="pink accent-1">find</v-btn>
                </v-flex>
                </v-layout>
                </v-container>
                </v-flex>
                </v-layout>
            <!-- </v-form> -->
        </v-card>
    </v-container>
</template>


<script>
import slider1 from '@/components/slider/slider1.vue'

export default {
    name: 'hotelform',

    components: {
        slider1
    }
}
</script>
