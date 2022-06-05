/*
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 14:38:31
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
// import ygUiPlus from "../packages";
import ygUiPlus from "yg-ui-plus";

let app = createApp(App);
app.use(ygUiPlus);
app.mount("#app");
