<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="pink accent-3" disable-resize-watcher>
            <v-list>
                <template v-for="item in items">
                    <v-list-tile class="ml-6" :key="item.title">
                        <v-list-tile-content>
                            <v-btn
                            x-small="true" 
                            flat
                            :to="item.to">
                            {{item.title}}
                            </v-btn>
                           
                        </v-list-tile-content>
                        
                    </v-list-tile>
                    <v-divider :key="`divider-${item.title}`"></v-divider>
                </template>
                 
                <template v-if="userIsauthenticated">
                    <v-list-tile >
                        <v-list-tile-content>
                            <v-btn 
                            flat
                            @click="onlogout"
                            to="/"
                            >
                            Log-Out
                            </v-btn>
                            
                        </v-list-tile-content>
                        
                    </v-list-tile>
                    
                </template>
                <v-btn x-small="true" class="ml-6" @click.stop="drawer = !drawer">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar elevation="19" height="50" color="pink accent-1">   
           
            <!-- <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-btn elevation="19" icon @click.stop="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                  <v-app-bar-nav-icon>
        <v-img class="ml-10 img" src="https://www.48hourslogo.com/48hourslogo_data/2019/03/04/82508_1551698623.png" height="60px" width="80px">
        </v-img>
      </v-app-bar-nav-icon>
                <!-- <v-toolbar-title data-cy="titleBtn" class="blue--text">{{appTitle}}</v-toolbar-title> -->
            </router-link>
       <!--     <v-btn flat class="hidden-sm-and-down nav-menu" to="/menu" data-cy="menuBtn">Menu</v-btn>  -->
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                class="hidden-md-and-up"
                flat
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                >
                {{item.title}}
                </v-btn>
                
               <!--  <v-btn v-if="userIsauthenticated" @click="onlogout" to="/"> -->
                <!-- <v-btn>    
                    Log-Out
                </v-btn> -->
                 <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn text class="btns" x-small>
          who are we
      </v-btn>
            <v-btn text class="btns" x-small>
          what we do
      </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </span>
</template>

<script>
export default {
 //   userchecker () {
   //     let user = JSON.parse(localStorage.getItem('user'));
     //   return user !== null
   // },
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Treflor',
            drawer: false,
            
        };
    },
    computed: {
        items () {
            let items = [
                {title: 'who are we' , to: '/signup'},                
                {title: 'what we do' , to: '/sign-in'},
            ]
            /* if(this.userIsauthenticated ){
                items = [                    
                {title: 'View Guides' , to: '/viewguidesfinl'},
                {title: 'Create Guide' , to: '/newhike'},
                {title: 'Profile' , to: '/profile'},
                ]
            } */
            return items
        },
        /* userIsauthenticated () { */
           
       //    return userchecker()
       //     return this.$store.getters.user !== null && this.$store.getters.user !== undefined
     
     
     
     /*  if (localStorage.getItem('token')){
           return true
       }else {
           return false
       }  */
     
     
     
     /* return this.$store.getters.token !== null && this.$store.getters.token !== undefined
     */ 
     
     
    /*  },
        invaliduser (to) {
            if (this.$store.getters.user) {
                this.$router.push('' + to)
            } else {
                this.$router.push('/sign-in')
            }
        },
        validuser (to) {
            this.$router.push('/' + to)
            
        }
     
    },
    methods: {
       routing (to) {  
        if(item.title = "Create Guide") {
                        invaliduser(to)
                    } else {
                        validuser (to)
                    }
        },
        onlogout () {
            this.$store.dispatch('loggingout')
        }
    }
     */
/* }; */

    }
}
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
.transparent {
   background-color: transparent!important;
 }

 .btns {
     font-size: 10
 }
</style>