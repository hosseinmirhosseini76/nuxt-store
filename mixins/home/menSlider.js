import Resource from "../../api/crud/resource";

export default {
  data() {
    return {
      mensSliderItems: [],
      mensSliderItemsLoading: false,
      menSliderTitle: 'Men\'s Latest',
      menSliderSubTitle: 'Details to details is what makes Hexashop different from the other themes.',
      menSliderId: '1',
    }
  },
  created() {
    this.getMensCategoryItems()
  },
  methods: {
    //! api's
    async getMensCategoryItemsApi(params) {
      return await new Resource('products/category/men\'s clothing')
        .list(params)
    },
    //! get data
    getMensCategoryItems() {
      if (this.mensSliderItemsLoading) return

      this.mensSliderItemsLoading = true
      this.getMensCategoryItemsApi({})
        .then((res) => {
          this.mensSliderItems = res.data
        })
        .catch(() => {})
        .finally(() => {
          this.mensSliderItemsLoading = false
        })
    }
  }
}
