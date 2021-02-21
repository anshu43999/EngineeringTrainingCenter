<template>
  <div id="termPlanManagement">
    <div class="search">
      <div>
        <el-select v-model="term" placeholder="学期计划筛选">
          <el-option
              v-for="item in terms"
              :key="item.id"
              :label="item.name"
              :value="item.id">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" size="mini">
        <i class="iconfont iconsousuo"></i>
        查询
      </el-button>
      <el-button size="mini">
        <i class="iconfont iconcs-fh-1"></i>
        重置
      </el-button>
    </div>
    <div class="list">
      <el-button type="primary" size="mini" @click="goToNewSemesterPlan">
        <i class="iconfont icondaoru"></i>
        新增平台学期计划
      </el-button>
      <div class="table">
        <el-table style="width: 100%"
                  :data="planList"
                  stripe>
          <el-table-column
              prop="planName"
              width="280"
              label="学期计划名称">
          </el-table-column>
          <el-table-column
              label="计划起止日期">
            <template slot-scope="scope">
              {{getStartEndDate(scope.row)}}
            </template>
          </el-table-column>
          <el-table-column
              prop="courseNum"
              label="计划课程数">
          </el-table-column>
          <el-table-column
              prop="progress"
              label="计划进程">
          </el-table-column>
          <el-table-column
              prop="entrySituation"
              label="报课信息录入情况">
          </el-table-column>
          <el-table-column
              label="启用至展示管理">
            <template slot-scope="scope">
              <el-switch
                  v-model="scope.row.isShow"
                  active-color="#097dff"
                  inactive-color="#cedceb">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
              label="操作">
            <template>
              <el-button type="text" @click="goToSemesterPlanDetails">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconguanli"></use>
                </svg>
                管理
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "termPlanManagement",
  data() {
    return {
      term:'',
      terms: [
        {
          id: 1,
          name: '学期一'
        }
      ],
      planList:[
        {
          id:'1',
          planName:'2021学年1学期***********计划',
          startTime:'2021.02.24',
          endTime:'2020.12.28',
          courseNum:4,
          progress:'未开始',
          entrySituation:'已完毕',
          isShow:true
        },
        {
          id:'2',
          planName:'2021学年1学期***********计划',
          startTime:'2021.02.24',
          endTime:'2020.12.28',
          courseNum:4,
          progress:'未开始',
          entrySituation:'已完毕',
          isShow:true
        },
      ],
      currentPage4: 4
    }
  },
  methods:{
    // 获取起止日期
    getStartEndDate(row){
      return row.startTime+'~'+row.endTime;
    },
  //  分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  //  跳转至新增计划
    goToNewSemesterPlan(){
      this.$router.push({
        path:'termPlanManagement/newSemesterPlan'
      })
    },
  //  跳转至学期计划详情
    goToSemesterPlanDetails(){
      this.$router.push({
        path:'termPlanManagement/semesterPlanDetails'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/style/mixin";

#termPlanManagement {
  width: calc(100% - 50px);
  margin: 25px;
  opacity: 0.8;
  color: #444;

  .search {
    @include wh(100%, 80px);
    background-color: rgba(255, 255, 255, .8);
    box-shadow: 0px 1px 4px 0px rgba(43, 57, 128, 0.19);
    border: solid 1px #e5e6ef;
    padding: 25px 24px;
    line-height: 30px;

    div{
      float: left;
      margin-right: 14px;
    }

    ::v-deep .el-input--suffix .el-input__inner{
        @include wh(200px,30px);
      }
    ::v-deep .el-select__caret{
      line-height: 30px;
    }

    .iconsousuo{
      font-size: 14px;
    }

    .iconcs-fh-1{
      font-size: 14px;
    }

    ::v-deep .el-button{
      border: solid 1px #409eff;

      &:last-of-type{
        margin-left: 24px;
        color: #939393;
      }
    }
  }

  .list{
    @include wh(100%,700px);
    margin-top: 19px;
    background-color: rgba(255, 255, 255, .8);
    box-shadow: 0px 1px 4px 0px rgba(43, 57, 128, 0.19);
    border: solid 1px #e5e6ef;
    padding: 25px;
    position: relative;

    ::v-deep .el-button--primary{
      font-size: 14px;
      .icondaoru{
        margin-right: 13px;
      }
    }

    .table{
      margin-top: 23px;
      border: solid 1px #e5e6ef;
      @include font(14px,#707070);

      ::v-deep .el-table{
        thead th{
          height: 50px;
          background-color: #fff9ed;
        }
      }

      ::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td{
        background-color: #fafdff;
      }

      ::v-deep .el-table--enable-row-transition .el-table__body td{
        height: 40px;
        padding: 2px;
      }
    }

    svg{
      @include wh(18px,17px);
      float: left;
      margin-right: 6px;
    }

    .pagination{
      position: absolute;
      bottom: 24px;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
