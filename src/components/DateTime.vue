<template>
    <div class ="date-time">
        <h1 class = "display-3 font-weight-bold white--text">{{monthNames[d.getMonth()]}} {{d.getDate()}}</h1>
        <h1 class = "display-3 font-weight-bold white--text">{{d.getHours()}}<span class = "blink ml-2 mr-2">:</span>{{minutes}}</h1> 
    
    </div>
</template>

<script>


export default {
    name: 'DateTime',
    data: () => ({
      d : new Date(),
      monthNames: ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
    }),
    methods:{
       
    },
    computed:{
        minutes: function(){
            if (this.d.getMinutes() < 10) {
            return '0' + this.d.getMinutes();
            }
            return this.d.getMinutes();
        }
    },
   //Life Cycle Hooks
    mounted(){
      

    },
    unmounted(){

    }

}
</script>

<style scoped>

 .date-time{
  display:flex;
  flex-direction: column;
  align-items: center;
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