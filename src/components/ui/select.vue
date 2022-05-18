<template>
  <div 
    :class="{
      'select': true,
      'select--noRadius': !!noRadius
    }"
    :style="{
      '--ui-select-color': color
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'tab',
    event: 'model',
  },

  props: {
    'tab': { type: String, default: null },
    'noRadius': { type: Boolean, default: false },
    'color': { type: String, default: null },
  },
}
</script>

<style lang="sass">
@import '@/assets/style/ui/select.sass'
</style>