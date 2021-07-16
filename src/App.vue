<template>
  <v-app>
    <!-- <Navbar /> -->
    <v-main class = "container" >
      <router-view :adminAccess = "adminAccess"></router-view>
       <Footer @emit-currentUser= "handleCurrentUser"/>
    </v-main>
 
      
  </v-app>
</template>

<script>

import Footer from '../src/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
   
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
<style >
html{
  overflow-y: hidden;  /*removes the vertical scroll bars from app */
}
.container{
  background-color: #D38753
}

</style>

