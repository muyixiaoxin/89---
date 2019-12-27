import LayoutAside from './home/layout-aside'
import LayoutHeader from './home/layout-header'
import BreadCrumb from './common/bread-crumb'// 引入自己的面包屑
export default {
  install (Vue) {
    Vue.component('layout-aside', LayoutAside)// 全局注册
    Vue.component('layout-header', LayoutHeader)
    Vue.component('bread-crumb', BreadCrumb)// 注册面包屑组件
  }
}
