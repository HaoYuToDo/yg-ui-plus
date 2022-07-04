<!-- 消息弹窗 -->
<script lang="ts">
export default {
  name: "YgMessage",
};
</script>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

let isShow = ref(false)

onMounted(() => {
  isShow.value = true
})
</script>

<template>
  <div class="yg-message" v-show="isShow">
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
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>