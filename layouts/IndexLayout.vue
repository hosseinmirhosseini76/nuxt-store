<template>
  <div>
    <!--! header section -->
    <AppNavbar />
    <!--! main content section -->
    <div class="col-12 p-0 info">
      <nuxt />
    </div>
    <!--! footer section -->
    <AppCusotomFooter />
  </div>
</template>

<script>
export default {
  name: "IndexLayout"
}
</script>

