import request from '../base'
/**
 * Simple REST api class
 */
class Resource {
  constructor (uri, token) {
    this.uri = uri
    if (token !== undefined) {
      request.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }

  list (query) {
    return request({
      url: this.uri,
      method: 'get',
      params: query
    })
      .catch((err) => {
        if (err.response.status === 500) {
          this.showErrorMessage('Error occurred!')
        } else {
          this.showErrorMessage(err.response.data.detail)
        }
        if (err.response.status === 401) {
          this.expiredWork()
        }
        return err
      })
  }

  /* ! This method use for expired users */
  expiredWork () {
    window.$nuxt.$options.store.dispatch('user/logout')
    window.$nuxt.$options.router.replace('/')
  }

  /* ! This method use for show error messages */
  showErrorMessage (message) {
    window.$nuxt.$toast.open({
      message: message,
      type: 'error',
      position: 'top',
      duration: 4000
    })
  }
}

export { Resource as default }
