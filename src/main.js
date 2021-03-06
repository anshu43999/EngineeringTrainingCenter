import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../utils/rem'
import '../src/assets/style/base.scss'
import '../src/assets/font/iconfont.css'
import '../src/assets/font1/iconfont.css'
import '../src/assets/font/iconfont.js';
import '../src/assets/font1/iconfont.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts';

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
