<template>
    <div id="changPwd">
        <div id="myForm">
            <div class="input-all clearfix">
                <div class="left-content">
                    <span>管理者</span>
                    <h2>陆家嘴金领驿站超级管理员</h2>
                    <div class="bottom">
                        <span>联系方式：</span>
                        <span>QQ：123456789</span>
                        <span>电话：021-6677 5566</span>
                    </div>
                </div>
            </div>
            <div class="input-all clearfix">
                <div class="attention">
                    <span>注意：</span>
                    <p>密码必须是8-20个英文字母、数字或符号（除空格）。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="less" scoped>
#changPwd{
    padding:.2rem;
    .label-name{
        font-size: .14rem;
        color: #666;
    }
    .label-lock{
        font-size: .14rem;
        color: #666;
    }
    input{
        display: block;
        width: 100%;
        height: .36rem;
        outline: 0;
        background-color: transparent;
        box-sizing: border-box;
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
        color: #999;
        border:0;
        border-radius: .04rem;
        font-size: .14rem;
        margin-top: .1rem;
        margin-bottom: .1rem;
    }
    .changPwd{
        position: fixed;
        bottom: .2rem;
        width: 90%;
        height: .4rem;
        font-size: .16rem;
        font-family:PingFangSC-Medium;
        background:rgba(216,216,216,1);
        color: #fff;
        border-radius: 4px;
        border: 0;
    }
    .attention{
        width:3.35rem;
        height:.4rem; 
        font-size:.14rem;
        font-family:PingFangSC-Medium;
        color:rgba(185,54,71,1);
    }
}
</style>
