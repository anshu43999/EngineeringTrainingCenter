<!--  -->
<template>
<div class='userInfo'>
    <div class="userInfo-title">
        <div class="userInfo-title-left">
            <span>账户信息</span>
            <span class="psd-edit" @click="psdClose"> <i class="iconfont icon-mimaxiugai"></i>密码修改</span>
        </div>
        <span class="userInfo-title-right" @click="close"></span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

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
    close(){
        this.$emit('userInfoClose')
    },
    psdClose(){
        this.$emit('psdClose')
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

.userInfo{
    position: absolute;
    right: 0;
    top: 50px;
    z-index: 99;
    background-color: #ffffff;
    @include wh(450px,240px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px;
    border-radius: 3px;
    .userInfo-title{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(194, 192, 192, 0.35);
        @include flex(space-between);
        .userInfo-title-left{
            @include font(14px);
            span{
                margin-left: 15px;
                i{
                    margin-left: 25px;
                    color: rgb(83, 100, 132);
                }
            }
            .psd-edit{
                cursor: pointer;
            }
            :hover{
                color: rgb(83, 100, 132);
            }
            

        }
        
        .userInfo-title-right{
            @include wh(13px,13px);
            cursor: pointer;
            margin-right: 15px;
            @include backgroundImage('../../assets/image/common/close.png')
        }

        
    }
}





</style>