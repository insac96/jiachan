<template>
  <UiDialog v-model="isShow" class="pwa">
    <template #icon>
      <img src="/img/icons/android-chrome-512x512.png" width="70" height="70" class="pwa__icon mt">
    </template>

    <template #title>
      <div class="pwa__title">Thông Báo</div>
    </template>

    <template #body>
      <div class="pwa__body my" v-if="!installed">
        Cài đặt ứng dụng <b>Jiachan</b> về máy giúp không cần truy cập bằng trang Web để sử dụng.
      </div>

      <div class="pwa__body my" v-else>
        Ứng dụng <b>Jiachan</b> sẽ được cài đặt trong vài giây. Thoát trang web và truy cập bằng ứng dụng bên ngoài màn hình chính điện thoại.
      </div>
    </template>

    <template #action>
      <div class="pwa__action mb" v-if="!installed">
        <UiButton @click="onAccept">Cài Đặt Ngay</UiButton>
        <UiButton danger @click="onCancel">Không</UiButton>
      </div>

      <div class="pwa__action mb" v-if="!!installed">
        <UiButton @click="onCancel">Đã Hiểu</UiButton>
      </div>
    </template>
  </UiDialog>
</template>

<script>
export default {
  data() {
    return {
      installEvent: null,
      installed: false,
      isShow: false
    }
  },

  mounted () {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.isShow = true
    })

    window.addEventListener('appinstalled', () => {
      this.isShow = true
      this.installed = true
      this.installEvent = null
    })
  },

  methods: {
    onCancel () {
      this.isShow = false
    },

    onAccept () {
      if(!this.installEvent) return
      
      this.installEvent.prompt()
      this.installEvent.userChoice.then((choice) => {

        if (choice.outcome === 'accepted') {
          this.installEvent = null
          this.isShow = false
        } else {
          this.isShow = false
        }
      })
    }
  },
}
</script>

<style lang="sass">
.pwa
  &__icon
    border-radius: 15px

  &__title
    margin-top: 6px
    
  &__body
    text-align: center
    font-size: 1rem
    b
      color: rgb(29,161,242)

  &__action
    display: flex
    .btn
      margin: 0 3px
</style>