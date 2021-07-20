<template>

    <div class ="announcement">
         <v-btn id = "button-submit" v-if = 'adminAccess' @click= "submit" class = "primary mt-10">Submit</v-btn>
         
         <div v-if= "!showEditAnnouncement" id = "announcement">

           
            <div class = "d-flex flex-column" > 
                    <h2 class = " chalkWriting " v-bind:class = "{chalkWritingMobile :isMobile}" >{{input}}</h2>  <br>
            </div> <br>
         </div>

         

        <!-- Emoji Test Area -->
            <v-btn v-if = 'adminAccess' id = "button-edit"
               @click = "editAnnouncement"
                color="primary"
                dark
                v-bind="attrs"
                >
                Edit Announcements
            </v-btn>

    

            <div v-if = 'showEditAnnouncement' id ="markUpArea">
                             
                        <textarea v-model="input" placeholder = 'Enter announcements here....'></textarea>
                 
                <div id = "emojiArea">
                    <emoji-picker @emoji="insert" :search="search">
                        <div class="emoji-invoker " slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }" @click.stop="clickEvent">
                            <v-btn 
                                class="mt-0"
                                fab
                                small
                                dark
                                color="#ffff88"
                            >
                                <v-icon color='primary' x-large>
                                    mdi-emoticon
                                </v-icon>
                            </v-btn>
                        </div>
                            <div slot="emoji-picker" slot-scope="{ emojis, insert }">
                                <div>
                                    <div>
                                    <input id = 'search-emoji' class = 'input' type="text"  placeholder = "search emoji" v-model="search">
                                    </div>
                                    <div>
                                        <div v-for="(emojiGroup, category) in emojis" :key="category">
                                            <h5>{{ category }}</h5>
                                            <div>
                                            <span
                                                v-for="(emoji, emojiName) in emojiGroup"
                                                :key="emojiName"
                                                @click="insert(emoji)"
                                                :title="emojiName"
                                            >{{ emoji }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </emoji-picker>              
                </div>
            </div>
    </div>
</template>

<script>
import EmojiPicker from 'vue-emoji-picker'
import {projectFirestore} from '../firebase/config'

export default {
    name: 'Announcement',
    components: {EmojiPicker,},
    props:['adminAccess'],
    data() {
        return {
            showEditAnnouncement:false,
            input: '',
            search: '',
            isMobile:false,
        }
    },
    methods:{
        editAnnouncement(){
            this.showEditAnnouncement = true
        },
        submit(){
            console.log(this.input)
            let inputObj = {announcement : this.input} //Firebase Store can only accept objects
         
          // Write annoucments into Firebase store collection 'announcements' documnet 'most-recent-post'
                    projectFirestore.collection("announcements").doc('most-recent-announcements').set(inputObj)
                    .then(() => {
                        console.log("Document successfully written!");
                        // Done
                        this.showEditAnnouncement = false
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                        alert("Failed")
                    });
          
        },

        insert(emoji) {
        this.input += emoji
     },

    },
        //Life Cycle Hooks 
        mounted(){
        // Get realtime update (using onSnapshot method) of all the documents in the collection 'playlist'
        this.unsubscribe =  projectFirestore.collection("announcements").doc('most-recent-announcements')
            .onSnapshot((doc) => {
                // console.log('current data:', doc.data())  
                //this.input = doc.data()
                this.input = doc.data().announcement
                // console.log('Announcements', this.input)
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
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

 .announcement{
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #25292A;
    height: 450px;
    border-radius: 8px;
    box-shadow:  -6px 10px 5px rgb(99, 97, 96); 
    position: relative;
    color:#FBF7F5; 
    
 }
 .chalkWriting{
    /* font-family: 'Permanent Marker', cursive; */
    font-size: 4rem;
 }
  .chalkWritingMobile{
   
    font-size: 1rem;
 }
 #button-edit{
     position:absolute;
     top:-20px;
     left:0px;
 }

 #button-submit{
     position:absolute;
     top:10px;
     left:20px
}
 #markUpArea{
    display:flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    width:90%;
     /* border:5px dotted black */
 }
textarea{
    height: 100px;
    background-color: white;
    width:100%;
    margin-top:10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
}
#emojiArea{
    display:flex;
    position:absolute;
    right:-50px;
    top:50px;
    left:-0px;
    width:50%;
    /* border: 2px solid pink; */
}
#emojiArea:hover{
    background-color:white;
}
 emoji-picker{
     justify-content: center;
 }
 #search-emoji{
     height:50px;
     border:1px solid black;
     background-color: white;
     border-radius: 6px;
     width:  100%;
 }




</style>