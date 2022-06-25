<!--
 * @Author: yhy
 * @Date: 2022-06-12 15:43:31
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 20:44:08
 * @Description: 代码高亮
-->
<script setup lang="ts">
import { ref, toRefs, onMounted } from "vue";

let props = withDefaults(
  defineProps<{
    compName: string;
    demoName: string;
  }>(),
  {
    compName: "",
    demoName: "",
  }
);

let { compName, demoName } = toRefs(props);

let showCode = ref(false);

let sourceCode = ref("");

// 获取页面代码
async function getSourceCode() {
  sourceCode.value = (
    await import(
      /* @vite-ignore */ `/packages/${compName.value}/doc/${demoName.value}.vue?raw`
    )
  ).default;
}

onMounted(() => {
  getSourceCode();
});
</script>

<template>
  <div class="preview">
    <div v-if="showCode">
      <highlightjs autodetect :code="sourceCode" />
    </div>
    <div class="btn" @click="showCode = !showCode">
      {{ showCode ? "隐藏代码" : "显示代码" }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.preview {
  .btn {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }
  }
}
</style>
