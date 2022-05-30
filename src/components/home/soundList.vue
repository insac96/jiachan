<template>
  <div class="list my-1">
    <UiButton
      v-for="(item, index) in list" :key="index"
      width="75px"
      circle border
      :color="colors[index]"
      :effect="soundFile === item.file"
      :style="{
        'margin': '4px',
      }"
      @click="Select(item, colors[index])"
    >
      <audio :src="require(`@/assets/audio/${item.file}.mp3`)" preload="auto" :id="item.file">
        Your browser does not support the audio element.
      </audio>
      <span>{{ item.name }}</span>
    </UiButton>
  </div>
</template>

<script>
export default {
  props: {
    soundFile : { type: String },
    list: { type: Array }
  },

  data() {
    return {
      colors: [
        '29,161,242',
        '255,71,87',
        '255,186,0',
        '70,201,58',
        '238,102,0',
        '70, 222, 227',
        '232,79,130',
        '114,137,218',

        '29,161,242',
        '255,71,87',
        '255,186,0',
        '70,201,58',
        '238,102,0',
        '70, 222, 227',
        '232,79,130',
        '114,137,218',

        '29,161,242',
        '255,71,87',
        '255,186,0',
        '70,201,58',
        '238,102,0',
        '70, 222, 227',
        '232,79,130',
        '114,137,218',

        '29,161,242',
        '255,71,87',
        '255,186,0',
        '70,201,58',
        '238,102,0',
        '70, 222, 227',
        '232,79,130',
        '114,137,218',
      ],
    }
  },

  methods: {
    Select (item, color) {
      item.color = color

      this.$emit('select', item)
    }
  },
}
</script>