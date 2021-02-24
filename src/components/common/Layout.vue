<!-- 首页 -->
<template>
<div class='layout'>
    <!-- header -->
    <headerTop></headerTop>
    <!-- nav -->
    <!-- <navigation></navigation> -->
    <!-- breadCrumbs -->
    <!-- <breadCrumb ></breadCrumb> -->
    <div  class="content">
        <navigation></navigation>
        <div class="contentRight">
            <breadCrumb  :breadcrumb='breadcrumb' ></breadCrumb>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>


    </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import headerTop from './headerTop'
import navigation from './navigation'
import breadCrumb from './breadCrumb'
export default {
name : 'Layout',
//import引入的组件需要注入到对象中才能使用
components: {
    headerTop,
    navigation,
    breadCrumb
},
data() {
//这里存放数据
return {
    breadcrumb: {
        search: false,
        searching: "",
      },


};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "../../assets/style/mixin";
.layout{
    @include wh(100%,100vh);
    @include flex(space-between,center,column);
    .content{
        @include wh(100%,calc(100% - 50px));
        overflow: hidden;
        @include flex();
        .contentRight{
            height: 100%;
            flex: 1;
            @include flex(space-between,center,column);
            .main{
                @include wh(100%,calc(100% - 48px));
                background-color: #F1F2F6;
              overflow: scroll;
            }
        }


    }
}

</style>
