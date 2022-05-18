<template>
  <div class="content content--video">
    <JiaVideoList title="Khoảnh Khắc" folder="moment" :list="moment" @select="Select"></JiaVideoList>

    <JiaVideoList title="Shogo Gifts" folder="gift_shogo" :list="gift_shogo" @select="Select"></JiaVideoList>

    <JiaVideoList title="Dennis Gifts" folder="gift_dennis" :list="gift_dennis" @select="Select"></JiaVideoList>

    <JiaVideoList title="Cloudy Gifts" folder="gift_cloudy" :list="gift_cloudy" @select="Select"></JiaVideoList>

    <JiaVideoList title="Huy Gifts" folder="gift_huy" :list="gift_huy" @select="Select"></JiaVideoList>

    <JiaVideoList title="Dubai Gifts" folder="gift_dubai" :list="gift_dubai" @select="Select"></JiaVideoList>

    <UiDialog v-model="view" overplay-hide preview @hide="Remove">
      <video controls v-if="videoSelect.file">
        <source label="fullHD" :src="require(`@/assets/video/${videoSelect.file}.mp4`)" type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
    </UiDialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: false,

      videoSelect: {
        file: null
      },

      moment: [
        'smile',
        'sleep_1',
        'cry'
      ],

      gift_cloudy: [
        '1', '2'
      ],

      gift_shogo: [
        '1', '2', '3'
      ],

      gift_huy: [
        '1', '2', '3', '4', '5'
      ],

      gift_dennis: [
        '1', '2', '3'
      ],

      gift_dubai: [
        '1', '2', '3', '4', '5'
      ]
    }
  }, 

  methods: {
    Select (video) {
      this.videoSelect.file = video.file

      this.view = true
    },

    Remove () {
      this.videoSelect.file = null
    }
  }
}
</script>