<template>
    <v-container grid-list-lg>
        <h1 class="font-weight-black text-center">What is your service</h1>
        <v-layout class="imgs" row wrap>
            <v-flex xs12  md3  >
            <router-link to="/createphotographyform">
                <v-img height="200" src="@/assets/imgsset/photography.jpg">
                </v-img>
            </router-link>
            <h3>photography</h3>
            </v-flex>

            <v-flex xs12  md3  >
            <router-link to="/createbandsform">
                <v-img height="200" src="@/assets/imgsset/band.jpg">
                </v-img>
            </router-link>
            <h3>band / DJ</h3>
            </v-flex>

            <v-flex xs12  md3  >
            <router-link to="/createhotelform">
                <v-img height="200" src="@/assets/imgsset/hotel.jpg">
                </v-img>
            </router-link>
            <h3>hotel</h3>
            </v-flex>

            <v-flex xs12  md3  >
            <router-link to="/createcakeform">
                <v-img height="200" src="@/assets/imgsset/cakes.jpg">
                </v-img>
            </router-link>
            <h3>cakes</h3>
            </v-flex>

            <v-flex xs12  md3  >
            <router-link to="/createinvcardform">
                <v-img height="200" src="@/assets/imgsset/cards.jpg">
                </v-img>
            </router-link>
            <h3>cards / gifts</h3>
            </v-flex>

            <v-flex  xs12  md3  >
            <router-link to="/createbridalwearform">
                <v-img height="200" src="@/assets/imgsset/dress1.jpg">
                </v-img>
            </router-link>
            <h3>bridal/groom wear</h3>
            </v-flex>

            <v-flex xs12  md3  >
            <router-link to="/flowers">
                <v-img height="200" src="@/assets/imgsset/flower.jpg">
                </v-img>
            </router-link>
            <h3>flower & deco</h3>
            </v-flex>

            <v-flex xs12  md3  >
            <router-link to="/createsalonform">
                <v-img height="200" src="@/assets/imgsset/makeup.jpg">
                </v-img>
            </router-link>
            <h3>hair & beauty</h3>
            </v-flex>

            <v-flex xs12  md3  >
            <router-link to="/createcarsform">
                <v-img height="200" src="@/assets/imgsset/cars.jpg">
                </v-img>
            </router-link>
            <h3>cars</h3>
            </v-flex>

             <v-flex xs12  md3  >
            <router-link to="/createlocationform">
                <v-img height="200" src="@/assets/imgsset/location.jpg">
                </v-img>
            </router-link>
            <h3>photo location</h3>
            </v-flex>

        </v-layout>
    </v-container>
</template>


