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
                name : '首页',
                component : ()=>import('../pages/scPlatform/index')
            },
            {
                path : 'platformMange',
                name : '平台管理/平台列表',
                component : ()=>import('../pages/scPlatform/platformManage/list')
            },
            {
                path : 'platformMange/addPlatform',
                name : '平台管理/平台列表/新增平台',
                component : ()=>import('../pages/scPlatform/platformManage/addPlatform')
            },

            {
                path : 'platformMange/platformDetail',
                name : '平台管理/平台列表/平台详情',
                component : ()=>import('../pages/scPlatform/platformManage/platformDetail')
            },
            {
                path: 'platformMange/platformDetail/basicPlatformInformation',
                name:'平台管理/平台列表/平台详情/平台信息管理',
                component : ()=>import('../pages/scPlatform/platformManage/basicPlatformInformation')
            },
            {
                path: 'platformMange/platformDetail/basicPlatformInformation/platformEdit',
                name:'平台管理/平台列表/平台详情/平台信息管理/平台信息编辑',
                component : ()=>import('../pages/scPlatform/platformManage/platformEdit')
            },
            {
                path : 'platformMange/platformDetail/teatherTeam',
                name : '平台管理/平台列表/平台详情/平台指导教师团队管理',
                component : ()=>import('../pages/scPlatform/platformManage/teatherTeam')
            },
            {
                path: 'platformMange/platformDetail/termPlanManagement',
                name:'平台管理/平台列表/平台详情/平台学期计划管理',
                component : ()=>import('../pages/scPlatform/platformManage/termPlanManagement')
            },
            {
                path: 'platformMange/platformDetail/termPlanManagement/newSemesterPlan',
                name:'平台管理/平台列表/平台详情/平台学期计划管理/新增平台学期计划',
                component : ()=>import('../pages/scPlatform/platformManage/newSemesterPlan')
            },
            {
                path: 'platformMange/platformDetail/termPlanManagement/semesterPlanDetails',
                name:'平台管理/平台列表/平台详情/平台学期计划管理/学期计划详情',
                component : ()=>import('../pages/scPlatform/platformManage/semesterPlanDetails')
            },
            {
                path: 'platformMange/platformDetail/honorManagement',
                name:'平台管理/平台列表/平台详情/平台荣誉管理',
                component : ()=>import('../pages/scPlatform/platformManage/honorManagement')
            },
            

            {
                path: 'platformMange/platformDetail/equipment',
                name:'平台管理/平台列表/平台详情/平台设备管理',
                component : ()=>import('../pages/scPlatform/platformManage/equipment')
            },
            // dataStatistics
            {
                path: 'platformMange/platformDetail/dataStatistics',
                name:'平台管理/平台列表/平台详情/平台数据统计',
                component : ()=>import('../pages/scPlatform/platformManage/dataStatistics')
            },


            {
                path : 'platformMange/platformDetail/platformEdit',
                name : '平台管理/平台列表/平台信息管理/平台信息编辑',
                component : ()=>import('../pages/scPlatform/platformManage/platformEdit')
            },
            
            
            
            
           

            
        ]
    },
]


const router = new Router({routes});


export default router;
