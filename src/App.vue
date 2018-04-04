<template>
    <router-view></router-view>
</template>

<script>
export default {};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/dlbicon/iconfont.css';

html {
    font-size: 625%; /*100 ÷ 16 × 100% = 625%*/
}
// 根据屏宽设置字体大小
@media screen and (min-width: 360px) and (max-width: 374px) and (orientation: portrait) {
    html {
        font-size: 703%;
    }
}
@media screen and (min-width: 375px) and (max-width: 383px) and (orientation: portrait) {
    html {
        font-size: 732.4%;
    }
}
@media screen and (min-width: 384px) and (max-width: 399px) and (orientation: portrait) {
    html {
        font-size: 750%;
    }
}
@media screen and (min-width: 400px) and (max-width: 413px) and (orientation: portrait) {
    html {
        font-size: 781.25%;
    }
}
@media screen and (min-width: 414px) and (max-width: 431px) and (orientation: portrait) {
    html {
        font-size: 808.6%;
    }
}
@media screen and (min-width: 432px) and (max-width: 479px) and (orientation: portrait) {
    html {
        font-size: 843.75%;
    }
}

html,
body {
    font-family: 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    color: #3c3c3c;
}
body {
    font-size: 0.16rem;
}
</style>