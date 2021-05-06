<template>
  <div class="login">
    <div class="login_img">
      <img src="@/assets/img/login_img.jpeg" alt="" />
    </div>
    <div class="user_wrap">
      <form action="" method="post" class="login_box">
        <div class="login_title">Login 會員登入</div>
        <div class="account">
          <input
            type="text"
            name="login_account"
            placeholder="Email Address / Account 會員帳號"
            v-model="login_account"
          />
        </div>
        <div class="psw">
          <input
            type="password"
            name="login_psw"
            placeholder="Password 會員密碼"
            v-model="login_psw"
          />
        </div>
        <div class="forget_psw"><a href="">忘記密碼</a></div>
        <button class="login_btn">LOGIN</button>
      </form>
      <div class="line"></div>
      <form action="" method="post" class="register_box">
        <div class="title">Register 註冊會員</div>
        <div class="account">
          <input
            type="text"
            name="register_account"
            placeholder="Email Address電子信箱"
            v-model="register_account"
          />
        </div>
        <div class="psw">
          <input
            type="password"
            name="register_psw"
            placeholder="Passord會員密碼(5至10碼英數字)"
            v-model="register_psw"
          />
        </div>
        <div class="psw_double">
          <input
            type="password"
            name="register_psw_double"
            placeholder="Password再次輸入密碼"
            v-model="register_psw_double"
          />
        </div>
        <button class="register_btn" @click="goRegister">REGISTER</button>
      </form>
    </div>
  </div>
</template>
<script>
//JS
import { register } from "assets/js/register.js";

export default {
  name: "Login",
  data() {
    return {
      // login
      login_account: "",
      login_psw: "",
      // register
      register_account: "",
      register_psw: "",
      register_psw_double: "",
    };
  },
  methods: {
    // register
    goRegister() {
      event.preventDefault();
      let that = this;
      //信箱格式
      const rgl_email = /^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/;
      //密碼格式
      const rgl_psw = /[a-z A-Z 0-9]{6,15}/;
      if (this.register_account === "") {
        this.$bus.$emit("mask", "請輸入帳號");
        return;
      } else if (!rgl_email.test(this.register_account)) {
        this.$bus.$emit("mask", "電子信箱錯誤請重新再試");
        return;
      } else if (this.register_psw === "") {
        this.$bus.$emit("mask", "請輸入密碼");
        return;
      } else if (rgl_psw.test(!this.register_psw)) {
        this.$bus.$emit("mask", "密碼格式錯誤請重新再試");
        return;
      } else if (
        this.register_psw_double !== this.register_psw ||
        this.register_psw_double === ""
      ) {
        this.$bus.$emit("mask", "密碼與確認密碼不一致");
        return;
      } else {
        register(
          this.register_account,
          this.register_psw,
          this.register_psw_double,
          function () {
            that.$bus.$emit("mask", "信箱已註冊請嘗試其他信箱");
          },
          function () {
            that.$router.push("/home");
          }
        );
      }
    },
    // login
  },
};
</script>
<style scoped>
.login {
  padding: 50px 328.5px 0;
}

/* login_img */
.login_img {
  height: 300px;
}

.login_img img {
  width: 100%;
  height: 100%;
}

/* login_wrap */
.user_wrap {
  display: flex;
  width: 100%;
  height: 300px;
  margin-top: 50px;
}

.login_box,
.register_box {
  flex: 1;
  padding: 0 50px;
}

.line {
  width: 2px;
  height: 100%;
  background-color: #999;
}

/* login_box && register_box */
.login_box .login_title,
.register_box .title {
  font-size: 30px;
  font-weight: 500;
  display: table-cell;
  vertical-align: bottom;
}

.login_box .account,
.login_box .psw,
.login_btn,
.register_box .account,
.register_box .psw,
.register_box .psw_double,
.register_btn {
  margin-top: 20px;
}

.login_box .account input,
.login_box .psw input,
.register_box .account input,
.register_box .psw input,
.register_box .psw_double input {
  width: 100%;
  height: 34px;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid #505050;
}

.forget_psw {
  margin-top: 15px;
  color: #6f6a66;
}

.login_btn,
.register_btn {
  width: 100%;
  height: 30px;
  background-color: #eeded1;
  color: #505050;
  border: 0;
  border-radius: 10px;
}

.login_btn:hover,
.register_btn:hover {
  color: #fff;
  background-color: #e0c3ac;
}
</style>