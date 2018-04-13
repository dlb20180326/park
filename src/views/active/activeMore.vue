<template>
    <div class="page-body disabled-tabbar">
        <x-header>全部活动</x-header>
        <div class="group-item">
                    <div class="allLine" v-for="(item,index) in active" :key="index">
                        <div>
                            <span class="colorL">时间：</span>
                            <span class="colorW">{{datePick(item.startTime)}}</span>
                        </div>
                        <div>
                            <span class="colorL">地点：</span>
                            <span class="colorW">{{item.activePace}}</span>
                        </div>
                        <div>
                            <span class="colorL">发起人：</span>
                            <span class="colorW">{{item.activeCreatePeopleName}}</span>

                        </div>
                        <div>
                            <span class="colorL">活动内容：</span>
                            <span class="colorW">{{item.activeContext}}</span>

                        </div>
                    	<div class="book">
                    		<a @click="submit(item.id)">报名</a>
                		</div>
                		
                	</div>
                	<!--<div class="grayLine"></div>-->
        </div>
        <div v-transfer-dom>
            <alert v-model="show" :title="msg" @on-show="onShow" @on-hide="onHide">谢谢</alert>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
import { XHeader, GroupTitle, cookie,Flexbox, FlexboxItem, XButton ,Alert,TransferDomDirective as TransferDom} from 'vux';
export default {
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        GroupTitle,
        Flexbox,
        FlexboxItem,
        XButton,
        Alert,
    },
    data() {
        return {
            departmentid:this.$store.getters.user.departmentid,
            active:[],
            show:false,
            msg:'',
            userId:cookie.get('userId'),
            isActive:false
        };
    },
    methods:{
        getActivityMore(){
            axios({
                method: 'get',
                url: '/dangjian/active/getParticipateActive',
                params: {
                    pageNum:1,
                    pageSize:3,
                    departmentid:this.departmentid,
                    userId:this.$store.getters.user.userid
                }
            }) .then((res)=> {
                console.log(res.data.list)
                this.active=res.data.list;
            })
                .catch(function (error) {
                    console.log(error);
                });


        },
    submit(id){
        console.log(id)

       axios({
            method: 'post',
            url: '/dangjian/active/participate',
            params: {
                userId:this.userId,
                activeId:id,
                departmentid:this.departmentid,


            }
        }) .then((res)=> {


            this.msg=res.msg,
                this.show=true



        })
            .catch(function (error) {
                console.log(error);
            });

    },
    onHide () {
        console.log('on hide')
    },
    onShow () {
        console.log('on show')
    },
    datePick(s){
	Date.prototype.toLocaleString = function(){
		return this.getFullYear() +'.'+ (this.getMonth()+1)+'.'+this.getDay()
	}
	return new Date(s).toLocaleString();

	}
    } ,
    mounted() {
        this.getActivityMore();
        console.log(this.$store.getters.user.userid);

    }
};
</script>

<style lang="less" scoped>
.page-body{
	flex: 1;
}
/*.grayLine{width:100%;height:.1rem;background:#F3F3F3;}*/
.group-item {
	width:calc(100% - 0.4rem);
	padding-left:0.2rem;
	padding-right:0.2rem;  
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


*{
    margin:0; padding:0;
}
ul, li {
    list-style-type:none;
    margin:0;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal;
}
a {
    color: #666;
    text-decoration:none;
}
img {
    border:0;
    vertical-align:middle;
}
textarea {
    font-family:'Microsoft Yahei';
}
body {
    color:#666;
    background:#f4f4f4;
    font-size:4vw;
}

table {
    border-collapse:collapse;
}
input {
    border:0;
}
.clearfix:after {
    content: " ";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
}
.clearfix {
    zoom: 1;
}
.fl {
    float:left;
}
.fr {
    float:right;
}
.p15 {
    padding:4vw;
}
.display {
    display:block;
}
.header {
    background:#b42f40;
    color:#fff;
    text-align:center;
    padding:3vw 0;
    position:relative;
}
.mainbox {
    background:#fff;
    width:100%;
    margin-bottom:2vw;
}
.weui-cell1 {
    padding-bottom:0;
}
.weui-cell__bd1 {
    font-size:6vw;
}
.weui-cells {
    font-size:4.5vw;
}
.weui-form-preview__bd {
    text-align:left;

}

.mainbox1 {
    padding:4vw 4vw 1vw 4vw;
}
.barbg {
    background:#f5f5f5;
    border-radius:1vw;
    padding:0vw 4vw 2vw;
    margin-bottom:3vw;
}
.barbg span {
    color:#fa7e07;
    font-size:7vw;
}
.book {
    text-align:center;
    padding:2vw 0 5vw 0;
}
.book a {
    display:inline-block;
    border-radius:1vw;
    background:#9d0e1e;
    color:#fff;
    padding:2vw 0;
    width:35vw;

}
.book.on a {
    background:#d8d8d8;
}

.table td {
    padding:3px;
}
.news {
    margin-top:4vw;
}
.news li {
    border-bottom:1px solid #f3f3f3;
    line-height:12vw;
}
.header a {
    position:absolute;
    left:3vw;
    display:inline-block;
    color:#fff;
}
.red {
    color:red;
}
.dbsy li {
    border-bottom:1px solid #f3f3f3;
    padding:4vw 0 1vw;
}
.title_p {
    padding:2vw 0 3vw;
}

.weui-media-box__desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
.newsa {
    width:70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;
}







 .allLine {
        width: 100%;
        overflow: hidden;
        margin: 0.1rem auto;
    }

    .allLine {
        padding-top: .1rem;
        padding-bottom: .08rem
    }

    .allLine span {
        display: table-cell;
        line-height: 1.44
    }

    .colorL {
        width: .78rem;
        height: .3rem;
        font-size: .14rem;
        font-family: PingFangSC-Regular;
        color:#999;
        line-height: .3rem;
        margin-left: 5.3%;
    }

    .colorW {
        height: .3rem;
        font-size: .14rem;
        font-family: PingFangSC-Medium;
        color:#666;
        line-height: .3rem;
        margin-left: .1rem;
    }











</style>
