<script setup lang="ts"></script>

<template>
  <div class="demo1">
    <yg-button round>default</yg-button>
    <yg-button type="primary">primary</yg-button>
    <yg-button type="success">success</yg-button>
    <yg-button type="warning">warning</yg-button>
    <yg-button type="primary">primary</yg-button>
    <yg-button type="danger">danger</yg-button>
    <yg-button type="info">info</yg-button>
  </div>
</template>

<style lang="less" scoped>
.demo1 {
  display: flex;
  gap: 12px;
}
</style>
