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
                    <cell class="no-border" :border-intent="false" disabled title="党员姓名" value="王俊凯" value-align="left"></cell>
                    <cell :border-intent="false" disabled title="获得总分" value="13" value-align="left"></cell>
                </group>
                <div class="item-list">
                    <div class="item">
                        <div class="header">获得荣誉:</div>
                        <div class="body">
                            <span class="desc">王俊凯大家肯定是多萨科了解对方会计法萨科夫i</span>
                            <flexbox class="img-list" :gutter="0" wrap="wrap">
                                <flexbox-item :span="1/3">
                                    <img src="../../assets/images/preview.jpg" alt="">
                                </flexbox-item>
                                <flexbox-item :span="1/3">
                                    <img src="../../assets/images/preview.jpg" alt="">
                                </flexbox-item>
                                <flexbox-item :span="1/3">
                                    <img src="../../assets/images/preview.jpg" alt="">
                                </flexbox-item>
                                <flexbox-item :span="1/3">
                                    <img src="../../assets/images/preview.jpg" alt="">
                                </flexbox-item>
                            </flexbox>
                        </div>
                        <flexbox class="footer">
                            <flexbox-item>
                                <x-button @click.native="auditReject" :mini="true" type="warn">
                                    驳回
                                </x-button>
                            </flexbox-item>
                            <flexbox-item>
                                <x-button @click.native="auditResolve" :mini="true" type="warn">
                                    通过审核
                                </x-button>
                            </flexbox-item>
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
    data() {
        return {
            rejectReason: "",
            showRejectDialog: false
        };
    },
    mounted() {
        this.getlist()
    },
    methods: {
        getlist() {
            axios({
                method: "get",
                url: "/dangjian/pavantgrade/getList",
                params: {
                    userId: this.$route.params.userId
                }
            })
                .then(res => {
                    console.log(res);
                    this.list = res.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        auditReject() {
            this.showRejectDialog = true;
        },
        auditResolve() {},
        dialogConfirm() {},
        dialogCancel() {}
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