<template>

<div class = "log-in d-flex justify-center">
        <v-card width="480"  class='mt-5 rounded-xl'>
          <v-card-title class="headline justify-center">
           Log In
          </v-card-title>
            <!-- <v-card-text class="d-flex justify-center ">Log In</v-card-text> -->
          <v-divider></v-divider>
          <v-form
            ref="form"
            lazy-validation
          >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            prepend-inner-icon="mdi-email"
            label="E-mail"
            required
            outlined
            rounded
            class = "ma-3"
          ></v-text-field>

          <v-card-text class="red--text">{{error}}</v-card-text>

          <v-text-field
            v-model="password"
           
            :rules="nameRules"
            prepend-inner-icon="mdi-lock"
            label="password"
            required
            outlined
            rounded
            class = "ma-3"
          ></v-text-field>
        
           <div class="d-flex justify-space-around ">
            <v-btn
              color="error"
              rounded
              class="ml-5 justify-center"
              @click="cancel"
            >
              Cancel
            </v-btn>
          
            <v-btn
              color="green accent-3 white--text"
              rounded
              class="ml-5 justify-center"
              @click="login"
            >
              Log In
            </v-btn>
           </div>
    
        </v-form>
        <br>

        <!-- <v-card-text class="d-flex justify-center ">No Account?  <strong @click = "gotoRegister" id ="sign-up" class="mx-3"> Register Here</strong></v-card-text> -->
  
  </v-card>

</div>

</template>

<script>

import {projectAuth} from '../firebase/config'

export default {
  name: 'Login',
  components: {
    
  },

data: function () {
    return {
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 12) || 'Name must be less than 12 characters',
        ],

      error: '',
    }
  },

methods:{
   login(){
     //console.log('email is',this.email)
     //console.log('username is',this.password)

     projectAuth.signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      this.error = ''
      // this.$emit('message-showSignUp', false)
      // this.$emit('message-loggedIn', true)
       this.$router.push({name:'Home'})
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage )
      this.error = errorMessage
      // ..
    });
    
   },
   cancel(){
      this.email = ''
      this.password = ''
      this.$router.push({name:'Home'})
      // location.reload();
   },

},


}
</script>

<style>
/* forms */

</style>