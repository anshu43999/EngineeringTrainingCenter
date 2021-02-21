<!--  -->
<template>
<div class='platformEdit'>
    <div class="platformEditMain">
        <div class="platformEditMainTop">
            <svg class="icon" aria-hidden="true" style="width:16px;height:16px;margin-left:26px;margin-right:8px">
                <use xlink:href="#iconziliaoku"></use>
            </svg>
            平台信息编辑
        </div>

        <div class="platformEditMainCenter">
            <div class="leftMenu">
                <ul>
                    <li v-for="(item,index) in menuData" :key="index" :class="index===active?'active':'' " @click="active= index">
                       <i class="iconfont iconjinqi"></i>{{item.title}} 
                    </li>
                </ul>
            </div>
            <div class="rightMain">
                <div :class="[ active ===0 ? 'active': '','box']">
                    <div class="changeHead">
                        <img src="../../../assets/image/scPlatform/platformDetail/image1.png" alt="">
                        <div class="btnClass">更改平台头像</div>
                    </div>
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


                <div :class="[ active ===1 ? 'active': '','commonBox']">
                    <!-- 平台介绍 -->

                    <div class="introduceOne">
                        <div class="title">平台方向</div>
                        <richText></richText>
                    </div>

                    <div class="introduceOne">
                        <div class="title">平台简介</div>
                        <richText></richText>
                    </div>

                    <div class="btnWrap">
                        <el-button size='mini' style="float:right;margin-right:29px" > <i class="iconfont iconcs-fh-1"></i> 取消</el-button>
                        <el-button size='mini' style="float:right;margin-right:29px" type="primary"><i class="iconfont icontijiaochenggong"></i> 保存</el-button>
                        
                    </div>

                    
                </div>

                <div :class="[ active ===2 ? 'active': '','box2','commonBox']">
                    <div class="picBg">
                        <div class="picBgMain">
                            <div class="picBgMainLeft"></div>
                            <div class="picBgMainRight">
                                <div>
                                    <svg class="icon" aria-hidden="true" style="width:16px;text-align: center;height:13px;cursor: pointer;margin-bottom: 18px;">
                                        <use xlink:href="#icontupianbianji"></use>
                                    </svg>
                                </div>
                                <div>
                                    <svg class="icon" aria-hidden="true" style="width:16px;height:13px;cursor: pointer;margin-bottom: 18px;">
                                        <use xlink:href="#iconxiazai"></use>
                                    </svg>
                                </div>
                                <div class="deleteBtn">
                                    <svg class="icon" aria-hidden="true" style="width:16px;height:13px;cursor: pointer;margin-bottom: 18px;">
                                        <use xlink:href="#iconshanchu1"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="title">大数据与人工智能创意设计双创平台图片1</div>
                    </div>

                    <!-- add -->
                    <div class="picBg">
                        <div class="picBgMain">
                            <div class="picBgMainLeft">
                                <img src="../../../assets/image/scPlatform/platformDetail/add.png" alt="">
                                <h2>只能上传jpg/png格式文件</h2>
                                <h2>文件不能超过500kb</h2>
                            </div>
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>

    </div>
    

    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import richText  from '../../../components/common/wangEnduit.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {richText},
data() {
//这里存放数据
return {
    menuData:[
        {
            title : '基本信息'
        },
        {
            title : '平台介绍'
        },
        {
            title : '图片管理'
        },
    ],
    active : 0, 
    input:'',
    value : '',
    options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }],
    value1:'',
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
.platformEdit{
    padding: 25px 32px 21px 25px;
    height: 100%;
    .platformEditMain{
        height: 99%;
        background-color: #ffffff;
        box-shadow: 0px 1px 4px 0px 
            rgba(43, 57, 128, 0.19);
        border: solid 1px #e5e6ef;
        opacity: 0.8;
        @include flex(flex-start,center,column);
        // flex-direction: column
        .platformEditMainTop{
            width: 100%;
            height: 56px;
            line-height: 56px;
            border-bottom: solid 1px #e5e6ef;
        }
        .platformEditMainCenter{
            width: 100%;
            flex: 1;
            @include flex(flex-start);
            flex-direction: row;
            .leftMenu{
                width: 130px;
                height: 100%;
                box-shadow: 0px 1px 4px 0px 
                    rgba(43, 57, 128, 0.19);
                border-right: solid 1px #e5e6ef;
                opacity: 0.8;
                ul{
                    li{
                        position: relative;
                        line-height: 53px;
                        text-align: center;
                        cursor: pointer;
                        color: #999999;
                        i{
                            display: none;
                        }
                    }
                    .active{
                        i{
                            display: block;
                            position: absolute;
                            color: #409eff;
                            font-size: 14px;
                            left: 10%;
                        }
                        color: #444444;
                    }
                }
            }
            .rightMain{
                flex: 1;
                height: 100%;
                position: relative;
               
                .box2{
                    padding-top: 25px;
                    padding-left: 40px;
                    @include flex(flex-start);
                    flex-wrap: wrap;
                    .picBg{
                        @include wh(340px,250px);
                        float: left;
                        margin-right: 40px;
                        .picBgMain{
                            height: 231px;
                            @include flex();
                            .picBgMainLeft{
                                width: 297px;
                                height: 100%;
                                @include backgroundImage('../../../assets/image/scPlatform/platformDetail/picBg.png');
                                @include flex(center,center,column);
                                
                                img{
                                    @include wh(114px,114px);
                                    margin-bottom: 12px;
                                }
                                h2{
                                    font-size: 14px;
                                    color: #b9b9b9;
                                }

                            
                            }
                            .picBgMainRight{
                                flex: 1;
                                height: 100%;
                                margin-left: 8px;
                                text-align: center;
                                background-color: #ffffff;
                                border: solid 1px #dddddd;
                                padding-top: 14px;
                                position: relative;
                                .deleteBtn{
                                    position: absolute;
                                    width: 100%;
                                    bottom: 0;
                                }
                            }



                        }
                        .title{
                            margin-top: 5px;
                            height: 14px;
                            @include font(14px,#444444);
                            line-height: 14px;
                        }

                    }
                }


                

                .box{
                    display: none;
                    width: 1157px;
                    padding-left: 94px;
                    padding-right: 230px;
                    position: relative;
                    .changeHead{
                        position: absolute;
                        right: 0;
                        top: 12px;
                        @include flex();
                        flex-direction: column;
                        img{
                            width:170px;
                            height: 170px; 
                        }
                        .btnClass{
                            cursor: pointer;
                            margin-top: 16px;
                            @include wh(120px,30px);
                            line-height: 30px;
                            @include font(14px,#409eff,center);
                            border-radius: 4px;
	                        border: solid 1px #409eff;
                        }
                    }
                }
                .commonBox{
                    display: none;
                }
                .introduceOne{
                    width: 1514px;
                    margin-left: 24px;
                    margin-top: 24px;
                    background-color: #ffffff;
                    .title{
                        height: 40px;
                        line-height: 40px;
                        border: solid 1px #e5e6ef;
                        border-bottom: none;
                        @include font(14px);
                        text-indent: 18px;
                    }
                }
                .active{
                    display: block;
                }
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

}
</style>