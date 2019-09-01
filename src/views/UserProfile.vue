<template>
<div>
  <div class="card">
    <h1 class="title">ข้อมูลส่วนตัว</h1>
      <div class="badge badge-success text-wrap fon " style="">
          <p class="font-weight-bold">id : {{ user.id }}</p>
          <p class="font-weight-bold">Name : {{ user.username }}</p>
         <p class="font-weight-bold">RealName : {{ user.name }}</p>
          <p class="font-weight-bold">Email : {{ user.name }}</p>
      </div>


  </div>
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