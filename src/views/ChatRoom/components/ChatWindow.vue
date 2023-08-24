<script setup>
import { ref, onUpdated, onMounted, toRefs } from 'vue'
import { useUserStore } from "@/stores/userStore"
import { useScroll, onClickOutside } from '@vueuse/core'
import EmojiCom from './EmojiItem.vue'
import PersonCard from './PersonCard.vue'

const props = defineProps({
  personInfo: {
    type: Object,
    default: () => {
    }
  }
})

// 输入栏输入
const input = ref('')

// 获得当前用户数据
const userStore = useUserStore()

/* 聊天窗口初始向下滚动问题 */
const chatWindow = ref(null)
const { y } = useScroll(chatWindow, { behavior: 'smooth'})

const scrollDown = () => {
  y.value = chatWindow.value.scrollHeight - chatWindow.value.offsetHeight + 100
}

/* 显示与否相关事项 */
const emojiBox = ref(null)
const emojiBoxShow = ref(false)
const emojiClick = () => {
  emojiBoxShow.value = !emojiBoxShow.value
}

onClickOutside(emojiBox, () => {
  emojiBoxShow.value = false
})

/* 发送消息相关事项 */
// 消息打包
const { personInfo } = toRefs(props)
const wrapMsg = ( msg, img_url='', file_url='', file_type='') => {
  let myMsg = {}
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  myMsg.msg = msg
  myMsg.time = `${hour}:${minute}`
  myMsg.img_url = img_url
  myMsg.file_url = file_url
  myMsg.file_type = file_type
  myMsg.is_self = true
  return myMsg
}

// 发送 emoji
const emojiSend = (item) => {
  const msg = wrapMsg('', item)
  personInfo.value.history.push(msg)
}
// 发送文字
const msgSend = () => {
  if (input.value) {
    const msg = wrapMsg(input.value)
    personInfo.value.history.push(msg)
  }
  input.value = ''
}
// 发送图片
const imgSend = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = (e) => {
      emojiSend(e.target.result)
    }
  }
}
// 发送文件
let fileType = ''
const fileLogo = {
  'text/css': 'txt.png',
  'text/plain': 'txt.png',
  'application/pdf': 'pdf.png'
}
const fileSend = (event) => {
  const file = event.target.files[0]

  if (file) {
    if (file.type in fileLogo) {
      fileType = fileLogo[file.type]
    } else {
      fileType = 'unknownfile.png'
    }

    // 获取文件路径
    const url = window.URL.createObjectURL(file)

    // 在聊天界面中显示
    const msg = wrapMsg('', '', url, fileType)
    personInfo.value.history.push(msg)
  }

  // let formData = new FormData()
  // formData.append('test', '1111')
  // formData.append('file', file)
  //
  // console.log(formData.get('file'))
}

// 文件预览
const openFile = (url) => {
  window.open(url, '_blank', 'fullscreen=1')
}


onUpdated(() => {
  scrollDown()
})

onMounted(() => {
  scrollDown()
})
</script>


<template>
  <div class="chat-window" >
    <!--  聊天窗口顶部  -->
    <div class="window-top">
      <!--  好友介绍  -->
      <PersonCard :personInfo="personInfo"/>

      <!--  一些其他功能  -->
      <div class="other-func">
        <span class="iconfont icon-shipin"></span>
        <span class="iconfont icon-telephone"></span>

        <label for="docFile">
          <i class="iconfont icon-wenjian"></i>
        </label>

        <label for="imgFile">
          <i class="iconfont icon-tupian"></i>
        </label>

        <input type="file" id="imgFile"
               accept="image/*"
               @change="imgSend"/>

        <input type="file" id="docFile"
               accept="application/*, text/*"
               @change="fileSend">
      </div>

    </div>

    <!--  聊天窗口主体  -->
    <div class="window-main">
      <!--  聊天内容  -->
      <div class="content-wrapper" ref="chatWindow">
        <div class="msg-wrapper" v-for="(item, index) in personInfo.history" :key="index" :class="item.is_self? 'is-self':''">
        <!--  根据不同消息渲染不同元素  -->
          <div class="text-wrapper" v-if="item.msg">
            <span> {{ item.msg }}</span>
          </div>

          <div v-if="item.img_url || item.file_url"
               class="img-wrapper"
               :class="item.file_url? 'file-wrapper':''">
            <img v-if="item.img_url" :src="item.img_url" alt=""/>
            <img v-if="item.file_url"
                 :src="`/src/assets/images/fileImg/${item.file_type}`"
                 @click="openFile(item.file_url)"
                 alt=""/>
          </div>

          <div class="msg-detail" v-if="item.is_self? person=userStore.userInfo:person=personInfo">
            <img :src="person.headImg" alt=""/>
            <span>{{ person.name }}</span>
            <span>{{ person.detail }}</span>
          </div>

        </div>
      </div>

      <!--  聊天内容发送  -->
      <div class="content-input">
        <div class="content-emoji cube" @click="emojiClick" ref="emojiBox">
          <img src="src/assets/images/emoji/smiling-face.png" alt=""/>
          <!-- Emoji 选择框 -->
          <EmojiCom v-if="emojiBoxShow" @click-emoji="emojiSend"/>
        </div>

        <div class="content-inputbox" @keyup.enter="msgSend">
          <el-input v-model="input" placeholder="Please input"/>
        </div>

        <div class="content-send cube" @click="msgSend">
          <img src="src/assets/images/emoji/rocket.png" alt=""/>
        </div>

      </div>
    </div>

  </div>
</template>


<style lang="scss">
.chat-window {
  height: 100%;
  overflow: hidden;

  user-select: none;
  -webkit-user-drag:none;

  .window-top {
    display: flex;
    justify-content: space-between;

    .person-card {
      background-color: rgb(39, 42, 55);

      &:hover {
        box-shadow: none;
      }
    }

    .other-func {
      display: flex;
      align-items: flex-end;

      label {
        margin: 0 0 25px 40px;
        cursor: pointer;
      }
      span {
        margin: 0 0 25px 40px;
      }

      input {
        display: none;
      }
    }
  }

  .window-main {
    height: 85%;
    position: relative;
    background-color: rgb(50, 54, 68);
    border-radius: 20px;
    margin: 40px 0 0 20px;

    .content-wrapper {
      height: 90%;
      box-sizing: border-box;
      padding: 10px 40px 0 40px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        // 隐藏式滚动
        width: 0;
        height: 0;
        display: none;
      }

      .msg-wrapper {
        margin-bottom: 30px;
        .text-wrapper {
          display: flex;
          span {
            max-width: 90%;
            padding: 15px;
            border-radius: 20px 20px 20px 5px;
            background-color: rgb(56, 60, 75);
            color: #fff;
            word-break: break-all;
            &:hover {
              background-color: rgb(39, 42, 55);
            }
          }
        }

        .img-wrapper {
          display: flex;
          img {
            height: 150px;
          }
        }

        .file-wrapper {
          cursor: pointer;
          img {
            height: 100px;
          }
        }

        .msg-detail {
          display: flex;
          align-items: center;
          margin: 10px 0;
          color: #fff;
          font-size: 14px;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
          }

          span:last-child {
            color: rgb(101, 104, 115);
            margin-left: 10px;
          }
        }
      }
    }

    .content-input {
      width: 100%;
      height: 10%;
      box-sizing: border-box;
      padding: 0 50px;

      display: flex;
      align-items: flex-start;
      justify-content: center;

      img {
        width: 30px;
        height: 30px;
      }

      .content-inputbox{
        flex: 1;
        height: 45px;
        background-color: rgb(66, 70, 86);
        border-radius: 15px;
        border: 2px solid rgb(34, 135, 225);
        padding: 10px;
        box-sizing: border-box;
        transition: .2s;
        margin: 0 20px;
        display: flex;
        align-items: center;

        .el-input {

          .el-input__wrapper {
            box-shadow: none; //!!!!!!
            padding: 0;

          }

          input {
            color: #fff;
            background-color: rgb(66, 70, 86);
          }
          span {
            background-color: rgb(66, 70, 86)
          }
        }

      }

      .cube {
        width: 50px;
        height: 50px;
        background-color: rgb(66, 70, 86);
        border-radius: 15px;
        border: 1px solid rgb(80, 85, 103);
        position: relative;
        cursor: pointer;
        display: flex;

        justify-content: center;
        align-items: center;
      }

      .content-emoji {
        transition: .3s;
        &:hover {
          background-color: rgb(46, 49, 61);
          border: 1px solid rgb(71, 73, 82);
        }
      }

      .content-send {
        background-color: rgb(29, 144, 245);
        border: 0;
        transition: 0.3s;
        box-shadow: 0 0 5px 0 rgba(0, 136, 255);
        &:hover {
          box-shadow: 0 0 10px 0 rgba(0, 136, 255);
        }
      }
    }

  }
}

.is-self {
  .text-wrapper {
    justify-content: flex-end;

    span {
      border-radius: 20px 20px 5px 20px !important;
      background-color: rgb(29, 144, 245) !important;

      &:hover {
        background-color: rgb(26, 129, 219) !important;
      }
    }

  }

  .img-wrapper {
    justify-content: flex-end;
  }

  .msg-detail {
    flex-direction: row-reverse;

    img {
      margin: 0 0 0 10px !important;
    }
    span {
      margin: 0 0 0 10px;
    }
  }
}

img {
  -webkit-user-drag:none;
}


</style>