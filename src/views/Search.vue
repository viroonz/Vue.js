<template>
   <div>
       <h1 class="title">Seach</h1>
       <div class="box">
            <div class="field">
                <input v-model="search" type="text" class="input"/>
              <pre>{{ users }}</pre>
            </div>
       </div>
   </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

const url = 'https://jsonplaceholder.typicode.com/users?q='



export default {
    created() {
        this.getSearchUsers = _.debounce(this.getSearchUsers,50)
    }
     ,
    watch: {
        search (newValue) {
            if (newValue !== '') {
            this.getSearchUsers(newValue)
            }
        }
    }
    ,
    data () {
        return {
            search: '',
            users: []
        }
    }
    ,
    methods: {
        async getSearchUsers(value){
            try {
               const res = await axios.get(url + value)
               this.users = res.data
            }catch (err) {

            }

        }
    }
}
</script>

<style>

</style>