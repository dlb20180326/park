<template>
    <div class="page-body disabled-tabbar">
        <x-header>{{listSingle.projectName}}</x-header>
        <div class="group-item">
            <group-title slot="title">
                <b>党员姓名：{{userName}}</b>
            </group-title>

        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>开始时间</b>
            </group-title>
            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text" v-model='startTime'>
                </flexbox-item>
                <flexbox-item class="input-addon" style="position: relative">
                    <x-button mini type="warn">
                        <i class="iconfont dlb-icon-rili" ></i>
                    </x-button>
                    <group class="date-no-box">
                        <datetime v-model="hourListValue" format="YYYY-MM-DD HH:mm" @on-change="changeStart"></datetime>
                    </group>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>结束时间</b>
            </group-title>
            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text" v-model='endTime'>
                </flexbox-item>
                <flexbox-item class="input-addon" style="position: relative">
                    <x-button mini type="warn">
                        <i class="iconfont dlb-icon-rili" ></i>
                    </x-button>
                    <group class="date-no-box">
                        <datetime v-model="ListValue" format="YYYY-MM-DD HH:mm" @on-change="changeEnd"></datetime>
                    </group>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>学习内容</b>
            </group-title>
            <textarea cols="30" rows="10"  maxlength="300" v-model='activeContent'></textarea>
        </div>
        <div class="group-item">
        	<span class="addPic">添加照片</span>
        	<div class="square">
        		<input type="file" class="fileLoad" />
        	</div>
        </div>
        <div class="group-item">
            <group-title slot="title"></group-title>
            <x-button type="warn" @click.native="submit()">
                提交支部书记审核
            </x-button>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import { XHeader, GroupTitle, Flexbox, Alert, FlexboxItem, XButton,DatetimePlugin,Datetime ,Group,Picker } from 'vux';

    export default {

        components: {
            XHeader,
            GroupTitle,
            Flexbox,
            FlexboxItem,
            XButton,
            DatetimePlugin,
            Datetime,
            Group,
            Picker,

        },
        data() {
            return {
                value1: '',
                startTime:"",
				endTime:'',
                hourListValue:'',
                hot:'',
				ListValue:'',
                activeContent:'',
				listSingle:{},
				userName:''
            };
        },
        methods: {
        	getList(){
        		axios.get('pscoredetail/queryById',{
        		    params: {
        			    id:this.$route.params.moduleId
        			}
        		}).then(res =>{
        			this.listSingle=res.data
        		}).catch(err =>{
        			console.log('fail'+err.data)
        			
        		})
        	},
        	getUser() {
            axios.get('ppartymember/queryByUserId', {
                params: {
                    userid: this.$store.getters.user.userid
                }
            })
            .then(res => {
                this.userName = res.data.name;
            })
            .catch(err => {
                console.log(err);
            });
        },
            openPicker() {
                this.$refs.picker.open();
            },


            submit(){
                 axios({
                    url:'pstudy/save',
                    method:'post',
                    headers: {'contentType':'application/json'},
                    params:{
                        departmentid:this.$store.getters.user.departmentid,
                        createUserid:this.$store.getters.user.userid,
                        roleid:this.$store.getters.user.roleid,
                        starttime:new Date(this.startTime.replace(/-/gi,'/')).getTime(),
                        endtime:new Date(this.endTime.replace(/-/gi,'/')).getTime(),
                        projectid:this.$route.params.projectId,
                        moduleid:this.$route.params.moduleId,
                        content:this.activeContent
                    }
                }).then(res => {
                    this.users[1].integral = res.data;
                }).catch(err => {
                    console.log(err);
                });
            },

            getActivity(){
            },
            log (str1, str2 = '') {
                console.log(str1, str2)
            },
            showPlugin () {
                this.$vux.datetime.show({
                    cancelText: '取消',
                    confirmText: '确定',
                    format: 'YYYY-MM-DD HH',
                    value: '2017-05-20 18',
                    onConfirm (val) {
                        console.log('plugin confirm', val)
                    },
                    onShow () {
                        console.log('plugin show')
                    },
                    onHide () {
                        console.log('plugin hide')
                    }
                })
            },
            toggleFormat () {
                this.format = this.format === 'YYYY-MM-DD HH:mm' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm'
            },
            changeStart (value) {
                this.startTime = value;
            },
            changeEnd (value) {
                this.endTime = value;
            },
            clearValue (value) {
                this.value6 = ''
            },
            clearValue8 (value) {
                this.value8 = ''
            },
            setToday (value) {
                let now = new Date();
                let cmonth = now.getMonth() + 1;
                let day = now.getDate();
                if (cmonth < 10) cmonth = '0' + cmonth;
                if (day < 10) day = '0' + day;
                this.value7 = now.getFullYear() + '-' + cmonth + '-' + day;
                console.log('set today ok')
            },
        },
        mounted() {
            this.getActivity();
            this.getList();
            this.getUser();
        }
    };
</script>

<style lang="less" scoped>
    ul,li{list-style: none}
    .group-item {
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    &:last-child {
         margin-bottom: 0.2rem;
     }
    input,
    textarea {
        display: block;
        width: 100%;
        padding: 0.06rem 0.08rem;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: rgba(0, 0, 0, 0.05);
        box-sizing: border-box;
        color: #333;
        font-size: 0.14rem;
    }
    input {
        height: 0.32rem;
    }
    .vux-flexbox-item input {
        border-right-width: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .input-addon {
        flex: 0 0 auto;
        width: auto;
    }
    .weui-btn_mini {
        height: 0.32rem;
        line-height: 1;
        padding: 0 0.16rem;
        font-size: 0.14rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    &::after {
         border-top-left-radius: 0;
         border-bottom-left-radius: 0;
     }
    }
    }
    .weui-cells__title {
        margin-top: 0.2rem;
        padding-left: 0;
        padding-right: 0;
        color: #464646;
    }
    .active-type-list{
        margin: .1rem auto;
        width: 92%;
        position: relative;
    li{
        background: #FFF5E6;
        height: 0.3rem;
        text-indent: 0.2rem;
        line-height: .3rem;
        color: #CB2F00;
        font-size: .15rem;
    }
    }

	.addPic{height:.17rem; 	font-size:.12rem;font-family:PingFangSC-Medium;color:rgba(153,153,153,1);line-height:.17rem;
    }
	input[type="file"] {
  	color: transparent;
  	opacity: 0;
	}
	.square{width:.4rem;height:.4rem;border:1px solid #B53141;background: url(../../assets/images/icon-plug.png) no-repeat;background-size:50% 50%;background-position: center;}
</style>
<style>
    .date-no-box{position: absolute;top:0px;left: 0;right: 0;bottom: 0;height: 0.32rem;overflow: hidden;opacity: 0}
    .date-no-box .vux-no-group-title{margin-top:0!important;}
    .date-no-box .weui-cell{
        padding: 10px 15px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 0.32rem;
        padding: 0;
    }
</style>
