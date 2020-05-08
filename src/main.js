import Vue from 'vue'
import App from './App.vue'
import router from './router'
import gyCom from 'gy-common'
import 'gy-common/lib/gy-common.css'
Vue.use(gyCom)
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
import './assets/css/common.less'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
