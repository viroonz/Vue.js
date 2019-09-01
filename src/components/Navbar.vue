<template>
   <div>
       
       <h1>Navbar</h1>
       <router-link to="/">Home</router-link>
       {{' | '}}
         <router-link to="/form">form</router-link>
        {{' | '}}
        <router-link to="/chart">Chart</router-link>
        {{' | '}}
        <router-link to="/i18n">i18n</router-link>
        {{' | '}}
         <router-link to="/about">About</router-link>
        {{' | '}}
         <router-link to="/Nested">Nested</router-link>
        {{' | '}}        
         <router-link to="/contact">Contact</router-link>
        {{' | '}}
         <router-link to="/user">User</router-link>
      {{' | '}}
         <router-link to="/search">search</router-link>
      
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>