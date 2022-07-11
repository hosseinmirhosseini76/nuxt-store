import Resource from "../../api/crud/resource";

export default {
  data() {
    return {
      jewelrySliderItems: [],
      jewelrySliderItemsLoading: false,
      jewelrySliderTitle: 'Jewelries Latest',
      jewelrySliderSubTitle: 'Details to details is what makes Hexashop different from the other themes.',
      jewelrySliderId: '1',
    }
  },
  created() {
    this.getJewelriesCategoryItems()
  },
  methods: {
    //! api's
    async getJewelriesCategoryItemsApi(params) {
      return await new Resource('products/category/jewelery')
        .list(params)
    },
    //! get data
    getJewelriesCategoryItems() {
      if (this.jewelrySliderItemsLoading) return

      this.jewelrySliderItemsLoading = true
      this.getJewelriesCategoryItemsApi({})
        .then((res) => {
          this.jewelrySliderItems = res.data
        })
        .catch(() => {})
        .finally(() => {
          this.jewelrySliderItemsLoading = false
        })
    }
  }
}
