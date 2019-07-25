import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/index'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

