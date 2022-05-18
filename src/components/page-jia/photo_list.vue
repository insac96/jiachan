<template>
  <div class="list">
    <div class="list__title">
      <i class='bx bx-image-alt'></i>
      {{title}}
    </div>

    <div class="list__content">
      <img
        v-for="img in list" :key="img"
        :src="require(`@/assets/photo/${img}`)" 
        :alt="img"
        @click="Select(img)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'list': { type: Array },
    'title': { type: String }
  },

  methods: {
    Select (img) {
      this.$emit('select', img)
    }
  }
}
</script>