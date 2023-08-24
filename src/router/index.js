import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '@/views/ChatRoom/index.vue'
import ChatHome from '@/views/ChatRoom/components/ChatHome.vue'
import Login from '@/views/Login/index.vue'

import { useUserStore } from "@/stores/userStore"

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
          component: ChatHome,
          meta: {requiresAuth: true}
        },
        {
          path: '/Login',
          name: 'Login',
          component: Login,
        }
      ]
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {

  // 设置自动跳转，如果没有登录，则自动导航到 login 页面
  // 1. login 和 main 页面剔除
  if (to.path === '/login' || to.path === '/') {
    next()
    return
  }

  // 2. 获取 userStore 信息，如果没有则跳转 login
  const userStore = useUserStore()
  if (userStore.userInfo.uuid) {
    next()
  } else {
    next('/login')
  }

});

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  // 在组件解析之前执行的逻辑
  next(); // 必须调用 next() 来继续路由切换
});

// 全局后置钩子
router.afterEach((to, from) => {
  // 在路由切换之后执行的逻辑
});

export default router
