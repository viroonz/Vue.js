<template>
  <div>
        <h1> Hello World</h1>
        <h1>Counter {{counter}} </h1>
          <button @click="updateCounter"> Update </button> 
        <input type="text" v-model="name"/>
        <p> {{ name }}</p>

        <input type="number" v-model="amount"/>
        <p> Amount : {{ amount }} </p>
        <p> VAT {{ vat }}% </p>
        <p>VAT Amount: {{ vatAmount }}</p>


      
  </div>
</template>

<script>
export default {
    computed: {
      vatAmount() {
          return this.vat + this.amount
      },
      vat() {
          return (this.amount * 7) / 100
      }
    },
    data() {
        return {
                counter: 1 ,
                name : 'Master',
                amount : 100
        }
    },
    methods:{
        updateCounter() {

            this.counter += 1

        }
    }
}
</script>
