<template>

   <div class="container">
     <h1 class="">Manager User</h1>
         <table class="table table-hover table-dark">
     <thead>
       <tr>
          <th scope="col">id</th>
          <th scope="col">username</th>
          <th scope="col">name</th>
          <th scope="col">email</th>
        </tr>
     </thead>
     
     <tbody v-for="each in users" :key="each.id">
       <tr>
       <td >
         <p>{{ each.id }}</p>
         </td>
       <td >
      
          <router-link class="btn btn-success" :to="'/user/' + each.id">{{ each.username }} </router-link>
       </td>
       <td >
         <p>{{each.name}}</p>
       </td>
     <td >
         <p>{{each.email}}</p>
       </td>
       </tr>
     </tbody>
   </table>
   </div>
</template>


<script>
import UserListitem from './Userlistitem'

export default {
 props: ['users'],

 components:{
   'user-list-item': UserListitem
 }
}
</script>

<style>

</style>