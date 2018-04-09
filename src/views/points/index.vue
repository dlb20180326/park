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

		</view-box>
	</div>
</template>
<script>
import rHeader from '@/components/comother/rheader'
import {ViewBox,Sticky,Panel,TransferDom} from 'vux'
	export default{
		data(){
			return {
				itegal:{rights:'',title:'积分审核'},
				topShow:false
				
			}
		},
		components:{
			'r-header':rHeader,
			ViewBox,
			Panel,
			Sticky	
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
<style scoped>
	.header-list{width:calc(100% - 2px);height:.5rem;border-bottom:1px solid #E4E4E4;}
	.list-left{width:54%;margin:.15rem 0 .15rem 5.3%;height:.2rem;line-height:.2rem;font-size:.14rem;float:left;}
	.left-now{color:#666666;}
	.left-active{color:#333;}
	.right-btn{width:.6rem;height:.24rem;line-height:.24rem;color:#fff; background:rgba(244,151,74,1);border-radius: 4px;text-align: center;float:right;margin:.13rem 5.3% .13rem 0;padding-left:.07rem;}
	.right-btn span{width:.1rem;height:.1rem;display:block;float:right;margin:0.07rem ;background-image:url(../../assets/images/icon-downs.png);background-size: 100% 100%;}
	.pop-content{width:100%;height:1.8rem;background-color:rosybrown;}
	.vux-popup-dialog{background-color: transparent;}
	.vux-popup-dialog.vux-popup-top{top:.96rem;}
</style>