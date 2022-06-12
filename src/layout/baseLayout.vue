<!--
 * @Author: yhy
 * @Date: 2022-06-12 16:38:31
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:45:28
 * @Description: 
-->
<script setup></script>

<template>
  <div class="baseLayout">
    <div class="base-header">
      <span>组件</span>
      <span>指南</span>
    </div>
    <div class="base-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.baseLayout {
  height: 100%;
  .base-header {
    height: 55px;
    display: flex;
    background-color: lightblue;
  }
  .base-content {
    height: calc(~"100% - 55px");
  }
}
</style>
