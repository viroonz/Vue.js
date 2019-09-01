<template>
<div>
  <p>{{ user.name }}</p>
  <h1>UserProfile Test</h1>
     <h1>User Profile {{ $route.params.id }}</h1>
</div>
</template>

<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users/'
export default {
  async mounted(){
      const res = await axios.get(url + this.$route.params.id)
         this.user = res.data

       
     },
     data (){
       return {
         user: {

         }
       }
     }
}
</script>

<style>

</style>