<!-- 消息弹窗 -->
<script lang="ts">
export default {
  name: "YgMessage",
};
</script>
<script setup lang="ts">
import { ref, onMounted, reactive, toRefs } from 'vue'
const props = withDefaults(
  defineProps<{
    type?: string; //类型
    customColor?: string;
    customBackgroundColor?: string;
  }>(),
  {
    type: "default",
    customColor: '',
    customBackgroundColor: '',
  }
);
let { type, customColor, customBackgroundColor } = toRefs(props);

let isShow = ref(false)

let isStyle = reactive({
  default: {},
  primary: {
    color: '#FFFFFF',
    backgroundColor: '#409eff',
  },
  custom: {
    color: customColor.value,
    backgroundColor: customBackgroundColor.value,
  }
} as any)

onMounted(() => {
  isShow.value = true
})
</script>

<template>
  <div class="yg-message" v-show="isShow" :style="isStyle[type]">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.yg-message {
  position: fixed;
  padding: 5px 25px;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  height: 45px;
  border: 1px solid @border-color;
  background-color: #fff;
  color: @text-color;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>