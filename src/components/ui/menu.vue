<template>
  <div class="menu">
    <div 
      :class="{
        'menu-item': true,
        'menu-item--disabled': !!reload
      }" 
      @click="Update()"
    >
      <i class='bx bx-refresh'></i>
      <span>Reload</span>
    </div>

    <div 
      :class="{
        'menu-item': true,
        'menu-item--active': $route.name == item.name,
        'menu-item--disabled': !!item.disabled
      }" 
      v-for="(item, index) in list" 
      :key="index" 
      @click="$router.push(item.link)"
    >
      <i :class='item.icon'></i>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reload: null,

      list: [
        {
          icon: 'bx bxs-music',
          name: 'Sound',
          link: '/'
        },
        {
          icon: 'bx bx-book',
          name: 'Jia',
          link: '/jia'
        }
      ]
    }
  },

  methods: {
    Update () {
      this.reload = true

      if(this.$route.name !== 'Sound'){
        this.$router.push('/')
      }

      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  },
}
</script>

<style lang="sass">
@import '@/assets/style/ui/menu.sass'
</style>