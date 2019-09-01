<template>
<div>
  <h1>Two</h1>
  <progress class="progress is-danger" :value="counter" min="1" max="100"> </progress> 
    
  </div>
</template>

<script>

export default {
  props : ['counter']

}
</script>

<style>

</style>