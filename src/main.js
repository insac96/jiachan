import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Components UI
import Dialog from './components/ui/dialog.vue'
import Button from './components/ui/button.vue'
import Select from './components/ui/select.vue'
import SelectItem from './components/ui/select_item.vue'

// Components Page Sound
import SoundList from './components/home/soundList.vue'

// Configs
Vue.config.productionTip = false
Vue.use(VueMeta)

// Use Components UI
Vue.component('UiDialog', Dialog)
Vue.component('UiButton', Button)
Vue.component('UiSelect', Select)
Vue.component('UiSelectItem', SelectItem)

// Use Components Sound Page
Vue.component('SoundList', SoundList)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
