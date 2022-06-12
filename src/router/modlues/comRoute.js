/*
 * @Author: yhy
 * @Date: 2022-06-12 15:53:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:40:15
 * @Description:其他页面路由
 */
let routes = [
  {
    path: "/",
    name: "baseLayout",
    component: () => import("@/layout/baseLayout.vue"),
    children: [
      {
        path: "homeWelcome",
        name: "homeWelcome",
        meta: {
          title: "欢迎页",
        },
        component: () => import("@/views/homeWelcome.vue"),
      },
    ],
  },
];
export default routes;
