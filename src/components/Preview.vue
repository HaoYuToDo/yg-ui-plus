<!--
 * @Author: yhy
 * @Date: 2022-06-12 15:43:31
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 17:34:13
 * @Description: 代码高亮
-->
<script setup>
import { ref, toRefs, onMounted } from "vue";

let props = defineProps({
  aaa: {
    type: String,
    default: "",
    required: true,
  },
  bbb: {
    type: String,
    default: "",
    required: true,
  },
});

let { aaa, bbb } = toRefs(props);

let sourceCode = ref("");

// 获取页面代码
async function getSourceCode() {
  sourceCode.value = (
    await import(
      /* @vite-ignore */ `/packages/${aaa.value}/doc/${bbb.value}.vue?raw`
    )
  ).default;
}

onMounted(() => {
  getSourceCode();
});
</script>

<template>
  <div class="Preview">
    <pre v-highlight><code>{{ sourceCode }}</code></pre>
  </div>
</template>

<style lang="less" scoped></style>
