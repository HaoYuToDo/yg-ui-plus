/*
 * @Author: yhy
 * @Date: 2022-06-12 15:53:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:40:15
 * @Description:基础路由
 */
import compRoute from "./compRoute";
let routes = [
  {
    path: "/",
    name: "baseLayout",
    component: () => import("@/layout/baseLayout.vue"),
    redirect: "/welcome",
    children: [
      {
        path: "welcome",
        name: "welcome",
        meta: {
          title: "欢迎页",
        },
        component: () => import("@/views/welcome/index.vue"),
      },
      {
        path: "guide",
        name: "guide",
        meta: {
          title: "指南",
        },
        component: () => import("@/views/guide/index.vue"),
      },
      {
        path: "comp",
        name: "comp",
        meta: {
          title: "组件",
        },
        component: () => import("@/views/comp/index.vue"),
        children: [...compRoute],
      },
    ],
  },
];
export default routes;
