/*
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:32:46
 * @Description:
 */
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
// 代码高亮
import hljs from "highlight.js";
import "highlight.js/styles/color-brewer.css";

// ----------------导入组件库--------
// -本地引入
import ygUiPlus from "@package";
// -npm引入
// import ygUiPlus from "yg-ui-plus";

let app = createApp(App);
app.use(router);
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.use(ygUiPlus);
app.mount("#app");
