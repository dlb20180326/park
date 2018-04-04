<template>
    <div class="page-body">
        <flexbox class="page-header" :gutter="0" align="end" justify="space-between">
            <flexbox-item>
                <img src="@/assets/images/left-row.png" height="20vw"> 返回
            </flexbox-item>
            <flexbox-item>
                <h4>党员活动</h4>
            </flexbox-item>
            <flexbox-item>
                发起活动
            </flexbox-item>
        </flexbox>
        <flexbox class="list-item" v-for="(item, index) in list" :key="index" :gutter="0" align="stretch">
            <flexbox-item class="list-avatar">
                <img src="@/assets/images/icon-head.png">
            </flexbox-item>
            <flexbox-item class="list-body">
                <flexbox align="start">
                    <flexbox-item class="list-head">
                        <b>{{item.title}}</b>
                        <p>{{item.date}}</p>
                    </flexbox-item>
                    <flexbox-item class="list-close">
                        <a><img src="@/assets/images/x.png"></a>
                    </flexbox-item>
                </flexbox>
                <div class="list-content" v-html="item.content"></div>
                <flexbox class="images-preview" :gutter="0" wrap="wrap">
                    <flexbox-item :span="1/3">
                        <div><img src="@/assets/images/preview.jpg"></div>
                    </flexbox-item>
                    <flexbox-item :span="1/3">
                        <div><img src="@/assets/images/preview1.jpg"></div>
                    </flexbox-item>
                    <flexbox-item :span="1/3">
                        <div><img src="@/assets/images/preview2.jpg"></div>
                    </flexbox-item>
                    <flexbox-item :span="1/3">
                        <div><img src="@/assets/images/preview3.jpg"></div>
                    </flexbox-item>
                    <flexbox-item :span="1/3">
                        <a class="btn-plus"></a>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux';

export default {
    components: {
        Flexbox,
        FlexboxItem
    },
    data() {
        return {
            list: [
                {
                    title: '汇丰银行 - 支部',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                },
                {
                    title: '上海中心 - 支部',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                },
                {
                    title: '金领驿站',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                },
                {
                    title: '汇丰银行 - 支部',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                },
                {
                    title: '上海中心 - 支部',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                },
                {
                    title: '金领驿站',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                },
                {
                    title: '汇丰银行 - 支部',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                },
                {
                    title: '上海中心 - 支部',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                },
                {
                    title: '金领驿站',
                    date: '4月5日',
                    content:
                        '天文学家一直在研究他们称之为婴儿宇宙的大型3D地图。该地图由兰开斯特大学的David Sobral博士领导的一个团队在欧洲揭幕。巨大的地图是使用夏威夷的斯巴鲁望远镜和加那利群岛的伊萨克牛顿望远镜获得数据制作。'
                }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.page-body {
    flex: 1;
    overflow: auto;
    background-color: #efefef;
}
.page-header {
    height: 0.6rem;
    background-color: #a0333b;
    color: #fff;
    .vux-flexbox-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0.4rem;
        font-size: 0.18rem;
        &:first-child,
        &:last-child {
            flex: 0 0 auto;
            width: auto;
            min-width: 0.5rem;
            padding-left: 0.15rem;
            font-size: 0.14rem;
            justify-content: start;
        }
        &:last-child {
            padding-left: 0;
            padding-right: 0.15rem;
            justify-content: end;
        }
    }
}
.vux-flexbox.list-item {
    background-color: #fff;
    &:not(:last-child) {
        margin-bottom: 0.15rem;
    }
}
.vux-flexbox-item.list-avatar {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex: 0 0 auto;
    width: 0.8rem;
    min-height: 0.8rem;
    img {
        width: 0.6rem;
        height: 0.6rem;
        margin-top: 0.1rem;
        border-radius: 50%;
        box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.15);
        background-color: rgba(0, 0, 0, 0.03);
    }
}
.vux-flexbox-item.list-body {
    padding: 0.1rem 0;
}
.vux-flexbox-item.list-head {
    p {
        font-size: 0.12rem;
        color: #999;
    }
}
.vux-flexbox-item.list-close {
    flex: 0 0 auto;
    width: 0.36rem;
    line-height: 1;
    padding-top: 0.05rem;
}
.list-content {
    margin-top: 0.1rem;
    padding-right: 0.15rem;
    font-size: 0.14rem;
}
.images-preview {
    margin-top: 0.1rem;
    & > .vux-flexbox-item {
        position: relative;
        &:after {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
        & > div,
        & > a {
            position: absolute;
            width: 90%;
            height: 90%;
            border-radius: 5%;
            box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.15);
            background-color: rgba(0, 0, 0, 0.03);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                min-width: 100%;
            }
            &.btn-plus {
                background-image: url(../../assets/images/add_bg.png);
                background-position: center center;
                background-repeat: no-repeat;
                cursor: pointer;
            }
        }
    }
}
</style>