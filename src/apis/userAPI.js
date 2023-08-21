// 封装所有和用户请求相关的接口函数
import httpInstance from "@/utils/http"


export const getAuthInfoAPI = ({account, password}) => {
    return httpInstance({
        url: '/api/token/',
        method: 'POST',
        data: {
            'username': account,
            'password' :password
        }
    })
}

export const getUserInfoAPI = ( token ) => {
    console.log(token)
    return httpInstance({
        url: '/api/info/',
        method: 'GET',
    })
}

export const testAPI = () => {
    return httpInstance({
        url: 'api/test/',
        method: 'GET',
    })
}
