<!--  -->
<template>
  <div class='platformDetail'>
    <div class="showOne">
      <div class="showOne-left">
        <img src="../../../assets/image/scPlatform/platformDetail/image1.png" alt="">
        <div class="showOne-left-text">
          <h2>大数据与人工智能创意设计双创平台</h2>
          <h3>平台负责人：杨秋翔</h3>
          <h3>房间1：A301、303(赛客创新创业实践平台)</h3>
          <h3>房间2：A309、311(人工智能创意设计平台)</h3>
        </div>
      </div>
      <div class="showOne-right">
        <div class="showOne-right-box">
          <div class="vertical">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="images"></div>
          <div class="right-box-text">
            <h2>12</h2>
            <h3>平台教师总数</h3>
          </div>
        </div>
        <div class="showOne-right-box">
          <div class="vertical">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="images"></div>
          <div class="right-box-text">
            <h2>12</h2>
            <h3>平台累计报课人次</h3>
          </div>
        </div>
        <div class="showOne-right-box">
          <div class="vertical">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="images"></div>
          <div class="right-box-text">
            <h2>12</h2>
            <h3>平台累计荣誉</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="showTwo">
      <div class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconxinxiguanli"></use>
        </svg>
        平台信息管理
      </div>
      <div class="show-two">
        <div class="showTwo-box" v-for="(item,index) in platformData" :key="index" @click="navSkip(item.path) ">
          <div class="showTwo-box-left"></div>
          <div class="showTwo-box-right">
            <h2>{{ item['title1'] }} </h2>
            <h3>{{ item['title2'] }}</h3>
            <h3>{{ item['title3'] }}</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="showThree">
      <div class="showThree-title">
        <!-- <i class="iconfont iconhuodongbaobei"></i> -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhuodongbaobei"></use>
        </svg>
        平台活动管理
      </div>

      <div class="search">
        <el-date-picker
            v-model="date"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
        <el-button type="primary" size="mini">
          <i class="iconfont iconsousuo"></i>查询
        </el-button>
        <el-button type="default" size="mini">
          <i class="iconfont iconcs-fh-1"></i>重置
        </el-button>
        <el-button type="primary" size="mini" class="create-activities">
          <i class="iconfont iconchuangjianhuodongline"></i>创建活动
        </el-button>
      </div>

      <div class="showThree-table">
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="activityName"
              label="活动名称">
          </el-table-column>
          <el-table-column
              width="170"
              label="活动周期">
            <template slot-scope="scope">
              {{scope.row.startTime}}~{{scope.row.endTime}}
            </template>
          </el-table-column>
          <el-table-column
              label="上下线"
              width="100">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.onLine" :width="30"></el-switch>
            </template>
          </el-table-column>
          <el-table-column
              label="操作"
              width="180">
            <template slot-scope="scope">
              <el-button @click="handleToDetail(scope.row)" type="text" size="small">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconchakan1"></use>
                </svg>
                查看
              </el-button>
              <el-button @click="handleEdit(scope.row)" type="text" size="small">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconbianji"></use>
                </svg>
                编辑
              </el-button>
              <el-button @click="handleDel(scope.row)" type="text" size="small">
                <svg class="icon del" aria-hidden="true">
                  <use xlink:href="#iconshanchu1"></use>
                </svg>
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="block">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[7,8,9,10]"
              :page-size="7"
              layout="total, sizes, prev, pager, next, jumper"
              :total="0">
          </el-pagination>
        </div>


      </div>


    </div>


  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
//这里存放数据
    return {
      currentPage: 0,
      platformData: [
        {
          path: 'platformDetail/basicPlatformInformation',
          title1: '平台信息管理（平台介绍）',
          title2: '信息完善度：80%',
          title3: '上次编辑时间：2021.09.01',
        },
        {
          path: 'platformDetail/teatherTeam',
          title1: '平台指导教师团队管理',
          title2: '现存指导教师总数：6人',
          title3: '上次编辑时间：2021.09.01',
        },
        {
          path: 'platformDetail/termPlanManagement',
          title1: '平台学期课程计划管理',
          title2: '本学期平台课程总数：4门',
          title3: '上次编辑时间：2021.09.01',
        },
        {
          path: 'platformDetail/honorManagement',
          title1: '平台荣誉管理',
          title2: '今年新增荣誉：2',
          title3: '上次编辑时间：2021.09.01',
        },
        {
          path: 'platformDetail/equipment',
          title1: '平台设备、资源管理',
          title2: '今年新增荣誉：2',
          title3: '次编辑时间：2021.09.01',
        },
        {
          path: 'platformDetail/dataStatistics',
          title1: '平台数据统计分析',
          title2: '现统计学期：2021年第一学期',
          // title3 : '次编辑时间：2021.09.01',
        },
      ],
      date:'',
      tableData:[
        {
          id:1,
          activityName:'燃烧机甲之魂——中北大学举办首.....',
          startTime:'2021/09/10',
          endTime:'2021/10/09',
          onLine:true
        }
      ]
    };
  },
//监听属性 类似于data概念
  computed: {},
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    navSkip(path) {
      this.$router.push({path: path})
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    handleToDetail(row){

    },
    handleEdit(row){},
    handleDel(row){}
  },
//生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
//生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() {
  }, //生命周期 - 创建之前
  beforeMount() {
  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {
  }, //生命周期 - 更新之后
  beforeDestroy() {
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
//@import url(); 引入公共css类
<style lang='scss' scoped>
@import "../../../assets/style/mixin";

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.platformDetail {
  padding: 0 32px 0 25px;

  &::after{
    content: '';
    display: block;
    clear: both;
  }

  .showOne {
    margin-top: 25px;
    height: 160px;
    @include flex();
    background-color: #ffffff;
    box-shadow: 0px 1px 2px 0px rgba(43, 57, 128, 0.1);
    border: solid 1px #e5e6ef;
    opacity: 0.8;

    .showOne-left {
      width: 674px;
      height: 100%;
      @include flex(flex-start);

      img {
        margin-left: 29px;
        margin-right: 21px;
        @include wh(100px, 100px);
      }

      h2 {
        font-size: 16px;
        line-height: 36px;
        color: #333333;
      }

      h3 {
        font-size: 12px;
        line-height: 22px;
        color: #888888;
      }

    }

    .showOne-right {
      flex: 1;
      height: 100%;
      @include flex(flex-start);

      div:nth-child(1) {
        .images {
          width: 106px;
          height: 68px;
          @include backgroundImage('../../../assets/image/scPlatform/platformDetail/image2.png', center, contain);
        }
      }

      div:nth-child(2) {
        .images {
          width: 106px;
          height: 68px;
          @include backgroundImage('../../../assets/image/scPlatform/platformDetail/image3.png', center, contain);
        }
      }

      div:nth-child(3) {
        .images {
          width: 106px;
          height: 68px;
          @include backgroundImage('../../../assets/image/scPlatform/platformDetail/image4.png', center, contain);
        }
      }


      .showOne-right-box {
        @include flex(flex-start);
        margin-right: 88px;

        .vertical {

          div {
            width: 4px;
            height: 17px;
          }

          div:nth-child(1) {
            background-color: #5aa5f8
          }

          div:nth-child(2) {
            background-color: #4ccfc9
          }

          div:nth-child(3) {
            background-color: #51c1f1
          }

          div:nth-child(4) {
            background-color: #7cd67f
          }
        }

        .right-box-text {
          h2 {
            font-size: 24px;
          }

          h3 {
            font-size: 16px;
            line-height: 28px;
            color: #888888;
          }
        }

      }
    }
  }

  .showTwo {
    width: 900px;
    height: 622px;
    float: left;
    margin-top: 22px;
    background-color: #ffffff;
    box-shadow: 0px 1px 2px 0px rgba(43, 57, 128, 0.1);
    border: solid 1px #e5e6ef;
    opacity: 0.8;
    padding: 10px 0;

    .title{
      @include wh(100%,36px);
      border-bottom: 1px solid #e7e8f0;
      @include font(14px,#636363);
      line-height: 37px;
      padding-left: 26px;
    }

    .show-two{
      width: 100%;
      padding: 0 37px;
    }

    .showTwo-box:nth-child(1) {
      .showTwo-box-left {
        @include backgroundImage('../../../assets/image/scPlatform/platformDetail/jiesao.png', center, auto);
      }
    }

    .showTwo-box:nth-child(2) {
      .showTwo-box-left {
        @include backgroundImage('../../../assets/image/scPlatform/platformDetail/teather.png', center, auto);
      }
    }

    .showTwo-box:nth-child(3) {
      .showTwo-box-left {
        @include backgroundImage('../../../assets/image/scPlatform/platformDetail/class.png', center, auto);
      }
    }

    .showTwo-box:nth-child(4) {
      .showTwo-box-left {
        @include backgroundImage('../../../assets/image/scPlatform/platformDetail/honor1.png', center, auto);
      }
    }

    .showTwo-box:nth-child(5) {
      .showTwo-box-left {
        @include backgroundImage('../../../assets/image/scPlatform/platformDetail/instrument.png', center, auto);
      }
    }

    .showTwo-box:nth-child(6) {
      .showTwo-box-left {
        @include backgroundImage('../../../assets/image/scPlatform/platformDetail/data.png', center, auto);
      }
    }


    .showTwo-box {
      cursor: pointer;
      width: 400px;
      height: 140px;
      margin-top: 28px;
      background-color: #ffffff;
      border: solid 1px #e5e6ef;
      @include flex(flex-start);
      float: left;

      &:nth-child(2n+1){
        margin-right: 22px;
      }

      .showTwo-box-left {
        width: 140px;
        height: 140px;
      }

      .showTwo-box-right {
        h2 {
          @include font(16px);
          line-height: 38px;
        }

        h3 {
          @include font(12px);
          line-height: 33px;
        }
      }
    }
  }

  .showThree {
    @include wh(770px,622px);
    margin-top: 20px;
    background-color: #ffffff;
    box-shadow: 0px 1px 2px 0px rgba(43, 57, 128, 0.1);
    border: solid 1px #e5e6ef;
    opacity: 0.8;
    float: right;

    .showThree-title {
      height: 46px;
      line-height: 46px;
      border-bottom: 1px solid #e5e6ef;
      @include font(14px);

      svg {
        @include wh(18px, 18px);
        margin: 0 12px 0 20px;
      }
    }

    .search{
      @include wh(100%,55px);
      border-bottom: 1px solid #e5e6ef;
      padding: 0 27px;
      display:flex;
      flex: 1;
      align-items:center;
      position: relative;

      ::v-deep *{
        height: 30px;
      }

      ::v-deep .el-date-editor~button{
        margin-left: 26px;
      }

      ::v-deep .el-date-editor, ::v-deep .el-input__inner{
        width: 200px;
        font-size: 12px;

        .el-input__icon{
          line-height: 1;
        }
      }

      ::v-deep .el-button{
        font-size: 12px;
        letter-spacing: 1px;

        .iconfont{
          font-size: 14px;
          margin-right: 3px;
        }

        .iconsousuo{
          vertical-align: text-bottom;
        }
      }

      ::v-deep .create-activities{
        position: absolute;
        right: 25px;
      }
    }

    .showThree-table {
      padding: 0 28px;

      ::v-deep .el-table{
        margin-top: 12px;

        th{
          @include font(12px,#707070);
        }

        td{
          @include font(12px,#444);

          .cell{
            letter-spacing: 0;

            .icon{
              width: 1.1em;
              height: 1.1em;
            }
          }
        }
      }
    }
  }

  .block {
    @include flex();
    margin-top: 26px;
  }

}
</style>
