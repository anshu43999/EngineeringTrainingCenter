<!-- 头部 -->
<template>
<div class='header'>
    <div class="header-left">
<!--        <i class="iconfont iconhuanbaozhiku"></i>-->
        <img src="../../assets/image/common/logo.png">
        <span>工程训练中心信息化平台</span>
    </div>

<!--    <ul class="header-center">-->
<!--        <li>系统管理</li>-->
<!--        <li>中心管理</li>-->
<!--        <li>资产管理</li>-->
<!--        <li>实验室管理</li>-->
<!--        <li>教学管理</li>-->
<!--        <li>门禁管理</li>-->
<!--        <li>双创平台</li>-->
<!--    </ul>-->

    <div class="header-right">
        <div class="user-name" @click="showInfo">
            <i class="iconfont iconuser"></i>
            <span>admin</span>
        </div>
        <b></b>
        <i class="iconfont iconyouxiang msg"></i>
        <b></b>
        <i class="iconfont iconguanji edit" @click="edit"></i>
    </div>

    <!-- 用户信息 -->
    <transition name="slide-fade">
        <userInfo v-show="userInfo" @userInfoClose='showInfo' @psdClose='psdClose'></userInfo>
    </transition>
    <!-- 密码修改  -->
    <el-dialog title="密码修改" :visible.sync="dialogFormVisible" width="30%" style="margin:0">
        <el-form :model="form">
            <el-form-item label="原密码" :label-width="formLabelWidth">
            <el-input v-model="form.oldpassworld" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" :label-width="formLabelWidth">
            <el-input v-model="form.newpassworld" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" :label-width="formLabelWidth">
            <el-input v-model="form.newpassworld" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import userInfo from './userInfo'
export default {
//import引入的组件需要注入到对象中才能使用
name : "headerTop",
components: {
    userInfo
},
data() {
//这里存放数据
return {
    userInfo : false,
    dialogFormVisible: false,
    formLabelWidth: '120px',
    form: {
        oldpassworld: '',
        newpassworld:'',
    },
    

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    edit(){
        const h = this.$createElement;
        this.$msgbox({
          title: '退出登录',
          message: h('p', null, [
            h('span', null, '您确定退出登录吗？ '),
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
                console.log('edit');
                this.$router.push({path : '/login'})
                done();
            } else {
              done();
            }
          }
        }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });          
        });
    },
    showInfo(){
        this.userInfo = !this.userInfo
    },
    psdClose(){
        this.userInfo = false;
        this.dialogFormVisible = true
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
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "../../assets/style/mixin";
.header{
    position: relative;
    @include flex(space-between);
    @include wh(100%,50px);
    //background-color: rgba(70, 76, 91, 1);
  background-color: #FAFAFC;
  box-shadow: 0px 1px 4px 0px 
		rgba(43, 57, 128, 0.19);
    .header-left{
        @include wh(316px,50px);
        @include flex();
        i{
            @include font(20px,#ffffff);
            margin-right: 16px;
        }
      img{
        //@include wh(36px,35px);
        margin-right: 18px;
      }
        span{
            @include font(20px,#1c6dd6,left,2px);
          font-weight: bold;
        }
    }
    .header-center{
        @include flex();
        @include font(14px,#ffffff);
        li{
            cursor: pointer;
        }

    }
    .header-right{
        @include wh(307px,50px);
        @include flex();
        .user-name{
            flex: 1;
            color: #999999;
            i{
                margin-right:21px;
                color: #999999;
            }
        }
        i{
            @include font(20px,#ffffff);
            cursor: pointer;
        }
        .msg{
            margin: 0 20px;
          color: #7ED3FA;
        }
        .edit{
            margin: 0 41px 0 17px;
          color: #FFAD1F;
        }
        b{
            @include wh(1px,24px);
            background-color: #77a893;
        }
    }


    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(-20px);
        opacity: 0;
    }



    .el-dialog__wrapper{
        @include flex();
        ::v-deep e.el-dialog{
            margin: 0 !important;
        }
    }

    ::v-deep .el-input{
        @include wh(287px,40px)


    }




}

</style>