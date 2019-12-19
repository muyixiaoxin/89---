<template>
<div class="login">
    <!-- 放置卡片组件 -->
<el-card class="card">
    <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
    </div>
    <!-- 登录 表单  表单容器 -->
    <el-form style="margin-top:30px">
        <el-form-item>
           <el-input placeHolder='请输入手机号'></el-input>
        </el-form-item>
        <el-form-item>
           <el-input placeHolder='请输入验证码' style="width:65%"></el-input>
           <el-button  style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox>
                我已阅读并同意<a href="#">用户协议和隐私条款</a>
            </el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
    </el-form>
</el-card>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped >
.login{
    background-image: url(../../assets/img/login_bg.jpg);
    background-size: cover;// cover:把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。背景图像的某些部分也许无法显示在背景定位区域中。
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .card{
        width: 440px;
        height:350px;
        .title{
            text-align: center;
            img{
                height: 50px;
            }
        }
    }
}
</style>
