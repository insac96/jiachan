import Vue from 'vue'
import VueRouter from 'vue-router'
import Sound from '../views/Sound.vue'
import Jia from '../views/Jia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sound',
    component: Sound
  },
  {
    path: '/jia',
    name: 'Jia',
    component: Jia
  },
  //{
  //  path: '/paint',
  //  name: 'Paint',
  //  component: () => import(/* webpackChunkName: "about" */ '../views/Paint.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
