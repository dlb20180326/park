<template>
    <div class="page-body">
        <div class="logo-top"></div>
        <div class="logo-pic"></div>
        <div class="tiles"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{

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
    .tiles{
        width:67%;
        height:.22rem;
        line-height:.22rem;
        text-align: center;
        font-size:.16rem;
        font-family:PingFang-SC-Bold;
        color:rgba(227,192,140,1);

    }


</style>

