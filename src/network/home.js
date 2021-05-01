import { request } from './request';
export function getHomeData() {
  return request({
    url: '/hot/clothes'
  })
}