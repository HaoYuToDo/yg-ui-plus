/*
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 21:34:36
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(), // 支持md作为vue组件、支持vue组件在md中使用
  ],
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
      entry: join(__dirname, "./packages/index.ts"),
      name: "ygUiPlus",
    },
  },
  resolve: {
    alias: {
      "@": join(__dirname, "./src"),
      "@packages": join(__dirname, "./packages"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 1.重置css样式 2.加载css变量
        additionalData: `@import '@/styles/index.less';`,
      },
    },
  },
  server: {
    port: 5001,
  },
});
