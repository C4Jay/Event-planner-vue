<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="main" >
                <v-card elevation="19" class="card">
                    <v-container>
                        <v-layout row>
                            <v-flex class="text-center font-weight-black display-1">catering basic information</v-flex>
                        </v-layout>
                        
                        <v-form @submit.prevent="createcatering">
                            <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-text-field
                                   
                                    v-model="catering_name" 
                                    solo 
                                    prepend-icon="mdi-account"
                                    label="catering name">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                            

                            <v-layout row>                         <v-flex>
                                    <v-select class="mr-6 ml-6"
                                    v-model="catering_location"
                                    solo
                                    :items="districts" 
                                    prepend-icon="mdi-earth"
                                    label="catering location">
                                    </v-select>
                                </v-flex>
                            
                            </v-layout>

                        <!--     <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="catering_capacity"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-table-chair"
                                    label="catering seating capacity">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout> -->

                             <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-layout row>
                                    <v-flex class="ml-9" sm3>
                                    <v-text-field 
                                    label="Min"                                    
                                    v-model="pricemin"
                                    type="number"
                                    solo>
                                    </v-text-field>
                                    </v-flex>
                                    <v-flex class="ml-9" sm3>
                                    <v-text-field
                                    label="Max"
                                    v-model="pricemax"
                                    type="number"
                                    solo>
                                    </v-text-field>
                                    </v-flex>
                                    </v-layout>

                                </v-flex>
                            </v-layout>
                            
                            <v-layout row>
                                <v-flex class="text-center font-weight-bold mb-8">
                                    contact details
                                </v-flex>
                            </v-layout>

                            <v-layout row>                         
                                <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="catering_contact_person"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-account"
                                    label="Contact person">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                            <v-layout row>                         
                                <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="catering_contact_email"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-mail"
                                    label="Contact email">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>


                            <v-layout row>                         
                                <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="catering_contact_website"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-earth"
                                    label="catering official site">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                             <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="catering_contact"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-phone"
                                    label="Contact number">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                            <v-col cols="10" class="ml-8">
                         <v-textarea
                          v-model="catering_description"
                          
                         >
                       <template v-slot:label>
                         <div>
                          Description
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>

                             <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="onPickFile" color="grey">Set product image</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile" 
                                accept="image/*"
                                @change="onFilePicked">
                            </v-flex>
                        </v-layout>

                        <v-container v-if="imgurl">

                        
                        <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-10">
                                <v-img width="80%" :src="imgurl"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>
                        
                        <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="imgHandler">add more photos</v-btn>
                            </v-flex>
                        </v-layout>

                        <v-container v-if="show">
                            
                            <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="onPickFile1" color="grey">Set photo</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile1" 
                                accept="image/*"
                                @change="onFilePicked1">
                            </v-flex>
                        </v-layout>

                        <v-container v-if="imgurl1">

                        
                        <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-10">
                                <v-img width="80%" :src="imgurl1"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>

                        <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="onPickFile2" color="grey">Set photo</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile2" 
                                accept="image/*"
                                @change="onFilePicked2">
                            </v-flex>
                        </v-layout>

                        <v-container v-if="imgurl2">

                        
                        <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-10">
                                <v-img width="80%" :src="imgurl2"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>


                           <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="onPickFile3" color="grey">Set photo</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile3" 
                                accept="image/*"
                                @change="onFilePicked3">
                            </v-flex>
                        </v-layout>

                        <v-container v-if="imgurl3">

                        
                        <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-10">
                                <v-img width="80%" :src="imgurl3"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>


                           <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="onPickFile4" color="grey">Set photo</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile4" 
                                accept="image/*"
                                @change="onFilePicked4">
                            </v-flex>
                        </v-layout>

                        <v-container v-if="imgurl4">

                        
                        <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-10">
                                <v-img width="80%" :src="imgurl4"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>


                           <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="onPickFile5" color="grey">Set photo</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile5" 
                                accept="image/*"
                                @change="onFilePicked5">
                            </v-flex>
                        </v-layout>

                        <v-container v-if="imgurl5">

                        
                        <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-10">
                                <v-img width="80%" :src="imgurl5"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>
                        </v-container>

                           <!--  <v-layout row>                         
                                <v-flex class="ml-10">
                                   <star-rating v-model="rate" :rating="rate"></star-rating>
                                </v-flex>
                            
                            </v-layout> -->

                            <v-flex class="text-center mb-6" >
                                <v-btn color="pink accent-1" type="submit">create</v-btn>
                            </v-flex>
                            <!-- <v-flex class="text-center" >
                            Don`t have an account?<router-link to="signup"> sign up </router-link> here
                            </v-flex> -->
                        </v-form>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    name: 'createcateringform',

    data () {
        return {
            rate: null,
            show: false,
            catering_name: '',
            catering_location: '',
            catering_capacity: '',
            catering_hall: '',
            catering_contact: '',
            catering_contact_website: '',
            catering_contact_email: '',
            imgfile: '',
            imgfile1: '',
            imgfile2: '',
            imgurl: '',
            imgurl1: '',
            imgurl2: '',
            imgurl3: '',
            imgurl4: '',
            imgurl5: '',
            pricemin: '',
            pricemax: '',
            districts: ['Galle',
                    'Colombo',
                    'Gampaha',
                    'Hambantota',
                    'Jaffna',
                    'Kalutara',
                    'Kandy',
                    'Kegalle',
                    'Kilinochchi',
                    'Kurunegala',
                    'Mannar',
                    'Matale',
                    'Matara',
                    'Monaragala',
                    'Mullaitivu',
                    'Nuwara Eliya',
                    'Polonnaruwa',
                    'Puttalam',
                    'Ratnapura',
                    'Trincomalee',
                    'Vavuniya',
                    'Ampara',
                    'Anuradhapura',
                    'Badulla',
                    'Batticalo']
        }
    },

    methods: {
        imgHandler () {
            this.show = true
        },

        createcatering () {
            console.log(
            this.catering_name,
            this.catering_capacity,
            this.catering_location,
            this.rate,
            this.imgurl,
            this.catering_contact,
            this.catering_description,
            this.catering_hall)

            this.$store.dispatch('ad_catering', {name: this.catering_name, 
                
                location: this.catering_location,
                contact: this.catering_contact,
                description: this.catering_description,
                website: this.catering_contact_website,
                email: this.catering_contact_email,
                imgurl: this.imgurl,
                imgurl1: this.imgurl1,
                imgurl2: this.imgurl2,
                imgurl3: this.imgurl3,
                imgurl4: this.imgurl4,
                imgurl5: this.imgurl5,
               
                pricemin: this.pricemin,
                pricemax: this.pricemax})
        },

    onPickFile() {
        this.$refs.inputFile.click()
    },

    onPickFile1() {
        this.$refs.inputFile1.click()
    },

    onPickFile2() {
        this.$refs.inputFile2.click()
    },

    onPickFile3() {
        this.$refs.inputFile3.click()
    },

    onPickFile4() {
        this.$refs.inputFile4.click()
    },

    onPickFile5() {
        this.$refs.inputFile5.click()
    },

    onFilePicked (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile = files[0]
    },
    onFilePicked1 (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl1 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile1 = files[0]
    },
    onFilePicked2 (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl2 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile2 = files[0]
    },
    onFilePicked3 (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl3 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile3 = files[0]
    },
    onFilePicked4 (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl4 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile4 = files[0]
    },
    onFilePicked5 (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl5 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile5 = files[0]
    },

    }
}
</script>


<style scoped>
.main {
    margin-bottom: 200px;
    margin-top: 100px
}

.text-field {
    font-size: 10px
}

@media only screen and (max-width: 360px) {
    .main {
        margin-top: 10px;
        margin-bottom: 10px
    }
}
</style>
