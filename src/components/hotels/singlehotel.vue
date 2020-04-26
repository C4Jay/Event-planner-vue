<template>
    <v-container>
        <v-layout>
            <v-flex xs12 class="ml-1 mr-3">
            <v-card elevation="19">
                <v-img class="img" src="https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
                </v-img>
                <v-card-title>
                    Hotel name
                </v-card-title>
                <v-card-text class="card-text">
                    <v-layout row>
                        location
                    </v-layout>
                    <v-layout row>
                        capacity
                    </v-layout>
                    <v-layout row>
                       
                        <star-rating class="rating" :rating="rate"></star-rating>
                    </v-layout>
                </v-card-text>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import StarRating from 'vue-star-rating'
export default {
    components: {
  StarRating
},
    data () {
        return {
            rate : 4
        }
    }
}
</script>

<style scoped>
.img {
    height: 400px
}

.card-text {
    font-weight: bold
}

.rating {
    size: 1px
}
</style>

