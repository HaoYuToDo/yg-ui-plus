/*
 * @Author: yhy
 * @Date: 2022-06-05 11:15:16
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 12:01:42
 * @Description:
 */
import YgMessage from "./index.vue";
import { h, render } from "vue";

export default ({ text, timeout }: { text: string; timeout?: number }) => {
  if (document) {
    // 动态创建一个DOM容器
    const div = document.createElement("div");
    // 创建虚拟dom
    const vnode = h(YgMessage, {}, () => h("div", text));
    // 通过render函数把虚拟dom转化为真实dom,并挂载到容器dom上
    render(vnode, div);
    // 把容器挂载到body节点上
    document.body.appendChild(div);
    // 设置消失时间
    let timer: any = null;
    timer = setTimeout(() => {
      render(null, div);
      document.body.removeChild(div);
      clearTimeout(timer);
      timer = null;
    }, timeout || 2500);
  }
};
