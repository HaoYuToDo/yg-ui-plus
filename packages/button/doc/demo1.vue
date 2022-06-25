<script setup lang="ts"></script>

<template>
  <div class="demo1">
    <div class="block">
      <yg-button>default</yg-button>
      <yg-button type="primary">primary</yg-button>
      <yg-button type="success">success</yg-button>
      <yg-button type="warning">warning</yg-button>
      <yg-button type="primary">primary</yg-button>
      <yg-button type="danger">danger</yg-button>
      <yg-button type="info">info</yg-button>
    </div>
    <div class="block">
      <yg-button round>default</yg-button>
      <yg-button round type="primary">primary</yg-button>
      <yg-button round type="success">success</yg-button>
      <yg-button round type="warning">warning</yg-button>
      <yg-button round type="primary">primary</yg-button>
      <yg-button round type="danger">danger</yg-button>
      <yg-button round type="info">info</yg-button>
    </div>

    <div class="block">
      <yg-button disabled>default</yg-button>
      <yg-button disabled type="primary">primary</yg-button>
      <yg-button disabled type="success">success</yg-button>
      <yg-button disabled type="warning">warning</yg-button>
      <yg-button disabled type="primary">primary</yg-button>
      <yg-button disabled type="danger">danger</yg-button>
      <yg-button disabled type="info">info</yg-button>
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
