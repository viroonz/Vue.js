<template>
<div>
  <h1>User</h1>
  <div class="box">
   <div class="from">
         <input v-model="filter" type="text" class="form-control"/>
         <pre> {{ filter }} </pre>
     </div>

     <div class="card">
               <p>Counter: {{ $store.state.counter }}</p>
      <button @click="getUsers(),$store.commit('mutateCounter')"  class="btn btn-success">Show</button>
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