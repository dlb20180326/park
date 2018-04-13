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
                    <cell :border-intent="false" disabled title="获得总分" :value="totalscore" value-align="left"></cell>
                </group>
                <div class="item-list" v-if="item.status != null" v-for="(item,i) of list" :key="i">
                    <div class="item">
                        <div class="header">{{item.title}}</div>
                        <div class="body">
                            <span class="desc">{{item.message}}</span>
                            <flexbox class="img-list" :gutter="0" wrap="wrap">
                                <flexbox-item v-for="(img,ii) of item.memo" :key="ii" :span="1/3">
                                    <img :src="'picture/show/'+img" alt="">
                                </flexbox-item>
                            </flexbox>
                        </div>
                        <flexbox class="footer" v-if="item.status == 1">
                            <flexbox-item>
                                <x-button @click.native="auditReject(item)" :mini="true" type="warn">
                                    驳回
                                </x-button>
                            </flexbox-item>
                            <flexbox-item>
                                <x-button @click.native="auditResolve(item)" :mini="true" type="warn">
                                    通过审核
                                </x-button>
                            </flexbox-item>
                        </flexbox>
                        <flexbox class="footer" justify= "center" v-if="item.status == 2">
                            审核成功
                        </flexbox>
                        <flexbox class="footer" justify= "center" v-if="item.status == 3">
                            已拒绝
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
        XTextarea
    },
    props: ["userId", "Id", "name", "departmentId", "totalscore"],
    data() {
        return {
            currItem: null,
            rejectReason: "",
            showRejectDialog: false,
            list: []
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
        getlist() {
            axios({
                method: "get",
                url: "/dangjian/pavantgrade/getList",
                params: {
                    userId: this.userId
                }
            })
                .then(res => {
                    console.log(res);
                    this.list = res.data;
                    this.list.forEach(item => {
                        item.memo = (item.memo && item.memo.split(",")) || [];
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        auditReject(item) {
            this.currItem = item;
            this.showRejectDialog = true;
        },
        auditResolve(item) {
            axios({
                method: "post",
                url: "/dangjian/pavantgrade/examineOK",
                params: {
                    id: item.id
                }
            })
                .then(res => {
                    this.$vux.toast.show({
                        text: res.data.msg,
                        type: "text",
                        position: "top"
                    });
                    this.rejectReason = "";
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        dialogConfirm() {
            axios({
                method: "post",
                url: "/dangjian/pavantgrade/examineNo",
                params: {
                    id: this.currItem.id,
                    rejectReson: this.rejectReason
                }
            })
                .then(res => {
                    this.$vux.toast.show({
                        text: res.data.msg,
                        type: "text",
                        position: "top"
                    });
                    this.rejectReason = "";
                })
                .catch(function(error) {
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
</style>
