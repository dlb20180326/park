<template>
  <div class="page-body">
    <x-header :left-options="{showBack: false}">
      花旗银行第二党支部
    </x-header>
        <div class="box">
            <div class="head">
                <flexbox>
                    <flexbox-item class="label">
                        片区负责人：
                    </flexbox-item>
                    <flexbox-item>
                        {{headName.name}}
                    </flexbox-item>
                </flexbox>
                <flexbox>
                    <flexbox-item class="label">
                        现有党支部：
                    </flexbox-item>
                    <flexbox-item>
                        {{headName.branchSum}}个
                    </flexbox-item>
                </flexbox>
                <flexbox>
                    <flexbox-item class="label">
                        所属党委：
                    </flexbox-item>
                    <flexbox-item>
                        陆家嘴中心
                    </flexbox-item>
                </flexbox>
                <flexbox>
                    <flexbox-item class="label">
                        现有党员：
                    </flexbox-item>
                    <flexbox-item>
                        <span class="number">{{headName.peopleSum}}</span>
                        人
                    </flexbox-item>
                </flexbox>
            </div>
      <div class="list">
        <h3>书记代办事宜</h3>
        <template v-for="(item,index) in todoList">
          <div class="item">
           <div class="title">{{index+1}}.
               <span v-if="item.type=='SCORE'">{{item.title}}积分加分确认</span>
               <span v-else="item.type=='ACTIVE'">
                   <router-link :to="{  name:'activePost', params:{ activeId:item.masId}}">{{item.title}}</router-link>
               </span>
              </div>
            <div class="content">
                <div v-if="item.type=='SCORE'">
                <x-button type="warn"  v-if="item.beginYn=='Y'" @click.native="refer(item)">
                    去处理
                </x-button>
                <x-button type="warn"  v-else="item.beginYn=='N'" @click.native="refer(item)">
                    去处理
                </x-button>
                    </div>
                <div v-if="item.type=='ACTIVE'">
                    <x-button type="warn"  v-if="item.beginYn=='Y'" @click.native="refer(item)">
                        上传图片
                    </x-button>
                    <x-button type="warn"  v-else="item.beginYn=='N'" @click.native="refer(item)">
                        活动二维码
                    </x-button>
                </div>
             <!-- <x-button type="warn" :link="item.type=='SCORE'?'points/review':'/active'">
                {{item.beginYn=='Y'?'去处理':'活动二维码'}}
              </x-button>-->
            </div>
          </div>
        </template>
      </div>
    </div>


      <div v-transfer-dom class="qrcode-dialog">
          <x-dialog v-model="showQrcodeDialog" hide-on-blur :dialog-style="{width: '80%',height:'300px'}" >
              <h1 style="text-align: center;margin-top:20px;margin-bottom:20px;">{{activeTitle}}</h1>
              <img id="fei" alt="">
          </x-dialog>
      </div>

  </div>
</template>

<script>

  import axios from 'axios';
  import { XHeader, GroupTitle, Flexbox, Alert, FlexboxItem, XButton,DatetimePlugin,Datetime ,Group,Picker ,XDialog, TransferDomDirective as TransferDom ,cookie } from 'vux';

  export default {
      directives: {
          TransferDom
      },
    data() {
      return {
        users: [{id: 1, fonts: '年度积分', integral: 0}, {id: 2, fonts: '活动次数', integral: 0}],
        userAbout: {},
        dateTime: '',
        charts: '',
        partAbout: {},
        todoList: [],
        headName:{},
          activeTitle:"",
        showQrcodeDialog: false
      };
    },
    components: {
        XHeader,
        GroupTitle,
        Flexbox,
        FlexboxItem,
        XButton,
        DatetimePlugin,
        Datetime,
        Group,
        Picker,
        Alert,
        XDialog
    },
    mounted() {
      let datime = new Date().getHours();
      if (datime >= 5 && datime < 8) {
        this.dateTime = '早上好';
      } else if (datime >= 8 && datime < 11) {
        this.dateTime = '上午好';
      } else if (datime >= 11 && datime < 13) {
        this.dateTime = '中午好';
      } else if (datime >= 13 && datime < 19) {
        this.dateTime = '下午好';
      } else {
        this.dateTime = '晚上好';
      }
      this.getHead();
      this.$nextTick(function () {
        //this.drawAxis('echartShow');
      });
      this.userName();
      this.infoDetail();
      /*this.getUserByScoreInfo();
      this.getUserByActiveInfo();
      this.getScoreByType();*/
    },
    methods: {
      refer (item){
          console.log(item);
          if(item.type == 'SCORE'){
              this.$router.push({
                  path:'points/review'
              })
          }else if(item.type == 'ACTIVE'){if(item.beginYn=='Y'){
              this.$router.push({
                  path:'active/partyBranch'
              })}else{ this.activeTitle = item.name;
                  this.showQR(item.masId);}
          }
      },
        showQR(data){
            document.getElementById('fei').src = 'http://www.dlbdata.cn/dangjian/active/showQrCode?activeId='+data;
            this.showQrcodeDialog = true;
        },
      infoDetail() {
        axios
          .get('/dangjian/pdepartment/queryById', {
            params: {
              departmentid: this.$store.getters.user.departmentid
            }
          })
          .then(res => {
            this.partAbout = res.data;
          })
          .catch(err => {
            console.log(err);
          });
        axios
          .get('/dangjian/pscoredetail/todoList', {
            params: {
              userId: this.$store.getters.user.userid
            }
          })
          .then(res => {
            this.todoList = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      },
      userName() {
        axios
          .get('/dangjian/ppartymember/queryByUserId', {
            params: {
              userid: this.$store.getters.user.userid
            }
          })
          .then(res => {
            this.userAbout = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      },
      getHead(){
        this.$http.get('ppartymember/queryByRoleId',{
            params:{
                roleid:this.$store.getters.user.roleid
            }
        }).then(res => {
            this.headName = JSON.parse(res.data);
            console.log(this.headName);
        }).
        catch(err =>{
            console.log('fail'+err);
        })
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
