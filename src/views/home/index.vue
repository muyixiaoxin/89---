<template>
<!-- 外层容器 -->
<el-container>
<!-- 左右容器 -->
<el-aside style="background-color:#353b4e;height:100vh;width:231px">
  <layout-aside></layout-aside>
</el-aside>
<el-container>
  <!-- 上下布局 -->
  <el-header >
    <layout-header></layout-header>
  </el-header>
  <el-main>右侧 主要区域</el-main>
</el-container>
</el-container>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>

</style>
