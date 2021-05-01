// navbar-scrollTop
export function navbarJS() {
  return new Promise((resolve, reject) => {
    resolve(document.documentElement.scrollTop);
    reject('err');
  })
}