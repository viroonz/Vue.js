<template>
   <div>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
    <router-link class="nav-link" to="/chart">Chart</router-link>
      </li>
            <li class="nav-item">
        <router-link class="nav-link" to="/i18n">i18n</router-link>
      </li>
            <li class="nav-item">
        <router-link class="nav-link" to="/pagedata">Albums</router-link>
      </li>
            <li class="nav-item">
         <router-link class="nav-link"  to="/search">search</router-link>
      </li>
            <li class="nav-item">
         <router-link class="nav-link" to="/user">User</router-link>
      </li>
            <li class="nav-item">
    <router-link class="nav-link" to="/chart">Chart</router-link>
      </li>
            <li class="nav-item">
       <router-link class="nav-link" to="/about">About</router-link>
      </li>
                  <li class="nav-item">
        <router-link class="nav-link" to="/contact">Contact</router-link>
      </li>
                        <li class="nav-item">
              <router-link class="nav-link" to="/Nested">Nested</router-link>
      </li>
    </ul>
  </div>
</nav>      
       <!-- <h1>Navbar</h1>
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
        {{' | '}}
         <router-link to="/pagedata">Albums</router-link> -->
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>