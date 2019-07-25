import Vue from 'vue'
import Vuex from 'vuex'
import type from './type/index'
import shopcar from './shopcar/index'
import product from './type/productList/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      type,
      shopcar,
      product
    }
})
