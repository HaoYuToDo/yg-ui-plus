<script setup lang="ts">
import Message from '../index'
const openMsg1 = () => {
  Message({ text: '消息提示' })
}

const openMsg2 = () => {
  Message({ text: '5s消息提示', timeout: 5000, type: 'primary' })
}

const openMsg3 = () => {
  Message({ text: '自定义颜色消息提示', type: 'custom', customColor: 'rgb(95, 13, 202)', customBackgroundColor: 'rgba(0, 255, 255, 0.87)' })
}
</script>

<template>
  <div class="demo1">
    <div class="block">
      <yg-button @click="openMsg1">消息提示</yg-button>
      <yg-button @click="openMsg2" type="primary">5s消息提示</yg-button>
      <yg-button @click="openMsg3" type="warning">自定义颜色消息提示
      </yg-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.demo1 {
  display: flex;
  flex-direction: column;
  gap: 12px;

  .block {
    display: flex;
    gap: 12px;
  }
}
</style>
