<template >
<div class="bg">
  <div class="container " >
     <section class="section">
       
             <h1> App </h1>
             <navbar/>
             <router-view/>
       
     </section>
  </div>
</div>
  
</template>

<script>
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


import './style.css'
export default {
   components:{
     navbar: Navbar
   }

}
</script>