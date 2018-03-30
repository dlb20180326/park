<template>
    <div id="login">
        <!-- <mt-field placeholder="请输入用户名" type="text" :attr="{ maxlength: 50 }" v-model="uid"></mt-field>
        <mt-field placeholder="请输入密码" type="password" :attr="{ maxlength: 50 }" v-model="pwd"></mt-field>
        <mt-button type="primary" @click="login">登录</mt-button> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { AjaxPlugin, Group } from 'vux';

Vue.use(AjaxPlugin);

export default {
    data() {
        return { uid: null, pwd: null };
    },
    methods: {
        login() {
            if (!this.uid) return Toast('请输入用户名');
            if (!this.pwd) return Toast('请输入密码');
            this.$store.commit('user', { uid: this.uid, pwd: this.pwd });
            this.$router.push({ path: '/' });
        }
    }
};
</script>

<style lang="less" scoped>
#login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    width: 90%;
    margin: 0 auto;
}
</style>
