<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像部分 -->
      <div class="avatar_box">
        <!-- <img src="../assets/头像.jpg" alt="" /> -->
        <p>登录</p>
      </div>
      <!-- 登录表单部分 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            placeholder="请输入登录账号"
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="请输入登录密码"
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 登录区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" plain @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      //登录表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
      },
      //表单的的验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入登录账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //点击重置按钮，重置登录表单
    resetForm() {
      //   console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        // console.log(valid);
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm);
        if (res.meta.status !== 200) return this.$message.error("登录失败");
        this.$message.success("登录成功");
        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/banner");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  display: flex;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#c9e0f5),
    to(#f2f2f3)
  );

  height: 100%;
  justify-content: center;
  align-items: center;
}
.login_box {
  position: relative;
  width: 450px;
  height: 300px;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#fff),
    to(#a8a8ec)
  ); /* Safari 4-5, Chrome 1-9*/
  border-radius: 3px;
}
.avatar_box {
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 10px #ddd;
  position: absolute;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#fff),
    to(#7272b3)
  ); /* Safari 4-5, Chrome 1-9*/
  left: 50%;
  transform: translate(-50%, -50%);
  // img {
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 50%;
  //   background-color: #eee;
  // }
  p {
    font-size: 30px;
    font-weight: 400;
    padding-left: 21px;
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>