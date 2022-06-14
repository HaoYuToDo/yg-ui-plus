<!--
 * @Author: yhy
 * @Date: 2022-06-12 15:30:51
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 16:43:20
 * @Description: 
-->
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import routerList from "@/router/modlues/comRoute";

let router = useRouter();

let menuList = ref([]);

let currentIndex = ref(0);

const handleItemMenu = (menu, index) => {
  let { name } = menu;
  currentIndex.value = index;
  router.push({ name });
};

onMounted(() => {
  // 规定组件路由永远定义在最后一个
  let len = routerList[0].children.length;
  menuList.value = routerList[0].children[len - 1].children;
});
</script>

<template>
  <div class="comp">
    <div class="left-menu">
      <div
        class="menu"
        :class="{ 'menu-active': currentIndex === index }"
        v-for="(menu, index) in menuList"
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
  }
}
</style>
