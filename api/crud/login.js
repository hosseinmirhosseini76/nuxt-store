import request from "../base";

export function _login (resource) {
  return request({
    url: 'auth/login',
    method: 'post',
    data: resource
  })
}
