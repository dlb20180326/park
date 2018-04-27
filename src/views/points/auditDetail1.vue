<template>
    <div class="page-body points-auditDetail">
        <x-header>
            审核详情
        </x-header>
        <div v-transfer-dom class="points-auditDetail-dialog">
            <x-dialog v-model="showRejectDialog" hide-on-blur :dialog-style="{width: '80%'}">
                <x-header :left-options="{showBack: false}">
                    驳回原因
                </x-header>
                <group>
                    <x-textarea v-model="rejectReason"></x-textarea>
                </group>
                <flexbox>
                    <flexbox-item>
                        <x-button @click.native="dialogConfirm" :mini="true" type="warn">
                            确定
                        </x-button>
                    </flexbox-item>
                    <flexbox-item>
                        <x-button @click.native="dialogCancel" :mini="true" type="warn">
                            取消
                        </x-button>
                    </flexbox-item>
                </flexbox>
            </x-dialog>
        </div>
        <flexbox orient="vertical" align="initial">
            <view-box class="view-box">
                <group label-width="80px" label-margin-right="20px">
                    <cell class="no-border" :border-intent="false" disabled title="党员姓名" :value="userName" value-align="left"></cell>
                    <cell :border-intent="false" disabled title="获得总分" :value="totalscore||0.0" value-align="left"></cell>
                </group>
                <div class="item-list" v-if="item.message!=''" v-for="(item,i) of list" :key="i">
                    <div class="item">
                        <div class="header">{{item.title}} <span v-if="i==2">支部书记评分{{item.itemscore}}分</span>  </div>
                        <div class="body">
                            <span class="desc">{{item.message}}</span>
                            <div class="img-show">
                                <img class="previewer-demo-img" v-for="(it,idx) in item.memos" :src="it.src" width="100"  @click="atBig(idx,i)">
                                <div v-transfer-dom>
                                <previewer :list="item.memos" ref="previewer"  slot="names"  :options="options" @on-index-change="logIndexChange">
                                </previewer>
                                </div>
                            </div>
                        </div>
                        <flexbox class="footer" v-if="item.status == 0">
                            <x-button  :mini="true" type="warn" >等待领导审核中</x-button>
                        </flexbox>
                        <flexbox class="footer" justify= "center" v-if="item.status == 2">
                            <x-button  :mini="true" type="warn" >审核通过</x-button>
                        </flexbox>
                        <flexbox class="footer" justify= "center" v-if="item.status == 3">
                            <x-button  :mini="true" style="color:gray">已拒绝</x-button>
                        </flexbox>
                        <flexbox class="footer" justify= "left" v-if="item.status == 3" style="text-align:left;">
                            <table>
                                <tr>
                                <td style="width:5em">拒绝原因:</td>
                                <td>{{item.rejectReson}}</td>
                                </tr>
                            </table>
                        </flexbox>
                    </div>
                </div>
            </view-box>
        </flexbox>
    </div>
</template>
<script>
import axios from "axios";
import {
    XHeader,
    Flexbox,
    FlexboxItem,
    Previewer,
    ViewBox,
    Group,
    Cell,
    XButton,
    XDialog,
    XTextarea,
    TransferDomDirective as TransferDom
} from "vux";
export default {
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        Flexbox,
        FlexboxItem,
        ViewBox,
        Group,
        Cell,
        XButton,
        XDialog,
        XTextarea,
        Previewer
    },
    props: ["userId", "Id", "name", "departmentId", "totalscore"],
    data() {
        return {
            currItem: null,
            rejectReason: "",
            showRejectDialog: false,
            list: [],
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
        };
    },
    computed: {
        userName() {
            return decodeURIComponent(this.name);
        }
    },
    mounted() {
        this.getlist();
    },
    methods: {
        getInfo() {
            axios.get('ppartymember/queryByUserId', {
                params: {
                    userid: this.userId
                }
            })
                .then(res => {
                    this.totalscore = res.data.totalscore || 0.0;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        atBig (index,i) {
            console.log(this.$refs);
            this.$refs.previewer[i].show(index);
        },
        getlist() {
            axios({
                method: "get",
                url: "pavantgrade/getList",
                params: {
                    userId: this.userId
                }
            })
                .then(res => {
                    this.list = res.data;
                    this.list.forEach(item => {
                        item.memo = (item.memo && item.memo.split(",")) || [];

                        item.memos =[];

                        for(var i=0;i<item.memo.length;i++){
                            var obj = {};
                            obj.msrc = 'http://www.dlbdata.cn/dangjian/picture/show?pictureId='+ item.memo[i];
                            obj.src = 'http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId='+item.memo[i];
                            item.memos.push(obj);
                        }


                    });

                    this.getInfo();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        logIndexChange (arg) {
                    console.log(arg)
        },
        auditReject(item) {
            this.currItem = item;
            this.showRejectDialog = true;
        },
        auditResolve(item) {
            axios({
                method: "post",
                url: "pavantgrade/examineOK",
                params: {
                    id: item.id
                }
            })
                .then(res => {
                    if(res.success){
                        this.$vux.alert.show({title: res.msg});
                        userName();
                    }else{
                        this.$vux.alert.show({title:  res.msg});
                    }
                    window.location.reload();
                })
                .catch(function(error) {
                    this.$vux.alert.show({title: '提交失败'});
                });
        },
        dialogConfirm() {
            axios({
                method: "post",
                url: "pavantgrade/examineNo",
                params: {
                    id: this.currItem.id,
                    rejectReson: this.rejectReason
                }
            }).then(res => {
                if(res.success){
                    this.$vux.alert.show({title: '拒绝成功'});
                }else{
                    this.$vux.alert.show({title: '提交失败'});
                }

                this.rejectReason = "";
            })
            .catch(function(error) {
                this.$vux.alert.show({title: '提交失败'});
                console.log(error);
            });
            this.showRejectDialog = false;
        },
        dialogCancel() {
            this.currItem = null;
            this.rejectReason = "";
            this.showRejectDialog = false;
        }
    }
};
</script>
<style lang="less">

td {
    word-wrap: break-word;
    word-break: break-all;
    vertical-align:top;
}
.points-auditDetail-dialog {
    .weui-dialog {
        .vux-header {
        }
        .weui-cells {
            margin-top: 0;
            &:before,
            &:after {
                border: 0;
            }
        }
        textarea {
            background: #f4f4f4;
        }
        .vux-flexbox {
            margin: 10px;
            text-align: center;
            .weui-btn {
                width: 100px;
            }
        }
    }
}
.page-body.points-auditDetail {
    background: #fff;
    .view-box {
        padding: 10px 20px;
        .weui-cells,
        .weui-cell {
            margin-top: 0;
            &:before {
                border-top: 0;
            }
        }

        .item-list {
            .item {
                margin: 10px;
                border-bottom: 1px solid #d9d9d9;
                .header,
                .body,
                .footer {
                    margin: 10px 0;
                }
                .header {
                    color: #b2b2b2;
                }
                .body {
                    .img-list {
                        margin-top: 10px;
                        img {
                            width: 90%;
                            border-radius: 5px;
                        }
                    }
                }
                .footer {
                    text-align: center;
                }
            }
        }

    }
}
.page-body.points-auditDetail .view-box .item-list:last-child .item{border-bottom:0}
.img-show{width:100%;height:auto;}
.img-show img{width:31%;height:1rem;margin-top:.1rem;margin-right:10px}
.img-show img:nth-child(3n+3){margin-right:0}
.img-left{width:.37rem;height:.37rem;position:absolute;left:.1rem;top:3.15rem;;z-index:900;}
.img-right{width:.37rem;height:.37rem;position:absolute;right:.1rem;top:3.15rem;z-index:900;}
</style>
