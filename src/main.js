import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import router from './router'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'mint-ui/lib/style.css'
// import 'mint-ui/lib/swipe/style.css'

import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false
fastClick.attach(document.body) //应用到整个页面
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
