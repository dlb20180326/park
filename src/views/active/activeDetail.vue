<template>
    <div class="page-body">
        <x-header :left-options="{showBack: false}">
            党员活动
        </x-header>
        <flexbox orient="vertical">
            <flexbox-item>
                <section class="mainbox">
                    <div class="barbg" >
                        年度共参与组织活动：<span style="display: inline">{{number1}}</span> 次
                    </div>
                    <div class="barbg">
                        年度共参与紧邻一战活动：<span style="display: inline">{{number2}}</span> 次
                    </div>
                </section>
                <div class="grayLine"></div>
            </flexbox-item>
        </flexbox>
        <flexbox orient="vertical">

            <section class="mainbox1">
                <div class=" clearfix p15 display">
                    <span class="fl weui-cell__bd1">党员生活通知</span>
                    <a  class="fRight"> <router-link slot="right" :to="{name:'activeMore'}">查看全部 ></router-link></a>
                </div>
                <div class="content">
                    <table width="100%" class="table">
                        <tr>
                            <td width="100">时间：</td>
                            <td class="f_b">{{startTime1|formatDuring}}</td>
                        </tr>
                        <tr>
                            <td>地点：</td>
                            <td class="f_b">{{activePace}}</td>
                        </tr>
                        <tr>
                            <td>发起人：</td>
                            <td class="f_b">{{activeCreatePeople}}</td>
                        </tr>
                        <tr>
                            <td valign="top">活动内容：</td>
                            <td class="f_b">{{activeContext}}</td>
                        </tr>
                    </table>
                </div>

                <div class="book">
                    <a :class="{'active1':isActive,'active2':!isActive}" @click="submit()">报名</a>
                </div>
            </section>

        </flexbox>
        <flexbox orient="vertical">
            <flexbox-item>
                <section class="mainbox ">
                    <div class="p15">
                        <div class=" clearfix  display">
                            <span class="fl weui-cell__bd1">已参与组织生活</span>
                            <a href="#" class=" fAll"><router-link slot="right" :to="{name:'Active'}">查看全部 ></router-link></a>
                        </div>
                        <ul class="news">
                            <li v-for="(item,index) in activeComplete" :key="index" >
                                <a class=" display clearfix " href="javascript:;">
                                    <div class=" fl">{{item.activeName}}</div>
                                    <div class=" fr">{{item.endTime|formatDuring}}<span class="rightBtn"></span></div>
                                </a>
                            </li>

                        </ul>

                    </div>
                </section>
            </flexbox-item>
        </flexbox>

    </div>
</template>

<script>
    import axios from 'axios'
import { XHeader, Flexbox, FlexboxItem, cookie,Cell,Group,XButton,XTable } from 'vux';

export default {
    components: {
        XHeader,
        Flexbox,
        FlexboxItem,Cell,Group,XButton,XTable
    },
    data() {
        return {
            number1:1,
            number2:1,
            userId:cookie.get('userId'),
            startTime1:'',
            activePace:'',
            activeCreatePeople:'',
            activeId:'',
            activeContext:'',

            activeComplete:[],
            isActive:true,



        };
    },
    filters: {
        formatDuring: function (value) {

                Date.prototype.toLocaleString = function(){
                    return this.getFullYear() +'.'+ (this.getMonth()+1)+'.'+this.getDay()
                }
                return new Date(value).toLocaleString();

        }
    },
    methods:{
        getActivity(){
            axios({
                method: 'get',
                url: 'active/getRunningActive',
                params: {
                    pageNum:1,
                    pageSize:1
                }
            }) .then((res)=> {
                console.log(res.data)
                this.startTime1=res.data.list[0].startTime;
                this.activePace=res.data.list[0].activePace;
                this.activeCreatePeople=res.data.list[0].activeCreatePeople;
                this.activeContext=res.data.list[0].activeContext;
                this.activeId=res.data.list[0].id;
            })
                .catch(function (error) {
                    console.log(error);
                });


        },
        gettimes1(){
            axios({
                method: 'post',
                url: 'active/getParticipateCount',
                params: {
                    userId:this.userId,
                    activeType:3
                }
            }) .then((res)=> {
                console.log(res)
                this.number1=res.data
            }) .catch(function (error) {
                    console.log(error);
                });
        } ,
        gettimes2(){
            axios({
                method: 'post',
                url: 'active/getParticipateCount',
                params: {
                    userId:this.userId,
                    activeType:5
                }
            }) .then((res)=> {
                console.log(res)
                this.number2=res.data


            })
                .catch(function (error) {
                    console.log(error);
                });


        },submit(){
            axios({
                method: 'post',
                url: 'active/participate',
                params: {
                    userId:this.userId,
                    activeId:this.activeId
                }
            }) .then((res)=> {
                alert(res.msg)

            if(res.success==false){
                 return this.isActive=false;

            }



            })
                .catch(function (error) {
                    console.log(error);
                });

        },
        getAlreadyActive(){
            axios({
                method: 'get',
                url: 'active/getAlreadyActive',
                params: {
                    pageNum:1,
                    pageSize:4
                }
            }) .then((res)=> {
                 this.activeComplete=res.data.list
                console.log(this.activeComplete)
            })
                .catch(function (error) {
                    console.log(error);
                });


        },
        datePick(s){
            Date.prototype.toLocaleString = function(){
                return this.getFullYear() +'.'+ (this.getMonth()+1)+'.'+this.getDay()
            }
            return new Date(s).toLocaleString();
        }

    },
    mounted() {
        this.getActivity();
        this.gettimes1();
        this.gettimes2();
        this.getAlreadyActive()
    }
};
</script>

<style lang="less" scoped>
.grayLine{width:100%;height:.1rem;background:rgba(244,244,244,1);}
    table {
        border-collapse:collapse;
    }
    .table td {
        padding:3px;
    }

    .custom-primary-red {
        border-radius: 99px!important;
        border-color: #CE3C39!important;
        color: #CE3C39!important;
    &:active {
         border-color: rgba(206, 60, 57, 0.6)!important;
         color: rgba(206, 60, 57, 0.6)!important;
         background-color: transparent;
     }
    }
.page-body {
    background-color: #efefef;
}
.fAll{
	float:right;
	margin-right:.2rem;
}
.fRight{
	float:right;
}
.content{width:89%;
        margin:0 auto;
        }
.rightBtn{display:inline-block;width:.15rem;height:.15rem;background-image:url(../../assets/images/icon-rights.png);margin-left:.2rem;background-size:100% 100%;}
 span{ display: block;font-size: 0.8em;background-color:#F5F5F5}
.vux-flexbox.list-item {
    background-color: #fff;
    &:not(:last-child) {
        margin-bottom: 0.15rem;
    }
}
.vux-flexbox-item.list-avatar {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex: 0 0 auto;
    width: 0.8rem;
    min-height: 0.8rem;
    img {
        width: 0.6rem;
        height: 0.6rem;
        margin-top: 0.1rem;
        border-radius: 50%;
        box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.15);
        background-color: rgba(0, 0, 0, 0.03);
    }
}
.vux-flexbox-item.list-body {
    padding: 0.1rem 0;
}
.vux-flexbox-item.list-head {
    p {
        font-size: 0.12rem;
        color: #999;
    }
}
.vux-flexbox-item.list-close {
    flex: 0 0 auto;
    width: 0.36rem;
    line-height: 1;
    padding-top: 0.05rem;
}
.list-content {
    margin-top: 0.1rem;
    padding-right: 0.15rem;
    font-size: 0.14rem;
}
.images-preview {
    margin-top: 0.1rem;
    & > .vux-flexbox-item {
        position: relative;
        &:after {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
        & > div,
        & > a {
            position: absolute;
            width: 90%;
            height: 90%;
            border-radius: 5%;
            box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.15);
            background-color: rgba(0, 0, 0, 0.03);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                min-width: 100%;
            }
            &.btn-plus {
                background-image: url(../../assets/images/add_bg.png);
                background-position: center center;
                background-repeat: no-repeat;
                cursor: pointer;
            }
        }
    }
}



    *{
        margin:0; padding:0;
    }
    ul, li {
        list-style-type:none;
        margin:0;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: normal;
    }
    a {
        color: #666;
        text-decoration:none;
    }
    img {
        border:0;
        vertical-align:middle;
    }
    textarea {
        font-family:'Microsoft Yahei';
    }
    body {
        color:#666;
        background:#f4f4f4;
        font-size:.14rem;
        overflow-x:hidden;
    }

    table {
        border-collapse:collapse;
    }
    input {
        border:0;
    }
    .clearfix:after {
        content: " ";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
    }
    .clearfix {
        zoom: 1;
    }
    .fl {
        float:left;
        width:50.6%;
        overflow:hidden;
        height:.45rem;
        line-height:.45rem;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .fr{
        float:right;
        overflow:hidden;
        height:.45rem;
        line-height:.45rem;
        width:32%;
    }
    .p15 {
        padding:0 .2rem .2rem;
    }
    .display {
        display:block;
    }
    .header {
        background:#b42f40;
        color:#fff;
        text-align:center;
        padding:3vw 0;
        position:relative;
    }
    .mainbox {
        background:#fff;
        width:100%;
        padding:.2rem 0 .06rem 0;
    }
    .mainbox1 {
        background:#fff;
        width:100%;
        padding-top:.1rem;
    }
    .weui-cell1 {
        padding-bottom:0;
    }
    .weui-cell__bd1 {
        font-size:.2rem;
    }
    .weui-cells {
        font-size:4.5vw;
    }
    .weui-form-preview__bd {
        text-align:left;

    }
    .barbg {
        background:#f5f5f5;
        border-radius:4px;
        width:89%;
        margin:0 auto;
        margin-bottom:.14rem;
        padding-left:.2rem;
    }
    .barbg span {
        color:#fa7e07;
        font-size:7vw;
    }
    .book {
        text-align:center;
     	padding-top:.2rem;
    }
    .book a {
        display:inline-block;
        border-radius:1vw;

        color:#fff;
        padding:2vw 0;
        width:35vw;

    }
    .active1 {
           background:#9d0e1e;
       }
    .active2 {
           background:#d8d8d8;
     }
    .f_b {
    }
    .table td {
        padding:3px;
    }
    .news {
        margin-top:0;
    }
    .news li {
        border-bottom:1px solid #f3f3f3;
        line-height:12vw;
    }
    .header a {
        position:absolute;
        left:3vw;
        display:inline-block;
        color:#fff;
    }
    .red {
        color:red;
    }
    .dbsy li {
        border-bottom:1px solid #f3f3f3;
        padding:4vw 0 1vw;
    }
    .title_p {
        padding:2vw 0 3vw;
    }
.p15 span{background-color:#FFFFFF!important;}















</style>
