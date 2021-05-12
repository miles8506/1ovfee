export function login(account, psw, that) {
  let userData = {};
  userData.account = account;
  userData.psw = psw;
  $.ajax({
    url: 'http://127.0.0.1:3000/login',
    type: 'post',
    data: userData,
    success(data) {
      if (data.status == 1) {
        let obj = {};
        obj.account = account;
        obj.wishList = data.wish;
        obj.cartList = data.cart;
        that.$store.commit('login', data.cart);
        obj = JSON.stringify(obj);
        // console.log(obj);
        localStorage.setItem('login', obj);
        //傳入service將login item隱藏
        that.$bus.$emit('user');
        that.$router.push('/home');
      } else if (status == 0) {
        that.$bus.$emit("mask", "此帳號尚未註冊或密碼輸入錯誤");
      }
    },
    error(err) {
      console.log(err);
    }
  })
}