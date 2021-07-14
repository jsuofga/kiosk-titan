<template>
    <div class ="updates">
            <v-card
              class="mx-auto"
              color = "#9A8316"
              dark
              height = 450
        >
              <v-card-text>
                <h1 id = 'update-title' class = "text-h3 d-flex justify-center white--text"> Annoucements
                   <div id= 'icon-edit' v-if = "adminAccess">
                        <!-- <v-icon v-if = "adminAccess">mdi-pencil</v-icon> -->
                        <DialogUpdate />
                    </div> 
                </h1>
                
                <ol >
                    <li class=" text-h3 white--text"  v-for="(item, index) in updates" :key="index">
                    {{item}}
                    </li>
                </ol>
            </v-card-text>
              
        </v-card>
    </div>
</template>

<script>
import DialogUpdate from "../components/DialogUpdate.vue"
export default {
     name: 'Updates',
     props:['adminAccess'],
     components:{DialogUpdate,},

     data: () => ({
     updates: ['Happy Labor Day, have a safe weekend and see you on tueday', 'lorem epsom sadfrwer lowern a,weornmlasdf lkwejr  go gog og','lorem epsom sadfrwer lowern a,weornmlasdf lkwejr  go gog og']
    }),
}
</script>

<style scoped>

 .updates{
    
  
 }
 #update-title{
     position:relative
 }
 #icon-edit{
     position:absolute;
     right:10px

 }
 li{
     margin:20px;
 }


</style>