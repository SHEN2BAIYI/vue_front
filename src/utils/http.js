// axios 基础封装
import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import router from "@/router"

import { useUserStore } from "@/stores/userStore"
import { ElMessage } from 'element-plus'

const httpInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userAuth.access
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// // axios响应式拦截器
// httpInstance.interceptors.response.use(res => res.data, e => {
//     const userStore = useUserStore()
//     // 统一错误提示
//     ElMessage({
//         type: 'warning',
//         message: e.response.data.message
//     })
//
//     // 401 错误
//     if (e.response.status === 401) {
//         // 1.清除数据
//         userStore.clearUserInfo()
//         // 2.跳转到 login 页面
//         router.push('/login')
//     }
//     return Promise.reject(e)
// })

export default httpInstance

