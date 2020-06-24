<template>
    <v-container>
        <v-layout>
            <v-flex class="text-center">
                <v-img :src="imgurl">
                </v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

    data () {
        return {
            imgurl : '',
            wholeResponse: []
        }
    },
    props: ['id'],

    mounted () {/* 
        console.log(this.url)
        this.imgurl = this.url */
        this.wholeResponse = this.$store.getters.offersfind(this.id)
        this.imgurl = this.wholeResponse.img1
    }
        
}
</script>

