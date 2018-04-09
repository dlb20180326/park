<template>
    <div class="page-body disabled-tabbar">
        <x-header>发起活动</x-header>
        <div class="group-item">
            <group-title slot="title">
                <b>活动开始时间</b>
            </group-title>

            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text" v-model='startTime'>
                </flexbox-item>
                <flexbox-item class="input-addon">
                    <mt-datetime-picker
                        ref="picker"
                        type="datetime"
                        :startDate="startDate"
                        @confirm="handleConfirm">
                    </mt-datetime-picker>
                    <x-button mini type="warn" @click.native="openPicker()">
                        <i class="iconfont dlb-icon-rili" ></i>
                    </x-button>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动结束时间</b>
            </group-title>
            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text"  v-model='endTime'>
                </flexbox-item>
                <flexbox-item class="input-addon">
                    <x-button mini type="warn"  @click.native="openPicker1()">
                        <i class="iconfont dlb-icon-rili" ></i>
                    </x-button>
                </flexbox-item>
            </flexbox>
        </div>

        <div class="group-item">
            <group-title slot="title">
                <b>活动类型</b>
            </group-title>
            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text"  v-model='activeType'>

                </flexbox-item>

                <flexbox-item class="input-addon">
                    <!--<mt-picker :slots="slots"  @change="onValuesChange" v-model="pickerValue1" v-show="PickerVisible1"></mt-picker>-->

                    <x-button mini type="warn" @click.native="handlePicker()">
                        <i class="iconfont dlb-icon-rili" ></i>
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
            <input type="text"  v-model='activityName'>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动地点</b>
            </group-title>
            <input type="text"  v-model='activePace'>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动发起人</b>
            </group-title>
            <input type="text"  v-model='activeCreatePeople'>
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
            <textarea cols="30" rows="10" ></textarea>
        </div>
        <div class="group-item">
            <group-title slot="title"></group-title>
            <x-button type="warn" @click.native="submit()">
                生成活动二维码
            </x-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
import { XHeader, GroupTitle, Flexbox, FlexboxItem, XButton,DatetimePlugin,Datetime ,Picker  } from 'vux';

export default {
    components: {
        XHeader,
        GroupTitle,
        Flexbox,
        FlexboxItem,
        XButton,
        DatetimePlugin,
        Datetime,
        Picker
    },
    data() {
        return { value1: '',
            startTime:"",
            endTime:"",
            activeType:'',
            activityName:'',
            activePace:'',
            activeCreatePeople:'',
            activePrincipalPeople:'',
            activeContex:'',
            activeStatus:0,
            activeProjectActive:'',
            PickerVisible1:false,
            pickerValue1:'请选择活动类型',
            years:'',
            year1: [''],
            list:'',
            PickerVisible2:false,
            departmentid:this.$store.getters.user.departmentid


        };
    },
    methods: {
        openPicker() {
            this.$refs.picker.open();
        },handleConfirm(value){
            var d = value;
            this.startTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +'';
    },

    handlePicker(){
        this.PickerVisible2=true;
        axios({
            method: 'get',
            url: '/dangjian/pscoredetail/queryByJoinList'
        }) .then((res)=> {
            this.list= res.data;
        }).catch(function (error) {
                console.log(error);
        });
    }
    ,onValuesChange(picker, values){

        this.pickerValue1=values[0],
            this.PickerVisible1=false
    },
        submit(){
            alert(this.activeType)
            axios({
                method: 'post',
                url: '/dangjian/active/create',
                params: {
                    startTime:new Date(this.startTime.replace(/-/g,'/')).getTime(),
                    endTime:new Date(this.endTime.replace(/-/g,'/')).getTime(),
                    activeType:this.activeType,
                    activityProjectId:this.activeProjectActive,
                    activePace:this.activePace,
                    activeCreatePeople:this.activeCreatePeople,
                    activePrincipalPeople:this.activePrincipalPeople,
                    activeContex:this.activeContex,
                    activeStatus:this.activeStatus,
                    departmentid:this.departmentid
                }
            }) .then((res)=> {
                console.log(res)
            }).catch(function (error) {
                console.log(error);
            });


        },
        submit1(it){
            this.activeType=it.id;
            this.activeProjectActive = it.projectId;
            this.activityName = it.projectName;
            this.PickerVisible2=false

        },
        getActivity(){
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