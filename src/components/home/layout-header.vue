<template>
  <el-row type="flex" justify="space-between" class="layout-header" align="middle">
    <el-col :span="12" class="left">
      <i class="el-icon-s-fold" style="font-size:23px;"></i>
      <span style="font-size:17px">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="12" class="right">
      <el-row type="flex" justify="end" align="middle">
        <span>
          <el-input placeholder="请输入搜索的文章内容" v-model="input" clearable class="input"></el-input>
        </span>
        <span class="massage">消息</span>
        <img :src="userInfo.photo?userInfo.photo:defaultImg" alt />
        <el-dropdown @command="handle">
          <span class="el-dropdown-link">{{userInfo.name}}</span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command='info'>个人信息</el-dropdown-item>
            <el-dropdown-item command='git'>git地址</el-dropdown-item>
            <el-dropdown-item command='lgout'>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  // 查询数据信息
  data () {
    return {
      userInfo: {}, // 空对象用来接收 用户数据
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    handle (commad) {
      if (commad === 'lgout') {
        // 清除令牌
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'https://github.com/muyixiaoxin/89---.git'
      }
    }
  },
  created () {
    const token = window.localStorage.getItem('user-token') // 获取令牌
    // 查询数据.要有axios
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      console.log(result)

      this.userInfo = result.data.data// 获取到了返回的信息
    })
  }
}
</script>

<style lang='less' scoped>
.layout-header {
  height: 60px;
  .left {
    font-size: 18px;
  }
  .right {
    .massage {
      padding-right: 5px;
    }
    .input {
      margin-right: 40px;
      width: 250px;
    }
    img {
      border-radius: 50%;
      width: 35px;
      margin-right: 5px;
    }
  }
}
</style>
