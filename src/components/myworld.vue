<template>
   <div>
     <p>
        <a :href="url">google {{ url }}</a> <br>
        <a :href="url" :target="'targer'">{{url}}</a>
     </p>
   

   </div>
</template>

<script>
export default {
  data () {
      return {
          numbers: [10,20,30,35,40] ,
          url : 'https://google.com'
      }
  }
}
</script>

<style>

</style>