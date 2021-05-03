//cart中獲取相對應的goods
export function filterData(goodsList, iid, size) {
  const filterArray = goodsList.filter(
    (item) => item.id == iid && item.goodsSize == size
  );
  return filterArray[0];
}