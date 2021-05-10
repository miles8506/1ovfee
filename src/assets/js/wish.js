//back
export function wishApi(data) {
  $.ajax({
    url: 'http://127.0.0.1:3000/wish',
    type: 'get',
    data: { data },
    success(status) {
    }
  })
}

//front
export function wish(goods) {
  let wishList = JSON.parse(localStorage.getItem("login"));
  let wish = wishList.wishList;
  if (wish.length > 0) {
    const index = wish.findIndex(item => item.id == goods.id);
    if (index === -1) {
      wish.push(goods);
    } else {
      wish.splice(index, 1);
    }
  } else {
    wish.push(goods);
  }
  wishList = JSON.stringify(wishList);
  localStorage.setItem("login", wishList);
}