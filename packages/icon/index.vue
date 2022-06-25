<!--
 * @Author: yhy
 * @Date: 2022-06-05 11:15:31
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 18:25:16
 * @Description: 
-->

<script lang="ts">
export default {
  name: "YgIcon",
};
</script>

<script setup lang="ts">
import { computed, toRefs, ref } from "vue";

const props = withDefaults(
  defineProps<{
    icon: string;
    size?: string | number;
  }>(),
  {
    icon: "",
    size: 30,
  }
);

let { icon, size } = toRefs(props);

const isClass = computed(() => {
  return ["yg-icon", "iconfont", icon.value];
});

const styles = computed(() => {
  return { fontSize: `${size.value}px` };
});
</script>

<template>
  <i :class="isClass" :style="styles"></i>
</template>

<style lang="less" scoped></style>
