import Vue from 'vue';
import App from './App.vue';
// 路由
import router from './router'
//引入全局样式
import './assets/css/global.css'

//引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入nprogress对应的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false;
import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = ' https://lianghj.top:8888/api/private/v1/'
// 在request拦截器中，展示进度条NProgress.start()
// 配置axios的请求拦截器添加token
axios.interceptors.request.use(config => {
    NProgress.start()
    config.headers.Authorization = window.sessionStorage.getItem('token')
    // 最后需返回config
    return config
})

// 在response中隐藏进度条
axios.interceptors.response.use(config => {
    NProgress.done()
    return config
})


//定义一个全局的时间过滤器
// Vue.filter('dateFormat', function (originVal) {
//     const dt = new Date(originVal)

//     const y = dt.getFullYear()
//     const m = (dt.getMonth() + 1 + '').padStart(2, '0')
//     const d = (dt.getDate() + '').padStart(2, '0')

//     const hh = (dt.getHours() + '').padStart(2, '0')
//     const mm = (dt.getMinutes() + '').padStart(2, '0')
//     const ss = (dt.getSeconds() + '').padStart(2, '0')

//     return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
// })






Vue.prototype.$http = axios
// 注册tree插件
new Vue({
    router,
    el: "#root",
    render: h => h(App),
    // beforeCreate() {
    //     Vue.prototype.$bus = this //安装全局事件总线
    // },
})