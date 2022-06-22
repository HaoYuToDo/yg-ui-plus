/*
 * @Author: yhy
 * @Date: 2022-06-05 11:15:16
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 12:01:42
 * @Description:
 */
import YgButton from "./index.vue";

YgButton.install = (app: any) => {
  app.component(YgButton.name, YgButton);
};

export default YgButton;
