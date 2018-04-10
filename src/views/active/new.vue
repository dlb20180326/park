<template>
    <div class="page-body disabled-tabbar">
        <x-header>发起活动</x-header>
        <div class="box">
            <div class="group-item">
                <group-title slot="title">
                    <b>活动开始时间</b>
                </group-title>
                <flexbox :gutter="0">
                    <flexbox-item>
                        <input type="text" v-model='startTime'>
                    </flexbox-item>
                    <flexbox-item class="input-addon" style="position: relative">
                        <x-button mini type="warn">
                            <i class="iconfont dlb-icon-rili"></i>
                        </x-button>
                        <group class="date-no-box">
                            <datetime v-model="hourListValue" format="YYYY-MM-DD HH:mm" @on-change="change"></datetime>
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
                        <input type="text" v-model='endTime'>
                    </flexbox-item>
                    <flexbox-item class="input-addon" style="position: relative">
                        <x-button mini type="warn">
                            <i class="iconfont dlb-icon-rili"></i>
                        </x-button>
                        <group class="date-no-box">
                            <datetime v-model="hot" format="YYYY-MM-DD HH:mm" @on-change="change1"></datetime>
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
                            <i class="iconfont dlb-icon-rili"></i>
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
                <input type="text" v-model='activePace'>
            </div>
            <div class="group-item">
                <group-title slot="title">
                    <b>活动发起人</b>
                </group-title>
                <input type="text" v-model='activeCreatePeople'>
            </div>
            <div class="group-item">
                <group-title slot="title">
                    <b>活动负责人</b>
                </group-title>
                <input type="text" v-model='activePrincipalPeople'>
            </div>
            <div class="group-item">
                <group-title slot="title">
                    <b>活动内容</b>
                </group-title>
                <textarea cols="30" rows="10" v-model='activeContent'></textarea>
            </div>
            <div class="group-item">
                <group-title slot="title"></group-title>
                <x-button type="warn" @click.native="submit()">
                    生成活动二维码
                </x-button>
            </div>
            <div class="group-item">&nbsp;</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { XHeader, GroupTitle, Flexbox, FlexboxItem, XButton, DatetimePlugin, Datetime, Group, Picker } from 'vux';

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
        Picker
    },
    data() {
        return {
            value1: '',
            startTime: '',
            endTime: '',
            activeType: '',
            activityName: '',
            activePace: '',
            activeTitle: '',
            activeCreatePeople: '',
            activePrincipalPeople: '',
            activeContex: '',
            activeContent: '',
            activeStatus: 0,
            activeProjectActive: '',
            PickerVisible1: false,
            pickerValue1: '请选择活动类型',
            years: '',
            year1: [''],
            list: '',
            PickerVisible2: false,
            departmentid: this.$store.getters.user.departmentid
        };
    },
    methods: {
        openPicker() {
            this.$refs.picker.open();
        },
        handleConfirm(value) {
            var d = value;
            this.startTime =
                d.getFullYear() +
                '-' +
                (d.getMonth() + 1) +
                '-' +
                d.getDate() +
                ' ' +
                d.getHours() +
                ':' +
                d.getMinutes() +
                '';
        },
        handlePicker() {
            this.PickerVisible2 = true;
            axios({
                method: 'get',
                url: '/dangjian/pscoredetail/queryByJoinList'
            })
                .then(res => {
                    this.list = res.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        onValuesChange(picker, values) {
            this.pickerValue1 = values[0];
            this.PickerVisible1 = false;
        },
        submit() {
            alert(this.activeType);
            axios({
                method: 'post',
                url: '/dangjian/active/create',
                params: {
                    startTime: new Date(this.startTime.replace(/-/g, '/')).getTime(),
                    endTime: new Date(this.endTime.replace(/-/g, '/')).getTime(),
                    activeType: this.activeType,
                    activityProjectId: this.activeProjectActive,
                    activePace: this.activePace,
                    activeCreatePeople: this.activeCreatePeople,
                    activePrincipalPeople: this.activePrincipalPeople,
                    activeContex: this.activeContex,
                    activeStatus: this.activeStatus,
                    departmentid: this.departmentid
                }
            })
                .then(res => {
                    console.log(res);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        submit1(it) {
            this.activeType = it.id;
            this.activeProjectActive = it.projectId;
            this.activityName = it.projectName;
            this.PickerVisible2 = false;
        },
        getActivity() {},
        log(str1, str2 = '') {
            console.log(str1, str2);
        },
        showPlugin() {
            this.$vux.datetime.show({
                cancelText: '取消',
                confirmText: '确定',
                format: 'YYYY-MM-DD HH',
                value: '2017-05-20 18',
                onConfirm(val) {
                    console.log('plugin confirm', val);
                },
                onShow() {
                    console.log('plugin show');
                },
                onHide() {
                    console.log('plugin hide');
                }
            });
        },
        toggleFormat() {
            this.format = this.format === 'YYYY-MM-DD HH:mm' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm';
        },
        change(value) {
            this.startTime = value;
        },
        change1(value) {
            this.endTime = value;
        },
        clearValue(value) {
            this.value6 = '';
        },
        clearValue8(value) {
            this.value8 = '';
        },
        setToday(value) {
            let now = new Date();
            let cmonth = now.getMonth() + 1;
            let day = now.getDate();
            if (cmonth < 10) cmonth = '0' + cmonth;
            if (day < 10) day = '0' + day;
            this.value7 = now.getFullYear() + '-' + cmonth + '-' + day;
            console.log('set today ok');
        }
    },
    mounted() {
        this.getActivity();
    }
};
</script>

<style lang="less" scoped>
.page-body {
    display: flex;
    flex-direction: column;
}
.box {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
ul,
li {
    list-style: none;
}
.group-item {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    &:first-child {
        margin-top: 0.2rem;
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
    padding-left: 0;
    padding-right: 0;
    color: #464646;
}
.active-type-list {
    margin: 0.1rem auto;
    width: 92%;
    position: relative;
    li {
        background: #fff5e6;
        height: 0.3rem;
        text-indent: 0.2rem;
        line-height: 0.3rem;
        color: #cb2f00;
        font-size: 0.15rem;
    }
}
</style>
<style>
.date-no-box {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.32rem;
    overflow: hidden;
    opacity: 0;
}
.date-no-box .vux-no-group-title {
    margin-top: 0 !important;
}
.date-no-box .weui-cell {
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
