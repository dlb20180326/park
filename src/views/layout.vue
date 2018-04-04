<template>
    <div>
        <router-view/>
        <tabbar slot="bottom" v-if="roleid==3">
            <tabbar-item>
                <img slot="icon" src="@/assets/images/gray-home.png">
                <img slot="icon-active" src="@/assets/images/iconw-home.png">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item active-class="reds">
                <img slot="icon" src="@/assets/images/gray-item.png">
                <img slot="icon-active" src="@/assets/images/iconw-integral.png">
                <span slot="label">积分详情</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="@/assets/images/gray-active.png">
                <img slot="icon-active" src="@/assets/images/iconw-activity.png">
                <span slot="label">活动详情</span>
            </tabbar-item>
        </tabbar>
        <tabbar slot="bottom" v-if="roleid==4">
            <tabbar-item>
                <img slot="icon" src="@/assets/images/gray-home.png">
                <img slot="icon-active" src="@/assets/images/iconw-home.png">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item active-class="reds">
                <img slot="icon" src="@/assets/images/gray-info.png">
                <img slot="icon-active" src="@/assets/images/iconw-partyMembe.png">
                <span slot="label">党员信息</span>
            </tabbar-item>
            <tabbar-item active-class="reds">
                <img slot="icon" src="@/assets/images/gray-item.png">
                <img slot="icon-active" src="@/assets/images/iconw-integral.png">
                <span slot="label">积分详情</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="@/assets/images/gray-active.png">
                <img slot="icon-active" src="@/assets/images/iconw-activity.png">
                <span slot="label">活动详情</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
    data() {
        return {
            roleid: this.$store.getters.user.roleid
        };
    },
    components: {
        Tabbar,
        TabbarItem
    }
};
</script>

<style scoped>
.vux-flexbox {
    width: 89.4%;
    height: 0.8rem;
    margin: 0.13rem auto 0.32rem auto;
}
.flex-demo {
    width: 98%;
    height: 0.8rem;
    background: rgba(246, 246, 246, 1);
    border-radius: 2px;
}
.vux-flexbox-item:nth-child(2) {
    margin-right: -1%;
}
#echartShow {
    width: 76%;
    height: 2.1rem;
    margin: 0 auto;
}
.weui-tabbar {
    background-color: #ffffff;
    width: 100%;
    position: fixed;
}
.weui-tabbar__item {
    padding: 2px 0 0;
}
</style>