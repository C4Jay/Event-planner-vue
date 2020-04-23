<template>
<v-container>
<v-card elevation="19" color="rgba(255, 0, 0, 0.2)" class="card" >
  <v-form v-model="valid" class="mr-3 my-3 ml-3">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            
            label="location"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            
            label="ratings"
            required
          ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            
            label="menu"
            required
          ></v-text-field>
        </v-col>

        
        <v-flex class="right">
        <v-btn color="pink accent-1">find</v-btn>
        </v-flex>
      </v-row>
    </v-container>
    
  </v-form>
</v-card>
</v-container>
</template>

<script>
import slider1 from '@/components/slider/slider1.vue'


  export default {
      components: {
          slider1
      },
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>


<style scoped>
.card {
    padding: 10
}
</style>
