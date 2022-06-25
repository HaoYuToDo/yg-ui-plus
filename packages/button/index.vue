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
    type?: string; //类型
    round?: boolean; //是否圆角
    disabled?: boolean; //是否禁用
  }>(),
  {
    type: "default",
    round: false,
    disabled: false,
  }
);
let { type, round, disabled } = toRefs(props);

const isClass = computed(() => {
  return [
    "yg-button",
    { [`yg-button-${type.value}`]: type.value && !disabled.value },
    { [`yg-button-${type.value}-disabled`]: disabled.value },
    { "yg-button-round": round.value },
  ];
});
</script>

<template>
  <button :class="isClass" :disabled="disabled">
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

.yg-button-default {
  &:hover {
    opacity: 0.8;
  }
}

.yg-button-primary {
  color: white;
  background-color: @primary-color;
  border: 1px solid @primary-color;
  &:hover {
    opacity: 0.8;
  }
}
.yg-button-success {
  color: white;
  background-color: @success-color;
  border: 1px solid @success-color;
  &:hover {
    opacity: 0.8;
  }
}
.yg-button-warning {
  color: white;
  background-color: @warning-color;
  border: 1px solid @warning-color;
  &:hover {
    opacity: 0.8;
  }
}
.yg-button-danger {
  color: white;
  background-color: @danger-color;
  border: 1px solid @danger-color;
  &:hover {
    opacity: 0.8;
  }
}
.yg-button-info {
  color: white;
  background-color: @info-color;
  border: 1px solid @info-color;
  &:hover {
    opacity: 0.8;
  }
}

.yg-button-default-disabled {
  cursor: no-drop;
  opacity: 0.5;
}

.yg-button-primary-disabled {
  color: white;
  background-color: @primary-color;
  border: 1px solid @primary-color;
  cursor: no-drop;
  opacity: 0.5;
}
.yg-button-success-disabled {
  color: white;
  background-color: @success-color;
  border: 1px solid @success-color;
  cursor: no-drop;
  opacity: 0.5;
}
.yg-button-warning-disabled {
  color: white;
  background-color: @warning-color;
  border: 1px solid @warning-color;
  cursor: no-drop;
  opacity: 0.5;
}
.yg-button-danger-disabled {
  color: white;
  background-color: @danger-color;
  border: 1px solid @danger-color;
  cursor: no-drop;
  opacity: 0.5;
}
.yg-button-info-disabled {
  color: white;
  background-color: @info-color;
  border: 1px solid @info-color;
  cursor: no-drop;
  opacity: 0.5;
}
</style>
