<template>
  <div class="max-w-screen-lg mx-auto text-center" v-if="filteredService">
    <div class="pt-24 md:pt-28 mx-5">
      <div class="max-w-screen-md mx-auto">
        <h1 class="text-4xl font-bold mb-4 text-center"> {{ filteredService.attributes.name }} </h1>
        <p class="text-lg text-center mb-4"> {{ filteredService.attributes.descriptionShort }} </p>
        <button class="btn-primary-blue" @click="scrollToQuoteForm"> Get a free quote</button>
      </div>

      <gallery class="my-10 md:my-20" :service-ids="[filteredService.id]"/>
      <nuxt-link to="/gallery">
        <button class="btn-primary-blue-outline">See our full gallery</button>
      </nuxt-link>

      <div class="text-base markdown text-left pt-10 md:pt-20" v-html="filteredService.attributes.descriptionLong"></div>
  </div>

  <review-section class="pt-16 md:pt-24"/>
  <quote-section class="pt-16 md:pt-24"/>
  <service-section class="py-16 md:py-24"/>
  </div>
</template>

<script>
import QuoteSection from "@/components/Home/QuoteSection";
import ReviewSection from "@/components/Home/ReviewSection";
import ServiceSection from "@/components/Home/ServiceSection";

export default {
  components: {ServiceSection, ReviewSection, QuoteSection},
  head() {
    return {
      title: this.seo?.metaTitle || 'Service | Uplift Painting',
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
      filteredService: null,
    }
  },
  computed: {
    seo() {
      return this.filteredService?.attributes?.seo || null
    }
  },
  methods: {
    scrollToQuoteForm() {
      document.querySelector('#quoteSection').scrollIntoView({behavior: 'smooth'})
    }
  },

  async asyncData({params, redirect, $axios, $md}) {
    const services = await $axios.$get('/services?populate=seo').then(res => {
      const {data} = res;
      return data.map(i => i)
    })

    const filteredService = services.find(i => i.attributes.name.replace(/ /g, "-").toLowerCase() === params.service);

    if (!filteredService) redirect('/')

    filteredService.attributes.descriptionLong = $md.render(filteredService.attributes.descriptionLong || "");

    return {filteredService}
  }
}
</script>

<style>

</style>