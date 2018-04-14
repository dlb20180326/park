<template>
    <div class="page-body">
        <view-box ref="viewBox" body-padding-top=".46rem">
            <x-header :left-options="{showBack: false}" class="bgColors" slot="header"
                      style="width:100%;position:absolute;left:0;top:0;z-index:100;">支部党员信息
            </x-header>
            <div class="title-name">{{navName.departmentname}}</div>
            <div class="detail">
                <!--	<div class="allLine" >-->
                <div class="allLine" v-for="(listinfo,index) in contents" :key="index">
                    <router-link :to="{name:'Obtain',params:{userid:listinfo.userid,year:years}}">
                        <div>
                            <span class="colorL">姓名：</span>
                            <span class="colorW">{{listinfo.name}}</span>
                        </div>
                        <div>
                            <span class="colorL">性别：</span>
                            <span class="colorW">{{judge(listinfo.sex)}}</span>
                        </div>
                        <div>
                            <span class="colorL">年龄：</span>
                            <span class="colorW">{{listinfo.age}}</span>

                        </div>
                        <div>
                            <span class="colorL">转出支部：</span>
                            <span class="colorW">{{listinfo.fromdepartmentname}}</span>

                        </div>
                        <div>
                            <span class="colorL">现有积分：</span>
                            <span class="colorW color-d">{{listinfo.totalscore || 0.0}}<i class="rights"></i></span>
                        </div>
                    </router-link>
                </div>
            </div>
        </view-box>
    </div>
</template>
<script>
    import {XHeader, ViewBox, cookie} from 'vux'
    import axios from 'axios'

    export default {
        data() {
            return {
                contents: [],
                navName: {},
                years: new Date().getFullYear(),
                select: {infos: '党员信息', acin: false},
                userId: cookie.get('userId')


            }
        },
        components: {
            XHeader,
            ViewBox
//			footers
        },
        methods: {
            infor() {
                axios.get('ppartymember/queryByDepartmentId', {
                    params: {
                        departmentid: this.$store.getters.user.departmentid
                    }
                }).then(res => {
                    this.contents = res.data;
                }).catch(err => {
                    console.log('fail' + err);
                })

            },
            nav() {
                axios.get('pdepartment/queryById', {
                    params: {
                        departmentid: this.$store.getters.user.departmentid
                    }
                }).then(res => {
                    this.navName = res.data;
                }).catch(err => {
                    console.log('fail' + err);
                })
            },
            judge(event) {
                if (event === '1') {
                    return event = '男'
                } else {
                    return event = '女'
                }
            }
        },
        mounted() {
            this.infor();
            this.nav();
            this.judge();
        }
    }
</script>

<style scoped>
    html, body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
	.page-body {
	    display: flex;
	    flex-direction: column;
	}
    .bgColors {
        background: linear-gradient(to right, rgba(185, 54, 71, 1), rgba(155, 10, 26, 1));
        background: -webkit-linear-gradient(to right, rgba(185, 54, 71, 1), rgba(155, 10, 26, 1));
        background: -o-linear-gradient(to right, rgba(185, 54, 71, 1), rgba(155, 10, 26, 1));
        background: -moz-linear-gradient(to right, rgba(185, 54, 71, 1), rgba(155, 10, 26, 1));
        background: -mos-linear-gradient(to right, rgba(185, 54, 71, 1), rgba(155, 10, 26, 1));
    }

    .vux-header .vux-header-left a, .vux-header .vux-header-left button, .vux-header .vux-header-right a, .vux-header .vux-header-right button {
        color: #FFFFFF !important;
        font-size: .12rem !important;
    }

    .vux-header .vux-header-left, .vux-header .vux-header-right {
        color: #FFFFFF !important;
    }

    .vux-header .vux-header-left .left-arrow:before {
        border: 1px solid #FFFFFF !important;
        border-width: 1px 0 0 1px !important;
    }

    .vux-header .vux-header-title {
        font-size: .17rem !important;
    }

    .title-name {
        width: 100%;
        font-size: .2rem;
        font-family: PingFangSC-Medium;
        color: rgba(73, 73, 73, 1);
        line-height: .28rem;
        text-align: center;
        margin-top: .2rem;
    }

    .detail {
        width: 100%;
        height: auto;
    }

    .allLine {
        width: 90%;
        overflow: hidden;
        margin: 0.1rem auto;
        border-bottom: 1px solid #EFEFEF;
    }

    .allLine {
        padding-top: .1rem;
        padding-bottom: .08rem
    }

    .allLine span {
        display: table-cell;
        line-height: 1.44
    }

    .colorL {
        width: .74rem;
        height: .3rem;
        font-size: .14rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: .3rem;
        margin-left: 5.3%;
    }

    .colorW {
        height: .3rem;
        font-size: .14rem;
        font-family: PingFangSC-Medium;
        color: rgba(102, 102, 102, 1);
        line-height: .3rem;
        margin-left: .1rem;
    }

    .rights {
        width: .12rem;
        height: .12rem;
        display: inline-block;
        margin-left: 0.2rem;
        margin-top: .1rem;
        background: url(../../assets/images/icon-right.png) no-repeat;
        background-size: 100% 100%;
    }

    .color-d {
        color: rgba(185, 54, 71, 1);
    }
</style>
