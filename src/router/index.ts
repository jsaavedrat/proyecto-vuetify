import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EjemplosView from '@/views/EjemplosView.vue'
import ListaView from '@/views/ListaView.vue'
import Semana4 from '@/views/Semana4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ejemplo',
      name: 'ejemplo',
      component: EjemplosView
    },
    {
      path: '/lista',
      name: 'lista',
      component: ListaView
    },
    {
      path: '/semana4',
      name: 'semana4',
      component: Semana4
    },
  ]
})

export default router
