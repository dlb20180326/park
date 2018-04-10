<template>
    <div class="page-body">
        <x-header :left-options="{showBack: false}">
            花旗银行第二党支部
        </x-header>
        <div class="box">
            <div class="head">
                <flexbox>
                    <flexbox-item class="label">
                        党支部书记：
                    </flexbox-item>
                    <flexbox-item>

                    </flexbox-item>
                </flexbox>
                <flexbox>
                    <flexbox-item class="label">
                        所属片区：
                    </flexbox-item>
                    <flexbox-item>
                        上海中心片区
                    </flexbox-item>
                </flexbox>
                <flexbox>
                    <flexbox-item class="label">
                        党支部评级：
                    </flexbox-item>
                    <flexbox-item>
                        三级党支部
                    </flexbox-item>
                </flexbox>
                <flexbox>
                    <flexbox-item class="label">
                        现有党员：
                    </flexbox-item>
                    <flexbox-item>
                        <span class="number">25</span>
                        人
                    </flexbox-item>
                </flexbox>
            </div>
            <div class="list">
                <h3>书记代办事宜</h3>
                <div class="item">
                    <div class="title">1. 党员先锋作用积分加分确认</div>
                    <div class="content">
                        <x-button type="warn">
                            去处理
                        </x-button>
                    </div>
                </div>
                <div class="item">
                    <div class="title">2. 陆家嘴植树活动即将开启</div>
                    <div class="content">
                        <x-button type="warn">
                            活动二维码
                        </x-button>
                    </div>
                </div>
                <div class="item">
                    <div class="title">3. 2018年第三次组织生活会图片上传</div>
                    <div class="content">
                        <x-button type="warn">
                            去处理
                        </x-button>
                    </div>
                </div>
                <div class="item">
                    <div class="title">4. 2018年第三次组织生活会图片上传</div>
                    <div class="content">
                        <x-button type="warn">
                            去处理
                        </x-button>
                    </div>
                </div>
                <div class="item">
                    <div class="title">5. 2018年第三次组织生活会图片上传</div>
                    <div class="content">
                        <x-button type="warn">
                            去处理
                        </x-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { XHeader, GroupTitle, Flexbox, FlexboxItem, XButton } from 'vux';
export default {
    components: { XHeader, GroupTitle, Flexbox, FlexboxItem, XButton }
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
.list {
    background-color: #fff;
    line-height: 2;
    padding: 0.15rem;
}
.list {
    margin-top: 0.15rem;
    h3 {
        line-height: 1;
    }
    .item {
        margin-top: 0.15rem;
        padding: 0.1rem 0;
        border-top: 1px solid #eee;
        &:first-child {
            border-top: 0;
        }
    }
    .title {
        color: #666;
    }
    .content {
        margin-top: 0.1rem;
        text-align: center;
    }
}
.number {
    color: #a0333b;
}
.vux-flexbox-item.label {
    flex: 0 0 auto;
    width: auto;
    color: #8b8b8b;
}
</style>