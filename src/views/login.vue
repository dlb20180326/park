<template>
    <div id="login">
        <group>
            <x-input title="帐号" placeholder="请输入帐号" type="text" v-model="name"></x-input>
            <x-input title="密码" placeholder="请输入密码" type="password" v-model="password"></x-input>
            <x-button type="primary" @click.native="login">登录</x-button>
        </group>
    </div>
</template>

<script>
import { Group, XButton, XInput } from 'vux';

export default {
    data() {
        return { name: null, password: null };
    },
    components: {
        Group,
        XButton,
        XInput
    },
    methods: {
        login() {
            if (!this.name)
                return this.$vux.toast.show({
                    text: '请输入帐号',
                    type: 'text',
                    position: 'top'
                });
            if (!this.password)
                return this.$vux.toast.show({
                    text: '请输入密码',
                    type: 'text',
                    position: 'top'
                });
            this.$store
                .dispatch('login', {
                    name: this.name,
                    password: this.password
                })
                .then(
                    result => this.$router.push({ path: '/' }),
                    error =>
                        this.$vux.toast.show({
                            text: error.message,
                            width: '18em',
                            type: 'text',
                            position: 'top'
                        })
                );
        }
    }
};
</script>

<style lang="less" scoped>
#login {
    width: 90%;
    margin: 180px auto 0;
}
.weui-btn {
    margin-top: 50px;
}
</style>
