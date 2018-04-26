<template>
    <div class="page-body">
        <div class="logo-top"></div>
        <div class="logo-pic"></div>
        <div class="last-content">
            
            <div class="tiles">
                <span></span>
                <div>上海陆家嘴金融贸易区综合党委</div>
                <span></span>
            </div>
            <div class="inputs">
                <div class="input-all clearfix">
                <div class="left-content">
                    <i class="img-phone"></i>
                    <label class="font-label">账号</label>
                </div>
                <input type="text" v-model="account" />
            </div>
            <button class="btnSub">登陆</button>
            </div>
            
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
                account: '',
                pass: '12345678'
            }
        },
        methods:{
            login() {
            if (!this.account)
                return this.$vux.toast.show({
                    text: '请输入帐号',
                    type: 'text',
                    position: 'top'
                });
            if (!this.pass)
                return this.$vux.toast.show({
                    text: '请输入密码',
                    type: 'text',
                    position: 'top'
                });
            this.$store.dispatch('login', {
                    name: this.account,
                    password: this.pass,
                    openId: this.$route.query.openId || undefined
                })
                .then(
                    result =>{
                        if(result.status){
                            this.$router.push({
                                path: '/'
                            })
                        }else{
                            this.$vux.toast.show({
                                text: result.message,
                                width: '18em',
                                type: 'text',
                                position: 'top'
                            })
                        }
                    }
                )
            }
        },
        mounted(){

        }
    }
</script>
<style scoped>
    .page-body{
        position: absolute;
        top: 0px;
        left:0px;
        right:0px;
        bottom:0px;
        display:flex;
        flex-direction: column;
        }
    .logo-top{
        width:100%;
        height: 27%;
        background: url(../assets/images/new-logo.png) no-repeat;
        background-size:100% 100%;
        z-index:500;
    }
    .logo-pic{
        position: absolute;
        top:20%;
        left:50%;
        z-index:999;
        width:1.1rem;
        height:1.1rem;
        margin-left:-.55rem;
        box-shadow: 0px 2px 5px 0px rgba(144,144,144,0.5);
        border-radius:18px;
        background:#fff url(../assets/images/iconw-bigpic.png) no-repeat center;
        background-size:70% 70%;
    }
    .last-content{
        width:80%;
        height: auto;
        margin:.81rem auto;
    }
    .tiles{
        width:100%;
        text-align:center;
        text-shadow:0 1px 1px #F2CE8F;
        font-size:0;
    }
    .tiles div{
        display: inline-block;
        font-size:.16rem;
        line-height:.21rem;
        color:rgba(227,192,140,1);
        padding:0 .1rem;
        height:.21rem;
    }
    .tiles span{
        display: inline-block;
        height: .16rem;
        width: .15rem;
        margin-top:.05rem;
        background:#fff url(../assets/images/icon-star.png) no-repeat 50% 50%;
        background-size:cover;
        color:rgba(227,192,140,1);
        vertical-align: bottom;
    }
    .inputs{
        width:100%;
        margin:0.72rem auto;
        height:auto;
    }

    /* 内容 */


    .input-all {
    height: 0.36rem;
    line-height: 0.36rem;
    padding-left: 0.61rem;
    padding-right: 0.3rem;
    position: relative;
    background:rgba(255,255,255,1);
    box-shadow: 0px 1px 5px 0px rgba(150,150,150,0.5);
    border-radius:18px;
    margin-bottom:.26rem;
    }
    .btnSub{
        width:100%;
        height:.36rem;
        line-height:.36rem;
        background:linear-gradient(180deg,rgba(194,81,72,1),rgba(180,56,44,1));
        box-shadow: 0px 4px 4px 0px rgba(228,149,158,1);
        border-radius:21px;
        border:0;
        font-size: .14rem;
        color:#fff;
    }
</style>

