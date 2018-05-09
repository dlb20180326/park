<template>
    <div class="page-body">
        <view-box ref="viewBox">
            <div class="header">
                <div class="header-top">
                    <div class="top-head">
                        <div class="top-left">{{dateTime}}，{{userAbout.name}}</div>
                        <div class="top-right" :style="{backgroundImage: 'url('+userAbout.avatar+')'}"></div>
                    </div>
                    <div class="top-second">
                        <div class="second-left">
                            <span class="color-light">片区:</span>
                            <span class="color-dark">{{partAbout.address }}</span>
                        </div>
                        <div class="second-right">
                            <span class="color-light">党支部书记:</span>
                            <span class="color-dark">{{partAbout.partyBranch}}</span>
                        </div>
                    </div>
                    <div class="top-second2">
                        <div class="left-second">
                            <span class="color-light" style="position:relative;">党支部:</span>
                            <span class="color-dark" style="position:absolute;">{{partAbout.departmentname}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="annual">年度参与</div>
                <flexbox>
                    <flexbox-item v-for="(user,index) in users" :key='index'>
                        <div class="flex-demo" @click="ItemClick(index)">
                            <div class="fonts-au">{{user.fonts}}</div>
                            <div class="integral">{{user.integral}}</div>
                        </div>
                    </flexbox-item>
                </flexbox>
                <div id="echartShow">

                </div>
            </div>

        </view-box>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem, Tabbar, TabbarItem, ViewBox, cookie } from 'vux';
import echarts from 'echarts';
import axios from 'axios';

export default {
    data() {
        return {
            users: [{ fonts: '年度积分',integral:0}, {fonts: '活动次数',integral:0}],
            userAbout: {},
            dateTime: '',
            charts: '',
            partAbout: {},
            years:new Date().getFullYear()
        };
    },
    components: {
        Flexbox,
        FlexboxItem,
        Tabbar,
        TabbarItem,
        ViewBox
    },
    mounted() {
        let datime = new Date().getHours();
        if ((datime >= 5) && (datime < 8)) {
            this.dateTime = '早上好';
        } else if ((datime >= 8) && (datime < 11)) {
            this.dateTime = '上午好';
        } else if ((datime >= 11) && (datime < 13)) {
            this.dateTime = '中午好';
        } else if ((datime >= 13) && (datime < 19)) {
            this.dateTime = '下午好';
        } else {
            this.dateTime = '晚上好';
        }

        this.$nextTick(function() {
//            this.drawAxis('echartShow');
        });
        this.userName();
        this.infoDetail();
        this.getUserByScoreInfo();
        this.getUserByActiveInfo();
        this.getScoreByType();
    },
    methods: {
        drawAxis(id,arr1,arr2) {
            let myCharts = echarts.init(document.getElementById(id));
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                radar: [
                    {
                        name: {
                            color: 'rgba(45, 45, 45, 1)',
                            fontFamily: 'PingFang-SC-Regular',
                            fontSize: 12,
                            lineHeight: 17
                        },
                        axisLine: {
                            lineStyle: {
                                color: ['rgba(255, 206, 140, 1)'],
                                opacity: 0.5
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: ['#ffe8c6']
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['#fff4e4', '#ffe8c6', '#fff6e9']
                            }
                        },
                        indicator: arr1,
                        center: ['50%', '50%'],
                        radius: 60
                    }
                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        itemStyle: {
                            normal: {
                                lineStyle: { color: '#F5A39C', width: 2 },
                                areaStyle: { color: '#F59D8E', type: 'default' }
                            }
                        },
                        data: [
                            {
                                value: arr2,
                                name: '分数'
                            }
                        ]
                    }
                ]
            };

            myCharts.setOption(option);
            window.onresize = function() {
                myCharts.resize();
            };
        },
        infoDetail() {
            axios.get('pdepartment/queryById', {
                params: {
                    departmentid: this.$store.getters.user.departmentid
                }
            })
            .then(res => {
                this.partAbout = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        userName() {
            axios.get('ppartymember/queryByUserId', {
                params: {
                    userid: this.$store.getters.user.userid
                }
            })
            .then(res => {
                this.userAbout = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        getScoreByType(){
            axios.get('pscoreparty/getProjectScoreByUserId', {
                params: {
                    userId: this.$store.getters.user.userid,
                    year:new Date().getFullYear()
                }
            }).then(res => {
                let scoreType = res.data;
                let b = scoreType.map(function(value,key,arr){
                    return { text: value.projectName, max: value.score };
                });
                let c = scoreType.map(function(value,key,arr){
                    return value.totalScore;
                });
                this.drawAxis('echartShow',b,c)
            })
            .catch(err => {
                console.log(err);
            });
        },
        getUserByActiveInfo(){
            axios({
                url:'active/getParticipateCount',
                method:'post',
                headers: {'contentType':'application/x-www-form-urlencode'},
                params:{
                  userId: this.$store.getters.user.userid,
                  year: new Date().getFullYear()
                }
            }).then(res => {
                this.users[1].integral = res.data;
            }).catch(err => {
                console.log(err);
            });
        },
        getUserByScoreInfo(){
            axios.get('pscoreparty/getSumScoreByUserId', {
                params: {
                    userId: this.$store.getters.user.userid,
                    year:new Date().getFullYear()
                }
            }).then(res => {
                this.users[0].integral = res.data || 0;
            }).catch(err => {
                console.log(err);
            });
        },
        ItemClick(index){
            if(index == 0){
                this.$router.push("points/");
            }
            else{
                this.$router.push("active/activeDetail");
            }
        }
    }
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 1.6rem;
    background: linear-gradient(to right, rgba(185, 54, 71, 1), rgba(155, 10, 26, 1));
}
.header-top {
    width: 90%;
    height: 2.05rem;
    border-radius: 5px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 8px 0 rgba(174, 174, 174, 0.5);
    /*margin: 0 auto;*/
    position:relative;
    top:.24rem;
    left:5%;
}
.top-head {
    width: 86%;
    height: 1.14rem;
    margin: 0 auto;
    border-bottom: 1px solid #ededed;
}
.top-left {
    height: 0.32rem;
    font-size: 0.18rem;
    font-family: PingFangSC-Semibold;
    color: rgba(62, 62, 62, 1);
    line-height: 0.25rem;
    margin: 0.49rem 0 0.21rem 0.24rem;
    font-weight: 600;
    float: left;
}
.top-right {
    width: 0.66rem;
    height: 0.66rem;
    font-weight: 600;
    float: right;
    margin: 0.24rem 0.2rem 0.15rem 0;
    background-repeat:no-repeat;
    background-size: 100% 100%;
}
.top-second2 {
    width: 82%;
    margin: 0 auto;
    font-size: 0.14rem;
    line-height: 0.17rem;
    padding-top: 0.32rem;
}
.top-second{
    width: 82%;
    margin: 0 auto;
    font-size: 0.14rem;
    line-height: 0.17rem;
    padding-top: 0.21rem;
}
.second-left {
    width: 1.32rem;
    height: 0.17rem;
    float: left;
    overflow: hidden;
}

.second-right {
    float: right;
    margin-right: 0px;
}

.left-second {
    width: 100%;
    height: 0.17rem;
    float: left;
}
.color-light {
    font-family: PingFang-SC-Medium;
    color: rgba(153, 153, 153, 1);
}
.color-dark {
    font-family: PingFang-SC-Medium;
    color: rgba(102, 102, 102, 1);
}
.content {
    width: 100%;
    background-color: #fff;
}
.annual {
    width: 93.3%;
    height: 0.32rem;
    font-size: 0.2rem;
    font-family: PingFangSC-Semibold;
    color: rgba(49, 49, 49, 1);
    line-height: 0.28rem;
    margin: 0.9rem 0rem 0.13rem 6.6%;
    font-weight: 600;
}
.fonts-au {
    width: 100%;
    height: 0.2rem;
    font-size: 0.14rem;
    font-family: PingFang-SC-Medium;
    color: rgba(49, 49, 49, 1);
    line-height: 20px;
    margin: 0 auto;
    padding-top: 0.13rem;
    text-align: center;
}
.integral {
    width: 0.55rem;
    height: 0.37rem;
    font-size: 0.26rem;
    font-family: PingFang-SC-Medium;
    color: rgba(250, 122, 0, 1);
    line-height: 0.37rem;
    text-align: center;
    margin: 0.04rem auto 0.1rem auto;
}
.vux-flexbox {
    width: 89.4%;
    height: 0.8rem;
    margin: 0.13rem auto 0.32rem auto;
}
.flex-demo {
    width: 98%;
    height: 0.8rem;
    background: rgba(246, 246, 246, 1);
    border-radius: 2px;
}
.vux-flexbox-item:nth-child(2) {
    margin-right: -1%;
}
#echartShow {
    width: 76%;
    height: 2.1rem;
    margin: 0 auto;
}
.weui-tabbar {
    background-color: #ffffff;
    width: 100%;
    position: fixed;
}
.weui-tabbar__item {
    padding: 2px 0 0;
}
@media only screen and (min-width: 200px) and (max-width: 361px) {
    .top-left {
        margin: 0.49rem 0 0.24rem 0.15rem;
    }
    .top-right {
        margin: 0.24rem 0.2rem 0.15rem 0;
    }
}
</style>
