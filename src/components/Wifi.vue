<template>
    <div class ="wifi">
        <v-card
              class="mx-auto "
              color = "white"
              light
              height = 400
            >
              <v-card-text>
             
                <h1  class = "text-h4 d-flex justify-center">   <v-icon class = "left mr-5" large>mdi-wifi</v-icon>Join Our Public Wifi</h1> <br>
        
                <div class = "d-flex justify-center" > 

                    <img src= "../assets/qr-wifi.png" width = "200px"> 
            
                </div> <br>
                        <p class="text-h5 text--white d-flex justify-center">
                  SCAN ME 
                </p>
              
              
              </v-card-text>
            </v-card>
    </div>
</template>

<script>
export default {
    name: 'Wifi',

}
</script>

<style scoped>

 .wifi{

  
 }

</style>