<template>
  <div class="Sound">
    <!--Menu Select-->
    <UiSelect 
      v-model="menuSelect"
      :color="soundSelect.color"
    >
      <UiSelectItem  
        v-for="list in menuSelects" 
        :key="list" 
        :tab="list"
      >
        {{ list }}
      </UiSelectItem>
    </UiSelect>

    <!--Now Playing-->
    <div 
      class="now" 
      :style="{
        '--ui-now-time': `${Percent}%`,
        '--ui-now-color': soundSelect.color
      }"
      v-if="!!hasSound"
    >
      <div class="now-info">
        Đang phát
        <span>{{ soundSelect.name }}</span>
      </div>

      <div class="now-control">
        <div class="now-control-btn" @click="PlaySoundSelect" v-if="!playing">
          <i class='bx bx-play'></i>
        </div>

        <div class="now-control-btn" @click="PauseSoundSelect" v-else>
          <i class='bx bx-pause'></i>
        </div>

        <div class="now-control-btn" @click="Stop">
          <i class='bx bx-x'></i>
        </div>
      </div>

      <div class="now-time">
        <div class="now-time-btn">
          {{ Math.floor(Percent) }}%
        </div>
      </div>
    </div>

    <!--Sound List-->
    <div class="content">
      <!--Basic-->
      <div class="content-select" v-show="menuSelect == 'Basic' || menuSelect == 'All'">
        <SoundList :list="soundsList.basic.list_1" @select="Action" :soundFile="soundSelect.file"></SoundList>
        <SoundList :list="soundsList.basic.list_2" @select="Action" :soundFile="soundSelect.file"></SoundList>
        <SoundList :list="soundsList.basic.list_3" @select="Action" :soundFile="soundSelect.file"></SoundList>
        <SoundList :list="soundsList.basic.list_4" @select="Action" :soundFile="soundSelect.file"></SoundList>
      </div>

      <!--Troll-->
      <div class="content-select" v-show="menuSelect == 'Troll' || menuSelect == 'All'">
        <SoundList :list="soundsList.troll" @select="Action" :soundFile="soundSelect.file"></SoundList>
      </div>

      <!--Japan-->
      <div class="content-select" v-show="menuSelect == 'Japan' || menuSelect == 'All'">
        <SoundList :list="soundsList.japan.list_1" @select="Action" :soundFile="soundSelect.file"></SoundList>
        <SoundList :list="soundsList.japan.list_2" @select="Action" :soundFile="soundSelect.file"></SoundList>
      </div>

      <!--Dance-->
      <div class="content-select" v-show="menuSelect == 'Dance'">
        <SoundList :list="soundsList.dance.list_1" @select="Action" :soundFile="soundSelect.file"></SoundList>
        <SoundList :list="soundsList.dance.list_2" @select="Action" :soundFile="soundSelect.file"></SoundList>
      </div>
    </div>
  </div>
</template>

<script>
import basic from '../sounds/basic'
import troll from '../sounds/troll'
import japan from '../sounds/japan'
import dance from '../sounds/dance'

export default {
  name: 'Home',

  computed: {
    Percent () {
      if(!this.hasSound) return 0

      return (this.soundSelect.currentTime / this.soundSelect.duration) * 100
    }
  },

  data() {
    return {
      menuSelect: 'Basic',
      
      menuSelects: [
        'Basic', 'Troll', 'Japan', 'Dance', 'All'
      ],

      hasSound : false,

      playing: false,

      soundSelect: {
        audio: null,
        file: null,
        name: null,
        repeat: null,
        currentTime: null,
        duration: null,
        color: null
      },

      soundsList: {
        basic: basic,
        troll: troll,
        japan: japan,
        dance: dance
      }
    }
  },

  methods: {
    ResetSoundSelect () {
      this.hasSound = false
      this.playing = false
      this.soundSelect.audio = null
      this.soundSelect.file = null
      this.soundSelect.name = null
      this.soundSelect.repeat = null
      this.soundSelect.duration = null
      this.soundSelect.currentTime = null
      this.soundSelect.color = null
    },

    Action (sound) {
      if(sound.file !== this.soundSelect.file) {
        this.Start(sound)
      }
      else {
        this.Stop(sound)
      }
    },

    async Start (sound) {
      // Pause Now Audio
      if(!!this.hasSound) {
        await this.soundSelect.audio.pause()
        this.soundSelect.audio.currentTime = 0

        this.ResetSoundSelect()
      }

      // Set New Audio
      this.hasSound = true
      this.soundSelect.audio = document.getElementById(sound.file)
      this.soundSelect.file = sound.file
      this.soundSelect.name = sound.name
      this.soundSelect.repeat = sound.repeat
      this.soundSelect.duration = this.soundSelect.audio.duration
      this.soundSelect.color = sound.color

      // Play
      await this.soundSelect.audio.play()
      this.playing = true
      
      // Loop or Stop when end audio
      this.soundSelect.audio.ontimeupdate = async () => {
        this.soundSelect.currentTime = this.soundSelect.audio.currentTime

        if(this.soundSelect.currentTime === this.soundSelect.duration){
          if(!!this.soundSelect.repeat){
            this.PlaySoundSelect()
          }
          else {
            this.Stop()
          }
        }
      }
    },

    async Stop () {
      if(!this.hasSound) return

      // Pause
      await this.soundSelect.audio.pause()
      this.soundSelect.audio.currentTime = 0

      // Reset
      this.ResetSoundSelect()
    },

    async PauseSoundSelect () {
      if(!this.hasSound) return
      await this.soundSelect.audio.pause()
      this.playing = false
    },

    async PlaySoundSelect () {
      if(!this.hasSound) return
      await this.soundSelect.audio.play()
      this.playing = true
    }
  },
}
</script>

<style lang="sass">
@import '@/assets/style/page/home.sass'
</style>
