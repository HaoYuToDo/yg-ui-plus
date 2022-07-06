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
    timeout: number;
  }>(),
  {
    type: "default",
    customColor: '',
    customBackgroundColor: '',
    timeout: 1500
  }
);
let { type, customColor, customBackgroundColor, timeout } = toRefs(props);

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
  let difTime = timeout.value - 200
  let timer: any = setTimeout(() => {
    isShow.value = false
    clearTimeout(timer)
    timer = null
  }, difTime)

})
</script>

<template>
  <transition name="slide-fade">
    <div class="yg-message" v-show="isShow" :style="isStyle[type]">
      <slot></slot>
    </div>
  </transition>
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

.yg-meassage-container {
  .slide-fade-enter-active {
    transition: all 0.3s ease-in;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translate3d(-50%, -75px, 0);
  }
}
</style>