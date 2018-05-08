<template>
    <div class="page-body disabled-tabbar">
        <view-box ref="viewBox" body-padding-top=".46rem">
            <r-header :rfs="contents"></r-header>
            <p class="allPic">
                <span class="bg-line"></span>
                <span class="picture">党员姓名:</span>
                <span class="numberz">{{content.partyname}}</span>
            </p>
            <p class="allPic">
                <span class="bg-line"></span>
                <span class="picture">活动时间:</span>
                <span class="numberz1">{{content.starttime|formatDuring}}~{{content.endtime|formatDuring}}</span>
            </p>
            <p class="allPic">
                <span class="bg-line"></span>
                <span class="picture">主要内容:</span>
            </p>
            <div class="artical">
                {{content.content}}
            </div>
            <p class="allPic">
                <span class="bg-line"></span>
                <span class="picture">活动图集</span>
                <span class="numberz">{{ num}}张</span>
            </p>
            <div class="img-show">
                <img class="previewer-demo-img" v-for="(item,index) in content.picture" :key="index" :src="item.msrc" @click="show(index)">
                <div v-transfer-dom>
                    <previewer :list="content.picture || []" ref="previewer" :options="options" @on-index-change="logIndexChange">
                    </previewer>
                </div>
            </div>

            <table width="90%" style="margin:0.1rem auto;">
                <tr>
                    <td width="50%">
                        <button class="btnRed" v-if="content.status==0" @click="reject()">驳回</button>
                    </td>
                    <td width="50%">
                        <button class="btnRed" v-if="content.status==0" @click="pass()">通过</button>
                    </td>
                </tr>
            </table>

            <button class="btnRed" v-if="content.status==2">已评分 (评分人：{{content.branch}})</button>
            <button class="btnRed" v-if="content.status==3">审核已驳回 (审核人：{{content.branch}})</button>            
        </view-box>
    </div>
</template>

<script>
import axios from 'axios';
import Xheader from '@/components/comother/rheader';
import { Previewer, TransferDom, ViewBox } from 'vux';
export default {
    directives: {
        TransferDom
    },
    components: {
        'r-header': Xheader,
        Previewer,
        ViewBox
    },
    filters: {
        formatDuring: function(value) {
            if (!value) {
                return '无';
            } else {
                Date.prototype.toLocaleString = function() {
                    let months = this.getMonth() + 1;
                    if (months < 10) {
                        months = '0' + months;
                    }
                    let dates = this.getDate();
                    if (dates < 10) {
                        dates = '0' + dates;
                    }
                    let hours = this.getHours();
                    if (hours < 10) {
                        hours = '0' + hours;
                    }
                    let minutes = this.getMinutes();
                    if (minutes < 10) {
                        minutes = '0' + minutes;
                    }
                    return this.getFullYear() + '.' + months + '.' + dates + ' ' + hours + ':' + minutes;
                };
                return new Date(value).toLocaleString();
            }
        }
    },
    methods: {
        show(index) {
            this.$refs.previewer.show(index);
        },
        reject(){
            axios.get('pstudy/reject', {
                    params: {
                        userid: this.$store.getters.user.userid,
                        studyid: this.$route.params.studyid
                    }
                })
                .then(res => {
                    if (res.success) {
                        this.$vux.alert.show({ title: res.msg,onHide(){
                                history.back(-1);
                            }});
                    } else {
                        this.$vux.alert.show({ title: res.msg });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        pass() {
            axios
                .get('pstudy/pass', {
                    params: {
                        userid: this.$store.getters.user.userid,
                        studyid: this.$route.params.studyid
                    }
                })
                .then(res => {
                    if (res.success) {
                        this.$vux.alert.show({ title: res.msg,onHide(){
                            history.back(-1);
                        }});
                    } else {
                        this.$vux.alert.show({ title: res.msg });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        spread() {
            this.spr = true;
            this.btnAn = !this.btnAn;
            this.btnPack = !this.btnPack;
        },
        folding() {
            this.spr = !this.spr;
            this.btnAn = !this.btnAn;
            this.btnPack = !this.btnPack;
        },
        noSpread() {
            this.noSpr = true;
            this.nobtnAn = !this.nobtnAn;
            this.nobtnPack = !this.nobtnPack;
        },
        noFolding() {
            this.noSpr = !this.noSpr;
            this.nobtnAn = !this.nobtnAn;
            this.nobtnPack = !this.nobtnPack;
        },
        logIndexChange(arg) {
            console.log(arg);
        },
        getDetail() {
            this.$http
                .get('pstudy/queryById?studyid=' + this.$route.params.studyid)
                .then(res => {
                    this.content = res.data;
                    this.content.picture = [];

                    this.num = res.data.pictures.length;
                    this.content.pictures.forEach(it => {
                        console.log(it);
                        var obj = {};
                        obj.msrc = 'http://www.dlbdata.cn/dangjian/picture/show?pictureId=' + it.pictureId;
                        obj.src = 'http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId=' + it.pictureId;
                        this.content.picture.push(obj);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getModule() {
            this.$http
                .get('pscoredetail/queryById?id=' + this.$route.params.moduleid)
                .then(res => {
                    this.contents.title = res.data.projectName + '评分';
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getDetail() {
            this.$http
                .get('pstudy/queryById?studyid=' + this.$route.params.studyid)
                .then(res => {
                    this.content = res.data;
                    this.content.picture = [];
                    this.num = res.data.pictures.length;
                    this.content.pictures.forEach(it => {
                        var obj = {};
                        obj.msrc = 'http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId=' + it.pictureId;
                        obj.src = 'http://www.dlbdata.cn/dangjian/picture/show?pictureId=' + it.pictureId;
                        this.content.picture.push(obj);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        },
        dataPick(s) {
            Date.prototype.toLocaleString = function() {
                return this.getFullYear() + '年' + (this.getMonth() + 1) + '月' + this.getDate() + '日';
            };
            return new Date(s).toLocaleString();
        }
    },
    mounted() {
        this.getDetail();
        this.getModule();
    },
    data() {
        return {
            contents: { title: '' },
            num: 0,
            activeData: {},
            picInfo: [],
            list: [],
            content: {},
            spr: false,
            noSpr: false,
            nobtnPack: false,
            nobtnAn: false,
            btnPack: false,
            btnAn: false,
            peopleNum: null,
            participants: null,
            Noparticipants: null,
            options: {
                getThumbBoundsFn(index) {
                    // find thumbnail element
                    let thumbnail = document.querySelectorAll('.previewer-demo-img')[index];
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect();
                    // w = width
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            }
        };
    }
};
</script>
<style scoped>
html,
body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
.page-body {
    display: flex;
    flex-direction: column;
}
.artical {
    width: 84%;
    height: auto;
    font-size: 0.14rem;
    font-family: PingFangSC-Regular;
    color: rgba(102, 102, 102, 1);
    line-height: 0.24rem;
    margin: 0.2rem 8% 0 8%;
    text-indent: 2em;
}
.artical p {
    margin-bottom: 0.1rem;
}
.allPic .bg-line {
    width: 0.04rem;
    height: 0.18rem;
    margin-left: 8%;
    background: url(../../assets/images/icon-rectangle.png) no-repeat;
    background-size: 100% 100%;
    display: block;
    float: left;
    margin-top: 0.07rem;
}
.picture {
    font-size: 0.14rem;
    font-family: PingFangSC-Semibold;
    color: rgba(51, 51, 51, 1);
    margin-left: 0.1rem;
    display: block;
    float: left;
}

.numberz{
	font-size:.14rem;
	font-family:PingFangSC-Medium;
	color:rgba(153,153,153,1);
	display:block;
	float: left;
	margin-left:.1rem;
}

.numberz1 {
    font-size: 0.12rem;
    font-family: PingFangSC-Medium;
    color: rgba(153, 153, 153, 1);
    margin-left: 0.1rem;
}
.allPic {
    height: 0.3rem;
    line-height: 0.3rem;
    overflow: hidden;
    margin-top: 0.2rem;
}
.img-show {
    width: 84%;
    height: auto;
    margin-left: 8%;
}
.img-show img {
    width: 49%;
    height: 1.5rem;
    margin-top: 0.1rem;
}
.img-show img:not(:first-child) {
    margin-left: 2%;
}
.img-left {
    width: 0.37rem;
    height: 0.37rem;
    position: absolute;
    left: 0.1rem;
    top: 3.15rem;
    z-index: 900;
}
.img-right {
    width: 0.37rem;
    height: 0.37rem;
    position: absolute;
    right: 0.1rem;
    top: 3.15rem;
    z-index: 900;
}
.color-num {
    color: rgba(185, 54, 71, 1);
}
.line-pic {
    width: 87.2%;
    margin: 0.1rem 4.8% 0.2rem 8%;
    height: 0.36rem;
    overflow: hidden;
}
.line-pic img {
    width: 0.36rem;
    height: 0.36rem;
    margin-left: 0.07rem;
    display: block;
    float: left;
}
.wz-fonts {
    font-family: PingFangSC-Medium;
    color: rgba(153, 153, 153, 1);
    line-height: 0.24rem;
    width: 87.2%;
    margin: 10px auto;
    word-spacing: 0.24rem;
    height: 44px;
    overflow: hidden;
    padding: 0;
    text-overflow: ellipsis;
    white-space: pre-wrap;
}
.wz-fonts.auto {
    height: auto;
    overflow: auto;
}
.wz-fonts span {
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    line-height: 22px;
    vertical-align: top;
}
.no-picture {
    width: 1.1rem;
    font-size: 0.2rem;
    font-family: PingFangSC-Semibold;
    color: rgba(51, 51, 51, 1);
    display: block;
    float: left;
    margin-left: 0.1rem;
}
.btnMore {
    width: 1.6rem;
    height: 0.3rem;
    border-radius: 15px;
    margin: 0.2rem auto;
    font-size: 0.1rem;
    font-family: PingFangSC-Medium;
    color: rgba(204, 204, 204, 1);
    border: 1px solid #e4e4e4;
    line-height: 0.3rem;
    text-align: center;
}
.down {
    width: 0.1rem;
    height: 0.1rem;
    display: inline-block;
    background: url(../../assets/images/icon-down.png) no-repeat;
    background-size: 100% 100%;
    margin-left: 0.05rem;
}
.up {
    width: 0.1rem;
    height: 0.1rem;
    display: inline-block;
    background: url(../../assets/images/icon-up.png) no-repeat;
    background-size: 100% 100%;
    float: right;
    margin-right: 0.2rem;
    margin-top: 0.1rem;
}
.btnRed {
    width: 89.4%;
    height: 0.4rem;
    background: rgba(185, 54, 71, 1);
    border-radius: 4px;
    font-size: 0.16rem;
    font-family: PingFangSC-Medium;
    color: rgba(255, 255, 255, 1);
    line-height: 0.4rem;
    text-align: center;
    position: relative;
    left: 5.3%;
    border: 0;
    top: 0.24rem;
}
.grayBtn {
    background: rgba(216, 216, 216, 1);
}
</style>
