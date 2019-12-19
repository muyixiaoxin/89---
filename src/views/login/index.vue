<template>
  <div class="login">
    <!-- 放置卡片组件 -->
    <el-card class="card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 登录 表单  表单容器 -->
      <el-form style="margin-top:30px" :model="loginForm" :rules="loginRules">
        <!-- model前要加冒号.不加的话会默认值为字符串 -->
        <el-form-item prop="mobele">
          <el-input placeholder="请输入手机号" v-model="loginForm.mobele"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="请输入验证码" style="width:65%" v-model="loginForm.code"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">
            我已阅读并同意
            <a href="#">用户协议和隐私条款</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
            <!-- 注册点击事件 -->
          <el-button type="primary" @click="submitLogin" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  //  定义一个表单数据对象.data里面 的参数是自定义 ,对应login输入框中的那几个数据
  data () {
    return {
      loginForm: {
        // 将这个对象通过:model属性绑定到使用的模块中;并通过:prop属性来指定这个对象中的属性分别用的地方
        // 用v-model来双向绑定使用的标签
        mobele: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选
      },
      loginRules: {
        // 验证登录表单的规则.通过rules属性绑定到使用的模块中
        // key(需要校验的字段名):value(数组)
        mobele: [
          { required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }
        ], // required为ture;为必填项
        code: [{ required: true, message: '请输ru您的验证码' }, {
          pattern: /^\d{6}$/, message: '验证码格式不正确'
        }],
        check: [{
          validator: function (rule, value, callback) {
            //  rule 当前的规则.没啥用
            //  value指的是我们要校验的值
            if (value) {
              // 校验通过
              callback()
            } else {
              // 校验不通过
              callback(new Error('您必须无条件同意被我们坑'))
            }
          }
        }]
      }
    }
  },
  methods: {
    submitLogin () {
      // el-form实例
      this.$refs.myForm.validate(function (isok) {
        if (isok) {
          // 校验 成功,
          console.log('校验成功,请求后台中...')
        }
      })
    }
  }
}

</script>

<style lang='less' scoped >
.login {
  background-image: url(../../assets/img/login_bg.jpg);
  background-size: cover; // cover:把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。背景图像的某些部分也许无法显示在背景定位区域中。
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 440px;
    height: 350px;
    .title {
      text-align: center;
      img {
        height: 50px;
      }
    }
  }
}
</style>
