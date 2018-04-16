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
            <div class="photo-list cl">
                <ul>
                    <li v-for="(item,index) in picList.list">
                        <div class="preview">
                            <img style="float:left;width:100%" :key="index" width="100" :src="item"  @touchend="clearLoop" @touchstart="showDeleteButton(index)">
                        </div>
                    </li>
                    <li>
                        <div class="preview addUpload" @click="chooseImage(picList)">
                            <span class="add-bg"></span>
                        </div>
                    </li>
                </ul>
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
    import { XHeader, GroupTitle, Flexbox, TransferDomDirective as TransferDom,Alert, FlexboxItem, XButton,DatetimePlugin,Datetime ,Group,Picker,Previewer} from 'vux';
    import wx from 'weixin-js-sdk';
    import weixin from '@/services/weixin';
    export default {
        directives: {
            TransferDom
        },
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
            Alert,
            Previewer
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
				userName:'',
                picList:{list:[],arr:[]},
            };
        },
        methods: {
            showDeleteButton(it) {
                clearInterval(this.Loop);//再次清空定时器，防止重复注册定时器
                var This = this;
                this.Loop=setTimeout(function(){
                    This.picList.list.splice(it,1);
                    This.picList.arr.splice(it,1);
                    This.$vux.alert.show({title:'删除成功'});
                },1000);
            },
            clearLoop() {
                clearInterval(this.Loop);
            },
            atBig (item) {
            },
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
                var starttime = this.startTime.replace(new RegExp("-","gm"),"/");
                var starttimeHaoMiao = (new Date(starttime)).getTime();
                var endtime = this.endTime.replace(new RegExp("-","gm"),"/");
                var endtimeHaoMiao = (new Date(endtime)).getTime();

                if(starttimeHaoMiao<endtimeHaoMiao){


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
                        content:this.activeContent,
                        picids:this.picList.arr.join()
                    }
                }).then(res => {
                    console.log(res);
                    //this.users[1].integral = res.data;
                    if(res.success){
                    	this.$vux.alert.show({title:'增加成功'});
                        setTimeout(() => {
        					this.$vux.alert.hide();
      					}, 1000)
                    }else{
                    	this.$vux.alert.show({title:'增加失败'});
                        setTimeout(() => {
        					this.$vux.alert.hide();
      					}, 1000)
                    }
                }).catch(err => {

                    if(err.success){
                        this.$vux.alert.show({title:'增加失败'});
                        setTimeout(() => {
                            this.$vux.alert.hide();
                        }, 1000)
                    }

                });}else {
                    alert("开始日期不能大于结束日期");
                }
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

            chooseImage(it) {
                wx.chooseImage({
                        count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                        success: res => {
                        let localIds = res.localIds || [];
                new Promise(resolve => {
                    let serverIds = [];
                let toUpload = localId =>
                wx.uploadImage({
                        localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                        isShowProgressTips: 1, // 默认为1，显示进度提示
                        success: res => {
                        serverIds.push(res.serverId);
                if (localIds.length) {
                    toUpload(localIds.shift());
                } else {
                    resolve(serverIds);
                }
            }
            })
                ;
                if (localIds.length) {
                    toUpload(localIds.shift());
                } else {
                    resolve(serverIds);
                }
            }).
                then(serverIds => {
                    let promiseList = [];
                serverIds.map(serverId =>
                promiseList.push(
                    this.$http.get('picture/upload', {
                        params: {
                            mediaId: serverId
                        }
                    })
                )
            )
                ;
                Promise.all(promiseList).then(result => {
                    let pictureIds = [];
                result.map(item => pictureIds.push(item.data)
            )
                ;
                it.list.push("http://www.dlbdata.cn/dangjian/picture/show?pictureId=" + pictureIds.join());
                it.arr.push(pictureIds.join());
            })
                ;
            })
                ;
            }
            })
                ;
            }
        },
        mounted() {
            weixin.init(['chooseImage', 'uploadImage']);
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

	.photo-list{padding:0.1rem 0 0;}
    .photo-list.border0{border-bottom:0;padding-bottom: 0;}
    .photo-list ul{font-size:0;list-style:none;}
    .photo-list ul li{font-size:0;display:inline-block;margin-right:.2rem;position:relative;vertical-align:top;width:.6rem;height:.6rem;overflow:hidden;margin-bottom:.2rem;}
    .photo-list ul li:first-child{margin-left:0;}
    .photo-list .operate{display:none;background:rgba(33,33,33,.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#b2404040, endColorstr=#b2404040);z-index:5;position:absolute;bottom:0;left:0;right:0;height:12px;padding-bottom:7px;font-size:12px;color:#fff;text-align: center}
    .photo-list .info{line-height:.6rem;text-align:center}
    .photo-list .preview{width: 0.6rem;height:.6rem;z-index:4;line-height:.6rem;font-family:arial;background-color: #dbdbdb;background-repeat:no-repeat;position:absolute;bottom:0;left:0;text-align:center;right:0;cursor: pointer;border:1px solid #fff;box-sizing: border-box;}
    .photo-list .preview.addUpload{background-color:#fff;border: 1px solid #b53141;}
    .photo-list .preview img{max-height:.6rem;max-width:.6rem;vertical-align:middle;}
    .photo-list .photo-primary-text{color:#ffA500;font-size:12px;}
    .photo-list .add-bg{
        width: 0.2rem;
        height: 0.2rem;
        margin-left: .2rem;
        margin-top: .2rem;
        display: block;
        background: url(../../assets/images/add_icon_bg.png) no-repeat;
        background-size: contain;
        background-position: center;
    }
    .photo-list ul li:hover .operate{display:block;}
    .photo-list ul .operate a{color:#fff;cursor:pointer;text-decoration:none}
    .photo-list ul li.no-operate:hover .operate{display:none;}
    .photo-list .upload-file-input{opacity: 0;position: absolute;z-index: 99;top: 0;right: 0;left: 0;width: .6rem;bottom: 0;}


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
