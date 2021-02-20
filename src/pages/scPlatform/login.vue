<!-- login -->
<template>
<div class='login'>
    <div class="loginTitle">
        <img src="../../assets/image/common/loginLogo.png" alt="">
        <div class="bigTitle">中北大学工程训练中心双创平台信息管理系统</div>
    </div>

    <div class="loginMain">
        <h2>用户、学期管理系统</h2>
        <h3>欢迎登录</h3>

        <div class="inputClass">
            <div class="inputClassLeft">
                <i class="iconfont "></i>
            </div>
            <div class="inputClassRight">
                <input type="text" placeholder="请输入用户名">
            </div>
        </div>


        <div class="inputClass">
            <div class="inputClassLeft">
                <i class="iconfont "></i>
            </div>
            <div class="inputClassRight">
                <input type="password" placeholder="请输入密码" @keyup.enter.native="submit">
            </div>
        </div>

        <div class="submit" @click="submit">登录</div>



    </div>




    <div class="footer">
        <p>Copyright 2013-2021 晋ICP备13006051号-2 版权所有山西优逸客科技有限公司</p>
        <p>Copyright 2015-2021 晋ICP备13006051号-2 版权所有山西硬汉网络科技有限公司</p>
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
    submit(){
        this.$router.push({path : '/entrance'});
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
.login{
    @include wh(100%,100vh);
    @include backgroundImage('../../assets/image/common/login.png');
    overflow: hidden;
    .loginTitle{
        @include flex(flex-start);
        margin-left: 60px;
        margin-top: 41px;
        img{
            @include wh(89px,89px);
            margin-right: 25px;
        }
        .bigTitle{
            line-height: 89px;
            @include font(30px,#2C2C2C,left,3px)
        }
    }
    .loginMain{
        position: absolute;
        top: 247px;
        right: 397px;
        z-index: 99;
        background-image: linear-gradient(0deg, 
		#f6f9fc 0%, 
		#ffffff 50%, 
		#f2f6fa 100%);
	    border: solid 1px #dddddd;
        @include wh(440px,auto);
        padding: 0 46px;
        h2{
            @include font(24px,#1c6dd6,5px);
            margin-top: 52px;
        }
        h3{
            @include font(14px,#777777,3px);
            margin-top: 30px;
        }
        .inputClass{
            @include flex();
            margin-top: 32px;
            width: 346px;
            height: 46px;
            background-color: #ffffff;
            border: solid 1px #dddddd;
            .inputClassRight{
                input{
                    height: 15px;
                    font-size: 15px;
                }
            }

        }
        .submit{
            margin-top: 63px;
            background-color: #1c6dd6;
            @include wh(100%,46px);
            line-height: 46px;
            cursor: pointer;
            @include font(18px,#ffffff,center,18px);
            margin-bottom: 50px;

           
        }
        .submit:hover{
               opacity: .9;
               transform: scale(.98);
        }
        
    }


    .footer{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 30px;
        @include flex(center,center,column);
        p{
            color: #f8f8f8;
            @include font(12px,#f8f8f8);
            margin-bottom: 18px;
        }

    }
}




</style>