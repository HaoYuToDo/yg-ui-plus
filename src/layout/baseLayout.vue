<!--
 * @Author: yhy
 * @Date: 2022-06-12 16:38:31
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 22:26:10
 * @Description: 
-->
<script setup lang="ts">
import BaseHeader from "./components/BaseHeader.vue";
</script>

<template>
  <div class="baseLayout">
    <BaseHeader></BaseHeader>
    <div class="base-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.baseLayout {
  height: 100%;

  .base-content {
    height: calc(~"100% - 55px");
  }
}
</style>
