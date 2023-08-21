<script setup>
import { ref } from 'vue'
import { ElMessage } from "element-plus"
import router from '@/router'

const menuList = ['icon-xinxi', 'icon-shipin', 'icon-telephone', 'icon-shandian', 'icon-shezhi']

// 响应 Nav 点击事件，选择激活 Nav
const activeIndex = ref(-1)
const chooseNav = (index) => {
  activeIndex.value = index

  switch (index) {
    case 0:
      router.push({
        name: 'ChatHome'
      });
      break;

    default:
      ElMessage({type: 'error', message: '该功能还没有开发'});
      break;
  }

}

</script>


<template>
  <div class="chat-nav">
    <!--  侧边导航栏  -->
    <div class="nav-menu-wrapper">
      <ul class="menu-list">
        <li v-for="(item, index) in menuList" :key="index"
            @click="chooseNav(index)" :class="activeIndex===index? 'active-nav':''">
          <div class="block"></div>
          <i class="iconfont" :class="item"></i>
        </li>
      </ul>
    </div>

    <!--  用户头像  -->
    <div class="user-head">
      <UserHead imgUrl="/src/assets/images/head_portrait.jpg"/>
    </div>
  </div>
</template>


<style lang="scss">
.chat-nav {
  width: 100%;
  height: 90vh;
  position: relative;

  .nav-menu-wrapper {
    position: absolute;
    top: 40%;
    transform: translate(0, -50%);

    .menu-list {
      li {
        list-style: none;
        margin: 40px 0 0 40px;
        cursor: pointer;
        position: relative;

        .block {
          background-color: rgb(29, 144, 245);
          position: absolute;
          left: -40px;
          width: 6px;
          height: 25px;
          transition: .5s;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          opacity: 0;
        }

        &:hover {
          i {
            color: rgb(29, 144, 245);
          }

          .block {
            opacity: 1;
          }
        }
      }
    }
  }

  .user-head {
    position: absolute;
    bottom: 10%;
    margin-left: 25px;
    cursor: pointer;
  }
}

.active-nav {
  .block {
    opacity: 1 !important;
  }

  i {
    color: rgb(29, 144, 245);
  }

}

</style>