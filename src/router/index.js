import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/common/Layout'


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};



Vue.use(Router);

const routes = [ 
    {
        path: '/',
        redirect: '/index',
        name: '',
    },
    // 平台开始
    {
        path: '/entrance',
        name: '首页',
        component: Layout,
        children:[
            {
                path : 'scPlatform',
                name : '',
                component : ()=>import('../pages/scPlatform/index')

                
            }
        ]
    },
]


const router = new Router({routes});


export default router;