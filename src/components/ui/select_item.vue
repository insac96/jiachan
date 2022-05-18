<template>
  <div 
    :class="{
      'select__item': true,
      'select__item--active': !!isActive,
    }"
    @click="itemClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tab: { type: String, default: null }
  },

  computed: {
    isActive () {
      return !!this.tab && (!!this.$parent && !!this.$parent.tab) && this.tab == this.$parent.tab
    }
  },

  methods: {
    itemClick () {
      if(!this.tab) return
      if(!this.$parent) return

      this.$parent.$emit('model', this.tab)
    }
  },
}
</script>