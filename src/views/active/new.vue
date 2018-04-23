<template>
    <div class="page-body disabled-tabbar">
        <x-header>发起活动</x-header>
        <div class="group-item">
            <group-title slot="title">
                <b>活动开始时间</b>
            </group-title>
            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text" v-model='startTime' readonly="readonly">
                </flexbox-item>
                <flexbox-item class="input-addon" style="position: relative">
                    <x-button mini type="warn">
                        <i class="iconfont dlb-icon-rili" ></i>
                    </x-button>
                    <group class="date-no-box">
                        <datetime v-model="hourListValue" format="YYYY-MM-DD HH:mm" @on-change="change" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" ></datetime>
                    </group>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动结束时间</b>
            </group-title>
            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text"  v-model='endTime' readonly="readonly">
                </flexbox-item>
                <flexbox-item class="input-addon" style="position: relative">
                    <x-button mini type="warn">
                        <i class="iconfont dlb-icon-rili" ></i>
                    </x-button>
                    <group class="date-no-box">
                        <datetime v-model="hot" format="YYYY-MM-DD HH:mm" @on-change="change1" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" ></datetime>
                    </group>
                </flexbox-item>
            </flexbox>
        </div>

        <div class="group-item">
            <group-title slot="title">
                <b>活动类型</b>
            </group-title>
            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text" v-model='activityName'>
                </flexbox-item>
                <flexbox-item class="input-addon">
                    <x-button mini type="warn" @click.native="handlePicker()">
                        <i class="iconfont dlb-icon-category" ></i>
                    </x-button>
                </flexbox-item>
            </flexbox>
        </div>

        <ul class="active-type-list" v-show="PickerVisible2">
            <li v-for="(item,index) in list" :key="index" @click="submit1(item)">{{item.projectName}}</li>
        </ul>

        <div class="group-item">
            <group-title slot="title">
                <b>活动名称</b>
            </group-title>
            <input type="text" v-model="activeTitle">
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动地点</b>
            </group-title>
            <input type="text"  v-model='activePace'>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动负责人</b>
            </group-title>
            <input type="text"  v-model='activePrincipalPeople'>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动内容</b>
            </group-title>
            <textarea cols="30" rows="10"  maxlength="300" v-model='activeContext'></textarea>
        </div>
        <div class="group-item">
            <group-title slot="title"></group-title>
            <x-button type="warn" @click.native="submit()">
                生成活动二维码
            </x-button>
        </div>
        <div v-transfer-dom class="qrcode-dialog">
            <x-dialog v-model="showQrcodeDialog" hide-on-blur :dialog-style="{width: '80%',height:'300px'}" >
                <h1 style="text-align: center;margin-top:20px;margin-bottom:20px;">{{activeTitle}}</h1>
                <img id="fei" alt="">
            </x-dialog>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
import { XHeader, GroupTitle, Flexbox, Alert, FlexboxItem, XButton,DatetimePlugin,Datetime ,Group,Picker ,XDialog, TransferDomDirective as TransferDom  } from 'vux';

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
        XDialog
    },
    data() {
        return {
            value1: '',
            startTime:"",
            endTime:"",
            hourListValue:'',
            hot:'',
            activeType:'',
            activityName:'',
            activePace:'',
            activeTitle:'',
            activeCreatePeople:this.$store.getters.user.userid,
            activePrincipalPeople:'',
            activeContext:'',
            activeContent:'',
            activeStatus:0,
            activeProjectActive:'',
            PickerVisible1:false,
            pickerValue1:'请选择活动类型',
            years:'',
            year1: [''],
            list:'',
            PickerVisible2:false,
            departmentid:this.$store.getters.user.departmentid,
            showQrcodeDialog: false,
            Qrcode:''
        };
    },
    methods: {
        openPicker() {
            this.$refs.picker.open();
        },
        handleConfirm(value) {
            var d = value;
            this.startTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + '';
        },
        handlePicker(){
            this.PickerVisible2=!this.PickerVisible2;
            axios({
                method: 'get',
                url: 'pscoredetail/queryByJoinList'
            }) .then((res)=> {
                this.list= res.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        onValuesChange(picker, values){
            this.pickerValue1=values[0];
            this.PickerVisible1=false
        },
        submit(){
            var starttime = this.startTime.replace(new RegExp("-","gm"),"/");
            var starttimeHaoMiao = (new Date(starttime)).getTime();
            var endtime = this.endTime.replace(new RegExp("-","gm"),"/");
            var endtimeHaoMiao = (new Date(endtime)).getTime();

            if(starttimeHaoMiao<endtimeHaoMiao){
                axios({
                    method: 'post',
                    url: 'active/create',
                    params: {
                        startTime:starttimeHaoMiao,
                        endTime:endtimeHaoMiao,
                        activeType:this.activeType,
                        activityProjectId:this.activeProjectActive,
                        activePace:this.activePace,
                        activeCreatePeople:this.$store.getters.user.userid,
                        activePrincipalPeople:this.activePrincipalPeople,
                        activeContext:this.activeContext,
                        activeName:this.activeTitle,
                        activeStatus:1,
                        departmentid:this.departmentid
                    }
                }) .then((res)=> {
                    this.$vux.alert.show({title:res.msg});

                    this.showQR(res.data);

                }).catch(function (error) {
                    console.log(error);
                });
            }else {
                this.$vux.alert.show({title:'开始日期不能大于结束日期'});

            }
        },
        showQR(data){
            document.getElementById('fei').src = 'http://www.dlbdata.cn/dangjian/active/showQrCode?activeId='+data;
            this.showQrcodeDialog = true;
        },
        submit1(it){
            this.activeType=it.id;
            this.activeProjectActive = it.projectId;
            this.activityName = it.projectName;
            this.PickerVisible2=false

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
        change (value) {
            this.startTime = value;
        },
        change1 (value) {
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
        }
    },
    mounted() {
        this.getActivity()
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
