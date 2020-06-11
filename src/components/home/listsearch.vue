<template>
    <v-container>
        <v-layout row>
            <h1>Popular Searches</h1>
        </v-layout>
        <v-layout row>
            <v-flex class="tile" xs12 md3>
                <router-link to="/photography" >
                <v-img height="300" class="img" src="https://images.unsplash.com/photo-1568891806972-a5c2a08940bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
                <h3 class="text-center topic white--text">Photography</h3>
                </v-img>
                </router-link>
                <!-- <h3 class="text-center">Photography</h3> -->
            </v-flex>
            
            <v-flex class="tile" to="/bands" xs12 md3>
            <router-link to="/bands" >
                <v-img height="300" src="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
                <h3 class="text-center topic white--text">Bands</h3></v-img>
            </router-link>
                <!-- <h3 class="text-center">Bands</h3> -->
            </v-flex>
            
            <v-flex class="tile" to="/hotels" xs12 md3>
            <router-link to="/hotels" >
                <v-img height="300" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
                <h3 class="text-center topic white--text">Hotels</h3>
                </v-img>
            </router-link>
                <!-- <h3 class="text-center">Hotels</h3> -->
            </v-flex>
            
            <v-flex class="tile" to="/salons" xs12 md3>
            <router-link to="/salons" >
                <v-img height="300" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
                <h3 class="text-center topic white--text">Hair & beauty</h3>
                </v-img>
            </router-link>
                <!-- <h3 class="text-center">Hair & beauty</h3> -->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.tile {
    border-style: solid;
    border-width: 1;
    border-color: white;
    text-decoration: none;
        font-family: 'Montserrat', sans-serif;

}
.topic {
    text-decoration: none;
    margin-top: 190px;
    background-color: rgb(180, 174, 174, 0.3);
        font-family: 'Montserrat', sans-serif;

}
.router-link {
    text-decoration: none
}
.img {
    text-decoration: none
}
a{
    text-decoration: none
}
h1 {
    font-family: 'Montserrat', sans-serif;

}
</style>

