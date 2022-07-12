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
              <li class="submenu" @click="subMenuClicked">
                <a href="javascript:;">
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
                <ul class="submenu-ul">
                  <li><a href="#">Features Page 1</a></li>
                  <li><a href="#">Features Page 2</a></li>
                  <li><a href="#">Features Page 3</a></li>
                  <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
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
