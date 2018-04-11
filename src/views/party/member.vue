<template>
	
	<div style="height:100%;">
   		<view-box ref="viewBox" body-padding-top=".46rem">
			<r-header :rfs="contents"></r-header>
			<table id="table-style">
				<tbody>
					<tr v-for="(con,index) in list">
						<td>{{index+1}}</td>
						<td>{{con.name}}</td>
						<td>
							<input type="button" class="btnSub" :value="con.btn" :class="{yellowC:con.isYellow}" @click="changeItem"></input>
						</td>
					</tr>
				</tbody>
			</table>
			<div v-transfer-dom>
				<popup v-model="showPop" position="left" width="100%">
				<div class="middle">
					<div class="middle-top">评分说明</div>
					<div class="middle-content">
						<p><span class="dark">1.获得荣誉:</span>年度获得综合党委以上荣誉的加5分</p>
						<p><span class="dark">2.先锋表彰：</span>工作突出，年内受到公司、行业表彰奖励的，加5分；</p>
						<p><span class="dark">3.先锋模范：</span>在其他发挥先锋模范作用方面需要加分的，由党支部研究后视情况予以加分。</p>
					</div>
					<div class="knowBtn" @click="know">我知道了</div>
				</div>
				</popup>
			</div>
   		</view-box>
 	</div>
</template>
<script>
import Xheader from '@/components/comother/rheader'
import Vue from 'vue';
import {ViewBox,TransferDom} from 'vux'
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
	export default {
		data(){
			let list = [{name:'王俊凯',btn:'去处理'},{name:'李琳',btn:'去处理'},{name:'潘旭',btn:'去处理'},{name:'赵杨',btn:'待审批'}];
				for(let i=0;i<list.length;i++){
					if(list[i].btn == '待审批'){
					list[i].isYellow = true;
					}
					else{
						list[i].isYellow = false;
						
					}
				}
			return {
				contents:{rights:'',title:'支部党员'},
				list:list,
				isYellow:false,
				popupVisible:false,
				showPop:false
			}
		},
		components:{
			'r-header':Xheader,
			ViewBox
		},
		directives:{
			TransferDom
		},
		methods:{
			changeItem(){
				this.popupVisible = true
			},
			
			know(){
				this.popupVisible = false
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
html,body{
	width:100%;
	height:100%;
	overflow-x:hidden;
}
#table-style{
	width:86.7%;
	height:auto;
	margin:0px auto;
}
#table-style tbody tr td{height:.28rem;padding-top:.2rem;font-size:.2rem;width:33.33%;text-align:left;}
#table-style tbody tr td:nth-child(3){text-align:right;}
.btnSub{width:.6rem;height:.24rem;font-size:.14rem;line-height:.24rem;border-radius: 4px;font-family:PingFangSC-Medium;border:0px;color:#FFFFFF;background-color:rgba(185, 54, 71, 1);}
.yellowC{background-color:rgba(244,151,74,1);}
.middle{width:2.8rem;height:3rem;margin:.8rem auto;border-radius:10px;border:1px solid red;background-color: #FFFFFF;}
.mint-popup-left{left:15%;}
.middle .middle-top{width:100%;height:.4rem; background:linear-gradient(90deg,rgba(185,54,71,1),rgba(155,10,26,1));box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);font-size:.16rem;color:#FFFFFF;text-align:center;line-height:.4rem;}
.middle-content{width:2.4rem;height:1.7rem;margin:.21rem .19rem .21rem .21rem;}
.middle-content p{font-size:.14rem;color:#828282;line-height:.24rem;}
.dark{color:#333333;}
.knowBtn{width:1.2rem;height:.3rem;margin:0 auto;color:#FFFFFF;background:rgba(185,54,71,1);
border-radius: 4px;line-height:.3rem;text-align:center;font-size:.16rem;}
</style>