<!--  -->
<template>
<div class='statistics'>
    <div class="statisticsBox">
        <div class="statisticsTitle">
            <svg class="icon" aria-hidden="true" style="width:16px;height:17px;margin:0 9px 0 25px;">
                <use xlink:href="#iconziyuan"></use>
            </svg>
            大数据与人工智能创意设计双创平台·平台数据统计
        </div>
        <div class="statisticsMain">
            <div class="mainLeft">
                <div class="staNum" v-for="(item,index) in leftStatistics" :key="index">
                    <h2>{{item.title}}</h2>
                    <h3>{{item.number}}</h3>
                </div>
            </div>
            <div class="mainRight">
                <div class="statisticsPic">
                    <div class="title">各课程学生报名人数占比</div>
                    <div id='classCompare' class="main"> </div>
                </div>
                <div class="statisticsPic">
                    <div class="title">2021年第一学期课程课时统计分析</div>
                    <div id="classTime"  class="main"> </div>
                </div>
                <div class="statisticsPic">
                    <div class="title">各课程学生报名人数占比</div>
                    <div id="classCompare2"  class="main"> </div>
                </div>
                <div class="statisticsPic">
                    <div class="title">各课程课时进程监测统计</div>
                    <div id="classTime2"  class="main"> </div>
                </div>

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
    leftStatistics: [
        {
            title : '平台累计报名人数',
            number : 7344
        },
        {
            title : '2021年第一学期报课人数',
            number : 7344
        },
        {
            title : '平台累计获奖（荣誉）',
            number : 33
        },
        {
            title : '平台设备数',
            number : 22
        },

    ]

};
},  
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    initChartsOne(){
        var chartDom = document.getElementById('classCompare');
        var myChart = this.$echarts.init(chartDom);
        var colorList = ['#35CBCA','#4FCB74','#3AA1FE','#FCED56','#975fe6'];
        var option;
        option = {
            color:colorList,
            tooltip: {
                trigger: 'item'
            },
            legend: {
                bottom: '2%',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: [35, 60],
                    center: ['50%', '45%'],

                    label: {
                        alignTo: 'edge',
                        formatter: '{name|{b}}\n{time|{c} %}',
                        minMargin: 5,
                        edgeDistance: 10,
                        lineHeight: 15,
                        rich: {
                            time: {
                                fontSize: 10,
                                color: '#999'
                            }
                        }
                    },
                    data: [
                        {value: 1048, name: 'a课程'},
                        {value: 735, name: 'b课程'},
                        {value: 580, name: 'c课程'},
                        {value: 484, name: 'd课程'},
                
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        option && myChart.setOption(option);
    },
    initChartsTwo(){
        var chartDom = document.getElementById('classTime');
        var myChart = this.$echarts.init(chartDom);
        var option;
        var colorList = ['#3aa1fe','#4fcb73','#fbd437','#445188','#975fe6'];
        option = {
            backgroundColor:'#ffffff',
            calculable: true,
            color:colorList,
            series: [
                {
                    name:'漏斗图',
                    type:'funnel',
                    left: '5%',
                    right:'35%',
                    top: '10%',
                    bottom: '10%',
                    minSize: '0%',
                    maxSize: '100%',
                    // sort: 'ascending',
                    label: {
                        show: true,
                        formatter: function(params){
                            console.log(params);
                            // return params.name+'（'+params.data.num+'户）\n'+params.value+'亿\n'+params.percent+'%';
                            return params.name+params.percent+'%';
                        },
                        
                        
                        rich: {
                            a: {
                                color: 'rgba(222,240,255,1)',
                                fontSize: 30
                            },
                            b: {
                            color: 'rgba(101,166,196,1)',
                            fontSize: 14
                            }
                        }
                    },
                    labelLine: {
                        length: 100,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    data: [
                        {value: 2.14, name: 'a课程36学时',num:'3000'},
                        {value: 0.5, name: 'b课程25学时',num:'23'},
                        {value: 0.96, name: 'c课程18学时',num:'21'},
                        {value: 0.26, name: 'd课程10学时',num:'42'},
                        {value: 1.35, name: 'e课程8学时',num:'2112'},
                    ]
                }
            ]
        };
        
        

        





        option && myChart.setOption(option);        
    },
    initChartsThree(){
        var chartDom = document.getElementById('classCompare2');
        var myChart = this.$echarts.init(chartDom);
        var option;
        var colorList = ['#38a0ff','#4dcd6e'];
        option = {
            color: colorList,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['今年', '去年'],
                bottom: '2%',
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['f课程', 'e课程', 'd课程', 'c课程', 'b课程', 'a课程']
            },
            series: [
                {
                    name: '今年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '去年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
        option && myChart.setOption(option);   

    },
    initChartsFour(){
        var chartDom = document.getElementById('classTime2');
        var myChart = this.$echarts.init(chartDom);
        var option;
        option = {
            color : '#4aa9ff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[1];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid: {
                left: '10%',
                right: '8%',
                bottom: '5%',
                top: '7%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                
                
                type: 'category',
                splitLine: {show: false},
                data: ['g课程', 'f课程', 'e课程', 'd课程', 'c课程', 'b课程','a课程']
            },
            series: [
                {
                    name: '辅助',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [1000,200, 1700, 1400, 1200, 300, 0]
                },
                {
                    name: '生活费',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    data: [1100,2100, 1800, 300, 200, 900, 300]
                }
            ]
        };
        option && myChart.setOption(option);   


    }


},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.initChartsOne();
    this.initChartsTwo();
    this.initChartsThree();
    this.initChartsFour();

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
.statistics{
    height: 100%;
    padding: 25px 32px 24px 25px;
    background-color: #ffffff;
    .statisticsBox{
        @include wh(100%,100%);
        border: solid 1px #e5e6ef;
        @include flex(flex-start,center,column);
        @include backgroundImage('../../../assets/image/commonBg/staticBg.png');
        background-size: 346px 355px;
        background-position: bottom right;
        
        .statisticsTitle{
            width: 100%;
            height: 56px;
            line-height: 56px;
            border-bottom: solid 1px #e5e6ef;
            @include font(14px,#333);
        }
        .statisticsMain{
            flex: 1;
            width: 100%;
            @include flex(flex-start,center,row);
            .mainLeft{
                width: 325px;
                height: 100%;
                @include flex(flex-start,center,column);
                padding-top: 32px;
                .staNum{
                    @include wh(260px,120px);
                    margin-bottom: 58px;
                    // box-shadow: 0px 2px 3px 0px 
                    //     rgba(43, 57, 128, 0.1);
                    // border-radius: 16px;
                    // border: solid 1px #e5e6ef;
                    h2{
                        line-height: 14px;
                        @include font(14px,#3e3e3e);
                        margin-top: 36px;
                        margin-left: 34px;
                    }
                    h3{
                        font-size: 24px;
                        line-height: 18px;
                        color: #ffc57e;
                        margin-top: 16px;
                        margin-left: 34px;
                    }
                }
                .staNum:nth-child(1){
                    @include backgroundImage('../../../assets/image/commonBg/statisBg1.png');
                    h3{
                        color: #ffc57e; 
                    }
                }
                .staNum:nth-child(2){
                    @include backgroundImage('../../../assets/image/commonBg/statisBg2.png');
                    h3{
                        color: #1f84f0; 
                    }
                }
                .staNum:nth-child(3){
                    @include backgroundImage('../../../assets/image/commonBg/statisBg3.png');
                    h3{
                        color: #3ac9c5; 
                    }
                }
                .staNum:nth-child(4){
                    @include backgroundImage('../../../assets/image/commonBg/statisBg4.png');
                    h3{
                        color: #ff8251; 
                    }
                }
                
                
            }
            .mainRight{
                flex: 1;
                height: 100%;
                padding-top: 34px;
                @include flex(flex-start,flex-start);
                flex-wrap: wrap;

                .statisticsPic{
                    @include wh(581px,296px);
                    box-shadow: 0px 2px 3px 0px 
                        rgba(43, 57, 128, 0.1);
                    border-radius: 16px;
                    border: solid 1px #e5e6ef;
                    margin-right: 31px;
                    margin-bottom: 58px;
                    .title{
                        height: 42px;
                        line-height: 42px;
                        text-indent: 23px;
                        @include font(14px,#3e3e3e);
                        border-bottom: 1px solid #e5e6ef;
                    }
                    .main{
                        height: 254px;
                    }

                }
            }
        }

        
    }
}
</style>