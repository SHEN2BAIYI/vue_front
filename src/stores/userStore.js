// 管理用户数据
import { defineStore } from "pinia"
import { ref } from "vue"
import { getUserInfoAPI, getFriendListAPI, getFriendChatAPI } from "@/apis/userAPI"

export const useUserStore = defineStore('user', () => {
    // 1.定义用户信息、好友列表
    const userInfo = ref({})
    const friendList = ref([])

    // 2.获取用户信息
    const getUserInfo = async ({ account, password }) => {
        const res = await getUserInfoAPI({ account, password})
        userInfo.value = res.data
    }

    // 3.获取好友列表
    const getFriendList = async () => {
        const res = await getFriendListAPI()
        friendList.value = res.data
    }

    // 4.获取好友聊天记录
    const getFriendChatList = async (id) => {
        const res = await getFriendChatAPI(id)
        for (let [_, friend] of friendList.value.entries()){
            if (friend.uuid === id){
                friend.history = res.data
                break
            }
        }
    }

    return {
        userInfo,
        friendList,

        getUserInfo,
        getFriendList,
        getFriendChatList,
    }
},{
    persist: {
        enabled: true,
        strategies: [{
            storage: sessionStorage
        }]
    }
})




