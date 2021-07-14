<template>
    <div class ="date-time">
        <h1>July 13, 2021</h1> 
        <h2>12:03</h2>
    </div>
</template>

<script>
import {projectAuth} from '../firebase/config'
import {projectFirestore} from '../firebase/config'
import { timestamp } from '../firebase/config'

export default {
    name: 'DateTime',
    methods:{
        test(){

    }
 }
}
</script>

<style scoped>

 .date-time{
  display:flex;
  flex-direction: column;
  align-items: center;
  
 }

</style>