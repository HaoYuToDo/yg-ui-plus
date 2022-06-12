<!--
 * @Author: yhy
 * @Date: 2022-06-12 15:26:19
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:18:04
 * @Description: 
-->
<script setup>
import { ref } from "vue";
let msg = ref("默认值");
</script>

<template>
  <div>
    <yg-input v-model="msg"></yg-input>
  </div>
</template>

<style lang="less" scoped></style>
