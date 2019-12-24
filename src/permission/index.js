import router from '../router'
// 权限拦截 导航守卫
// 全局前置守卫
router.beforeEach(function (to, from, next) {
//  拦截谁  判断拦截地址
  if (to.path !== '/login') {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
