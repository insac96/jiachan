<template>
  <div class="Jia">
    <!--Password-->
    <div class="password" v-if="!success">
      <div class="title">Bảo Mật</div>
      <div class="subtitle">Dữ liệu này bao gồm các thông tin về Jia được tổng hợp lại trong quá trình hợp tác giữa 2 bên nên được bảo mật tuyệt đối.</div>

      <div class="body">
        <input v-model="password" type="password" :placeholder="placeholder">
        <UiButton class="mt" @click="Login">Xác Nhận</UiButton>
      </div>
    </div>

    <!--Menu Select-->
    <UiSelect 
      v-model="menuSelect"
      v-if="!!success"
      color="29,161,242"
    >
      <UiSelectItem  
        v-for="list in menuSelects" 
        :key="list" 
        :tab="list"
      >
        {{ list }}
      </UiSelectItem>
    </UiSelect>

    <!--Content Photo-->
    <JiaPhoto v-show="!!success && menuSelect === 'Photo'"></JiaPhoto>

    <!--Content Video
    <JiaVideo v-show="!!success && menuSelect === 'Video'"></JiaVideo>
    -->

    <!--Content About-->
    <JiaAbout v-show="!!success && menuSelect === 'About'"></JiaAbout>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuSelect: 'Photo',
      
      menuSelects: [
        'Photo', 'About'
      ],

      lock: 'myjia',

      password: '',

      placeholder: 'Nhập mật khẩu',

      success: false
    }
  },

  methods: {
    Login () {
      if(this.password !== this.lock) {
        this.placeholder = 'Sai mật khẩu, vui lòng thử lại'
        this.password = ''
        return
      }

      this.placeholder = 'Nhập mật khẩu'
      this.password = ''
      this.success = true
    },
  },
}
</script>

<style lang="sass">
@import '@/assets/style/page/jia.sass'
</style>
