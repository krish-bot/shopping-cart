import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home'
import Cart from '@/Views/Cart'
import Profile from '@/Views/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
