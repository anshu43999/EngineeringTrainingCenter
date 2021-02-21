<template>
  <div id="newSemesterPlan">
    <div class="title">
      无人系统创新创业实践平台--新建学年计划
    </div>
    <div class="setting">
      <div>
        <el-form :inline="true" :model="setting" class="demo-form-inline">
          <el-form-item label="学期计划选择：">
            <el-select v-model="setting.term" placeholder="学期计划筛选">
              <el-option
                  v-for="item in terms"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="计划周期设置：">
            <el-date-picker
                v-model="setting.planningCycle"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="select-course">
      <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入您想选择的课程"
          v-model="course"
          :titles="titles"
          :data="courseData">
      </el-transfer>
    </div>
    <div class="save">
      <el-row>
        <el-col :span="3" :offset="20">
          <el-button type="primary" size="mini">
            <i class="iconfont iconbaocun1"></i>
            保存
          </el-button>
          <el-button size="mini" class="cancel-btn">
            <i class="iconfont iconai207"></i>
            取消
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "newSemesterPlan",
  data() {
    return {
      setting: {
        term: '',
        planningCycle: [],
      },
      terms: [
        {
          id: 1,
          name: '学期一'
        }
      ],
      courseData: [
        {
          label: 'A课程',
          key: 1,
        },
        {
          label: 'A课程',
          key: 2,
        },
        {
          label: 'A课程',
          key: 3,
        },
        {
          label: 'A课程',
          key: 4,
        },
        {
          label: 'A课程',
          key: 5,
        },
      ],
      course: [],
      titles: ['未选课程', '已选中课程']
    }
  },
  methods: {
    filterMethod(query, item) {
      return item.label.indexOf(query) > -1;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/style/mixin";

#newSemesterPlan {
  width: calc(100% - 50px);
  margin: 25px;
  opacity: 0.8;
  color: #444;
  background-color: rgba(255, 255, 255, .8);
  border: solid 1px #e5e6ef;

  .title {
    height: 50px;
    @include font(14px, #8d8d8d);
    line-height: 50px;
    padding: 0 30px;
    border-bottom: solid 1px #e5e6ef;
  }

  .setting {
    padding: 26px 30px;
    box-sizing: content-box;
    height: 40px;
    border-bottom: solid 1px #e5e6ef;

    div, form {
      height: 100%;

      ::v-deep .el-input__inner {
        height: 40px;
      }

      ::v-deep .el-select .el-input__inner {
        width: 280px;
      }

      ::v-deep .line {
        text-align: center;
      }

      ::v-deep .el-form-item {
        margin-right: 96px;
      }

      ::v-deep .el-date-editor .el-range-separator{
        width: 10%;
      }
    }
  }

  .select-course {
    padding: 37px 25px 50px;
    border-bottom: solid 1px #e5e6ef;

    ::v-deep .el-transfer-panel {
      @include wh(360px, 480px);

      .el-transfer-panel__header, .el-checkbox {
        height: 54px;
        line-height: 54px;
      }

      .el-transfer-panel__header {
        background-color: #fff9ed;

        .el-checkbox__label{
          @include font(14px,#707070);
        }
      }

      .el-transfer-panel__body{
        height: calc(100% - 54px);

        .el-transfer-panel__filter{
          padding:15px;
          margin: 0;
          border-bottom: 1px solid #e5e6ef;

          .el-input__icon{
            margin-left: 15px;
            margin-top: 2px;
          }
        }

        .el-transfer-panel__list.is-filterable{
          height: calc(100% - 60px);
          padding-top: 10px;

          .el-transfer-panel__item.el-checkbox{
            height: 40px;

            .el-checkbox__input{
              line-height: 2;
            }

            .el-checkbox__label{
              line-height: 40px;
            }
          }
        }
      }
    }
  }

  .save{
    height: 100px;
    line-height: 100px;

    .cancel-btn{
      border: solid 1px #409eff;
      margin-left: 24px;
    }
  }
}
</style>
