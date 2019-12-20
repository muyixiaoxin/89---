<template>
<!-- 外层容器 -->
<el-container>
<!-- 左右容器 -->
<el-aside>
  <layout-aside></layout-aside>
</el-aside>
<el-container>
  <!-- 上下布局 -->
  <el-header>右侧 头部 </el-header>
  <el-main>右侧 主要区域</el-main>
</el-container>
</el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>

</style>
