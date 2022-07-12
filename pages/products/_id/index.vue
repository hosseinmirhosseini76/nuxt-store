<template>
  <div>
    <!--! Main Banner Area Start -->
    <div class="page-heading" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>Single Product Page</h2>
              <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--! loading section -->
    <div v-if="productLoading" class="container">
      <div class="row m-0">
        <div class="col-md-8 col-12">
          <b-skeleton-img></b-skeleton-img>
        </div>
        <div class="col-md-4 col-12">
          <b-skeleton-img></b-skeleton-img>
        </div>
      </div>
    </div>
    <!--! Product Area Starts -->
    <section v-else-if="product" class="section" id="product">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="left-images">
              <img :src="product.image" alt="">
            </div>
          </div>
          <div class="col-lg-4">
            <div class="right-content">
              <h4>{{ product.title.substr(0, 20) }}</h4>
              <span class="price">${{ product.price }}</span>
              <ul class="stars">
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
              <span>{{ product.description }}</span>
              <div class="quote">
                <i class="fa fa-quote-left"></i>
                <p>{{ product.category }}</p>
              </div>
              <div class="quantity-content">
                <div class="left-content">
                  <h6>No. of Orders</h6>
                </div>
                <div class="right-content">
                  <div class="quantity buttons_added">
                    <input type="button" value="-" class="minus" @click="reduceNumberOfOrders">
                    <input
                      v-model="noOfOrders"
                      type="number"
                      step="1"
                      min="1"
                      max=""
                      name="quantity"
                      value="1"
                      title="Qty"
                      class="input-text qty text"
                      size="4"
                      pattern=""
                      inputmode=""
                    >
                    <input type="button" value="+" class="plus" @click="increaseNumberOfOrders">
                  </div>
                </div>
              </div>
              <div class="total">
                <h4>Total: ${{ (noOfOrders * product.price).toFixed(2) }}</h4>
                <div class="main-border-button">
                  <a @click="$store.dispatch('cart/addToCart', product)">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Resource from "../../../api/crud/resource";

export default {
  name: 'index',
  layout: 'IndexLayout',
  data() {
    return {
      product: null,
      productLoading: false,
      //! add to cart
      noOfOrders: 1
    }
  },
  created() {
    if (!isNaN(this.$route.params.id)) {
      this.getProductDetail()
    } else this.$router.push({ name: 'products' })
  },
  methods: {
    async getProductDetailApi(id, params) {
      return await new Resource('products')
        .getAnItem(id, params)
    },
    //! get data
    getProductDetail() {
      if (this.productLoading) return

      this.productLoading = true
      this.getProductDetailApi(this.$route.params.id, {})
        .then((res) => {
          this.product = null
          this.product = res.data
        })
        .catch(() => {})
        .finally(() => {
          this.productLoading = false
        })
    },
    //! number of orders
    reduceNumberOfOrders() {
      if (this.noOfOrders > 1)
        this.noOfOrders--
    },
    increaseNumberOfOrders() {
      this.noOfOrders++
    }
  }
}
</script>
