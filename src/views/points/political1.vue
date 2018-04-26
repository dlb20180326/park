<template>

	<div style="height:100%;" class="disabled-tabbar">
   		<view-box ref="viewBox" body-padding-top=".46rem">
			<!--<r-header :rfs="contents"></r-header>-->
			<x-header slot="header" style="position: fixed !important;
        left:0;
        right:0;">
              思想汇报<a slot="right" @click="showMenu">评分说明</a></x-header>
            <div class="header-list">
                <div class="list-left">
                    <span class="left-now">汇报状态：</span>
                    <span class="left-active">{{text||"书面汇报"}}</span>
                </div>
                <div class="right-btn" @click="showDet">切换<span></span></div>
            </div>
            <div class="animate-down" v-show="topShow">
                <div  v-for="(item,index) in list1" :key="index" class="bg-flag" @click="change(item)">
                    {{item.text}}
                </div>
            </div>
			    <div class="points-table">
                    <flexbox :gutter="0">
                        <flexbox-item>序号</flexbox-item>
                        <flexbox-item>党员姓名</flexbox-item>
                        <flexbox-item>时间</flexbox-item>
                        <flexbox-item>评分状态</flexbox-item>
                    </flexbox>
                    <template v-if="moduleId==11" >

                        <flexbox :gutter="0"  v-for="(con,index) in list3" :key="index">
                            <flexbox-item>{{index+1}}</flexbox-item>
                            <flexbox-item>{{con.name}}</flexbox-item>
                            <flexbox-item>上半年</flexbox-item>
                            <flexbox-item>

                                <!--<input type="button" class="btnSub" value="去处理"  @click="clickLink(con)" />-->
                                <input type="button" class="btnSub" :value="con.tempint|Upper" :class="con.tempint|Upper1" @click="clickLink(con)" />
                            </flexbox-item>
                        </flexbox>
                    </template>
                    <template  v-else>
                    <flexbox :gutter="0"  v-for="(con,index) in list" :key="index">
                        <flexbox-item>{{index+1}}</flexbox-item>
                        <flexbox-item>{{con.name}}</flexbox-item>
                        <flexbox-item>下半年</flexbox-item>
                        <flexbox-item>

                            <!--<input type="button" class="btnSub" value="去处理"  @click="clickLink(con)" />-->
                            <input type="button" class="btnSub" :value="con.tempint|Upper" :class="con.tempint|Upper1" @click="clickLink(con)" />
                        </flexbox-item>
                    </flexbox>
                        </template>

               </div>
			<div v-transfer-dom>
				<popup v-model="showPop" position="left" width="100%">
				<div class="middle">
					<div class="middle-top">评分说明</div>
					<div class="middle-content">
                        <p >
                            1、党员每上半年口头向支部书记汇报一次，经支部书记审核通过后加5分； 2、党员每下半年书面向支部汇报一次，经支部书记审核通过后加5分。
                        </p>

					</div>
					<div class="knowBtn" @click="know">我知道了</div>
				</div>
				</popup>
			</div>
   		</view-box>
 	</div>
</template>
<script>
import axios from 'axios'
/*import Xheader from '@/components/comother/rheader'*/
import Vue from 'vue';
import {ViewBox,TransferDom,Popup,Flexbox, FlexboxItem,XHeader} from 'vux'
Vue.component(Popup.name, Popup);
	export default {
		data(){

			return {
				contents:{rights:'评分说明',title:''},
				list:"",
                list3:"",
                list1:[
                    {text:"口头汇报",moduleId:11},
                    {text:"书面汇报",moduleId:12}
                ],
				isYellow:false,
				showPop:false,

                topShow:false,
                showTrans:false,
                text:'',
                moduleId:''
			}
		},
		filters: {
            Upper: function (value) {
                try {
                    if(value=== 1)  throw "待审批";
                    if(value=== 2)  throw "已审批";
                    if(value=== 3)  throw "已过期";
                }
                catch(err) {
                    return value=err;
                }
            },
            Upper1: function (value) {
                try {
                    if(value===1) throw "";
                    if(value=== 2)  throw "yellowB";
                    if(value=== 3)  throw "yellowC";
                }
                catch(err) {
                    return value=err;
                }

            }
        },
		components:{
			XHeader,
			ViewBox,
			Popup,
			Flexbox,
			FlexboxItem,
		},
		directives:{
			TransferDom
		},
		methods:{
            change(it){
                this.text=it.text;
                this.moduleId=it.moduleId;
                this.topShow = !this.topShow;
                this.showTrans = !this.showTrans;

             /*   this.slide1();
                this.slide();*/

            },
            showDet(){
                this.topShow = !this.topShow;
                this.showTrans = !this.showTrans;
            },
            clickLink(item) {
                if(item.tempint==1){

                this.$router.push({
                    path: '/active/detailPack2/',
                    name: 'detailPack2',
                    params:{
                        userId:item.id,
                        departmentid:item.departmentid
                    }
                })}else{
                    this.$router.push({
                        path: '/active/detailPack3',
                        name: 'detailPack3',
                        params:{
                            userId:item.id,
                            departmentid:item.departmentid}
                })}

            },
//书面汇报
            getlist1(){

                axios({
                    method: 'get',
                    url: 'ppartymember/getReportByDepartmentid',
                    params: {
                       departmentid:this.$store.getters.user.departmentid,
                        moudleId:12

                    }
                }) .then((res)=> {
                    this.list=res.data;
                console.log("11111111111111",res.data);
                })
                .catch(function (error) {
                        console.log(error);
                    });
            },
//口头汇报
            getlist2(){

                axios({
                    method: 'get',
                    url: 'ppartymember/getReportByDepartmentid',
                    params: {
                        departmentid:this.$store.getters.user.departmentid,
                        moudleId:11

                    }
                }) .then((res)=> {
                    this.list3=res.data;
                console.log("222222222222",res.data);
            })
            .catch(function (error) {
                    console.log(error);
                });
            },
			know(){
				this.showPop = false
			},
			datePick(s){
            Date.prototype.toLocaleString = function(){
                return this.getFullYear() +'.'+ (this.getMonth()+1)+'.'+this.getDate()
            };
            return new Date(s).toLocaleString();
        },
        showMenu(){
        	this.showPop = true;
        }
		},
		mounted(){
            this.getlist1();
            this.getlist2();
           /* this.getModule();
            this.getmoduleid()*/
		}
	}
</script>

<style scoped lang="less">
html,body{
	width:100%;
	height:100%;
	overflow-x:hidden;
}
.vux-flexbox{
	width:88%;
	margin-left:6%;
	text-align: center;
	margin-top:.2rem;
}
.vux-flexbox-item{
font-size: .14rem;
}
.vux-flexbox:nth-child(1){
	color:rgba(250,122,0,1);
	border:0;
	padding-bottom:0px;
}
.vux-flexbox{
	border-bottom:1px solid #E8E8E8;
	padding-bottom:.2rem;
}
.vux-flexbox .vux-flexbox-item:nth-child(1){
	-webkit-box-flex: 0.5;
}
.points-table{padding-top:46px;}
.btnSub{width:.6rem;height:.24rem;font-size:.14rem;line-height:.24rem;border-radius: 4px;font-family:PingFangSC-Medium;border:0px;color:#FFFFFF;background-color:rgba(185, 54, 71, 1);}
.yellowA{background-color:#BABABA;}
.yellowB{background-color:#F84D2B;}
.yellowC{background-color:rgba(244,151,74,1);}
.middle{width:2.8rem;height:2.02rem;margin:.8rem auto;border-radius:10px;background-color: #FFFFFF;position:absolute;z-index:300;left:calc(50% - 1.4rem);top:21%;overflow:hidden;}
.mint-popup-left{left:15%;}
.middle .middle-top{width:100%;height:.4rem; background:linear-gradient(90deg,rgba(185,54,71,1),rgba(155,10,26,1));box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);font-size:.16rem;color:#FFFFFF;text-align:center;line-height:.4rem;border-radius:10px 10px 0 0;}
.middle-content{width:2.4rem;height:0.8rem;margin:.21rem .19rem .21rem .21rem;}
.middle-content p{font-size:.14rem;color:#828282;line-height:.24rem;}
.dark{color:#333333;}
.knowBtn{width:1.2rem;height:.3rem;margin:0 auto;color:#FFFFFF;background:rgba(185,54,71,1);
border-radius: 4px;line-height:.3rem;text-align:center;font-size:.16rem;}
.vux-popup-dialog{background-color: rgba(0,0,0,0.2);}
.header-list{width:100%;height:50px;border-bottom:1px solid #E4E4E4;position: fixed;top:46px;left:0;right:0;background:#fff;line-height:50px;}
.list-left{width:54%;margin:.08rem 0 .15rem 5.3%;height:.2rem;line-height:.2rem;font-size:.14rem;float:left;margin-top:0.15rem }
.left-now{color:#666;font-size: 14px;}
.left-active{
    color: #333;
    font-size: 14px;
    font-weight: 600;
}
.right-btn{font-size:.14rem;width:.6rem;height:.24rem;line-height:.24rem;color:#fff; background:rgba(244,151,74,1);border-radius: 4px;text-align: center;float:right;margin:.13rem 5.3% .13rem 0;padding-left:.07rem;}
.right-btn span{
    width: 10px;
    height: 10px;
    display: block;
    float: right;
    margin: 7px 8px 0 3px;
    background-image:url(../../assets/images/icon-downs.png);background-size: 100% 100%;}
.bg-flag{height:.2rem;margin-top:.2rem;}
.animate-down{padding:0 .2rem .2rem .21rem;z-index:521;background-color:#FFFFFF;top:96px;border: 1px solid #E4E4E4;
position:fixed;left:0;right:0;
}
</style>
<style scoped>
    .vux-header{

    }
    .weui-tabbar[slot="bottom"]{
        display: none !important;
    }
</style>
