/*
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 14:20:12
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import ygUiPlus from "../packages";

let app = createApp(App);
app.use(ygUiPlus);
app.mount("#app");
