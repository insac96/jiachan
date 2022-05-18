<template>
  <div class="list">
    <div class="list__title">
      <i class='bx bx-video-recording' ></i>
      {{title}}
    </div>

    <div class="list__content">
      <video
        v-for="video in list" :key="video"
        :id="`${folder}_${video}`"
        @click="Select(folder, video)"
        preload="metadata"
      >
        
        <source :src="require(`@/assets/video/${folder}/${video}.mp4`)" type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'list': { type: Array },
    'title': { type: String },
    'folder': { type: String },
  },

  data() {
    return {
      view: true
    }
  },

  methods: {
    Select (folder, video) {
      const id = `${folder}_${video}`
      const file = `${folder}/${video}`

      this.$emit('select', {
        id: id,
        file: file
      })
    }
  }
}
</script>