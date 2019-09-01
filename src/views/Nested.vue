<template>
    <div class="box">
        <h1>Nested</h1>
    
         <progress class="btn-block bg-dark " :value="counter" min="1" max="20"> </progress>
         
     
         <br>
       <button @click="counter+=1" class="btn btn-success btn-block" >update</button>
       <button @click="resetCounter()" class="btn btn-danger btn-block"> Reset </button>
   <hr>  <one @reset="resetCounter()" :counter="counter"/>
    </div>
  
</template>

<script>
import One from '../components/One'
export default {
   components: {
       one: One
   },
   data () {
       return{
           counter: 1
       }
   }
   ,
   methods: {
       resetCounter(){
           this.counter = 1
       }
   }
}
</script>

<style>

</style>