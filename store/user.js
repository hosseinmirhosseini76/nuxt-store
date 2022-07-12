import {
  getCookie,
  setCookie,
  removeCookie
} from '../util/storeData'
import { TOKEN_STORE_KEY } from '../util/constants'

// holds your root state
export const state = () => ({
  token: getCookie(TOKEN_STORE_KEY),
})

export const actions = {
  //! login user
  loginConfig({ commit }, token) {
    try {
      return new Promise((resolve) => {
        commit('SET_TOKEN', token)
        setCookie(TOKEN_STORE_KEY, token)
        resolve()
      })
    } catch (e) {}
  },
  //! logout user
  logoutConfig({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      removeCookie(TOKEN_STORE_KEY)
      resolve()
    })
  },
}

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

// your root getters
export const getters = {
  token: (state) => state.token,
}
