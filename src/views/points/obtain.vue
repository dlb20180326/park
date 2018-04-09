<template>
	
	<div style="height:100%;width:100%;overflow-x:hidden;">
   		<view-box ref="viewBox" body-padding-top=".46rem">
			<r-header :rfs="contents"></r-header>
			<gain :list='list'></gain>
   		</view-box>
 	</div>
</template>
<script>
import Xheader from '@/components/comother/rheader'
import Gain from '@/components/comother/gain'
import {ViewBox} from 'vux'
import axios from 'axios'
	export default {
		data(){
/*			let list = [
					{left:'时间：',right:'2017.11.22'},
					{left:'积分类型：',right:'党员缴纳'},
					{left:'积分变动：',right:'+5分'},
					{left:'审核人：',right:'支部书记'},
					{left:'时间：',right:'2017.11.22'},
					{left:'积分类型：',right:'党员缴纳'},
					{left:'积分变动：',right:'+5分'},
					{left:'审核人：',right:'支部书记'},
					{left:'时间：',right:'2017.11.22'},
					{left:'积分类型：',right:'党员缴纳'},
					{left:'积分变动：',right:'-10分'},
					{left:'审核人：',right:'支部书记'}
			];*/
			
/*			let list = [];*/
			
/*			for(let i=0;i<list.length;i++){
				if(list[i].right.substring(0,1) == '+'){
					list[i].isRed = true;
				}else if(list[i].right.substring(0,1) == '-'){
					list[i].isRed = false;
				}
			}*/
			
			return {
				contents:{rights:'',title:'积分获取明细'},
				list:[]
			}
		},
		components:{
			'r-header':Xheader,
			'gain':Gain,
			ViewBox
		},
		methods:{
			details(){
				axios.get('/dangjian/pscoreparty/queryByUserId',{
					params:{
						userid:this.$route.params.userid,
						year:this.$route.params.year
					}
				}).then(res =>{
					console.log(res);
					this.list = res.data;
				}).catch(err =>{
					console.log('fail'+err);
				})
			}
		},
		mounted(){
			this.details();
		}
	}
</script>

<style scoped>
html,body{
	width:100%;
	height:100%;
	overflow-x:hidden;
}

</style>