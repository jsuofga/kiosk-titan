<template>
    <div class ="wifi">

              <v-card-text>
                <h1  class = "text-h4 d-flex justify-center"> <img src= "../assets/homeleganceLogoNoCircle.png" width = "200px">  </h1> 
        
                <div class = "d-flex flex-column justify-center align-center" > 
                    <img src= "../assets/qr-code-wifi-homelegance-public.png" width = "200px"> 
                    <p class="text-h5 text--white d-flex justify-center">Public Wifi </p>
                </div> 
            
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