import Mock from "mockjs"

let userInfo = Mock.mock({
    name: '金足印象',
    detail: '按摩足疗一体化',
    uuid: '1001',
    headImg: '/src/assets/images/head_portrait.jpg'
})

let friendList = Mock.mock([
    {
        name: "大毛",
        detail: "我是大毛",
        uuid: '1002',
        headImg: '/src/assets/images/head_portrait1.jpg'
    },
    {
        name: "二毛",
        detail: "我是二毛",
        uuid: '1003',
        headImg: '/src/assets/images/head_portrait2.jpg'
    },
    {
        name: "三毛",
        detail: "我是三毛",
        uuid: '1004',
        headImg: '/src/assets/images/head_portrait3.jpg'
    },
])

let chatMsg1002 = Mock.mock(
    [
        {
            time: "09：12 AM",
            msg: " 在吗？",
            img_url: '',
            is_self: true,
        },
        {
            time: "09：12 AM",
            msg: " 怎么了？",
            img_url: '',
            is_self: false,
        },
        {

            time: "09：12 AM",
            msg: "问你个问题",
            img_url: '',
            is_self: true,
        },
        {
            time: "09：12 AM",
            msg: "别问",
            img_url: '',
            is_self: false,
        },
        {
            time: "09：12 AM",
            msg: "",
            img_url: '/src/assets/images/emoji/slightly-smiling-face.png',
            is_self: true,
        },
    ]
)
let chatMsg1003 = Mock.mock(
    [
        {
            time: "09：12 AM",
            msg: "在干嘛呢",
            img_url: '',
            is_self: true,
        },
        {

            time: "09：12 AM",
            msg: '',
            img_url: "/src/assets/images/emoji/slightly-smiling-face.png",
            is_self: true,
        },
        {
            time: "09：12 AM",
            msg: "吃饭",
            img_url: '',
            is_self: false,
        },
        {
            time: "09：12 AM",
            msg: "吃的什么饭",
            img_url: '',
            is_self: true,
        },
        {
            time: "09：12 AM",
            msg: "蛋炒饭",
            img_url: '',
            is_self: false,
        },
        {
            time: "09：12 AM",
            msg: "加蛋了吗？",
            img_url: '',
            is_self: true,
        },
        {
            time: "09：12 AM",
            msg: "你说呢",
            img_url: '',
            is_self: false,
        },
        {
            time: "09：12 AM",
            msg: "",
            img_url: '/src/assets/images/emoji/slightly-smiling-face.png',
            is_self: false,
        },
    ]
)
let chatMsg1004 = Mock.mock(
    [
        {
            time: "09：12 AM",
            msg: " ？？？",
            img_url: '',
            is_self: true,
        },
    ]
)

export default [
    {
        url: "/api/userInfo",
        method: "post",
        response: (req) => {
            if (req.body.account === 'admin' && req.body.password === '123456') {
                return userInfo
            }
        },
    },
    {
        url: "/api/friend",
        method: "get",
        response: () => {
            return friendList
        }

    },
    {
        url: "/api/chat",
        method: "get",
        response: (req) => {
            switch (req.query.id) {
                case "1002":
                    return chatMsg1002
                case "1003":
                    return chatMsg1003
                case "1004":
                    return chatMsg1004
                default:
                    return req
            }
        }
    },

    {
        url: "/chatList",
        method: "get",
        response: (req) => {
            const index = req.query.id
            switch (index) {
                case '1002':
                    return chatMsg1002
                case '1003':
                    return chatMsg1003
                case '1004':
                    return chatMsg1004
            }
        }
    }
]
