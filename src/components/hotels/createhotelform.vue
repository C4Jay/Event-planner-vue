<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="main" >
                <v-card elevation="19" class="card">
                    <v-container>
                        <v-layout row>
                            <v-flex class="text-center font-weight-black display-1">Hotel basic information</v-flex>
                        </v-layout>
                        
                        <v-form @submit.prevent="createhotel">
                            <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-text-field
                                   
                                    v-model="hotel_name" 
                                    solo 
                                    prepend-icon="mdi-account"
                                    label="Hotel name">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-text-field
                                   
                                    v-model="hotel_hall" 
                                    solo 
                                    prepend-icon="mdi-home-floor-1"
                                    label="Hall">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="hotel_location"
                                    solo 
                                    prepend-icon="mdi-lock"
                                    label="Hotel location">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                            <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="hotel_capacity"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-table-chair"
                                    label="Hotel seating capacity">
                                    </v-text-field>
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
                                    v-model="hotel_contact_person"
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
                                    v-model="hotel_contact_email"
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
                                    v-model="hotel_contact_website"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-earth"
                                    label="Hotel official site">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                             <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="hotel_contact"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-phone"
                                    label="Contact number">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                            <v-col cols="10" class="ml-8">
                         <v-textarea
                          v-model="hotel_description"
                          
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
    name: 'createhotelform',

    data () {
        return {
            rate: null,
            
            hotel_name: '',
            hotel_location: '',
            hotel_capacity: '',
            hotel_hall: '',
            hotel_contact: '',
            hotel_contact_website: '',
            hotel_contact_email: '',
            imgfile: '',
            imgurl: ''
        }
    },

    methods: {
        createhotel () {
            console.log(
            this.hotel_name,
            this.hotel_capacity,
            this.hotel_location,
            this.rate,
            this.imgurl,
            this.hotel_contact,
            this.hotel_description,
            this.hotel_hall)

            this.$store.dispatch('ad_hotel', {name: this.hotel_name, 
                capacity: this.hotel_capacity,
                location: this.hotel_location,
                contact: this.hotel_contact,
                description: this.hotel_description,
                website: this.hotel_contact_website,
                email: this.hotel_contact_email,
                imgurl: this.imgurl,
                hall: this.hotel_hall})
        },

         onPickFile() {
        this.$refs.inputFile.click()
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
