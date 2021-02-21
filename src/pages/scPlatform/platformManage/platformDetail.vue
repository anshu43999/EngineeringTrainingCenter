<!--  -->
<template>
<div class='platformDetail'>
    <div class="showOne">
        <div class="showOne-left">
            <img src="../../../assets/image/scPlatform/platformDetail/image1.png" alt="">
            <div class="showOne-left-text">
                <h2>大数据与人工智能创意设计双创平台</h2>
                <h3>平台负责人：杨秋翔</h3>
                <h3>房间1：A301、303(赛客创新创业实践平台)</h3>
                <h3>房间2：A309、311(人工智能创意设计平台)</h3>
            </div>
        </div>
        <div class="showOne-right">
            <div class="showOne-right-box">
                <div class="vertical">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="images"></div>
                <div class="right-box-text">
                    <h2>12</h2>
                    <h3>平台教师总数</h3>
                </div>
            </div>
            <div class="showOne-right-box">
                <div class="vertical">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="images"></div>
                <div class="right-box-text">
                    <h2>12</h2>
                    <h3>平台累计报课人次</h3>
                </div>
            </div>
            <div class="showOne-right-box">
                <div class="vertical">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="images"></div>
                <div class="right-box-text">
                    <h2>12</h2>
                    <h3>平台累计荣誉</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="showTwo">
        <div class="showTwo-box" v-for="(item,index) in platformData" :key="index" @click="navSkip(item.path) ">
            <div class="showTwo-box-left"></div>
            <div class="showTwo-box-right">
                <h2>{{item['title1']}} </h2>
                <h3>{{item['title2']}}</h3>
                <h3>{{item['title3']}}</h3>
            </div>
        </div>
    </div>

    <div class="showThree">
        <div class="showThree-title">
            <!-- <i class="iconfont iconhuodongbaobei"></i> -->
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconhuodongbaobei"></use>
            </svg>
            平台活动
        </div>

        <div class="showThree-table">
            <div class="tablelist">
                <div class="rows">
                    <div class="rows1">燃烧机甲之魂——中北大学举办首届RoboMaster机甲大师校内赛</div>
                    <div class="rows2">作者：author</div>
                    <div class="rows3">2021.09.01</div>
                    <div class="rows4">查看</div>
                </div>
                 <div class="rows">
                    <div class="rows1">燃烧机甲之魂——中北大学举办首届RoboMaster机甲大师校内赛</div>
                    <div class="rows2">作者：author</div>
                    <div class="rows3">2021.09.01</div>
                    <div class="rows4">查看</div>
                </div>
                 <div class="rows">
                    <div class="rows1">燃烧机甲之魂——中北大学举办首届RoboMaster机甲大师校内赛</div>
                    <div class="rows2">作者：author</div>
                    <div class="rows3">2021.09.01</div>
                    <div class="rows4">查看</div>
                </div>

            </div>

            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </el-pagination>
            </div>


        </div>



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
    platformData : [
        {
            path : 'platformDetail/basicPlatformInformation',
            title1 : '平台信息管理（平台介绍）',
            title2 : '信息完善度：80%',
            title3 : '上次编辑时间：2021.09.01',
        },
        {
            path : 'platformDetail/teatherTeam',
            title1 : '平台指导教师团队管理',
            title2 : '现存指导教师总数：6人',
            title3 : '上次编辑时间：2021.09.01',
        },
        {
            path : 'platformDetail/termPlanManagement',
            title1 : '平台学期课程计划管理',
            title2 : '本学期平台课程总数：4门',
            title3 : '上次编辑时间：2021.09.01',
        },
        {
            path : 'platformDetail/honorManagement',
            title1 : '平台荣誉管理',
            title2 : '今年新增荣誉：2',
            title3 : '上次编辑时间：2021.09.01',
        },
        {
            path : 'platformDetail/equipment',
            title1 : '平台设备、资源管理',
            title2 : '今年新增荣誉：2',
            title3 : '次编辑时间：2021.09.01',
        },
        {
            path : '',
            title1 : '平台数据统计分析',
            title2 : '现统计学期：2021年第一学期',
            // title3 : '次编辑时间：2021.09.01',
        },
    ]

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    navSkip(path){
        this.$router.push({path : path})

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
@import "../../../assets/style/mixin";
.platformDetail{
    padding:  0  32px 0 25px;
    .showOne{
        margin-top: 25px;
        height: 160px;
        @include flex();
        background-color: #ffffff;
        box-shadow: 0px 1px 2px 0px 
            rgba(43, 57, 128, 0.1);
        border: solid 1px #e5e6ef;
        opacity: 0.8;
        .showOne-left{
            width: 674px;
            height: 100%;
            @include flex(flex-start);
            img{
                margin-left: 29px;
                margin-right: 21px;
                @include wh(100px,100px);
            }
            h2{
                font-size: 16px;
                line-height: 36px;
                color: #333333;
            }
            h3{
                font-size: 12px;
                line-height: 22px;
                color:#888888;
            }

        }
        .showOne-right{
            flex: 1;
            height: 100%;
            @include flex(flex-start);
            div:nth-child(1){
                .images{
                    width: 106px;
                    height: 68px;
                    @include backgroundImage('../../../assets/image/scPlatform/platformDetail/image2.png',center,contain);
                }
            }
            div:nth-child(2){
                .images{
                    width: 106px;
                    height: 68px;
                    @include backgroundImage('../../../assets/image/scPlatform/platformDetail/image3.png',center,contain);
                }
            }
            div:nth-child(3){
                .images{
                    width: 106px;
                    height: 68px;
                    @include backgroundImage('../../../assets/image/scPlatform/platformDetail/image4.png',center,contain);
                }
            }


            .showOne-right-box{
                @include flex(flex-start);
                margin-right: 88px;
                .vertical{

                    div{
                        width: 4px;
                        height: 17px;
                    }

                    div:nth-child(1){
                        background-color: #5aa5f8
                    } 
                    div:nth-child(2){
                        background-color: #4ccfc9
                    } 
                    div:nth-child(3){
                        background-color: #51c1f1
                    } 
                    div:nth-child(4){
                        background-color: #7cd67f
                    } 
                }
                
                .right-box-text{
                    h2{
                        font-size: 24px;
                    }
                    h3{
                        font-size: 16px;
                        line-height: 28px;
                        color: #888888;
                    }
                }

            }
        }
    }
    .showTwo{
        height: 368px;
        margin-top: 22px;
        background-color: #ffffff;
        box-shadow: 0px 1px 2px 0px 
            rgba(43, 57, 128, 0.1);
        border: solid 1px #e5e6ef;
        opacity: 0.8;
        padding-left: 80px;
        @include flex(flex-start,flex-start);
        flex-wrap: wrap;

        .showTwo-box:nth-child(1){
            .showTwo-box-left{
                @include backgroundImage('../../../assets/image/scPlatform/platformDetail/jiesao.png',center,auto);
            }
        }
        .showTwo-box:nth-child(2){
            .showTwo-box-left{
                @include backgroundImage('../../../assets/image/scPlatform/platformDetail/teather.png',center,auto);
            }
        }
        .showTwo-box:nth-child(3){
            .showTwo-box-left{
                @include backgroundImage('../../../assets/image/scPlatform/platformDetail/class.png',center,auto);
            }
        }
        .showTwo-box:nth-child(4){
            .showTwo-box-left{
                @include backgroundImage('../../../assets/image/scPlatform/platformDetail/honor1.png',center,auto);
            }
        }
        .showTwo-box:nth-child(5){
            .showTwo-box-left{
                @include backgroundImage('../../../assets/image/scPlatform/platformDetail/instrument.png',center,auto);
            }
        }
        .showTwo-box:nth-child(6){
            .showTwo-box-left{
                @include backgroundImage('../../../assets/image/scPlatform/platformDetail/data.png',center,auto);
            }
        }


        .showTwo-box{
            cursor: pointer;
            width: 400px;
            height: 140px;
            margin-top: 28px;
            margin-right: 62px;
            background-color: #ffffff;
            border: solid 1px #e5e6ef;
            @include flex(flex-start);
            .showTwo-box-left{
                width: 140px;
                height: 140px;

            }
            .showTwo-box-right{
                h2{
                    @include font(16px);
                    line-height: 38px;
                }
                h3{
                    @include font(12px);
                    line-height: 33px;
                }
            }
        }
    }

    .showThree{
        height: 230px;
        margin-top: 20px;
        background-color: #ffffff;
        box-shadow: 0px 1px 2px 0px 
            rgba(43, 57, 128, 0.1);
        border: solid 1px #e5e6ef;
        opacity: 0.8;
        .showThree-title{
            height: 46px;
            line-height: 46px;
            border-bottom: 1px solid #e5e6ef;
            @include font(14px);
            svg{
                @include wh(18px,18px);
                margin: 0 12px 0 20px;
            }
        }
        .showThree-table{
            padding: 0 90px 0 48px;
            .tablelist{
                .rows{
                    height: 38px;
                    border-bottom:1px solid #e7e8f0; 
                    @include flex(flex-start);
                    @include font(14px);
                    .rows1{
                        width: 760px;
                    }
                    .rows2{
                        width: 316px;
                    }
                    .rows3{
                        width: 396px;

                    }

                }
            }
        }
    }
    .block{
        @include flex();
        margin-top: 26px;
    }

}
</style>