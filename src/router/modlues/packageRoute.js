/*
 * @Author: yhy
 * @Date: 2022-06-12 15:53:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:40:38
 * @Description:组件路由
 */
let routes = [
  {
    path: "/",
    name: "baseLayout",
    component: () => import("@/layout/baseLayout.vue"),
    children: [
      {
        path: "homeComponent",
        name: "homeComponent",
        meta: {
          title: "组件",
        },
        component: () => import("@/views/homeComponent.vue"),
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
