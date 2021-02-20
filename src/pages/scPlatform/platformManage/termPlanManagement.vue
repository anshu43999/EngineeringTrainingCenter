<template>
  <div id="termPlanManagement">
    <div class="search">
      <div>
        <el-select v-model="value" placeholder="学期计划筛选">
          <el-option
              v-for="item in terms"
              :key="item.id"
              :label="item.name"
              :value="item.id">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "termPlanManagement",
  data() {
    return {
      terms: [
        {
          id: 1,
          name: '学期一'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/style/mixin";

#termPlanManagement {
  width: calc(100% - 50px);
  margin: 25px;
  background-color: rgba(255, 255, 255, .8);
  box-shadow: 0px 1px 4px 0px rgba(43, 57, 128, 0.19);
  border: solid 1px #e5e6ef;
  opacity: 0.8;
  color: #444;

  .search {
    @include wh(100%, 80px);
    background-color: rgba(255, 255, 255, .8);
    padding: 25px 24px;

    ::v-deep .el-input--suffix .el-input__inner{
        @include wh(200px,30px);
      }
    ::v-deep .el-select__caret{
      line-height: 30px;
    }
  }
}
</style>
