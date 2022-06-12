<!--
 * @Author: yhy
 * @Date: 2022-06-12 17:20:05
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 17:22:11
 * @Description: 
-->
<script setup>
import { toRefs } from "vue";
const props = defineProps({
  aaa: {
    type: String,
    default: "",
  },
});

let { aaa } = toRefs(props);
console.log(aaa.value);
</script>

<template>
  <div>hahah</div>
  <div>{{ aaa }}</div>
</template>

<style lang="less" scoped></style>
