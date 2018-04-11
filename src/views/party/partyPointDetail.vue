<template>
    <div class="page-body">
        <x-header :left-options="{showBack: true}">
            党务积分信息
        </x-header>
        <section class="mainbox">
            <div style="padding:2vw 3.5vw 2vw;">
                <table width="100%" class="table">
                    <tr>
                        <td width="100">姓名：</td>
                        <td class="f_b">{{name1}}</td>
                    </tr>
                    <tr>
                        <td>现有党支部：</td>
                        <td class="f_b">{{departmentname}}</td>
                    </tr>
                    <tr>
                        <td>党支部书记：</td>
                        <td class="f_b">{{partyBranch}}</td>
                    </tr>
                    <tr>
                        <td>现有积分：</td>
                        <td class="f_b"><span class="red">{{totalscore}}</span></td>
                    </tr>
                </table>
            </div>


        </section>

        <section class="mainbox" >
            <div class=" clearfix p15 display">
                <span class="fl weui-cell__bd1">积分获取明细</span>
            </div>
            <div style="padding:2vw 3.5vw 6vw;" v-for="(item,index) in pointdetail" :key="index">
                <table width="100%" class="table">
                    <tr>
                        <td width="100">获取时间：</td>
                        <td class="f_b">{{item.scoreTime}}</td>
                    </tr>
                    <tr>
                        <td>积分类型：</td>
                        <td class="f_b">{{item.detailTitle}}</td>
                    </tr>
                    <tr>
                        <td>审核人：</td>
                        <td class="f_b">{{item.approvedName}}</td>
                    </tr>
                    <tr>
                        <td valign="top">积分变动：</td>
                        <td class="f_b">+{{item.score}}</td>
                    </tr>
                </table>
            </div>

        </section>


    </div>
</template>

<script>
    import axios from 'axios'
import { XHeader, GroupTitle, Flexbox, FlexboxItem, XButton } from 'vux';
export default {
    components: { XHeader, GroupTitle, Flexbox, FlexboxItem, XButton },
    data() {
        return {

            partyBranch:'',
            name1:'',
            departmentname:'',
            totalscore:'',
            pointdetail:''


        }
    },
    methods: {

        getParams() {

            let item= this.$route.params.item;
            this.name1=item.name;
            this.departmentname=item.departmentname;
            this.totalscore=item.totalscore;
            axios({
                method: 'get',
                url: '/dangjian/pdepartment/queryById',
                params: {
                    departmentid:item.departmentid

                }
            }) .then((res)=> {
               this.partyBranch=res.data.partyBranch;


                console.log(res.data)
            }).catch(function (error) {
                console.log(error);
            })
        },
        getPoint() {
            let item= this.$route.params.item;
            axios({
                method: 'get',
                url: '/dangjian/pscoreparty/queryByUserId',
                params: {
                    userid:item.id,
                    year:2018
                }
            }) .then((res)=> {
                this.pointdetail=res.data


                console.log("1212121212",res.data)
            }).catch(function (error) {
                console.log(error);
            })




        }
    },mounted() {
        this.getParams();
        this.getPoint()
    }


};
</script>

<style lang="less" scoped>
.page-body {
    background-color: #efefef;
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
.Sheader {
    background:#fff;
    color: #000000;
    text-align:center;
    padding:3vw 0;
    position:relative;
    margin-bottom: 2vw;
}
.mainbox {
    background:#fff;
    padding:2vw 2vw 0;
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
















</style>
