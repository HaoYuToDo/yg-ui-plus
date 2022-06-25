/*
 * @Author: yhy
 * @Date: 2022-06-05 11:15:16
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 12:01:42
 * @Description:
 */
import YgIcon from "./index.vue";

YgIcon.install = (app: any) => {
  app.component(YgIcon.name, YgIcon);
};

export default YgIcon;
