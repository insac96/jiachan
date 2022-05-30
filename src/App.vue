<template>
  <div id="app">
    <router-view/>
    
    <UiPWA></UiPWA>
  </div>
</template>

<script>
import pwa from '@/components/other/pwa.vue'

export default {
  components: {
    'UiPWA': pwa
  }
}
</script>

<style lang="sass">
@import '@/assets/style/index.sass'
</style>

