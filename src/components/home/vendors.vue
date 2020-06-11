<template>
    <v-container grid-list-xs>
        <v-layout row>
            <h1>Featured vendors</h1>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md2 class="img mr-0.5" v-for="item in items" :key="item.id">
                <router-link :to="'/fvendors/' + item.id">
                <v-img height="300" :src="item.img">
                    <v-flex class="texts text-center white--text font-weight-light">
                     <h3 class="font-weight-light vendor">{{item.name}}</h3>
                <h5 class="font-weight-light map"><v-icon class="white--text">mdi-map-marker</v-icon>{{item.location}}</h5>
                    </v-flex>
                </v-img>
                </router-link>
               
            </v-flex>
            <!-- 
            <v-flex xs12 md3>
                <v-img height="300" src="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></v-img>
                <h3>Bands</h3>
            </v-flex>
            
            <v-flex xs12 md3>
                <v-img height="300" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></v-img>
                <h3>Hotels</h3>
            </v-flex>
            
            <v-flex xs12 md3>
                <v-img height="300" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></v-img>
                <h3>Hair & beauty</h3>
            </v-flex> -->
        </v-layout>
        <v-layout row>
            
            <v-flex class="text-center">
                <!-- <v-layout row class="text-center"> -->
                    <!-- <router-link to="/hotels"> -->
                <v-spacer></v-spacer><h5 class="font-weight-light text-center more">more <router-link to="/hotels"><v-icon>mdi-arrow-right</v-icon></router-link></h5>
                <!-- </v-layout> -->
                <!-- </router-link> -->
            </v-flex>
            
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data () {
        return {

        }
    },

    computed: {
        items () {
            return this.$store.getters.fvendors
        }
    }
}
</script>

<style scoped>
.img {
    padding: 1
}
.texts {
    margin-top: 99px;
            font-family: 'Montserrat', sans-serif;

}
.more {
    text-decoration: none
}

a {
    text-decoration: none
}

.vendor {
    background-color: rgba(0,0,0,0.4)
}

.map {
    margin-top: 3px;
    background-color: rgba(0,0,0,0.4)
}
h1 {
            font-family: 'Montserrat', sans-serif;

}
</style>
