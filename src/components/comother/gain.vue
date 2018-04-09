<template>
		<div class="detail">
			<div class="allLine" v-for="(context,index) in list" :key="index">
				<!--<span :class="[context.isRed ? 'colorW colored':'colorW colorGreen']">{{context.scoreTime}}</span>-->
				<span class="colorL">时间：</span>
				<span class="colorW">{{context.scoreTime}}</span>
				<span class="colorL">积分类型：</span>
				<span class="colorW">{{context.detailTitle}}</span>
				<span class="colorL">积分变动：</span>
				<span class="colorW" :class="[context.score >= 0?'colored':'colorGreen']">{{context.score}}</span>
				<span class="colorL">审核人：</span>
				<span class="colorW">{{context.approvedName}}</span>
				<span class="line-bottom"></span>
				
			</div>
		</div>
</template>
<script>
	export default {
		data(){
			return {
			}
		},
		components:{
			
		},
		mounted(){
			
			

		},
		props:['list']
	}
</script>

<style scoped>
.detail{
	width:100%;
	height:auto;
}
.allLine:nth-child(n){padding-top:.2rem;}
.allLine{width:100%;overflow:hidden;}
.allLine span{display:block;float:left;}
.colorL{width:.74rem;height:.3rem;font-size:.14rem;font-family:PingFangSC-Regular;color:rgba(153,153,153,1);line-height:.3rem;margin-left:5.3%;}
.colorW{width:2rem;height:.3rem; font-size:.14rem;font-family:PingFangSC-Medium;color:rgba(102,102,102,1);line-height:.3rem;margin-left:.1rem;}
.line-bottom{height:.2rem;width:100%;border-bottom:1px solid #EFEFEF;}
.colorGreen{color:rgba(24,193,25,1);}
.colored{color:rgba(185,54,71,1);}
</style>