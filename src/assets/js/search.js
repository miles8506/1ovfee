//blursearch
export function blurSearch(data, searchArr) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://127.0.0.1:3000/search',
      type: 'get',
      data: { data },
      success(data) {
        searchArr.push(...data);
        resolve();
      },
    });
  });
};

//搜尋後進入詳情頁
export function blurDetail(iid, sort) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://127.0.0.1:3000/detail',
      type: 'get',
      data: {
        iid,
        sort
      },
      success(data) {
        const arr = [];
        arr.push(data)
        resolve(arr);
      },
    });
  });
};
