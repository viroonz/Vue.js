<template>
    <div class="box">
        <h1>Nested</h1>
         <progress class="progress" :value="counter" min="1" max="20"> </progress>
       <button @click="counter+=1" class="button" >update</button> <br> <br>
       <button @click="resetCounter()" class="button is-danger"> Reset </button>
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