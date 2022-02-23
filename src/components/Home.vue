<template>
  <div class="home-container">
    <div class="home-title">
      Python学习网 欢迎您!
      <p>点击 <a @click="logout" style="cursor: pointer">登录 ></a></p>
    </div>
    <!-- <el-header>
      <div>
        <img src="../assets/logo.jpeg" alt="" />
        <span>Python 学习网</span>
      </div>
      <div>
        <el-button type="success" @click="logout">登录</el-button>
      </div>
    </el-header> -->
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style  lang="less" scoped>
.home-container {
  height: 100%;
  // width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#e7d5d5),
    to(#8282e4)
  );
  /*谷歌*/
  .home-title {
    color: #fff;
    font-weight: 500;
    font-size: 47px;
    > p {
      color: #5858af;
      font-size: 18px;
      text-align: center;
      font-family: "STHupo";
      > a {
        color: #ff6700;
      }
    }
  }
}
</style>