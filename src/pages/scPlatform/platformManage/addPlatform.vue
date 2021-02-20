<!-- 新增平台 -->
<template>
<div class='addPlatform'>
    <div class="addPlatformMain">
        <div class="addTop">
            <div>
                <i class="iconfont iconbianji2"></i>
                <span>新增平台</span>
            </div>
            <div>
                为必填项
            </div>
        </div>

        <div class="addMain">
            <div class="addMain-left">
                <div>基本信息</div>


            </div>

            <div class="addMain-right">

                

            </div>

        </div>

    </div>
    

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import '../../../assets/style/elementcommon.scss'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
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
@import "../../../assets/style/mixin";
.addPlatform{
background-color: #F1F2F6;
overflow: hidden;
height: 100%;
}
.addPlatformMain{
    @include wh(1000px,798px);
    background-color: #ffffff;
	box-shadow: 0px 1px 4px 0px 
		rgba(43, 57, 128, 0.19);
	border: solid 1px #e5e6ef;
    opacity: 0.8;
    margin: 25px 0 0 93px;
    .addTop{
        height: 56px;
        @include flex(space-between);
        padding:0 68px 0 33px;
        border-bottom: solid 1px #e5e6ef;
        opacity: 0.8;
    }
    .addMain{
        padding: 0 39px;
        @include flex(flex-start,flex-start);
        .addMain-left{
            width: 77px;
        }
    }
    
}
</style>