import Cookies from 'js-cookie'

//! Cookie
export function getCookie (key) {
  return Cookies.get(key)
}
export function setCookie (key, token) {
  return Cookies.set(key, token)
}
export function removeCookie (key) {
  return Cookies.remove(key)
}

//! Local storage
export function getLocalStorage (key) {
  return localStorage.getItem(key)
}
export function setLocalStorage (key, roles) {
  return localStorage.setItem(key, roles)
}
export function removeLocalStorage (key) {
  return localStorage.removeItem(key)
}

//! Local storage as array
export function getLocalStorageAsArray (key) {
  let permissionsArray = localStorage.getItem(key)
  return JSON.parse(permissionsArray)
}
export function setLocalStorageAsArray (key, permissions) {
  return localStorage.setItem(key, JSON.stringify(permissions))
}
