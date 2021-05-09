export function blurSearch(data, searchArr) {
  $.ajax({
    url: 'http://127.0.0.1:3000/search',
    type: 'get',
    data: { data },
    success(data) {
      searchArr.push(...data);
    },
  });
};