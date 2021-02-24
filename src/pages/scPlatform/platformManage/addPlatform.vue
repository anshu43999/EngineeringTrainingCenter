<!-- 新增平台 -->
<template>
<div class='addPlatform'>
    <div class="addPlatformMain">
        <div class="addTop">
            <div>
                <svg class="icon" aria-hidden="true" style="width:16px;height:16px;margin-right:9px">
                    <use xlink:href="#iconbianji2"></use>
                </svg>
                <span>新增平台</span>
            </div>
            <div style="font-size:12px">
                <svg class="icon" aria-hidden="true" style="width:8px;height:8px">
                    <use xlink:href="#iconxinghao"></use>
                </svg>
                为必填项
            </div>
        </div>

        <div class="addMain">
            <div class="addMain-left">
                <div>基本信息</div>


            </div>

            <div class="addMain-right">
                <div class="item">
                    <div class="label">
                        <svg class="icon" aria-hidden="true" style="width:8px;height:8px">
                            <use xlink:href="#iconxinghao"></use>
                        </svg>
                        平台名称：</div>
                    <el-input v-model="input" style="width:400px" placeholder="请输入内容"></el-input>

                </div>

                <div class="item">
                    <div class="label">
                        <svg class="icon" aria-hidden="true" style="width:8px;height:8px">
                            <use xlink:href="#iconxinghao"></use>
                        </svg>
                        平台所属学院：</div>
                    <el-select style="width:400px" v-model="value" placeholder="所属学院">
                        <el-option
                        style="width:400px"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="line"></div>

                <div class="item">
                    <div class="label">
                        <svg class="icon" aria-hidden="true" style="width:8px;height:8px">
                            <use xlink:href="#iconxinghao"></use>
                        </svg>
                        平台负责人：</div>
                    <div class="customOne">
                        <div class="leftInput">
                            <input type="text">
                        </div>
                        <div class="centerInput">
                            <input type="text">
                        </div>
                        <div class="rightInput"> <i class="iconfont iconqun"></i> </div>
                    </div>
                    <i class="addBtn el-upload el-icon-circle-plus-outline"></i>
                    
                </div>

                <div class="item">
                    <div class="label">平台负责人：</div>
                    <div class="customOne">
                        <div class="leftInput">
                            <input type="text">
                        </div>
                        <div class="centerInput">
                            <input type="text">
                        </div>
                        <div class="rightInput"> <i class="iconfont iconqun"></i> </div>
                    </div>
                </div>

                <div class="line"></div>

                <div class="item" id="multiple">
                    <div class="label">平台房间：</div>
                    <el-select  v-model="value1" collapse-tags multiple placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <i class="iconfont iconguanlianguanlianjiluguanlianshezhi"></i>
                    <el-input v-model="input" style="width:200px" placeholder="请输入内容"></el-input>
                    <i class="iconfont iconguanlianguanlianjiluguanlianshezhi"></i>
                    <el-input v-model="input" style="width:200px" placeholder="请输入内容"></el-input>

                    <i class="addBtn el-upload el-icon-circle-plus-outline"></i>
                </div>

                <div class="item">
                    <div class="label">安全责任人：</div>
                    <div class="customOne">
                        <div class="leftInput">
                            <input type="text">
                        </div>
                        <div class="centerInput">
                            <input type="text">
                        </div>
                        <div class="rightInput"> <i class="iconfont iconqun"></i> </div>
                    </div>
                </div>

                <div class="line"></div>
                <div class="item">
                    <div class="label">备注：</div>
                    <el-input
                        style="width:400px"
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>


                <div class="btnWrap">
                    <el-button size='mini' type="primary"><i class="iconfont icontijiaochenggong"></i> 提交</el-button>
                    <el-button size='mini' > <i class="iconfont iconcs-fh-1"></i> 重置</el-button>

                </div>


                
                

                

            </div>

        </div>

    </div>
    

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import '../../../assets/style/elementcommon.scss'
import '../../../assets/style/addPlatform.scss'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
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
        },{
          value: '选项1',
          label: '黄金糕'
        },{
          value: '选项1',
          label: '黄金糕'
        },{
          value: '选项1',
          label: '黄金糕'
        }],
    value: '',
    value1: [],
    textarea : '',

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
    @include backgroundImage('../../../assets/image/commonBg/addPlatform.png');
    background-size: 573px 546px;
    background-position: 100% 99%;


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
        height: 742px;
        padding: 0 39px;
        @include flex(flex-start,flex-start);
        background-color: #FCFCFD;
        .addMain-left{
            width: 77px;
            height: 100%;
            @include font(14px,#444444);
            div{
                font-weight: 600;
                padding-top: 32px;

            }
            
        }
        .addMain-right{
            flex: 1;
            .item{
                @include flex(flex-start);
                margin-top: 23px;
                .label{
                    width: 158px;
                    color: #8d8d8d;
                    padding-right: 19px;
                    text-align: right;
                }
                .customOne{
                    width: 400px;
                    height: 42px;
                    background-color: #ffffff;
                    border-radius: 4px;
                    border: solid 1px #d5d5d5;
                    @include flex();
                    .leftInput{
                        @include wh(110px,100%); 
                        border-right: 1px solid #d5d5d5;
                        @include flex();
                        input{
                            @include wh(100px,14px);
                        }
                    }
                    .centerInput{
                        @include wh(249px,100%);
                        border-right: 1px solid #d5d5d5;
                        @include flex();
                        input{
                            @include wh(240px,14px);
                        }
                    }
                    .rightInput{
                        height: 100%;
                        flex:1;
                        @include flex();
                        i{
                            color: #c8c8c8;
                        }
                    }

                }
                

            }
            .line{
                height: 1px;
                background-color: #dddddd;
                margin-top: 23px;

            }
            .btnWrap{
                 margin-top: 50px;
                 padding-left: 159px;

            }
            
        }
    }
    
}
.addBtn{
    margin-left: 25px;
}
</style>