export function logOut(cartList, user) {
  $.ajax({
    url: "http://127.0.0.1:3000/logout",
    type: 'get',
    data: { cartList, user }
  })
}