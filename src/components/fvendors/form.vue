<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="main" >
                <v-card elevation="19" class="card">
                    <v-container>
                        <v-layout row>
                            <v-flex class="text-center font-weight-black display-1">hotel basic information</v-flex>
                        </v-layout>
                        
                        <v-form @submit.prevent="createhotel">
                            <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-text-field
                                   
                                    v-model="hotel_name" 
                                    solo 
                                    prepend-icon="mdi-account"
                                    label="name">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                           <!--  <v-layout row>
                               
                                <v-flex class="mr-6 ml-6 text-field">
                                    <v-text-field
                                   
                                    v-model="hotel_hall" 
                                    solo 
                                    prepend-icon="mdi-home-floor-1"
                                    label="Hall">
                                    </v-text-field>
                                </v-flex>
                            </v-layout> -->

                            <v-layout row>                         <v-flex>
                                    <v-select class="mr-6 ml-6"
                                    v-model="hotel_location"
                                    solo
                                    :items="districts" 
                                    prepend-icon="mdi-earth"
                                    label="location">
                                    </v-select>
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
                                <v-btn @click="imgHandler">add more photos</v-btn>
                            </v-flex>
                        </v-layout>

                        <v-container v-if="show">

                            <v-layout row>
                                <v-flex  xs12 sm6 class="ml-10 mb-8">
                                 <div>
                                  <div >
      
                               <v-btn @click="click2">Set photo</v-btn>
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
      
                               <v-btn @click="click3">Set photo</v-btn>
                               <input type="file" ref="input3" style="display: none" @change="previewImage3" accept="image/*" >                
                                  </div>
                                 <div>
                                </div>
                                <div v-if="imageData3!=null">                     
                           <img class="preview" height="268" width="356" :src="img3">
                                 <br>
                         <!-- <button @click="onUpload3">Upload</button> -->
                                  </div>   
                                 </div>
                              </v-flex>
                            </v-layout>


                                                         <v-layout row>
                                <v-flex  xs12 sm6 class="ml-10 mb-8">
                                 <div>
                                  <div >
      
                               <v-btn @click="click4">Set photo</v-btn>
                               <input type="file" ref="input4" style="display: none" @change="previewImage4" accept="image/*" >                
                                  </div>
                                 <div>
                                </div>
                                <div v-if="imageData4!=null">                     
                           <img class="preview" height="268" width="356" :src="img4">
                                 <br>
                         <!-- <button @click="onUpload4">Upload</button> -->
                                  </div>   
                                 </div>
                              </v-flex>
                            </v-layout>


                                                         <v-layout row>
                                <v-flex  xs12 sm6 class="ml-10 mb-8">
                                 <div>
                                  <div >
      
                               <v-btn @click="click5">Set photo</v-btn>
                               <input type="file" ref="input5" style="display: none" @change="previewImage5" accept="image/*" >                
                                  </div>
                                 <div>
                                </div>
                                <div v-if="imageData5!=null">                     
                           <img class="preview" height="268" width="356" :src="img5">
                                 <br>
                         <!-- <button @click="onUpload5">Upload</button> -->
                                  </div>   
                                 </div>
                              </v-flex>
                            </v-layout>


                                                         <v-layout row>
                                <v-flex  xs12 sm6 class="ml-10 mb-8">
                                 <div>
                                  <div >
      
                               <v-btn @click="click6">Set photo</v-btn>
                               <input type="file" ref="input6" style="display: none" @change="previewImage6" accept="image/*" >                
                                  </div>
                                 <div>
                                </div>
                                <div v-if="imageData6!=null">                     
                           <img class="preview" height="268" width="356" :src="img6">
                                 <br>
                         <!-- <button @click="onUpload6">Upload</button> -->
                                  </div>   
                                 </div>
                              </v-flex>
                            </v-layout>

                        </v-container>


                            
    


                             <!--     <v-flex xs12 sm6 class="ml-10 mb-8">
                                <v-btn @click="onPickFilefs" color="pink">Set product image FS</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFilefs" 
                                accept="image/*"
                                @change="previewImage">
                            </v-flex> -->
                            
                            <!-- <v-container v-if="showimg1"> -->
                               <!--  <v-img :src="img1">
                                    </v-img>
                                    <v-btn @click="onUpload">upload</v-btn>
                                 -->
                            <!-- </v-container> -->


                            <!-- <v-flex xs12 sm6 class="ml-10 mb-8">
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
                        </v-container> -->
                        <!-- </v-container> -->

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
import firebase from 'firebase';

export default {
    
    name: 'createhotelform',

    data () {
        return {
            rate: null,
            show: false,
            hotel_name: '',
            hotel_location: '',
            hotel_capacity: '',
            hotel_hall: '',
            hotel_contact: '',
            hotel_contact_website: '',
            hotel_contact_email: '',
            imgfile: '',
            imgfile1: '',
            imgfile2: '',
            imgurl: '',
            imgurl1: '',
            imgurl2: '',
            imgurl3: '',
            imgurl4: '',
            imgurl5: '',
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
                /* imgurl: this.imgurl,
                imgurl1: this.imgurl1,
                imgurl2: this.imgurl2,
                imgurl3: this.imgurl3,
                imgurl4: this.imgurl4,
                imgurl5: this.imgurl5, */
                imgurl: this.img1,
                imgurl2: this.img2,
                imgurl3: this.img3,
                imgurl4: this.img4,
                imgurl5: this.img5,
                imgurl6: this.img6,

                hall: this.hotel_hall})
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

    onPickFilefs() {
        this.$refs.inputFilefs.click()
        this.showimg1 = true
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
