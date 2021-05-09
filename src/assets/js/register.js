export function register(account, psw, that) {
  let userData = {};
  userData.registerAccount = account;
  userData.registerPsw = psw;
  $.ajax({
    url: "http://127.0.0.1:3000/register",
    type: "post",
    data: userData,
    success(data) {
      if (data == 0) {
        that.$bus.$emit("mask", "信箱已註冊請嘗試其他信箱");
      } else if (data == 1) {
        that.register_account = "";
        that.register_psw = "";
        that.register_psw_double = "";
        that.$bus.$emit("mask", "註冊成功");
      };
    },
  });
};