<template>
    <div class="page-body disabled-tabbar">
        <x-header>发起活动</x-header>
        <div class="group-item">
            <group-title slot="title">
                <b>活动时间</b>
            </group-title>
            <flexbox :gutter="0">
                <flexbox-item>
                    <input type="text">
                </flexbox-item>
                <flexbox-item class="input-addon">
                    <x-button mini type="warn">
                        <i class="iconfont dlb-icon-rili"></i>
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
                    <input type="text">
                </flexbox-item>
                <flexbox-item class="input-addon">
                    <x-button mini type="warn">
                        <i class="iconfont dlb-icon-rili"></i>
                    </x-button>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动名称</b>
            </group-title>
            <input type="text">
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动地点</b>
            </group-title>
            <input type="text">
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动发起人</b>
            </group-title>
            <input type="text">
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动负责人</b>
            </group-title>
            <input type="text">
        </div>
        <div class="group-item">
            <group-title slot="title">
                <b>活动内容</b>
            </group-title>
            <textarea cols="30" rows="10"></textarea>
        </div>
        <div class="group-item">
            <group-title slot="title"></group-title>
            <x-button type="warn">
                生成活动二维码
            </x-button>
        </div>
    </div>
</template>

<script>
import { XHeader, GroupTitle, Flexbox, FlexboxItem, XButton } from 'vux';
export default {
    components: {
        XHeader,
        GroupTitle,
        Flexbox,
        FlexboxItem,
        XButton
    },
    data() {
        return { value1: '' };
    }
};
</script>

<style lang="less" scoped>
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
</style>