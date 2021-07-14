<template>
    <div class ="star-of-week">
        <v-card
              class="mx-auto"
               color = "#FECB6F"
              dark
              height = 450
        >
              <v-card-text>
                <h1  class = "text-h3 d-flex justify-center white--text"><v-icon x-large class= "mr-5">mdi-trophy</v-icon> Star of Week</h1>
                <v-img class= "text-center pt-5" >
                            <v-avatar size= '250'> 
                                <!-- <img :src="`${team[index].picture}`"> -->
                                <img src="../assets/bk.jpg" alt="">
                            </v-avatar>
                    </v-img>
                    <v-card-title class="justify-center text-h4 white--text">Bryan Kwok</v-card-title>
                    <v-card-text class="text-center text-h5 white--text">Chief</v-card-text>
              </v-card-text>
        </v-card>
     
    </div>
</template>

<script>
export default {
    name: 'StarOfWeek',

}
</script>

<style scoped>

 .star-of-week{

  
 }

</style>