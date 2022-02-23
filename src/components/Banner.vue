<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/logo-2.png" alt="" style="width=50px" />
        <a href="">Python 学习网</a>
      </div>
      <div>
        <el-button type="info" @click="logout">退出</el-button>
      </div>
    </el-header>
    <!-- 身体 -->
    <el-main class="main-1">
      <!-- 返回顶部 -->
      <el-backtop target=".main-1" :bottom="60">
        <i class="el-icon-caret-top"></i>
      </el-backtop>
      <div class="w">
        <!-- <span>学习Python有哪些优势</span> -->
        <div class="jiuye">
          <div class="title">Python工程师就业面广 人才需求量大</div>
          <div class="img">
            <el-image :src="require('@/assets/img4.png')" lazy></el-image>
            <el-image :src="require('@/assets/img2.png')" lazy></el-image>
            <el-image :src="require('@/assets/img3.png')" lazy></el-image>
            <el-image :src="require('@/assets/img1.png')" lazy></el-image>
          </div>
          <div class="explain"></div>
        </div>
        <div class="lunbo">
          <div class="title1">拥抱人工智能时代 用科技点亮未来</div>
          <div class="zmd">
            <!-- <el-carousel :interval="2000" type="card" height="590px">
              <el-carousel-item v-for="item in images" :key="item.id">
                <img :src="item.url" height="100%" width="100%" />
              </el-carousel-item>
            </el-carousel> -->
            <el-carousel height="590px">
              <el-carousel-item v-for="item in images" :key="item.id">
                <img :src="item.url" height="100%" width="100%" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="daotu">
          <div class="title2">Python学习路线思维导图</div>
          <div class="luxian">
            <img src="../assets/luxian.png" alt="" />
          </div>
        </div>
        <div class="shouce">
          <div class="title3">Python网站学习论坛资源</div>
          <div class="luntan">
            <div class="col">
              <a href="https://www.lanqiao.cn/" target="_blank">
                <h3>实验楼</h3>
                <div>提供免费的Linux实验环境 ></div>
              </a>
            </div>
            <div class="col">
              <a href="http://www.pythondoc.com/" target="_blank">
                <h3>Python中文学习</h3>
                <div>一个不错的Flask学习网站 ></div>
              </a>
            </div>
            <div class="col">
              <a
                href="https://blog.csdn.net/ratsniper/article/details/78954852"
                target="_blank"
              >
                <h3>Python编码规范中文版</h3>
                <div>代码规范与基础同样重要 ></div>
              </a>
            </div>
            <div class="col">
              <a
                href="https://blog.csdn.net/l550725541/article/details/105325612"
                target="_blank"
              >
                <h3>Python资源中文大全</h3>
                <div>各种python包和管理工具 ></div>
              </a>
            </div>
            <div class="col">
              <a href="https://www.programcreek.com/python/" target="_blank">
                <h3>Python代码示例</h3>
                <div>精细到方法级别的代码案例 ></div>
              </a>
            </div>
            <div class="col">
              <a href="https://pymotw.com/3/" target="_blank">
                <h3>Python最佳模块</h3>
                <div>每篇介绍一个 Python标准库的使用 ></div>
              </a>
            </div>
            <div class="col">
              <a
                href="https://www.liaoxuefeng.com/wiki/1016959663602400"
                target="_blank"
              >
                <h3>廖雪峰Python教程</h3>
                <div>大牛带你简单快速入门 ></div>
              </a>
            </div>
            <div class="col">
              <a
                href="https://blog.csdn.net/u011541946/category_6788788.html"
                target="_blank"
              >
                <h3>Python自动化测试博客</h3>
                <div>一个自动化测试大佬的博客 ></div>
              </a>
            </div>
            <div class="col">
              <a
                href="https://github.com/Yixiaohan/show-me-the-code"
                target="_blank"
              >
                <h3>Python练习题</h3>
                <div>有几个不错的实用练习题 ></div>
              </a>
            </div>
            <div class="col">
              <a href="https://py.checkio.org/" target="_blank">
                <h3>CheckiO</h3>
                <div>一个学习Python的有趣网站 ></div>
              </a>
            </div>
            <div class="col">
              <a href="https://mofanpy.com/" target="_blank">
                <h3>莫烦Python</h3>
                <div>机器学习方面有着不错的造诣 ></div>
              </a>
            </div>
            <div class="col">
              <a
                href="https://www.liujiangblog.com/course/django/"
                target="_blank"
              >
                <h3>刘江Django</h3>
                <div>最适合入门的Django教程 ></div>
              </a>
            </div>
          </div>
        </div>
        <div class="guanfang">
          <div class="title4">Python在线相关学习手册和工具</div>
          <div class="guanfang-root">
            <a
              href="https://www.shouce.ren/api/linux/"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>Linux参考手册</span>
            </a>
            <a
              href="https://www.runoob.com/manual/pythontutorial3/docs/html/index.html"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>Python入门指南</span> </a
            ><a
              href="https://docs.python.org/zh-cn/3/reference/index.html"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>Py语言参考手册</span> </a
            ><a
              href="https://docs.python.org/zh-cn/3.7/c-api/index.html"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>Py API参考手册</span> </a
            ><a
              href="https://www.w3school.com.cn/python/python_reference.asp"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>W3C Py参考手册</span> </a
            ><a
              href="https://www.runoob.com/python/python-tutorial.html"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>菜鸟教程 Py手册</span> </a
            ><a
              href="https://developer.mozilla.org/zh-CN/"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>MDN Web</span>
            </a>
            <a href="https://tool.lu/" target="_blank" class="guanfang-box">
              <img src="../assets/python.png" alt="" />
              <span>程序员工具箱</span>
            </a>
            <a
              href="https://docs.python.org/3/library/idle.html"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>IDLE Py工具参考</span>
            </a>
            <a
              href="https://pypi.org/project/ptpython/"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>Ptpython 工具</span>
            </a>
            <a
              href="https://www.anaconda.com/"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>Anaconda 工具</span>
            </a>
            <a
              href="http://www.sublimetext.com/3"
              target="_blank"
              class="guanfang-box"
            >
              <img src="../assets/python.png" alt="" />
              <span>Sublime TexT</span>
            </a>
          </div>
        </div>
        <div class="liuyan" id="messageboard">
          <div class="title5">留言板</div>
          <el-card class="el-card-d" shadow="always">
            <div class="infinite-list-wrapper" style="overflow: auto">
              <el-timeline infinite-scroll-disabled="disabled">
                <div v-if="allmessages.length > 0">
                  <el-timeline-item
                    v-for="(item, index) in allmessages"
                    :key="index"
                    :timestamp="item.nowtime"
                    placement="top"
                    :reverse="true"
                    :color="color"
                  >
                    <el-card class="el-card-m" style="height: 120px">
                      <h4>{{ item.memberName }}：</h4>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.content }}
                      </p>
                    </el-card>
                  </el-timeline-item>
                </div>
                <div v-else>
                  <el-timeline-item placement="top" :color="color">
                    <el-card class="el-card-m" style="height: 120px">
                      <h4>同学们：</h4>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 说点什么吧😁</p>
                    </el-card>
                  </el-timeline-item>
                </div>
              </el-timeline>
            </div>
            <div class="el-card-messages" ref="refmessage">
              <el-input
                placeholder="输入昵称"
                v-model="username"
                maxlength="8"
                show-word-limit
                clearable
              >
              </el-input>

              <el-input
                type="textarea"
                :rows="5"
                placeholder="输入留言"
                maxlength="200"
                v-model="message"
                resize="none"
              ></el-input>
              <el-button
                type="info"
                round
                class="submit-message"
                @click="submitMessage"
                >留言</el-button
              >
            </div>
          </el-card>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      images: [
        { id: 0, url: require("@/assets/lunbo1.png") },
        { id: 1, url: require("@/assets/lunbo2.png") },
        { id: 2, url: require("@/assets/lunbo3.png") },
      ],
      username: "",
      message: "",
      allmessages: [],
      nowDate: "", // 当前日期
      color: "#0bbd87",
    };
  },
  methods: {
    logout() {
      // window.sessionStorage.clear();
      this.$router.push("/home");
    },
    //获取当前时间
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
    },
    //鼠标点击事件

    submitMessage() {
      // console.log(this.nowDate);
      if (
        this.message == "" ||
        this.message.replace(/(^\s*)|(\s*$)/g, "") == ""
      ) {
        this.$message("写点啥提交也行呀😉");
        return;
      }
      //  将输入的数据推送到数组里
      this.allmessages.unshift({
        memberName: this.username,
        content: this.message,
        nowtime: this.nowDate,
      });
      // this.$refs.refmessage.resetFields();
    },
  },
  mounted() {
    this.currentTime();
  },
  // 销毁定时器
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  },
};
</script>

<style  lang="less" scoped>
.home-container {
  height: 100%;
  // overflow: scroll;
}
.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  font-weight: 550;
  color: #333;
  font-size: 30px;
  margin-bottom: 4px;
  box-shadow: 20px -11px 8px 7px #000000;
  .el-button {
    margin: 10px 0;
  }
  > div {
    display: flex;
  }

  a {
    margin-left: 5px;
    margin-right: 20px;
    margin-top: 15px;
    color: rgb(26, 87, 201);
    font-family: "STHupo";
  }
}
.el-main {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#fdfdfd),
    to(#d9d9f5)
  ); /*谷歌*/
  padding-top: 0px;
  .el-icon-caret-top {
    font-size: 25px;
  }
  .w {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
    > span {
      display: block;
      width: 343px;
      // margin: 0 auto;
      color: #ff6700;
      font-size: 32px;
      font-weight: bold;
    }
    .jiuye {
      position: relative;
      height: 670px;
      width: 100%;
      background-color: #fff;
      .title {
        width: 1100px;
        // background: url(../assets/title.png) no-repeat;
        height: 79px;
        background-size: 60%;
        position: absolute;
        top: 52px;
        left: 50%;
        margin-bottom: 10px;
        transform: translate(-50%, -50%);
        color: #0d2c8a;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding-top: 17px;
        background-position-x: center;
      }
      .img {
        position: absolute;
        top: 90px;
        width: 1200px;
        height: 552px;
        overflow-y: auto;
        // border-radius: 20px;
        overflow: auto;
        .el-image {
          display: block;
          min-height: 200px;
          margin-bottom: 10px;
        }
      }
    }
    .lunbo {
      position: relative;
      height: 610px;
      width: 100%;
      background-color: #fff;
      .title1 {
        width: 1100px;
        // background: url(../assets/title1.png) no-repeat;
        height: 79px;
        background-size: 60%;
        position: absolute;
        top: 46px;
        left: 50%;
        margin-bottom: 10px;
        transform: translate(-50%, -50%);
        color: #0d2c8a;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding-top: 17px;
        background-position-x: center;
      }
      .zmd {
        width: 100%;
        height: 590px;
        // background-color: pink;
        position: absolute;
        top: 55px;
      }
    }
    .daotu {
      position: relative;
      height: 600px;
      width: 100%;
      background-color: #fff;
      .title2 {
        width: 1100px;
        // background: url(../assets/title.png) no-repeat;
        height: 79px;
        background-size: 60%;
        position: absolute;
        top: 60px;
        left: 50%;
        margin-bottom: 10px;
        transform: translate(-50%, -50%);
        color: #0d2c8a;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding-top: 17px;
        background-position-x: center;
      }
      .luxian {
        position: absolute;
        top: 100px;
        > img {
          width: 100%;
        }
      }
    }
    .shouce {
      position: relative;
      margin-top: 384px;
      height: 500px;
      width: 100%;
      background-color: #fff;
      .title3 {
        width: 1100px;
        // background: url(../assets/title.png) no-repeat;
        height: 79px;
        background-size: 60%;
        position: absolute;
        top: 60px;
        left: 50%;
        margin-bottom: 10px;
        transform: translate(-50%, -50%);
        color: #0d2c8a;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding-top: 17px;
        background-position-x: center;
      }
      .luntan {
        height: 410px;
        width: 100%;
        // background-color: red;
        position: absolute;
        top: 100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .col {
          width: 290px;
          height: 120px;
          background: -webkit-gradient(
            linear,
            0% 0%,
            0% 100%,
            from(#f5e2e2),
            to(#9999eb)
          );
          border: 1px solid #dadcdf;
          text-align: center;
          // border-right: 0;
          > a {
            display: block;
            width: 100%;
            height: 100%;
            color: #333;
            // background-color: pink;

            div {
              color: rgb(104, 102, 102);
            }
          }
        }
        .col:hover {
          background: -webkit-gradient(
            linear,
            0% 0%,
            0% 100%,
            from(#f7e4e4),
            to(#3a5fcf)
          );
        }
      }
    }
    .guanfang {
      position: relative;
      // margin-top: 384px;
      height: 400px;
      width: 100%;
      background-color: #fff;
      .title4 {
        width: 1100px;
        // background: url(../assets/title.png) no-repeat;
        height: 79px;
        background-size: 60%;
        position: absolute;
        top: 60px;
        left: 50%;
        margin-bottom: 10px;
        transform: translate(-50%, -50%);
        color: #0d2c8a;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding-top: 17px;
        background-position-x: center;
      }
      .guanfang-root {
        height: 350px;
        width: 100%;
        background-color: #fff;
        position: absolute;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        top: 100px;
        .guanfang-box {
          display: flex;
          // text-align: center;
          justify-content: center;
          width: 292px;
          height: 90px;
          line-height: 90px;
          color: #000000;
          border-radius: 20px;
          background: -webkit-gradient(
            linear,
            0% 0%,
            0% 100%,
            from(#f1e9e9),
            to(#c8c8d8)
          );

          img {
            // display: block;
            height: 40px;
            margin-top: 24px;
            // margin-left: 70px;
          }
          span {
            // text-align: center;
            margin-left: 10px;
            width: 150px;
            font-size: 18px;
            font-family: Microsoft JhengHei;
            font-weight: 600;
          }
          // .guanfang-img {
          //   width: 110px;
          //   height: 100%;
          //   background-color: #fff;
          // }
          // .guanfang-txt {
          //   height: 100%;
          //   width: 192px;
          //   text-align: center;
          // }
        }
        .guanfang-box:hover {
          background: -webkit-gradient(
            linear,
            0% 0%,
            0% 100%,
            from(#f8eaea),
            to(#7694ee)
          );
          color: #fff;
        }
      }
    }
    .liuyan {
      height: 550px;
      width: 100%;
      background-color: #fff;
      padding-top: 10px;
      margin-top: 47px;
      position: relative;
      .title5 {
        width: 1100px;
        // background: url(../assets/title.png) no-repeat;
        height: 79px;
        background-size: 60%;
        position: absolute;
        top: 43px;
        left: 50%;
        margin-bottom: 10px;
        transform: translate(-50%, -50%);
        color: #0d2c8a;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding-top: 17px;
        background-position-x: center;
      }
      .el-card-d {
        height: 530px;
        width: 100%;
        // margin-top: 47px;
        position: absolute;
        top: 84px;
        .infinite-list-wrapper {
          width: 100%;
          height: 300px;
          overflow: auto;
        }

        .submit-message {
          width: 100%;
          background: #6583dd;
          color: #fff;
          letter-spacing: 20px;
        }
        @media screen and (max-width: 3000px) and (min-width: 767px) {
          .el-card-d {
            float: left;
            margin-top: 20px;
            margin-left: 10%;
            width: 80%;
            height: 90%;
          }
        }
        /*
  屏幕小于768px的
  */
        @media screen and (max-width: 768px) and (min-width: 100px) {
          .el-card-d {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>