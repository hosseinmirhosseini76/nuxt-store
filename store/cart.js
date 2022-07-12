import { CART_KEY } from "../util/constants";
import {
  getLocalStorageAsArray,
  setLocalStorageAsArray,
  removeLocalStorage
} from "../util/storeData";

export const state = () => ({
  items: getLocalStorageAsArray(CART_KEY),
})

export const actions = {
  addToCart({ commit, state }, cartItem) {
    if (state.items === null) state.items = []
    if (state.items.length > 0 ) {
      if (state.items.some(el => el.id === cartItem.id)) {
        window.$nuxt.$toast.open({
          message: 'This item was added.',
          type: 'warning',
          position: 'bottom-left',
          duration: 1000
        })
        return
      }
    }
    commit('SET_A_CART_ITEM', cartItem)
    commit('RESET_CART_STORAGE')
  },
  removeFromCart({ commit, state }, cartItem) {
    commit('REMOVE_A_CART_ITEM', cartItem)
    commit('RESET_CART_STORAGE')
  },
}

export const mutations = {
  SET_A_CART_ITEM: (state, cartItem) => {
    state.items.push(cartItem)
  },
  REMOVE_A_CART_ITEM: (state, cartItem) => {
    state.items = state.items.filter((el) => {
      return el.id !== cartItem.id
    })
  },
  RESET_CART_STORAGE: (state) => {
    removeLocalStorage(CART_KEY)
    setLocalStorageAsArray(CART_KEY, state.items)
  }
}

// your root getters
export const getters = {
  cart: (state) => state.items,
}
