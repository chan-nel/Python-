<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.jpeg" alt="" />
        <span>Python在线学习网站</span>
      </div>
      <div><el-button type="info" @click="logout">退出</el-button></div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-aside {
  background-color: #eee;
  .el-menu {
    border-right: none;
  }
}
.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  font-weight: 700;
  color: #333;
  font-size: 23px;
  margin-bottom: 4px;
  box-shadow: 20px -11px 8px 7px #000000;
  .el-button {
    margin: 10px 0;
  }
  > div {
    display: flex;
  }

  span {
    margin-left: 5px;
    margin-right: 20px;
    margin-top: 15px;
  }
}
.el-main {
  background-color: #fff;
}
</style>

