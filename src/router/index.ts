import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../components/layout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/play-list/:slug',
    name: 'Playlist',
    component: Layout,
    children: [
      {
        path: '',
        component: AboutView
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
