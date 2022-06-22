/*
 * @Author: yhy
 * @Date: 2022-06-12 15:53:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:40:15
 * @Description:组件路由
 */
let routes = [
  {
    path: "button",
    name: "button",
    meta: {
      title: "Button按钮",
    },
    component: () => import("@packages/button/doc/doc.md"),
  },
  {
    path: "input",
    name: "input",
    meta: {
      title: "Input输入框",
    },
    component: () => import("@packages/input/doc/doc.md"),
  },
];
export default routes;
