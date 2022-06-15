/*
 * @Author: yhy
 * @Date: 2022-06-12 15:33:59
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 17:14:06
 * @Description:
 */
import { createRouter, createWebHashHistory } from "vue-router";
import baseRoute from "@/router/modlues/baseRoute";
let routes = [...baseRoute];
let router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
