<template>
  <!-- ***** Main Banner Area Start ***** -->
  <div class="main-banner" id="top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="left-content">
            <div class="thumb">
              <div class="inner-content">
                <h4>We Are Hexashop</h4>
                <span>Awesome, clean &amp; creative HTML5 Template</span>
                <div class="main-border-button">
                  <nuxt-link :to="({name: 'products', query: { category: 'All' }})">Purchase Now!</nuxt-link>
                </div>
              </div>
              <img src="/images/left-banner-image.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="right-content">
            <div class="row">
              <div class="col-lg-6">
                <div class="right-first-image">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Women</h4>
                      <span>Best Clothes For Women</span>
                    </div>
                    <div class="hover-content">
                      <div class="inner">
                        <h4>Women</h4>
                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                        <div class="main-border-button">
                          <nuxt-link :to="({name: 'products', query: { category: 'Women' }})">Discover More</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <img src="/images/baner-right-image-01.jpg">
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-first-image">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Men</h4>
                      <span>Best Clothes For Men</span>
                    </div>
                    <div class="hover-content">
                      <div class="inner">
                        <h4>Men</h4>
                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                        <div class="main-border-button">
                          <nuxt-link :to="({name: 'products', query: { category: 'Men' }})">Discover More</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <img src="/images/baner-right-image-02.jpg">
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-first-image">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Kids</h4>
                      <span>Best Clothes For Kids</span>
                    </div>
                    <div class="hover-content">
                      <div class="inner">
                        <h4>Kids</h4>
                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                        <div class="main-border-button">
                          <nuxt-link :to="({name: 'products', query: { category: 'All' }})">Discover More</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <img src="/images/baner-right-image-03.jpg">
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-first-image">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Accessories</h4>
                      <span>Best Trend Accessories</span>
                    </div>
                    <div class="hover-content">
                      <div class="inner">
                        <h4>Accessories</h4>
                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                        <div class="main-border-button">
                          <nuxt-link :to="({name: 'products', query: { category: 'Jewelry' }})">Discover More</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <img src="/images/baner-right-image-04.jpg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Main Banner Area End ***** -->
</template>

<script>
export default {
  name: "index"
}
</script>
