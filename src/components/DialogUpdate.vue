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
          Edit Annoucements
        </v-btn>
      </template>
      <v-card>
        <v-card-title class = "justify-center">
          <span class="text-h5 ">Announcements</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Announcement 1"
                  type="text"
                  v-model = "announcement1"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Announcement 2"
                  type="text"
                  v-model = "announcement2"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                   label="Announcement 3"
                   type="text"
                   v-model = "announcement3"
                
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


  export default {
    name: 'DialogUpdate',
    components: {
    },
    data: () => ({
      dialog:false,
      announcement1:'',
      announcement2:'',
      announcement3:''

    }),
    methods: {

      submit(_input){         
        if(_input == 'close'){
          // alert('close')
          this.dialog = false
          console.log (this.announcement1,this.announcement2,this.announcement3)
        }else if(_input =="save"){
          // alert('save')
          this.dialog = false
          console.log (this.announcement1)
        }

      },



    },  
    created(){

    },

    mounted(){
  
      
    
    }
  }

</script>
