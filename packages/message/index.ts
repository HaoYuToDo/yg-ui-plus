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
  // 动态创建一个DOM容器
  const div = document.createElement("div");
  document.body.appendChild(div);

  // 传递给组件的选项
  const vnode = h(YgMessage, {}, [text]);
  render(vnode, div);

  let timer: any = null;
  clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, div);
    document.body.removeChild(div);
    clearTimeout(timer);
  }, timeout || 2500);
};
