import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/common/Layout'
import Login from '../pages/scPlatform/login'

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};



Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/login',
        name: '',
    },
    {
        path: '/login',
        name: 'login',
        component  : Login
    },
    // 平台开始
    {
        path: '/entrance/scPlatform',
        name: '首页',
        component: Layout,
        children:[
            {
                path : 'index',
                name : '',
                component : ()=>import('../pages/scPlatform/index')
            },
            {
                path : 'platformMange',
                name : '平台列表',
                component : ()=>import('../pages/scPlatform/platformManage/list')
            },
            {
                path : 'platformMange/addPlatform',
                name : '平台列表/新增平台',
                component : ()=>import('../pages/scPlatform/platformManage/addPlatform')
            },

            {
                path : 'platformMange/teatherTeam',
                name : '平台列表/平台指导教师团队管理',
                component : ()=>import('../pages/scPlatform/platformManage/teatherTeam')
            },
            {
                path: 'platformMange/basicPlatformInformation',
                name:'平台列表/平台信息管理',
                component : ()=>import('../pages/scPlatform/platformManage/basicPlatformInformation')
            },
            {
                path: 'platformMange/termPlanManagement',
                name:'平台列表/大数据与人工智能创意设计双创平台/平台学期计划管理',
                component : ()=>import('../pages/scPlatform/platformManage/termPlanManagement')
            },
            {
                path: 'platformMange/termPlanManagement/newSemesterPlan',
                name:'平台列表/大数据与人工智能创意设计双创平台/平台学期计划管理/新增平台学期计划',
                component : ()=>import('../pages/scPlatform/platformManage/newSemesterPlan')
            },
            {
                path: 'platformMange/termPlanManagement/semesterPlanDetails',
                name:'平台列表/大数据与人工智能创意设计双创平台/平台学期计划管理/学期计划详情',
                component : ()=>import('../pages/scPlatform/platformManage/semesterPlanDetails')
            },
        ]
    },
]


const router = new Router({routes});


export default router;
