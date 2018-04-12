<template>
    <div class="page-body">
        <x-header :left-options="{showBack: false}">
            党员活动
            <router-link slot="right" to="/active/new">发起活动</router-link>
        </x-header>
        <div class="box">
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
                        <flexbox-item :span="1/3" v-for="(item, index) in imgs" :key="index">
                            <div><img v-clipping="item"></div>
                        </flexbox-item>
                        <flexbox-item :span="1/3">
                            <a class="btn-plus" @click="chooseImage"></a>
                        </flexbox-item>
                    </flexbox>
                    <div v-for="(item, index) in localIds" :key="index">
                        {{ item }}
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem } from 'vux';
import wx from 'weixin-js-sdk';
import weixin from '@/services/weixin';

export default {
    components: {
        XHeader,
        Flexbox,
        FlexboxItem
    },
    directives: {
        clipping: {
            inserted: (el, binding) => {
                const img = new Image();
                img.onload = () => {
                    if (img.width > img.height) {
                        el.style.height = '100%';
                    } else {
                        el.style.width = '100%';
                    }
                    el.src = binding.value;
                };
                img.src = binding.value;
            }
        }
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
            ],
            imgs: [
                require('@/assets/images/preview.jpg'),
                require('@/assets/images/preview1.jpg'),
                require('@/assets/images/preview2.jpg'),
                require('@/assets/images/preview3.jpg')
            ],
            localIds: []
        };
    },
    mounted() {
        weixin.init(['chooseImage', 'uploadImage', 'getLocalImgData']);
    },
    methods: {
        chooseImage() {
            wx.chooseImage({
                // count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: res => {
                    // const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    (res.localIds || []).map(localId => {
                        wx.uploadImage({
                            localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: res => {
                                // var serverId = res.serverId; // 返回图片的服务器端ID
                                this.$http
                                    .get('picture/upload', {
                                        params: {
                                            mediaId: res.serverId
                                        }
                                    })
                                    .then(result => {
                                        this.localIds.push(result);
                                        // this.$http.get('picture/show',{params:{pictureId:result.id}})
                                    });
                            }
                        });
                        wx.getLocalImgData({
                            localId: localId, // 图片的localID
                            success: res => {
                                var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                            }
                        });
                    });
                }
            });
        }
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
            // img {
            //     max-width: 100%;
            //     max-height: 100%;
            // }
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