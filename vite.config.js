/*
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 18:35:43
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖,解决报（reading ‘isCE‘）错误
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: join(__dirname, "./packages/index.js"),
      name: "ygUiPlus",
    },
  },
  resolve: {
    alias: {
      "@": join(__dirname, "./src"),
    },
  },
  css: {
    // 配置less全局变量
    preprocessorOptions: {
      less: {
        additionalData: `@import '@/styles/index.less';`,
      },
    },
  },
});
