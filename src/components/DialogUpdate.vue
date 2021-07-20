<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit Post ITs
        </v-btn>
      </template>
      <v-card>
        <v-card-title class = "justify-center">
          <span class="text-h5 ">Update Bulletin Post IT</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Post It 1"
                  type="text"
                  v-model = "posts.event1"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Post It 2"
                  type="text"
                  v-model = "posts.event2"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                   label="Post It 3"
                   type="text"
                   v-model = "posts.event3"
                ></v-text-field>
              </v-col>
   
            </v-row>
          </v-container>
 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
             @click = "submit('close')"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click = "submit('save')"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import {projectFirestore} from '../firebase/config'

  export default {
    name: 'DialogUpdate',
    components: {
    },

    data: () => ({
      dialog:false,
      posts: {event1:'',event2:'',event3:'',}
    }),

    methods: {

      submit(_input){         
        if(_input == 'close'){
          this.dialog = false //close dialog box
        }else if(_input =="save"){
          console.log(this.posts)
          // Write annoucments into Firebase store collection 'bulletin' document 'most-recent-post'
                    projectFirestore.collection("bulletin").doc('most-recent-post').set(this.posts)
                    .then(() => {
                        console.log("Document successfully written!");
                        // Done
                        //  this.isPending = false
                        //clear inputs
              
                    
                        // Redirect to the playlist details page
                        //  this.$router.push({path:`/playlistdetails/${info.uid}`})
                        //this.$router.push({path:`/`})
                      
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

          //this.dialog = false //close diablog box
      }
        

      },

    },  
    //Life Cycle Hooks
    created(){

    },
    


  }

</script>
