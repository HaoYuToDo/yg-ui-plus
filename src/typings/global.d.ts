// ts识别.md文件
declare module "*.md" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}

// 声明第三方库
declare module "yg-ui-plus";

// 定义菜单
declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    component: object;
    redirect?: string;
    meta: {
      title?: string;
    };
    children?: MenuMenuOptions[];
  }
}
