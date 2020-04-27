<template>
    <v-container>
        <v-layout>
            <v-flex xs12 class="ml-1 mr-3">
            <v-card elevation="19">
                <v-img class="img" :src="item.img" height="600px"></v-img>
                <v-card-title class="display-1">
                    {{item.name}}  |
                    {{item.hall}}
                </v-card-title>
                <v-card-text class="card-text ml-3">
                    <v-layout row wrap>
                    <v-flex xs12 sm5 class="ml-5 mb-8">
                    <v-layout row class="font-weight-black">
                        {{item.location}}
                    </v-layout>
                    <v-layout row class="font-weight-black">
                        {{item.capacity}} seating capacity
                    </v-layout>
                   
                    </v-flex>
                    
                    <v-flex xs12 sm5 class="ml-5">
                        <v-layout row>
                        <span class="headline font-weight-bold">contact info</span>
                        </v-layout>
                         <v-layout row class="font-weight-black">
                        {{item.number}}
                    </v-layout>
                    <v-layout row class="font-weight-black">
                        {{item.website}}
                    </v-layout>
                    <v-layout row class="font-weight-black">
                        {{item.email}}
                    </v-layout>
                    <v-layout row>
                    <v-btn height="26" color="grey">request a quotation</v-btn>
                    </v-layout>
                    </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>



<script>
export default {
    data() {
        return {
        wholeResponse: [],
        hotel: {}
        }
    },
    
    props: ['id'],
    
    mounted () {
       
        this.wholeResponse = this.$store.getters.hotels
    },

    computed: {
        item() {
            return this.$store.getters.hotelsfind(this.id)
        }
    }

}
</script>

