<template>
<div class="box">
  <h1>One</h1>
  <progress class="progress is-primary" :value="counter" min="1" max="30"> </progress>
    <button @click="$emit('reset')" class="button is-danger"> Reset One </button>
   <two :counter="counter"/>
</div>
</template>

<script>
import Two from '../components/Two'
export default {
    props: ['counter'],

    components:{
        two: Two
    }

}
</script>

<style>

</style>