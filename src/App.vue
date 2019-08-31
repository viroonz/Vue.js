<template>
  <div >

    <h1> App </h1>
    <navbar/>
    <router-view/>

  </div>

  
</template>

<script>
import Navbar from './components/Navbar'
import './style.css'
export default {
   components:{
     navbar: Navbar
   }

}
</script>