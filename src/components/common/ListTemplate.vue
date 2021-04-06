<!-- 平台管理列表 -->
<template>
  <div class='plalistWrap'>
    <div class="statisticsOne" v-if="statistics">
      <div class="statisticsMain" v-for="(item,index) in statistics" :key="index">
        <div class="leftBg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img class="img1" :src="item.img" alt="">
        <div class="rightBg">
          <h2>{{ item.num }}</h2>
          <h3>{{ item.name }}</h3>
        </div>
      </div>
    </div>

    <div class="top-info" v-if="needTopInfo">
      <slot name="topInfo"></slot>
    </div>

    <div class="filtrate statisticsOne">

      <slot name="search"></slot>

      <el-button style="margin-left:45px" size='mini' type="primary">
        <i style="font-size:11px" class="iconfont iconsousuo"></i>
        查询</el-button>

      <el-button size='mini'>
        <i style="font-size:11px" class="iconfont iconcs-fh-1 "></i>
        重置</el-button>
    </div>

    <div class="listMain" :style="statistics?'':'height:700px'">
      <div class="listMainTop">
        <slot name="button"></slot>

      </div>


      <div class="listTable">
        <slot name="table"></slot>
      </div>

      <div class="block">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pageSizes"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
      </div>
    </div>



  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import '@/assets/style/elementcommon.scss'
export default {
//import引入的组件需要注入到对象中才能使用
  components: {},
  props:{
    statistics:{
      type:Array,
      defaults:[]
    },
    type:{
      type:String,
      defaults: ''
    },
    currentPage:{
      type:Number,
      defaults:0
    },
    pageSizes:{
      type:Array,
      defaults:[7,8,9,10]
    },
    pageSize:{
      type:Number,
      defaults: 7
    },
    total:{
      type:Number,
      defaults:0
    },
    needTopInfo:{
      type:Boolean,
      defaults:false
    }
  },
  data() {
//这里存放数据
    return {
    };
  },
//监听属性 类似于data概念
  computed: {},
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    handleClick(){
      this.$listeners.handleClick();
    },
    handleSizeChange(){
      this.$listeners.handleSizeChange();
    },
    handleCurrentChange(){
      this.$listeners.handleCurrentChange()
    }


  },
//生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
//生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
//@import url(); 引入公共css类
<style lang='scss' scoped>
@import "../../assets/style/mixin";
.plalistWrap{
  .top-info{
    background-color: #ffffff;
    margin-top: 1.1875rem;
    border: solid 0.0625rem #e5e6ef;
    opacity: 0.8;
    padding: 25px;
  }
  ::v-deep .el-table .warning-row {
    background: #FAFDFF;
  }

  ::v-deep .el-table .success-row {
    background: #ffffff;
  }
  height: 100%;
  padding-left: 25px;
  padding-right: 32px;
  background-color: #F1F2F6;
  overflow: hidden;
  .statisticsOne{
    height: 86px;
    background-color: #ffffff;
    margin-top: 19px;
    @include flex(flex-start);
    border: solid 1px #e5e6ef;
    opacity: 0.8;
    .statisticsMain{
      @include flex(flex-start);
      margin-left: 33px;
      margin-right: 85px;
      .leftBg{
        width: 4px;
        span{
          display: block;
          width: 4px;
          height: 16px;
          &:nth-child(1){
            background-color: #5aa5f8;
          }
          &:nth-child(2){
            background-color: #4ccfc9;
          }
          &:nth-child(3){
            background-color: #f66568;
          }
          &:nth-child(4){
            background-color: #ffbf3f;
          }
        }

      }
      img{
        margin: 0 9px 0 15px;
      }
      .img1{
        @include wh(58px,66px);
      }
      .img2{
        @include wh(58px,47px);
      }
      .img3{
        @include wh(67px,51px);
      }
      .rightBg{
        h2{
          @include font(24px,#636363)
        }
        h3{
          @include font(16px,#888888);
        }
      }
    }

  }
  .filtrate{
    height: 80px;
    margin-top: 19px;
    padding: 0 25px;
    .el-input ~ div{
      margin-left: 25px;
    }
  }
  .listMain{
    padding: 0 25px;
    overflow: hidden;
    height: 602px;
    background-color: #FCFCFD;
    margin-top: 19px;
    .listMainTop{
      height: 78px;
      @include flex(flex-start);
      position: relative;
    }
    .listTable{
      border: solid 1px #e5e6ef;
      // overflow: hidden;
      ::v-deep .el-table__header-wrapper{
        height: 50px;
      }
      ::v-deep .el-table__header{
        height: 50px;
        thead{
          tr{
            height: 50px;
            background-color: #fff9ed;
          }
        }
      }

    }
    .block{
      @include flex();
      margin-top: 26px;
    }


  }

}



</style>
