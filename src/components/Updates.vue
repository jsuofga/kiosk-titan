<template>
  <div class = "updates">
            
            <h1 id = 'update-title' class = "display-3 d-flex justify-center  white--text"> Bulletin
               
                <div id= 'icon-edit' v-if = "adminAccess">
                    <!-- <v-icon v-if = "adminAccess">mdi-pencil</v-icon> -->
                    <DialogUpdate />
                </div> 
            </h1>
        
            <div class = "post-it">{{posts.event1}}</div>
            <div class = "post-it purple-post">{{posts.event2}}</div>
            <div class = "post-it green-post">{{posts.event3}}</div>
            
            <!-- <div class = "post-it">sdfwer ewrtqetr ewrwer wewrr</div>
            <div class = "post-it purple-post">Meican Food Lunch tomorrow!</div>
            <div class = "post-it green-post">drive safely!</div> -->

            <!-- <div class=" post-it"  v-for="(item, index) in announcements" :key="index">
                {{item}}
            </div> -->

            <!-- <li class=" text-h3 white--text"  v-for="(item, index) in announcements" :key="index">
            {{item}}
        </li> -->

    </div>

</template>

<script>

import {projectFirestore} from '../firebase/config'
import DialogUpdate from "../components/DialogUpdate.vue"

export default {
     name: 'Updates',
     props:['adminAccess'],
     components:{DialogUpdate,},

     data: () => ({
        posts : {event1:'',event2:'',event3:'',}
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
  position:relative;
  height:450px;
 
  /* box-shadow:  6px 10px 5px rgb(99, 97, 96); */
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
  margin-left: 55px; 
  margin-right: 55px;       
  padding-top:35px;
  /* position:relative;    */
  /* border:1px solid #E8E8E8;   */
  /* border-top:60px solid #fdfd86; */
  font-family:'Reenie Beanie'; 
  font-size:3.5rem;      
  border-bottom-right-radius: 60px 10px;
  display:inline-block;    
  background: #ffff88; /* Old browsers */
  transform:rotate(-2deg);
  position:absolute;
  top:20px;
  /* box-shadow:  6px 10px 5px rgb(99, 97, 96); */
 }
 .purple-post{
    color:black;
    border-top:60px solid #CCCCFF;
    background: #CCCCFF;
    transform:rotate(-4deg);
    position:absolute;
    left:375px;
  
 }
 .green-post{
    color:blue;
    border-top:60px solid #CCFFCC;
    background: #CCFFCC;
    transform:rotate(4deg);
    position:absolute;
    left:750px;
 }



</style>