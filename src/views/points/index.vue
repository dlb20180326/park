<template>
    <div class="page-body">
        <x-header :left-options="{showBack: false}">
            党员积分
        </x-header>
        <div class="box">
            <div class="head">
                <flexbox>
                    <flexbox-item class="avatar">
                        <img src="@/assets/images/icon-head.png">
                    </flexbox-item>
                    <flexbox-item>
                        <div class="label">积分周期：</div>
                        <div>2018年1月1日 - 12月31日</div>
                    </flexbox-item>
                </flexbox>
                <flexbox :gutter="15">
                    <flexbox-item>
                        <div class="piece">
                            <div>现党员积分</div>
                            <span>22</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="piece">
                            <div>年度党员评级</div>
                            <span>暂无</span>
                        </div>
                    </flexbox-item>
                </flexbox>
            </div>
            <div class="body">
                <tab v-model="tabIndex" :line-width="5" active-color="#666" bar-active-color="#a0333b" custom-bar-width="1rem">
                    <tab-item>
                        <b>积分进度</b>
                    </tab-item>
                    <tab-item>
                        <b>获取明细</b>
                    </tab-item>
                </tab>
                <transition name="fade">
                    <div class="tab-content" v-if="tabIndex===0">
                        <div class="item-detail">
                            <div class="title">
                                <b>1. 政治学习</b>
                                <div class="space"></div>
                                <span class="number">12</span>/20
                            </div>
                            <div class="content">
                                <x-progress :percent="percent" :show-cancel="false"></x-progress>
                            </div>
                            <div class="content">
                                <x-button mini type="warn">
                                    点击+积分
                                </x-button>
                            </div>
                        </div>
                        <div class="item-detail">
                            <div class="title">
                                <b>2. 政治学习</b>
                                <div class="space"></div>
                                <span class="number">12</span>/20
                            </div>
                            <div class="content">
                                <x-progress :percent="percent" :show-cancel="false"></x-progress>
                            </div>
                            <div class="content">
                                <x-button mini type="warn">
                                    点击+积分
                                </x-button>
                            </div>
                        </div>
                        <div class="item-detail">
                            <div class="title">
                                <b>3. 政治学习</b>
                                <div class="space"></div>
                                <span class="number">12</span>/20
                            </div>
                            <div class="content">
                                <x-progress :percent="percent" :show-cancel="false"></x-progress>
                            </div>
                            <div class="content">
                                <x-button mini type="warn">
                                    点击+积分
                                </x-button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" v-if="tabIndex===1">
                        <div class="item-detail">
                            <flexbox>
                                <flexbox-item class="label">
                                    获取时间：
                                </flexbox-item>
                                <flexbox-item>
                                    2018年1月1日 - 12月31日
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    积分类型：
                                </flexbox-item>
                                <flexbox-item>
                                    党费缴纳
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    审核人：
                                </flexbox-item>
                                <flexbox-item>
                                    支部书记
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    积分变动：
                                </flexbox-item>
                                <flexbox-item>
                                    <span class="number">+5分</span>
                                </flexbox-item>
                            </flexbox>
                        </div>
                        <div class="item-detail">
                            <flexbox>
                                <flexbox-item class="label">
                                    获取时间：
                                </flexbox-item>
                                <flexbox-item>
                                    2018年1月1日 - 12月31日
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    积分类型：
                                </flexbox-item>
                                <flexbox-item>
                                    党费缴纳
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    审核人：
                                </flexbox-item>
                                <flexbox-item>
                                    支部书记
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    积分变动：
                                </flexbox-item>
                                <flexbox-item>
                                    <span class="number">+5分</span>
                                </flexbox-item>
                            </flexbox>
                        </div>
                        <div class="item-detail">
                            <flexbox>
                                <flexbox-item class="label">
                                    获取时间：
                                </flexbox-item>
                                <flexbox-item>
                                    2018年1月1日 - 12月31日
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    积分类型：
                                </flexbox-item>
                                <flexbox-item>
                                    党费缴纳
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    审核人：
                                </flexbox-item>
                                <flexbox-item>
                                    支部书记
                                </flexbox-item>
                            </flexbox>
                            <flexbox>
                                <flexbox-item class="label">
                                    积分变动：
                                </flexbox-item>
                                <flexbox-item>
                                    <span class="number">+5分</span>
                                </flexbox-item>
                            </flexbox>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem, Tab, TabItem, XProgress, XButton } from 'vux';
export default {
    components: { XHeader, Flexbox, FlexboxItem, Tab, TabItem, XProgress, XButton },
    data() {
        return {
            tabIndex: 0,
            percent: 60
        };
    }
};
</script>

<style lang="less" scoped>
.page-body {
    display: flex;
    flex-direction: column;
    background-color: #efefef;
}
.box {
    flex: 1;
    overflow-y: auto;
}
.head,
.body {
    background-color: #fff;
    // line-height: 2;
    padding: 0.15rem;
}
.head {
    .label {
        font-size: 0.14rem;
        color: #999;
    }
}
.body {
    flex: 1;
    margin-top: 0.15rem;
}
.vux-flexbox-item.avatar {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex: 0 0 auto;
    width: 1rem;
    min-height: 0.7rem;
    img {
        width: 0.6rem;
        height: 0.6rem;
        margin-top: 0.05rem;
        border-radius: 50%;
        box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.15);
        background-color: rgba(0, 0, 0, 0.03);
    }
}
.vux-flexbox-item.label {
    flex: 0 0 auto;
    width: 0.8rem;
    color: #999;
}
.piece {
    margin-top: 0.1rem;
    padding: 0.1rem;
    border-radius: 5px;
    background-color: #efefef;
    text-align: center;
    span {
        font-size: 0.24rem;
        color: #ea8031;
    }
}
.item-detail {
    margin-top: 0.05rem;
    padding: 0.15rem 0.1rem;
    border-top: 1px solid #eee;
    &:first-child {
        border-top: 0;
    }
    .title {
        color: #666;
    }
    .content {
        margin-top: 0.15rem;
        text-align: center;
    }
    .space {
        display: inline-block;
        width: 0.5rem;
    }
    .number {
        color: #a0333b;
    }
}
</style>
<style scoped>
.vux-tab-warp>>>.vux-tab-bar-inner {
    border-radius: 5px;
}
.vux-tab-warp>>>.vux-tab .vux-tab-item {
    background: transparent;
    font-size: 0.18rem;
}
.weui-progress>>>.weui-progress__bar {
    height: 0.2rem;
    border-radius: 0.2rem;
}
.weui-progress>>>.weui-progress__inner-bar {
    border-radius: 0.2rem;
    background-color: #ea8031;
}
</style>
