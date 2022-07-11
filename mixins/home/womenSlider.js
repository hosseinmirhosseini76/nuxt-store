import Resource from "../../api/crud/resource";

export default {
  data() {
    return {
      womenSliderItems: [],
      womenSliderItemsLoading: false,
      womenSliderTitle: 'Women\'s Latest',
      womenSliderSubTitle: 'Details to details is what makes Hexashop different from the other themes.',
      womenSliderId: '2',
    }
  },
  created() {
    this.getWomenCategoryItems()
  },
  methods: {
    //! api's
    async getWomenCategoryItemsApi(params) {
      return await new Resource('products/category/women\'s clothing')
        .list(params)
    },
    //! get data
    getWomenCategoryItems() {
      if (this.womenSliderItemsLoading) return

      this.womenSliderItemsLoading = true
      this.getWomenCategoryItemsApi({})
        .then((res) => {
          this.womenSliderItems = res.data
        })
        .catch(() => {})
        .finally(() => {
          this.womenSliderItemsLoading = false
        })
    }
  }
}
