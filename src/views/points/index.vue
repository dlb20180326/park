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
                            <span>{{itegral}}</span>
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
                            <div class="title">
                                <b>{{index+1}}. {{progres.projectName}}</b>
                                <div class="space"></div>
                                <span class="number">{{progres.totalScore}}</span>/{{progres.score}}
                            </div>
                            <div class="content">
                                <x-progress :percent="progres.totalScore/progres.score*100" :show-cancel="false"></x-progress>
                            </div>
                            <div class="content">
                                <x-button mini type="warn" v-if="projectList[progres.id]">
                                    点击+积分
                                </x-button>
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
                            <flexbox>
                                <flexbox-item class="label">
                                    审核人：
                                </flexbox-item>
                                <flexbox-item>
                                    {{knoew.approvedName}}
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
    		axios.get('/dangjian/pscoreparty/getProjectScoreByUserId',{
    			params:{
    				userId:this.$store.getters.user.userId,
    				year:this.years
    			}
    		}).then( res => {
    			this.proTotal = res.data;
    		}).catch(err => { 
    			console.log('fail'+err);
    		})
    	},
    	project(){
    		axios.get('/dangjian/pscoredetail/queryByRoleMenu',{
    			params:{
    				roleid:4,
    			}
    		}).then( res => {
    			let data = res.data;
    			let obj = {};
    			for(var i=0;i<data.length;i++){
    				obj[data[i].projectId] = data[i];
    			}
    			this.projectList  = obj;
    		}).catch(err => { 
    			console.log('fail'+err);
    		})
    		
    	},
    	getDetail(){
    		axios.get('/dangjian/pscoreparty/queryByUserId',{
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
    		let that = this;
    		that.score();
    		axios.get('/dangjian/pscorelevel/getList')
    		.then( res => {
    			this.rate = res.data;
    			
    			console.log(that.itegral);
    			for(let c in this.rate){
    			}
    		}).catch(err => { 
    			console.log('fail'+err);
    		})
    		
    	},
    	score(){
    		axios.get('/dangjian/pscoreparty/getSumScoreByUserId',{
    			params:{
    				userId:this.$store.getters.user.userid,
					year:new Date().getFullYear()	
    			}
    		})
    		.then( res => {
    			this.itegral = res.data;
/*    			if(this.itegral>=0 && this.itegral<=59){
    				this.results = '不及格'	
    			}else if(this.itegral>=60 && this.itegral<=69){
    				this.results = '一般'	
    			}else if(this.itegral>=70 && this.itegral<=89){
    				this.results = '良好'	
    			}else if(this.itegral>=90 && this.itegral<=99){
    				this.results = '优秀'
    			}else{
    				this.results = '先锋党员'
    			}*/
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
   		
   		
   	}
};
</script>

<style lang="less" scoped>
.page-body {
    display: flex;
    flex-direction: column;
    background-color: #efefef;
}
.box {
    flex: 1;
    overflow-y: auto;
}
.head,
.body {
    background-color: #fff;
    // line-height: 2;
    padding: 0.15rem;
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
    background-color: #efefef;
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
        margin-top: 0.15rem;
        text-align: center;
    }
    .space {
        display: inline-block;
        width: 0.5rem;
    }
}
</style>
<style scoped>
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
</style>
