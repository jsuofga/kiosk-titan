<template>
    <div class ="date-time">
        <div class ="date"><h1 class = "display-3 font-weight-bold white--text">{{monthNames[month]}} {{date}}</h1></div> 
        <div class = "time"><h1 class = "display-3 font-weight-bold white--text">{{hour}}<span class = "blink ml-2 mr-2">:</span>{{minute}}</h1></div> 
    </div>
</template>

<script>

export default {
    name: 'DateTime',
    data: () => ({
      month:'',
      date:'',
      hour: '',
      minute:'',
      monthNames: ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
    }),
    methods:{
       updateTime(){
         
           let d = new Date()

           // Date
            this.month = d.getMonth()

           // Date
            this.date = d.getDate()
           // Hours
            this.hour = d.getHours()

            // Minutes
            if (d.getMinutes() < 10) {
                this.minute =  '0' + d.getMinutes()
            }
                this.minute = d.getMinutes()
       }
    },
    computed:{

    },
   //Life Cycle Hooks
    mounted(){
     this.timerID = setInterval(this.updateTime, 1000);

    },
    beforeDestroy(){
        clearInterval(this.timerID)
    },


}
</script>

<style scoped>
 .date-time{
     display:flex;
 
 }
 .date,.time{
     margin-left: 20px;
     margin-right: 20px;

 }
 span{
      animation: blink 1s linear infinite;
 }
@keyframes blink {
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
}
</style>