<template>
    <v-container grid-list-lg>
        <v-layout row>
            <h1>Offers</h1>
        </v-layout>
        <v-layout row wrap class="tiles mr-1">

           
            <v-flex  v-for="item in items" :key="item.id" xs12 md6 class="tile" >
                 <router-link :to="'/' + item.id">
                <v-layout row>
                    <v-img class="img" height="143" width="150" :src="item.img">
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-flex class="text-center text">
                    <v-layout row>
                    <h3 class="font-weight-light">{{item.name}}</h3>
                    </v-layout>
                    <v-layout row>
                    <h5 class="font-weight-light">{{item.location}}</h5>
                    </v-layout>
                    <v-layout row>
                    <h3 class="pink--text font-weight-black">{{item.offertitle}}</h3>
                    </v-layout>
                    </v-flex>
                </v-layout>
                    </router-link>
            </v-flex>
        



            <!-- <v-flex xs12 md6 class="tile" >
                <v-layout row>
                    <v-img class="img" height="143" width="150" src="@/assets/imgsset/band.jpg">
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-flex class="text-center text">
                    <v-layout row>
                    <h3 class="font-weight-light">Hotel name</h3>
                    </v-layout>
                    <v-layout row>
                    <h5 class="font-weight-light">new york</h5>
                    </v-layout>
                    <v-layout row>
                    <h3 class="pink--text font-weight-black">Offer 25% off</h3>
                    </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex> -->

            <!-- <v-flex xs12 md6 class="tile" >
                <v-layout row>
                    <v-img class="img" height="143" width="150" src="@/assets/imgsset/band.jpg">
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-flex class="text-center text">
                    <v-layout row>
                    <h3 class="font-weight-light">Hotel name</h3>
                    </v-layout>
                    <v-layout row>
                    <h5 class="font-weight-light">new york</h5>
                    </v-layout>
                    <v-layout row>
                    <h3 class="pink--text font-weight-black">Offer 25% off</h3>
                    </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 md6 class="tile" >
                <v-layout row>
                    <v-img class="img" height="143" width="150" src="@/assets/imgsset/band.jpg">
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-flex class="text-center text">
                    <v-layout row>
                    <h3 class="font-weight-light">Hotel name</h3>
                    </v-layout>
                    <v-layout row>
                    <h5 class="font-weight-light">new york</h5>
                    </v-layout>
                    <v-layout row>
                    <h3 class="pink--text font-weight-black">Offer 25% off</h3>
                    </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 md6 class="tile" >
                <v-layout row>
                    <v-img class="img" height="143" width="150" src="@/assets/imgsset/band.jpg">
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-flex class="text-center text">
                    <v-layout row>
                    <h3 class="font-weight-light">Hotel name</h3>
                    </v-layout>
                    <v-layout row>
                    <h5 class="font-weight-light">new york</h5>
                    </v-layout>
                    <v-layout row>
                    <h3 class="pink--text font-weight-black">Offer 25% off</h3>
                    </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 md6 class="tile" >
                <v-layout row>
                    <v-img class="img" height="143" width="150" src="@/assets/imgsset/band.jpg">
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-flex class="text-center text">
                    <v-layout row>
                    <h3 class="font-weight-light">Hotel name</h3>
                    </v-layout>
                    <v-layout row>
                    <h5 class="font-weight-light">new york</h5>
                    </v-layout>
                    <v-layout row>
                    <h3 class="pink--text font-weight-black">Offer 25% off</h3>
                    </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 md6 class="tile" >
                <v-layout row>
                    <v-img class="img" height="143" width="150" src="@/assets/imgsset/band.jpg">
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-flex class="text-center text">
                    <v-layout row>
                    <h3 class="font-weight-light">Hotel name</h3>
                    </v-layout>
                    <v-layout row>
                    <h5 class="font-weight-light">new york</h5>
                    </v-layout>
                    <v-layout row>
                    <h3 class="pink--text font-weight-black">Offer 25% off</h3>
                    </v-layout>
                    </v-flex>
                </v-layout>
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
    

    computed: {
        items () {
            return this.$store.getters.offers
            // console.log(this.$store.getters.hotels)
        }
    },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.tile {
    height: 150px;
    background-color: burlywood;
    width: 256px;
    border-style: solid;
    border-width: 1;
    border-color: white;
    border-radius: 3px;
            font-family: 'Montserrat', sans-serif;

    
    
}
.text {
    margin-right: '30%';
    justify-content: center;
    margin-top: 30px;
            font-family: 'Montserrat', sans-serif;

}
.img {
    margin-right: '600%';
    border-right-style: solid;
    border-right-width:thin;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    border-right-color: white
}

.h3 {
    font-size: 26px;
            font-family: 'Montserrat', sans-serif;

}

a {
    text-decoration: none
}

h1 {
            font-family: 'Montserrat', sans-serif;

}
</style>
