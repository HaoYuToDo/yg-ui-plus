/*
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 14:19:59
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
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
});
