<template>
  <div class="pt-20 h-full flex justify-center items-center">
    <div class="text-center flex flex-col gap-5 max-w-screen-sm p-5 bg-white rounded-lg mx-5">
      <p class="text-7xl">🎉</p>
      <h2> Quote Request Successfully Submitted </h2>
      <p class="text-lg">We're looking forward to helping you bring your exterior areas back to life.
        We will be in contact within 1 business day to provide your no obligation quote.
      </p>
      <nuxt-link to="/" class="btn-primary-blue self-center"> Back Home </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "quote-success"
}
</script>

<style scoped>

</style>