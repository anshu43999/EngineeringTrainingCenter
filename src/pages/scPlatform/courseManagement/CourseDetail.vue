<template>
  <div id="CourseDetail">
    <div class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconkecheng"></use>
      </svg>
      <span>课程详情</span>
      <!--    <el-button type="primary" size="mini" @click="skipEdit('id')">
            <i class="iconfont iconbianji4"></i>
            编辑
          </el-button>-->
    </div>
    <div class="content-body">
      <div class="content">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          课程信息
        </div>
        <table>
          <tr>
            <td class="table-bg">课程名称</td>
            <td>
              <el-input v-model="courseName" :disabled="routeType==='detail'"></el-input>
            </td>
            <td class="table-bg">课程讲师</td>
            <td>
              <el-input v-model="teacher" :disabled="routeType==='detail'"></el-input>
            </td>
            <td class="table-bg">课时总数</td>
            <td>
              <el-input v-model="classNum" :disabled="routeType==='detail'"></el-input>
            </td>
          </tr>
        </table>
      </div>
      <div class="content">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          课程目标
        </div>
        <div class="course-detail-container">
          <el-input
              type="textarea"
              :disabled="routeType==='detail'"
              :autosize="{ minRows: 4, maxRows: 10}"
              placeholder="请输入课程目标"
              v-model="target">
          </el-input>
        </div>
      </div>
      <div class="content">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          课程特色
        </div>
        <div class="course-detail-container">
          <el-input
              type="textarea"
              :disabled="routeType==='detail'"
              :autosize="{ minRows: 4, maxRows: 10}"
              placeholder="请输入课程特色"
              v-model="features">
          </el-input>
        </div>
      </div>
      <div class="content">
        <div class="content-title">
          <i class="iconfont iconjinqi"></i>
          课程简介
        </div>
        <div class="course-detail-container">
          <el-input
              type="textarea"
              :disabled="routeType==='detail'"
              :autosize="{ minRows: 4, maxRows: 10}"
              placeholder="请输入课程简介"
              v-model="introduction">
          </el-input>
        </div>
      </div>
<!--      <div class="content" v-if="routeType!=='detail'">
        <div class="course-detail-container">
          <el-button type="primary">保存</el-button>
          <el-button>取消</el-button>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseDetail",
  data() {
    return {
      courseName:'课程1课程1课程1课程1课程1',
      teacher:'张老师',
      classNum:'32节',
      target:'',
      features:'',
      introduction:''
    }
  },
  computed:{
    routeType(){
      let routeArr=this.$route.name.split('/');
      let type=routeArr[routeArr.length - 1];
      if (type.includes('编辑')){
        return 'edit';
      }else if (type.includes('新增')){
        return 'add'
      }else {
        return 'detail'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/style/detail";
.course-detail-container{
  margin-top: 20px;

  ::v-deep .el-textarea__inner{
    border-radius: 0;
  }
}
table {
  td{
    div{
      width: 100%;
      height: 100%;
    }
  }
  ::v-deep .el-input__inner {
    border: none;
  }
}
</style>
