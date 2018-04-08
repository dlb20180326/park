<template>
		<div class="detail">
			<div class="allLine" v-for="(context,index) in list" :key="index">
				<span class="colorL">{{context.left}}</span>
				<span :class="[context.isRed ? 'colorW colored':'colorW colorGreen']">{{context.right}}</span>
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
.allLine:nth-child(1){padding-top:.2rem;}
.allLine:nth-child(4n){padding-bottom:.2rem;border-bottom:1px solid #EFEFEF;margin-left:0px;}
.allLine:nth-child(4n+1){padding-top:.2rem;}
.allLine{width:100%;height:.3rem;overflow:hidden;}
.allLine span{display:block;float:left;}
.colorL{width:.74rem;height:.3rem;font-size:.14rem;font-family:PingFangSC-Regular;color:rgba(153,153,153,1);line-height:.3rem;margin-left:5.3%;}
.colorW{width:2rem;height:.3rem; font-size:.14rem;font-family:PingFangSC-Medium;color:rgba(102,102,102,1);line-height:.3rem;margin-left:.1rem;}

.allLine:nth-child(4n-1) .colorGreen{color:rgba(24,193,25,1);}
.allLine:nth-child(4n-1) .colored{color:rgba(185,54,71,1);}
</style>