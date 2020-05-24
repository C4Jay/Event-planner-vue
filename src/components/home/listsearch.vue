<template>
    <v-container>
        <v-layout row>
            <h1>Popular Searches</h1>
        </v-layout>
        <v-layout row>
            <v-flex xs12 md3>
                <router-link to="/photography" >
                <v-img height="300" src="https://images.unsplash.com/photo-1568891806972-a5c2a08940bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></v-img>
                </router-link>
                <h3>Photography</h3>
            </v-flex>
            
            <v-flex to="/bands" xs12 md3>
            <router-link to="/bands" >
                <v-img height="300" src="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></v-img>
            </router-link>
                <h3>Bands</h3>
            </v-flex>
            
            <v-flex to="/hotels" xs12 md3>
            <router-link to="/hotels" >
                <v-img height="300" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></v-img>
            </router-link>
                <h3>Hotels</h3>
            </v-flex>
            
            <v-flex to="/salons" xs12 md3>
            <router-link to="/salons" >
                <v-img height="300" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></v-img>
            </router-link>
                <h3>Hair & beauty</h3>
            </v-flex>
        </v-layout>
    </v-container>
</template>
