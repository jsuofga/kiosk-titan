<template>
  <div class = "home d-flex flex-column ">

<!-- Navbar -->

<!-- ROW 1 -->
      <v-row class = "my-0">
        <v-col xs= "12"  md = "8">
          <Updates :adminAccess = "adminAccess"/>
        </v-col>
        <v-col xs= "12"  md = "4" class = "hidden-md-and-down">
           <StarOfWeek />
        </v-col>
      </v-row>

<!-- ROW 2 -->
      <v-row class = "my-0">
        <v-col xs= "12"  md = "8" >
            <Announcement :adminAccess = "adminAccess" />
        </v-col>
        <v-col xs= "12"  md = "4" class = "hidden-md-and-down">
            <Wifi />
        </v-col>
      </v-row>


<!-- Original -->

<!-- ROW 1 -->
      <!-- <v-row class = "my-0">
        <v-col cols = "8">
          <Updates :adminAccess = "adminAccess"/>
        </v-col>
        <v-col cols = "4">
           <StarOfWeek />
        </v-col>
      </v-row> -->

<!-- ROW 2 -->
      <!-- <v-row class = "my-0">
        <v-col cols = "8">
            <Announcement :adminAccess = "adminAccess" />
        </v-col>
        <v-col cols = "4">
            <Wifi />
        </v-col>
      </v-row> -->

  </div>



</template>

<script>
import DateTime from "../components/DateTime.vue"
import Updates from "../components/Updates.vue"
import Wifi from "../components/Wifi.vue"
import StarOfWeek from "../components/StarOfWeek.vue"
import Announcement from "../components/Announcement.vue"
import Navbar from "../components/Navbar.vue"



export default {
  name: 'Home',
  components:{DateTime,Updates,Wifi,StarOfWeek,Announcement,Navbar },
  props:['adminAccess'],
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .home{
 
   padding-left: 50px ; 
   padding-right: 50px  
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
