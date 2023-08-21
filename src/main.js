import '@/assets/font/iconfont.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { componentPlugin } from "@/components"
import { MotionPlugin } from "@vueuse/motion"

import piniaPlguginPersistedstate from 'pinia-plugin-persistedstate'

import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(componentPlugin)
app.use(MotionPlugin)

const pinia = createPinia()
pinia.use(piniaPlguginPersistedstate)
app.use(pinia)


app.mount('#app')
