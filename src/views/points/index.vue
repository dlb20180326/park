<template>
    <div class="page-body">
        <x-header :left-options="{showBack: false}">
            党员积分
        </x-header>
        <div class="box">
            <div class="head">
                <flexbox>
                    <flexbox-item class="avatar">
                        <img src="@/assets/images/icon-head.png">
                    </flexbox-item>
                    <flexbox-item>
                        <div class="label">积分周期：</div>
                        <div>2018年1月1日 - 12月31日</div>
                    </flexbox-item>
                </flexbox>
                <flexbox :gutter="15">
                    <flexbox-item>
                        <div class="piece">
                            <div>现党员积分</div>
                            <span>{{itegral || 0.0}}</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="piece">
                            <div>年度党员评级</div>
                            <span>{{results}}</span>
                        </div>
                    </flexbox-item>
                </flexbox>
            </div>
            <div class="body">
                <tab v-model="tabIndex" :line-width="5" active-color="#666" bar-active-color="#a0333b" custom-bar-width="1rem">
                    <tab-item>
                        <b>积分进度</b>
                    </tab-item>
                    <tab-item>
                        <b>获取明细</b>
                    </tab-item>
                </tab>
                <transition name="fade">
                    <div class="tab-content" v-if="tabIndex===0">
                        <div class="item-detail" v-for="(progres,index) in proTotal">
	                            <div class="title cl">
	                                <b>{{index+1}}. {{progres.projectName}}</b>
	                                <div class="space"></div>
	                                <span class="number">{{progres.totalScore}}</span>/{{progres.score}}
                                    <span class="fr" v-if="progres.id === 1 ||progres.id === 2 || progres.id === 6">审批进度</span>
	                            </div>
	                            <div class="content">
	                                <x-progress :percent="progres.totalScore/progres.score*100" :show-cancel="false"></x-progress>
	                            </div>
	                            <router-link :to="{name:'Dues'}" v-if="progres.id === 7">
	                            <div class="content">
	                                <x-button mini type="warn" v-if="projectList[progres.id]">
	                                    点击+积分
	                                </x-button>
	                            </div>
	                            </router-link>

                                <div class="content"  v-else-if="projectList[progres.id]">
                                    <router-link :to="'points/addPoint/'+progres.id+'/'+ projectList[progres.id].id ">
                                    <x-button mini type="warn" v-if="projectList[progres.id]">
                                        点击+积分
                                    </x-button>
                                    </router-link>
                                </div>

                        </div>
                    </div>
                    <div class="tab-content" v-if="tabIndex===1">
                        <div class="item-detail" v-for="(knoew,index) in getList" :key="index">
                            <flexbox>
                                <flexbox-item class="label">
                                    获取时间：
                                </flexbox-item>
                                <flexbox-item>
                                   {{dataPickers(knoew.scoreTime)}}
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    积分类型：
                                </flexbox-item>
                                <flexbox-item>
                                   {{knoew.detailTitle}}
                                </flexbox-item>
                            </flexbox>
                            <flexbox v-if="knoew.approvedName">
                                <flexbox-item class="label">
                                    审核人：
                                </flexbox-item>
                                <flexbox-item>
                                    {{knoew.approvedName}}
                                </flexbox-item>
                            </flexbox>
                            <flexbox v-if="!knoew.approvedName">
                                <flexbox-item class="label">
                                    加分人：
                                </flexbox-item>
                                <flexbox-item>
                                    {{knoew.adderName}}
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    积分变动：
                                </flexbox-item>
                                <flexbox-item>
                                    <span class="number" :class="[knoew.score >= 0?'colored':'colorGreen']">{{knoew.score}}</span>
                                </flexbox-item>
                            </flexbox>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

        <!--弹出框-->
        <div class="swiper-all">
            <ul class="cl">
                <li class="swiper-one">
                    <div class="swiper-one-inner">
                        <h4 class="sinfo-title pr4"><b class="sinfo-border"></b><span>审批人：</span><span class="text-gray">张一山</span></h4>
                        <h4 class="sinfo-title pr4"><b class="sinfo-border"></b><span class="vb">党员姓名：</span><span class="text-gray vb">张一山</span></h4>
                        <h4 class="sinfo-title"><b class="sinfo-border"></b><span>时间：</span><span class="text-gray">2018</span></h4>
                        <h4 class="sinfo-title"><b class="sinfo-border"></b><span>主要内容：</span></h4>
                        <div class="text-gray-box">
                            党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费
                        </div>
                        <h4 class="sinfo-title"><b class="sinfo-border"></b><span>政治学习图片：</span><span class="text-gray">18张</span></h4>
                        <div class="show-list cl">
                            <ul>
                                <li>
                                    <div class="preview">
                                        <img src="@/assets/images/icon-head.png">
                                    </div>
                                </li>
                                <li>
                                    <div class="preview">
                                        <img src="@/assets/images/icon-head.png">
                                    </div>
                                </li>
                                <li>
                                    <div class="preview">
                                        <img src="@/assets/images/icon-head.png">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="swiper-one">
                    <div class="swiper-one-inner">
                        <h4 class="sinfo-title pr4"><b class="sinfo-border"></b><span>审批人：</span><span class="text-gray">张一山</span></h4>
                        <h4 class="sinfo-title pr4"><b class="sinfo-border"></b><span class="vb">党员姓名：</span><span class="text-gray vb">张一山</span></h4>
                        <h4 class="sinfo-title"><b class="sinfo-border"></b><span>时间：</span><span class="text-gray">2018</span></h4>
                        <h4 class="sinfo-title"><b class="sinfo-border"></b><span>主要内容：</span></h4>
                        <div class="text-gray-box">
                            党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费党员按月足额缴纳党费
                        </div>
                        <h4 class="sinfo-title"><b class="sinfo-border"></b><span>政治学习图片：</span><span class="text-gray">18张</span></h4>
                        <div class="show-list cl">
                            <ul>
                                <li>
                                    <div class="preview">
                                        <img src="@/assets/images/icon-head.png">
                                    </div>
                                </li>
                                <li>
                                    <div class="preview">
                                        <img src="@/assets/images/icon-head.png">
                                    </div>
                                </li>
                                <li>
                                    <div class="preview">
                                        <img src="@/assets/images/icon-head.png">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bg-cross"></div>
        <div class="bg-dark"></div>
    </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem, Tab, TabItem, XProgress, XButton } from 'vux';
import axios from 'axios'
export default {
    components: { XHeader, Flexbox, FlexboxItem, Tab, TabItem, XProgress, XButton },
    data() {
        return {
            tabIndex: 0,
            percent:0,
            collect:[],
            years:new Date().getFullYear(),
            proTotal:[],
            projectList:{},
            getList:[],
            rate:[],
            itegral:'',
            results:''
        };
    },
    methods:{
    	progress(){
    		axios.get('pscoreparty/getProjectScoreByUserId',{
    			params:{
    				userId:this.$store.getters.user.userid,
    				year:this.years
    			}
    		}).then( res => {
    			this.proTotal = res.data;
    		}).catch(err => {
    			console.log('fail'+err);
    		})
    	},
    	project(){
    		axios.get('pscoredetail/queryByRoleMenu',{
    			params:{
    				roleid:4,
    			}
    		}).then( res => {
    			let data = res.data;
    			let obj = {};
    			for(var i=0;i<data.length;i++){
    				obj[data[i].projectId] = data[i];
    				this.projectId = obj[data[i].projectId]
    			}
    			this.projectList  = obj;
    		}).catch(err => {
    			console.log('fail'+err);
    		})

    	},
    	getDetail(){
    		axios.get('pscoreparty/queryByUserId',{
    			params:{
    				userid:this.$store.getters.user.userid,
    				year:this.years
    			}
    		}).then( res => {
    			this.getList = res.data;
    		}).catch(err => {
    			console.log('fail'+err);
    		})

    	},
    	rating(){
    		/*let that = this;
    		that.score();
    		axios.get('pscorelevel/getList')
    		.then( res => {
    			this.rate = res.data;
    			for(let c in this.rate){
    				if(that.itegral >= this.rate[c].min && that.itegral <= this.rate[c].max){
    					this.results = this.rate[c].level
    				}
    			}
    		}).catch(err => {
    			console.log('fail'+err);
    		})*/
            this.results ='暂无';
    	},
    	score(){
    		axios.get('pscoreparty/getSumScoreByUserId',{
    			params:{
    				userId:this.$store.getters.user.userid,
					year:new Date().getFullYear()
    			}
    		})
    		.then( res => {
    			this.itegral = res.data;
    		}).catch(err => {
    			console.log('fail'+err);
    		})

    	},
    	dataPickers(dates){
    		let times = new Date(dates).toLocaleString()
         	Date.prototype.toLocaleString = function() {
          		return this.getFullYear() + "年" + (this.getMonth()+1) + "月" + this.getDate() + "日 "
    		};
    		return times;

    	}


    },
   	mounted(){
   		this.progress();
   		this.project();
   		this.getDetail();
   		this.rating();
        this.score();

   	}
};
</script>

<style lang="less" scoped>
ol,ul,li{
    list-style:none;
}
.bg-dark{position:fixed;left:0;top:0;width:100%;height:100%;z-index:998;opacity:0.3;background-color:#000;filter:alpha(opacity=30)}
.bg-cross{position:fixed;left:0;z-index:1000;
    width: .4rem;height: .4rem;right: 0;display: inline-block;margin: auto;
    bottom:12%;
background-image:url(../../assets/images/icon-del.png);background-size:contain;background-repeat:no-repeat;background-position:50% 50%;
}

.swiper-all{
    position: absolute;
    left:5%;
    top:20%;
    bottom:20%;
    right:0;
}
.swiper-one{
    position: relative;
    width: 390px;
    float: left;
    border-radius: 5px;
    background: #fff;
    z-index: 1001;
    height: 100%;
    margin-right: 20px;
}
.swiper-one-inner{
    padding:.3rem .2rem;
}
.sinfo-title{
    height: .16rem;
    line-height: .16rem;
    font-size: .14rem;
    margin-bottom: .16rem;
    vertical-align: top;
    overflow: hidden;
    text-overflow:ellipsis ;
}
.sinfo-title.pr4{
    padding-right:1rem;
}
.sinfo-title span{
    vertical-align: top;
}
.sinfo-title span.vb{
    vertical-align:top;
}
.sinfo-title .text-gray{
    color:#999;
    vertical-align: top;
}
.sinfo-border{
    width: 5px;
    height:.16rem;;
    background: #b93647;
    border-radius: 4px;
    display: inline-block;
    vertical-align: top;
    margin-right: .1rem;
}
.text-gray-box{
    margin-bottom:.16rem;
    line-height: 1.6;
    color:#999;
    font-size: .14rem;
    word-break: break-all;
    word-wrap: break-word;
}
.show-list{padding:0 0 0.1rem;}
.show-list.border0{border-bottom:0;padding-bottom: 0;}
.show-list ul{font-size:0;list-style:none;}
.show-list ul li{font-size:0;display:inline-block;margin-right:.1rem;position:relative;vertical-align:top;
    width:.6rem;height:.6rem;overflow:hidden;margin-bottom:.2rem;}
.show-list ul li:first-child{margin-left:0;}
.show-list .operate{display:none;background:rgba(33,33,33,.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#b2404040, endColorstr=#b2404040);z-index:5;position:absolute;bottom:0;left:0;right:0;height:12px;padding-bottom:7px;font-size:12px;color:#fff;text-align: center}
.show-list .info{line-height:.6rem;text-align:center}
.show-list .preview{width:0.6rem;height:.6rem;z-index:4;line-height:.6rem;font-family:arial;background-color:#fff;
    background-repeat:no-repeat;position:absolute;bottom:0;left:0;text-align:center;right:0;cursor: pointer;border:1px solid #fff;box-sizing: border-box;}
.show-list .preview img{max-height:.6rem;max-width:.6rem;vertical-align:middle;}
.page-body {
    display: flex;
    flex-direction: column;
    background-color: #efefef;
}
.fr{
    float:right;
    margin-right: 20px;
    color:#ea8031;
}
.box {
    flex: 1;
    overflow-y: auto;
}
.head{
    background-color: #fff;
     line-height: 2;
    padding: 0.1rem;
}
.body{
	 background-color: #fff;
     line-height: 2;
}
.head {
    .label {
        font-size: 0.14rem;
        color: #999;
    }
}
.body {
    flex: 1;
    margin-top: 0.15rem;
}
.vux-flexbox-item.avatar {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex: 0 0 auto;
    width: 1rem;
    min-height: 0.7rem;
    img {
        width: 0.6rem;
        height: 0.6rem;
        margin-top: 0.05rem;
        border-radius: 50%;
        box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.15);
        background-color: rgba(0, 0, 0, 0.03);
    }
}
.vux-flexbox-item.label {
    flex: 0 0 auto;
    width: 0.8rem;
    color: #999;
}
.piece {
    margin-top: 0.1rem;
    padding: 0.1rem;
    border-radius: 5px;
    background-color: rgba(246,246,246,1);
    text-align: center;
    span {
        font-size: 0.24rem;
        color: #ea8031;
    }
}
.item-detail {
    margin-top: 0.05rem;
    padding: 0.15rem 0.1rem;
    border-top: 1px solid #eee;
    &:first-child {
        border-top: 0;
    }
    .title {
        color: #666;
    }
    .content {
       margin: .15rem auto;
        text-align: center;
        width:89.3%;
    }
    .space {
        display: inline-block;
        width: 0.5rem;
    }
}
</style>
<style scoped>
.vux-tab .vux-tab-item{
	color:#999!important;
}
.vux-tab .vux-tab-selected{
	color: #333!important;
}
.number{
	color: #B93647;
}
.weui-btn_warn{
	background-color:#B93647;
}
.vux-tab-warp>>>.vux-tab-bar-inner {
    border-radius: 5px;
}
.vux-tab-warp>>>.vux-tab .vux-tab-item {
    background: transparent;
    font-size: 0.18rem;
}
.weui-progress>>>.weui-progress__bar {
    height: 0.2rem;
    border-radius: 0.2rem;
}
.weui-progress>>>.weui-progress__inner-bar {
    border-radius: 0.2rem;
    background-color: #ea8031;
}
.colorGreen{color:rgba(24,193,25,1);}
.colored{color:rgba(185,54,71,1);}
.cl {
    *zoom: 1
}

.cl:after {
    clear: both;
    content: '\20';
    display: block;
    height: 0;
    visibility: hidden
}
</style>
