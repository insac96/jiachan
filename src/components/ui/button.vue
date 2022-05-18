<template>
  <button 
    :class="{
      'btn': true,
      'btn--danger': !!danger,
      'btn--success': !!success,
      'btn--warn': !!warn,
      'btn--circle': !!circle,
      'btn--border': !!border,
      'btn--effect': !!effect
    }"
    :style="{
      '--ui-button-color': color,
      '--ui-button-width': width,
      '--ui-button-height': !!circle ? width : height
    }"
    v-bind="$attrs"
    v-on="listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    'danger': { type: Boolean , default: false },
    'success': { type: Boolean , default: false },
    'warn': { type: Boolean , default: false },
    'circle': { type: Boolean , default: false },
    'border': { type: Boolean , default: false },
    'effect': { type: Boolean , default: false },
    'width': { type: String , default: 'auto' },
    'height': { type: String , default: 'auto' },
    'color': { type: String , default: '29,161,242' },
  },

  computed: {
    listeners () {
      return {
        ...this.$listeners
      }
    },
    class () {
      return {
        ...this.$class
      }
    }
  }
}
</script>

<style lang="sass">
.btn
  display: flex
  justify-content: center
  align-items: center
  width: var(--ui-button-width)
  height: var(--ui-button-height)
  background: rgb(var(--ui-button-color))
  color: #fff
  text-align: center
  text-transform: capitalize
  font-weight: 600
  padding: 12px
  transition: all 0.25s ease
  user-select: none
  overflow: hidden

  span
    overflow: hidden
    text-overflow: ellipsis

  &--danger
    background: rgb(255,71,87)
  &--success
    background: rgb(70,201,58)
  &--warn
    background: rgb(255,186,0)
  &--circle
    border-radius: 50%
  &--border
    background: #1e2023
    border: 2px solid rgb(var(--ui-button-color))
  &--effect
    background: rgb(var(--ui-button-color))
    animation: effect-button 1s linear infinite
    
@keyframes effect-button
  0%
    transform: scale(0.8)
    box-shadow: 0 0 5px 3px rgba(var(--ui-button-color), 0.8)
  100%
    transform: scale(1)
    box-shadow: 0 0 30px 15px rgba(var(--ui-button-color), 0.2)
</style>