<template>
  <div class = "updates">
            
            <h1 id = 'update-title' class = "display-3 d-flex justify-center white--text"> Bulletin
                <div id= 'icon-edit' v-if = "adminAccess">
                    <!-- <v-icon v-if = "adminAccess">mdi-pencil</v-icon> -->
                    <DialogUpdate />
                </div> 
            </h1>
            <v-row>
                <div class = "post-it" v-bind:class= "{postMobile: isMobile}"><div class = "pin" v-bind:class= "{pinMobile: isMobile}"></div>{{posts.event1}}</div>
                <div class = "post-it purple-post " v-bind:class= "{purpleMobile: isMobile}"><div class = "pin" v-bind:class= "{pinMobile: isMobile}"></div>{{posts.event2}}</div>
                <div class = "post-it green-post " v-bind:class= "{greenMobile: isMobile}"><div class = "pin" v-bind:class= "{pinMobile: isMobile}"></div>{{posts.event3}}</div>
            </v-row>

    </div>

</template>

<script>

import {projectFirestore} from '../firebase/config'
import DialogUpdate from "../components/DialogUpdate.vue"

export default {
     name: 'Updates',
     props:['adminAccess','isMobile'],
     components:{DialogUpdate,},

     data: () => ({
        posts : {event1:'',event2:'',event3:'',},
        isMobile:false,
       
    }),

    //Life Cycle Hooks 
    mounted(){
      // Get realtime update (using onSnapshot method) of all the documents in the collection 'playlist'
      this.unsubscribe =  projectFirestore.collection("bulletin").doc('most-recent-post')
        .onSnapshot((doc) => {
            //   console.log('current data:', doc.data())  
              this.posts = doc.data()
            //  console.log('Posts', this.posts)
        })

     // Get access to viewport size
      
      if(this.$vuetify.breakpoint.width < 600){
         this.isMobile = true
      }else{
          this.isMobile = false
      }
        console.log('isMobile',this.isMobile)
  
    },
    unmounted(){
    //   console.log('un-mounted - PlaylistDetails')
      this.unsubscribe()  // detach realtime listener
    }
}
</script>

<style scoped>

 .updates{
  /* background-color: white; */
  background-image: url('../assets/corkboard.jpg');
  background-size: fit;
  position:relative;
  height:450px;
 }

 #update-title{
     position:relative
 }
 #icon-edit{
     position:absolute;
     right:10px
 }
.post-it{
    color:black;
    line-height: 1;    
    text-align:center;     
    width: 350px; 
    height:350px; 
    margin-top:50px;
    margin-left: 25px; 
    margin-right: 55px;       
    padding-top:35px;
    font-family:'Reenie Beanie'; 
    font-size:3.5rem;      
    border-bottom-right-radius: 60px 10px;
    display:inline-block;    
    background: #ffff88; /* Old browsers */
    transform:rotate(-2deg);
    position:absolute;
    top:20px;
 }
.purple-post{
    color:black;
    background: #CCCCFF;
    transform:rotate(-4deg);
    position:absolute;
    left:375px;
}
 .green-post{
    color:blue;
    background: #CCFFCC;
    transform:rotate(4deg);
    position:absolute;
    left:750px;
 }
.pin{
  height: 35px;
  width: 35px;
  background-color:red;
  box-shadow: 2px 2px #888888;
  border-radius: 50%;
  display: inline-block;
  position:absolute;
  top:0px;
  left:10px;

}
 .postMobile{
     width:100px;
     height:100px;
     font-size:1rem; 
     text-align:center;  
 }
 .purpleMobile{
     width:100px;
     height:100px;
     left:90px;
     font-size:1rem; 
     text-align:center;  
 }
  .greenMobile{
     width:100px;
     height:100px;
     left:185px;
     font-size:1rem; 
     text-align:center;  
 }
 .pinMobile{
    height: 8px;
    width: 8px;
    left:5px;
 }


</style>