<template>
    <div id="app">
        <loading v-model="isLoading"></loading>
        <router-view/>
    </div>
</template>

<script>
import { Loading } from 'vux';
import { mapState } from 'vuex';

export default {
    components: {
        Loading
    },
    computed: {
        ...mapState({
            isLoading: state => state.vux.isLoading
        })
    }
};
</script>

<style>
/* html,
body {
    font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100%;
} */
</style>
<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
