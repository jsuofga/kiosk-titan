<template>
    <div class ="updates">
        <v-card
              class="mx-auto"
              color = "#9A8316"
              dark
              height = 450
             
        >
              <v-card-text>
                <h1 class = "text-h3 d-flex justify-center white--text" > <v-icon class = "left mr-5" large>mdi-message-alert</v-icon>Updates</h1>
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
export default {
     name: 'Updates',

     data: () => ({
     updates: ['Happy Labor Day, have a safe weekend and see you on tueday', 'lorem epsom sadfrwer lowern a,weornmlasdf lkwejr  go gog og','lorem epsom sadfrwer lowern a,weornmlasdf lkwejr  go gog og']
    }),
}
</script>

<style scoped>

 .updates{
    
  
 }
 li{
     margin:20px;
 }


</style>