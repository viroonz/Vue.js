<template>

   <div class="box">
     <h1 class="title">Manager User</h1>
         <table class="table ">
     <thead>
          <th>id</th>
          <th>username</th>
          <th>name</th>
          <th>email</th>

     </thead>
     
     <tbody v-for="each in users" :key="each.id">
       
       <td>
         <p>{{ each.id }}</p>
         </td>
       <td>
      
          <router-link :to="'/user/' + each.id">{{ each.username }} </router-link>
       </td>
       <td>
         <p>{{each.name}}</p>
       </td>
     <td>
         <p>{{each.email}}</p>
       </td>
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