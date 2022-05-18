import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Components UI
import Dialog from './components/ui/dialog.vue'
import Menu from './components/ui/menu.vue'
import Button from './components/ui/button.vue'
import Select from './components/ui/select.vue'
import SelectItem from './components/ui/select_item.vue'

// Components Page Sound
import SoundList from './components/page-sound/list.vue'

// Components Page Sound
import JiaAbout from './components/page-jia/about.vue'
import JiaPhoto from './components/page-jia/photo.vue'
import JiaPhotoList from './components/page-jia/photo_list.vue'
//import JiaVideo from './components/page-jia/video.vue'
//import JiaVideoList from './components/page-jia/video_list.vue'

// Configs
Vue.config.productionTip = false

// Use Components UI
Vue.component('UiDialog', Dialog)
Vue.component('UiMenu', Menu)
Vue.component('UiButton', Button)
Vue.component('UiSelect', Select)
Vue.component('UiSelectItem', SelectItem)

// Use Components Sound Page
Vue.component('SoundList', SoundList)

// Use Components Jia Page
Vue.component('JiaAbout', JiaAbout)
Vue.component('JiaPhoto', JiaPhoto)
Vue.component('JiaPhotoList', JiaPhotoList)
//Vue.component('JiaVideo', JiaVideo)
//Vue.component('JiaVideoList', JiaVideoList)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
