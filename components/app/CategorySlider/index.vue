<template>
  <section class="section" id="men">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h2 v-if="title">{{ title }}</h2>
            <span v-if="subTitle">{{ subTitle }}</span>
          </div>
        </div>
      </div>
    </div>
    <!--! loading section -->
    <div v-if="sliderLoading" class="container">
      <div class="row m-0">
        <div
          v-for="load in 3"
          class="col-md-4 col-12"
        >
          <b-skeleton-img></b-skeleton-img>
        </div>
      </div>
    </div>
    <!--! slider items -->
    <div v-show="sliderItems.length > 0 && !sliderLoading" class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="men-item-carousel">
            <div class="swiper-container">
              <div :class="[`swiper${sliderId}`]" class="swiper swiper-slider">
                <!--! slides section -->
                <div class="swiper-wrapper">
                  <template v-for="(item, itemIndex) in sliderItems">
                    <div :key="itemIndex" class="swiper-slide item">
                      <div class="thumb">
                        <div class="hover-content">
                          <ul>
                            <li
                              @click="goToProductDetailPage(item)"
                            ><a><i class="fa fa-eye"></i></a></li>
                            <li><a><i class="fa fa-star"></i></a></li>
                            <li
                              @click="$store.dispatch('cart/addToCart',item)"
                            ><a><i class="fa fa-shopping-cart"></i></a></li>
                          </ul>
                        </div>
                        <img :src="item.image" alt="">
                      </div>
                      <div class="down-content">
                        <h4>{{ item.title.substr(0, 15)}}</h4>
                        <span>${{ item.price }}</span>
                        <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </template>
                </div>
                <!--! navigation section -->
<!--                <div class="swiper-button-next d-md-block d-none" @click="nextSlide"></div>-->
<!--                <div class="swiper-button-prev d-md-block d-none" @click="prevSlide"></div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { initSlider, nextSlide, prevSlide } from '../../../plugins/swiperSlider'

export default {
  name: "index",
  props: {
    categoryId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    sliderId: {
      type: String,
      default: ''
    },
    sliderItems: {
      type: Array,
      default: () => []
    },
    sliderLoading: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    sliderLoading: {
      handler(newVal, oldVal) {
        if (!newVal && oldVal) {
          if (this.sliderId) initSlider(this.sliderId)
        }
      }
    }
  },
  methods: {
    nextSlide () {
      nextSlide(this.sliderId)
    },
    prevSlide () {
      prevSlide(this.sliderId)
    },
    //! route to detail page
    goToProductDetailPage(product) {
      this.$router.push({
        name: 'products-id',
        params: {
          id: product.id
        }
      })
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  --swiper-theme-color: black;
  width: 100%;
  height: auto;
  margin: 0 auto;

  .swiper-slider {
    &.swiper {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;

      .swiper-wrapper {
        .swiper-slide {
          .image-title {
            text-align: center;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
