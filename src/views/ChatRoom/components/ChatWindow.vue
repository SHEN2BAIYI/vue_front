<script setup>
import { ref } from 'vue'
import PersonCard from './PersonCard.vue'

defineProps({
  personInfo: {
    type: Object,
    default: () => {

    }
  }
})

const input = ref('')

// 自己设定假消息
let msg = [
  {
    time:'09:12 AM',
    msg:'',
    is_self: false,
    img_url: "/src/assets/images/emoji/slightly-smiling-face.png",
  },
  {
    time:'09:12 AM',
    msg:'我所的房间里萨的房间里的萨迦法了第三节立法科技萨的佛教？啊第三反恐惊魂卡第三弗兰克和科技啊第三法律和科技科技萨菲' +
        '的萨菲的萨房间里卡的司法廉洁卡斯的法律isyo whossdfhdsakjhfkjsadhfskjashdfksahdkfhak' +
        'kdashfkdsahfkahdsfkahdskfjahdskf',
    is_self: true,
    img_url: "",
  },
  {
    time:'09:12 AM',
    msg:'',
    is_self: true,
    img_url: "/src/assets/images/emoji/slightly-smiling-face.png",
  },
  {
    time:'09:12 AM',
    msg:'在吗?',
    is_self: false,
    img_url: "",
  },
  {
    time:'09:12 AM',
    msg:'',
    is_self: true,
    img_url: "/src/assets/images/emoji/slightly-smiling-face.png",
  },
  {
    time:'09:12 AM',
    msg:'',
    is_self: false,
    img_url: "/src/assets/images/emoji/slightly-smiling-face.png",
  },

]

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

        <input type="file" name="" id="imgFile" accept="image.*"/>
        <input type="file" name="" id="docFile" accept="application/*, text/*">
      </div>

    </div>

    <!--  聊天窗口主体  -->
    <div class="window-main">
      <!--  聊天内容  -->
      <div class="content-wrapper">
        <div class="msg-wrapper" v-for="(item, index) in msg" :key="index" :class="item.is_self? 'is-self':''">
        <!--  根据不同消息渲染不同元素  -->
          <div class="text-wrapper" v-if="item.msg">
            <span> {{ item.msg }}</span>
          </div>

          <div v-if="item.img_url" class="img-wrapper">
            <img :src="item.img_url" alt=""/>
          </div>

          <div class="msg-detail" >
            <img :src="personInfo.headImg" alt=""/>
            <span>{{ personInfo.name }}</span>
            <span>{{ personInfo.detail }}</span>
          </div>

        </div>
      </div>

      <!--  聊天内容发送  -->
      <div class="content-input">
        <div class="content-emoji cube">
          <img src="src/assets/images/emoji/smiling-face.png" alt=""/>
        </div>

        <div class="content-inputbox">
          <el-input v-model="input" placeholder="Please input"/>
        </div>

        <div class="content-send cube">
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
        margin-top: 30px;
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
            width: 100px;
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
      align-items: center;
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


</style>