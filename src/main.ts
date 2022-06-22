/*
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 21:06:28
 * @Description:
 */
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import pinia from "@/store";
// 代码高亮  更多样式：https://highlightjs.org/static/demo/
import "highlight.js/styles/stackoverflow-light.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

// ----------------导入组件库--------
// -本地引入
import ygUiPlus from "@packages/index";
// -npm引入
// import ygUiPlus from "yg-ui-plus";

let app = createApp(App);
app.use(hljsVuePlugin);
app.use(router);
app.use(pinia);
app.use(ygUiPlus);
app.mount("#app");
