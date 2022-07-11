<template>
  <div>
    <!--! header section -->
    <AppNavbar />
    <!--! main content section -->
    <div class="col-12 p-0">
      <nuxt />
    </div>
    <!--! footer section -->
    <AppCustomFooter />
  </div>
</template>

<script>
export default {
  name: "IndexLayout"
}
</script>
