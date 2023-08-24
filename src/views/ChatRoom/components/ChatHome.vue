<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from "@/stores/userStore"
import ChatWindow from './ChatWindow.vue'
import PersonCard from './PersonCard.vue'

// 获取用户信息
const userStore = useUserStore()

// 激活卡片
const activePerson = ref({})
const activeCard = async (item) => {
  await userStore.getFriendChatList(item.uuid)
  activePerson.value = item
}

onMounted(async () => {
  await userStore.getFriendList()
})
</script>

<template>
  <div class="chat-home">
    <!--  聊天室左边部分  -->
    <div class="home-left">
      <!--  聊天室简介  -->
      <div class="home-intro">
        <h1 class="home-title">
          MOFUN 聊天室
        </h1>
      </div>

      <!--  聊天记录  -->
      <div class="friend-list">
        <div class="list-intro">
          聊天记录
        </div>

        <ul class="list-wrapper">
          <li v-for="item in userStore.friendList" :key="item.id"
              @click="activeCard(item)">
            <PersonCard :personInfo="item" :idCurrent="activePerson.id"/>
          </li>
        </ul>
      </div>

    </div>

    <!--  聊天室右边部分    -->
    <div class="home-right" v-if="activePerson.uuid">
      <ChatWindow :personInfo="activePerson"/>
    </div>

  </div>
</template>

<style lang="scss">
.chat-home {
  width: 100%;
  height: 100%;
  display: flex;


  position: relative;
  z-index: 1;

  .home-left {
    width: 250px;
    padding-left: 10px;
    user-select: none;
    -webkit-user-drag:none;

    .home-intro {
      .home-title {
        font-family: Arial, "TImes New Roman", Times, serif;
        color: #fff;
      }
    }

    .friend-list {
      margin-top: 100px;

      .list-intro {
        color: rgb(176, 178, 189);
      }

      .list-wrapper{
        height: 65%;
        margin-top: 20px;
        overflow: hidden;
        overflow-y: scroll;
        box-sizing: border-box;

        &::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: None;
        }

        li {
          list-style: none;
          margin: 20px 0;
          cursor: pointer;
        }
      }
    }

  }

  .home-right {
    flex: 1;
    margin: 0 20px;
  }
}



</style>