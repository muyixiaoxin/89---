import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui' // 引入包
import 'element-ui/lib/theme-chalk/index.css'// 引入elementUI样式
import './styles/index.less'// 引入初始化样式(老师项目中 拷贝的)
import axios from 'axios'// 引入axios

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// ^赋值黑马头条的默认地址
Vue.prototype.$axios = axios // 赋值给全局对象..赋值 完后可以在 任意位置通过this.$axios来获取 axios对象
Vue.config.productionTip = false
Vue.use(ElementUI)// 全局注册

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
