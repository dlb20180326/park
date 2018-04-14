<template>
    <div class="page-body disabled-tabbar">
        <x-header>先锋作用评定</x-header>
        <div class="group-item">
            <group-title slot="title">
                <b>党员姓名：{{userName}}</b>
            </group-title>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>获得荣誉（本项评定即获 5 分）：</b>
            </group-title>
            <textarea placeholder="请在此处填写评价" cols="30" rows="10" maxlength="300" v-model='Messge13'></textarea>
        </div>
        <div class="group-item">
            <span class="addPic">添加凭证</span>

            <div class="photo-list cl">
                <ul>
                    <li id="photoPrimary" v-for="(item,index) in picList13.list">
                        <div class="preview">
                            <img style="float:left;width:100%" :key="index" width="100" :src="item">
                        </div>
                    </li>
                    <li>
                        <div class="preview" id="addUpload"  @click="chooseImage(picList13)">
                            <span class="add-bg"></span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>先锋表彰（本项评定即获 5 分）：</b>
            </group-title>
            <textarea placeholder="请在此处填写评价" cols="30" rows="10" maxlength="300" v-model='Messge14'></textarea>
        </div>
        <div class="group-item">
            <span class="addPic">添加凭证</span>
            <div class="photo-list cl">
                <ul>
                    <li  v-for="(item,index) in picList14.list">
                        <div class="preview">
                            <img style="float:left;width:100%" :key="index" width="100" :src="item">
                        </div>
                    </li>
                    <li>
                        <div class="preview" @click="chooseImage(picList14)">
                            <span class="add-bg"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>先锋模范（本项总分 5 分，请打分）：</b>
            </group-title>
            <inline-x-number v-model="itemscore" class="inline-x-number" :min="0" :max="5"></inline-x-number>
            <textarea placeholder="请在此处填写评价" cols="30" rows="10" maxlength="300" v-model='Messge15'></textarea>
        </div>
        <div class="group-item">
            <span class="addPic">添加凭证</span>

            <div class="photo-list cl">
                <ul>
                    <li  v-for="(item,index) in picList15.list">
                        <div class="preview">
                            <img style="float:left;width:100%" :key="index" width="100" :src="item">
                        </div>
                    </li>
                    <li>
                        <div class="preview" @click="chooseImage(picList15)">
                            <span class="add-bg"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="group-item">
            <group-title slot="title"></group-title>
            <x-button type="warn" @click.native="submit">
                确认并提交
            </x-button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import wx from 'weixin-js-sdk';
import weixin from '@/services/weixin';

import {
    XHeader,
    GroupTitle,
    Flexbox,
    Alert,
    FlexboxItem,
    XButton,
    DatetimePlugin,
    Datetime,
    Group,
    Picker,
    InlineXNumber
} from "vux";

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
        InlineXNumber,
        Alert,
    },
    data() {
        return {
            Messge13: "",
            Messge14: "",
            Messge15: "",
            itemscore: 0,

            picList15:{list:[],arr:[]},
            picList14:{list:[],arr:[]},
            picList13:{list:[],arr:[]}
        };
    },
    computed: {
        userName() {
            return decodeURIComponent(this.$route.params.name);
        }
    },
    methods: {
        submit() {
            let {departmentId, userId, partmentId} = this.$route.params;
            let {Messge13, Messge14, Messge15, itemscore} = this;
            let obj = {
                Messge13,
                Messge14,
                Messge15,
                itemscore,
                departmentid: +departmentId,
                userid: +userId,
                partmentid: +partmentId,
            };
            if (this.picList13.arr.length != 0) {
                obj.pic13 = this.picList13.arr.join(",");
            }
            if (this.picList14.arr.length != 0) {
                obj.pic14 = this.picList14.arr.join(",");
            }
            if (this.picList15.arr.length != 0) {
                obj.pic15 = this.picList15.arr.join(",");
            }
            axios({
                url: "pavantgrade/save",
                method: 'post',
                headers: {'contentType': 'application/json'},
                params: obj
            }).then(res => {
                if (res.success) {
                    this.$vux.alert.show({title: '提交成功'});
                } else {
                    this.$vux.alert.show({title: '提交失败'});
                }
            }).catch(err => {
                this.$vux.alert.show({title: '提交失败'});
            });
        }
        ,

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
    }
};
</script>

<style lang="less" scoped>
ul,
li {
    list-style: none;
}
.group-item {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    &:last-child {
        margin-bottom: 0.2rem;
    }
    .inline-x-number {
        .vux-number-selector {
            background-color: #b93647 !important;
        }
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
.img-list {
    img {
        width: 90%;
        border-radius: 5px;
    }
}
.addPic {
    height: 0.17rem;
    font-size: 0.12rem;
    font-family: PingFangSC-Medium;
    color: rgba(153, 153, 153, 1);
    line-height: 0.17rem;
}
input[type="file"] {
    color: transparent;
    opacity: 0;
}
.square {
    width: 0.4rem;
    height: 0.4rem;
    border: 1px solid #b53141;
    background: url(../../assets/images/icon-plug.png) no-repeat;
    background-size: 50% 50%;
    background-position: center;
}

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
.photo-list{padding:0.1rem 0 0;}
.photo-list.border0{border-bottom:0;padding-bottom: 0;}
.photo-list ul{font-size:0;list-style:none;}
.photo-list ul li{font-size:0;display:inline-block;
    margin-right:.2rem;position:relative;vertical-align:top;width:.6rem;height:.6rem;overflow:hidden;margin-bottom:.2rem;}
.photo-list ul li:first-child{margin-left:0;}
.photo-list .operate{display:none;background:rgba(33,33,33,.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#b2404040, endColorstr=#b2404040);z-index:5;position:absolute;bottom:0;left:0;right:0;height:12px;padding-bottom:7px;font-size:12px;color:#fff;text-align: center}
.photo-list .info{line-height:.6rem;text-align:center}
.photo-list .preview{width: 0.6rem;height:.6rem;z-index:4;line-height:.6rem;font-family:arial;background-color: #dbdbdb;background-repeat:no-repeat;position:absolute;bottom:0;left:0;text-align:center;right:0;cursor: pointer;border:1px solid #fff;box-sizing: border-box;}
.photo-list .preview#addUpload{background-color:#fff;border: 1px solid #b53141;}
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
<style lang="less">
.group-item {
    .inline-x-number {
        .vux-number-selector {
            background-color: #b93647;
            padding: 0;
            &.vux-number-selector-sub {
                padding: 0 1px;
            }
            svg {
                fill: #fff;
            }
        }
        input[readonly] {
            padding: 0;
            border: 0;
            height: 22px;
            line-height: 22px;
        }
    }
}
</style>
