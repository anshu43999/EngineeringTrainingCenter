<!-- 教师团队 -->
<template>
<div class='teatherTeam'>
    <div class="teatherTop">
        <i class="iconfont iconjiaoshibaodingjiaocai"></i><span>大数据与人工智能创意设计双创平台·指导教师团队</span>
    </div>

    <div class="statistics">
        <div class="statistics-left">
            <el-input v-model="input" placeholder="平台名称/平台负责人"></el-input>
            <el-select v-model="value" placeholder="所属学院">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value" placeholder="房间号">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

            <el-button style="margin-left:45px" size='mini' type="primary">查询</el-button>

            <el-button size='mini'>重置</el-button>

        </div>
        <div class="statistics-right">
            <el-button style="margin-right:40px"  size='mini' type="primary">新增指导教师团队成员</el-button>
        </div>
    </div>

    <div class="teacherShow">
        <div class="teacherSingle">
            <img src="" alt="">
            <h2>杨秋翔</h2>
            <h3>13803492618</h3>
            <div class="info">
                <span>专业1专业1</span>
                <span>职称1职称1</span>
            </div>
            <div class="position">平台负责人</div>
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
.teatherTeam{
    @include wh(1693px,800px);
    @include flex(flex-start,center,column);
        background-color: #ffffff;
    margin-top: 25px;
    margin-left: 25px;
    margin-bottom: 24px;
    .teatherTop{
        width: 100%;
        height: 56px;
        line-height: 56px;
        background-color: #ffffff;
        border-bottom: solid 1px #e5e6ef;
        opacity: 0.8;
        padding-left:26px;
        i{
            margin-right: 8px;
        } 
        span{
            @include font(14px,#333333)
        }
    }
    .statistics{
        width: 100%;
        .statistics-left{
            @include flex();
            height: 80px;
        }

        @include flex(space-between);
        height: 80px;
        // line-height: 80px;
        border-bottom: solid 1px #e5e6ef;
	    opacity: 0.8;
        .el-input{
            margin-left: 25px;
        }
        .el-select{
            margin-left: 55px;
        }
    }
    .teacherShow{
        width: 100%;
        flex: 1;
        overflow: hidden;
        padding: 0 64px;
        .teacherSingle{
            width: 260px;
            @include flex(flex-start,center,column);
            background-color: #ffffff;
            border: solid 1px #dddddd;
            margin-top: 30px;
            img{
                @include wh(140px,140px);
                margin-top: 26px;
            }
            h2{
                width: 100%;
                @include font(14px,#333333,center);
                margin-top : 12px;
            }
            h3{
                width: 100%;
                @include font(14px,#333333,center);
                margin-top : 10px;
            }
            .info{
                width: 100%;
                margin-top: 25px;
                @include font(14px);
                @include flex(space-between);
                padding: 0 20px;
            
            }
            .position{
                width: 100%;
                height: 30px;
                line-height: 30px;
                margin-top: 23px;
                @include font(12px,#ffffff,center);
                background-color: #ffbf3f;
                border: solid 1px #dddddd;
            }


        }
    }
    
    
}
</style>