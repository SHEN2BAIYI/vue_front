import Mock from "mockjs"

let friendList = Mock.mock([
    {
        name: "大毛",
        detail: "我是大毛",
        id: '1002',
        headImg: '/src/assets/images/head_portrait1.jpg'
    },
    {
        name: "二毛",
        detail: "我是二毛",
        id: '1003',
        headImg: '/src/assets/images/head_portrait2.jpg'
    },
    {
        name: "三毛",
        detail: "我是三毛",
        id: '1004',
        headImg: '/src/assets/images/head_portrait3.jpg'
    },
])

let chatMsg1002 = Mock.mock(
    [
        {
            headImg: '/src/assets/images/head_portrait.jpg',
            name: "大毛是小白",
            time: "09：12 AM",
            msg: " 在吗？",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1001", //uid
        },

        {
            headImg: '/src/assets/images/head_portrait1.jpg',
            name: "大毛",
            time: "09：12 AM",
            msg: " 怎么了？",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
        {
            headImg: '/src/assets/images/head_portrait.jpg',
            name: "大毛是小白",
            time: "09：12 AM",
            msg: "问你个问题",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: '/src/assets/images/head_portrait1.jpg',
            name: "大毛",
            time: "09：12 AM",
            msg: "别问",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
        {
            headImg: '/src/assets/images/head_portrait.jpg',
            name: "大毛是小白",
            time: "09：12 AM",
            msg: "/src/assets/images/emoji/slightly-smiling-face.png",
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1001",
        },
    ]
)
let chatMsg1003 = Mock.mock(
    [
        {
            headImg: '/src/assets/images/head_portrait.jpg',
            name: "大毛是小白",
            time: "09：12 AM",
            msg: "在干嘛呢",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1001", //uid
        },
        {
            headImg: '/src/assets/images/head_portrait.jpg',
            name: "大毛是小白",
            time: "09：12 AM",
            msg: "/src/assets/images/emoji/slightly-smiling-face.png",
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1001",
        },
        {
            headImg: '/src/assets/images/head_portrait2.jpg',
            name: "二毛",
            time: "09：12 AM",
            msg: "吃饭",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
        {
            headImg: '/src/assets/images/head_portrait.jpg',
            name: "大毛是小白",
            time: "09：12 AM",
            msg: "吃的什么饭",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: '/src/assets/images/head_portrait2.jpg',
            name: "二毛",
            time: "09：12 AM",
            msg: "蛋炒饭",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
        {
            headImg: '/src/assets/images/head_portrait.jpg',
            name: "大毛是小白",
            time: "09：12 AM",
            msg: "加蛋了吗？",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: '/src/assets/images/head_portrait2.jpg',
            name: "二毛",
            time: "09：12 AM",
            msg: "你说呢",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
        {
            headImg: '/src/assets/images/head_portrait2.jpg',
            name: "二毛",
            time: "09：12 AM",
            msg: "/src/assets/images/emoji/slightly-smiling-face.png",
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1002", //uid
        },
    ]
)
let chatMsg1004 = Mock.mock(
    [
        {
            headImg: "/src/assets/images/head_portrait.jpg",
            name: "大毛是小白",
            time: "09：12 AM",
            msg: " sadasdawdas sadsad sad sad as despite ofhaving so much to do",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1001", //uid
        },
        {
            headImg: "/src/assets/images/head_portrait.jpg",
            name: "大毛是小白",
            time: "09：12 AM",
            msg: "/src/assets/images/emoji/slightly-smiling-face.png",
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1001",
        },
        {
            headImg: '/src/assets/images/head_portrait3.jpg',
            name: "三毛",
            time: "09：12 AM",
            msg: " 21312大萨达萨达",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
        {
            headImg: '/src/assets/images/head_portrait.jpg',
            name: "大毛是小白",
            time: "09：12 AM",
            msg: "111212",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: '/src/assets/images/head_portrait3.jpg',
            name: "三毛",
            time: "09：12 AM",
            msg: "大萨达萨达所大大萨达",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
    ]
)



export default [
    {
        url: "/friendList",
        method: "get",
        response: () => {
            return friendList
        },
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
