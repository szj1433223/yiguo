import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import type from './type'
import eat from './eat'
import shopcar from './shopcar'
import mine from './mine'
import login from './mine/login'
import register from './mine/register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    home,
    type,
    eat,
    shopcar,
    mine,
    login,
    register,
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
