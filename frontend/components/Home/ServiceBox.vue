<template>
  <div class="bg-white border border-gray-200">
    <div>
      <img :src="imageUrl" alt="service-image" class="h-60 w-full object-cover">
    </div>
    <div class="p-5">
      <h3 class="font-bold">{{ title }}</h3>
      <p>{{ shortDesc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceBox",
  props: {
    imageUrl: String,
    title: String,
    shortDesc: String
  }
}
</script>

<style scoped>

</style>