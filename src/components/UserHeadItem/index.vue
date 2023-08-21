<script setup>
defineProps({
  imgUrl: {
    type: String,
    default: ''
  }
})

</script>


<template>
  <div class="head-pic">
    <img :src="imgUrl" alt="" />
  </div>
</template>


<style lang="scss">
.head-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    z-index: 1;
    display: block;
    border-radius: 50%;
    background-color: rgb(144, 225, 80);
    position: absolute;
    right: 0;
    top: 0;
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-sizing: border-box;
  }
}

</style>