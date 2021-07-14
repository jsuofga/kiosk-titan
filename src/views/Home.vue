<template>
  <div class = "home d-flex flex-column ">

    <!-- TOP ROW -->
     <v-row id = "top-row"> 
        <v-col class = "top-row-col justify-start" cols = "4">
          <img src= "../assets/homeleganceLogoNoCircle.png" width = "225px">
        </v-col>

        <v-col class = "top-row-col" cols = "4">
         
        </v-col>

        <v-col class = "top-row-col" cols = "4">
          <DateTime/>
        </v-col>

     </v-row>
   
    <!-- ROW 2 -->
      <v-row>
        <v-col cols = "8">
          <Updates />
        </v-col>
        <v-col cols = "4">
           <StarOfWeek />
        </v-col>
      
      </v-row>

<!-- ROW 3 -->
      <v-row>
        <v-col cols = "8">
            <Celebrate />
        </v-col>
        <v-col cols = "4">
            <Wifi />
        </v-col>
      
      </v-row>

  <!-- ROW 4 -->
  
    <v-row >
         <v-col class = "d-flex justify-end" cols = "12">
          <v-btn plain  > <v-icon class = "mr-3">mdi-account</v-icon>Admin</v-btn> 
        </v-col>

    </v-row>
  

  </div>



</template>

<script>
import DateTime from "../components/DateTime.vue"
import Updates from "../components/Updates.vue"
import Wifi from "../components/Wifi.vue"
import StarOfWeek from "../components/StarOfWeek.vue"
import Celebrate from "../components/Celebrate.vue"

export default {
  name: 'Home',
  components:{DateTime,Updates,Wifi,StarOfWeek,Celebrate},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .home{
   padding: 10px ; 
   padding-left: 50px ; 
   padding-right: 50px  
 }
 #top-row{
   /* border:1px solid red */
 }
 .top-row-col{
   display:flex;
   align-items: center;
   justify-content: center;
   /* border: 1px solid green */
 }
 #date-time{
  display:flex;
  flex-direction: column;
 }




</style>
