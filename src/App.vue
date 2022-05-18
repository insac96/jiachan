<template>
  <div id="app">
    <router-view/>
    
    <UiMenu></UiMenu>
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

