<script setup lang="ts">
import Message from '../index'
const openMsg = () => {
  Message({ text: 'hello word' })
}

const openMsg5s = () => {
  Message({ text: 'hello word', timeout: 5000 })
}
</script>

<template>
  <div class="demo1">
    <div class="block">
      <yg-button @click="openMsg">消息提示</yg-button>
      <yg-button @click="openMsg5s" type="primary">5s消息提示</yg-button>
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
