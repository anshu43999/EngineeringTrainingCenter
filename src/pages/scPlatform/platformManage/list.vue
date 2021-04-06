<!-- 平台管理列表 -->
<template>
  <div id='platformList'>
    <list-template :statistics="statistics"
                   @handleSizeChange="handleSizeChange"
                   @handleCurrentChange="handleCurrentChange"
                   :current-page="currentPage"
                   :total="total"
    >
      <template slot="search">
        <el-input v-model="input" placeholder="平台名称/平台负责人"></el-input>
        <el-select v-model="college" placeholder="所属学院">
          <el-option
              v-for="item in collegeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="room" placeholder="房间号">
          <el-option
              v-for="item in roomOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </template>
      <template slot="button">
        <el-button size='mini' type="primary" @click="addPlatform">
          <i style="font-size:13px" class="iconfont icondaoru"></i> 新增平台
        </el-button>
        <el-button size='mini' style="margin-left:30px">
          <i style="font-size:13px" class="iconfont icondaochu"></i> 导出
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
              prop="father"
              label="所属学院"
          >
          </el-table-column>
          <el-table-column
              prop="name"
              label="平台名称"
          >
          </el-table-column>
          <el-table-column
              prop="principal"
              label="负责人"
          >
          </el-table-column>
          <el-table-column
              prop="tel"
              label="负责人联系电话"
          >
          </el-table-column>
          <el-table-column
              prop="roomid"
              label="房间号"
          >
          </el-table-column>

          <el-table-column
              prop="roomname"
              label="房间名称"
          >
          </el-table-column>

          <el-table-column
              prop="roomYWname"
              label="房间英文名称"
          >
          </el-table-column>

          <el-table-column
              prop="roomname"
              label="房间名称"
          >
          </el-table-column>

          <el-table-column
              fixed="right"
              label="操作"
              width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">
                <svg class="icon" aria-hidden="true" style="width:13px;height:12px">
                  <use xlink:href="#iconguanli"></use>
                </svg>
                管理
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
          img: require('@/assets/image/scPlatform/platformManage/statisticsTop1.png'),
          num: 32,
          name: '平台总数'
        },
        {
          img: require('@/assets/image/scPlatform/platformManage/statisticsTop2.png'),
          num: 32,
          name: '平台教师总数'
        },
        {
          img: require('@/assets/image/scPlatform/platformManage/statisticsTop3.png'),
          num: 32,
          name: '平台教室总数'
        },
      ],
      total:0,
      collegeOptions: [{
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
      roomOptions:[{
        value: '选项1',
        label: '黄金糕'
      }],
      college: '',
      room:'',
      tableData: [
        {
          xh: '1',
          father: '所属学院1',
          name: '平台名称',
          principal: '负责人',
          tel: '负责人联系电话',
          roomid: '房间号',
          roomname: '房间名称',
          roomYWname: '房间英文名称',
        },
        {
          xh: '1',
          father: '所属学院1',
          name: '平台名称',
          principal: '负责人',
          tel: '负责人联系电话',
          roomid: '房间号',
          roomname: '房间名称',
          roomYWname: '房间英文名称',
        },
        {
          xh: '1',
          father: '所属学院1',
          name: '平台名称',
          principal: '负责人',
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
    addPlatform() {
      // this.$router.push({path: 'platformMange/addPlatform'})
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


</style>
