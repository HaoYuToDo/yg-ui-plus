<!--
 * @Author: yhy
 * @Date: 2022-06-12 15:30:51
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:43:20
 * @Description: 
-->
<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import useBaseStore from "@/store/modlues/baseStore";
import routerList from "@/router/modlues/compRoute";
let baseStore = useBaseStore();

const { menuIndex } = storeToRefs(baseStore);

let router = useRouter();

let menuList = reactive<{
  list: Menu.MenuOptions[];
}>({ list: [] });

const handleItemMenu = (menu: Menu.MenuOptions, index: number) => {
  let { name } = menu;
  baseStore.setMenuIndex(index);
  router.push({ name });
};

onMounted(() => {
  menuList.list = routerList;
});
</script>

<template>
  <div class="comp">
    <div class="left-menu">
      <div
        class="menu"
        :class="{ 'menu-active': menuIndex === index }"
        v-for="(menu, index) in menuList.list"
        :key="index"
        @click="handleItemMenu(menu, index)"
      >
        {{ menu.meta.title }}
      </div>
    </div>
    <div class="comp-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.comp {
  height: 100%;
  display: flex;
  .left-menu {
    width: 300px;
    height: 100%;
    padding-top: 60px;
    border-right: 1px solid @divider-color;
    .menu {
      cursor: pointer;
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 30px;
      font-size: 13px;
      color: @text-color;
      &:hover {
        color: @primary-color;
        background-color: @bg-hover-color;
      }
    }
    .menu-active {
      color: @primary-color;
      background-color: @bg-hover-color;
    }
  }
  .comp-content {
    flex: 1;
    height: 100%;
    padding: 20px 30px;
  }
}
</style>
