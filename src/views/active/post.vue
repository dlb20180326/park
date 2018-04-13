<template>
	<div class="page-body">
		<view-box ref="viewBox" body-padding-top=".46rem">
			<r-header :rfs="contents"></r-header>
			<p class="titles">{{activeData.activeName}}</p>
			<p class="time">时间：<span class="dark">{{dataPick(activeData.startTime)}}</span></p>
			<p class="time">地点：<span class="dark">{{activeData.activePace}}</span></p>
			<div class="artical">
				{{activeData.activeContext}}
			</div>
			<p class="allPic">
			<span class="bg-line"></span>
			<span class="picture">活动图集</span>
			<span class="numberz">{{num}}张</span>
			</p>
			<div class="img-show">
				<img class="previewer-demo-img" v-for="(item,index) in list" :src="item.src" width="100"  @click="show(index)">
				<div v-transfer-dom>
	      		<previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange">
	      		</previewer>
	    	</div>
			</div>
	 	</view-box>
	</div>
</template>

<script>
import Xheader from '@/components/comother/rheader'
import {Previewer, TransferDom,ViewBox} from 'vux'
	export default {
		directives: {
    		TransferDom
  		},
		components:{
			'r-header':Xheader,
			Previewer,
			ViewBox
		},
		methods:{
			show (index) {
      			this.$refs.previewer.show(index)
    		},
    	  	logIndexChange (arg) {
      			console.log(arg)
    		},
    		getData(){
    			this.$http.post('/dangjian/active/queryById?activeId='+this.$route.params.activeId
    		).then(res =>{
    				this.activeData = res.data
    			}).catch(err =>{
    				console.log(err)
    			})
    		},
    		getPic(){
    			this.$http.post('/dangjian/active/getActivePictures?activeId='+this.$route.params.activeId
    			).then(res =>{
    				this.picInfo= res.data
    				for(let d in this.picInfo){
    					var obj = {};
    					obj.msrc = 'http://www.dlbdata.cn/dangjian/picture/show?pictureId='+this.picInfo[d].pictureId;
    					obj.src = 'http://www.dlbdata.cn/dangjian/picture/show?pictureId='+this.picInfo[d].pictureId;
    					this.list.push(obj);
    					console.log(this.list);
    				}
    			}).catch(err =>{
    				console.log(err)
    			})
    		},
    		dataPick(s){
        	Date.prototype.toLocaleString = function(){
        		return this.getFullYear() +'年'+ (this.getMonth()+1)+'月'+this.getDay()+'日'
        	}
        	return new Date(s).toLocaleString();
    		}
		},
		mounted(){
			this.getData();
			this.getPic();
		},
		data(){
			return {
				contents:{rights:'',title:'驿站活动详情'},
				num:10,
				activeData:{},
				picInfo:[],
				list: [],
/*				{
        			msrc: 'http://www.dlbdata.cn/dangjian/picture/show?pictureId=89',
        			src: 'http://www.dlbdata.cn/dangjian/picture/show?pictureId=89'
      			},
      			{
        			msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        			src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg'
      			}*/
      			
      			options: {
        			getThumbBoundsFn (index) {
          			// find thumbnail element
		            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
		            // get window scroll Y
		            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
		            // optionally get horizontal scroll
		            // get position of element relative to viewport
		            let rect = thumbnail.getBoundingClientRect()
		            // w = width
		            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
		            // Good guide on how to get element coordinates:
		            // http://javascript.info/tutorial/coordinates
        			}
      			}
				
			}
		}
	}
</script>
<style scoped>
html,body{
	width:100%;
	height:100%;
	overflow-x:hidden;
}
.page-body{
	flex: 1;
}
.titles{width:80%;height:.25rem; font-size:.2rem;font-family:PingFangSC-Medium;color:rgba(51,51,51,1);line-height:.28rem;margin:.2rem 12% .1rem 8%;}
.time{width:80%;height:.17rem; font-size:.12rem;font-family:PingFangSC-Medium;color:rgba(153,153,153,1);line-height:.17rem;margin-left:8%;margin-top:.1rem;}
.time .dark{color:#6b6b6b;}
.artical{width:84%;height:auto; font-size:.14rem;font-family:PingFangSC-Regular;color:rgba(102,102,102,1);line-height:.24rem;margin:.18rem 8% .2rem 8%;text-indent:2em;}
.artical p{margin-bottom:.1rem;}
.allPic .bg-line{width:.04rem;height:.18rem;margin-left:8%;background: url(../../assets/images/icon-rectangle.png) no-repeat;background-size:100% 100%;display:block;float: left;margin-top:.07rem;}
.picture{width:0.9rem;font-size:.2rem;font-family:PingFangSC-Semibold;color:rgba(51,51,51,1);margin-left:.1rem;display:block;float: left;}
.numberz{ font-size:.14rem;font-family:PingFangSC-Medium;color:rgba(153,153,153,1);display:block;float: left;margin-top:.02rem;}
.allPic{height:.3rem;line-height:.3rem;overflow:hidden;}
.img-show{width:84%;height:auto;margin-left:8%;}
.img-show img{width:47.5%;height:1.5rem;margin-top:.1rem;}
.img-show img:nth-child(even){margin-left:5%;}
.img-left{width:.37rem;height:.37rem;position:absolute;left:.1rem;top:3.15rem;;z-index:900;}
.img-right{width:.37rem;height:.37rem;position:absolute;right:.1rem;top:3.15rem;z-index:900;}
.color-num{color:rgba(185, 54, 71, 1);}
.line-pic{width:87.2%;margin:.1rem 4.8% .2rem 8%;height:.36rem;overflow:hidden;}
.line-pic img{width:.36rem;height:.36rem;margin-left:.07rem;display:block;float:left;}
.wz-fonts{height:.2rem; font-size:.14rem;font-family:PingFangSC-Medium;color:rgba(153,153,153,1);line-height:.2rem;width:87.2%;margin:.1rem 4.8% .2rem 8%;overflow:hidden;text-overflow: ellipsis;white-space:nowrap;}
.no-picture{width:1.1rem;font-size:.2rem;font-family:PingFangSC-Semibold;color:rgba(51,51,51,1);margin-left:8%;display:block;float: left;}
.weui-tab__panel{padding-bottom:0px!important;}
</style>