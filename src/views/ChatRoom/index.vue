<script setup>
import { ref } from 'vue'
import { useMotionProperties, useMotionTransitions, useElementTransform } from '@vueuse/motion'
import NavCom from './components/ChatNav.vue'

const logo = ref(null)
// const {motionProperties} = useMotionProperties(logo)
// const { push, stop } = useMotionTransitions()
//
// const test = () => {
//   motionProperties.left = 0
//   console.log(motionProperties.top)
//   push('x', 500, motionProperties, {type: 'spring', duration: 4000})
//
// }

// const { transform, stop } = useElementTransform(logo)


</script>


<template>
  <el-button @click="test"> 111 </el-button>
  <div id="chat-panel">
    <!-- 整体布局 -->
    <el-container class="chat-panel">
      <!--  侧边导航栏  -->
      <el-aside width="100px">
        <NavCom />
      </el-aside>

      <!--  主体部分  -->
      <el-main>
        <div class="hold" ref="logo">
          <img src="/src/assets/images/snapchat.png" alt=""/>
        </div>
        <RouterView />
      </el-main>
    </el-container>

  </div>
</template>


<style lang="scss">

.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 25px;
  vertical-align: middle;
  color: rgb(117, 120, 137);
  transition: .3s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
}

#chat-panel {
  width: 100vw;
  height: 100vh;
  background-color: rgb(151, 157, 167);
  position: relative;


  .chat-panel {
    width: 90%;
    height: 90%;
    background-color: rgb(39, 42, 55);
    border-radius: 15px;

    position: absolute;
    left: 50%;
    top: 50%;



    .el-main {
      position: relative;

      .hold {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
        z-index: 0;
      }
    }
  }
}

</style>