<template>
  <div id="semesterPlanDetails">
    <div class="title">
      无人系统创新创业实践平台--2021年第一学期计划
    </div>
    <div class="content-body">
      <!--    计划信息-->
      <div class="plan-info padding">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          计划信息
        </div>
        <div class="form">
          <el-form inline v-model="planInfo">
            <el-form-item label="学期计划：">
              <el-input class="term-plan" v-model="planInfo.termPlanName" placeholder="请输入学期计划" disabled></el-input>
            </el-form-item>
            <el-form-item label="计划周期：">
              <el-date-picker
                  disabled
                  v-model="planInfo.planningCycle"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!--    计划进度-->
      <div class="plan-progress padding">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          计划进度
        </div>
        <div class="steps">
          <el-steps :space="200" :active="currentProgress" finish-status="success" align-center>
            <el-step v-for="(step,index) in planCycle" :title="step.status" :description="step.time"
                     :key="index"></el-step>
          </el-steps>
        </div>
      </div>
<!--      计划课程-->
      <div class="course padding">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          计划课程
        </div>
        <div class="course-list">
          <ul>
            <li v-for="(item,index) in courseList" :key="index">
              <div>{{item.courseName}}</div>
              <div>{{item.teacher}}</div>
              <div>报课学生数：<span>{{ !item.studentsNum?'-':item.studentsNum }}</span>人</div>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconchakan1"></use>
                </svg>
                <router-link to="">课程详情</router-link>
              </div>
            </li>
          </ul>
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
  </div>
</template>

<script>
export default {
  name: "semesterPlanDetails",
  data() {
    return {
      planInfo: {
        termPlanName: '20201年第一学期计划',
        planningCycle: [],
      },
      planCycle: [
        {
          status: '已完成',
          time: 'Jun.9  2021'
        },
        {
          status: 'xx课程结束',
          time: 'Aug.20  2021'
        },
        {
          status: '计划开始',
          time: 'Aug.20  2021'
        },
      ],
      currentProgress: 2,
      courseList:[
        {
          id:1,
          courseName:'课程名称',
          teacher:'讲师A',
          studentsNum:NaN,
        },
        {
          id:2,
          courseName:'课程名称',
          teacher:'讲师A',
          studentsNum:NaN,
        }
      ],
      currentPage4: 4
    }
  },
  methods:{
    //  分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/style/mixin";

#semesterPlanDetails {
  width: calc(100% - 50px);
  min-height: calc(100% - 50px);
  margin: 25px;
  opacity: 0.8;
  background-color: #ffffff;
  border: solid 1px #e5e6ef;

  .title {
    height: 50px;
    @include font(14px, #5e5e5e);
    line-height: 50px;
    padding: 0 30px;
    border-bottom: solid 1px #e5e6ef;
  }

  .content-title {
    @include font(14px, #444);

    .iconjinqi {
      font-size: 22px;
      float: left;
      color: #409eff;
      margin-top: -2px;
    }
  }

  .padding {
    padding: 20px 30px;
    &:not(:last-of-type){
      border-bottom: solid 1px #e5e6ef;
    }
  }

  .plan-info {
    .form {
      height: 40px;
      margin-top: 17px;

      ::v-deep .el-form {
        height: 100%;

        .term-plan .el-input__inner {
          width: 280px;
        }

        .el-date-editor .el-range-separator {
          width: 8%;
        }
      }

      ::v-deep .el-form-item {
        margin-right: 132px;
      }
    }
  }

  .steps {
    margin-top: 40px;

    ::v-deep .el-step__head.is-success{
      color: rgba(0, 174, 144, 0.73);
      border-color: rgba(0, 174, 144, 0.73);
    }

    ::v-deep .el-step__title.is-success,
    ::v-deep .el-step__description.is-success,
    ::v-deep .el-step__title.is-process,
    ::v-deep .el-step__description.is-process,
    ::v-deep .el-step__title.is-wait,
    ::v-deep .el-step__description.is-wait{
      @include font(12px,#444,center);
    }

    ::v-deep .el-step__head.is-process{
      color: rgba(249,176,56,0.73);
      border-color: rgba(249,176,56,0.73);
    }
  }

  .course{
    .course-list{
      margin-top: 16px;
      border-top: 1px solid #e7e8f0;
      padding: 10px;

      li{
        display: flex;
        justify-content: space-around;
        @include font(14px,#444,left);
        border-bottom: 1px solid #e7e8f0;
        padding: 10px 0;

        span{
          color: #3abec6;
        }

        .router-link{
          @include font(14px,#2d446f);
        }

        svg{
          @include wh(22px,21px);
          float: left;
          margin-right: 5px;
        }
      }
    }
  }

  .pagination{
    margin-top: 87px;
    text-align: center;
    width: 100%;
  }
}
</style>
