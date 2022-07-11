<template>
  <div>
    <!-- ***** Main Banner Area Start ***** -->
    <div class="page-heading" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>Check Our Products</h2>
              <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Main Banner Area End ***** -->
    <!-- ***** Products Area Starts ***** -->
    <section class="section" id="products">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
      </div>
      <!--! category filters section -->
      <div class="col-lg-12">
        <div class="category-filter">
          <ul>
            <li
              :class="selectedFilters === 'All' ? 'active' : ''"
            >
              <button
                :disabled="productsLoading"
                @click="filterChanged('All')"
              >All</button>
            </li>
            <li :class="selectedFilters === 'Men' ? 'active' : ''">
              <button
                :disabled="productsLoading"
                @click="filterChanged('Men')"
              >Men's</button>
            </li>
            <li :class="selectedFilters === 'Women' ? 'active' : ''">
              <button
                :disabled="productsLoading"
                @click="filterChanged('Women')"
              >Women's</button>
            </li>
            <li :class="selectedFilters === 'Jewelry' ? 'active' : ''">
              <button
                :disabled="productsLoading"
                @click="filterChanged('Jewelry')"
              >Jewelry</button>
            </li>
          </ul>
        </div>
      </div>
      <!--! product list -->
      <div class="container">
        <div class="row">
          <template v-for="(product, productIndex) in products">
            <div :key="productIndex" class="col-lg-4">
              <div class="item">
                <div class="thumb">
                  <div class="hover-content">
                    <ul>
                      <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                      <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                      <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                  </div>
                  <img :src="product.image" alt="">
                </div>
                <div class="down-content">
                  <h4>{{ product.title.substr(0, 20) }}</h4>
                  <span>${{ product.price }}</span>
                  <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
          <!--! pagination section -->
          <div v-if="false" class="col-lg-12">
            <div class="pagination">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li class="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** Products Area Ends ***** -->
  </div>
</template>

<script>
import Resource from "../../api/crud/resource";

export default {
  name: "index",
  layout: 'IndexLayout',
  data() {
    return {
      //! filters
      selectedFilters: 'All',
      //! products
      products: [],
      productsLoading: false,
      productUrl: 'products'
    }
  },
  watch: {
    '$route.query.category': {
      handler(val) {
        if (this.$route.query.category) {
          this.filterChanged(this.$route.query.category)
        }
      }
    }
  },
  created() {
    if (this.$route.query.category) {
      this.filterChanged(this.$route.query.category)
    }
    this.getProducts()
  },
  methods: {
    //! api's
    async getProductsApi(url, params) {
      return await new Resource(url)
        .list(params)
    },
    //! get data
    getProducts() {
      if (this.productsLoading) return

      this.productsLoading = true
      this.getProductsApi(this.productUrl, {
        limit: 50
      })
        .then((res) => {
          this.products = []
          this.products = res.data
        })
        .catch(() => {})
        .finally(() => {
          this.productsLoading = false
        })
    },
    //! filter changed
    filterChanged(selectedFilter) {
      if (selectedFilter === 'All') {
        if (this.selectedFilters !== selectedFilter) {
          this.selectedFilters = selectedFilter
          this.productUrl = 'products'
          this.getProducts()
        }
      }
      else if (selectedFilter === 'Men') {
        if (this.selectedFilters !== selectedFilter) {
          this.selectedFilters = selectedFilter
          this.productUrl = 'products/category/men\'s clothing'
          this.getProducts()
        }
      }
      else if (selectedFilter === 'Women') {
        if (this.selectedFilters !== selectedFilter) {
          this.selectedFilters = selectedFilter
          this.productUrl = 'products/category/women\'s clothing'
          this.getProducts()
        }
      }
      else if (selectedFilter === 'Jewelry') {
        if (this.selectedFilters !== selectedFilter) {
          this.selectedFilters = selectedFilter
          this.productUrl = 'products/category/jewelery'
          this.getProducts()
        }
      }
    }
  }
}
</script>
