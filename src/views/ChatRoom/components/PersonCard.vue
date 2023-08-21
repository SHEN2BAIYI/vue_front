<script setup>
defineProps({
  personInfo: {
    type: Object,
    default: () => {

    }
  },
  idCurrent: {
    type: String,
    default: ''
  }
})

</script>


<template>
  <div class="person-card" :class="idCurrent===personInfo.id? 'active-card':''">
    <UserHead :imgUrl="personInfo.headImg"/>
    <div class="intro">
      <span>{{ personInfo.name }}</span>
      <span>{{ personInfo.detail }}</span>
    </div>

  </div>
</template>


<style lang="scss">
.person-card {
  width: 240px;
  height: 80px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  border-radius: 10px;
  background-color: rgb(50, 54, 68);
  padding: 0 0 0 20px;
  box-sizing: border-box;

  .intro {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;

    span:first-child {
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 5px;
    }

    span:last-child {
      color: #5c6675;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
    }


  }

  &:hover {
    background-color: #1d90f5;
    transition: 0.5s;
    box-shadow: 0 0 10px 0 rgba(0, 136, 255);

    .intro {
        span:last-child {
          color: #fff;
        }
    }
  }
}

.active-card {
  background-color: #1d90f5;
  transition: 0.5s;
  box-shadow: 0 0 10px 0 rgba(0, 136, 255);

  .intro {
    span:last-child {
      color: #fff;
    }
  }
}

</style>