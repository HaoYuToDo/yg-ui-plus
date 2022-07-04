<script setup lang="ts"></script>

<template>
    <div class="demo2">
        <div class="block">
            <yg-button type="primary" loading leftIcon="icon-sync">primary</yg-button>
            <yg-button type="success" loading leftIcon="icon-user">success</yg-button>
            <yg-button type="warning" loading leftIcon="icon-like">warning</yg-button>
            <yg-button type="primary" loading leftIcon="icon-download">primary</yg-button>
            <yg-button type="danger" loading leftIcon="icon-search">danger</yg-button>
            <yg-button type="info" loading leftIcon="icon-search">info</yg-button>
        </div>

        <div class="block">
            <yg-button type="primary" loading rightIcon="icon-sync">primary</yg-button>
            <yg-button type="success" loading rightIcon="icon-user">success</yg-button>
            <yg-button type="warning" loading rightIcon="icon-like">warning</yg-button>
            <yg-button type="primary" loading rightIcon="icon-download">primary</yg-button>
            <yg-button type="danger" loading rightIcon="icon-search">danger</yg-button>
            <yg-button type="info" loading rightIcon="icon-search">info</yg-button>
        </div>

        <div class="block">
            <yg-button type="primary" loading leftIcon="icon-sync" rightIcon="icon-sync">primary</yg-button>
            <yg-button type="success" loading leftIcon="icon-user" rightIcon="icon-user">success</yg-button>
            <yg-button type="warning" loading leftIcon="icon-like" rightIcon="icon-like">warning</yg-button>
            <yg-button type="primary" loading leftIcon="icon-download" rightIcon="icon-download">primary</yg-button>
            <yg-button type="danger" loading leftIcon="icon-search" rightIcon="icon-search">danger</yg-button>
            <yg-button type="info" loading leftIcon="icon-search" rightIcon="icon-search">info</yg-button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.demo2 {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .block {
        display: flex;
        gap: 12px;
    }
}
</style>
