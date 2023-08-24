// 封装所有和用户请求相关的接口函数
import axios from "axios"

export const getUserInfoAPI = async ({ account, password}) => {
    return await axios.post('/api/userinfo/', {
        account: account,
        password: password,
    })
}

export const getFriendListAPI = async () => {
    return await axios.get(
        '/api/friend/'
    )
}

export const getFriendChatAPI = async (id) => {
    return await axios.get(
        '/api/chat/',{
            params: {
                id: id
            }
        }
    )
}

