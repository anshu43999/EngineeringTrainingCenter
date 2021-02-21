<!--  -->
<template>
  <div class='scPlatformIndex'>

    <div class="statisticsOne">
      <h2>双创平台整体统计</h2>

      <div class="main">
        <div class="son">
          <p class="name">平台总数</p>
          <p class="number">32</p>
          <div class="bottomBg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <!-- <div class="amplification">
              <i></i>
              <span>+3</span>
          </div> -->
        </div>

        <div class="son">
          <p class="name">平台课程总数</p>
          <p class="number">78</p>
          <div class="bottomBg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="son">
          <p class="name">平台学期计划总数</p>
          <div class="number"><span>2</span>/3</div>
          <div class="bottomBg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="son">
          <p class="name">平台教室总数</p>
          <div class="number"><span>41</span>/42</div>
          <div class="bottomBg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>


    </div>

    <div class="statisticsOne">
      <h2>双创平台整体统计</h2>

      <div class="main">
        <div class="son">
          <p class="name">平台累计报课人次</p>
          <p class="number">9332</p>
          <div class="bottomBg">
            <span style="background-color:#51c1f1"></span>
            <span style="background-color:#7cd67f"></span>
            <span style="background-color:#4ccfc9"></span>
            <span style="background-color:#5aa5f8"></span>
          </div>
          <div class="amplification">
            <div>
              <i class="iconfont iconshangsheng-copy rise"></i>
            </div>
              <span>+3</span>
          </div>
        </div>

        <div class="son">
          <p class="name">荣誉累计</p>
          <p class="number">123</p>
          <div class="bottomBg">
            <span style="background-color:#51c1f1"></span>
            <span style="background-color:#7cd67f"></span>
            <span style="background-color:#4ccfc9"></span>
            <span style="background-color:#5aa5f8"></span>
          </div>
          <div class="amplification">
            <div>
              <i class="iconfont iconshangsheng-copy rise"></i>
            </div>
              <span>+3</span>
          </div>
        </div>

        <div class="son">
          <p class="name">平台教师总数</p>
          <p class="number">82</p>
          <div class="bottomBg">
            <span style="background-color:#51c1f1"></span>
            <span style="background-color:#7cd67f"></span>
            <span style="background-color:#4ccfc9"></span>
            <span style="background-color:#5aa5f8"></span>
          </div>
          <div class="amplification">
            <div>
              <i class="iconfont iconshangsheng-copy rise"></i>
            </div>
              <span>+3</span>
          </div>
        </div>

        <div class="son">
          <p class="name">平台设备总数</p>
          <p class="number">82</p>
          <div class="bottomBg">
            <span style="background-color:#51c1f1"></span>
            <span style="background-color:#7cd67f"></span>
            <span style="background-color:#4ccfc9"></span>
            <span style="background-color:#5aa5f8"></span>
          </div>
          <div class="amplification">
            <div>
              <i class="iconfont iconshangsheng decline"></i>
            </div>
              <span>+3</span>
          </div>
        </div>

      </div>


    </div>

    <div class="statisticsOne statisticsTwo">
      <h2>双创平台学期计划统计 <span>（2021年第一学期学期计划）</span></h2>

      <div class="main">
        <div class="son">
          <p class="name">平台累计报课人次</p>
          <p class="number">9332</p>
          <div class="bottomBg">
            <span style="background-color:#51c1f1"></span>
            <span style="background-color:#926ff3"></span>
            <span style="background-color:#ffcb5c"></span>
            <span style="background-color:#5aa5f8"></span>
          </div>
          <!-- <div class="amplification">
              <i></i>
              <span>+3</span>
          </div> -->
        </div>

        <div class="son">
          <p class="name">荣誉累计</p>
          <p class="number">123</p>
          <div class="bottomBg">
            <span style="background-color:#51c1f1"></span>
            <span style="background-color:#926ff3"></span>
            <span style="background-color:#ffcb5c"></span>
            <span style="background-color:#5aa5f8"></span>
          </div>
        </div>

        <div class="comparison">
          <p>本学期各平台报课人数对比</p>
          <div id="histogram"></div>
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
      histogram: {
        "无人系统创新创业实践平台": 270,
        "智能机器人创新平台(含机器人实验班)": 210,
        "金属橡胶成型及应用创新创业工作室": 220,
        "绿色化工与生物医药创新实践平台": 180,
        "Chem-E Car创新实践平台": 180,
        "智慧光机电双创实践平台": 260
      },
      scale:1,
      fontSize:16,
      bottom: "10%",
    };
  },
//监听属性 类似于data概念
  computed: {},
//监控data中的数据变化
  watch: {
    bottom(val, oldVal) {
      if (val !== oldVal) {
        this.drawHistogram();
      }
    },
    fontSize(val, oldVal) {
      if (val !== oldVal) {
        this.drawHistogram();
      }
    }
  },
//方法集合
  methods: {
    drawHistogram() {
      let that=this;
      let container = document.getElementById("histogram");
       let myChart = this.$echarts.init(container);
       let x = Object.keys(this.histogram),
           y = Object.values(this.histogram);
      let max = 15;
       myChart.setOption({
         grid: {
           left: "8%",
           right: "0",
           bottom: that.bottom,
           top: "12%",
         },
         tooltip: {
           show: true,
           trigger: 'item',
           position: 'right',
           formatter: params => {
             let name = params.name;
             if (params.name.length > 15) {
               name = params.name.slice(0, 15) + "<br>" + params.name.slice(15);
             }
             return name + "：" + params.data;
           }
         },
         xAxis: {
           type: "category",
           data: x,
           offset: 8 * this.scale,
           axisLine: {
             show: true,
             lineStyle: {
               color: "#7a7a7a",
             },
           },
           axisTick: {
             show: false,
           },
           axisLabel: {
             fontSize: this.fontSize * this.scale,
             lineHeight: 18 * this.scale,
             formatter: function (params) {
               let p = params;
               params = params.slice(0, 12);
               let cw = container.offsetWidth * .55;
               let dataLength = x.length > 5 ? 5 : x.length;
               // 每个柱子下的公司名称所占像素
               let companyNameLength = cw / dataLength;
               // 能放几个字
               let wordLength = parseInt(companyNameLength / that.fontSize);
               let newParamsName = "";
               let paramsNameNumber = params.length;
               let provideNumber = wordLength;  //一行显示几个字
               let rowNumber = Math.ceil(paramsNameNumber / provideNumber);
               let height = rowNumber * 5 + 10;
               max = height > max ? height : max;
               that.bottom = max+10 + "%";
               if (paramsNameNumber > provideNumber) {
                 for (let p = 0; p < rowNumber; p++) {
                   let tempStr = "";
                   let start = p * provideNumber;
                   let end = start + provideNumber;
                   if (p === rowNumber - 1) {
                     tempStr = params.substring(start, paramsNameNumber);
                   } else {
                     tempStr = params.substring(start, end) + "\n";
                   }
                   newParamsName += tempStr;
                 }
               } else {
                 newParamsName = params;
               }
               if (rowNumber <= 1) {
                 return p;
               }
               if (newParamsName.length >= 12) {
                 return newParamsName + "..."
               }
               return newParamsName
             },
             color:'#a9a9a9'
           },
         },
         yAxis: {
           type: "value",
           axisLine: {
             show: false,
           },
           splitLine: {
             show: true,
             lineStyle: {
               color:'#ddd'
             },
           },
           axisTick: {
             show: false,
           },
           axisLabel: {
             fontSize: this.fontSize * this.scale,
             color:'#a9a9a9'
           },
         },
         series: {
           data: y,
           type:'bar',
           barWidth:26,
           itemStyle:{
             color:'#5aa5f8'
           }
         }
       })
    },
    init() {
      let html = document.querySelector("html");
      let fontSize = window.getComputedStyle(html).fontSize;
      this.scale = parseInt(fontSize) / 20;
      this.drawHistogram();
    },
  },
//生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
//生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.init();
  },
  beforeCreate() {
  }, //生命周期 - 创建之前
  beforeMount() {
  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {
  }, //生命周期 - 更新之后
  beforeDestroy() {
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
//@import url(); 引入公共css类
<style lang='scss' scoped>
@import "../../assets/style/mixin";

.scPlatformIndex {
  @include wh(100%, 100%);
  overflow: hidden;
  background-color: #F1F2F6;
  // background-image: url(../../assets/image/scPlatform/index/indexBg.png);
  // background-position: 100% 65%;
  padding: 0 40px;

  .statisticsOne {
    @include flex(flex-start, center, column);
    height: 211px;
    background-color: #ffffff;
    box-shadow: 0px 1px 4px 0px rgba(43, 57, 128, 0.19);
    border-radius: 16px;
    border: solid 1px #e4e5e7;
    opacity: 0.8;
    margin-top: 32px;

    h2 {
      width: 100%;
      padding-left: 22px;
      height: 44px;
      line-height: 44px;
      @include font(14px, #717171, 3px);
      border: solid 1px #e4e5e7;
      opacity: 0.9;
    }

    .main {
      width: 100%;
      flex: 1;
      @include flex(flex-start);


      .son {
        @include wh(236px, 103px);
        margin-left: 80px;
        margin-right: 67px;
        position: relative;
        .amplification{
          position: absolute;
          top: 0;
          right: 0;
          div{
            color: #939393;
            .rise{
              color: #1FDA98;
            }
            .decline{
              color: #FF643A;
            }
          }
        }

        .name {
          @include font(16px, #888888)
        }

        .number {
          @include font(48px, #636363, 6px);
          margin-top: 20px;

          span {
            color: #5aa5f8
          }
        }

        .bottomBg {
          @include flex();

          span {
            display: block;
            @include wh(59px, 8px);

            &:nth-child(1) {
              background-color: #ffbf3f;
            }

            &:nth-child(2) {
              background-color: #f66568;
            }

            &:nth-child(3) {
              background-color: #4ccfc9;
            }

            &:nth-child(4) {
              background-color: #5aa5f8;
            }
          }


        }

      }

      .comparison{
        @include wh(724px,calc(100% - 12px));
        margin-top: 12px;
        @include font(14px,#727272);

        #histogram{
          @include wh(100%,calc(100% - 36px));
        }
      }
    }
  }

  .statisticsTwo {
    height: 302px;

    h2 {
      span {
        color: #5aa5f8;
      }
    }
  }
}

</style>
