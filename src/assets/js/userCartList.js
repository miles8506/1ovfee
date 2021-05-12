//購物車初始統計
export function setGoods(data) {
  let user = JSON.parse(localStorage.getItem("login"));
  user.cartList = data;
  user = JSON.stringify(user);
  localStorage.setItem("login", user);
};

//增、減、刪、ipt輸入
export function computedGoods(data) {
  let user = JSON.parse(localStorage.getItem("login"));
  user.cartList = data;
  user = JSON.stringify(user);
  localStorage.setItem("login", user);
};