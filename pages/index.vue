<template>
  <div>
    <!--! categories banners section -->
    <AppCategoriesBanners />
    <!--! men category slider -->
    <AppCategorySlider
      :title="menSliderTitle"
      :sub-title="menSliderSubTitle"
      :slider-items="mensSliderItems"
      :slider-loading="mensSliderItemsLoading"
      slider-id="111"
    />
    <!--! women category slider -->
    <AppCategorySlider
      :title="womenSliderTitle"
      :sub-title="womenSliderSubTitle"
      :slider-items="womenSliderItems"
      :slider-loading="womenSliderItemsLoading"
      slider-id="666"
    />
    <!--! jewelery category slider -->
    <AppCategorySlider
      :title="jewelrySliderTitle"
      :sub-title="jewelrySliderSubTitle"
      :slider-items="jewelrySliderItems"
      :slider-loading="jewelrySliderItemsLoading"
      slider-id="333"
    />
  </div>
</template>

<script>
//! mixin's
import menSlider from "../mixins/home/menSlider"
import WomenSlider from "../mixins/home/womenSlider"
import JewelerySlider from "../mixins/home/jewelerySlider"

export default {
  name: 'IndexPage',
  layout: 'IndexLayout',
  mixins: [
    menSlider,
    WomenSlider,
    JewelerySlider
  ]
}
</script>
