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
  <div class="Preview">
    <highlightjs autodetect :code="sourceCode" />
  </div>
</template>

<style lang="less" scoped></style>
