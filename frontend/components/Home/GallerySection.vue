<template>
  <div class="mx-5 md:mx-0">
    <h2 class="font-bold text-3xl"> Get some inspiration from our gallery </h2>
    <gallery class="py-10 md:py-20"/>
    <button class="btn-primary-blue-outline"> See the full gallery</button>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";

export default {
  name: "GallerySection",
  components: {
    Gallery
  }
}
</script>

<style scoped>

</style>