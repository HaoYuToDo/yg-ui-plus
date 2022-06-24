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
import { computed, toRefs } from "vue";
const props = withDefaults(
  defineProps<{
    type: string;
    round: boolean;
  }>(),
  {
    type: "",
    round: false,
  }
);
let { type, round } = toRefs(props);

const isClass = computed(() => {
  return [
    "yg-button",
    { [`yg-button-${type.value}`]: type.value },
    { "yg-button-round": round.value },
  ];
});
</script>

<template>
  <button :class="isClass">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
.yg-button {
  cursor: pointer;
  height: 32px;
  padding: 8px 15px;
  background-color: #fff;
  color: @text-color;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid @border-color;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
}
.yg-button-round {
  border-radius: 20px;
}
.yg-button-primary {
  color: white;
  background-color: @primary-color;
  border: 1px solid @primary-color;
}
.yg-button-success {
  color: white;
  background-color: @success-color;
  border: 1px solid @success-color;
}
.yg-button-warning {
  color: white;
  background-color: @warning-color;
  border: 1px solid @warning-color;
}
.yg-button-danger {
  color: white;
  background-color: @danger-color;
  border: 1px solid @danger-color;
}
.yg-button-info {
  color: white;
  background-color: @info-color;
  border: 1px solid @info-color;
}
</style>
