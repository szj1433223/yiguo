import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import type from './type'
import eat from './eat'
import shopcar from './shopcar'
import mine from './mine'

Vue.use(Router)

export default new Router({
  routes: [
    home,
    type,
    eat,
    shopcar,
    mine,

    {
      path:"**",
      redirect:"/home"
    },
    {
      path:"/#",
      redirect:"/home"
    }
  ]
})
