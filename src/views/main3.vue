<template>
  <div class="page-body">
    <x-header :left-options="{showBack: false}">
      {{info.departmentname}}
    </x-header>
    <div class="head">
      <flexbox>
        <flexbox-item class="label">
          党支部书记：
        </flexbox-item>
        <flexbox-item>
          {{info.partyBranch}}

        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class="label">
          所属片区：
        </flexbox-item>
        <flexbox-item>
          {{info.address}}

        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class="label">
          党支部评级：
        </flexbox-item>
        <flexbox-item>
          {{info.honor}}
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class="label">
          现有党员：
        </flexbox-item>
        <flexbox-item>
          <span class="number">{{info.people}}</span>
          人
        </flexbox-item>
      </flexbox>
    </div>
    <div class="list">
      <h3>书记待办事宜</h3>
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
    data() {
      return {
        departmentid: this.$store.getters.user.departmentid,
        partyBranch: '',
        address: '',
        honor: '',
        people: '',
        todoList: [],
        activeTitle:'',
        info:[],
        showQrcodeDialog: false
      };
    },
    methods: {
        refer (item){
            console.log(item);
            if(item.type == 'SCORE'){
                this.$router.push({
                    path:'points/evaluation'
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
      getDepartment() {
        axios({
          method: 'get',
          url: 'pdepartment/queryById',
          params: {
            departmentid: this.departmentid

          }
        }).then((res) => {
        	this.info = res.data;
          this.partyBranch = res.data.partyBranch;
          this.address = res.data.address;
          this.honor = res.data.honor;
          this.people = res.data.people;


          console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        });
        axios
          .get('pscoredetail/todoList', {
            params: {
              userId: this.$store.getters.user.userid
            }
          })
          .then(res => {
            console.log(res);
            this.todoList = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      }

    }, mounted() {
      this.getDepartment();
    }


  };
</script>

<style lang="less" scoped>
  .page-body {
    background-color: #efefef;
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
    a{
      color:#000;
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
