<template>
  <div class="mx-5 md:mx-0">
    <h2 class="text-3xl font-bold pb-10 md:pb-20">Nice to meet you, I'm Matt </h2>
    
    <div class="flex flex-col md:flex-row max-w-screen-md mx-auto text-left items-center gap-5">
      <img :src="imageUrl" alt="Matt the owner holding a fish" class="w-full md:w-80">
      <p class="text-lg"> {{ details }}.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MattSection",
  data() {
    return {
      details: '',
      imageUrl: '',
      imageAlt: ''
    }
  },
  async fetch() {
    const { data } = await this.$axios.get("/matt-intro?populate=image");

    this.details = data.data.attributes.details;
    this.imageUrl = data.data.attributes.image.data.attributes.url;
    this.imageAlt = data.data.attributes.image.data.attributes.alternativeText;
  }
}
</script>

<style scoped>

</style>