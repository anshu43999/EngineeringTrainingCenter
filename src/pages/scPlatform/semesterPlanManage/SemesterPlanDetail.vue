<template>
  <div id="SemesterPlanDetail">
    <list-template type="导入报课信息"
                   @handleSizeChange="handleSizeChange"
                   @handleCurrentChange="handleCurrentChange"
                   :need-top-info="true"
                   :current-page="currentPage"
                   :total="total">
      <template slot="topInfo">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          计划信息
        </div>
        <table>
          <tr>
            <td class="table-bg">计划名称</td>
            <td>{{ planName }}</td>
            <td class="table-bg">创建时间</td>
            <td>{{ createTime }}</td>
          </tr>
        </table>
      </template>

      <template slot="search">
        <el-input v-model="id" placeholder="学号搜索"></el-input>
      </template>

      <template slot="button">
        <el-button size='mini' type="primary" @click="addPlan">
          <i style="font-size:13px" class="iconfont icondaoru"></i> 导入报课信息
        </el-button>
        <el-button size='mini' style="margin-left:30px">
          <i style="font-size:13px" class="iconfont icondaochu"></i> 导出
        </el-button>
        <el-button class="complate" size='mini' style="position: absolute;right: 0;" type="primary">
          <i style="font-size:16px;" class="iconfont icon68"></i> 完成报名
        </el-button>
      </template>

      <template slot="table">
        <el-table
            :data="tableData"
            style="width: 1640px"
            :header-cell-style="{background:'#FFF9ED'}"
            :row-class-name="tableRowClassName"
        >
          <el-table-column
              fixed
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column
              prop="xh"
              label="序号"
              width="180">
          </el-table-column>
          <el-table-column
              prop="studentId"
              label="学生学号"
          >
          </el-table-column>
          <el-table-column
              prop="studentName"
              label="学生姓名"
          >
          </el-table-column>
          <el-table-column
              prop="course"
              label="所报课程"
          >
          </el-table-column>

          <el-table-column
              fixed="right"
              label="操作">
            -
<!--            <template slot-scope="scope">
              <el-button @click="handleToDetail(scope.row)" type="text" size="small">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconchakan2"></use>
                </svg>
                查看
              </el-button>
              <el-button @click="handleEdit(scope.row)" type="text" size="small">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconbianji6"></use>
                </svg>
                编辑
              </el-button>
              <el-button @click="handleDel(scope.row)" type="text" size="small">
                <svg class="icon del" aria-hidden="true">
                  <use xlink:href="#iconshanchu1"></use>
                </svg>
                删除
              </el-button>
            </template>-->
          </el-table-column>
        </el-table>
      </template>
    </list-template>

  </div>
</template>

<script>
import ListTemplate from "@/components/common/ListTemplate";
export default {
  name: "SemesterPlanDetail",
  components: {ListTemplate},
  data() {
    return {
      planName: '2021年学年第一学期计划',
      createTime: '2021.09.01',
      id: '',
      tableData:[
        {
          xh: '1',
          studentId: '19190121303',
          studentName: '王同学',
          course: 'A课程',
        },
      ],
      currentPage: 0,
      total:0
    }
  },
  methods: {
    addPlan() {
      this.$router.push({path: 'platformMange/addPlatform'})
    },
    handleClick() {
      console.log(1);
      this.$router.push({path: 'platformMange/platformDetail'})
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2) {
        return '';
      }
      return 'warning-row';
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }

  },
}
</script>

<style scoped lang="scss">
@import "../../../assets/style/elementcommon";
.content-title {
  height: 28px;
  line-height: 28px;
  color: #444;
  font-size: 14px;

  .iconjinqi {
    font-size: 22px;
    float: left;
    color: #409eff;
  }
}
table {
  width: 100%;
  cellspacing: 1;
  background: #ddd;
  margin-top: 16px;

  .table-bg {
    background-color: #f5fafd;
    text-align: right;
    color: #999;
    width: 150px;
  }

  td{
    background-color: #fff;
    height: 40px;
    padding: 0 9px;
    font-size: 12px;
    color: #333;
    min-width: 150px;
  }
}
::v-deep .complate span{
  display: flex;
  align-items: center;
}
::v-deep .el-button--text span {
  display: flex;
  align-items: center;
}
svg {
  width: 22px;
  height: 18px;
  margin-right: 3px;

  &.del {
    width: 20px;
    height: 16px;
  }
}
</style>
