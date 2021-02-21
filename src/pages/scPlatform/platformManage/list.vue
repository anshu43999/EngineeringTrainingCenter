<!-- 平台管理列表 -->
<template>
<div class='plalistWrap'>
    <div class="statisticsOne">
        <div class="statisticsMain">
            <div class="leftBg">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img class="img1" src="../../../assets/image/scPlatform/platformManage/statisticsTop1.png" alt="">
            <div class="rightBg">
                <h2>32</h2>
                <h3>平台总数</h3>
            </div>
        </div>
        <div class="statisticsMain">
            <div class="leftBg">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img class="img2" src="../../../assets/image/scPlatform/platformManage/statisticsTop2.png" alt="">
            <div class="rightBg">
                <h2>32</h2>
                <h3>平台教师总数</h3>
            </div>
        </div>
        <div class="statisticsMain">
            <div class="leftBg">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img class="img3" src="../../../assets/image/scPlatform/platformManage/statisticsTop3.png" alt="">
            <div class="rightBg">
                <h2>32</h2>
                <h3>平台教室总数</h3>
            </div>
        </div>
    </div>

    <div class="filtrate statisticsOne">

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

        <el-button style="margin-left:45px" size='mini' type="primary">
            <i style="font-size:11px" class="iconfont iconsousuo"></i>
            查询</el-button>

        <el-button size='mini'>
            <i style="font-size:11px" class="iconfont iconcs-fh-1 "></i>
            重置</el-button>
    </div>

    <div class="listMain">
        <div class="listMainTop">
            <el-button style="margin-left:45px" size='mini' type="primary" @click="addPlatform"> <i style="font-size:13px" class="iconfont icondaoru"></i> 新增平台</el-button>
            <el-button size='mini' style="margin-left:30px"> <i style="font-size:13px" class="iconfont icondaochu"></i> 导出</el-button>
        </div>


        <div class="listTable">
            <el-table
                :data="tableData"
                style="width: 1644px"
                :header-cell-style="{background:'#FFF9ED'}"
                :row-class-name="tableRowClassName"
                >
                <el-table-column
                fixed
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                    prop="xh"
                    label="序号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="father"
                    label="所属学院"
                   >
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="平台名称"
                    >
                </el-table-column>
                <el-table-column
                    prop="principal"
                    label="负责人"
                   >
                </el-table-column>
                <el-table-column
                    prop="tel"
                    label="负责人联系电话"
                    >
                </el-table-column>
                <el-table-column
                    prop="roomid"
                    label="房间号"
                    >
                </el-table-column>

                <el-table-column
                    prop="roomname"
                    label="房间名称"
                    >
                </el-table-column>

                <el-table-column
                    prop="roomYWname"
                    label="房间英文名称"
                    >
                </el-table-column>
                <el-table-column
                    prop="roomname"
                    label="房间名称"
                    >
                </el-table-column>



                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small"> 
                    <svg class="icon" aria-hidden="true" style="width:13px;height:12px">
                        <use xlink:href="#iconguanli"></use>
                    </svg>
                     管理
                    </el-button>
                </template>
                </el-table-column>
            </el-table>

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
    tableData: [
        {
            xh: '1',
            father: '所属学院1',
            name : '平台名称',
            principal: '负责人',
            tel: '负责人联系电话',
            roomid: '房间号',
            roomname: '房间名称',
            roomYWname: '房间英文名称',
        },
        {
            xh: '1',
            father: '所属学院1',
            name : '平台名称',
            principal: '负责人',
            tel: '负责人联系电话',
            roomid: '房间号',
            roomname: '房间名称',
            roomYWname: '房间英文名称',
        },
        {
            xh: '1',
            father: '所属学院1',
            name : '平台名称',
            principal: '负责人',
            tel: '负责人联系电话',
            roomid: '房间号',
            roomname: '房间名称',
            roomYWname: '房间英文名称',
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
    addPlatform(){
        this.$router.push({path : 'platformMange/addPlatform'})
    },
    handleClick(){
        console.log(1);
        this.$router.push({path  : 'platformMange/platformDetail'})
    },
    tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 ) {
          return '';
        } 
        return 'warning-row';
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
.plalistWrap{
    ::v-deep .el-table .warning-row {
        background: #FAFDFF;
    }

    ::v-deep .el-table .success-row {
        background: #ffffff;
    }
    height: 100%;
    padding-left: 25px;
    padding-right: 32px;
    background-color: #F1F2F6;
    overflow: hidden;
    .statisticsOne{
        height: 86px;
        background-color: #ffffff;
        margin-top: 19px;
        @include flex(flex-start);
        border: solid 1px #e5e6ef;
	    opacity: 0.8;
        .statisticsMain{
            @include flex(flex-start);
            margin-left: 33px;
            margin-right: 85px;
            .leftBg{
                width: 4px;
                span{
                    display: block;
                    width: 4px;
                    height: 16px;
                    &:nth-child(1){
                        background-color: #5aa5f8;
                    }
                    &:nth-child(2){
                        background-color: #4ccfc9;
                    }
                    &:nth-child(3){
                        background-color: #f66568;
                    }
                    &:nth-child(4){
                        background-color: #ffbf3f;
                    }
                }

            }
            img{
                margin: 0 9px 0 15px;
            }
            .img1{
                @include wh(58px,66px);
            }
            .img2{
                @include wh(58px,47px);
            }
            .img3{
                @include wh(67px,51px);
            }
            .rightBg{
                h2{
                    @include font(24px,#636363)
                }
                h3{
                    @include font(16px,#888888);
                }
            }
        }

    }
    .filtrate{
        height: 80px;
        margin-top: 19px;
        .el-input{
            margin-left: 25px;
        }
        .el-select{
            margin-left: 55px;
        }
    }
    .listMain{
        overflow: hidden;
        height: 602px;
        background-color: #FCFCFD;
        margin-top: 19px;
        .listMainTop{
            padding-left: 19px;
            height: 78px;
            @include flex(flex-start);
        }
        .listTable{
            margin: 0 24px;
            border: solid 1px #e5e6ef;
            // overflow: hidden;
            ::v-deep .el-table__header-wrapper{
                height: 50px;
            }
            ::v-deep .el-table__header{
                height: 50px;
                thead{
                    tr{
                        height: 50px;
                        background-color: #fff9ed;
                    }
                }
            }

        }
        .block{
            @include flex();
            margin-top: 26px;
        }


    }

}



</style>
