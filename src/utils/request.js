// 对axios进行封装
import axios from 'axios' // 引入第三方包中的axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// ^赋值黑马头条的默认地址

axios.interceptors.request.use(function (config) {
  // interceptors 拦截器
  // config是axios的 所有 配置(默认选项)
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 返回的config  就会作为新的请求选项去发送请求
}, function () {
// 执行请求失败
})
// 导出
export default axios
