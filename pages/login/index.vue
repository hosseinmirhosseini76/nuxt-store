<template>
  <div id="login" class="col-12 p-0">
    <!--! Main Banner Area Start -->
    <div class="heading-banner" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>Sing in For Better Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--! login inputs section -->
    <div class="col-12">
      <div class="row justify-content-center">
        <div class="col-lg-2">
          <div class="col-lg-12 px-0">
            <fieldset>
              <input
                v-model="user.username"
                name="username"
                type="text"
                id="username"
                placeholder="Your Username"
                required=""
              >
            </fieldset>
          </div>
          <div class="col-lg-12 px-0 mt-2">
            <fieldset>
              <input
                v-model="user.password"
                name="password"
                type="password"
                id="password"
                pattern="[^ @]*@[^ @]*"
                placeholder="Your Password"
                required=""
              >
            </fieldset>
          </div>
          <div class="col-lg-12 px-0 mt-2">
            <fieldset>
              <button
                type="submit"
                id="form-submit"
                class="main-dark-button"
                @click="loginUser"
              >Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { _login } from "../../api/crud/login";

export default {
  name: "index",
  layout: 'IndexLayout',
  data() {
    return {
      user: {
        username: 'mor_2314',
        password: '83r5^_'
      },
      loginLoading: false
    }
  },
  methods: {
    async loginUser() {
      if (this.loginLoading) return

      this.loginLoading = true
      await _login({ ...this.user })
        .then((res) => {
          this.$store.dispatch('user/loginConfig', res.data.token)
            .then(() => {
              this.$toast.open({
                message: 'Login Successfully',
                type: 'success',
                position: 'bottom-left',
                duration: 3000
              })
              this.$router.replace('/')
            })
        })
        .catch((err) => {
          this.$toast.open({
            message: 'username or password is incorrect',
            type: 'error',
            position: 'bottom-left',
            duration: 3000
          })
          console.log(err)
        })
        .finally(() => {
          this.loginLoading = false
        })
    }
  }
}
</script>
