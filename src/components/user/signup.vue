<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="main" >
                <v-card  class="card">
                    <v-container>
                        <v-layout row>
                            <v-flex class="text-center font-weight-black display-1">Sign Up</v-flex>
                        </v-layout>
                        
                        <v-form>
                            <v-layout row>
                               
                                <v-flex class="mr-6 ml-6">
                                    <v-text-field 
                                    solo 
                                    prepend-icon="mdi-account"
                                    label="mail">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>                         <v-flex>
                                    <v-text-field class="mr-6 ml-6"
                                    solo 
                                    prepend-icon="mdi-lock"
                                    label="password">
                                    </v-text-field>
                                </v-flex>
                            
                            </v-layout>
                            <v-flex class="text-center mb-6" >
                                <v-btn color="pink accent-1">Sign Up</v-btn>
                            </v-flex><!-- 
                            <v-flex class="text-center" >
                            Don`t have an account?<router-link to="signup"> sign up </router-link> here
                            </v-flex> -->
                        </v-form>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
.main {
    margin-bottom: 200px;
    margin-top: 100px
}

@media only screen and (max-width: 360px) {
    .main {
        margin-top: 10px;
        margin-bottom: 10px
    }
}
</style>
