<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <nuxt-link to="/" class="logo">
              <img src="/images/logo.png">
            </nuxt-link>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><nuxt-link to="/#top">Home</nuxt-link></li>
              <li class="scroll-to-section">
                <nuxt-link :to="({name: 'products', query: { category: 'Men' }})">Men's</nuxt-link>
              </li>
              <li class="scroll-to-section">
                <nuxt-link :to="({name: 'products', query: { category: 'Women' }})">Women's</nuxt-link>
              </li>
              <li class="scroll-to-section">
                <nuxt-link :to="({name: 'products', query: { category: 'Jewelry' }})">Jewelries</nuxt-link>
              </li>
              <!--! cart item -->
              <li class="cart" @click="subMenuClicked">
                <a href="javascript:;">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <b-badge v-if="$store.state.cart.items.length > 0" variant="info">
                    {{ $store.state.cart.items.length }}
                  </b-badge>
                </a>
                <ul class="submenu-ul">
                  <li v-if="$store.state.cart.items.length === 0 || !$store.state.cart.items">
                    <span>
                      There is no Item
                    </span>
                  </li>
                  <template v-else>
                    <li v-for="(cart, cartIndex) in $store.state.cart.items" :key="cartIndex">
                      <span>
                        <img :src="cart.image">
                        {{ cart.title.substr(0, 15) }}
                        <i @click="$store.dispatch('cart/removeFromCart', cart)" class="fa-solid fa-trash"></i>
                      </span>
                    </li>
                  </template>
                </ul>
              </li>
              <li v-if="!$store.state.user.token">
                <nuxt-link to="/login">Login</nuxt-link>
              </li>
              <li v-else @click="$store.dispatch('user/logoutConfig')">
                <a>Logout</a>
              </li>
            </ul>
            <a class='menu-trigger' @click="openMenu">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import $ from "jquery"

export default {
  name: "index",
  methods: {
    //! Menu Dropdown Toggle
    openMenu() {
      if($('.menu-trigger').length){
        let tempMenuTrigger = document.getElementsByClassName('menu-trigger')
        $(tempMenuTrigger).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      }
    },
    // Window Resize Mobile Menu Fix
    subMenuClicked(x) {
      let width = $(window).width()
      if(width < 767) {
        let tempSubMenuUl = document.getElementsByClassName('submenu-ul')
        if ($(x.target.nextElementSibling).hasClass('active')) {
          $(x.target.nextElementSibling).removeClass('active')
        } else {
          $(tempSubMenuUl).removeClass('active');
          $(x.target.nextElementSibling).toggleClass('active')
        }
      }
    }
  }
}
</script>
