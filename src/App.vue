<template>
    <router-view></router-view>
</template>

<script>
export default {};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/dlbicon/iconfont.css';
</style>
<style lang="less">
html,
body {
    font-family: 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    color: #3c3c3c;
    width:100%;
    height:100%;
    overflow-x:hidden;

}
body {
    font-size: 0.16rem;
}
.bgColors{background: linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1)); 
		background: -webkit-linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1));  
        background: -o-linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1));  
        background: -moz-linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1));  
        background: -mos-linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1));}
input[type=button], input[type=submit], input[type=file], button { cursor: pointer; -webkit-appearance: none; }
.vux-header {
    // background-color: #a0333b !important;
    .vux-header-left a,
    .vux-header-left button,
    .vux-header-right a,
    .vux-header-right button {
        color: #fff !important;
    }
}
.disabled-tabbar + .weui-tabbar {
    display: none !important;
}

.page-body {
    flex: 1;
    overflow: auto;
    background-color: #fff;
}
</style>
