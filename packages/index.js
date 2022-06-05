/*
 * @Author: yhy
 * @Date: 2022-06-05 11:51:49
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 14:21:33
 * @Description:
 */
import YgButton from "./button";
import YgInput from "./input";

let components = [YgButton, YgInput];

let install = (app) => {
  components.forEach((com) => {
    app.use(com);
  });
};

// 全局引入
let ygUiPlus = {
  install,
};

// 支持按需引入
export { YgButton, YgInput };

export default ygUiPlus;
