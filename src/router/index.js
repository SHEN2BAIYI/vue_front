import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '@/views/ChatRoom/index.vue'
import ChatHome from '@/views/ChatRoom/components/ChatHome.vue'
import Login from '@/views/Login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ChatRoom',
      component: ChatRoom,
      children: [
        {
          path: '/ChatHome',
          name: 'ChatHome',
          component: ChatHome
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
