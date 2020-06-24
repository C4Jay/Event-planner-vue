<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="main" >
                <v-card elevation="19" class="card">
                    <v-container>
                        <v-layout row>
                            <v-flex class="text-center font-weight-black"><h1>offer information</h1></v-flex>
                        </v-layout>
                        
                        <v-form @submit.prevent="createoffer">
                            <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-text-field
                                   
                                    v-model="offer_name" 
                                    solo 
                                    prepend-icon="mdi-account"
                                    label="Name of the business">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-text-field
                                   
                                    v-model="offer_title" 
                                    solo 
                                    prepend-icon="mdi-currency-usd-off"
                                    label="Offer title">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                           
                               
                                

                            

                            <v-layout row>                         <v-flex>
                                    <v-select class="mr-6 ml-6"
                                    v-model="offer_location"
                                    solo
                                    :items="districts" 
                                    prepend-icon="mdi-earth"
                                    label="Business location">
                                    </v-select>
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
                                    v-model="offer_contact_person"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-account"
                                    label="Contact person">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>


                             <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    v-model="offer_contact"
                                    solo
                                    type="text" 
                                    prepend-icon="mdi-phone"
                                    label="Contact number">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>

                            <v-col cols="10" class="ml-8">
                         <v-textarea
                          v-model="offer_description"
                          
                         >
                       <template v-slot:label>
                         <div>
                          Offer information
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>


                         <v-layout row>

                               
      <v-flex  xs12 sm6 class="ml-10 mb-8">
       <div>
    <div >
      <!-- <p>Set main photo</p> -->
            <v-btn @click="click1">Set main photo</v-btn>
      <input type="file" ref="input1"
        style="display: none"
       @change="previewImage" accept="image/*" >                
    </div>
    <div>
      <p><!-- Progress: {{uploadValue.toFixed()+"%"}} -->
     <!--  <progress id="progress" :value="uploadValue" max="100" ></progress>  --> </p>
    </div>
    <div v-if="imageData!=null">                     
        <img class="preview" height="268" width="356" :src="img1">
        <br>
      <!-- <button @click="onUpload">Upload</button> -->
    </div>   
  </div>
      </v-flex>
                             </v-layout>

       <v-layout row>
                            <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="imgHandler">set offer photos</v-btn>
                            </v-flex>
                        </v-layout>

                        <v-container v-if="show">

                            <v-layout row>
                                <v-flex  xs12 sm6 class="ml-10 mb-8">
                                 <div>
                                  <div >
      
                               <v-btn @click="click2">Select photo</v-btn>
                               <input type="file" ref="input2" style="display: none" @change="previewImage2" accept="image/*" >                
                                  </div>
                                 <div>
                                </div>
                                <div v-if="imageData2!=null">                     
                           <img class="preview" height="268" width="356" :src="img2">
                                 <br>
                         <!-- <button @click="onUpload2">Upload</button> -->
                                  </div>   
                                 </div>
                              </v-flex>
                            </v-layout>


                             <v-layout row>
                                <v-flex  xs12 sm6 class="ml-10 mb-8">
                                 <div>
                                  <div >
      
                              

                            <v-flex class="text-center mb-6" >
                                <v-btn color="pink accent-1" type="submit">create</v-btn>
                            </v-flex>
                                  </div>
                                 </div>
                                </v-flex>
                             </v-layout>
                        </v-container>
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


import firebase from 'firebase';

export default {
    name: 'createofferform',

    data () {
        return {
            rate: null,
            show: false,
            offer_name: '',
            offer_location: '',
            offer_capacity: '',
            offer_hall: '',
            offer_contact: '',
            offer_contact_website: '',
            offer_contact_email: '',
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
            offer_title: '',
            items: ['Structures','Wedding offer','Cupoffer','Structures & Wedding offer','Structures & Cupoffer', 'Cupoffer & Wedding offer', 'All kinds'],
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
                    'Batticalo'],
                     showimg1: false,
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            img5: '',
            img6: '',
            picture: '',
            imageData: null,
            imageData2: null,
            imageData3: null,
            imageData4: null,
            imageData5: null,
            imageData6: null,
        }
    },

    methods: {
        imgHandler () {
            this.show = true
        },

        createoffer () {
            console.log(
            this.offer_name,
            this.offer_capacity,
            this.offer_location,
            this.rate,
            this.imgurl,
            this.offer_contact,
            this.offer_description,
            this.offer_hall)

            this.$store.dispatch('ad_offer', 
            {name: this.offer_name, 
                
                location: this.offer_location,
                contact: this.offer_contact,
                description: this.offer_description,
               
                  imgurl: this.img1,
                imgurl1: this.img2,
                offertitle: this.offer_title
                
               })
        },


         click1() {
        this.$refs.input1.click()
       
    },

    click2() {
        this.$refs.input2.click()
    },

    click3() {
        this.$refs.input3.click()
    },

    click4() {
        this.$refs.input4.click()
    },

    click5() {
        this.$refs.input5.click()
    },

    click6() {
        this.$refs.input6.click()
    },


    
     previewImage(event) {
      this.uploadValue=0;
      this.img1=null;
      this.imageData = event.target.files[0];
      this.onUpload()
    },

    previewImage2(event) {
      this.uploadValue=0;
      this.img2=null;
      this.imageData2 = event.target.files[0];
      this.onUpload2()
    },

    previewImage3(event) {
      this.uploadValue=0;
      this.img3=null;
      this.imageData3 = event.target.files[0];
      this.onUpload3()
    },

    previewImage4(event) {
      this.uploadValue=0;
      this.img4=null;
      this.imageData4 = event.target.files[0];
      this.onUpload4()
    },

    previewImage5(event) {
      this.uploadValue=0;
      this.img5=null;
      this.imageData5 = event.target.files[0];
      this.onUpload5()
    },

    previewImage6(event) {
      this.uploadValue=0;
      this.img6=null;
      this.imageData6 = event.target.files[0];
      this.onUpload6()
    },


      onUpload(){
      this.img1=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img1 =url;
          console.log(this.img1)
        });
      }      
      );
    },

     onUpload2(){
      this.img2=null;
      const storageRef=firebase.storage().ref(`${this.imageData2.name}`).put(this.imageData2);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img2 =url;
          console.log(this.img2)
        });
      }      
      );
    },

         onUpload3(){
      this.img3=null;
      const storageRef=firebase.storage().ref(`${this.imageData3.name}`).put(this.imageData3);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img3 =url;
          console.log(this.img3)
        });
      }      
      );
    },

         onUpload4(){
      this.img4=null;
      const storageRef=firebase.storage().ref(`${this.imageData4.name}`).put(this.imageData4);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img4 =url;
          console.log(this.img4)
        });
      }      
      );
    },

         onUpload5(){
      this.img5=null;
      const storageRef=firebase.storage().ref(`${this.imageData5.name}`).put(this.imageData5);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img5 =url;
          console.log(this.img5)
        });
      }      
      );
    },

         onUpload6(){
      this.img6=null;
      const storageRef=firebase.storage().ref(`${this.imageData6.name}`).put(this.imageData6);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img6 =url;
          console.log(this.img6)
        });
      }      
      );
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.desc {
    
}
.main {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 200px;
    margin-top: 100px
}

.preview {
    object-fit: cover
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
