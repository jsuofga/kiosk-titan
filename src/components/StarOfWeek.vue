<template>

    <div class ="star-of-week d-flex flex-column align-center justify-space-between ">
       
        <p class = "white--text">Daily Motivation</p>
        <i class = "white--text "> "{{quoteOfDay}}"</i>
        <p class = "white--text" >By: {{quoteOfDayAuthor}}</p>
     
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'StarOfWeek',

    data() {
        return {
            quoteOfDay:'',
            quoteOfDayAuthor :''
        }
    },
    methods:{
        getQuote(){
            //Get a Quote 
            axios.get(`https://type.fit/api/quotes`)
            .then(response => {
            // JSON responses are automatically parsed.
            console.log(response)
            this.quoteOfDay = response.data[Math.floor(Math.random() * 1001)].text
            this.quoteOfDayAuthor = response.data[Math.floor(Math.random() * 1001)].author
            })
            .catch(e => {
            // this.errors.push(e)
            })

        }

    },

    mounted(){
        this.getQuote()
        setInterval(this.getQuote, 36000)


    }
}
</script>

<style scoped>

 .star-of-week{
    background-color: purple ;
    border-radius: 8px;
    box-shadow:  6px 10px 5px rgb(99, 97, 96);
    height:450px;
    font-size: 2.3rem;
}

 i{
      font-size: 2.7rem;
 }

</style>