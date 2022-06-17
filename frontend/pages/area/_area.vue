<template>
  <div class="max-w-screen-lg mx-auto text-center" v-if="filteredArea">
    <div class="pt-16 md:pt-24 text-left mx-5">
      <div class="text-base markdown" v-html="filteredArea.attributes.description"></div>
    </div>

    <div class="pt-16 md:pt-24 mx-5">
      <h2 class="text-center pb-10 md:pb-20"> Get some inspiration from our work </h2>
      <gallery class="mb-10 md:mb-20"/>
      <nuxt-link to="/gallery">
        <button class="btn-primary-blue-outline">See the full gallery</button>
      </nuxt-link>
    </div>
    <review-section class="pt-16 md:pt-24"/>
    <quote-section class="py-16 md:py-24"/>
  </div>
</template>

<script>
import ReviewSection from "@/components/Home/ReviewSection";
import QuoteSection from "@/components/Home/QuoteSection";

export default {
  components: {ReviewSection, QuoteSection},
  head() {
    return {
      title: this.seo?.metaTitle || 'Area | Uplift Painting',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo?.metaDescription || ''
        }
      ]
    }
  },
  data() {
    return {
      filteredArea: null,
    }
  },
  computed: {
    seo() {
      return this.filteredArea?.attributes?.seo || null
    }
  },
  async asyncData({ params, redirect, $axios, $md }) {
    const services = await $axios.$get('/service-areas?populate=seo').then(res => {
      const {data} = res;
      return data.map(i => i)
    })

    const filteredArea = services.find(i => i.attributes.area.replace(" ", "-").toLowerCase() === params.area);

    if (!filteredArea) redirect('/')

    filteredArea.attributes.description = $md.render(filteredArea.attributes.description || "");

    return {filteredArea}
  }
}
</script>

<style scoped>

</style>