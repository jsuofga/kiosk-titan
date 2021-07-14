<template>
    <v-row class = "footer mr-5">
         <v-col class = "d-flex justify-end align-center" cols = "12">
            <div>{{userEmail}}</div>
            <v-btn plain v-if = "!loggedIn" @click= "gotoLogin" > <v-icon class = "mr-3">mdi-account-check</v-icon>Log In</v-btn> 
            <v-btn plain v-else  @click= "logOut" > <v-icon class = "mr-3">mdi-account-off</v-icon>Log Out</v-btn> 
        </v-col>
    </v-row>
    
</template>

<script>

import {projectAuth} from '../firebase/config'

export default {
  name: 'Footer',
   data: function () {
    return {
        loggedIn: false,
        userId: '',
        userEmail: '',
      //  displayName:'',
    }
  },
  methods:{
    gotoLogin:function(){
       this.$router.push({name:'Login'})
    },

    logOut:function(){
       // Log user out
        projectAuth.signOut().then(() => {
        // Sign-out successful.
        this.userEmail= '',
        this.loggedIn = false
        }).catch((error) => {
        // An error happened.
        });
        
      // Redirect to Login page
      //  this.$router.push({name:'Home'})
    },

  },
  mounted(){
    //Check for Auth State changes. Check if user is logged in or out
    projectAuth.onAuthStateChanged(user => {
        if (user) {
             console.log(user.email + " is logged in!");
             console.log(user.uid + " is logged in!");
             this.userId = user.uid
             this.userEmail = user.email
            //  this.displayName = user.displayName
             this.$emit('emit-currentUser',{currentUser: this.userEmail})
             this.loggedIn = true
        } else {
            console.log('User is logged out!');
             this.$emit('emit-currentUser',{currentUser:''})
             this.loggedIn = false
        }
    });
  }
}
</script>

<style scoped>

 .footer{

 }

</style>