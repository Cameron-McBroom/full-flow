<template>
  <div class="max-w-screen-lg mx-auto text-center" v-if="filteredService">
    <div class="pt-16 md:pt-24 text-left mx-5">
      <h1 class="text-4xl font-bold mb-4"> {{ filteredService.attributes.name }} </h1>
      <div class="text-base markdown" v-html="filteredService.attributes.descriptionLong"></div>
    </div>

    <div class="pt-16 md:pt-24 mx-5">
      <h2 class="text-center pb-10 md:pb-20"> Get some inspiration from our {{ filteredService.attributes.name.toLowerCase() }}
      work </h2>
      <gallery class="mb-10 md:mb-20" :service-ids="[filteredService.id]"/>
      <nuxt-link to="/gallery">
        <button class="btn-primary-blue-outline">See the full gallery</button>
      </nuxt-link>
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
  head() {
    return {
      title: this.seo?.title | 'Service | Uplift Painting',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo?.description | ''
        }
      ]
    }
  },
  computed: {
    seo() {
       return this.filteredService?.attributes?.seo?.attributes || null
    }
  },
  async asyncData({ params, redirect, $axios, $md }) {
    const services = await $axios.$get('/services?populate=seo').then(res => {
      const {data} = res;
      return data.map(i => i)
    })

    const filteredService = services.find(i => i.attributes.name.replace(" ", "-").toLowerCase() === params.service);

    if (!filteredService) redirect('/')

    filteredService.attributes.descriptionLong = $md.render(filteredService.attributes.descriptionLong || "");

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