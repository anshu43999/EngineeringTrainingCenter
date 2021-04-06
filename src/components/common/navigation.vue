<!--  -->
<template>
  <div class='navigation'>
    <ul class="navigationLeft">
      <li v-for="(item,index) in leftNav" :key="index" :class="activeIndex===index? 'active':''"
          @mouseenter="activeIndex=index">
        <i :class="[item['line'],'iconfont','line']"></i>
        <i :class="[item['flour'],'iconfont','flour']"></i>
      </li>
    </ul>

    <div class="navigationRight">
      <div class="rightTitle">{{ leftNav[activeIndex]['title'] }}</div>
      <ul class="rightMenu">
        <li :class="secondIndex===index? 'active':''" v-for="(item,index) in leftNav[activeIndex]['menu']" :key="index"
            @click="skip(item.path)">
          {{ item['name'] }}
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
      // 一级active
      activeIndex: 0,
      // 二级active
      secondIndex: 0,
      leftNav: [
        {
          //线图标
          line: 'iconshouye1',
          // 面图标
          flour: 'iconshouye-shi',
          // 子集菜单标题
          title: '首页',
          name:'index',
          menu: [
            {
              path: '/entrance/scPlatform/index',
              name: '首页',
              parent:'index'
            },
          ]
        },
        {
          line: 'iconjiaoshihao',
          flour: 'iconjiaoshiguanli',
          title: '平台管理',
          name:'platformMange',
          menu: [
            {
              path: '/entrance/scPlatform/platformMange',
              name: '平台列表',
              parent: 'platformMange'
            },
          ]
        },
/*        {
          line: 'iconkechengguanli',
          flour: 'iconkechengguanli1',
          title: '课程管理',
          name:'courseManage',
          menu: [
            {
              path: '/entrance/scPlatform/courseManage',
              name: '课程管理',
              parent: 'courseManage'
            },
          ]
        },
        {
          line: 'iconfeiji',
          flour: 'iconfeiji1',
          title: '学期学年计划',
          name:'semesterPlanManage',
          menu: [
            {
              path: '/entrance/scPlatform/semesterPlanManage',
              name: '计划列表',
              parent: 'semesterPlanManage'
            },
          ]
        },*/
        {
          line: 'iconzhanshi',
          flour: 'iconzhanshi1',
          title: '展示管理',
          name:'display',
          menu: [
            {
              path: '',
              name: '展示管理',
              parent: 'semesterPlanManage'
            },
          ]
        },
        {
          line: 'iconyonghu',
          flour: 'iconyonghu1',
          title: '用户管理',
          name:'user',
          menu: [
            {
              path: '',
              name: '用户管理',
              parent: ''
            },
          ]
        },
        {
          line: 'icontubiao_peizhi',
          flour: 'iconpeizhi',
          title: '字典管理',
          name:'dictionary',
          menu: [
            {
              path: '',
              name: '字典管理',
              parent: 'dictionary'
            },
          ]
        },
        {
          line: 'iconquanxian1',
          flour: 'iconquanxian',
          title: '权限管理',
          name:'authority',
          menu: [
            {
              path: '',
              name: '权限管理',
              parent: 'authority'
            },
          ]
        },
      ]
    };
  },
//监听属性 类似于data概念
  computed: {

  },
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    setActiveNav(){
      let path=this.$route.path.split('/').slice(0,4).join('/');
      this.leftNav.forEach((value,index) => {
        value.menu.forEach((v,i)=>{
          if (v.path===path){
            this.secondIndex=i;
            this.activeIndex=index;
          }
        })
      });
    },
    skip(path) {
      console.log(path);
      this.$router.push({path: path})
    }
  },
//生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
//生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.setActiveNav();
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

.navigation {
  width: 170px;
  height: 100%;
  border-right: 1px solid rgba(238, 238, 238, 1);
  @include flex(just-content);

  .navigationLeft {
    padding-top: 67px;
    @include wh(50px, 100%);
    background: linear-gradient(180deg, rgba(10, 189, 222, 1) 0%, rgba(10, 189, 222, 1) 0%, rgba(13, 181, 228, 1) 79%, rgba(19, 160, 239, 1) 91%, rgba(24, 144, 254, 1) 100%, rgba(24, 144, 254, 1) 100%);

    li {
      margin-bottom: 21px;

      .iconjiaoshihao, .iconkechengguanli, .iconzhanshi, .iconzhanshi1 {
        font-size: 20px;
      }

      .iconfeiji, .iconpeizhi{
        font-size: 28px;
      }
    }

    .active {
      background-color: rgba(6, 151, 180, 1);

      .line {
        display: none;
      }

      .flour {
        display: block;
      }
    }

    li {
      @include flex();
      height: 35px;

      i {
        color: #ffffff;
        font-size: 25px;
      }

      .line {
        display: block;
      }

      .flour {
        display: none;
      }
    }

    :hover {
      background-color: rgba(6, 151, 180, 1);

      .line {
        display: none;
      }

      .flour {
        display: block;
      }
    }
  }

  .navigationRight {
    flex: 1;
    height: 100%;

    .rightTitle {
      height: 48px;
      line-height: 48px;
      background-color: #F9F9F9;
      @include font(14px, #a6a6a6, center)
    }

    .rightMenu {
      @include wh(100%, calc(100% - 48px));
      padding-top: 32px;
      @include font(14px, #409eff, center);

      li {
        height: 36px;
        line-height: 36px;
        cursor: pointer;
        border-right: 2px solid #ffffff;
      }

      .active {
        background-color: #ECF5FF;
        border-right: 2px solid #409eff;
      }
    }
  }
}
</style>
