// 请求拦截
// 对axios进行封装
import axios from 'axios' //
import router from '../router' //
import { Message } from 'element-ui' // 引入提示对象

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

// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {} // 解决当 data不存在时 then中 读取数据报错
}, function (error) {
// 失败时执行
// 判断状态码
// 先获取 状态码
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
    // token过期,强制切换到登录页
      router.push('/login')
      break
    case 401:
      // token过期
      router.push('/login')
      break
    case 507:message = '服务器数据异常'
      break
    case 404 :
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message: message }) // 状态码提示
})
// 导出
export default axios
