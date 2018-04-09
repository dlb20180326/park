<template>
    <div class="page-body party-information">
        <x-header>
            党务信息
        </x-header>
        <flexbox orient="vertical" align="initial">
            <view-box>
                <div class="header">
                    <div class="group-name">
                        花旗银行第一党支部
                    </div>
                    <flexbox :gutter="0">
                        <flexbox-item>支部书记:韩书记</flexbox-item>
                        <flexbox-item>支部人数:25人</flexbox-item>
                    </flexbox>
                </div>
                <div class="points-table">
                    <flexbox :gutter="0">
                        <flexbox-item>姓名</flexbox-item>
                        <flexbox-item>性别</flexbox-item>
                        <flexbox-item>年龄</flexbox-item>
                        <flexbox-item>积分</flexbox-item>
                    </flexbox>
                    <flexbox :gutter="0">
                        <flexbox-item>张海丽</flexbox-item>
                        <flexbox-item>女</flexbox-item>
                        <flexbox-item>28</flexbox-item>
                        <flexbox-item>30</flexbox-item>
                    </flexbox>
                </div>
            </view-box>
        </flexbox>

    </div>
</template>
<script>
import { XHeader, Flexbox, FlexboxItem, ViewBox } from "vux";
export default {
    components: {
        XHeader,
        Flexbox,
        FlexboxItem,
        ViewBox
    },
    data() {
        return {};
    },
    mounted() {}
};
</script>
<style lang="less" scoped>
.page-body.party-information {
    background: #f4f4f4;
    #vux_view_box_body {
        padding: 10px 20px;
        .header {
            box-sizing: border-box;
            border-radius: 5px;
            height: 100px;
            width: 100%;
            margin: 5px 0 30px;
            padding: 10px;
            background: url(../../assets/images/party-info-bg.jpg) 100% / cover
                no-repeat;
            color: #fff;
            box-shadow: 5px 5px 10px #ddd;
            .group-name {
                text-align: center;
                font-size: 18px;
                line-height: 3;
                color: #fff;
                font-weight: 700;
            }
            .vux-flexbox {
                .vux-flexbox-item {
                    text-align: center;
                }
            }
        }
        .points-table {
            box-sizing: border-box;
            border-radius: 5px;
            margin: 5px 0 30px;
            padding: 10px;
            color: #000;
            background: #fff;
            box-shadow: 5px 5px 10px #ddd;
            text-align: center;
            .vux-flexbox {
                &:first-child {
                    margin-bottom: 10px;
                    color: #a31525;
                }
                .vux-flexbox-item {
                    text-align: center;
                    &:last-child {
                        color: #a31525;
                    }
                }
            }
        }
    }
}
</style>