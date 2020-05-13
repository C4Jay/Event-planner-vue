<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="main" >
                <v-card elevation="19" class="card">
                    <v-container>
                        <v-layout row>
                            <v-flex class="text-center font-weight-black display-1">bridalwear basic information</v-flex>
                        </v-layout>
                        
                        <v-form @submit.prevent="createbridalwear">
                            <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-text-field
                                   
                                    v-model="bridalwear_name" 
                                    solo 
                                    prepend-icon="mdi-account"
                                    label="bridalwear name">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                            

                            <v-layout row>                         <v-flex>
                                    <v-select class="mr-6 ml-6"
                                    v-model="bridalwear_location"
                                    solo
                                    :items="districts" 
                                    prepend-icon="mdi-earth"
                                    label="bridalwear location">
                                    </v-select>
                                </v-flex>
                            
                            </v-layout>

                            <v-layout row>                         
                                <v-flex>
                                    <v-col cols="12" sm="12">
          <v-select class="mr-6 ml-3"
            v-model="bridalwear_categories"
            :items="items"
          
            label="Type of bridalwear"
       
            prepend-icon="mdi-bridalwear"
          ></v-select>
        </v-col>
                                </v-flex>
                            
                            </v-layout>

                        <!--     <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="bridalwear_capacity"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-table-chair"
                                    label="bridalwear seating capacity">
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
                                    v-model="bridalwear_contact_person"
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
                                    v-model="bridalwear_contact_email"
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
                                    v-model="bridalwear_contact_website"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-earth"
                                    label="bridalwear official site">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                             <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="bridalwear_contact"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-phone"
                                    label="Contact number">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                             <v-col cols="10" class="ml-8">
                         <v-textarea
                          v-model="wedding_list"
                          
                         >
                       <template v-slot:label>
                         <div>
                          List of wedding dresses available
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>

                        <v-col cols="10" class="ml-8">
                         <v-textarea
                          v-model="homecoming_list"
                          
                         >
                       <template v-slot:label>
                         <div>
                          List of homecoming dresses available
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>


                            <v-col cols="10" class="ml-8">
                         <v-textarea
                          v-model="bridalwear_description"
                          
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
    name: 'createbridalwearform',

    data () {
        return {
            rate: null,
            show: false,
            bridalwear_name: '',
            bridalwear_location: '',
            bridalwear_capacity: '',
            bridalwear_hall: '',
            bridalwear_contact: '',
            bridalwear_contact_website: '',
            bridalwear_contact_email: '',
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
            wedding_list: '',
            homecoming_list: '',
            items: ['Groom`s wear - Traditional', 'Groom`s wear - Western', 'Bridal wear - Traditional', 'Bridal wear - Western', 'All kinds'],
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

        createbridalwear () {
            console.log(
            this.bridalwear_name,
            this.bridalwear_capacity,
            this.bridalwear_location,
            this.rate,
            this.imgurl,
            this.bridalwear_contact,
            this.bridalwear_description,
            this.bridalwear_hall)

            this.$store.dispatch('ad_bridalwear', {name: this.bridalwear_name, 
                
                location: this.bridalwear_location,
                contact: this.bridalwear_contact,
                description: this.bridalwear_description,
                website: this.bridalwear_contact_website,
                email: this.bridalwear_contact_email,
                imgurl: this.imgurl,
                imgurl1: this.imgurl1,
                imgurl2: this.imgurl2,
                imgurl3: this.imgurl3,
                imgurl4: this.imgurl4,
                imgurl5: this.imgurl5,
                category: this.bridalwear_categories,
                pricemin: this.pricemin,
                pricemax: this.pricemax,
                weddinglist: this.wedding_list,
                homecominglist: this.homecoming_list})
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
