<template>
<div>
  <h1>User</h1>
  <div class="box">
   <div class="field">
         <input v-model="filter" type="text" class="input"/>
         <pre> {{ filter }} </pre>
     </div>

     <div class="box">
      <button @click="getUsers()" class="button">Get User</button>
      </div>
  </div>


      <!-- <user-list :users="users"/> -->
    <user-list :users="filterUsers"/>
  </div>
</template>


<script>
import axios from 'axios'
import UserList from '../components/Userlist'

const url = 'https://jsonplaceholder.typicode.com/users'
export default {
  components: {
     'user-list':UserList
  },
   data () {
       return {
           users: [] ,
           filter: ''
       }
   },
   computed :{
     filterUsers(){
        const pattern = new RegExp(this.filter, 'i')
       return this.users.filter ( each => {
             return pattern.test(each.name) || pattern.test(each.username)

       })
    
     }
   },
   methods:{
    async getUsers() {
            const res = await axios.get(url)
            this.users = res.data
        }

     
   }
}
</script>

<style>
   
</style>