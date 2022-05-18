<template>
  <div class="content content--photo">
    <JiaPhotoList title="Đáng Yêu" :list="cute" @select="Select"></JiaPhotoList>

    <JiaPhotoList title="Live Ngủ" :list="sleep" @select="Select"></JiaPhotoList>

    <UiDialog v-model="view" overplay-hide preview @hide="Remove">
      <img
        :src="require(`@/assets/photo/${photoSelect}`)" 
        :alt="photoSelect"
        v-if="photoSelect"
      />
    </UiDialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: false,

      photoSelect: null,

      cute: [
        'cute_1.jpg',
        'cute_2.jpg',
        'cute_3.jpg',
        'cute_4.jpg',
        'cute_5.jpg',
      ],
      sleep: [
        'sleep_1.jpg',
        'sleep_2.jpg',
        'sleep_3.jpg',
        'sleep_4.jpg',
      ],
    }
  },

  methods: {
    Select (photo) {
      this.photoSelect = photo

      this.view = true
    },

    Remove () {
      this.photoSelect = null
    }
  }
}
</script>
