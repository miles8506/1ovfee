export function register(account, psw, psw_double, registered, goHome) {
  let userData = {};
  userData.registerAccount = account;
  userData.registerPsw = psw;
  userData.registerPswDouble = psw_double;
  userData.wishList = "[]";
  $.ajax({
    url: "http://127.0.0.1:3000/register",
    type: "post",
    data: userData,
    success(data) {
      if (data == 0) {
        registered();
      } else if (data == 1) {
        goHome();
      }
    },
  });
}