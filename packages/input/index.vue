<!--
 * @Author: yhy
 * @Date: 2022-06-05 11:15:31
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 12:01:13
 * @Description: 
-->

<script lang="ts">
export default {
  name: "YgInput",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
let props = defineProps<{
  modelValue?: string | number;
}>();

let emit = defineEmits(["update:modelValue"]);

let handleInput = (event: Event) => {
  let value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};

let wrapClass = computed(() => {
  return ["yg-input-default"];
});
</script>

<template>
  <div :class="wrapClass">
    <input type="text" :value="modelValue" @input="handleInput" />
  </div>
</template>

<style lang="less" scoped>
.yg-input-default {
  input {
    width: 300px;
    height: 40px;
  }
}
</style>
