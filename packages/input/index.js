/*
 * @Author: yhy
 * @Date: 2022-06-05 11:15:25
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 12:01:29
 * @Description:
 */
import YgInput from "./index.vue";

YgInput.install = (app) => {
  app.component(YgInput.name, YgInput);
};

export default YgInput;
