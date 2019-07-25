import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/index'
import axios from 'axios'
import loading from '@/common/loading/index'
import BScroll from '@/common/BScroll'
import VueTouch from "vue-touch"

Vue.use(VueTouch,{name:'v-touch'})
Vue.component("BScroll",BScroll)
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

