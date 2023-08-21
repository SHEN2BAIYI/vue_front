<script setup>

const emojiList = [
      "/src/assets/images/emoji/slightly-smiling-face.png",
      "/src/assets/images/emoji/smiling-face.png",
      "/src/assets/images/emoji/smiling-face-with-heart-eyes.png",
      "/src/assets/images/emoji/smiling-face-with-sunglasses.png",
      "/src/assets/images/emoji/thinking-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",
      "/src/assets/images/emoji/tired-face.png",


  ]

const emit = defineEmits(['click-emoji'])
const sendEmoji = (item) => {
  emit('click-emoji', item)
}

</script>


<template>
  <div class="emoji-content">
    <div class="emoji-wrapper">
      <ul class="emoji-list">
        <li class="emoji-item" v-for="(item, index) in emojiList"
            :key="index" @click="sendEmoji(item)">
          <img :src="item" alt=""/>
        </li>
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.emoji-content {
  width: 400px;
  height: 200px;
  background-color: rgb(39, 42, 55);
  cursor: default;
  border-radius: 10px;
  transition: .3s;

  position: absolute;
  top: -220px;
  left: -10px;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 10px solid rgb(39, 42, 55);
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    position: absolute;
    bottom: -8px;
    left: 15px;

  }

  .emoji-wrapper {
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    box-sizing: border-box;
    padding: 10px;

    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
      background: rgb(95, 101, 122);
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
      border-radius: 10px;
      background: rgb(39, 42, 55);
    }

    .emoji-list {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;

      margin-left: 10px;

      .emoji-item {
        list-style: none;
        width: 50px;
        height: 50px;
        cursor: pointer;
        margin: 5px;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: rgb(50, 54, 68);
        }

        img {
          width: 35px;
          height: 35px;
        }
      }
    }



  }
}

</style>