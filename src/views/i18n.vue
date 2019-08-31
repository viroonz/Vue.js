<template>
  <div> 
     <h1> I18n </h1>
          <button @click="$i18n.locale=nextLocale" class="button">{{ nextLocale }}</button>
      <p>Hello Message: {{ $t('hello') }}</p>
     <p>{{ $t('months[1]') }}</p>
        <p>{{ $tc('apple', 0) }}</p>
      <p>{{ $tc('apple', 2) }}</p>
  </div>
</template>

<script>
export default {
  computed:{
    
      nextLocale(){
          const currentLocale = this.$i18n.locale
         if (currentLocale === 'th') {
             return 'en'
         } else {
             return 'th'
         }
      }
  }
}
</script>

<style>

</style>