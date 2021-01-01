<!--  -->
<template>
<div class='navigation'>
    <ul class="navigationLeft">
        <li v-for="(item,index) in leftNav" :key="index" :class="activeIndex===index? 'active':''" @mouseenter="activeIndex=index"  > 
            <i :class="[item['line'],'iconfont','line']"></i> 
            <i :class="[item['flour'],'iconfont','flour']"></i> 
        </li>
    </ul>

    <div class="navigationRight">
        <div class="rightTitle">{{leftNav[activeIndex]['title']}}</div>
        <ul class="rightMenu">
            <li v-for="(item,index) in leftNav[activeIndex]['menu']" :key="index">
                {{item['name']}}
            </li>
        </ul>
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
    activeIndex : 0,
    leftNav:[
        {
            //线图标
            line : 'iconyonghu1',
            // 面图标
            flour : 'iconyonghu2',  
            // 子集菜单标题
            title : '用户管理',
            menu : [
                {
                    path : '',
                    name : '教师用户'
                },
                {
                    path : '',
                    name : '学生用户'
                },
            ]

        },
        {
            line : 'iconquanxian1',
            flour : 'iconquanxian' ,
            title : '角色管理',
            menu : [
                {
                    path : '',
                    name : '系统管理员'
                },
                {
                    path : '',
                    name : '配置管理员'
                },
            ]

        },
        {
            line : 'iconzhandianpeizhi',
            flour : 'iconjiekoupeizhi',
            title : '资源管理',
            menu : [
                {
                    path : '',
                    name : '院系管理'
                },
                {
                    path : '',
                    name : '双创平台分类'
                },
            ]

        },
        {
            line : 'iconrizhi',
            flour : 'iconrizhi1',
            title : '日志管理',
            menu : []

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
    cutNav(){
        console.log('move')
    },
    

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
.navigation{
    width: 170px;
    height: 100%;
    border-right: 1px solid rgba(238, 238, 238, 1);
    @include flex(just-content);
    .navigationLeft{
        @include wh(50px,100%);
        background: linear-gradient(180deg, rgba(10, 189, 222, 1) 0%, rgba(10, 189, 222, 1) 0%, rgba(13, 181, 228, 1) 79%, rgba(19, 160, 239, 1) 91%, rgba(24, 144, 254, 1) 100%, rgba(24, 144, 254, 1) 100%);
        
        .active{
            background-color: rgba(6, 151, 180, 1);
            .line{
                display: none;
            }
            .flour{
                display: block;
            }

        }
        li{
            @include flex();
            height: 35px;
            i{
                color: #ffffff;
                font-size: 25px;
            }
            .line{
                display: block;
            }
            .flour{
                display: none;
            }

        }
        :hover{

            background-color: rgba(6, 151, 180, 1);
            .line{
                display: none;
            }
            .flour{
                display: block;
            }

        }
    }
    .navigationRight{
        flex: 1;
        height: 100%;
        .rightTitle{
            height: 48px;
            line-height: 48px;
            background-color: #F9F9F9;
        }
        .rightMenu{
            @include wh(100%,calc( 100% - 48px ));

        }
    }
}
</style>