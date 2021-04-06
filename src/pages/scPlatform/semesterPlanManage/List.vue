<!-- 平台管理列表 -->
<template>
  <div id='courseList'>
    <list-template @handleSizeChange="handleSizeChange"
                   @handleCurrentChange="handleCurrentChange"
                   :current-page="currentPage"
                   :total="total"
    >
      <template slot="search">
        <el-select v-model="input" placeholder="学期计划筛选">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </template>
      <template slot="button">
        <el-button size='mini' type="primary" @click="addSemesterPlan">
          <i style="font-size:13px" class="iconfont icondaoru"></i> 新增计划
        </el-button>
      </template>
      <template slot="table">
        <el-table
            :data="tableData"
            style="width: 1640px"
            :header-cell-style="{background:'#FFF9ED'}"
            :row-class-name="tableRowClassName"
            :cell-class-name="firstColumn"
            :header-cell-class-name="firstColumnHeader"
        >
          <el-table-column
              prop="planName"
              label="计划名称"
              width="600"
          >
          </el-table-column>
          <el-table-column
              prop="createTime"
              label="创建时间"
          >
          </el-table-column>
          <el-table-column
              label="报名情况"
          >
            <template slot-scope="scope">
              <span :style="scope.row.status?'color:#3a84ff':''">{{scope.row.status?'':'未'}}录入完毕</span>
            </template>
          </el-table-column>

          <el-table-column
              fixed="right"
              label="操作">
            <template slot-scope="scope">
              <el-button @click="handleToDetail(scope.row)" type="text" size="small">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconchakan2"></use>
                </svg>
                查看
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
      </template>
    </list-template>


  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import '../../../assets/style/elementcommon.scss'
import ListTemplate from "@/components/common/ListTemplate";

export default {
//import引入的组件需要注入到对象中才能使用
  components: {ListTemplate},
  data() {
//这里存放数据
    return {
      statistics: [
        {
          img: require('@/assets/image/scPlatform/courseManage/statisticsTop1.png'),
          num: 32,
          name: '课程总数'
        },
        {
          img: require('@/assets/image/scPlatform/courseManage/statisticsTop2.png'),
          num: 32,
          name: '涵盖学院数'
        },
        {
          img: require('@/assets/image/scPlatform/courseManage/statisticsTop3.png'),
          num: 32,
          name: '涵盖专业数'
        },
      ],
      total: 0,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [
        {
          xh: '1',
          planName: '2021年第一学期计划管理',
          createTime: '2021.09.01',
          status: false,
          tel: '负责人联系电话',
          roomid: '房间号',
          roomname: '房间名称',
          roomYWname: '房间英文名称',
        },
        {
          xh: '1',
          planName: '2021年第一学期计划管理',
          createTime: '2021.09.01',
          status: true,
          tel: '负责人联系电话',
          roomid: '房间号',
          roomname: '房间名称',
          roomYWname: '房间英文名称',
        },
        {
          xh: '1',
          planName: '2021年第一学期计划管理',
          createTime: '2021.09.01',
          status: true,
          tel: '负责人联系电话',
          roomid: '房间号',
          roomname: '房间名称',
          roomYWname: '房间英文名称',
        },
      ],
      input: '',
      currentPage: 0,


    };
  },
//监听属性 类似于data概念
  computed: {},
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    addSemesterPlan() {
      // this.$router.push({path: 'semesterPlanManage/addSemesterPlan'})
    },
    // 查看
    handleToDetail(row) {
      this.$router.push({
        path: 'semesterPlanManage/semesterPlanDetail', query: {
          id: row.id
        }
      })
    },
    // 编辑
    handleEdit(row) {
      this.$router.push({path: 'semesterPlanManage/editSemesterPlan',query: {
          id: row.id
        }})
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2) {
        return '';
      }
      return 'warning-row';
    },
    firstColumn({row, column, rowIndex, columnIndex}){
      if (columnIndex===0){
        return 'firstColumn'
      }
    },
    firstColumnHeader({columnIndex}){
      if (columnIndex===0){
        return 'firstColumn'
      }
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    handleDel(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('删除成功');
      }).catch(() => {
        this.$message.info('已取消删除');
      })
    }

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
::v-deep .firstColumn .cell{
  text-indent: 6em;
}
</style>
