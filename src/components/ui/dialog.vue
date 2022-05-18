<template>
  <transition name="effect-dialog">
    <div 
      class="dialog" 
      v-bind="$attrs" 
      v-if="isShow"
    >
      <div class="dialog__overplay" @click="overplayClick"></div>

      <div class="dialog__content" v-if="!preview">
        <div class="dialog__content__icon">
          <slot name="icon"></slot>
        </div>

        <div class="dialog__content__title">
          <slot name="title"></slot>
        </div>

        <div class="dialog__content__body">
          <slot name="body"></slot>
        </div>

        <div class="dialog__content__button">
          <slot name="action"></slot>
        </div>
      </div>

      <div class="dialog__preview" v-else>
        <div class="dialog__preview__close" @click="close">
          <i class='bx bx-x' ></i>
        </div>

        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'model',
  },

  props: {
    'show': { type: Boolean, default: false },
    'overplayHide': { type: Boolean, default: false },
    'preview': { type: Boolean, default: false },
  },

  data() {
    return {
      isShow: false
    }
  },

  watch: {
    show (newVal) {
      this.isShow = newVal
    }
  },

  mounted () {
    this.isShow = this.show
  },

  methods: {
    overplayClick () {
      if(!this.overplayHide) return

      this.close()
    },

    close () {
      this.$emit('hide')
      this.$emit('model', false)
    }
  },
}
</script>


<style lang="sass">
@import '@/assets/style/ui/dialog.sass'
</style>