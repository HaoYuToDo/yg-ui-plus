<!--
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 12:20:39
 * @Description: 
-->
<script setup>
import { ref } from "vue";
let msg = ref("默认");
</script>

<template>
  <yg-input v-model="msg"></yg-input>
  <div>-----------</div>
  <yg-button>{{ msg }}</yg-button>
</template>

<style></style>
