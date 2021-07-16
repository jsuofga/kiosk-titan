<template>
    <div class ="wifi">

              <v-card-text>
                <h1  class = "text-h4 d-flex justify-center"> Homelegance Public Wifi</h1> <br>
        
                <div class = "d-flex justify-center" > 
                    <img src= "../assets/qr-code-wifi-homelegance-public.png" width = "250px"> 
                </div> <br>
                        <p class="text-h5 text--white d-flex justify-center">
                  SCAN ME 
                </p>
              </v-card-text>
         
    </div>
</template>

<script>
export default {
    name: 'Wifi',

}
</script>

<style scoped>

 .wifi{
    background-color: white ;
    height:400px;
    border-radius: 8px;
    box-shadow:  6px 10px 5px rgb(99, 97, 96);
   
  
 }

</style>