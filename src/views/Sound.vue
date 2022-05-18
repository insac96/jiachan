<template>
  <div class="Sound">
    <!--Menu Select-->
    <UiSelect 
      v-model="menuSelect" 
      :no-radius="!!hasSound"
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
        Đang phát {{ Math.floor(Percent) }}%
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

      <div class="now-time"></div>
    </div>

    <!--Sound List-->
    <div class="content">
      <!--Basic-->
      <div class="content-select" v-show="menuSelect == 'Basic' || menuSelect == 'All'">
        <SoundList :list="basic" @select="Action" :soundFile="soundSelect.file"></SoundList>
        <SoundList :list="basic_2" @select="Action" :soundFile="soundSelect.file"></SoundList>
        <SoundList :list="basic_3" @select="Action" :soundFile="soundSelect.file"></SoundList>
      </div>

      <!--Music-->
      <div class="content-select" v-show="menuSelect == 'Music' || menuSelect == 'All'">
        <SoundList :list="music" @select="Action" :soundFile="soundSelect.file"></SoundList>
      </div>

      <!--Troll-->
      <div class="content-select" v-show="menuSelect == 'Troll' || menuSelect == 'All'">
        <SoundList :list="troll" @select="Action" :soundFile="soundSelect.file"></SoundList>
      </div>

      <!--Japan-->
      <div class="content-select" v-show="menuSelect == 'Japan' || menuSelect == 'All'">
        <SoundList :list="japan" @select="Action" :soundFile="soundSelect.file"></SoundList>
        <SoundList :list="japan_2" @select="Action" :soundFile="soundSelect.file"></SoundList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sound',

  computed: {
    Percent () {
      if(!this.hasSound) return 0

      return (this.soundSelect.currentTime / this.soundSelect.duration) * 100
    }
  },

  data() {
    return {
      menuSelect: 'All',
      
      menuSelects: [
        'Basic', 'Music', 'Troll', 'Japan', 'All'
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

      basic: [
        {
          name: 'Thắng',
          file: 'Chien_Thang',  
        },
        {
          name: 'Thắng 2',
          file: 'Chien_Thang_2',  
        },
        {
          name: 'Thua',
          file: 'thua',   
        },
        {
          name: 'Thua 2',
          file: 'thua_2',   
        },
        {
          name: 'Kịch Tính',
          file: 'Kich_Tinh',
          repeat: true
        },
        {
          name: 'Đồng Hồ 10s',
          file: '10s',   
        },
        {
          name: 'Buồn',
          file: 'Sad',
          repeat: true    
        },
        {
          name: 'Cảm Ơn Anh',
          file: 'cam_on_anh',   
        },
        {
          name: 'Lêu Lêu',
          file: 'leu_leu',   
        },
        {
          name: 'Cười',
          file: 'Cuoi_1',  
        },
        {
          name: 'Cười 2',
          file: 'Cuoi_2',  
        },
        {
          name: 'Em Bé Cười',
          file: 'Em_Be_Cuoi', 
        },
        {
          name: 'Cười Oh No',
          file: 'cuoi_oh_no',
        },
        {
          name: 'Ai Ô Sì Mà',
          file: 'ai_o_si_ma',
        },
        {
          name: 'Quán Em Có Bán Cafe',
          file: 'Ban_Cafe',   
        },
      ],

      basic_2: [
        {
          name: 'Chụt Chụt',
          file: 'Chut_Chut'
        },
        {
          name: 'UwU',
          file: 'uwu'   
        },
        {
          name: 'WoW',
          file: 'wow'
        },
        {
          name: 'Shy Shy Shy',
          file: 'shy_shy_shy',         
        },
        {
          name: 'Hổng Bé Ơi',
          file: 'Hong_Be_Oi',       
        },
        {
          name: 'Khoái Khoái',
          file: 'Khoai_Khoai',       
        },
        {
          name: 'Em Không Hiểu',
          file: 'Em_Khong_Hieu',       
        },
        {
          name: 'Bạch Tuộc Kêu',
          file: 'Bach_Tuoc_Keu'
        }
      ],

      basic_3: [
        {
          name: 'Ôi Bạn Ơi',
          file: 'oi_ban_oi',  
        },
        {
          name: 'Còn Cái Nịt',
          file: 'con_cai_nit'
        },
        {
          name: 'Thôi Đừng Bốc Phét',
          file: 'Thoi_Dung_Boc_Phet',         
        },
        {
          name: 'Ông Im Mẹ Mồm Đi',
          file: 'im_me_mom_di',       
        },
        {
          name: 'Đừng Khóc Nhe',
          file: 'Dung_Khoc_Nhe',  
        },
        {
          name: 'Bảnh Không Gáy',
          file: 'banh_khong_gay',    
        },
        {
          name: 'Bảnh Đang Ế Bạn Ơi',
          file: 'banh_dang_e',    
        },
        {
          name: 'Tóc Không Máu Lửa',
          file: 'toc_mau_lua',    
        },
        {
          name: 'Anh Em Tao Đến',
          file: 'anh_em_tao_den',    
        },
        {
          name: 'À Thế Làm Sao',
          file: 'A_the_lam_sao',   
        },
        {
          name: 'Ôi Con Sông Quê',
          file: 'oi_con_song_que'   
        },
        {
          name: 'Chiếc Bụng Đói',
          file: 'chiec_bung_doi',   
        },
      ],
      
      troll: [
        {
          name: 'Troll 1',
          file: 'Troll_1',
          repeat: true
        },
        {
          name: 'Troll 2',
          file: 'Troll_2',
          repeat: true   
        },
        {
          name: 'Troll 3',
          file: 'Troll_3',
          repeat: true 
        },
        {
          name: 'Troll 4',
          file: 'Troll_4',
          repeat: true  
        },
        {
          name: 'Troll 5',
          file: 'Troll_5',
          repeat: true 
        },
        {
          name: 'Troll 6',
          file: 'Troll_6',
          repeat: true  
        },
        {
          name: 'Troll 7',
          file: 'Troll_7',
          repeat: true  
        },
      ],

      music: [
        {
          name: 'Authentic',
          file: 'Authentic',
          repeat: true
        },
        {
          name: 'Boom',
          file: 'Boom'
        },
        {
          name: 'Funk You',
          file: 'Funk_You' 
        },
        {
          name: 'Boneless',
          file: 'ngau_1',
          repeat: true
        },
        {
          name: 'I Love You',
          file: 'i_love_you' 
        },
        {
          name: 'Moon',
          file: 'Moon',   
        },
        {
          name: 'Simple Dimple PopIt',
          file: 'Simple_Dimple_PopIt',   
        },
        {
          name: 'Tie Me Down',
          file: 'Tie_Me_Down',   
        },
        {
          name: 'Tu Es Foutu',
          file: 'Tu_Es_Foutu',   
        },
      ],
      
      japan: [
        {
          name: 'Arigato',
          file: 'arigato',
          repeat: true
        },
        {
          name: 'Summer Time',
          file: 'Summertime',   
        },
        {
          name: 'Renai',
          file: 'Renai',   
        },
        {
          name: 'Hare',
          file: 'HarehareYa',   
        },
        {
          name: 'Best Friend',
          file: 'best_friend',   
        },
        {
          name: 'Hazy Moon',
          file: 'Hazy_Moon',   
        },
        {
          name: 'Doraemon',
          file: 'Doraemon',   
        },
        {
          name: 'Kawaii',
          file: 'Kawaii',  
        },
        {
          name: 'First Date',
          file: 'first_date',   
        },
        {
          name: 'Omie',
          file: 'Omie',  
        },
        {
          name: 'Sakura',
          file: 'sakura',   
        },
        {
          name: 'First Love',
          file: 'First_Love',   
        },
      ],

      japan_2: [
        {
          name: 'Bukan Pho',
          file: 'Bukan_pho',  
        },
        {
          name: 'Nyanpasu',
          file: 'Nyanpasu',   
        },
        {
          name: 'Kanojo',
          file: 'Kanojo',   
        },
        {
          name: 'Hộp Nhạc',
          file: 'Hop_Nhac',
          repeat: true
        },
      ]
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
@import '@/assets/style/page/sound.sass'
</style>
