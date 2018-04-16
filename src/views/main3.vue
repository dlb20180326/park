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
      <h3>书记代办事宜</h3>
      <template v-for="(item,index) in todoList">
        <div class="item">
          <div class="title">{{index+1}}. {{item.title}}{{item.type=='SCORE'?'积分加分确认':'图片上传'}}</div>
          <div class="content">
            <x-button type="warn" :link="item.type=='SCORE'?'/points/review':'/active'">
              {{item.beginYn=='Y'?'去处理':'活动二维码'}}
            </x-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {XHeader, GroupTitle, Flexbox, FlexboxItem, XButton} from 'vux';

  export default {
    components: {XHeader, GroupTitle, Flexbox, FlexboxItem, XButton},
    data() {
      return {
        departmentid: this.$store.getters.user.departmentid,
        partyBranch: '',
        address: '',
        honor: '',
        people: '',
        todoList: [],
        info:[]
      };
    },
    methods: {
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
