/*
 * @Author: yhy
 * @Date: 2022-06-05 11:51:49
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-05 14:21:33
 * @Description:
 */
import YgButton from "./button";
import YgInput from "./input";
import YgIcon from "./icon";
import Message from "./message";
let components = [YgButton, YgInput, YgIcon];

let install = (app: any) => {
  components.forEach((com) => {
    app.use(com);
  });
  app.config.globalProperties.$message = Message;
};

// 全局引入
let ygUiPlus = {
  install,
};

// 支持按需引入
export { YgButton, YgInput, YgIcon, Message };

export default ygUiPlus;
