<template>
	<div style="height:100%;">
   		<view-box ref="viewBox" body-padding-top=".46rem" body-padding-bottom=".55rem">
			<x-header :left-options="{showBack: false}" class="bgColors" slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">支部党员积分评定</x-header>
			<flexbox>
      			<flexbox-item v-for="(info,index) in collect" :key="index">
      				<router-link :to="{name:'Members'}">
  					<div class="flex-demo">
  						<div class="iconImg" :style="{backgroundImage:'url('+info.bgImg+')'}"></div>
  						<div class="fonts-label">{{info.label}}</div>
  					</div>
  					<div class="flag">{{info.score}}</div>
  					</router-link>
      				</flexbox-item>
    		</flexbox>
			<!--<footers :selec='select'></footers>-->
   		</view-box>
 	</div>
</template>
<script>
import {XHeader,Flexbox,FlexboxItem,ViewBox} from 'vux'
/*import footers from '../layout/footer'*/
	export default {
		data(){			
			return {
				collect:[{bgImg:require('@/assets/images/icon-idea.png'),label:'政治学习',score:'10分'},		{bgImg:require('@/assets/images/icon-life.png'),label:'组织生活双报道',score:'20分'},
						{bgImg:require('@/assets/images/icon-much.png'),label:'党费缴纳',score:'10分'},		{bgImg:require('@/assets/images/icon-idea.png'),label:'思想汇报',score:'15分'},		{bgImg:require('@/assets/images/icon-before.png'),label:'先锋作用',score:'10分'},		{bgImg:require('@/assets/images/icon-law.png'),label:'遵纪守法一票否决',score:'20分'},
						{bgImg:require('@/assets/images/icon-server.png'),label:'公益服务',score:'10分'}],
						select:{infos:'积分详情',inte:false}
			}
		},
		components:{
			XHeader,
			Flexbox,
			FlexboxItem,
			ViewBox
//			footers
		},
		methods:{

		}
	}
</script>

<style scoped>
html,body{
	width:100%;
	height:100%;
	overflow-x:hidden;
}
.bgColors{background: linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1)); 
		background: -webkit-linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1));  
        background: -o-linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1));  
        background: -moz-linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1));  
        background: -mos-linear-gradient(to right,rgba(185,54,71,1),rgba(155,10,26,1));}
.vux-header .vux-header-left a, .vux-header .vux-header-left button, .vux-header .vux-header-right a, .vux-header .vux-header-right button{color:#FFFFFF!important;font-size:.12rem!important;}
.vux-header .vux-header-left, .vux-header .vux-header-right{color:#FFFFFF!important;}
.vux-header .vux-header-left .left-arrow:before{border:1px solid #FFFFFF!important;border-width:1px 0 0 1px!important;}
.vux-header .vux-header-title{font-size:.17rem!important;}
.vux-flexbox{width:89.4%;height:auto;margin:.13rem auto .32rem auto;flex-wrap: wrap}
.flex-demo{width:100%;height:0.77rem;background:rgba(246,246,246,1);border-radius: 2px;padding-top:.24rem;}
.vux-flexbox-item:nth-child(odd){margin-left:0px!important;}
.vux-flexbox-item:nth-child(even){margin-right:-1%;}
.vux-flexbox .vux-flexbox-item{min-width: 49%;width: 49%;margin-bottom:.1rem;-webkit-flex:0;position:relative;}
.iconImg{width:.24rem;height:.25rem;margin:0 auto .07rem auto;background-repeat:no-repeat;background-size:100% 100%;}
.fonts-label{width:100%;height:.21rem;line-height:.21rem;text-align: center;font-size:.14rem;color:#5B5B5B;}
.flag{width:.24rem;height:.42rem;position:absolute;right:.15rem;top:-0.08rem;background: url(../../assets/images/icon-flag.png) no-repeat;font-size:.12rem;color:#FFFFFF;writing-mode:lr-tb;text-align:center;line-height:.16rem;}
</style>