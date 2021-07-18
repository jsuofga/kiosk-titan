<template>
  <v-app>
    <v-main class = "main">
        <Navbar @emit-currentUser= "handleCurrentUser"/>
        <router-view :adminAccess = "adminAccess"></router-view>
       <!-- <Footer @emit-currentUser= "handleCurrentUser"/> -->
    </v-main>
  </v-app>

</template>

<script>

import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components:{Navbar},
   
  data: () => ({
     adminAccess:false,
  }),
  methods:{
    handleCurrentUser(payload){
      console.log(payload)
      if(payload.currentUser == 'soupensu@gmail.com'){
        console.log('admin logged in')
        this.adminAccess = true
        console.log(this.adminAccess)
      }else{
        console.log('Denied')
        this.adminAccess = false
        console.log(this.adminAccess)
      }
      
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.main{
  background-color: #D38753;
}

</style>

