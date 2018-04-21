<template>
    <div class="page-body party-information">
        <x-header>
            党务信息
        </x-header>
        <flexbox orient="vertical" align="initial">
            <view-box>
                <div class="header">
                    <div class="group-name">
                        {{departmentname}}
                    </div>
                    <flexbox :gutter="0">
                        <flexbox-item>支部书记:{{partyBranch}}</flexbox-item>
                        <flexbox-item>支部人数:{{people}}人</flexbox-item>
                    </flexbox>
                </div>
                <div class="points-table">
                    <flexbox :gutter="0">
                        <flexbox-item>姓名</flexbox-item>
                        <flexbox-item>性别</flexbox-item>
                        <flexbox-item>年龄</flexbox-item>
                        <flexbox-item>积分</flexbox-item>
                    </flexbox>
                    <flexbox :gutter="0"  v-for="(item,index) in total" :key="index"   @click.native="submit(item)">
                        <flexbox-item>{{item.name}}</flexbox-item>
                        <flexbox-item>{{item.sex}}</flexbox-item>
                        <flexbox-item>{{item.age}}</flexbox-item>
                        <flexbox-item>{{item.totalscore||0.0}}</flexbox-item>
                    </flexbox>
                </div>
            </view-box>
        </flexbox>

    </div>
</template>
<script>
    import axios from 'axios'
import { XHeader, Flexbox, FlexboxItem, ViewBox } from "vux";
export default {
    components: {
        XHeader,
        Flexbox,
        FlexboxItem,
        ViewBox
    },
    data() {
        return {
            people:'',
            departmentname:'',
            partyBranch:'',
            total:'',
        };
    },
    methods: {
        submit(item){

            this.$router.push({
                path: '/party/partypointdetail',
                name: 'partypointdetail',

                params: {
                    item:item
                },query: {
                    item:item
                }

            })


        },
        getParams() {

           let departmentId = this.$route.params.departmentid;


            axios({
                method: 'get',
                url: 'pdepartment/queryById',
                params: {
                    departmentid:departmentId
                }


            }) .then((res)=> {
               this.departmentname=res.data.departmentname;
                this.partyBranch=res.data.partyBranch;
                this.people=res.data.people;

            }).catch(function (error) {
                console.log(error);
            })


        },
        getParams1() {

            let departmentId = this.$route.params.departmentid;
            axios({
                method: 'get',
                url: 'ppartymember/queryByDepartmentId',
                params: {
                    departmentid:departmentId
                }

            }) .then((res)=> {
                this.total=res.data

            }).catch(function (error) {
                console.log(error);
            })
        }
    },mounted() {
        this.getParams();
        this.getParams1()
    },

    watch:{
        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      /*  '$route': function(to, from) {
            console.log(this.$route.path)
        }*/
        '$route': 'getParams'
       /* $route(){
            alert("改变");
        }*/
    }


};
</script>
<style lang="less">
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
