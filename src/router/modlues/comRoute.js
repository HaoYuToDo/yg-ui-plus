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
        children: [
          {
            path: "button",
            name: "button",
            meta: {
              title: "Button按钮",
            },
            component: () => import("@package/button/doc/doc.md"),
          },
          {
            path: "input",
            name: "input",
            meta: {
              title: "Input输入框",
            },
            component: () => import("@package/input/doc/doc.md"),
          },
        ],
      },
    ],
  },
];
export default routes;
