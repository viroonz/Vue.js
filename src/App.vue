<template>
  <div >
     <section class="section">
          <div class="container">
             <h1> App </h1>
             <navbar/>
             <router-view/>
          </div>
     </section>
  </div>

  
</template>

<script>
import Navbar from './components/Navbar'
import 'bulma/css/bulma.min.css'
import './style.css'
export default {
   components:{
     navbar: Navbar
   }

}
</script>