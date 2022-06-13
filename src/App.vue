<template>
  <div id="app">
    <router-view/>
    
    <DialogPWA></DialogPWA>
    <DialogIntro></DialogIntro>
  </div>
</template>

<script>
import pwa from '@/components/other/pwa.vue'
import intro from '@/components/other/intro.vue'

export default {
  components: {
    'DialogPWA': pwa,
    'DialogIntro': intro
  }
}
</script>

<style lang="sass">
@import '@/assets/style/index.sass'
</style>

