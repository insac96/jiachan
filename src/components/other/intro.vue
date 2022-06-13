<template>
    <UiDialog v-model="isShow">
        <template #title>Thân Gửi</template>

        <template #body>
            <div style="
                padding: 18px 12px; 
                text-align: center;
            ">
                Sound vẫn sẽ được cập nhật thường xuyên. Chúc Jia live thật tốt và kiếm thật nhiều tiền nhé !!!
            </div>
        </template>

        <template #action>
            <UiButton @click="onCancel">Đóng</UiButton>
        </template>
    </UiDialog>
</template>

<script>
export default {
  data() {
    return {
        isShow: false
    }
  },

  mounted () {
    const introStorage = localStorage.getItem('intro')

    if(!introStorage){
        this.onShow()
        localStorage.setItem('intro', '1')
    }
  },

  methods: {
    onShow () {
        this.isShow = true
    },
    onCancel () {
        this.isShow = false
    }
  },
}
</script>

<style lang="sass">
</style>