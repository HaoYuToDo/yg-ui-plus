<script setup lang="ts"></script>

<template>
    <div class="demo3">
        <div class="block">
            <yg-button loading leftIcon="icon-sync">default</yg-button>
            <yg-button type="primary" loading leftIcon="icon-sync" disabled>primary</yg-button>
            <yg-button type="success" loading leftIcon="icon-sync">success</yg-button>
            <yg-button type="warning" loading leftIcon="icon-sync">warning</yg-button>
            <yg-button type="primary" loading leftIcon="icon-sync">primary</yg-button>
            <yg-button type="danger" loading leftIcon="icon-sync">danger</yg-button>
            <yg-button type="info" loading leftIcon="icon-sync">info</yg-button>
        </div>

        <div class="block">
            <yg-button loading rightIcon="icon-sync">default</yg-button>
            <yg-button type="primary" loading rightIcon="icon-sync" disabled>primary</yg-button>
            <yg-button type="success" loading rightIcon="icon-sync">success</yg-button>
            <yg-button type="warning" loading rightIcon="icon-sync">warning</yg-button>
            <yg-button type="primary" loading rightIcon="icon-sync">primary</yg-button>
            <yg-button type="danger" loading rightIcon="icon-sync">danger</yg-button>
            <yg-button type="info" loading rightIcon="icon-sync">info</yg-button>
        </div>

        <div class="block">
            <yg-button loading leftIcon="icon-sync" rightIcon="icon-sync">default</yg-button>
            <yg-button type="primary" loading leftIcon="icon-sync" rightIcon="icon-sync" disabled>primary</yg-button>
            <yg-button type="success" loading leftIcon="icon-sync" rightIcon="icon-sync">success</yg-button>
            <yg-button type="warning" loading leftIcon="icon-sync" rightIcon="icon-sync">warning</yg-button>
            <yg-button type="primary" loading leftIcon="icon-sync" rightIcon="icon-sync">primary</yg-button>
            <yg-button type="danger" loading leftIcon="icon-sync" rightIcon="icon-sync">danger</yg-button>
            <yg-button type="info" loading leftIcon="icon-sync" rightIcon="icon-sync">info</yg-button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.demo3 {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .block {
        display: flex;
        gap: 12px;
    }
}
</style>
