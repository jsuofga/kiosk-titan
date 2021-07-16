<template>
    <div class ="star-of-week">

                <h1  class = "text-h3 d-flex justify-center white--text "><v-icon x-large  class= "mr-5 white--text" >mdi-trophy</v-icon> Star of Week</h1>
                <v-img class= "text-center pt-5" >
                            <v-avatar size= '250'> 
                                <!-- <img :src="`${team[index].picture}`"> -->
                                <img src="../assets/bk.jpg" alt="">
                            </v-avatar>
                </v-img>
                <v-card-title class="justify-center text-h4 white--text ">Bryan Kwok</v-card-title>
                <v-card-text class="text-center text-h5 white--text ">Chief</v-card-text>

     
    </div>
</template>

<script>
export default {
    name: 'StarOfWeek',

}
</script>

<style scoped>

 .star-of-week{
    background-color: #FDCB6C ;
    border-radius: 8px;
    box-shadow:  6px 10px 5px rgb(99, 97, 96);
   
  
 }

</style>