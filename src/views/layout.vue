<template>
    <div>
        <router-view/>
        <tabbar>
            <tabbar-item link="/">
                <img slot="icon" src="">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item link="/party">
                <img slot="icon" src="">
                <span slot="label">党员信息</span>
            </tabbar-item>
            <tabbar-item link="/points">
                <img slot="icon" src="">
                <span slot="label">积分详情</span>
            </tabbar-item>
            <tabbar-item link="/activity">
                <img slot="icon" src="">
                <span slot="label">活动详情</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
    components: {
        Tabbar,
        TabbarItem
    }
};
</script>

<style scoped>

</style>