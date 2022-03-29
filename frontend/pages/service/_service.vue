<template>
  <div class="max-w-screen-lg mx-auto text-center" v-if="filteredService">
    <div class="pt-16 md:pt-24 text-left mx-5">
      <h1 class="text-4xl font-bold mb-4"> {{ filteredService.name }} </h1>
      <vue-markdown class="text-base markdown"> {{ filteredService.descriptionLong }}</vue-markdown>
    </div>

    <div class="pt-16 md:pt-24 mx-5">
      <h2 class="text-center pb-10 md:pb-20"> Get some inspiration from our {{ filteredService.name.toLowerCase() }}
      work </h2>
      <gallery class="mt-10"/>
    </div>
    <review-section class="pt-16 md:pt-24"/>
    <quote-section class="py-16 md:py-24"/>
  </div>
</template>

<script>
import QuoteSection from "@/components/Home/QuoteSection";
import ReviewSection from "@/components/Home/ReviewSection";
export default {
  components: {ReviewSection, QuoteSection},
  async asyncData({ params, redirect, $axios }) {
    const services = await $axios.$get('/services').then(res => {
      const {data} = res;
      return data.map(i => i.attributes)
    })

    const filteredService = services.find(i => i.name.replace(" ", "-").toLowerCase() === params.service);

    if (!filteredService) redirect('/')

    return {filteredService}
  }
}
</script>

<style>

.markdown h1,h2,h3,h4,h5 {
  @apply mb-3
}

.markdown p {
  @apply mb-5
}

.markdown ul{
  @apply list-inside list-disc
}

</style>