<template>
  <div class = "navbar">
      <v-row class = "top-row"> 
        <v-col class = "top-row-col justify-start hidden-md-and-down" xs= "12"  md = "4">
        </v-col>

        <v-col class = "top-row-col hidden-md-and-down" xs= "12" md = "4">
        <DateTime/>
        </v-col>

        <v-col class = "top-row-col justify-end " xs= "12" md= "4">
          <!-- Log In and Log Out -->
          <div >
            <div class = "white--text">{{userEmail}}</div>
            <v-btn plain v-if = "!loggedIn" @click= "gotoLogin"  class = " white--text"> <v-icon class = "mr-3">mdi-account-check</v-icon>Edit Board</v-btn> 
            <v-btn plain v-else  @click= "logOut" class = "white--text " > <v-icon class = "mr-3 ">mdi-account-off</v-icon>Log Out</v-btn> 
           </div>
        </v-col>
     </v-row>

  </div>

    

</template>

<script>
import {projectAuth} from '../firebase/config'

import DateTime from "../components/DateTime.vue"


export default {
  name: 'Navbar',
  components:{DateTime},

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
.navbar{
  margin-top:25px;
  margin-bottom:25px;
}

.top-row{
  display:flex;
  justify-content: center;
 
}
 .top-row-col{
   display:flex;
   justify-content: center;
   align-items: center;
   padding-top:20px;
   padding-bottom:20px;
 }
 #date-time{
  display:flex;
  flex-direction: column; 
 }
</style>