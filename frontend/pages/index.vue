<template>
  <div>
    <hero @main-action="scrollToQuoteForm"/>

    <!-- Main Content of Page   -->
    <div class="max-w-screen-lg mx-auto text-center py-24 md:py-32">
      <gallery-section/>
      <review-section class="pt-24 md:pt-32"/>
      <service-section class="pt-24 md:pt-32"/>
      <matt-section class="pt-24 md:pt-32"/>
      <question-section class="pt-24 md:pt-32"/>
      <quote-section class="pt-24 md:pt-32"/>
    </div>

  </div>
</template>

<script>
import Hero from "@/components/Home/Hero";
import GallerySection from "@/components/Home/GallerySection";
import ReviewSection from "@/components/Home/ReviewSection";
import ServiceSection from "@/components/Home/ServiceSection";
import MattSection from "@/components/Home/MattSection";
import QuestionSection from "@/components/Home/QuestionSection";
import QuoteSection from "@/components/Home/QuoteSection";

import global from "@/mixins/global";

export default {
  name: 'IndexPage',
  mixins: [global],
  components: {
    QuoteSection,
    QuestionSection,
    MattSection,
    ServiceSection,
    ReviewSection,
    Hero,
    GallerySection
  },
  methods: {
    scrollToQuoteForm() {
      document.querySelector('#quoteSection').scrollIntoView({behavior: 'smooth'})
    }
  },
  async fetch() {
    await this.fetchSeoMeta('homepage');
  }
}
</script>

<style scoped>


</style>
