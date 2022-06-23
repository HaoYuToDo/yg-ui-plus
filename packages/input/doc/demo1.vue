<script setup lang="ts">
import { ref } from "vue";
let msg = ref("默认值");
</script>

<template>
  <div>
    <yg-input v-model="msg"></yg-input>
  </div>
</template>

<style lang="less" scoped></style>
