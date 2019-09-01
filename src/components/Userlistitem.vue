<template>
  
</template>


<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'
export default {
   data () {
       return {
           users: []

       }
   },
   methods:{
     getUsers(){
      //  const data = axios.get(url)
      //  console.log(data)
      axios.get(url).then(res => {
            this.users = res.data

      })

     }
   }
}
</script>

<style>

</style>