<template>
	<div>
		<view-box ref="viewBox" body-padding-top=".46rem" body-padding-bottom=".55rem">
			<r-header :rfs='itegal'></r-header>
			<div class="header-list">
				<div class="list-left">
				<span class="left-now">当前支部：</span>
				<span class="left-active">花期银行第一支部</span>
				</div>
				<div class="right-btn" @click="showDet">切换<span></span></div>
			</div>
			<transition-group enter-active-class=" animated bounceInLeft" leave-active-class="animated bounceOutRight">
				<div v-show="topShow" v-for="(park,index) in parks" :key="index" class="bg-flag">
					{{park}}
				</div>
			</transition-group>
			<div class="points-table">
	            <flexbox :gutter="0">
	                <flexbox-item>姓名</flexbox-item>
	                <flexbox-item>支部书记</flexbox-item>
	                <flexbox-item>积分</flexbox-item>
	                <flexbox-item>操作</flexbox-item>
	            </flexbox>
	            <flexbox :gutter="0">
	                <flexbox-item>张海丽</flexbox-item>
	                <flexbox-item>韩式</flexbox-item>
	                <flexbox-item>28</flexbox-item>
	                <flexbox-item>
	                	<router-link :to="{name:'Audit'}">
	                	<button class="go-btn">去处理</button>
	                	</router-link>
	                </flexbox-item>
	            </flexbox>
	        </div>
		</view-box>
	</div>
</template>
<script>
import rHeader from '@/components/comother/rheader';
import {ViewBox,  Sticky, Panel, TransferDom, Flexbox, FlexboxItem,} from 'vux';
	export default{
		data(){
			return {
				itegal:{rights:'',title:'积分审核'},
				topShow:false,
				parks:[{part:'金领驿站'},{part:'花期银行第一支部'},{part:'花期银行第二支部'}]
				
			}
		},
		components:{
			'r-header':rHeader,
			ViewBox,
			Panel,
			Sticky,
			Flexbox,
			FlexboxItem
		},
		directives: {
   			TransferDom
  		},
		methods:{
			showDet(){
				this.topShow = !this.topShow
			}
		},
		mounted(){
		}
	}
</script>
<style scoped  lang="less">
	.header-list{width:calc(100% - 2px);height:.5rem;border-bottom:1px solid #E4E4E4;}
	.list-left{width:54%;margin:.15rem 0 .15rem 5.3%;height:.2rem;line-height:.2rem;font-size:.14rem;float:left;}
	.left-now{color:#666666;}
	.left-active{color:#333;}
	.right-btn{width:.6rem;height:.24rem;line-height:.24rem;color:#fff; background:rgba(244,151,74,1);border-radius: 4px;text-align: center;float:right;margin:.13rem 5.3% .13rem 0;padding-left:.07rem;}
	.right-btn span{width:.1rem;height:.1rem;display:block;float:right;margin:0.07rem ;background-image:url(../../assets/images/icon-downs.png);background-size: 100% 100%;}
	.pop-content{width:100%;height:1.8rem;background-color:rosybrown;}
	.vux-popup-dialog{background-color: transparent;}
	.vux-popup-dialog.vux-popup-top{top:.96rem;}
	.bg-flag{width:100%;height:1rem;background-color: yellow;}
	@import url("animate.css");
	.go-btn{
		padding: .05rem .08rem;
		border: 0;
		font-size:.15rem;
		color:#fff;
		line-height:.2rem;
		background:rgba(185,54,71,1);
		border-radius: 4px 
	}
	.points-table {
            box-sizing: border-box;
            border-radius: 5px;
            margin: 5px 0 30px;
            padding: 10px;
            color: #000;
            background: #fff;
            text-align: center;
            .vux-flexbox {
                &:first-child {
                    margin-bottom: 10px;
                    color: #a31525;
                }
                .vux-flexbox-item {
                    text-align: center;
                    &:last-child {
                        color: #a31525;
                    }
                }
            }
        }
</style>