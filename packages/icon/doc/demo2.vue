<script setup lang="ts"></script>

<template>
  <div class="demo1">
    <div class="block">
      <yg-icon size="70" icon="icon-sync"></yg-icon>
      <yg-icon size="60" icon="icon-user"></yg-icon>
      <yg-icon size="50" icon="icon-like"></yg-icon>
      <yg-icon size="40" icon="icon-download"></yg-icon>
      <yg-icon size="30" icon="icon-search"></yg-icon>
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
    align-items: center;
    gap: 12px;
  }
}
</style>
