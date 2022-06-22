<!--
 * @Author: yhy
 * @Date: 2022-06-05 11:15:31
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 18:25:16
 * @Description: 
-->

<script lang="ts">
export default {
  name: "YgButton",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
let wrapClass = computed(() => {
  return ["yg-button-default"];
});
</script>

<template>
  <div :class="wrapClass">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<style lang="less" scoped>
.yg-button-default {
  button {
    background-color: @primary-color;
  }
}
</style>
