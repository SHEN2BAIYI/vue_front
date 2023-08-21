// 管理用户数据

import { defineStore } from "pinia"
import { ref } from "vue"
import { getAuthInfoAPI, getUserInfoAPI } from "@/apis/userAPI"

export const useUserStore = defineStore('user', () => {
    // 1.定义用户授权和用户信息
    const userInfo = ref({})
    const userAuth = ref({})

    // 2.定义获取授权信息
    const getAuthInfo = async ( { account, password } ) => {
        const res = await getAuthInfoAPI({ account, password })
        userAuth.value = res.data
    }

    // 3.定义获取用户信息
    const getUserInfo = async ( token ) => {
        const res = await getUserInfoAPI( token )
        userInfo.value = res.data
    }


    return {
        userInfo,
        userAuth,
        getUserInfo,
        getAuthInfo,
    }
},{
    persist: true
})




