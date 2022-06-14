<!--
 * @Author: yhy
 * @Date: 2022-06-12 21:54:51
 * @LastEditors: yhy
 * @LastEditTime: 2022-06-12 22:25:42
 * @Description: 
-->
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

let currentIndex = ref(0);

const tabList = reactive([
  {
    name: "指南",
    path: "/guide",
  },
  {
    name: "组件",
    path: "/comp/button",
  },
]);

const handleTabItem = (tab, index) => {
  let { path } = tab;
  currentIndex.value = index;
  router.push(path);
};

const handleLogo = () => {
  router.push("/welcome");
};
</script>

<template>
  <div class="BaseHeader">
    <!-- logo区域 -->
    <div class="logo-content">
      <img class="img" src="@/assets/logo.png" alt="" @click="handleLogo" />
    </div>
    <!-- 功能区域 -->
    <div class="tab-content">
      <div
        class="tab"
        :class="{ 'tab-active': currentIndex === index }"
        v-for="(tab, index) in tabList"
        :key="index"
        @click="handleTabItem(tab, index)"
      >
        {{ tab.name }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.BaseHeader {
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid @divider-color;
  .logo-content {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  .tab-content {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .tab {
      margin-right: 30px;
      font-size: 20px;
      height: 55px;
      line-height: 55px;
      cursor: pointer;
      &:hover {
        color: @primary-color;
      }
    }
    .tab-active {
      color: @primary-color;
      border-bottom: 2px solid @primary-color;
    }
  }
}
</style>
