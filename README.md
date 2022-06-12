<!--
 * @Author: yhy
 * @Date: 2022-06-05 11:10:02
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 20:20:59
 * @Description:
-->

# Yes-Go-Ui-Plus是一套支持 vue3.0 的组件库

##### 安装

````
 yarn add yg-ui-plus
````
 
#### 使用
````
 import { createApp } from "vue";
 import App from "@/App.vue";
 import ygUiPlus from "yg-ui-plus";

 let app = createApp(App);

 app.use(ygUiPlus);
 
 app.mount("#app");
 ````