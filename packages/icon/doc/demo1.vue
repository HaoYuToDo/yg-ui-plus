<script setup lang="ts"></script>

<template>
  <div class="demo1">
    <div class="block">
      <yg-icon icon="icon-sync"></yg-icon>
      <yg-icon icon="icon-user"></yg-icon>
      <yg-icon icon="icon-like"></yg-icon>
      <yg-icon icon="icon-download"></yg-icon>
      <yg-icon icon="icon-search"></yg-icon>
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
