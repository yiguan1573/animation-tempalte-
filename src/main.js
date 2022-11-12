import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import animated from 'animate.css'
Vue.use(animated)
import App from './App.vue'
import router from './router'
import store from './store'

//全局css
import '@/assets/css/base.css'
//VueCoreVideoPlayer
import VueCoreVideoPlayer from 'vue-core-video-player'
Vue.use(VueCoreVideoPlayer,{
		lang: 'zh-CN'
})

//防抖
import preventReClick from './assets/js/preventReClick.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
