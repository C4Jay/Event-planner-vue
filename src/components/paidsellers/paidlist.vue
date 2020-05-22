<template>
    <v-container>
        <v-layout class="tile" row v-for="item in items" :key="item.id">
            <v-flex xs12>
                <v-layout row>
                <v-flex xs12 sm3>
                <v-img class="img" :src="item.img"></v-img>
                </v-flex>
                <v-flex xs12 sm8 class="text">
                    <h1>{{item.name}}</h1>
                    <h3>{{item.location}}</h3>
                    <h3>{{item.number}}</h3>
                </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    computed : {
        items () {
             return this.$store.getters.hotels
        }
    }
}
</script>


<style scoped>
.tile {
    margin-bottom: 3px;
    border-style: solid;
    border-width: 1;
    border-color:black;
    background-color:#f5b3dc;
    
}
.img {
    height: 100px;
    margin-left: 18px;
    margin-top: 3
}
.text {
    margin-left: 100px;
    color: #4f4c4e
}

@media only screen and (max-width: 375px) {
    .tile {
        margin-left:10;
        margin-right: 1;
        width: 95%
    }
    .text h1{
        font-size: 25px
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px)  {
    .tile {
        margin-left: 3px
    }
}

</style>
