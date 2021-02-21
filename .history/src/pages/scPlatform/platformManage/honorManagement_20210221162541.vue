<template>
  <div id="honorManagement">
    <div class="title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconrongyu1"></use>
      </svg>
      大数据与人工智能创意设计双创平台·获奖荣誉管理
    </div>
    <!--  搜索-->
    <div class="search">
      <div>
        <el-input
          v-model="search.honorName"
          placeholder="请输入荣誉名称"
          size="mini"
        ></el-input>
        <el-date-picker
          size="mini"
          v-model="search.date"
          type="date"
          placeholder="选择获奖时间"
        >
        </el-date-picker>
        <el-button type="primary" size="mini">
          <i class="iconfont iconsousuo"></i>
          查询
        </el-button>
        <el-button size="mini">
          <i class="iconfont iconcs-fh-1"></i>
          重置
        </el-button>
      </div>
    </div>
    <!--  荣誉-->
    <div class="honor-list">
      <div class="honor-list-item" v-for="item in honorList" :key="item.id">
        <div class="honor-title">
          <i class="iconfont iconbianji4"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "honorManagement",
  data() {
    return {
      search: {
        honorName: "",
        date: "",
      },
      honorList:[
        {
          id:1,
          url:'',
          name:'*****荣誉',
          team:'孜孜不倦团队',
          time:'2020/0901'
        },
        {
          id:2,
          url:'',
          name:'*****荣誉',
          team:'孜孜不倦团队',
          time:'2020/0901'
        },
        {
          id:3,
          url:'',
          name:'*****荣誉',
          team:'孜孜不倦团队',
          time:'2020/0901'
        },
        {
          id:4,
          url:'',
          name:'*****荣誉',
          team:'孜孜不倦团队',
          time:'2020/0901'
        },
        {
          id:5,
          url:'',
          name:'*****荣誉',
          team:'孜孜不倦团队',
          time:'2020/0901'
        },
        {
          id:6,
          url:'',
          name:'*****荣誉',
          team:'孜孜不倦团队',
          time:'2020/0901'
        },
      ]
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/style/mixin";

#honorManagement {
  $border: solid 1px #e5e6ef;
  width: calc(100% - 50px);
  margin: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  border: $border;
  opacity: 0.8;
  color: #444;

  .title {
    padding: 0 25px;
    height: 56px;
    line-height: 56px;
    @include font(14px, #333);
    border-bottom: $border;

    svg {
      @include wh(20px, 100%);
      float: left;
      margin-right: 10px;
    }
  }

  .search {
    height: 80px;
    padding: 25px;
    border: $border;

    div {
      height: 100%;

      & > * {
        margin-right: 23px;
        margin-left: 0;
      }

      ::v-deep .el-input {
        display: inline-block;
        width: 200px;
      }

      ::v-deep .el-button {
        height: 100%;
        line-height: 14px;
      }
    }
  }

  .honor-list {
    padding: 25px 27px;
    @include flex(space-between);
    flex-wrap: wrap;

    .honor-list-item{
      @include wh(290px,282px);
      margin: 12px;
      background: $active-bg;

      .honor-title{
        height: ;
      }
    }
  }
}
</style>
