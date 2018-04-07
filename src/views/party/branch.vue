<template>
	<div style="height:100%;">
   		<view-box ref="viewBox" body-padding-top=".46rem" body-padding-bottom=".55rem">
			<x-header :left-options="{showBack: false}" class="bgColors" slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">支部党员信息</x-header>
			<div class="title-name">花期银行第二党支部党员信息一览</div>
			<div class="detail">
			<!--	<div class="allLine" v-for="(context,index) in listinfo" :key="index">-->
				<div class="allLine">
					
					<span class="colorL">姓名：</span>
					<span class="colorW">{{listinfo.name}}</span>
					<span class="colorL">性别：</span>
					<span class="colorW">{{listinfo.sex}}</span>
					<span class="colorL">年龄：</span>
					<span class="colorW">{{listinfo.age}}</span>
					<span class="colorL">转出支部：</span>
					<span class="colorW">{{listinfo.OutZb}}</span>
					<span class="colorL">现有积分：</span>
					<span class="colorW color-d">{{listinfo.id}}</span>
					<span class="rights"></span>
					<span class="line-bottom"></span>
				</div>
			</div>
			<!--<footers :selec='select'></footers>-->
   		</view-box>
 	</div>
</template>
<script>
import {XHeader,ViewBox,cookie} from 'vux'
import axios from 'axios'
/*import footers from '../layout/footer'*/
	export default {
		data(){
/*			let listinfo = [{name:'王阿斯',sex:'男',age:23,roll:'花期银行第一支部',now:5},{name:'王阿斯',sex:'男',age:23,roll:'花期银行第一支部',now:0}];*/
			
			return {
				listinfo:{},
				select:{infos:'党员信息',acin:false},
				userId:cookie.get('userId')
				
				
			}
		},
		components:{
			XHeader,
			ViewBox
//			footers
		},
		methods:{
			infor(){
				axios.get('/dangjian/ppartymember/queryByUserId',{
		        	params:{
		        		userid:2
		        	}
		       }).then(res =>{
					}).catch(err =>{
						this.listinfo = err.data;
						
						console.log(this.listinfo)
					})
				
			}
		},
		mounted(){
			this.infor();
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
.title-name{width:100%;height:.28rem; font-size:.2rem;font-family:PingFangSC-Medium;color:rgba(73,73,73,1);line-height:.28rem;text-align:center;
margin-top: .2rem;}
.detail{
	width:100%;
	height:auto;
}
.allLine:nth-child(n){padding-top:.2rem;}
.allLine{width:76%;height:1.7rem;margin:0 18.7% 0 5.3%;}
.allLine span{display:block;float:left;margin-bottom:0.08rem;}
.colorL{width:.7rem;height:.2rem; font-size:.14rem;font-family:PingFangSC-Regular;color:rgba(153,153,153,1);line-height:.2rem;}
.colorW{width:1.6rem;height:.2rem; font-size:.14rem;font-family:PingFangSC-Medium;color:rgba(102,102,102,1);line-height:.2rem;margin-left:.1rem;}
.rights{width:.12rem;height:.12rem;float:left;margin-left:-1.5rem;margin-top:.03rem;background: url(../../assets/images/icon-right.png) no-repeat;background-size:100% 100%;}
.color-d{color:rgba(185, 54, 71, 1);}
.line-bottom{height:.2rem;width:150%;border-bottom:1px solid #EFEFEF;margin-left:-7%;}
</style>