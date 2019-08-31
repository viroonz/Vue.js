<template>
  <div >

    <h1> App </h1>
    <router-view/>
    <p>==============================</p>
    <br>
       <hello/> 
    <p>==============================</p>
    <br>
       <myworld/>
  </div>

  
</template>

<script>
import Navbar from './components/Navbar'
import './style.css'
export default {
  components:{
    'hello' :Hello ,
       'myworld' :myworld
   }
}
</script>