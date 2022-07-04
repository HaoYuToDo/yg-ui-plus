
<!-- 按钮 -->
<script lang="ts">
export default {
  name: "YgButton",
};
</script>

<script setup lang="ts">
import { computed, toRefs, useSlots } from "vue";
const props = withDefaults(
  defineProps<{
    type?: string; //类型
    round?: boolean; //是否圆角
    disabled?: boolean; //是否禁用
    leftIcon?: string; // 左侧图标
    rightIcon?: string //右侧图标
    loading?: boolean//是否加载
  }>(),
  {
    type: "default",
    round: false,
    disabled: false,
    leftIcon: '',
    rightIcon: '',
    loading: false
  }
);
let { type, round, disabled, leftIcon, rightIcon, loading } = toRefs(props);

let $slots = useSlots();

const isClass = computed(() => {
  return [
    "yg-button",
    { [`yg-button-${type.value}`]: type.value && !disabled.value },
    { [`yg-button-${type.value}-disabled`]: disabled.value },
    { "yg-button-round": round.value },
  ];
});

const isLeftIconClass = computed(() => {
  return ["iconfont", leftIcon.value,
    { 'yg-button-icon-size': leftIcon.value },
    { 'yg-button-icon-loading': loading.value && leftIcon.value === 'icon-sync' }];
});

const isRightIconClass = computed(() => {
  return ["iconfont", rightIcon.value,
    { 'yg-button-icon-size': leftIcon.value },
    { 'yg-button-icon-loading': loading.value && rightIcon.value === 'icon-sync' }];
});
</script>

<template>
  <button :class="isClass" :disabled="disabled">
    <i v-if="leftIcon" :class="isLeftIconClass"></i>
    <span :style="{
      'margin-left': $slots['default'] ? leftIcon ? '4px' : '0px' : '0px',
      'margin-right': $slots['default'] ? rightIcon ? '4px' : '0px' : '0px'
    }">
      <slot></slot>
    </span>
    <i v-if="rightIcon" :class="isRightIconClass"></i>
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

.yg-button-icon-size {
  font-size: 16px;
}

.yg-button-icon-loading {
  animation: icon-loading 1.5s linear infinite;
}

@keyframes icon-loading {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
